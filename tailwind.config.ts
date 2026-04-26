import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#00022B",
        cobalt: "#0050FF",
        flow: "#00E5C3",
        stellar: "#F0F2F8",
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
        display: ["clamp(56px,8vw,96px)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        h1: ["clamp(40px,5vw,56px)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h2: ["clamp(26px,3.5vw,36px)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        h3: ["clamp(20px,2.5vw,26px)", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
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
        "flow-glow": "0 0 20px rgba(0,229,195,0.3)",
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
