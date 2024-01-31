/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px", // => @media (min-width: 640px) { ... }
      md: "768px", // => @media (min-width: 768px) { ... }
      lg: "1024px", // => @media (min-width: 1024px) { ... }
      xl: "1350px", // => @media (min-width: 1280px) { ... }
      "2xl": "1536px", // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        // See src/styles/fonts.css
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["'PT Serif'", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        brand: colors.red[500], // brand: "#ef4444",
        gray: {
          light: colors.slate[100], // light: "#f1f5f9",
          dark: colors.slate[900], // darl: "#94a3b8"
        },
      },
    },
  },
  plugins: [
    require("./screensDetector"),
    function ({ addUtilities }) {
      addUtilities({
        ".sr-only, .visually-hidden": {
          position: "absolute",
          height: "1px",
          width: "1px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          clipPath: "inset(50%)",
        },
        ".not-sr-only": {
          position: "static",
          height: "auto",
          width: "auto",
          overflow: "visible",
          whiteSpace: "normal",
          clipPath: "none",
        },
      });
    },
    function ({ addComponents }) {
      addComponents({
        ".brdr": {
          border: "red 1px solid",
        },
        ".brdr-b": {
          border: "blue 1px solid",
        },
        ".brdr-g": {
          border: "green 1px solid",
        },
        // Центрирование с помощью flex
        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        // Абсолютное центрирование
        ".abs-center": {
          position: "absolute",
          left: "50%",
          top: "50%",
          transformTranslateX: "-50%",
          transformTranslateY: "-50%",
        },
        // Фоновое изображение
        ".bg-default": {
          backgroundSize: "auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // Использовать в сочетании с background-image:
          // bg-[url('../img/icon.svg')]
          // background-image: var(--icon);
        },
        // Маска
        ".mask-default": {
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "auto",
          // Использовать в сочетании с mask-image:
          // mask-image: url(../img/icon.svg);
          // mask-image: var(--icon);
        },
        //
      });
    },
  ],
  corePlugins: {
    accessibility: false,
  },
};
