"use client";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`label-mono inline-flex items-center gap-2 ${className}`}
    >
      <span className="inline-block w-4 h-px bg-flow" aria-hidden="true" />
      {children}
    </span>
  );
}
