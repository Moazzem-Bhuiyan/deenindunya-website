import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #FBF7EF 0%, #F5EDDF 55%, #EAD9BC 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#3A2A1D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2.5L13.9 9.3L20.5 12L13.9 14.7L12 21.5L10.1 14.7L3.5 12L10.1 9.3L12 2.5Z"
                fill="#FBF7EF"
              />
            </svg>
          </div>
          <span style={{ fontSize: 26, color: "#3A2A1D" }}>
            Deen in Dunya
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 48,
            fontSize: 72,
            lineHeight: 1.08,
            color: "#3A2A1D",
          }}
        >
          <span>Your Deen.</span>
          <span>Your Dunya.</span>
          <span style={{ color: "#8A7256", fontStyle: "italic" }}>
            One space.
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
