"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import CyanRule from "@/components/ui/CyanRule";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: EASE },
  }),
};

export default function BrandPremise() {
  return (
    <section
      id="about"
      className="section-padding bg-gradient-subtle relative overflow-hidden"
      aria-labelledby="premise-heading"
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,80,255,0.07) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={reveal}
            custom={0}
          >
            <SectionLabel className="mb-6">Our Philosophy</SectionLabel>
            <h2
              id="premise-heading"
              className="font-display text-h2 text-stellar leading-tight"
            >
              Complex problems do not live in silos.
            </h2>
            <CyanRule className="mt-8" width="64px" />
          </motion.div>

          {/* Right: body copy */}
          <div className="flex flex-col gap-5">
            {[
              "The most valuable solutions are found where disciplines converge. At the intersection of physics and design, of computation and communication, of rigour and imagination — that is where Avarta operates.",
              "We are not a vendor. We are a thinking partner. We bring technical precision and design intelligence together, working with organisations that understand that their hardest problems demand more than a single-discipline response.",
              "Our approach is integrative. We draw from fluid dynamics and systems thinking, from brand strategy and research methodology, from education design and applied engineering — not to be generalists, but because the problems that matter most require the full picture.",
            ].map((text, i) => (
              <motion.p
                key={i}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={reveal}
                className="text-stellar/65 text-body leading-relaxed"
              >
                {text}
              </motion.p>
            ))}

            {/* Callout */}
            <motion.div
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={reveal}
              className="mt-4 pl-5 border-l border-flow/40"
            >
              <p className="font-display italic text-xl text-stellar/80 leading-snug">
                &ldquo;Your challenges are complex. Our approach is
                integrative.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
