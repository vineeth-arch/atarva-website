"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import CyanRule from "@/components/ui/CyanRule";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const capabilities = [
  {
    id: "technical",
    label: "01 / Technical",
    title: "Technical Intelligence",
    description:
      "Deep computational and engineering expertise, applied with precision to real-world challenges in fluid, thermal, and structural systems.",
    points: [
      "Computational Fluid Dynamics (CFD)",
      "Simulation-led analysis and validation",
      "Thermal and fluid systems understanding",
      "Research support and applied engineering",
      "Technical documentation and reporting",
    ],
    accentColor: "rgba(0,80,255,0.18)",
  },
  {
    id: "design",
    label: "02 / Design",
    title: "Design Intelligence",
    description:
      "Strategic design thinking that bridges communication, form, and meaning — building systems that are as precise as they are purposeful.",
    points: [
      "Branding and brand identity systems",
      "Communication and information design",
      "Data visualisation and information architecture",
      "Packaging and spatial design",
      "Strategic design systems",
    ],
    accentColor: "rgba(123,68,149,0.18)",
  },
  {
    id: "learning",
    label: "03 / Learning",
    title: "Learning and Research",
    description:
      "Building capability through rigorous learning design, collaborative research, and knowledge transfer that leaves organisations stronger.",
    points: [
      "Workshops and upskilling programmes",
      "Academic curriculum guidance",
      "Industry training and certification",
      "Research collaboration",
      "Knowledge systems design",
    ],
    accentColor: "rgba(77,163,255,0.12)",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="section-padding bg-midnight relative overflow-hidden"
      aria-labelledby="capabilities-heading"
    >
      {/* Layered background for glass backdrop to blur against */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,80,255,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,242,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(240,242,248,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
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
          className="mb-14"
        >
          <SectionLabel className="mb-4">What We Do</SectionLabel>
          <h2
            id="capabilities-heading"
            className="font-display text-h2 text-stellar font-semibold max-w-lg leading-tight"
          >
            Three capability domains, one integrated approach.
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {capabilities.map((cap) => (
            <motion.article
              key={cap.id}
              variants={cardReveal}
              className="glass-cap rounded-sm p-8 flex flex-col gap-5 cursor-default relative overflow-hidden"
            >
              {/* Per-card accent glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${cap.accentColor} 0%, transparent 70%)`,
                  transform: "translate(30%, -30%)",
                }}
                aria-hidden="true"
              />

              <div className="flex flex-col gap-3 relative">
                <span className="font-mono text-[10px] text-flow/70 tracking-widest uppercase">
                  {cap.label}
                </span>
                <CyanRule width="32px" />
              </div>

              <h3 className="font-display text-h3 text-stellar leading-tight relative">
                {cap.title}
              </h3>

              <p className="text-stellar/55 text-sm leading-relaxed relative">
                {cap.description}
              </p>

              <ul className="flex flex-col gap-2 mt-auto relative" role="list">
                {cap.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-stellar/50"
                  >
                    <span
                      className="mt-[7px] w-1 h-1 rounded-full bg-flow/60 shrink-0"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
