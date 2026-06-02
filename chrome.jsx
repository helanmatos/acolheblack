// Shared chrome for ACOLHE pages — exposes Icon, Logo, DandaraAvatar, Reveal, Nav, Footer, FloatingDocks via window
const { useState: usePgState, useEffect: usePgEffect, useRef: usePgRef } = React;

const PAGE_LINKS = [
  { label: "Início", href: "index.html" },
  { label: "Acolhimento", href: "acolhimento.html" },
  { label: "Jurídico", href: "juridico.html" },
  { label: "Instituto", href: "instituto.html" },
];

const WHATS_URL     = "https://wa.me/5511953985365?text=Ol%C3%A1%2C%20vim%20do%20site%20Acolhe%20Black%20e%20preciso%20de%20ajuda...";
const WHATS_URGENTE = "https://wa.me/5511953985365?text=Sofri%20racismo%20agora%20e%20preciso%20de%20ajuda%20urgente.";
const PHONE = "11 3325-1000 ramal 110";
const PHONE_TEL = "tel:+551133251000";
const ADDRESS_LINES = [
  "Faculdade Zumbi dos Palmares",
  "Av. Santos Dumont, 843 — Luz",
  "São Paulo, SP — CEP 01101-000",
];

function PgReveal({ children, delay = 0, as: Tag = "div", className = "", style = {} }) {
  const ref = usePgRef(null);
  const [shown, setShown] = usePgState(false);
  usePgEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={className} style={{
      ...style, opacity: shown ? 1 : 0,
      transform: shown ? "translateY(0)" : "translateY(24px)",
      transition: `opacity .8s ease ${delay}ms, transform .8s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
    }}>{children}</Tag>
  );
}

const PgIcon = {
  Whatsapp: ({ size = 24, color = "white" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.6.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4c1.4.7 3 1.1 4.7 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3c-.9-1.4-1.3-3-1.3-4.5 0-4.6 3.7-8.3 8.3-8.3s8.3 3.7 8.3 8.3-3.7 8.3-8.4 8.3z" />
    </svg>
  ),
  Phone: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 4 L9 4 L11 9 L8.5 11 C9.5 13.5 11.5 15.5 14 16.5 L16 14 L21 16 L21 20 C21 21 20 22 19 22 C10 22 2 14 2 5 C2 4 3 3 4 3 L5 4 Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  Pin: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2 C16 2 20 5 20 10 C20 15 12 22 12 22 C12 22 4 15 4 10 C4 5 8 2 12 2 Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
      <circle cx="12" cy="10" r="3" stroke={color} strokeWidth="2" fill="none" />
    </svg>
  ),
  Heart: ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 21 C5 16 2 12 2 8 C2 5 4 3 7 3 C9 3 11 4 12 6 C13 4 15 3 17 3 C20 3 22 5 22 8 C22 12 19 16 12 21 Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  Send: ({ size = 18, color = "white" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M3 12 L21 4 L13 22 L11 13 Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" /></svg>),
  Close: ({ size = 18, color = "white" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M5 5 L19 19 M19 5 L5 19" stroke={color} strokeWidth="2.2" strokeLinecap="round" /></svg>),
  Arrow: ({ size = 16, color = "currentColor" }) => (<svg width={size} height={size} viewBox="0 0 16 16" fill="none"><path d="M2 8 H13 M9 4 L13 8 L9 12" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>),
  Instagram: ({ size = 20, color = "currentColor" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke={color} strokeWidth="1.8" /><circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.8" /><circle cx="17.5" cy="6.5" r="1" fill={color} /></svg>),
  Menu: ({ size = 22, color = "currentColor" }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M3 7 H21 M3 12 H21 M3 17 H21" stroke={color} strokeWidth="2" strokeLinecap="round" /></svg>),
};

function PgLogo({ color = "white", size = 26 }) {
  return (
    <a href="index.html" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
      <img
        src="logo%20acolhe.png?v=2"
        alt="ACOLHE — Racismo Zero"
        style={{
          height: 144,
          width: "auto",
          display: "block",
          filter: color === "white" ? "none" : "invert(1) brightness(0)",
          transition: "filter .35s ease",
        }}
      />
    </a>
  );
}

function PgDandaraAvatar({ size = 360, mini = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 360 360" style={{ display: "block" }}>
      <defs>
        <radialGradient id={`dndBg${size}`} cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#F4C9B6" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#F4C9B6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`dndSkin${size}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A85240" /><stop offset="100%" stopColor="#7E3A2C" />
        </linearGradient>
        <linearGradient id={`dndWrap${size}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F4C9B6" /><stop offset="100%" stopColor="#D4745E" />
        </linearGradient>
      </defs>
      <circle cx="180" cy="170" r="155" fill={`url(#dndBg${size})`} />
      <path d="M70 360 C70 280 120 245 180 245 C240 245 290 280 290 360 Z" fill="#7E3A2C" />
      <path d="M120 360 C120 305 145 285 180 285 C215 285 240 305 240 360 Z" fill="#5C2A1F" opacity="0.6" />
      <path d="M158 240 Q180 260 202 240 L202 260 Q180 275 158 260 Z" fill={`url(#dndSkin${size})`} />
      <ellipse cx="180" cy="170" rx="68" ry="78" fill={`url(#dndSkin${size})`} />
      <path d="M112 152 C112 92 152 70 180 70 C212 70 250 95 250 150 C250 158 245 158 240 152 C232 142 218 134 200 134 C180 134 165 144 158 156 C150 170 138 168 128 162 C120 158 112 158 112 152 Z" fill={`url(#dndWrap${size})`} />
      <path d="M118 138 C130 100 162 88 188 92 C210 95 220 108 218 116 C214 110 200 106 184 108 C162 110 142 124 130 144 C124 152 118 148 118 138 Z" fill="#E84118" opacity="0.85" />
      <ellipse cx="245" cy="118" rx="14" ry="10" fill="#D4745E" transform="rotate(-20 245 118)" />
      <ellipse cx="252" cy="108" rx="8" ry="5" fill="#E84118" transform="rotate(-15 252 108)" />
      <circle cx="113" cy="186" r="6" fill="#E8B14B" /><circle cx="247" cy="186" r="6" fill="#E8B14B" />
      <ellipse cx="158" cy="172" rx="4" ry="5" fill="#1A0E08" /><ellipse cx="202" cy="172" rx="4" ry="5" fill="#1A0E08" />
      <path d="M148 158 Q158 153 168 158" stroke="#1A0E08" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M192 158 Q202 153 212 158" stroke="#1A0E08" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M178 188 Q176 200 180 206 Q184 208 184 204" stroke="#5C2A1F" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M168 218 Q180 226 192 218" stroke="#5C2A1F" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <path d="M170 217 Q180 222 190 217 Q180 220 170 217 Z" fill="#A85240" />
      <path d="M150 285 Q180 297 210 285" stroke="#E84118" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8" />
      {!mini && (<><circle cx="60" cy="100" r="4" fill="#E84118" opacity="0.5" /><circle cx="310" cy="80" r="6" fill="#2D6A4F" opacity="0.4" /><circle cx="320" cy="200" r="3" fill="#E84118" opacity="0.6" /><circle cx="40" cy="220" r="5" fill="#D4745E" opacity="0.6" /></>)}
    </svg>
  );
}

function PgNav({ activePath = "" }) {
  const [scrolled, setScrolled] = usePgState(false);
  const [hidden, setHidden] = usePgState(false);
  const [menuOpen, setMenuOpen] = usePgState(false);
  const lastY = usePgRef(0);

  usePgEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > lastY.current && y > 120) setHidden(true);
      else setHidden(false);
      lastY.current = y;
    };
    const onMouseMove = (e) => { if (e.clientY < 60) setHidden(false); };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <>
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      padding: scrolled ? "14px 48px" : "22px 48px",
      transform: hidden ? "translateY(-100%)" : "translateY(0)",
      transition: "all .35s ease",
      background: scrolled || menuOpen ? "rgba(248,245,241,0.97)" : "transparent",
      backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
      borderBottom: scrolled || menuOpen ? "1px solid rgba(10,10,10,0.06)" : "1px solid transparent",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <PgLogo color={scrolled || menuOpen ? "#0A0A0A" : "white"} size={22} />
      <div className="nav-links" style={{ display: "flex", gap: 28, alignItems: "center" }}>
        {PAGE_LINKS.map(l => {
          const active = activePath === l.href;
          return (
            <a key={l.href} href={l.href} style={{
              fontFamily: "Inter, sans-serif", fontSize: 14,
              fontWeight: active ? 700 : 500,
              color: scrolled ? "#0A0A0A" : "white",
              textDecoration: "none", letterSpacing: "0.01em",
              opacity: active ? 1 : 0.85,
              borderBottom: active ? `2px solid ${scrolled ? "#E84118" : "white"}` : "2px solid transparent",
              paddingBottom: 4,
            }}>{l.label}</a>
          );
        })}
        <a href={WHATS_URGENTE} target="_blank" rel="noopener" style={{
          background: scrolled ? "#0A0A0A" : "white",
          color: scrolled ? "white" : "#E84118",
          padding: "10px 18px", borderRadius: 999,
          fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600,
          textDecoration: "none", letterSpacing: "0.02em",
        }}>Falar agora</a>
      </div>
      <button className="nav-mobile" onClick={() => setMenuOpen(o => !o)} style={{
        display: "none", background: "transparent", border: "none", cursor: "pointer",
        padding: 4,
      }}>
        {menuOpen
          ? <PgIcon.Close color={scrolled || menuOpen ? "#0A0A0A" : "white"} size={24} />
          : <PgIcon.Menu color={scrolled || menuOpen ? "#0A0A0A" : "white"} />}
      </button>
    </nav>
    {/* Mobile slide-down menu */}
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 49,
      background: "rgba(248,245,241,0.97)", backdropFilter: "blur(14px)",
      paddingTop: 80, paddingBottom: 32, paddingLeft: 24, paddingRight: 24,
      transform: menuOpen ? "translateY(0)" : "translateY(-110%)",
      transition: "transform .35s cubic-bezier(.2,.7,.2,1)",
      borderBottom: "1px solid rgba(10,10,10,0.08)",
      display: "flex", flexDirection: "column", gap: 4,
    }}>
      {PAGE_LINKS.map(l => {
        const active = activePath === l.href;
        return (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
            fontFamily: "Inter, sans-serif", fontSize: 18, fontWeight: active ? 700 : 600,
            color: active ? "#E84118" : "#0A0A0A", textDecoration: "none",
            padding: "14px 0", borderBottom: "1px solid rgba(10,10,10,0.07)",
            letterSpacing: "-0.01em",
          }}>{l.label}</a>
        );
      })}
      <a href={WHATS_URGENTE} target="_blank" rel="noopener" onClick={() => setMenuOpen(false)} style={{
        marginTop: 20, background: "#E84118", color: "white",
        padding: "16px 22px", borderRadius: 14, textAlign: "center",
        fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 700,
        textDecoration: "none", letterSpacing: "0.01em",
      }}>Falar agora</a>
    </div>
    </>
  );
}

function PgFooter() {
  return (
    <footer style={{ background: "#0A0A0A", color: "white", padding: "80px 48px 32px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
          <div>
            <PgLogo color="white" size={26} />
            <p style={{ fontFamily: "Syne, sans-serif", fontWeight: 500, fontSize: 22, lineHeight: 1.25, color: "white", margin: "28px 0 22px", letterSpacing: "-0.015em", textWrap: "balance", maxWidth: 360 }}>
              Transformando trauma individual em mudança coletiva.
            </p>
            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ padding: "10px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.18)", fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>Realização · Universidade Zumbi dos Palmares</div>
              <a href="https://www.umojainfinity.com.br" target="_blank" rel="noopener" style={{ padding: "10px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.18)", fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>Desenvolvimento · Umoja Infinity</a>
              <a href="https://www.procon.sp.gov.br/procon-racial/" target="_blank" rel="noopener" style={{ padding: "10px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.18)", fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>Apoio · ProconSP</a>
            </div>
          </div>
          {[
            { title: "Acolhimento", links: [
              { t: "Falar com Dandara", h: "acolhimento.html#falar-dandara" },
              { t: "Linha de urgência", h: "acolhimento.html#linha-urgencia" },
              { t: "WhatsApp", h: "acolhimento.html#whatsapp" },
              { t: "Atendimento presencial", h: "acolhimento.html#presencial" },
            ]},
            { title: "Jurídico", links: [
              { t: "Consulta jurídica", h: "juridico.html#consulta" },
              { t: "Casos atendidos", h: "juridico.html#casos" },
              { t: "Glossário", h: "juridico.html#glossario" },
            ]},
            { title: "Instituto", links: [
              { t: "Quem somos", h: "instituto.html#quem-somos" },
              { t: "Transparência", h: "instituto.html#transparencia" },
              { t: "Imprensa", h: "instituto.html#imprensa" },
              { t: "Trabalhe conosco", h: "instituto.html#trabalhe" },
            ]},
          ].map(col => (
            <div key={col.title}>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#E84118", marginBottom: 18 }}>{col.title}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {col.links.map(l => (
                  <li key={l.h}><a href={l.h} style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.78)", textDecoration: "none" }}>{l.t}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20, fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
          <div>Faculdade Zumbi dos Palmares · CNPJ 14.050.274/0001-08 · © 2026 — Todos os direitos reservados.</div>
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <a href="#" style={{ color: "rgba(255,255,255,0.78)", display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}><PgIcon.Instagram size={18} /> @acolhe.br</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Floating dandara chat trigger that scrolls to #falar-dandara on acolhimento page
function PgFloatingDandara({ inlineMode = false }) {
  return (
    <a href="acolhimento.html#falar-dandara" style={{
      position: "fixed", right: 24, bottom: 24, zIndex: 60,
      width: 68, height: 68, borderRadius: "50%",
      background: "#25D366",
      border: "3px solid white", padding: 0, display: "grid", placeItems: "center",
      boxShadow: "0 12px 32px rgba(37,211,102,0.45)", textDecoration: "none",
      animation: "pulseGlow 2.4s ease-in-out infinite",
    }}>
      <PgIcon.Whatsapp size={36} color="white" />
    </a>
  );
}

Object.assign(window, {
  PgReveal, PgIcon, PgLogo, PgDandaraAvatar, PgNav, PgFooter, PgFloatingDandara,
  WHATS_URL, PHONE, PHONE_TEL, ADDRESS_LINES,
});
