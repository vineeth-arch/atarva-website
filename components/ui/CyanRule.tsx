"use client";

interface CyanRuleProps {
  className?: string;
  width?: string;
}

export default function CyanRule({ className = "", width = "48px" }: CyanRuleProps) {
  return (
    <div
      className={`h-px bg-flow ${className}`}
      style={{ width }}
      aria-hidden="true"
    />
  );
}
