import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#3A2A1D",
          borderRadius: "50%",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2.5L13.9 9.3L20.5 12L13.9 14.7L12 21.5L10.1 14.7L3.5 12L10.1 9.3L12 2.5Z"
            fill="#FBF7EF"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
