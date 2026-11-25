import { Link } from "react-router";
import Icon from "./Icon";

export default function CtaBand({ title = "Ready to take the next step?", body = "Book a free consultation and let's talk about where you want to go.", cta = "Talk to us" }) {
  return (
    <section className="container-site py-16">
      <div className="relative flex flex-col gap-6 overflow-hidden rounded-3xl bg-brand-600 px-8 py-12 text-white sm:px-12 md:flex-row md:items-center md:justify-between">
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full border-[36px] border-white/10" />
        <div className="relative max-w-xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
          <p className="mt-3 text-brand-100">{body}</p>
        </div>
        <Link to="/contact" className="btn-accent relative self-start md:self-auto">
          {cta} <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
