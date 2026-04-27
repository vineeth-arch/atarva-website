"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed right-5 bottom-8 z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flow focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
    >
      {/* Pill track */}
      <div
        className="relative flex items-center rounded-full transition-colors duration-300"
        style={{
          width: 76,
          height: 38,
          background: isDark
            ? "linear-gradient(135deg, rgba(0,2,43,0.92) 0%, rgba(0,20,80,0.85) 100%)"
            : "linear-gradient(135deg, #dde4ff 0%, #f0f3ff 100%)",
          border: isDark
            ? "1px solid rgba(77,163,255,0.22)"
            : "1px solid rgba(0,2,43,0.12)",
          boxShadow: isDark
            ? "0 4px 20px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)"
            : "0 4px 16px rgba(0,2,43,0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        {/* Moon icon — left */}
        <span
          className="absolute left-0 flex items-center justify-center transition-opacity duration-300"
          style={{ width: 38, height: 38, opacity: isDark ? 1 : 0.35 }}
          aria-hidden="true"
        >
          <MoonIcon />
        </span>

        {/* Sun icon — right */}
        <span
          className="absolute right-0 flex items-center justify-center transition-opacity duration-300"
          style={{ width: 38, height: 38, opacity: isDark ? 0.35 : 1 }}
          aria-hidden="true"
        >
          <SunIcon />
        </span>

        {/* Sliding indicator */}
        <motion.div
          className="absolute rounded-full"
          animate={{ x: isDark ? 3 : 41 }}
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
          style={{
            width: 32,
            height: 32,
            top: 3,
            background: isDark
              ? "linear-gradient(135deg, #1a3fff 0%, #4DA3FF 100%)"
              : "linear-gradient(135deg, #f9c923 0%, #f5a623 100%)",
            boxShadow: isDark
              ? "0 2px 10px rgba(0,80,255,0.55)"
              : "0 2px 10px rgba(245,166,35,0.55)",
          }}
        />
      </div>
    </button>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="rgba(180,210,255,0.9)" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="rgba(180,100,0,0.9)" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
