import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { company, contact } from "../content";
import Icon from "./Icon";
import Reveal from "./Reveal";

const { VITE_SERVICE_KEY, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY } = import.meta.env;

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink">{label}</label>
      {children}
      {error && <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-red-600">{error.message}</p>}
    </div>
  );
}

export default function ContactSection({ headingLevel = "h2" }) {
  const Heading = headingLevel;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    if (data.website) return; // honeypot: bots fill hidden fields
    if (!VITE_SERVICE_KEY || !VITE_TEMPLATE_ID || !VITE_PUBLIC_KEY) {
      toast.error(`The form isn't configured yet. Please email us at ${company.email}.`);
      return;
    }
    try {
      await emailjs.send(
        VITE_SERVICE_KEY,
        VITE_TEMPLATE_ID,
        { name: data.name, email: data.email, organisation: data.organisation || "", projectType: data.projectType, message: data.message },
        { publicKey: VITE_PUBLIC_KEY },
      );
      toast.success("Thanks, your message has been sent. We'll be in touch shortly.");
      reset();
    } catch (error) {
      console.error(error);
      // Keep what the visitor typed so they can retry.
      toast.error(`Sorry, something went wrong. Please try again or email ${company.email}.`);
    }
  };

  const fieldProps = (name) => ({
    id: name,
    "aria-invalid": errors[name] ? "true" : "false",
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    className: `field ${errors[name] ? "field-error" : ""}`,
  });

  return (
    <section className="bg-brand-50/60 py-20 sm:py-28" aria-labelledby="contact-heading">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">{contact.eyebrow}</p>
          <Heading id="contact-heading" className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">{contact.title}</Heading>
          <p className="mt-5 leading-relaxed text-muted">{contact.body}</p>

          <ul className="mt-10 space-y-5">
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm"><Icon name="mail" /></span>
              <div><p className="text-sm text-muted">Email</p><a href={`mailto:${company.email}`} className="font-semibold hover:text-brand-600">{company.email}</a></div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm"><Icon name="phone" /></span>
              <div><p className="text-sm text-muted">Phone</p><a href={company.phoneHref} className="font-semibold hover:text-brand-600">{company.phone}</a></div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm"><Icon name="pin" /></span>
              <div><p className="text-sm text-muted">Location</p><address className="font-semibold not-italic">{company.address.join(", ")}</address></div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <form noValidate onSubmit={handleSubmit(onSubmit)} className="grid gap-5 rounded-3xl bg-white p-6 shadow-xl shadow-brand-900/5 ring-1 ring-slate-200 sm:grid-cols-2 sm:p-10">
            <Field id="name" label="Full name" error={errors.name}>
              <input type="text" autoComplete="name" {...fieldProps("name")} {...register("name", { required: "Please enter your name" })} />
            </Field>
            <Field id="email" label="Email address" error={errors.email}>
              <input
                type="email"
                autoComplete="email"
                {...fieldProps("email")}
                {...register("email", {
                  required: "Please enter your email",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, message: "Please enter a valid email address" },
                })}
              />
            </Field>
            <Field id="organisation" label="Organisation (optional)" error={errors.organisation}>
              <input type="text" autoComplete="organization" {...fieldProps("organisation")} {...register("organisation")} />
            </Field>
            <Field id="projectType" label="Service of interest" error={errors.projectType}>
              <select defaultValue="" {...fieldProps("projectType")} {...register("projectType", { required: "Please choose a service" })}>
                <option value="" disabled>Select a service</option>
                {contact.serviceOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </Field>
            <div className="sm:col-span-2">
              <Field id="message" label="How can we help?" error={errors.message}>
                <textarea rows={5} {...fieldProps("message")} {...register("message", { required: "Please add a short message", minLength: { value: 10, message: "Please tell us a little more" } })} />
              </Field>
            </div>
            <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register("website")} />
            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted">We&apos;ll only use your details to respond to your enquiry.</p>
              <button type="submit" className="btn-primary" disabled={isSubmitting}>
                {isSubmitting ? "Sending…" : "Send message"}
                {!isSubmitting && <Icon name="arrow" className="h-4 w-4" />}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
