"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps = [
  {
    number: "01",
    title: "Understand the System",
    description:
      "Map constraints, forces, stakeholders, and hidden dependencies before drawing conclusions.",
    coordinate: { x: 142, y: 158 },
  },
  {
    number: "02",
    title: "Diagnose from First Principles",
    description:
      "Return to fundamentals so the real leverage point is separated from noise.",
    coordinate: { x: 330, y: 86 },
  },
  {
    number: "03",
    title: "Shape the Right Intervention",
    description:
      "Design a proportionate response using whichever disciplines the problem requires.",
    coordinate: { x: 524, y: 180 },
  },
  {
    number: "04",
    title: "Build Capability, Not Dependency",
    description:
      "Transfer understanding so partners leave stronger, sharper, and more capable.",
    coordinate: { x: 702, y: 102 },
  },
];

function MethodField() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-sm border border-subtle method-field px-5 py-8 md:px-8 md:py-10">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 22% 26%, rgba(77,163,255,0.16), transparent 28%), radial-gradient(circle at 72% 34%, rgba(163,81,143,0.13), transparent 30%), linear-gradient(135deg, rgba(240,242,248,0.04), transparent 42%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,242,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(240,242,248,1) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "radial-gradient(circle at 50% 45%, black, transparent 72%)",
        }}
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 840 292"
        className="relative z-10 hidden h-auto w-full md:block"
        role="img"
        aria-labelledby="method-diagram-title"
      >
        <title id="method-diagram-title">Avarta methodology system map</title>
        <defs>
          <linearGradient id="methodFlow" x1="90" y1="80" x2="760" y2="220" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4DA3FF" stopOpacity="0.25" />
            <stop offset="0.45" stopColor="#0050FF" stopOpacity="0.75" />
            <stop offset="1" stopColor="#A3518F" stopOpacity="0.52" />
          </linearGradient>
          <radialGradient id="nodeFill" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0) rotate(90) scale(34)">
            <stop stopColor="#F0F2F8" stopOpacity="0.22" />
            <stop offset="0.42" stopColor="#4DA3FF" stopOpacity="0.16" />
            <stop offset="1" stopColor="#030730" stopOpacity="0.66" />
          </radialGradient>
          <filter id="nodeGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="9" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d="M88 210 C164 58 272 210 342 82 C426 -74 514 306 610 160 C664 78 724 76 776 104"
          fill="none"
          stroke="url(#methodFlow)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.2 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.45, ease: EASE }}
        />
        <motion.path
          d="M108 92 C196 222 276 74 392 146 C522 228 590 34 746 210"
          fill="none"
          stroke="#4DA3FF"
          strokeWidth="1"
          strokeOpacity="0.22"
          strokeDasharray="4 12"
          animate={prefersReducedMotion ? {} : { strokeDashoffset: [0, -64] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        {steps.map((step, index) => (
          <g key={step.number}>
            <motion.circle
              cx={step.coordinate.x}
              cy={step.coordinate.y}
              r="48"
              fill="none"
              stroke="#0050FF"
              strokeOpacity="0.12"
              initial={{ scale: 0.86, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.2 + index * 0.12, ease: EASE }}
              style={{ transformOrigin: `${step.coordinate.x}px ${step.coordinate.y}px` }}
            />
            <motion.circle
              cx={step.coordinate.x}
              cy={step.coordinate.y}
              r="28"
              fill="url(#nodeFill)"
              stroke="#4DA3FF"
              strokeOpacity="0.46"
              filter="url(#nodeGlow)"
              initial={{ scale: 0.72, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.32 + index * 0.12, ease: EASE }}
              style={{ transformOrigin: `${step.coordinate.x}px ${step.coordinate.y}px` }}
            />
            <text
              x={step.coordinate.x}
              y={step.coordinate.y + 4}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize="11"
              letterSpacing="0.12em"
              fill="#F0F2F8"
              opacity="0.88"
            >
              {step.number}
            </text>
          </g>
        ))}
      </svg>

      <div className="relative z-10 mt-0 grid grid-cols-1 gap-4 md:-mt-4 md:grid-cols-4">
        {steps.map((step, index) => (
          <motion.article
            key={step.number}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: EASE }}
            className="method-step rounded-sm border border-subtle p-5"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-flow/75">
              {step.number}
            </p>
            <h3 className="mt-4 font-display text-[24px] font-semibold leading-tight text-stellar">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-stellar/56">
              {step.description}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default function Method() {
  return (
    <section
      id="method"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--gradient-section-dark)" }}
      aria-labelledby="method-heading"
    >
      <div
        className="absolute right-0 top-1/2 h-[560px] w-[560px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,80,255,0.10) 0%, rgba(123,68,149,0.05) 34%, transparent 70%)",
          transform: "translate(34%, -50%)",
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12 grid gap-6 lg:grid-cols-[0.78fr_1fr] lg:items-end"
        >
          <div>
            <SectionLabel className="mb-4">Our Approach</SectionLabel>
            <h2
              id="method-heading"
              className="font-display text-h2 text-stellar font-semibold leading-tight"
            >
              How we think through every challenge.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-stellar/56">
            The work moves like a controlled current: context enters, first
            principles sharpen it, intervention takes shape, and capability
            remains after the engagement ends.
          </p>
        </motion.div>

        <MethodField />
      </div>
    </section>
  );
}
