import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#07040f",
          color: "#d6b56d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          border: "1px solid #d6b56d",
        }}
      >
        I
      </div>
    ),
    size,
  );
}
