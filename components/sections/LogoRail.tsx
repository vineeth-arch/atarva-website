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
  { name: "Alliance Educational Foundation", shortName: "Alliance", sector: "Education", src: "/partners/alliance.svg" },
  { name: "Sree Chitra Tirunal Institute for Medical Sciences & Technology", shortName: "SCTIMST", sector: "Medical Research", src: "/partners/sctimst.png" },
  { name: "National Institute of Design", shortName: "NID", sector: "Design", src: "/partners/nid.svg" },
  { name: "Kerala Space Park", shortName: "KSPACE", sector: "Space Tech", src: "/partners/kspace.png" },
  { name: "Indian Institute of Technology Kanpur", shortName: "IIT Kanpur", sector: "Engineering", src: "/partners/iit-kanpur.png" },
  { name: "Indian Space Research Organisation", shortName: "ISRO", sector: "Space", src: "/partners/isro.svg" },
  { name: "IIT Madras", shortName: "IIT Madras", sector: "Engineering", src: "/partners/iit-madras.svg" },
  { name: "IIT Palakkad", shortName: "IIT Palakkad", sector: "Engineering", src: "/partners/iit-palakkad.png" },
];

// Card width + gap must match the CSS animation offset below.
// 8 cards × (320px + 24px gap) = 2752px → animate by -2752px for one full loop.
const CARD_W = 320;
const GAP = 24;

function PartnerMark({ partner }: { partner: PartnerLogo }) {
  return (
    <div
      className="flex flex-shrink-0 flex-col items-center gap-3"
      style={{ width: CARD_W }}
    >
      <div
        className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm"
        style={{ height: 160, padding: "20px 28px" }}
      >
        {partner.src ? (
          <Image
            src={partner.src}
            alt={partner.name}
            width={260}
            height={110}
            className="max-h-[110px] max-w-full object-contain"
          />
        ) : (
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-gray-400">
            {partner.shortName}
          </span>
        )}
      </div>
      <p className="text-center font-sans text-xs font-medium leading-snug text-stellar/55">
        {partner.shortName}
      </p>
    </div>
  );
}

export default function LogoRail() {
  const totalWidth = partners.length * (CARD_W + GAP);

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
          className="mb-14"
        >
          <SectionLabel className="mb-4">Who We Work With</SectionLabel>
          <h2
            id="clients-heading"
            className="font-display text-h2 text-stellar font-semibold max-w-2xl leading-tight"
          >
            A curated field of institutions, industry, and ambitious teams.
          </h2>
        </motion.div>
      </div>

      <div className="relative overflow-hidden" aria-label="Client and institution logos">
        {/* edge fades */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
          style={{ background: "linear-gradient(to right, rgb(var(--c-bg)), transparent)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
          style={{ background: "linear-gradient(to left, rgb(var(--c-bg)), transparent)" }}
          aria-hidden="true"
        />

        {/* scrolling track — doubled for seamless loop, Framer Motion x animation */}
        <motion.div
          className="flex pb-4 pt-2"
          style={{ gap: GAP }}
          animate={{ x: [0, -totalWidth] }}
          transition={{
            duration: partners.length * 3,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {[...partners, ...partners].map((partner, i) => (
            <PartnerMark key={i} partner={partner} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
