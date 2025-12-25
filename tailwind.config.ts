import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E5BFF",
        primaryDark: "#0F3DFF",
        textDark: "#0F172A",
        textGray: "#475569",
        sectionGray: "#F8FAFC"
      }
    }
  },
  plugins: []
};

export default config;
