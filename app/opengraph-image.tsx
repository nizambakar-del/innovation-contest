import { ImageResponse } from "next/og";

export const alt = "Innovation Contest 2027 — Innovation Go Global";
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
          background: "#07040f",
          color: "#f6f3ec",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#d6b56d" }}>
          KEMENTERIAN KOMUNIKASI
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 0.92, letterSpacing: -2 }}>Innovation</div>
          <div style={{ fontSize: 84, lineHeight: 0.92, color: "#d6b56d" }}>Go Global</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#aab3c5" }}>
          <span>Innovation Contest 2027</span>
          <span>8 Ogos 2027 · Putrajaya</span>
        </div>
      </div>
    ),
    size,
  );
}
