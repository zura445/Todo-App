/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "light-image": "url('/images/light-image.jpg')",
        "darck-image": "url('/images/darck-image.jpg')",
      },
      colors: {
        darck: "#25273D",
        gray: "#C8CBE7",
        lightGray: "#E3E4F1",
        darckGray: "#393A4B",
        mediumGray: "#9495A5",
        blue: "#3A7CFD",
        lightDark: "#5B5E7E",
        maxGray: "#D1D2DA",
      },
    },
  },
  plugins: [],
};
