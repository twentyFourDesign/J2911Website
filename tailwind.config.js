/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef3fc",
          100: "#d9e4f8",
          200: "#b0c6ef",
          400: "#4a78d4",
          600: "#023ba6",
          700: "#022f86",
          800: "#032566",
          900: "#041a47",
        },
        accent: "#ffe713",
        ink: "#11131a",
        muted: "#5b5f6e",
      },
      fontFamily: {
        sans: ['"Montserrat Variable"', "Montserrat", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "76rem" },
    },
  },
  plugins: [],
};
