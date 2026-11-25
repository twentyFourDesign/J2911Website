// Resolve files in /public against the configured base path.
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

// Responsive WebP photo set generated into /public/images (<name>.webp and <name>-800.webp).
export const photo = (name) => ({
  src: asset(`images/${name}.webp`),
  srcSet: `${asset(`images/${name}-800.webp`)} 800w, ${asset(`images/${name}.webp`)} 1600w`,
});
