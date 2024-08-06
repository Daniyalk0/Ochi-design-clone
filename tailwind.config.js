/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["MyCustomFont", "sans-serif"],
        new: ["MyCustomFont2", "sans-serif"],
      },
    },
    screens: {
      mobile_l: { max: "425px" },
      mobile_m: { max: "375px" },
      mobile_s: { max: "320px" },
      tablet: { max: "768px" },
      mobileAndTablet: { max: "950px", min: "0px" },
    },
  },
  plugins: [],
};
