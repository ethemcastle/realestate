type BrandLogoProps = {
  /** "dark" wordmark for light backgrounds, "light" for dark backgrounds. */
  variant?: "dark" | "light";
  /** Pixel size of the square logo mark. */
  size?: number;
  className?: string;
};

const TEAL = "#14B8B0";

/**
 * fixcmimi.al brand logo: a teal house-tile mark + the wordmark
 * (fix in teal, cmimi in ink, .al with a teal dot). Self-contained inline
 * styles so it renders correctly in any styling context.
 */
export function BrandLogo({
  variant = "dark",
  size = 30,
  className,
}: BrandLogoProps) {
  const wordColor = variant === "light" ? "#FBFAF5" : "#0F172A";

  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        lineHeight: 1,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        aria-hidden="true"
        style={{ flex: "none" }}
      >
        <rect width="36" height="36" rx="9" fill={TEAL} />
        <path d="M6.5 18 L18 8 L29.5 18 Z" fill="#fff" />
        <rect x="10.5" y="16.5" width="15" height="12" fill="#fff" />
        <rect x="15" y="20" width="6" height="6" rx="0.8" fill={TEAL} />
      </svg>
      <span
        style={{
          fontWeight: 800,
          fontSize: Math.round(size * 0.7),
          letterSpacing: "-0.02em",
          color: wordColor,
        }}
      >
        <span style={{ color: TEAL }}>fix</span>cmimi
        <span style={{ color: TEAL }}>.</span>al
      </span>
    </span>
  );
}

