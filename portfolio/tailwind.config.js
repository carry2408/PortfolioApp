/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        backendDark: "#000000",
        backendPanel: "#0a0a0a",
        backendCard: "#111111",
        backendBorder: "#222222",
      },
    },
  },
  plugins: [],
}
