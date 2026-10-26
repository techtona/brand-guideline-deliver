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

export const brandIcons: { label: string; art: ReactNode }[] = [
  {
    label: "Flock",
    art: (
      <Icon>
        <circle cx="20" cy="22" r="11" />
        <path d="M20 11V6" />
        <circle cx="20" cy="5" r="1.6" fill={INK} stroke="none" />
      </Icon>
    ),
  },
  {
    label: "Capital",
    art: (
      <Icon>
        <circle cx="20" cy="20" r="12" />
        <path d="M20 14v12M16 18h6.5a2.5 2.5 0 010 5H16" />
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
        <path d="M20 33s10-8 10-16a10 10 0 10-20 0c0 8 10 16 10 16z" />
        <circle cx="20" cy="17" r="3.5" />
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
        <path d="M14 30c-4 0-7-3-7-7s3-7 7-7c0-5 4-9 9-9 4 0 8 3 9 7 3 0 5 3 5 6s-3 6-6 6" />
        <path d="M20 16v10M16 22l4 4 4-4" />
      </Icon>
    ),
  },
  {
    label: "Partner",
    art: (
      <Icon>
        <circle cx="16" cy="15" r="5" />
        <path d="M7 31c0-5 4-8 9-8s9 3 9 8" />
        <path d="M26 14h7M29.5 10.5v7" />
      </Icon>
    ),
  },
  {
    label: "Transparency",
    art: (
      <Icon>
        <path d="M20 7v6M20 27v6M7 20h6M27 20h6" />
        <circle cx="20" cy="20" r="6" />
      </Icon>
    ),
  },
];
