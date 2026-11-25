import { about, values } from "../content";
import useTitle from "../lib/useTitle";
import Photo from "../components/Photo";
import Reveal from "../components/Reveal";
import PageHeader from "../components/PageHeader";
import CtaBand from "../components/CtaBand";

function Statement({ block, flip }) {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <Reveal className={flip ? "lg:order-2" : ""}>
          <Photo name={block.image.src} alt={block.image.alt} className="aspect-[4/3] w-full rounded-3xl" />
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow">{block.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{block.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">{block.body}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default function About() {
  useTitle("About us");

  return (
    <>
      <PageHeader eyebrow="About us" title={about.title}>
        <p>{about.intro}</p>
      </PageHeader>

      <Statement block={about.vision} />
      <div className="container-site"><hr className="border-slate-200" /></div>
      <Statement block={about.mission} flip />

      <section className="bg-slate-50 py-20 sm:py-24" aria-labelledby="values-heading">
        <div className="container-site">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">How we work</p>
            <h2 id="values-heading" className="mt-4 text-3xl font-semibold sm:text-4xl">What you can expect from us</h2>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 60} className="rounded-3xl bg-white p-6 ring-1 ring-slate-200">
                <span className="block h-1 w-8 rounded-full bg-accent" />
                <h3 className="mt-5 font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
