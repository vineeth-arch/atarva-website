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
  { name: "Sree Chitra Tirunal Institute for Medical Sciences & Technology", shortName: "SCTIMST", sector: "Medical Research", src: "/partners/sctimst.svg" },
  { name: "National Institute of Design", shortName: "NID", sector: "Design", src: "/partners/nid.svg" },
  { name: "Kerala Space Park", shortName: "KSPACE", sector: "Space Tech", src: "/partners/kspace.svg" },
  { name: "Indian Institute of Technology Kanpur", shortName: "IITK", sector: "Engineering", src: "/partners/iit-kanpur.svg" },
  { name: "Indian Space Research Organisation", shortName: "ISRO", sector: "Space", src: "/partners/isro.svg" },
  { name: "IIT Madras", shortName: "IITM", sector: "Engineering", src: "/partners/iit-madras.svg" },
  { name: "IIT Palakkad", shortName: "IITP", sector: "Engineering", src: "/partners/iit-palakkad.svg" },
];

function PartnerMark({ partner }: { partner: PartnerLogo }) {
  if (partner.src) {
    return (
      <div className="group flex min-h-[120px] items-center justify-center rounded-sm border border-gray-200 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:border-cobalt/40 hover:shadow-md">
        <Image
          src={partner.src}
          alt={partner.name}
          width={160}
          height={56}
          className="max-h-14 max-w-[160px] object-contain transition duration-300"
        />
      </div>
    );
  }

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
