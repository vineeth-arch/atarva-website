"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  as: Tag = "button",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-sans font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flow focus-visible:ring-offset-2 focus-visible:ring-offset-midnight rounded-sm";

  const sizes = {
    sm: "px-4 py-2 text-sm tracking-wide",
    md: "px-6 py-3 text-sm tracking-wide",
    lg: "px-8 py-4 text-base tracking-wide",
  };

  const variants = {
    primary:
      "bg-cobalt text-stellar hover:bg-[#0040DD] hover:shadow-cobalt-glow active:scale-[0.98]",
    secondary:
      "border border-stellar/20 text-stellar hover:border-cobalt hover:text-stellar hover:bg-cobalt/10 active:scale-[0.98]",
    ghost:
      "text-stellar/70 hover:text-stellar hover:bg-stellar/5 active:scale-[0.98]",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (Tag === "a" && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
