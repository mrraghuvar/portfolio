/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: "#2563eb", // blue-600
        dark: "#020617",
      },
    },
  },
  plugins: [],
};
