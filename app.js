/* DigitalMango — shared site script */

function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}
function togglePill(btn) { btn.classList.toggle('active'); }

function subscribeRipe(e) {
  e.preventDefault();
  const form = e.target;
  const thanks = document.getElementById('newsThanks');
  form.style.display = 'none';
  if (thanks) thanks.classList.add('show');
  return false;
}

/* Scroll progress */
const sp = document.getElementById('scrollProgress');
if (sp) {
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    sp.style.width = pct + '%';
  }, { passive: true });
}

/* Cursor spotlight */
const spot = document.getElementById('spotlight');
if (spot) {
  let rafId;
  document.addEventListener('mousemove', (e) => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      spot.style.left = e.clientX + 'px';
      spot.style.top  = e.clientY + 'px';
      const target = document.querySelector('.hero, .page-header');
      if (target) {
        const r = target.getBoundingClientRect();
        const inside = e.clientY >= r.top && e.clientY <= r.bottom;
        spot.classList.toggle('on', inside);
      }
      rafId = null;
    });
  });
}

/* Reveal on scroll */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.12 });
document.querySelectorAll('section, .quote-band').forEach(el => {
  if (el.classList.contains('hero')) return;
  el.classList.add('reveal'); io.observe(el);
});

/* Now widget */
const nowLines = [
  'redesigning a café in Ari',
  'sketching a tour-operator site',
  'picking type for a bakery brand',
  'drinking iced cocoa, mostly',
  'rebuilding a real-estate site',
  'plotting next month’s slots'
];
const nl = document.getElementById('nowLine');
if (nl) nl.textContent = nowLines[Math.floor(Math.random()*nowLines.length)];
const nw = document.getElementById('nowWidget');
if (nw) setTimeout(() => nw.classList.add('up'), 1800);

/* Easter egg */
let pipTaps = 0;
document.querySelectorAll('.logo-pip').forEach(p => p.addEventListener('click', (e) => {
  e.preventDefault(); pipTaps++;
  if (pipTaps >= 5) { pipTaps = 0; pipShower(); }
}));
function pipShower() {
  const colors = ['#E8A02A','#6B8A4E','#C8643D','#F2C56B','#1F3B36'];
  for (let i=0;i<40;i++) {
    const d = document.createElement('span');
    const sz = 8 + Math.random()*16;
    Object.assign(d.style, {
      position:'fixed', top:'-30px', left: (Math.random()*100)+'vw',
      width: sz+'px', height: sz+'px', borderRadius:'50%',
      background: colors[i % colors.length],
      zIndex: 999, pointerEvents:'none',
      transition:'transform 2.2s cubic-bezier(.4,0,.6,1), opacity 2.2s'
    });
    document.body.appendChild(d);
    requestAnimationFrame(() => {
      d.style.transform = `translateY(${window.innerHeight + 60}px) rotate(${Math.random()*720-360}deg)`;
      d.style.opacity = '0';
    });
    setTimeout(() => d.remove(), 2500);
  }
}
