import Link from "next/link";

interface LogoProps {
  variant?: "default" | "lockup" | "mark";
  className?: string;
  color?: "ink" | "cream" | "mustard";
}

export function Logo({
  variant = "lockup",
  className = "",
  color = "ink",
}: LogoProps) {
  const fill = `var(--${color === "ink" ? "ink" : color === "cream" ? "cream" : "mustard"})`;

  if (variant === "default") {
    return (
      <Link href="/" aria-label="Calicos — home" className={className}>
        <span
          className="text-display-sm"
          style={{ color: fill, fontStyle: "italic" }}
        >
          Calicos
        </span>
      </Link>
    );
  }

  return (
    <Link href="/" aria-label="Calicos — home" className={`inline-block ${className}`}>
      <div className="flex flex-col items-start leading-none">
        <span
          className="text-display-sm"
          style={{ color: fill, fontStyle: "italic" }}
        >
          Calicos
        </span>
        <span
          className="text-caption mt-1"
          style={{
            color: color === "cream" ? "var(--cream)" : "var(--ink-soft)",
          }}
        >
          <span className="font-devanagari">कॉज़</span>.co
        </span>
      </div>
    </Link>
  );
}
