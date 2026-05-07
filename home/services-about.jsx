/* Services + About */
const Services = () => {
  const { ink, cream, cream2, mango, honey, leaf } = SHARED;
  const items = [
    { num: "01", t: "New websites", body: "Strategy, design, build. Launch a fresh site that fits your brand like a good shirt — responsive, fast, and ready to grow.", price: "฿35,000+", tag: "4–6 weeks", bg: mango, color: ink, rot: -1.2,
      bullets: ["Strategy & sitemap", "Custom design", "Build & launch", "1 month free care"] },
    { num: "02", t: "Refreshes", body: "Same content, new posture. A focused 2–3 week sprint that gives a tired site a fresh face without a full teardown.", price: "฿18,000+", tag: "2–3 weeks", bg: cream2, color: ink, rot: 0.8,
      bullets: ["Visual refresh", "Page-by-page polish", "Speed pass", "Mobile cleanup"] },
    { num: "03", t: "Care & iter.", body: "A monthly retainer where I'm in your inbox — fixing, tweaking, growing your site every month so it never goes stale.", price: "฿6,000/mo", tag: "Monthly", bg: ink, color: cream, rot: -0.6,
      bullets: ["Updates & fixes", "Content additions", "Monthly report", "Priority replies"] },
  ];

  return (
    <div id="services" style={{ padding: "100px 56px 90px" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", opacity: .55 }}>02 — Pick your slice</span>
        <h2 style={{ fontWeight: 800, fontSize: 80, lineHeight: 1, letterSpacing: "-0.04em", marginTop: 14 }}>
          Three flavors,<br/>
          <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, color: mango }}>same orchard.</span>
        </h2>
        <p style={{ marginTop: 18, fontSize: 18, color: SHARED.ink2, maxWidth: "52ch", margin: "18px auto 0", lineHeight: 1.55 }}>
          Every project is hand-built end-to-end. No middlemen, no template farms — one designer who answers your messages and sweats every detail.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 22 }}>
        {items.map((s, i) => (
          <a key={i} href="services.html" style={{ textDecoration: "none", color: "inherit", display: "block",
            background: s.bg, color: s.color,
            borderRadius: 28, padding: 28,
            border: `3px solid ${ink}`,
            transform: `rotate(${s.rot}deg)`,
            boxShadow: `0 8px 0 ${ink}, 0 14px 30px -14px ${ink}88`,
            minHeight: 460, display: "flex", flexDirection: "column", justifyContent: "space-between",
            transition: "transform .18s ease, box-shadow .18s ease"
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = `rotate(${s.rot}deg) translateY(-4px)`; e.currentTarget.style.boxShadow = `0 12px 0 ${ink}, 0 18px 36px -16px ${ink}88`; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = `rotate(${s.rot}deg)`; e.currentTarget.style.boxShadow = `0 8px 0 ${ink}, 0 14px 30px -14px ${ink}88`; }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{
                  background: cream, color: ink, padding: "6px 12px", borderRadius: 999,
                  border: `2px solid ${ink}`, fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10, letterSpacing: ".14em", fontWeight: 700
                }}>NO. {s.num}</span>
                <span style={{ fontSize: 12, fontWeight: 600, opacity: .8 }}>{s.tag}</span>
              </div>
              <h3 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.03em", marginTop: 28 }}>{s.t}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.5, marginTop: 12, opacity: s.color === cream ? .85 : .8, fontWeight: 500 }}>{s.body}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "flex", flexDirection: "column", gap: 8 }}>
                {s.bullets.map((b, j) => (
                  <li key={j} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13.5, fontWeight: 600, opacity: .9 }}>
                    <span style={{ width: 18, height: 18, borderRadius: "50%", background: s.color === cream ? mango : ink, color: s.color === cream ? ink : cream, border: s.color === cream ? `1.5px solid ${ink}` : "none", display: "grid", placeItems: "center", fontSize: 11, fontWeight: 800, flexShrink: 0 }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginTop: 24, paddingTop: 20, borderTop: `2px dashed ${s.color === cream ? cream + '44' : ink + '33'}` }}>
              <span style={{ fontWeight: 800, fontSize: 26, letterSpacing: "-0.02em" }}>{s.price}</span>
              <span style={{
                background: s.color === cream ? mango : ink,
                color: s.color === cream ? ink : cream,
                width: 42, height: 42, borderRadius: "50%",
                display: "grid", placeItems: "center",
                border: s.color === cream ? `2px solid ${ink}` : "none",
                fontWeight: 700, fontSize: 18
              }}>→</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const { ink, cream, cream2, mango, honey, leaf, clay } = SHARED;
  return (
    <div id="about" style={{ background: leaf, color: cream, padding: "100px 56px", borderTop: `4px solid ${ink}`, position: "relative", overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div style={{ position: "relative", height: 520 }}>
          {/* polaroid 1 — designer photo placeholder */}
          <div style={{
            position: "absolute", top: 20, left: 30, transform: "rotate(-5deg)",
            background: cream, border: `3px solid ${ink}`, borderRadius: 14,
            padding: 14, paddingBottom: 56, boxShadow: `0 10px 0 ${ink}`, width: 280
          }}>
            <div style={{
              aspectRatio: "4/5", borderRadius: 8,
              background: `radial-gradient(circle at 35% 30%, ${honey}, ${mango} 60%, ${clay})`,
              display: "grid", placeItems: "center"
            }}>
              <span style={{ fontSize: 80 }}>🥭</span>
            </div>
            <div style={{ marginTop: 12, fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: ink, fontSize: 18, textAlign: "center" }}>that's me, hi.</div>
          </div>
          {/* sticker note */}
          <div style={{
            position: "absolute", top: 100, right: 30, transform: "rotate(5deg)",
            background: honey, color: ink, border: `3px solid ${ink}`, borderRadius: 18,
            padding: 22, width: 240, boxShadow: `0 8px 0 ${ink}`
          }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: ".18em", fontWeight: 700, opacity: .65 }}>FROM MY DESK</div>
            <div style={{ marginTop: 10, fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 22, lineHeight: 1.25 }}>"slow web is good web."</div>
          </div>
          {/* mini facts sticker */}
          <div style={{
            position: "absolute", bottom: 30, left: 80, transform: "rotate(-3deg)",
            background: cream2, color: ink, border: `3px solid ${ink}`, borderRadius: 18,
            padding: "18px 22px", boxShadow: `0 8px 0 ${ink}`, display: "flex", gap: 22
          }}>
            <div>
              <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em" }}>4+</div>
              <div style={{ fontSize: 11, fontWeight: 700, opacity: .65, textTransform: "uppercase", letterSpacing: ".1em" }}>years</div>
            </div>
            <div style={{ width: 1.5, background: ink + "22" }}></div>
            <div>
              <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em" }}>20+</div>
              <div style={{ fontSize: 11, fontWeight: 700, opacity: .65, textTransform: "uppercase", letterSpacing: ".1em" }}>projects</div>
            </div>
            <div style={{ width: 1.5, background: ink + "22" }}></div>
            <div>
              <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em" }}>1</div>
              <div style={{ fontSize: 11, fontWeight: 700, opacity: .65, textTransform: "uppercase", letterSpacing: ".1em" }}>designer</div>
            </div>
          </div>
        </div>

        <div>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", opacity: .7 }}>03 — About the studio</span>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, fontSize: 88, lineHeight: 0.95, letterSpacing: "-0.02em", marginTop: 14 }}>
            Hello,<br/>I'm <span style={{ color: honey }}>DigitalMango.</span>
          </h2>
          <p style={{ marginTop: 28, fontSize: 18, lineHeight: 1.6, opacity: .92, maxWidth: "44ch" }}>
            I'm a freelance web designer based in Bangkok, building websites for <b>small &amp; medium brands</b> in Thailand and beyond. Every project is hand-built, considered, and ships with the care of a one-person studio.
          </p>
          <p style={{ marginTop: 18, fontSize: 18, lineHeight: 1.6, opacity: .85, maxWidth: "44ch" }}>
            The brand is named after the fruit I think about way too often — sweet, sunny, and a little messy in the best way. That's the energy I bring to every site.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
            <a href="about.html" style={{ textDecoration: "none" }}><ChunkyBtn bg={cream} color={ink}>More about me →</ChunkyBtn></a>
            <a href="contact.html" style={{ textDecoration: "none" }}><ChunkyBtn bg={mango} color={ink}>Say hi 👋</ChunkyBtn></a>
          </div>
        </div>
      </div>
    </div>
  );
};

window.Services = Services;
window.About = About;
