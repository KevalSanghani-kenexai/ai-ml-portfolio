import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const alt = `${SITE.shortName} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08080A",
          color: "#F2F2F0",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#8A8A85",
          }}
        >
          <span>{SITE.initials}</span>
          <span>{SITE.location}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 28,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#C6F24E",
            }}
          >
            {SITE.role}
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            {SITE.shortName}
          </div>
          <div style={{ fontSize: 28, color: "#8A8A85", maxWidth: 820 }}>
            GenAI · RAG · LLMs · AI Agents · Production Systems
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
