import Image from "next/image";

interface AvartaLogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function AvartaLogo({
  className = "",
  showTagline = true,
}: AvartaLogoProps) {
  const width = showTagline ? 180 : 220;
  const height = showTagline ? 56 : 68;

  return (
    <span
      className={`relative inline-block ${showTagline ? "h-8 w-[180px] md:h-9 md:w-[205px]" : "h-11 w-[220px]"} ${className}`}
    >
      <Image
        src="/logos/avarta-lockup-horizontal-white.svg"
        alt="Avarta IT and Design Solutions"
        width={width}
        height={height}
        className="avarta-logo-on-dark h-full w-auto object-contain"
        priority={showTagline}
      />
      <Image
        src="/logos/avarta-lockup-horizontal-color.svg"
        alt="Avarta IT and Design Solutions"
        width={width}
        height={height}
        className="avarta-logo-color absolute inset-0 h-full w-auto object-contain"
        priority={showTagline}
      />
      <span className="sr-only">
        Avarta IT and Design Solutions
      </span>
    </span>
  );
}
