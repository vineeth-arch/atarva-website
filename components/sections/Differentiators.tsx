"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import CyanRule from "@/components/ui/CyanRule";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const values = [
  {
    number: "I",
    title: "Interdisciplinary Intelligence",
    description:
      "We draw from multiple fields not because we lack depth, but because the hardest problems demand it. Technical rigour and design thinking are not separate disciplines here — they are one integrated practice.",
  },
  {
    number: "II",
    title: "Fundamental Thinking",
    description:
      "We start from first principles. Rather than reaching for ready-made frameworks, we diagnose from the ground up — understanding the physics, the system, the human context — before proposing any solution.",
  },
  {
    number: "III",
    title: "Systems in Motion",
    description:
      "We understand that everything exists within a larger system. Our name — from the Sanskrit for vortex and revolving current — reflects this: converging forces producing concentrated, organised effect.",
  },
  {
    number: "IV",
    title: "Knowledge as Capability",
    description:
      "We do not build dependency. Every engagement is an opportunity to transfer understanding, build internal capability, and leave our partners stronger than when we arrived.",
  },
  {
    number: "V",
    title: "Purposeful Impact",
    description:
      "We measure success by the quality of outcome, not the quantity of output. Work must improve the quality of life — whether through a more efficient system, a clearer communication, or a more capable team.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export default function Differentiators() {
  return (
    <section
      id="differentiators"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--gradient-section-dark)" }}
      aria-labelledby="differentiators-heading"
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/4 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,80,255,0.06) 0%, transparent 70%)",
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
          className="mb-14 max-w-2xl"
        >
          <SectionLabel className="mb-4">Why Avarta</SectionLabel>
          <h2
            id="differentiators-heading"
            className="font-display text-h2 text-stellar leading-tight"
          >
            Five principles that shape every engagement.
          </h2>
        </motion.div>

        {/* Grid — 3 + 2 editorial layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {values.slice(0, 3).map((value) => (
            <motion.article
              key={value.number}
              variants={cardReveal}
              className="card-surface rounded-sm p-7 flex flex-col gap-4 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-flow/50 tracking-widest">
                  {value.number}
                </span>
                <CyanRule width="24px" />
              </div>
              <h3 className="font-display text-lg text-stellar leading-snug">
                {value.title}
              </h3>
              <p className="text-stellar/55 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {values.slice(3).map((value) => (
            <motion.article
              key={value.number}
              variants={cardReveal}
              className="card-surface rounded-sm p-7 flex flex-col gap-4 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-flow/50 tracking-widest">
                  {value.number}
                </span>
                <CyanRule width="24px" />
              </div>
              <h3 className="font-display text-lg text-stellar leading-snug">
                {value.title}
              </h3>
              <p className="text-stellar/55 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
