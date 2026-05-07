/* Nav + Hero */
const Nav = () => {
  const { ink, mango, cream, cream2 } = SHARED;
  return (
    <div style={{ padding: "20px 32px 0", position: "sticky", top: 0, zIndex: 30, background: cream }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: cream2, border: `2px solid ${ink}`, borderRadius: 999,
        padding: "10px 14px 10px 22px",
        boxShadow: `0 4px 0 ${ink}`,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 800, letterSpacing: "-0.02em", fontSize: 18 }}>
          <span style={{
            width: 30, height: 30, borderRadius: "50%", background: mango,
            border: `2px solid ${ink}`, display: "grid", placeItems: "center", fontSize: 16
          }}>◐</span>
          digitalmango
        </div>
        <ul style={{ display: "flex", gap: 22, listStyle: "none", padding: 0, margin: 0, fontSize: 13, fontWeight: 600 }}>
          <li><a href="services.html" style={{ textDecoration: "none", color: ink }}>Services</a></li>
          <li><a href="work.html" style={{ textDecoration: "none", color: ink }}>Work</a></li>
          <li><a href="pricing.html" style={{ textDecoration: "none", color: ink }}>Pricing</a></li>
          <li><a href="blog.html" style={{ textDecoration: "none", color: ink }}>Journal</a></li>
          <li><a href="about.html" style={{ textDecoration: "none", color: ink }}>About</a></li>
          <li><a href="contact.html" style={{ textDecoration: "none", color: ink }}>Contact</a></li>
        </ul>
        <a href="contact.html" style={{ textDecoration: "none" }}><ChunkyBtn bg={mango} color={ink} size="md">Start a project →</ChunkyBtn></a>
      </div>
    </div>
  );
};

const Hero = () => {
  const { ink, cream, cream2, mango, honey, leaf, clay, ink2 } = SHARED;
  return (
    <div style={{ position: "relative", padding: "60px 56px 80px", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 80, right: 380, zIndex: 5 }}>
        <Sticker bg={honey} rotate={-8}>★ now booking · jul</Sticker>
      </div>
      <div style={{ position: "absolute", top: 240, right: 100, zIndex: 5 }}>
        <Sticker bg={leaf} color={cream} rotate={6}>EN / bilingual ready</Sticker>
      </div>
      <div style={{ position: "absolute", bottom: 90, left: 540, zIndex: 5 }}>
        <Sticker bg={clay} color={cream} rotate={-4}>1 designer · 0 middlemen</Sticker>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 0.6fr", gap: 40, alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: 156, lineHeight: 0.88, letterSpacing: "-0.05em", fontWeight: 800, margin: 0 }}>
            Websites<br />
            that taste<br />
            <span style={{
              background: mango, color: ink,
              padding: "0 22px",
              borderRadius: 24,
              border: `4px solid ${ink}`,
              display: "inline-block",
              boxShadow: `0 8px 0 ${ink}`,
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: 1.05,
              transform: "rotate(-1.5deg)"
            }}>ripe</span>.
          </h1>
          <p style={{ marginTop: 36, fontSize: 22, lineHeight: 1.45, color: ink2, maxWidth: "44ch", fontWeight: 500 }}>
            I'm DigitalMango — a one-person web studio in Bangkok, building <b style={{ color: ink }}>warm, fun-on-purpose websites</b> for small &amp; medium brands.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="contact.html" style={{ textDecoration: "none" }}><ChunkyBtn>Start a project →</ChunkyBtn></a>
            <a href="work.html" style={{ textDecoration: "none" }}><ChunkyBtn bg={cream2} color={ink}>Peek the work</ChunkyBtn></a>
          </div>
          <div style={{ marginTop: 36, display: "flex", gap: 28, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", opacity: .7 }}>
            <span>Replies in &lt; 24h</span>
            <span>·</span>
            <span>Free 30-min chat</span>
            <span>·</span>
            <span>Bangkok 🌞 anywhere</span>
          </div>
        </div>

        {/* Stack of polaroid work previews */}
        <div style={{ position: "relative", aspectRatio: "0.85/1", minHeight: 460 }}>
          {/* back card — restaurant */}
          <div style={{
            position: "absolute", top: 18, right: -10, transform: "rotate(6deg)",
            background: cream2, border: `3px solid ${ink}`, borderRadius: 14,
            padding: 12, paddingBottom: 44, width: "82%", boxShadow: `0 10px 0 ${ink}`,
            zIndex: 1
          }}>
            <div style={{
              aspectRatio: "4/3", borderRadius: 8, border: `2px solid ${ink}22`,
              background: `linear-gradient(160deg, ${clay} 0%, ${honey} 100%)`,
              position: "relative", overflow: "hidden"
            }}>
              <div style={{ position: "absolute", inset: 12, borderRadius: 4, background: cream + "22", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 10 }}>
                <div style={{ display: "flex", gap: 4 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: cream }}/>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: cream + "88" }}/>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: cream + "66" }}/>
                </div>
                <div style={{ color: cream, fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 22, lineHeight: 1 }}>SOM<br/>TAM</div>
              </div>
            </div>
            <div style={{ marginTop: 10, fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: ink, fontSize: 14, textAlign: "center" }}>baan somtam · 2025</div>
          </div>

          {/* middle card — wellness */}
          <div style={{
            position: "absolute", top: 80, left: -20, transform: "rotate(-5deg)",
            background: cream2, border: `3px solid ${ink}`, borderRadius: 14,
            padding: 12, paddingBottom: 44, width: "82%", boxShadow: `0 10px 0 ${ink}`,
            zIndex: 2
          }}>
            <div style={{
              aspectRatio: "4/3", borderRadius: 8, border: `2px solid ${ink}22`,
              background: `linear-gradient(160deg, ${leaf} 0%, ${honey} 130%)`,
              position: "relative", overflow: "hidden"
            }}>
              <div style={{ position: "absolute", inset: 12, borderRadius: 4, background: cream + "1a", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 10 }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, color: cream, letterSpacing: ".18em", fontWeight: 700 }}>WELLNESS / ABOUT</div>
                <div style={{ color: cream, fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 22, lineHeight: 1 }}>quiet<br/>studio.</div>
              </div>
            </div>
            <div style={{ marginTop: 10, fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: ink, fontSize: 14, textAlign: "center" }}>mai wellness · 2025</div>
          </div>

          {/* front card — bakery (featured) */}
          <a href="case-sundara.html" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{
            position: "absolute", bottom: 0, right: 10, transform: "rotate(-2deg)",
            background: cream, border: `3px solid ${ink}`, borderRadius: 14,
            padding: 12, paddingBottom: 44, width: "86%", boxShadow: `0 14px 0 ${ink}`,
            zIndex: 3, cursor: "pointer",
            transition: "transform .15s ease, box-shadow .15s ease"
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "rotate(-2deg) translateY(-4px)"; e.currentTarget.style.boxShadow = `0 18px 0 ${ink}`; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "rotate(-2deg)"; e.currentTarget.style.boxShadow = `0 14px 0 ${ink}`; }}
          >
            <div style={{
              aspectRatio: "4/3", borderRadius: 8, border: `2px solid ${ink}22`,
              background: `radial-gradient(circle at 30% 25%, ${honey}, transparent 55%), linear-gradient(160deg, ${mango} 0%, #D9892A 70%)`,
              position: "relative", overflow: "hidden"
            }}>
              <div style={{ position: "absolute", top: 10, left: 10, right: 10, display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono', monospace", fontSize: 8, color: ink, letterSpacing: ".18em", fontWeight: 700 }}>
                <span>SUNDARA / HOME</span>
                <span>2026</span>
              </div>
              <div style={{ position: "absolute", bottom: 12, left: 12, right: 12, display: "flex", justifyContent: "space-between", alignItems: "end" }}>
                <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 36, color: ink, lineHeight: 0.9 }}>"ripe."</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, color: ink, letterSpacing: ".18em", fontWeight: 700, textAlign: "right", lineHeight: 1.4 }}>+38%<br/>LEADS ↗</span>
              </div>
            </div>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const Marquee = () => {
  const { ink, cream, mango, honey } = SHARED;
  return (
    <div style={{ background: ink, color: cream, padding: "20px 0", borderTop: `4px solid ${ink}`, overflow: "hidden" }}>
      <div style={{ display: "flex", gap: 40, fontWeight: 800, fontSize: 22, whiteSpace: "nowrap", letterSpacing: "-0.01em" }}>
        {Array.from({ length: 3 }).flatMap((_,k) => [
          <span key={`a${k}`}>WEBSITES THAT TASTE RIPE</span>,
          <span key={`b${k}`} style={{ color: mango, fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 28 }}>◐ digitalmango ◐</span>,
          <span key={`c${k}`}>SMALL STUDIO · BIG CARE</span>,
          <span key={`d${k}`} style={{ color: honey, fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 28 }}>◐ bangkok 2026 ◐</span>,
        ])}
      </div>
    </div>
  );
};

window.Nav = Nav;
window.Hero = Hero;
window.Marquee = Marquee;
