import { Link } from "react-router";
import useTitle from "../lib/useTitle";

export default function NotFound() {
  useTitle("Page not found");
  return (
    <section className="container-site flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">We couldn&apos;t find that page</h1>
      <p className="mt-5 max-w-lg text-muted">The link may be out of date or the page may have moved.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/" className="btn-primary">Back to home</Link>
        <Link to="/contact" className="btn-ghost">Contact us</Link>
      </div>
    </section>
  );
}
