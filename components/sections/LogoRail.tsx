"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/*
 * SWAP POINT: Replace each LogoSlot below with a real <img> or SVG logo.
 * Each slot receives a `name` for the accessible label and an optional
 * `width` to control the logo's display size.
 *
 * Example replacement:
 *   <img src="/logos/iit.svg" alt="IIT" className="h-7 w-auto" />
 */

interface LogoSlotProps {
  name: string;
  width?: number;
}

function LogoSlot({ name, width = 88 }: LogoSlotProps) {
  return (
    <div
      className="flex items-center justify-center shrink-0 opacity-35 hover:opacity-70 transition-opacity duration-400"
      style={{ width }}
      title={name}
      aria-label={name}
    >
      {/* Placeholder wordmark — swap with real logo asset */}
      <svg
        viewBox={`0 0 ${width} 28`}
        width={width}
        height="28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="0.5"
          y="0.5"
          width={width - 1}
          height="27"
          rx="2"
          stroke="currentColor"
          strokeOpacity="0.25"
          fill="none"
        />
        <text
          x={width / 2}
          y="18"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="9"
          letterSpacing="0.12em"
          fill="currentColor"
          fillOpacity="0.7"
        >
          {name.toUpperCase()}
        </text>
      </svg>
    </div>
  );
}

/*
 * Client + institution roster.
 * Replace placeholder slots with real logos as assets become available.
 */
const clients: LogoSlotProps[] = [
  { name: "IIT", width: 72 },
  { name: "ISRO", width: 80 },
  { name: "Tata Group", width: 100 },
  { name: "DRDO", width: 80 },
  { name: "L&T", width: 72 },
  { name: "Mahindra", width: 96 },
  { name: "CSIR", width: 72 },
  { name: "NID", width: 72 },
];

export default function LogoRail() {
  return (
    <section
      id="clients"
      className="section-padding bg-midnight relative overflow-hidden"
      aria-labelledby="clients-heading"
    >
      {/* Top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(77,163,255,0.15) 30%, rgba(77,163,255,0.15) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <SectionLabel className="mb-4">Who We Work With</SectionLabel>
            <h2
              id="clients-heading"
              className="font-display text-h2 text-stellar max-w-lg leading-tight"
            >
              Trusted by institutions, industry,
              <br className="hidden sm:block" />
              and ambitious teams.
            </h2>
          </div>
          <p className="text-stellar/40 text-sm font-mono tracking-wide max-w-xs text-left md:text-right">
            From research labs to industry —<br />
            wherever precision matters.
          </p>
        </motion.div>

        {/* Logo marquee rail */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative"
        >
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgb(var(--c-bg)) 0%, transparent 100%)",
            }}
            aria-hidden="true"
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(270deg, rgb(var(--c-bg)) 0%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {/* Scrolling track — two copies for seamless loop */}
          <div
            className="overflow-hidden"
            aria-label="Client and institution logos"
          >
            <div
              className="marquee-track flex items-center gap-12 py-6"
              style={{ width: "max-content" }}
            >
              {/* First copy */}
              {clients.map((client, i) => (
                <LogoSlot key={`a-${i}`} {...client} />
              ))}
              {/* Second copy — required for seamless marquee loop */}
              {clients.map((client, i) => (
                <LogoSlot key={`b-${i}`} {...client} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
