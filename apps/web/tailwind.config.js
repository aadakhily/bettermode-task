/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        sm: "650px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    fontFamily: {
      sans: ["Vazirmatn", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [],
};
