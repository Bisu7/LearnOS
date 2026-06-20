import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        learnos: {
          background: "#0a0a0f",
          surface: "#111118",
          border: "#1e1e2e",
          accent: "#7c6af7",
          glow: "#a78bfa",
          muted: "#3b3b52",
          text: "#e2e2f0",
          subtext: "#9090b0",
        },
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(124, 106, 247, 0)" },
          "50%": { boxShadow: "0 0 20px rgba(124, 106, 247, 0.5)" },
        },
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
