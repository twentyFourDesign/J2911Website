import { services } from "../content";
import useTitle from "../lib/useTitle";
import Icon from "../components/Icon";
import Photo from "../components/Photo";
import Reveal from "../components/Reveal";
import PageHeader from "../components/PageHeader";
import CtaBand from "../components/CtaBand";

export default function Services() {
  useTitle("Services");

  return (
    <>
      <PageHeader eyebrow="Our services" title="Leverage our expertise">
        <p>Five connected practice areas, one partner. Engage us for a single project or bring us in across technology, strategy and policy.</p>
      </PageHeader>

      <nav aria-label="Service areas" className="sticky top-20 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <ul className="container-site flex gap-2 overflow-x-auto py-3 text-sm font-semibold">
          {services.map((s) => (
            <li key={s.id} className="shrink-0">
              <a href={`#${s.id}`} className="block rounded-full px-4 py-2 text-muted hover:bg-brand-50 hover:text-brand-700">{s.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {services.map((s, idx) => (
        <section key={s.id} id={s.id} aria-labelledby={`${s.id}-heading`} className={`py-20 sm:py-24 ${idx % 2 ? "bg-slate-50" : "bg-white"}`}>
          <div className="container-site">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <Reveal className={idx % 2 ? "lg:order-2" : ""}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white"><Icon name={s.icon} className="h-6 w-6" /></span>
                <h2 id={`${s.id}-heading`} className="mt-6 text-3xl font-semibold sm:text-4xl">{s.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted">{s.summary}</p>
              </Reveal>
              <Reveal delay={100}>
                <Photo name={s.image.src} alt={s.image.alt} className="aspect-[16/10] w-full rounded-3xl" />
              </Reveal>
            </div>

            <div className={`mt-14 grid gap-5 ${s.groups.length > 1 ? "md:grid-cols-2" : ""}`}>
              {s.groups.map((g, gi) => (
                <Reveal key={g.title} delay={gi * 60} className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8">
                  <h3 className="flex items-center gap-3 text-lg font-semibold">
                    {s.groups.length > 1 && <span className="text-sm font-bold text-brand-600">{String(gi + 1).padStart(2, "0")}</span>}
                    {g.title}
                  </h3>
                  <ul className={`mt-6 grid gap-6 ${s.groups.length === 1 ? "md:grid-cols-3" : ""}`}>
                    {g.items.map(([title, body]) => (
                      <li key={title} className="flex gap-3">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                        <div>
                          <p className="font-semibold">{title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand title="Have a project in mind?" body="Tell us what you're working on and we'll arrange a free consultation." />
    </>
  );
}
