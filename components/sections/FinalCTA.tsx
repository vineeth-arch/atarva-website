"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import CyanRule from "@/components/ui/CyanRule";

type FormState = "idle" | "submitting" | "success" | "error";

const subjects = [
  "Technical / CFD Enquiry",
  "Design Intelligence Enquiry",
  "Research Collaboration",
  "Learning and Upskilling",
  "General Enquiry",
];

export default function FinalCTA() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    organisation: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const res = await fetch("https://formspree.io/f/FORMSPREE_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });

      if (res.ok) {
        setFormState("success");
        setFields({ name: "", email: "", organisation: "", subject: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputBase =
    "w-full bg-midnight/60 border rounded-sm px-4 py-3 text-sm text-stellar placeholder-stellar/30 font-sans transition-all duration-200 focus:outline-none focus:border-flow/60 focus:ring-1 focus:ring-flow/30 border-subtle";

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Banner gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-banner)", opacity: 0.85 }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(0,80,255,0.25) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(240,242,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(240,242,248,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: ([0.22, 1, 0.36, 1] as [number, number, number, number]) }}
          >
            <SectionLabel className="mb-6">Start a Conversation</SectionLabel>
            <h2
              id="cta-heading"
              className="font-display text-h2 text-stellar leading-tight mb-6"
            >
              Let&rsquo;s build something that lasts.
            </h2>

            <CyanRule className="mb-8" width="48px" />

            <p className="text-stellar/70 text-base leading-relaxed mb-8 max-w-md">
              Whether you are solving a technical challenge, shaping a design
              system, or building new capability through research and learning,
              Avarta brings the depth and judgment to move the work forward.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <span
                  className="mt-2 w-1 h-1 rounded-full bg-flow shrink-0"
                  aria-hidden="true"
                />
                <p className="text-stellar/60 text-sm">
                  <span className="text-stellar font-medium">Technical projects:</span>{" "}
                  CFD studies, simulation, research support
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span
                  className="mt-2 w-1 h-1 rounded-full bg-flow shrink-0"
                  aria-hidden="true"
                />
                <p className="text-stellar/60 text-sm">
                  <span className="text-stellar font-medium">Design projects:</span>{" "}
                  Brand identity, communication, information design
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span
                  className="mt-2 w-1 h-1 rounded-full bg-flow shrink-0"
                  aria-hidden="true"
                />
                <p className="text-stellar/60 text-sm">
                  <span className="text-stellar font-medium">Learning and research:</span>{" "}
                  Workshops, upskilling, academic collaboration
                </p>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="mailto:hello@avarta.in"
                className="font-mono text-sm text-stellar/40 hover:text-flow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flow rounded-sm"
              >
                hello@avarta.in
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.15, ease: ([0.22, 1, 0.36, 1] as [number, number, number, number]) }}
          >
            {formState === "success" ? (
              <div
                className="rounded-sm p-8 flex flex-col gap-4 items-start"
                style={{
                  background: "rgba(0,2,43,0.6)",
                  border: "1px solid rgba(0,229,195,0.3)",
                }}
                role="alert"
                aria-live="polite"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-2 h-2 rounded-full bg-flow"
                    aria-hidden="true"
                  />
                  <span className="label-mono text-flow">Received</span>
                </div>
                <h3 className="font-display text-xl text-stellar">
                  Thank you for reaching out.
                </h3>
                <p className="text-stellar/60 text-sm leading-relaxed">
                  We have received your enquiry and will be in touch shortly.
                  We look forward to understanding your challenge.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-sm p-8 flex flex-col gap-5"
                style={{
                  background: "rgba(0,2,43,0.5)",
                  border: "1px solid rgba(240,242,248,0.08)",
                  backdropFilter: "blur(8px)",
                }}
                noValidate
                aria-label="Enquiry form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="font-mono text-[10px] text-stellar/50 tracking-widest uppercase"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      value={fields.name}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="font-mono text-[10px] text-stellar/50 tracking-widest uppercase"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="your@email.com"
                      value={fields.email}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="organisation"
                    className="font-mono text-[10px] text-stellar/50 tracking-widest uppercase"
                  >
                    Organisation
                  </label>
                  <input
                    id="organisation"
                    name="organisation"
                    type="text"
                    autoComplete="organization"
                    placeholder="Company or institution"
                    value={fields.organisation}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="font-mono text-[10px] text-stellar/50 tracking-widest uppercase"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={fields.subject}
                    onChange={handleChange}
                    className={`${inputBase} appearance-none cursor-pointer`}
                    aria-label="Enquiry subject"
                  >
                    <option value="" disabled>
                      Select an area
                    </option>
                    {subjects.map((s) => (
                      <option key={s} value={s} className="bg-midnight">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="font-mono text-[10px] text-stellar/50 tracking-widest uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your challenge or project"
                    value={fields.message}
                    onChange={handleChange}
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {formState === "error" && (
                  <p
                    className="text-flux text-sm"
                    role="alert"
                    aria-live="assertive"
                  >
                    Something went wrong. Please try again or email us directly
                    at hello@avarta.in
                  </p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={formState === "submitting"}
                  className="w-full mt-2"
                >
                  {formState === "submitting" ? "Sending…" : "Send Enquiry"}
                </Button>

                <p className="font-mono text-[10px] text-stellar/25 tracking-wide text-center">
                  We respond to all enquiries within 48 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
