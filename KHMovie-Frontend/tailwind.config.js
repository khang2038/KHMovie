import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1680px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'max': '767px'},

      'sm': {'max': '639px'},  
    },
  },
  plugins: [
    plugin(function ({ addComponents}) {
      addComponents({
        ".container": {
          maxWidth: "1920px",
          paddingLeft: "56px",
          paddingRight: "56px",
        },
      });
    }),
  ],
}