import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yashwant Bitra — AI/ML Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0f1e",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 90px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            color: "#34d399",
            fontSize: "18px",
            letterSpacing: "0.15em",
            marginBottom: "28px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#34d399",
            }}
          />
          Available for full-time roles
        </div>
        <div
          style={{
            color: "#f1f5f9",
            fontSize: "88px",
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: "28px",
          }}
        >
          Yashwant Bitra
        </div>
        <div
          style={{
            color: "#38bdf8",
            fontSize: "28px",
            fontWeight: 500,
            marginBottom: "20px",
          }}
        >
          AI/ML Engineer · Full Stack Developer · Data Engineer
        </div>
        <div style={{ color: "#475569", fontSize: "20px" }}>
          MS Computer Science · Binghamton University
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "90px",
            color: "#1e293b",
            fontSize: "16px",
            borderTop: "1px solid #1e293b",
            paddingTop: "12px",
            display: "flex",
            gap: "32px",
          }}
        >
          <span style={{ color: "#334155" }}>github.com/yashzord</span>
          <span style={{ color: "#334155" }}>linkedin.com/in/yashwant-bitra</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
