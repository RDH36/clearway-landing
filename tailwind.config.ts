import type { Config } from "tailwindcss";

// Tokens mirror the Clearway app (design brief §3). Dark is the primary theme,
// so the palette below is the dark set — the landing page is dark-only.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0E1B1F", // deep petrol — clean night air
        surface: "#16282E", // cards, elevated surfaces
        haze: "#33474C", // early-streak fog
        ink: "#EAF4F2", // primary text, headlines
        muted: "#7E9A9B", // labels, captions
        clear: "#5BE0C6", // fresh-air aqua — accent, CTA
        dawn: "#FFB57A", // warm sunrise — milestones
        warn: "#C08A77", // muted terracotta
        line: "#23383E", // hairlines, dividers
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        button: "16px",
      },
      maxWidth: {
        content: "1120px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.55" },
          "50%": { transform: "scale(1.12)", opacity: "0.9" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.2, 0.7, 0.3, 1) both",
        breathe: "breathe 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
