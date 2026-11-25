// Vercel serverless function: POST /api/contact
// Sends contact-form enquiries through an SMTP mailbox (e.g. the cPanel mailbox).
//
// Environment variables (Vercel → Settings → Environment Variables):
//   SMTP_HOST     e.g. mail.24group.com.ng
//   SMTP_PORT     465 (SSL) or 587 (STARTTLS). Default 465.
//   SMTP_USER     full mailbox address used to log in
//   SMTP_PASS     mailbox password
//   CONTACT_TO    where enquiries are delivered (comma-separate for several). Default: SMTP_USER
//   CONTACT_FROM  optional display sender, must be the SMTP mailbox or an alias of it. Default: SMTP_USER
import nodemailer from "nodemailer";
import { contact } from "../src/content.js";

const SERVICES = contact.serviceOptions;
const LIMITS = { name: 120, email: 200, organisation: 200, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Best-effort rate limit per warm function instance: 5 messages per IP per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const clean = (value, max) => String(value ?? "").replace(/\r/g, "").trim().slice(0, max);
const oneLine = (value) => value.replace(/\s+/g, " "); // no header injection
const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

async function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body || "{}");
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
}

let transporter;
function getTransporter() {
  if (transporter) return transporter;
  const port = Number(process.env.SMTP_PORT || 465);
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
  return transporter;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("contact: SMTP environment variables are not set");
    return res.status(503).json({ error: "not_configured" });
  }

  let body;
  try {
    body = await readBody(req);
  } catch {
    return res.status(400).json({ error: "Invalid request" });
  }

  // Honeypot: pretend success so bots don't retry.
  if (clean(body.website, 200)) return res.status(200).json({ ok: true });

  const ip = String(req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown").split(",")[0].trim();
  if (rateLimited(ip)) return res.status(429).json({ error: "Too many messages. Please try again later." });

  const name = oneLine(clean(body.name, LIMITS.name));
  const email = oneLine(clean(body.email, LIMITS.email));
  const organisation = oneLine(clean(body.organisation, LIMITS.organisation));
  const projectType = SERVICES.includes(body.projectType) ? body.projectType : "";
  const message = clean(body.message, LIMITS.message);

  const errors = {};
  if (!name) errors.name = "Please enter your name";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address";
  if (!projectType) errors.projectType = "Please choose a service";
  if (message.length < 10) errors.message = "Please tell us a little more";
  if (Object.keys(errors).length) return res.status(422).json({ error: "Please check the form", fields: errors });

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Organisation", organisation || "—"],
    ["Service", projectType],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}\n\n— Sent from the J2911 website contact form`;
  const html = `
    <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      ${rows.map(([k, v]) => `<tr><td style="padding:4px 16px 4px 0;color:#5b5f6e">${k}</td><td style="padding:4px 0"><strong>${escapeHtml(v)}</strong></td></tr>`).join("")}
    </table>
    <p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap;margin-top:16px">${escapeHtml(message)}</p>
    <p style="font-family:Arial,sans-serif;font-size:12px;color:#5b5f6e">Sent from the J2911 website contact form</p>`;

  const from = process.env.CONTACT_FROM || SMTP_USER;
  try {
    await getTransporter().sendMail({
      from: { name: "J2911 Website", address: from },
      to: process.env.CONTACT_TO || SMTP_USER,
      replyTo: { name, address: email },
      subject: `New enquiry: ${projectType} from ${name}`,
      text,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("contact: send failed", error?.code, error?.response || error?.message);
    transporter = undefined; // rebuild the connection next time
    return res.status(502).json({ error: "send_failed" });
  }
}
