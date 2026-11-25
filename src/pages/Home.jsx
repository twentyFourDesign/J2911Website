import { Link } from "react-router";
import { home, services, values } from "../content";
import useTitle from "../lib/useTitle";
import Icon from "../components/Icon";
import Photo from "../components/Photo";
import Reveal from "../components/Reveal";
import ContactSection from "../components/ContactSection";

export default function Home() {
  useTitle();
  const { hero, intro } = home;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-1/2 bg-brand-50 lg:block" />
        <div className="container-site relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
          <Reveal>
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">{hero.title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{hero.body}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to={hero.primaryCta.to} className="btn-primary">
                {hero.primaryCta.label} <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link to={hero.secondaryCta.to} className="btn-ghost">{hero.secondaryCta.label}</Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <Photo name={hero.image.src} alt={hero.image.alt} eager className="aspect-[4/3] w-full rounded-3xl shadow-2xl shadow-brand-900/20" />
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-slate-200 sm:left-auto sm:right-6 sm:w-72">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Five practice areas</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">ICT · Education · Business Development · Policy · Strategic Partnerships</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 sm:py-28" aria-labelledby="services-heading">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Our services</p>
            <h2 id="services-heading" className="mt-4 text-3xl font-semibold sm:text-4xl">Expertise where it matters most</h2>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal as="li" key={s.id} delay={i * 60}>
                <Link to={`/services#${s.id}`} className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                    Learn more <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
            <Reveal as="li" delay={services.length * 60}>
              <div className="flex h-full flex-col justify-between rounded-3xl bg-brand-600 p-7 text-white">
                <div>
                  <h3 className="text-xl font-semibold">Not sure where to start?</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-100">Tell us about your challenge and we&apos;ll point you to the right expertise.</p>
                </div>
                <Link to="/contact" className="btn-accent mt-6 self-start">Book a free consultation</Link>
              </div>
            </Reveal>
          </ul>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Photo name={intro.image.src} alt={intro.image.alt} className="aspect-[5/4] w-full rounded-3xl" />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">{intro.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{intro.title}</h2>
            <p className="mt-6 border-l-4 border-accent pl-5 text-lg font-medium">{intro.lead}</p>
            <p className="mt-5 leading-relaxed text-muted">{intro.body}</p>
            <Link to={intro.cta.to} className="btn-ghost mt-8">{intro.cta.label} <Icon name="arrow" className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative overflow-hidden bg-brand-800 py-20 text-white sm:py-28" aria-labelledby="why-heading">
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full border-[60px] border-white/5" />
        <div className="container-site relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow eyebrow-light">Why choose us</p>
            <h2 id="why-heading" className="mt-4 text-3xl font-semibold sm:text-4xl">{home.whyTitle}</h2>
            <p className="mt-5 leading-relaxed text-brand-100">{home.whyBody}</p>
          </Reveal>
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 60} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-sm font-bold text-ink">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-100">{v.body}</p>
              </Reveal>
            ))}
            <Reveal as="li" delay={values.length * 60} className="flex items-end rounded-3xl p-7">
              <p className="text-2xl font-semibold leading-snug">{home.closing}</p>
            </Reveal>
          </ol>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
