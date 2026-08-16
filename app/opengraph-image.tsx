import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${brand.name} — Brand Guidelines`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F6F4F0",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 3,
            color: "#8A8D92",
          }}
        >
          <span>BRAND GUIDELINES</span>
          <span>{brand.version}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 128, fontWeight: 800, color: "#17191C" }}>
            {brand.name}
            <span style={{ color: "#E12B1A" }}>.</span>
          </div>
          <div style={{ fontSize: 40, color: "#33373E", marginTop: 16 }}>{brand.tagline}</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 3,
            color: "#8A8D92",
          }}
        >
          <span>{brand.legal.toUpperCase()}</span>
          <span>{brand.domain.toUpperCase()}</span>
        </div>
      </div>
    ),
    size,
  );
}
