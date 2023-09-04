import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents}) {
      addComponents({
        ".container": {
          maxWidth: "1632px",
          paddingLeft: "56",
          paddingRight: "56",
        },
      });
    }),
  ],
}