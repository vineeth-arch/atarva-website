"use client";

import { motion } from "framer-motion";
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

export default function Method() {
  return (
    <section
      id="method"
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #030520 0%, #00022B 100%)" }}
      aria-labelledby="method-heading"
    >
      {/* Right glow */}
      <div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,80,255,0.08) 0%, transparent 70%)",
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
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <SectionLabel className="mb-4">Our Approach</SectionLabel>
          <h2
            id="method-heading"
            className="font-display text-h2 text-stellar leading-tight"
          >
            How we think through every challenge.
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={stepReveal}
              className="relative flex flex-col gap-5 p-6 group"
            >
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-[38px] right-0 w-full h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(0,229,195,0.25), rgba(0,229,195,0.05))",
                    left: "calc(32px + 16px)",
                    right: 0,
                    width: "auto",
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Step number */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-flow tracking-widest">
                  {step.number}
                </span>
                <span
                  className="w-2 h-2 rounded-full border border-flow/40 group-hover:border-flow/80 transition-colors"
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-sans font-medium text-base text-stellar">
                  {step.title}
                </h3>
                <p className="text-stellar/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Top accent */}
              <div
                className="absolute top-0 left-6 w-6 h-px bg-flow/30 group-hover:bg-flow/70 transition-colors"
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
