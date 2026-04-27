"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed right-5 bottom-8 z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flow"
      style={{
        width: 64,
        height: 64,
        borderRadius: "50%",
        // Dark mode: crescent — inset shadow in page-background colour cuts away upper-right of the circle
        // Light mode: full warm yellow circle (sun)
        background: isDark
          ? "#020c38"
          : "linear-gradient(135deg, #fcd93a 0%, #f07c20 100%)",
        boxShadow: isDark
          ? "inset -20px 10px 0 0 #030730, 0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(77,163,255,0.18)"
          : "0 4px 24px rgba(249,201,35,0.55), 0 0 0 2px rgba(240,124,32,0.25)",
        transition: "background 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      {/* Both icons always shown — active is full brightness, inactive dimmed to 10% */}
      <div className="flex items-center justify-center gap-2.5">
        <span
          style={{ opacity: isDark ? 1 : 0.10, transition: "opacity 0.3s" }}
          aria-hidden="true"
        >
          <MoonIcon dark={isDark} />
        </span>
        <span
          style={{ opacity: isDark ? 0.10 : 1, transition: "opacity 0.3s" }}
          aria-hidden="true"
        >
          <SunIcon dark={isDark} />
        </span>
      </div>
    </button>
  );
}

function MoonIcon({ dark }: { dark: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke={dark ? "rgba(200,225,255,1)" : "rgba(200,225,255,0.9)"}
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon({ dark }: { dark: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke={dark ? "rgba(253,220,60,0.9)" : "rgba(120,50,0,1)"}
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}
