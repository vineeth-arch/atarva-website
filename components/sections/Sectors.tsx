"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import CyanRule from "@/components/ui/CyanRule";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const sectors = [
  {
    name: "Aerospace and Automotive",
    descriptor:
      "Aerodynamics, thermal management, structural simulation, and performance-led design across air and ground mobility.",
  },
  {
    name: "Energy and Environment",
    descriptor:
      "Flow analysis, heat transfer, renewable systems, and environmental modelling for a sustainable built world.",
  },
  {
    name: "Health and Medical Devices",
    descriptor:
      "Biofluid mechanics, device simulation, and design systems for healthcare technology and research instruments.",
  },
  {
    name: "Education and Research Institutions",
    descriptor:
      "Curriculum development, academic collaboration, and research methodology support for universities and institutes.",
  },
  {
    name: "Product and Spatial Innovation",
    descriptor:
      "Form, function, and flow thinking applied to industrial products, consumer goods, and built environments.",
  },
  {
    name: "Branding and Creative Systems",
    descriptor:
      "Strategic identity, communication design, and information architecture for organisations with complexity to communicate.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemReveal = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export default function Sectors() {
  return (
    <section
      id="sectors"
      className="section-padding bg-midnight relative overflow-hidden"
      aria-labelledby="sectors-heading"
    >
      {/* Faint diagonal rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(77,163,255,0.18), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Header column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-1 flex flex-col"
          >
            <SectionLabel className="mb-4">Sectors</SectionLabel>
            <h2
              id="sectors-heading"
              className="font-display text-h2 text-stellar leading-tight mb-6"
            >
              Who we work with.
            </h2>
            <CyanRule width="48px" className="mb-6" />
            <p className="text-stellar/55 text-sm leading-relaxed">
              Avarta works at the intersection of technical rigour and design
              intelligence. Our sectors reflect the breadth of complex problems
              where that combination delivers the most meaningful outcomes.
            </p>
          </motion.div>

          {/* Sectors grid */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-0"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.name}
                variants={itemReveal}
                className={`flex flex-col gap-2 py-7 pr-6 border-b border-subtle ${
                  i % 2 === 0 ? "sm:border-r sm:border-subtle" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-flow/50 shrink-0"
                    aria-hidden="true"
                  />
                  <h3 className="font-sans font-medium text-sm text-stellar tracking-tight">
                    {sector.name}
                  </h3>
                </div>
                <p className="text-stellar/45 text-sm leading-relaxed pl-[14px]">
                  {sector.descriptor}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
