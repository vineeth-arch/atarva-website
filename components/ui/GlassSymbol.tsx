"use client";

import { motion, useReducedMotion } from "framer-motion";

/*
 * SWAP POINT: Replace <AvartaSymbolMark /> with a real asset once provided.
 * Example:
 *   <img src="/avarta-symbol.svg" alt="" aria-hidden="true"
 *        className="w-full h-full object-contain" />
 */

const SIZE_MAP = {
  sm: 160,
  md: 240,
  lg: 320,
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

  return (
    <div
      className={`relative select-none ${className}`}
      style={{ width: px, height: px }}
      aria-hidden="true"
      role="presentation"
    >
      {/* 1. Outer ambient glow pulse */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: "-20%",
          background:
            "radial-gradient(circle, rgba(0,80,255,0.14) 0%, transparent 65%)",
        }}
        animate={
          prefersReducedMotion
            ? {}
            : { scale: [1, 1.08, 1], opacity: [0.55, 0.9, 0.55] }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 2. Glass disc base */}
      <div
        className="absolute inset-0 rounded-full glass-symbol-disc"
        style={{
          background:
            "radial-gradient(circle at 38% 30%, rgba(0,80,255,0.13) 0%, rgba(0,2,43,0.52) 55%, rgba(0,80,255,0.04) 100%)",
          backdropFilter: "blur(18px) saturate(150%)",
          WebkitBackdropFilter: "blur(18px) saturate(150%)",
          border: "1px solid rgba(240,242,248,0.10)",
          boxShadow:
            "inset 0 1px 0 rgba(240,242,248,0.10), 0 0 50px rgba(0,80,255,0.12), 0 2px 8px rgba(0,0,0,0.3)",
        }}
      />

      {/* 3. Rotating symbol mark */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={prefersReducedMotion ? {} : { rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <AvartaSymbolMark size={px * 0.62} />
      </motion.div>

      {/* 4. Counter-rotating outer ring (very subtle, slower) */}
      <motion.div
        className="absolute inset-[8%] rounded-full pointer-events-none"
        style={{
          border: "1px solid rgba(77,163,255,0.08)",
        }}
        animate={prefersReducedMotion ? {} : { rotate: -360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
      />

      {/* 5. Inner rim highlight — simulates top-light glass refraction */}
      <div
        className="absolute inset-[3px] rounded-full pointer-events-none glass-symbol-rim"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 35% 25%, rgba(77,163,255,0.07) 0%, transparent 60%)",
          border: "1px solid rgba(77,163,255,0.12)",
        }}
      />

      {/* 6. Top specular highlight */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "10%",
          left: "20%",
          width: "35%",
          height: "18%",
          background:
            "radial-gradient(ellipse, rgba(240,242,248,0.12) 0%, transparent 70%)",
          filter: "blur(4px)",
        }}
      />
    </div>
  );
}

/* Placeholder vortex symbol mark — concentric spiral arcs */
function AvartaSymbolMark({ size }: { size: number }) {
  const cx = size / 2;
  const cy = size / 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer spiral arc */}
      <path
        d={`M ${cx} ${cy * 0.18} A ${cy * 0.82} ${cy * 0.82} 0 0 1 ${cx + cy * 0.82} ${cy}`}
        stroke="#0050FF"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.45"
      />
      {/* Middle spiral arc */}
      <path
        d={`M ${cx} ${cy * 0.38} A ${cy * 0.62} ${cy * 0.62} 0 0 1 ${cx + cy * 0.62} ${cy}`}
        stroke="#0050FF"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.65"
      />
      {/* Inner spiral arc */}
      <path
        d={`M ${cx} ${cy * 0.6} A ${cy * 0.4} ${cy * 0.4} 0 0 1 ${cx + cy * 0.4} ${cy}`}
        stroke="#4DA3FF"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Centre point */}
      <circle cx={cx} cy={cy} r={size * 0.03} fill="#4DA3FF" opacity="0.9" />
      {/* Outer circle boundary */}
      <circle
        cx={cx}
        cy={cy}
        r={cy * 0.9}
        stroke="#0050FF"
        strokeWidth="0.6"
        opacity="0.18"
      />
    </svg>
  );
}
