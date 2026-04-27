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
  { name: "Alliance Educational Foundation", shortName: "AEF", sector: "Education", src: "/partners/alliance.svg" },
  { name: "Sree Chitra Tirunal Institute for Medical Sciences & Technology", shortName: "SCTIMST", sector: "Medical Research", src: "/partners/sctimst.png" },
  { name: "National Institute of Design", shortName: "NID", sector: "Design", src: "/partners/nid.svg" },
  { name: "Kerala Space Park", shortName: "KSPACE", sector: "Space Tech", src: "/partners/kspace.png" },
  { name: "Indian Institute of Technology Kanpur", shortName: "IITK", sector: "Engineering", src: "/partners/iit-kanpur.png" },
  { name: "Indian Space Research Organisation", shortName: "ISRO", sector: "Space", src: "/partners/isro.svg" },
  { name: "IIT Madras", shortName: "IITM", sector: "Engineering", src: "/partners/iit-madras.svg" },
  { name: "IIT Palakkad", shortName: "IITP", sector: "Engineering", src: "/partners/iit-palakkad.png" },
];

function PartnerMark({ partner }: { partner: PartnerLogo }) {
  if (partner.src) {
    return (
      <div className="flex h-16 w-44 flex-shrink-0 items-center justify-center rounded border border-gray-200 bg-white px-4 py-2 shadow-sm">
        <Image
          src={partner.src}
          alt={partner.name}
          width={144}
          height={48}
          className="max-h-12 max-w-[144px] object-contain"
        />
      </div>
    );
  }

  return (
    <div className="group relative flex h-16 w-44 flex-shrink-0 items-center justify-center rounded border border-subtle bg-stellar/[0.025] px-4 py-2 transition-all duration-300 hover:border-cobalt/30 hover:bg-cobalt/[0.045]">
      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-stellar/50">
        {partner.shortName}
      </span>
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
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20"
          style={{ background: "linear-gradient(to right, rgb(var(--c-bg)), transparent)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20"
          style={{ background: "linear-gradient(to left, rgb(var(--c-bg)), transparent)" }}
          aria-hidden="true"
        />
        <div className="marquee-track flex w-max gap-5 py-2">
          {[...partners, ...partners].map((partner, i) => (
            <PartnerMark key={i} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
