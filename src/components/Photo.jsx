import { photo } from "../lib/asset";

export default function Photo({ name, alt, className = "", sizes = "(min-width: 1024px) 50vw, 100vw", eager = false }) {
  const { src, srcSet } = photo(name);
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
      className={`object-cover ${className}`}
    />
  );
}
