/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#88AB8E",
        "primary-2": "#AFC8AD",
        "sub-1": "#EEE7DA",
        "sub-2": "#F2F1EB",
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
        intro: "intro 2s ease-in-out"
      },
    },
  },
  plugins: [],
};
