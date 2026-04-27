"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import VortexBackground from "@/components/ui/VortexBackground";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
};

function useDarkMode() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const el = document.documentElement;
    const update = () => setDark(!el.classList.contains("light"));
    update();
    const obs = new MutationObserver(update);
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return dark;
}

function RotatingMark({ size }: { size: number }) {
  const dark = useDarkMode();
  return (
    <motion.div
      style={{ width: size, height: size }}
      animate={{ rotate: -360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      aria-hidden="true"
    >
      <Image
        src={dark ? "/logos/avarta-mark-white.svg" : "/logos/avarta-mark-color.svg"}
        alt=""
        width={size}
        height={size}
        className="object-contain"
        priority
      />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Avarta — hero"
    >
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-gradient-electric"
        aria-hidden="true"
      />

      {/* Radial glow spot */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,80,255,0.18) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Vortex canvas */}
      <VortexBackground opacity={0.07} />

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,242,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(240,242,248,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container-site pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center">

          {/* Left: text + CTAs */}
          <div className="lg:col-span-3">
            {/* Top label */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-8"
            >
              <span className="label-mono inline-flex items-center gap-3">
                <span
                  className="inline-block w-6 h-px bg-flow"
                  aria-hidden="true"
                />
                Avarta IT and Design Solutions Pvt. Ltd.
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-display text-h1 text-stellar font-semibold leading-none mb-6"
            >
              Where Technical Precision
              <br />
              <span className="italic">Meets Creative Vision.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-stellar/68 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
            >
              Avarta is an interdisciplinary think tank and consultancy
              combining computational engineering, design intelligence, and
              research-led thinking to solve complex problems across industry
              and academia.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-14"
            >
              <Button variant="primary" size="lg" as="a" href="#contact">
                Request a Proposal
              </Button>
              <Button variant="secondary" size="lg" as="a" href="#booking">
                Book a Discovery Call
              </Button>
            </motion.div>

            {/* Trust line */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center gap-3"
            >
              <span
                className="inline-block w-1 h-1 rounded-full bg-flow"
                aria-hidden="true"
              />
              <p className="font-mono text-[11px] text-stellar/35 tracking-widest uppercase">
                Built in India, trusted by forward-thinking organisations
              </p>
            </motion.div>
          </div>

          {/* Right: rotating logo mark — desktop (lg+) */}
          <motion.div
            className="lg:col-span-2 hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.6, ease: EASE }}
          >
            <RotatingMark size={300} />
          </motion.div>
        </div>

        {/* Rotating logo mark — tablet (md only, below text) */}
        <motion.div
          className="hidden md:flex lg:hidden justify-center mt-16"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.7, ease: EASE }}
        >
          <RotatingMark size={220} />
        </motion.div>

        {/* Rotating logo mark — mobile */}
        <motion.div
          className="flex md:hidden justify-center mt-12"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
        >
          <RotatingMark size={160} />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--hero-bottom-fade))",
        }}
        aria-hidden="true"
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] text-stellar/25 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-stellar/20 to-transparent" />
      </motion.div>
    </section>
  );
}
