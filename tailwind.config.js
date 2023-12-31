/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "footer-color": "#2c3440",
        "body-color": "#14181c",
        "text-color": "#9ab",
        "footer-about": "#bce",
        "footer-copywrite": "#89a",
        "header-bar-color": "#13181c",
        "dark-green": "#02ac1c",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
