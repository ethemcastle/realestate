/* eslint-disable @next/next/no-img-element */
type BrandLogoProps = {
  /** "dark" wordmark for light backgrounds, "light" for dark backgrounds. */
  variant?: "dark" | "light";
  /** Pixel height of the logo. */
  size?: number;
  className?: string;
};

export function BrandLogo({
  variant: _variant = "dark",
  size = 36,
  className,
}: BrandLogoProps) {
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        lineHeight: 1,
      }}
    >
      <img
        src="/inhouse-logo.png"
        alt="inHouse Real Estate"
        height={size}
        style={{
          height: size,
          width: "auto",
          display: "block",
        }}
      />
    </span>
  );
}
