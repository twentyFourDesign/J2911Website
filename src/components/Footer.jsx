import { Link } from "react-router";
import { company, nav, services } from "../content";
import { asset } from "../lib/asset";
import Icon from "./Icon";

const socialLabels = { linkedin: "LinkedIn", x: "X", facebook: "Facebook", instagram: "Instagram" };

export default function Footer() {
  const socials = Object.entries(company.social).filter(([, url]) => url);

  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <img src={asset("images/logo-white.png")} alt={company.name} width="96" height="96" className="h-24 w-24" loading="lazy" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">{company.summary}</p>
          {socials.length > 0 && (
            <ul className="mt-6 flex gap-3">
              {socials.map(([key, url]) => (
                <li key={key}>
                  <a href={url} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10">
                    <Icon name={key} className="h-4 w-4" />
                    <span className="sr-only">{socialLabels[key]}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="md:col-span-2">
          <h2 className="text-sm font-semibold text-white">Company</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.to}><Link to={item.to} className="hover:text-white">{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-sm font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.id}><Link to={`/services#${s.id}`} className="hover:text-white">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-sm font-semibold text-white">Get in touch</h2>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <address className="not-italic">{company.address.map((line) => <span key={line} className="block">{line}</span>)}</address>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <a href={company.phoneHref} className="hover:text-white">{company.phone}</a>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
