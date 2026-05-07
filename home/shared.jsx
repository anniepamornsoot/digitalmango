/* DigitalMango Home — Option B (Sticker Playful) */

const SHARED = {
  ink: "#1F3B36",
  cream: "#F6EFE3",
  cream2: "#FBF6EC",
  mango: "#E8A02A",
  honey: "#F2C56B",
  leaf: "#6B8A4E",
  clay: "#C8643D",
  ink2: "#2C504A",
};

const Sticker = ({ children, bg, color, rotate = 0, style = {} }) => {
  const { ink } = SHARED;
  return (
    <div style={{
      background: bg, color: color || ink,
      borderRadius: 999, padding: "10px 16px",
      fontWeight: 700, fontSize: 12, letterSpacing: ".06em", textTransform: "uppercase",
      transform: `rotate(${rotate}deg)`,
      boxShadow: `0 4px 0 0 ${ink}`,
      border: `2px solid ${ink}`,
      display: "inline-flex", alignItems: "center", gap: 6,
      ...style
    }}>{children}</div>
  );
};

const ChunkyBtn = ({ children, bg, color, size = "lg", style = {} }) => {
  const { ink, cream } = SHARED;
  const padding = size === "sm" ? "10px 16px" : size === "md" ? "12px 20px" : "16px 24px";
  const fontSize = size === "sm" ? 13 : size === "md" ? 14 : 15;
  return (
    <button style={{
      background: bg || ink, color: color || cream,
      border: `2px solid ${ink}`,
      padding, borderRadius: 999, fontSize, fontWeight: 700,
      boxShadow: `0 4px 0 ${ink}`, cursor: "pointer",
      fontFamily: "inherit",
      transition: "transform .12s ease, box-shadow .12s ease",
      ...style
    }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 6px 0 ${ink}`; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 4px 0 ${ink}`; }}
    >{children}</button>
  );
};

window.SHARED = SHARED;
window.Sticker = Sticker;
window.ChunkyBtn = ChunkyBtn;
