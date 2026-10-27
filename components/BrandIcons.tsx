import type { ReactNode } from "react";

const INK = "#17191C";

/** Shared geometry for every icon: 2px stroke, rounded joins, single colour. */
function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke={INK}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

/** One hen in side profile (local 0–18 box); filled so a hen in front hides the one behind. */
function Hen({ transform, strokeWidth }: { transform: string; strokeWidth: number }) {
  return (
    <g transform={transform} fill="#fff" strokeWidth={strokeWidth}>
      <path d="M15.2 5l2.2 1.2-2.2.8c.4 2.5 1.3 5 .8 7.5-.8 3.1-3.6 4.5-7 4.5-4 0-7-2.2-7-6l-1-5.5 4 3c1.5-1.3 3.5-1.9 5.5-1.9-.5-1-.5-2 0-3 .6-1.8 3.2-2.3 4.8-.6z" />
      <path d="M11.4 4.1c-.2-1.2.6-2.1 1.5-1.7.4-.9 1.8-.9 1.9.2" fill="none" />
      <circle cx="13.3" cy="5.7" r=".9" fill={INK} stroke="none" />
      <path d="M8 19v2.4M11 19v2.4" fill="none" />
    </g>
  );
}

export const brandIcons: { label: string; art: ReactNode }[] = [
  {
    label: "Flock",
    art: (
      <Icon>
        {/* stroke widths compensate for each hen's scale so lines stay ~2px */}
        <Hen transform="translate(1.5 5) scale(.95)" strokeWidth={2.1} />
        <Hen transform="translate(13 11.5) scale(1.2)" strokeWidth={1.67} />
      </Icon>
    ),
  },
  {
    label: "Capital",
    art: (
      <Icon>
        <path d="M16 12.5l-2.6-5.2c2.2.9 4.4.9 6.6 0 2.2.9 4.4.9 6.6 0L24 12.5M15.5 12.5h9" />
        <path d="M16 12.5C10 15.5 7 20.5 7 25.5 7 30.5 11 33.5 20 33.5s13-3 13-8c0-5-3-10-9-13" />
        <path d="M14.6 29.2v-8.6h2.8a2.4 2.4 0 010 4.8h-2.8M17.4 25.4l2.1 3.8" />
        <path d="M22.2 31v-8.4h2a2.3 2.3 0 010 4.6h-2" />
      </Icon>
    ),
  },
  {
    label: "Measured",
    art: (
      <Icon>
        <path d="M8 30V20M16 30V14M24 30V22M32 30V10" />
      </Icon>
    ),
  },
  {
    label: "Growth",
    art: (
      <Icon>
        <path d="M10 26l8-8 5 5 8-9M31 14h-6M31 14v6" />
      </Icon>
    ),
  },
  {
    label: "Market",
    art: (
      <Icon>
        <path d="M6 14L20 6l14 8M6 14h28" />
        <path d="M6 14c0 2.2 1.6 4 3.5 4s3.5-1.8 3.5-4c0 2.2 1.6 4 3.5 4s3.5-1.8 3.5-4c0 2.2 1.6 4 3.5 4s3.5-1.8 3.5-4c0 2.2 1.6 4 3.5 4s3.5-1.8 3.5-4" />
        <path d="M8 19v14h24V19M16.5 33v-7h7v7M5 33h30" />
      </Icon>
    ),
  },
  {
    label: "Quality",
    art: (
      <Icon>
        <path d="M20 6l11 4v8c0 7-5 12-11 16-6-4-11-9-11-16v-8z" />
        <path d="M15 20l4 4 7-8" />
      </Icon>
    ),
  },
  {
    label: "Logistics",
    art: (
      <Icon>
        <rect x="8" y="12" width="16" height="16" rx="2" />
        <path d="M24 17h5l3 4v7h-8" />
        <circle cx="14" cy="29" r="2.5" />
        <circle cx="27" cy="29" r="2.5" />
      </Icon>
    ),
  },
  {
    label: "Monitoring",
    art: (
      <Icon>
        <path d="M9 25a16 16 0 0122 0M14 28a10 10 0 0112 0" />
        <circle cx="20" cy="31" r="1.8" fill={INK} stroke="none" />
      </Icon>
    ),
  },
  {
    label: "Cycle",
    art: (
      <Icon>
        <rect x="8" y="10" width="24" height="20" rx="2" />
        <path d="M8 16h24M14 10V6M26 10V6" />
      </Icon>
    ),
  },
  {
    label: "Supply",
    art: (
      <Icon>
        {/* feed sack: stitched top, wheat ear printed on the bag */}
        <path d="M10.5 8h19c1.8 4.5 2 19.5 0 25h-19c-2-5.5-1.8-20.5 0-25z" />
        <path d="M10.2 12.2h19.6M13 8v4.2M16.8 8v4.2M20.6 8v4.2M24.4 8v4.2M28 8v4.2" strokeWidth={1.6} />
        <path d="M20 29.5V18" />
        <path
          d="M20 21.6c-2.4-.3-3.6-1.8-3.6-3.6 2.3.2 3.6 1.7 3.6 3.6zm0 0c2.4-.3 3.6-1.8 3.6-3.6-2.3.2-3.6 1.7-3.6 3.6zM20 26.2c-2.4-.3-3.6-1.8-3.6-3.6 2.3.2 3.6 1.7 3.6 3.6zm0 0c2.4-.3 3.6-1.8 3.6-3.6-2.3.2-3.6 1.7-3.6 3.6z"
          strokeWidth={1.6}
        />
      </Icon>
    ),
  },
  {
    label: "Partner",
    art: (
      <Icon>
        {/* farmer in a caping (conical hat) */}
        <path d="M7 15.5L20 7l13 8.5c-3.6 1.3-8 2-13 2s-9.4-.7-13-2z" />
        <path d="M15.4 17.3a4.8 4.8 0 109.2 0" />
        <path d="M9 33c0-5.5 4.9-9 11-9s11 3.5 11 9" />
      </Icon>
    ),
  },
  {
    label: "Transparency",
    art: (
      <Icon>
        {/* accountable report: clipboard with checked items */}
        <rect x="9" y="8" width="22" height="26" rx="2.5" />
        <rect x="15" y="5" width="10" height="5.5" rx="1.5" />
        <path d="M13.5 18l2 2 3.5-3.5M22.5 18.5h4.5M13.5 26.5l2 2 3.5-3.5M22.5 27h4.5" />
      </Icon>
    ),
  },
];
