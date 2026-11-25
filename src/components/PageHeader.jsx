export default function PageHeader({ eyebrow, title, children }) {
  return (
    <section className="relative overflow-hidden bg-brand-800 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border-[40px] border-white/5" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-10 top-10 h-60 w-60 rounded-full border-[24px] border-white/5" />
      <div className="container-site relative py-16 sm:py-24">
        {eyebrow && <p className="eyebrow eyebrow-light">{eyebrow}</p>}
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-100">{children}</div>}
      </div>
    </section>
  );
}
