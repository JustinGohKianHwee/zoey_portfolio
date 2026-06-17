import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F6F4EF",
        surface: "#FAF8F4",
        ink: "#1C1917",
        stone: "#72706B",
        muted: "#A8A49F",
        accent: "#8B7355",
        border: "#D9D5CE",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "650px",
        content: "1200px",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      letterSpacing: {
        widest: "0.2em",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.25, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
