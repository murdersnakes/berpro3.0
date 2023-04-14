/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ["var(--font-head)"],
        body: ["var(--font-body)"],
      },
      colors: {
        dark: "#030712",
        light: "#d4d4d4",
        acc1: "#10b981",
        acchov1: "#059669",
        acc2: "#4f46e5",
        acchov2: "#6366f1",
        acc3: "#f87171",
        acchov3: "#ef4444",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('autoprefixer'),
  ],
};
