/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables toggling via adding 'dark' class on <html> or <body>
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        site: {
          primary: "#0693e3",
          accent: "#9b51e0",
          body: "#32373c",
          meta: "#9aa4ad",
          // Dark variants
          darkBg: "#1a1a1a",
          darkBody: "#e0e0e0",
          darkMeta: "#a0a0a0",
          darkCard: "#2a2a2a",
        },
      },
      boxShadow: {
        site: "6px 6px 9px rgba(0, 0, 0, 0.12)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
}

