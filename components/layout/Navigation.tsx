"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#capabilities" },
  { label: "Sectors", href: "#sectors" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-midnight/92 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="container-site">
        <nav
          className="flex items-center justify-between h-16 md:h-18"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <a
            href="#hero"
            className="flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flow rounded-sm"
            aria-label="Avarta — home"
          >
            <span className="font-display text-stellar text-xl tracking-tight">
              AVARTA
            </span>
            <span
              className="font-mono text-[9px] text-stellar/40 tracking-[0.2em] uppercase mt-0.5"
              aria-hidden="true"
            >
              IT &amp; Design Solutions
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-sm text-stellar/60 hover:text-stellar transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flow rounded-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm" as="a" href="#contact">
              Request a Proposal
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flow rounded-sm"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-5 h-px bg-stellar transition-all duration-200 ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-stellar transition-all duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-stellar transition-all duration-200 ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-midnight/98 backdrop-blur-md border-t border-white/[0.06] overflow-hidden"
          >
            <nav className="container-site py-6 flex flex-col gap-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="font-sans text-base text-stellar/70 hover:text-stellar transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flow rounded-sm"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  as="a"
                  href="#contact"
                  className="w-full"
                  onClick={handleNavClick}
                >
                  Request a Proposal
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
