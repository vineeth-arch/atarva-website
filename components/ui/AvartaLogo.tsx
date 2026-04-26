/*
 * SWAP POINT: Replace <AvartaMark /> with a real <img> or inline SVG
 * once the official Avarta icon mark asset is provided.
 * e.g. <img src="/avarta-mark.svg" alt="" aria-hidden="true" className={...} />
 */

interface AvartaLogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function AvartaLogo({
  className = "",
  showTagline = true,
}: AvartaLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Icon mark — vortex arc symbol */}
      <AvartaMark />

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span className="font-display text-stellar text-xl tracking-tight">
          AVARTA
        </span>
        {showTagline && (
          <span className="font-mono text-[9px] text-stellar/40 tracking-[0.2em] uppercase mt-0.5">
            IT and Design Solutions
          </span>
        )}
      </span>
    </span>
  );
}

/* Placeholder vortex arc mark — three concentric arcs forming a spiral */
function AvartaMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer arc */}
      <path
        d="M14 3 A11 11 0 0 1 25 14"
        stroke="#0050FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Middle arc */}
      <path
        d="M14 7 A7 7 0 0 1 21 14"
        stroke="#0050FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Inner arc — cyan accent */}
      <path
        d="M14 11 A3 3 0 0 1 17 14"
        stroke="#00E5C3"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Centre dot */}
      <circle cx="14" cy="14" r="1.25" fill="#00E5C3" />
      {/* Outer ring — faint */}
      <circle
        cx="14"
        cy="14"
        r="12"
        stroke="#0050FF"
        strokeWidth="0.5"
        opacity="0.2"
      />
    </svg>
  );
}
