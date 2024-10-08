/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1",
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235",
        },
        primary:{
          700: "#2f478d",
          500: "#2b77e7",
        }
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        worksans: ['var(--font-work-sans)'],
      },
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        default:
          "0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, .25)",
      },
    },
  },
  plugins: [],
};
