import { ImageResponse } from "next/og";

export const alt = "Most Wanted – Crimestoppers UK";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #361F55 0%, #1a0e2e 100%)",
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#5BB5B5",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          CRIMESTOPPERS
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            marginTop: "16px",
            lineHeight: 1.1,
          }}
        >
          Most Wanted
        </div>
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.75)",
            marginTop: "20px",
            maxWidth: "800px",
            lineHeight: 1.5,
          }}
        >
          Help us find these people. Search by region, crime type, or keyword and give information 100% anonymously.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              background: "#D92314",
              color: "white",
              padding: "14px 32px",
              borderRadius: "8px",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            View appeals
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 20,
            }}
          >
            Call 0800 555 111
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
