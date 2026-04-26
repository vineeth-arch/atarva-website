"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type PartnerLogo = {
  name: string;
  shortName: string;
  sector: string;
  src?: string;
};

const partners: PartnerLogo[] = [
  { name: "Research Institution", shortName: "RI", sector: "Applied research" },
  { name: "Advanced Engineering Lab", shortName: "AEL", sector: "Simulation" },
  { name: "Design Education Partner", shortName: "DEP", sector: "Learning" },
  { name: "Industrial Systems Group", shortName: "ISG", sector: "Engineering" },
  { name: "Academic Collaboration", shortName: "AC", sector: "Knowledge" },
  { name: "Innovation Team", shortName: "IT", sector: "Strategy" },
];

function PartnerMark({ partner }: { partner: PartnerLogo }) {
  return (
    <div className="group relative flex min-h-[132px] items-center justify-center rounded-sm border border-subtle bg-stellar/[0.025] px-6 py-7 transition-all duration-300 hover:border-cobalt/30 hover:bg-cobalt/[0.045]">
      <div
        className="absolute inset-x-5 top-0 h-px opacity-70"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(77,163,255,0.45), transparent)",
        }}
        aria-hidden="true"
      />

      {partner.src ? (
        <Image
          src={partner.src}
          alt={partner.name}
          width={150}
          height={40}
          className="max-h-10 max-w-[150px] opacity-55 grayscale transition duration-300 group-hover:opacity-80"
        />
      ) : (
        <div className="flex flex-col items-center gap-3 text-center">
          <div
            className="grid h-14 w-14 place-items-center rounded-full border text-sm font-semibold text-stellar/72"
            style={{
              borderColor: "rgba(77,163,255,0.30)",
              background:
                "radial-gradient(circle at 34% 24%, rgba(77,163,255,0.14), rgba(0,80,255,0.05) 48%, transparent 100%)",
              boxShadow: "inset 0 1px 0 rgba(240,242,248,0.10)",
            }}
            aria-hidden="true"
          >
            {partner.shortName}
          </div>
          <div>
            <p className="font-display text-[18px] font-semibold leading-tight text-stellar/78">
              {partner.name}
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-stellar/38">
              {partner.sector}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LogoRail() {
  return (
    <section
      id="clients"
      className="section-padding bg-midnight relative overflow-hidden"
      aria-labelledby="clients-heading"
    >
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(77,163,255,0.20) 30%, rgba(163,81,143,0.18) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14 grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-end"
        >
          <div>
            <SectionLabel className="mb-4">Who We Work With</SectionLabel>
            <h2
              id="clients-heading"
              className="font-display text-h2 text-stellar font-semibold max-w-2xl leading-tight"
            >
              A curated field of institutions, industry, and ambitious teams.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-stellar/52 lg:justify-self-end">
            Logo slots are structured for real partner marks; the current
            treatment keeps the strip refined while final approved assets are
            swapped in.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.75, ease: EASE }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Client and institution logo placements"
        >
          {partners.map((partner) => (
            <PartnerMark key={partner.name} partner={partner} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
