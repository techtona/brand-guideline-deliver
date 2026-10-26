import Image from "next/image";

/** Intrinsic dimensions of the logo artwork (SVG viewBox, rounded). */
const LOGO_W = 765;
const LOGO_H = 190;

type Props = {
  /** Rendered height in px. Also drives the requested image width. */
  height: number;
  /** Use the reverse (light) lockup for dark backgrounds. */
  reverse?: boolean;
  /** Let a CSS class size the logo instead of the inline height. */
  fluid?: boolean;
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ height, reverse, fluid, className, priority }: Props) {
  const width = Math.round((height * LOGO_W) / LOGO_H);

  return (
    <Image
      src={reverse ? "/logo/logo-deliver-reverse.svg" : "/logo/logo-deliver.svg"}
      alt="Deliver"
      width={width}
      height={height}
      priority={priority}
      className={className ? `logo-img ${className}` : "logo-img"}
      style={fluid ? undefined : { height: `${height}px`, width: "auto" }}
    />
  );
}
