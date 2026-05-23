import { ImageResponse } from "next/og";

export const alt = "Crimestoppers – Give information about crime anonymously";
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
          background: "linear-gradient(135deg, #361F55 0%, #49257D 50%, #361F55 100%)",
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
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
              fontSize: 56,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.15,
              maxWidth: "900px",
            }}
          >
            Give information about crime anonymously
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.75)",
              marginTop: "12px",
              maxWidth: "700px",
              lineHeight: 1.5,
            }}
          >
            100% anonymous. Always. Call 0800 555 111 or use our secure online form.
          </div>
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
            Give information
          </div>
          <div
            style={{
              background: "#49257D",
              color: "white",
              padding: "14px 32px",
              borderRadius: "8px",
              fontSize: 20,
              fontWeight: 700,
              border: "2px solid rgba(255,255,255,0.3)",
            }}
          >
            0800 555 111
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
