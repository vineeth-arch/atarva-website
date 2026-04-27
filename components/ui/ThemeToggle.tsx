"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed z-[90] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flow focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
      style={{
        width: 120,
        height: 60,
        padding: 4,
        borderRadius: 9999,
        position: "fixed",
        right: "max(1.25rem, calc(env(safe-area-inset-right) + 1rem))",
        bottom: "max(1.5rem, calc(env(safe-area-inset-bottom) + 1rem))",
        overflow: "hidden",
        background: isDark
          ? "linear-gradient(145deg, #06066e 0%, #1414b8 50%, #0a0aaa 100%)"
          : "linear-gradient(145deg, #e8a800 0%, #fcd93a 50%, #ffe566 100%)",
        border: isDark
          ? "1px solid rgba(157, 183, 255, 0.32)"
          : "1px solid rgba(191, 129, 0, 0.4)",
        zIndex: 90,
        boxShadow: isDark
          ? "inset 0 2px 8px rgba(0,0,50,0.6), 0 4px 20px rgba(0,0,200,0.35), 0 0 0 1px rgba(77,163,255,0.2)"
          : "inset 0 2px 8px rgba(120,80,0,0.25), 0 4px 20px rgba(249,180,0,0.45), 0 0 0 1px rgba(220,140,0,0.35)",
        transition: "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
        cursor: "pointer",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 3,
          borderRadius: 9999,
          background: isDark
            ? "linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.02) 42%, rgba(0,0,0,0.08) 100%)"
            : "linear-gradient(180deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.08) 45%, rgba(166,96,0,0.1) 100%)",
          boxShadow: isDark
            ? "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.18)"
            : "inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(176,104,0,0.12)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: isDark ? 60 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: isDark
            ? "radial-gradient(circle at 38% 32%, #3838f5 0%, #0a0aaa 100%)"
            : "radial-gradient(circle at 38% 32%, #fff9c0 0%, #f5c31a 100%)",
          boxShadow: isDark
            ? "0 2px 12px rgba(0,0,200,0.55), inset 0 1px 0 rgba(150,160,255,0.45)"
            : "0 2px 12px rgba(200,140,0,0.5), inset 0 1px 0 rgba(255,255,200,0.75)",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.18 }}
              style={{ display: "flex" }}
            >
              <MoonIcon />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.18 }}
              style={{ display: "flex" }}
            >
              <SunIcon />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(255,255,255,0.95)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
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

function MoonIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="white"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      <path d="M18 2.5l.4 1.1 1.1.4-1.1.4-.4 1.1-.4-1.1-1.1-.4 1.1-.4z" />
    </svg>
  );
}
