import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // midnight and stellar are theme-adaptive via CSS variables
        midnight: "rgb(var(--c-bg) / <alpha-value>)",
        stellar: "rgb(var(--c-text) / <alpha-value>)",
        // accent colors are brand constants, unchanged across themes
        cobalt: "#0050FF",
        flow: "#4DA3FF",
        orbit: "#1A2A5E",
        indigo: "#2E2B78",
        plum: "#7B4495",
        flux: "#A3518F",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        display: ["clamp(56px,8vw,96px)", { lineHeight: "1", letterSpacing: "0" }],
        h1: ["clamp(44px,5.4vw,68px)", { lineHeight: "0.98", letterSpacing: "0" }],
        h2: ["clamp(30px,3.8vw,46px)", { lineHeight: "1.05", letterSpacing: "0" }],
        h3: ["clamp(21px,2.5vw,30px)", { lineHeight: "1.16", letterSpacing: "0" }],
        "mono-sm": ["13px", { lineHeight: "1.5" }],
      },
      backgroundImage: {
        "gradient-electric": "radial-gradient(circle at 50% 40%, #0035CC 0%, #0050FF 35%, #04033A 75%, #00022B 100%)",
        "gradient-ambient": "radial-gradient(circle at 60% 50%, #0050FF 0%, #0C1996 40%, #04033A 100%)",
        "gradient-orb": "radial-gradient(circle at center, #001FCC 0%, #0035CC 30%, #04033A 65%, #00022B 100%)",
        "gradient-cobalt": "linear-gradient(135deg, #0050FF 0%, #1A2A5E 50%, #04033A 100%)",
        "gradient-banner": "linear-gradient(180deg, #2E2B78 0%, #7B4495 58%, #A3518F 100%)",
        "gradient-card": "linear-gradient(145deg, rgba(0,80,255,0.08) 0%, rgba(0,2,43,0.6) 100%)",
        "gradient-subtle": "linear-gradient(180deg, #00022B 0%, #04033A 50%, #0a0433 100%)",
      },
      boxShadow: {
        "cobalt-glow": "0 0 40px rgba(0,80,255,0.25), 0 0 80px rgba(0,80,255,0.1)",
        "flow-glow": "0 0 20px rgba(77,163,255,0.3)",
        "card-hover": "0 0 0 1px rgba(0,80,255,0.4), 0 8px 32px rgba(0,80,255,0.15)",
      },
      animation: {
        "vortex-slow": "vortex 60s linear infinite",
        "pulse-slow": "pulse 6s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        vortex: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
