"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps = [
  {
    number: "01",
    title: "Understand the System",
    description:
      "Every engagement begins with deep listening. We map the full context — the technical constraints, the organisational realities, the human factors — before drawing any conclusions.",
  },
  {
    number: "02",
    title: "Diagnose from First Principles",
    description:
      "We resist the temptation of ready-made answers. The real problem is often not the presenting problem. We go back to fundamentals to find where the real leverage lives.",
  },
  {
    number: "03",
    title: "Shape the Right Intervention",
    description:
      "Precision matters here. We design responses that are proportionate, integrative, and calibrated — drawing from whichever disciplines the problem actually requires.",
  },
  {
    number: "04",
    title: "Build Capability, Not Dependency",
    description:
      "The work is complete only when our partners have the understanding and capacity to carry it forward. We build institutions, not attachments.",
  },
];

/* Node x positions within the 800-wide SVG viewBox */
const NODE_X = [112, 304, 496, 688];
const NODE_Y = 56;
const ARC_DIP = 32; /* how far the cubic bezier dips below the nodes */

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const stepReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

function VortexDiagram() {
  const prefersReducedMotion = useReducedMotion();

  /* Build arc path between two node x positions */
  const arcPath = (x1: number, x2: number) => {
    const cy = NODE_Y + ARC_DIP;
    return `M ${x1} ${NODE_Y} C ${x1 + 28} ${cy} ${x2 - 28} ${cy} ${x2} ${NODE_Y}`;
  };

  return (
    <svg
      viewBox="0 0 800 112"
      width="100%"
      height="auto"
      className="overflow-visible"
      aria-hidden="true"
      role="presentation"
    >
      {/* Arc connector paths */}
      {NODE_X.slice(0, -1).map((x, i) => (
        <motion.path
          key={i}
          d={arcPath(x, NODE_X[i + 1])}
          fill="none"
          stroke="#00E5C3"
          strokeWidth="1"
          strokeOpacity="0.30"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={
            prefersReducedMotion
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 1, opacity: 1 }
          }
          viewport={{ once: true, margin: "-60px" }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.8, delay: 0.2 + i * 0.18, ease: EASE }
          }
        />
      ))}

      {/* Outer orbit ring per node */}
      {NODE_X.map((x, i) => (
        <motion.circle
          key={`ring-${i}`}
          cx={x}
          cy={NODE_Y}
          r="18"
          fill="none"
          stroke="#0050FF"
          strokeWidth="0.75"
          strokeOpacity="0.20"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.5, delay: 0.45 + i * 0.18, ease: EASE }
          }
          style={{ transformOrigin: `${x}px ${NODE_Y}px` }}
        />
      ))}

      {/* Node fill circles */}
      {NODE_X.map((x, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={x}
          cy={NODE_Y}
          r="7"
          fill="rgba(0,2,43,0.85)"
          stroke="#00E5C3"
          strokeWidth="1.5"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.4, delay: 0.55 + i * 0.18, ease: EASE }
          }
          style={{ transformOrigin: `${x}px ${NODE_Y}px` }}
        />
      ))}

      {/* Centre dot */}
      {NODE_X.map((x, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={x}
          cy={NODE_Y}
          r="2"
          fill="#00E5C3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.3, delay: 0.72 + i * 0.18, ease: EASE }
          }
        />
      ))}

      {/* Step number labels above nodes */}
      {NODE_X.map((x, i) => (
        <motion.text
          key={`label-${i}`}
          x={x}
          y={NODE_Y - 28}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="10"
          letterSpacing="0.14em"
          fill="#00E5C3"
          fillOpacity="0.7"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.4, delay: 0.3 + i * 0.18, ease: EASE }
          }
        >
          {steps[i].number}
        </motion.text>
      ))}
    </svg>
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
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,80,255,0.07) 0%, transparent 70%)",
          transform: "translate(40%, -50%)",
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-16 max-w-xl"
        >
          <SectionLabel className="mb-4">Our Approach</SectionLabel>
          <h2
            id="method-heading"
            className="font-display text-h2 text-stellar leading-tight"
          >
            How we think through every challenge.
          </h2>
        </motion.div>

        {/* Vortex arc diagram — desktop */}
        <div className="hidden md:block mb-4 px-4">
          <VortexDiagram />
        </div>

        {/* Step cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={stepReveal}
              className="relative flex flex-col gap-5 p-6 group"
            >
              {/* Mobile step indicator */}
              <div className="flex md:hidden items-center gap-3">
                <span className="font-mono text-[11px] text-flow tracking-widest">
                  {step.number}
                </span>
                <span
                  className="w-2 h-2 rounded-full border border-flow/50"
                  aria-hidden="true"
                />
              </div>

              {/* Desktop top accent line */}
              <div
                className="absolute top-0 left-6 w-6 h-px bg-flow/25 group-hover:bg-flow/60 transition-colors hidden md:block"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-3">
                <h3 className="font-sans font-medium text-base text-stellar">
                  {step.title}
                </h3>
                <p className="text-stellar/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
