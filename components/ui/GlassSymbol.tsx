"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const SIZE_MAP = {
  sm: 168,
  md: 248,
  lg: 340,
} as const;

interface GlassSymbolProps {
  size?: keyof typeof SIZE_MAP;
  className?: string;
}

export default function GlassSymbol({
  size = "lg",
  className = "",
}: GlassSymbolProps) {
  const prefersReducedMotion = useReducedMotion();
  const px = SIZE_MAP[size];
  const markSize = Math.round(px * 0.66);

  return (
    <div
      className={`relative select-none ${className}`}
      style={{ width: px, height: px }}
      aria-hidden="true"
      role="presentation"
    >
      <div
        className="absolute inset-[-13%] rounded-full opacity-90"
        style={{
          background:
            "radial-gradient(circle, rgba(0,80,255,0.20) 0%, rgba(123,68,149,0.09) 38%, transparent 68%)",
          filter: "blur(4px)",
        }}
      />

      <div
        className="absolute inset-0 rounded-full glass-symbol-disc"
        style={{
          background:
            "radial-gradient(circle at 34% 24%, rgba(240,242,248,0.15) 0%, rgba(77,163,255,0.12) 24%, rgba(7,16,86,0.44) 56%, rgba(3,7,48,0.12) 100%)",
          backdropFilter: "blur(22px) saturate(155%)",
          WebkitBackdropFilter: "blur(22px) saturate(155%)",
          border: "1px solid rgba(240,242,248,0.13)",
          boxShadow:
            "inset 0 1px 0 rgba(240,242,248,0.16), inset 18px 20px 42px rgba(240,242,248,0.035), 0 26px 90px rgba(0,80,255,0.18), 0 8px 28px rgba(0,0,0,0.28)",
        }}
      />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={prefersReducedMotion ? {} : { rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <div className="relative" style={{ width: markSize, height: markSize }}>
          <Image
            src="/logos/avarta-mark-color.svg"
            alt=""
            fill
            sizes={`${markSize}px`}
            className="object-contain opacity-95"
            style={{
              filter:
                "drop-shadow(0 0 18px rgba(0,80,255,0.28)) drop-shadow(0 16px 34px rgba(0,2,43,0.28))",
            }}
            priority
          />
          <Image
            src="/logos/avarta-mark-white.svg"
            alt=""
            fill
            sizes={`${markSize}px`}
            className="object-contain opacity-25 mix-blend-screen"
            style={{
              transform: "translate3d(-6px, -8px, 22px) scale(0.985)",
              filter: "blur(0.4px)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(130deg, rgba(255,255,255,0.38) 0%, transparent 26%, transparent 64%, rgba(77,163,255,0.18) 100%)",
              mixBlendMode: "screen",
              clipPath: "circle(48% at 50% 50%)",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-[8%] rounded-full pointer-events-none"
        style={{
          border: "1px solid rgba(77,163,255,0.14)",
          boxShadow: "inset 0 0 30px rgba(77,163,255,0.07)",
        }}
        animate={prefersReducedMotion ? {} : { rotate: -360 }}
        transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
      />

      <div
        className="absolute inset-[3px] rounded-full pointer-events-none glass-symbol-rim"
        style={{
          background:
            "radial-gradient(ellipse 62% 42% at 34% 22%, rgba(240,242,248,0.20) 0%, rgba(77,163,255,0.07) 34%, transparent 67%)",
          border: "1px solid rgba(77,163,255,0.18)",
        }}
      />

      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "9%",
          left: "21%",
          width: "36%",
          height: "16%",
          background:
            "radial-gradient(ellipse, rgba(240,242,248,0.22) 0%, transparent 72%)",
          filter: "blur(5px)",
          transform: "rotate(-18deg)",
        }}
      />
    </div>
  );
}
