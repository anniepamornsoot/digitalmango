/* Nav only — for sub-pages that don't use the home Hero */
const NavSub = () => {
  const { ink, mango, cream, cream2 } = SHARED;
  return (
    <nav style={{
      position: "sticky", top: 16, zIndex: 50, margin: "16px 24px 0",
      background: cream, border: `2.5px solid ${ink}`, borderRadius: 999,
      padding: "10px 14px 10px 22px", display: "flex", alignItems: "center", justifyContent: "space-between",
      boxShadow: `0 6px 0 ${ink}`,
    }}>
      <a href="index.html" style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 800, letterSpacing: "-0.02em", fontSize: 18, textDecoration: "none", color: ink }}>
        <span style={{ width: 28, height: 28, background: mango, borderRadius: "50%", border: `2px solid ${ink}`, display: "grid", placeItems: "center", fontSize: 14 }}>◐</span>
        digitalmango
      </a>
      <ul style={{ display: "flex", gap: 22, listStyle: "none", margin: 0, padding: 0, fontSize: 14, fontWeight: 600 }}>
        <li><a href="services.html" style={{ textDecoration: "none", color: ink }}>services</a></li>
        <li><a href="work.html" style={{ textDecoration: "none", color: ink }}>work</a></li>
        <li><a href="pricing.html" style={{ textDecoration: "none", color: ink }}>pricing</a></li>
        <li><a href="blog.html" style={{ textDecoration: "none", color: ink }}>journal</a></li>
        <li><a href="about.html" style={{ textDecoration: "none", color: ink }}>about</a></li>
        <li><a href="contact.html" style={{ textDecoration: "none", color: ink }}>say hi</a></li>
      </ul>
      <a href="contact.html" style={{
        background: mango, color: ink, padding: "10px 18px", borderRadius: 999,
        border: `2px solid ${ink}`, fontWeight: 700, fontSize: 13, textDecoration: "none",
        boxShadow: `0 3px 0 ${ink}`,
      }}>start a project →</a>
    </nav>
  );
};

window.Nav = NavSub;
