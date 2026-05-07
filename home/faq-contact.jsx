/* FAQ + Contact + Footer */
const FAQ = () => {
  const { ink, cream, cream2, mango, honey, leaf } = SHARED;
  const faqs = [
    { q: "How much does a website cost?", a: "Brand-new sites start at ฿35,000. Refreshes from ฿18,000. Care retainers from ฿6,000/month. Every quote is fixed up-front — no surprise invoices, no scope-creep panic." },
    { q: "How long does it take?", a: "A typical site takes 4–6 weeks from kickoff to launch. Refreshes are 2–3 weeks. I work on 2 projects at a time max so yours actually gets attention." },
    { q: "Do you build on WordPress / Webflow / Shopify?", a: "Mostly Webflow and Framer for marketing sites, Shopify for stores. I'll recommend whatever fits your team — never something that locks you into me." },
    { q: "What about copywriting and photos?", a: "I write the structure and a first draft of copy. Photos: I'll help direct a shoot or curate stock. Either way, your site doesn't ship with lorem ipsum." },
    { q: "Do you do SEO?", a: "Technical SEO (speed, structure, metadata, sitemap) is included in every build. Ongoing keyword strategy is part of the Care retainer." },
    { q: "Can we just hop on a call first?", a: "Please. The 30-min intro chat is free, no pitch. If we're not a fit I'll happily point you to a friend who is." },
  ];

  return (
    <div id="faq" style={{ padding: "100px 56px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 56, alignItems: "start" }}>
        <div style={{ position: "sticky", top: 100 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", opacity: .55 }}>07 — Questions</span>
          <h2 style={{ fontWeight: 800, fontSize: 64, lineHeight: 1, letterSpacing: "-0.04em", marginTop: 14 }}>
            Frequently<br/>asked,<br/>
            <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400, color: mango }}>honestly answered.</span>
          </h2>
          <div style={{ marginTop: 28 }}>
            <Sticker bg={honey} rotate={-3}>Ask anything else →</Sticker>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {faqs.map((f, i) => (
            <details key={i} style={{
              background: cream2, border: `2.5px solid ${ink}`, borderRadius: 20,
              padding: "20px 24px", boxShadow: `0 4px 0 ${ink}`, cursor: "pointer"
            }} open={i === 0}>
              <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", listStyle: "none", fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em" }}>
                <span style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: mango, fontWeight: 700, letterSpacing: ".14em" }}>0{i+1}</span>
                  {f.q}
                </span>
                <span style={{ fontSize: 22, fontWeight: 800 }}>+</span>
              </summary>
              <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.6, color: SHARED.ink2 }}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const { ink, cream, cream2, mango, honey, leaf, clay } = SHARED;
  return (
    <div id="contact" style={{ padding: "120px 56px", background: ink, color: cream, position: "relative", overflow: "hidden", borderTop: `4px solid ${ink}` }}>
      {/* deco stickers */}
      <div style={{ position: "absolute", top: 80, right: 80, zIndex: 5 }}>
        <Sticker bg={mango} rotate={-6}>★ Booking jul–sep 2026</Sticker>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "center" }}>
        <div>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", opacity: .55 }}>08 — Say hi</span>
          <h2 style={{ fontWeight: 800, fontSize: 124, lineHeight: 0.9, letterSpacing: "-0.05em", marginTop: 18 }}>
            Let's make<br/>something{" "}
            <span style={{
              background: mango, color: ink,
              padding: "0 22px",
              borderRadius: 24,
              border: `4px solid ${cream}`,
              display: "inline-block",
              boxShadow: `0 8px 0 ${cream}`,
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontWeight: 400,
              transform: "rotate(-2deg)"
            }}>tasty</span>.
          </h2>
          <p style={{ marginTop: 32, fontSize: 19, lineHeight: 1.55, opacity: .85, maxWidth: "44ch" }}>
            Tell me about your brand. I'll reply within 24 hours with honest thoughts and a free 30-min call link.
          </p>
          <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { lbl: "Email", v: "hello@digitalmango.biz", icon: "✉" },
              { lbl: "Line", v: "@digitalmango", icon: "💬" },
              { lbl: "Bangkok", v: "Thailand · GMT+7", icon: "📍" },
            ].map((c, i) => (
              <div key={i} style={{
                background: cream + "12", border: `2px solid ${cream}33`, borderRadius: 18,
                padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center"
              }}>
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <span style={{ fontSize: 20 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: ".18em", opacity: .55, fontWeight: 700 }}>{c.lbl.toUpperCase()}</div>
                    <div style={{ fontSize: 17, fontWeight: 600, marginTop: 2 }}>{c.v}</div>
                  </div>
                </div>
                <span style={{ fontSize: 18, opacity: .7 }}>↗</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form sticker card */}
        <div style={{
          background: cream, color: ink, border: `3px solid ${cream}`, borderRadius: 28,
          padding: 32, boxShadow: `0 12px 0 ${mango}`,
          transform: "rotate(1.2deg)"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: ".18em", fontWeight: 700, color: mango }}>NEW PROJECT FORM</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, opacity: .55 }}>~ 2 min</span>
          </div>
          <h3 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>Tell me a little.</h3>
          <p style={{ marginTop: 8, fontSize: 14, color: SHARED.ink2 }}>I'll reply within 24h, honest.</p>
          <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { l: "Your name", p: "Mai S." },
              { l: "Email", p: "you@brand.co" },
              { l: "What do you do?", p: "Bakery in Sukhumvit" },
            ].map((f, i) => (
              <div key={i}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: ".16em", fontWeight: 700, opacity: .55, marginBottom: 6 }}>{f.l.toUpperCase()}</div>
                <div style={{
                  background: cream2, border: `2px solid ${ink}`, borderRadius: 14,
                  padding: "12px 14px", fontSize: 15, color: ink + "88"
                }}>{f.p}</div>
              </div>
            ))}
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: ".16em", fontWeight: 700, opacity: .55, marginBottom: 6 }}>WHAT DO YOU NEED?</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["New site", "Refresh", "Care", "Not sure"].map((t, i) => (
                  <span key={i} style={{
                    background: i === 0 ? mango : cream2, color: ink,
                    border: `2px solid ${ink}`, borderRadius: 999,
                    padding: "8px 14px", fontSize: 13, fontWeight: 700,
                    boxShadow: i === 0 ? `0 3px 0 ${ink}` : "none"
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div style={{ marginTop: 26 }}>
            <ChunkyBtn bg={ink} color={cream} style={{ width: "100%", justifyContent: "center" }}>Send it →</ChunkyBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const { ink, cream, cream2, mango, honey, leaf } = SHARED;
  return (
    <div style={{ background: cream, color: ink, padding: "60px 56px 40px", borderTop: `4px solid ${ink}` }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 60 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontWeight: 800, letterSpacing: "-0.02em", fontSize: 22 }}>
            <span style={{ width: 36, height: 36, borderRadius: "50%", background: mango, border: `2px solid ${ink}`, display: "grid", placeItems: "center", fontSize: 18 }}>◐</span>
            digitalmango
          </div>
          <p style={{ marginTop: 18, fontSize: 15, color: SHARED.ink2, maxWidth: "36ch", lineHeight: 1.6 }}>
            A one-person web studio in Bangkok, building warm, fun-on-purpose websites for small brands.
          </p>
        </div>
        {[
          { h: "Studio", l: [["Services", "services.html"], ["About", "about.html"], ["Pricing", "pricing.html"], ["Work", "work.html"], ["Contact", "contact.html"]] },
          { h: "Resources", l: [["Journal", "blog.html"], ["FAQ", "#faq"], ["Brand kit", "#"]] },
          { h: "Elsewhere", l: [["Instagram", "#"], ["TikTok", "#"], ["Line · @digitalmango", "#"], ["Email", "mailto:hello@digitalmango.biz"]] },
        ].map((c, i) => (
          <div key={i}>
            <h5 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", opacity: .55, fontWeight: 700, marginBottom: 14 }}>{c.h}</h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8, fontSize: 14, fontWeight: 600 }}>
              {c.l.map(([label, href], j) => <li key={j}><a href={href} style={{ textDecoration: "none", color: "inherit" }}>{label}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{
        background: ink, color: cream, borderRadius: 22, padding: "44px 32px",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24
      }}>
        <div style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 56, lineHeight: 0.95, letterSpacing: "-0.02em" }}>
          ripe ideas, <span style={{ color: mango }}>shipped with care.</span>
        </div>
        <a href="contact.html" style={{ textDecoration: "none" }}><ChunkyBtn bg={mango} color={ink}>Start a project →</ChunkyBtn></a>
      </div>
      <div style={{ marginTop: 28, display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", opacity: .55 }}>
        <span>© 2026 DigitalMango · Bangkok</span>
        <span>Made by hand · ◐</span>
      </div>
    </div>
  );
};

window.FAQ = FAQ;
window.Contact = Contact;
window.Footer = Footer;
