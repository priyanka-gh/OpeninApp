/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    borderRadius: {
      sm: "10px",
      lg: "20px",
      xl: "34px",
      xxl: "184px",
    },
    fontFamily: {
      lato: ["Lato"],
      montserrat: ["Montserrat"],
      poppins: ["Poppins"],
      openSans: ["Open Sans", "sans"],
      Figtree: ["Figtree"],
    },
    colors: {
      roshi: "var(--supportive-roshi-100, #3CC952)",
    },
    screens: {
      xxl: { max: "1370px", min: "1025px" },
      xl: { max: "1024px", min: "639px" },
      sm: { max: "640px", min: "460px" },
      xs: { max: "459px", min: "150px" },
    },
  },
  plugins: [],
};
