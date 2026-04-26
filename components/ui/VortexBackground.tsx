"use client";

import { useEffect, useRef } from "react";

interface VortexBackgroundProps {
  className?: string;
  opacity?: number;
}

export default function VortexBackground({
  className = "",
  opacity = 0.06,
}: VortexBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    let t = 0;

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.45;
      const numArms = 3;
      const numPoints = 180;

      ctx.globalAlpha = 1;

      for (let arm = 0; arm < numArms; arm++) {
        const armOffset = (arm * Math.PI * 2) / numArms;

        ctx.beginPath();
        for (let i = 0; i < numPoints; i++) {
          const frac = i / numPoints;
          const angle = armOffset + frac * Math.PI * 6 + t * 0.008;
          const r = frac * Math.min(w, h) * 0.42;
          const x = cx + r * Math.cos(angle);
          const y = cy + r * Math.sin(angle) * 0.85;

          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        const gradient = ctx.createLinearGradient(cx - 200, cy, cx + 200, cy);
        gradient.addColorStop(0, `rgba(0,80,255,0)`);
        gradient.addColorStop(0.4, `rgba(0,80,255,${opacity * 1.2})`);
        gradient.addColorStop(0.7, `rgba(77,163,255,${opacity * 0.8})`);
        gradient.addColorStop(1, `rgba(77,163,255,0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      for (let i = 0; i < 5; i++) {
        const r = (Math.min(w, h) * 0.1 * (i + 1)) / 2;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,80,255,${opacity * 0.3})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      t += 1;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
