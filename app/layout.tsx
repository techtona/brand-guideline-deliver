import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Open_Sans } from "next/font/google";
import { brand } from "@/lib/brand";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-open-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-plex-mono",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://deliver-brand-guidelines.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${brand.name} — Brand Guidelines`,
  description: brand.essence,
  applicationName: `${brand.name} Brand Guidelines`,
  authors: [{ name: brand.legal }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: `${brand.name} — Brand Guidelines`,
    title: `${brand.name} — Brand Guidelines ${brand.version}`,
    description: brand.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — Brand Guidelines`,
    description: brand.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: "#F6F4F0",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${openSans.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
