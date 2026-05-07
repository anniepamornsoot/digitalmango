/* Process + Why pick me */
const Process = () => {
  const { ink, cream, cream2, mango, honey, leaf, clay } = SHARED;
  const steps = [
    { n: "01", t: "Free chat", body: "A 30-min call. No pitch deck, just a real conversation about your brand and what you actually need.", color: cream2, rot: -1 },
    { n: "02", t: "Tasting menu", body: "I send a written proposal — scope, timeline, fixed price. You approve, we shake hands.", color: honey, rot: 0.6 },
    { n: "03", t: "Sketch & taste", body: "I design the site in Figma. You see two directions, we pick one, then refine it together.", color: mango, rot: -0.4 },
    { n: "04", t: "Build & ship", body: "I hand-code the site. You get a staging link, we polish, then go live with care.", color: clay, color2: cream, rot: 1 },
  ];

  return (
    <div id="process" style={{ padding: "100px 56px", background: cream2, borderTop: `4px solid ${ink}` }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2.2fr", gap: 56, alignItems: "start", marginBottom: 56 }}>
        <div>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", opacity: .55 }}>04 — How it works</span>
          <h2 style={{ fontWeight: 800, fontSize: 64, lineHeight: 1.0, letterSpacing: "-0.035em", marginTop: 14 }}>
            From "hello"<br/>to <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, color: mango }}>"it's live."</span>
          </h2>
        </div>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: SHARED.ink2, maxWidth: "60ch", margin: 0 }}>
          A simple, transparent process. No surprise invoices, no disappearing freelancer act, no "we'll get back to you" for three weeks. You'll always know what's happening, and what's next.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
        {steps.map((s, i) => (
          <div key={i} style={{
            background: s.color, color: s.color2 || ink,
            border: `3px solid ${ink}`, borderRadius: 24, padding: 26,
            transform: `rotate(${s.rot}deg)`,
            boxShadow: `0 8px 0 ${ink}`,
            minHeight: 280, display: "flex", flexDirection: "column", justifyContent: "space-between"
          }}>
            <div style={{
              alignSelf: "flex-start",
              background: cream, color: ink, padding: "8px 14px", borderRadius: 999,
              border: `2px solid ${ink}`, fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, letterSpacing: ".18em", fontWeight: 700
            }}>STEP {s.n}</div>
            <div>
              <h3 style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.025em" }}>{s.t}</h3>
              <p style={{ marginTop: 10, fontSize: 14.5, lineHeight: 1.5, opacity: s.color2 ? .9 : .8, fontWeight: 500 }}>{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const WhyMe = () => {
  const { ink, cream, cream2, mango, honey, leaf, clay, ink2 } = SHARED;
  const reasons = [
    { icon: "🥭", t: "1 designer, 0 middlemen", body: "You talk to the person actually building your site. No account managers, no Slack handoffs.", bg: mango },
    { icon: "🌿", t: "Hand-built, not template-stuffed", body: "Every site is custom. No theme slop, no \"premium\" page builders bolted together.", bg: honey },
    { icon: "✦", t: "Bilingual brain", body: "Built for the way Thai SMEs actually work. Comfortable in EN and TH from day one.", bg: leaf, color: cream },
    { icon: "⏱", t: "Replies in &lt; 24 hours", body: "I'm a small studio, not a black hole. You'll always know where your project stands.", bg: cream2 },
    { icon: "✿", t: "Fixed price, no surprises", body: "Quote it once, ship it once. No \"a bit more\" emails halfway through.", bg: clay, color: cream },
    { icon: "♥", t: "I actually care about your brand", body: "Small brands deserve great sites. I work with founders who still answer the phone.", bg: cream2 },
  ];

  return (
    <div style={{ padding: "100px 56px" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", opacity: .55 }}>05 — Why pick me</span>
        <h2 style={{ fontWeight: 800, fontSize: 72, lineHeight: 1, letterSpacing: "-0.04em", marginTop: 14 }}>
          The DigitalMango<br/><span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, color: mango }}>difference.</span>
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
        {reasons.map((r, i) => (
          <div key={i} style={{
            background: r.bg, color: r.color || ink,
            border: `3px solid ${ink}`, borderRadius: 24, padding: 28,
            boxShadow: `0 6px 0 ${ink}`,
            minHeight: 200,
            display: "flex", flexDirection: "column", gap: 14
          }}>
            <span style={{ fontSize: 32 }}>{r.icon}</span>
            <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }} dangerouslySetInnerHTML={{__html: r.t}}/>
            <p style={{ fontSize: 14.5, lineHeight: 1.55, opacity: r.color ? .88 : .8, fontWeight: 500, margin: 0 }} dangerouslySetInnerHTML={{__html: r.body}}/>
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { ink, cream, cream2, mango, honey, leaf } = SHARED;
  return (
    <div id="proof" style={{ padding: "100px 56px", background: leaf, color: cream, borderTop: `4px solid ${ink}`, position: "relative", overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <div>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", opacity: .7 }}>06 — Quotes from the orchard</span>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, fontSize: 88, lineHeight: 0.95, letterSpacing: "-0.02em", marginTop: 14 }}>
            "small brands<br/>deserve<br/>great sites."
          </h2>
          <p style={{ marginTop: 28, fontSize: 17, lineHeight: 1.55, opacity: .85, maxWidth: "44ch" }}>
            Built with care for bakeries, studios, cafés, and indie shops where the founder still answers the phone.
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 12 }}>
            <a href="pricing.html" style={{ textDecoration: "none" }}><ChunkyBtn bg={mango} color={ink}>Become a happy quote →</ChunkyBtn></a>
          </div>
        </div>
        <div style={{ position: "relative", height: 460 }}>
          <div style={{ position: "absolute", top: 10, left: 40, transform: "rotate(-3deg)", background: cream, color: ink, border: `3px solid ${ink}`, borderRadius: 18, padding: 22, width: 280, boxShadow: `0 8px 0 ${ink}` }}>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 22, lineHeight: 1.25 }}>"felt like a small, kind shop online."</div>
            <div style={{ marginTop: 14, fontSize: 12, fontWeight: 700, opacity: .7 }}>★★★★★ &nbsp; Sundara Bakery, Bangkok</div>
          </div>
          <div style={{ position: "absolute", top: 130, right: 20, transform: "rotate(4deg)", background: mango, color: ink, border: `3px solid ${ink}`, borderRadius: 18, padding: 22, width: 260, boxShadow: `0 8px 0 ${ink}` }}>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 22, lineHeight: 1.25 }}>"finally a site that sounds like me."</div>
            <div style={{ marginTop: 14, fontSize: 12, fontWeight: 700, opacity: .7 }}>★★★★★ &nbsp; Mai · Wellness Studio</div>
          </div>
          <div style={{ position: "absolute", bottom: 10, left: 110, transform: "rotate(-2deg)", background: honey, color: ink, border: `3px solid ${ink}`, borderRadius: 18, padding: 22, width: 270, boxShadow: `0 8px 0 ${ink}` }}>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 22, lineHeight: 1.25 }}>"shipped in 12 days, +38% leads."</div>
            <div style={{ marginTop: 14, fontSize: 12, fontWeight: 700, opacity: .7 }}>★★★★★ &nbsp; Fern · Café owner</div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.Process = Process;
window.WhyMe = WhyMe;
window.Testimonials = Testimonials;
