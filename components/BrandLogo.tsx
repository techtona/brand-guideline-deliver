import Image from "next/image";

/** Intrinsic dimensions of the supplied logo artwork. */
const LOGO_W = 669;
const LOGO_H = 205;

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
      src={reverse ? "/logo/logo-deliver-reverse.png" : "/logo/logo-deliver.png"}
      alt="Deliver"
      width={width}
      height={height}
      priority={priority}
      className={className ? `logo-img ${className}` : "logo-img"}
      style={fluid ? undefined : { height: `${height}px`, width: "auto" }}
    />
  );
}
