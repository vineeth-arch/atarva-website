"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import CyanRule from "@/components/ui/CyanRule";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const leaders = [
  {
    id: "krishna",
    name: "Dr. Krishnachandran",
    role: "Co-Founder, Technical Director",
    discipline: "Technical Intelligence",
    tags: ["Fluid & Thermal Sciences", "CFD", "Applied Research", "Simulation"],
    bio: "Dr. Krishnachandran brings deep expertise in computational fluid dynamics, heat transfer, and applied engineering research. His work spans aerodynamics, energy systems, and thermal simulation — translating fundamental physics into practical insight for industry and academia. He leads the technical intelligence arm of Avarta, ensuring that every engagement is grounded in scientific rigour and systematic thinking.",
    emphasis: "Technical precision from fundamental principles.",
    side: "technical",
  },
  {
    id: "radhika",
    name: "Radhika Prasad",
    role: "Co-Founder, Creative Director",
    discipline: "Design Intelligence",
    tags: ["Brand Identity", "Design Systems", "Communication Design", "Design Education"],
    bio: "Radhika Prasad brings extensive experience in design leadership, brand strategy, and design education. Her practice spans brand identity, communication systems, information design, and the shaping of design curricula that build lasting creative capability. She leads the design intelligence arm of Avarta, ensuring that every output carries strategic clarity, visual precision, and meaningful form.",
    emphasis: "Creative vision grounded in strategic intent.",
    side: "design",
  },
];

const cardReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: EASE },
  }),
};

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="section-padding bg-midnight relative overflow-hidden"
      aria-labelledby="leadership-heading"
    >
      {/* Centered ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,80,255,0.06) 0%, transparent 65%)",
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
          <SectionLabel className="mb-4">Leadership</SectionLabel>
          <h2
            id="leadership-heading"
            className="font-display text-h2 text-stellar font-semibold leading-tight"
          >
            The duality at Avarta&rsquo;s core.
          </h2>
          <p className="mt-4 text-stellar/55 text-sm leading-relaxed max-w-lg">
            Avarta is founded on the convergence of two worlds: deep technical
            expertise in fluid and thermal sciences, and deep design expertise
            in experience, communication, and systems. This is not incidental —
            it is the firm&rsquo;s fundamental architecture.
          </p>
        </motion.div>

        {/* Leadership cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leaders.map((leader, i) => (
            <motion.article
              key={leader.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardReveal}
              className={`relative rounded-sm overflow-hidden ${
                leader.side === "technical"
                  ? "leadership-card-technical"
                  : "leadership-card-design"
              }`}
            >
              {/* Top accent line */}
              <div
                className="h-px w-full"
                style={{
                  background:
                    leader.side === "technical"
                      ? "linear-gradient(90deg, rgba(77,163,255,0.65), transparent)"
                      : "linear-gradient(90deg, rgba(163,81,143,0.6), transparent)",
                }}
                aria-hidden="true"
              />

              <div className="p-8 flex flex-col gap-6">
                {/* Name + role */}
                <div>
                  <span className="label-mono text-[10px] mb-3 block">
                    {leader.discipline}
                  </span>
                  <h3 className="font-display text-[clamp(32px,4vw,48px)] font-semibold text-stellar leading-[1.02] mb-2">
                    {leader.name}
                  </h3>
                  <p className="font-mono text-[11px] text-stellar/40 tracking-wide">
                    {leader.role}
                  </p>
                </div>

                <CyanRule width="32px" />

                {/* Tags */}
                <div className="flex flex-wrap gap-2" role="list" aria-label="Expertise areas">
                  {leader.tags.map((tag) => (
                    <span
                      key={tag}
                      role="listitem"
                      className="font-mono text-[10px] px-2.5 py-1 rounded-sm text-stellar/55 border"
                      style={{
                        borderColor:
                          leader.side === "technical"
                            ? "rgba(0,80,255,0.2)"
                            : "rgba(123,68,149,0.2)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bio */}
                <p className="text-stellar/55 text-sm leading-relaxed">
                  {leader.bio}
                </p>

                {/* Emphasis */}
                <p
                  className="font-display italic text-base leading-snug"
                  style={{
                    color:
                      leader.side === "technical"
                        ? "rgba(77,163,255,0.8)"
                        : "rgba(163,81,143,0.9)",
                  }}
                >
                  {leader.emphasis}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
