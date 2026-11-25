import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { nav, company } from "../content";
import { asset } from "../lib/asset";
import Icon from "./Icon";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${isActive ? "bg-brand-50 text-brand-700" : "text-ink hover:text-brand-600"}`;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-white focus:px-3 focus:py-2">
        Skip to content
      </a>
      <div className="container-site flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label={`${company.name} home`}>
          <img src={asset("images/logo-blue.png")} alt="" width="56" height="56" className="h-14 w-14" />
          <span className="hidden text-sm font-bold uppercase leading-tight tracking-wide text-brand-700 sm:block">
            J2911<br /><span className="font-medium text-muted">Resources LLC</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="btn-primary hidden sm:inline-flex">
            Book a consultation
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-slate-100 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-slate-200 bg-white md:hidden">
          <div className="container-site flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary mt-2">Book a consultation</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
