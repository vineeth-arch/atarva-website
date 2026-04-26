"use client";

import CyanRule from "@/components/ui/CyanRule";
import AvartaLogo from "@/components/ui/AvartaLogo";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#capabilities" },
  { label: "Why Avarta", href: "#differentiators" },
  { label: "Sectors", href: "#sectors" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-subtle" role="contentinfo">
      <div className="container-site py-16">
        <CyanRule className="mb-12" width="64px" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a
              href="#hero"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flow rounded-sm mb-4 inline-flex"
              aria-label="Avarta — home"
            >
              <AvartaLogo showTagline={false} />
            </a>
            <p className="text-stellar/50 text-sm leading-relaxed mt-4 max-w-xs">
              An interdisciplinary think tank and consultancy where technical
              precision meets creative vision.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="label-mono mb-4">Navigation</p>
            <ul className="flex flex-col gap-2.5" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-stellar/50 hover:text-stellar transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flow rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label-mono mb-4">Get in Touch</p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:hello@avarta.in"
                className="text-sm text-stellar/50 hover:text-flow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flow rounded-sm"
              >
                hello@avarta.in
              </a>
              <a
                href="https://avarta.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-stellar/50 hover:text-flow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flow rounded-sm"
              >
                avarta.in
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-stellar/30 tracking-wide">
            © {new Date().getFullYear()} Avarta IT and Design Solutions Pvt. Ltd. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-stellar/20 tracking-wide">
            Built in India, trusted by forward-thinking organisations.
          </p>
        </div>
      </div>
    </footer>
  );
}
