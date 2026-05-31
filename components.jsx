// ACOLHE landing page components
const { useState, useEffect, useRef } = React;
const WHATS_URL = "https://wa.me/5511953985365?text=Ol%C3%A1%2C%20vim%20do%20site%20Acolhe%20Black%20e%20preciso%20de%20ajuda...";

// ─── Reveal hook ───
function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
}

function Reveal({ children, delay = 0, as: Tag = "div", className = "", style = {} }) {
  const [ref, shown] = useReveal();
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition: `opacity .8s ease ${delay}ms, transform .8s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}

// ─── Icons (simple, geometric) ───
const Icon = {
  Shield: ({ size = 60, color = "currentColor", stroke = 2.2 }) => (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <path d="M30 5 L52 13 V30 C52 42 42 52 30 56 C18 52 8 42 8 30 V13 Z"
        stroke={color} strokeWidth={stroke} strokeLinejoin="round" fill="none" />
      <path d="M22 30 L28 36 L40 22" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Scales: ({ size = 60, color = "currentColor", stroke = 2.2 }) => (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <line x1="30" y1="8" x2="30" y2="52" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
      <line x1="14" y1="14" x2="46" y2="14" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
      <path d="M14 14 L8 30 H20 L14 14 Z" stroke={color} strokeWidth={stroke} strokeLinejoin="round" fill="none" />
      <path d="M46 14 L40 30 H52 L46 14 Z" stroke={color} strokeWidth={stroke} strokeLinejoin="round" fill="none" />
      <line x1="22" y1="52" x2="38" y2="52" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  ),
  Justice: ({ size = 60, color = "currentColor", stroke = 2.2 }) => (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <rect x="10" y="14" width="28" height="36" rx="2" stroke={color} strokeWidth={stroke} fill="none" />
      <line x1="16" y1="22" x2="32" y2="22" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
      <line x1="16" y1="30" x2="28" y2="30" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
      <line x1="16" y1="38" x2="32" y2="38" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
      <circle cx="44" cy="20" r="8" stroke={color} strokeWidth={stroke} fill="none" />
      <line x1="44" y1="14" x2="44" y2="26" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
      <path d="M38 20 H50" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  ),
  HeartMind: ({ size = 60, color = "currentColor", stroke = 2.2 }) => (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <path d="M30 50 C12 38 8 28 8 20 C8 13 14 9 19 9 C24 9 27 12 30 16 C33 12 36 9 41 9 C46 9 52 13 52 20 C52 28 48 38 30 50 Z"
        stroke={color} strokeWidth={stroke} strokeLinejoin="round" fill="none" />
      <path d="M22 24 C22 21 25 20 26 22 C27 20 30 21 30 24 C30 27 26 30 26 30 C26 30 22 27 22 24 Z"
        fill={color} />
      <path d="M34 22 H38 M34 27 H40 M34 32 H38" stroke={color} strokeWidth={stroke - 0.4} strokeLinecap="round" />
    </svg>
  ),
  People: ({ size = 60, color = "currentColor", stroke = 2.2 }) => (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <circle cx="18" cy="18" r="6" stroke={color} strokeWidth={stroke} fill="none" />
      <circle cx="42" cy="18" r="6" stroke={color} strokeWidth={stroke} fill="none" />
      <circle cx="30" cy="40" r="7" stroke={color} strokeWidth={stroke} fill="none" />
      <path d="M8 36 C8 28 14 26 18 26 C22 26 28 28 28 36" stroke={color} strokeWidth={stroke} strokeLinecap="round" fill="none" />
      <path d="M32 36 C32 28 38 26 42 26 C46 26 52 28 52 36" stroke={color} strokeWidth={stroke} strokeLinecap="round" fill="none" />
      <path d="M22 50 C22 46 26 44 30 44 C34 44 38 46 38 50" stroke={color} strokeWidth={stroke} strokeLinecap="round" fill="none" />
      <line x1="22" y1="22" x2="26" y2="34" stroke={color} strokeWidth={stroke - 0.6} strokeDasharray="2 3" />
      <line x1="38" y1="22" x2="34" y2="34" stroke={color} strokeWidth={stroke - 0.6} strokeDasharray="2 3" />
    </svg>
  ),
  Whatsapp: ({ size = 24, color = "white" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.6.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4c1.4.7 3 1.1 4.7 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3c-.9-1.4-1.3-3-1.3-4.5 0-4.6 3.7-8.3 8.3-8.3s8.3 3.7 8.3 8.3-3.7 8.3-8.4 8.3z" />
    </svg>
  ),
  Arrow: ({ size = 16, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2 8 H13 M9 4 L13 8 L9 12" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Send: ({ size = 18, color = "white" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 12 L21 4 L13 22 L11 13 Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  Close: ({ size = 18, color = "white" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 5 L19 19 M19 5 L5 19" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),
  Instagram: ({ size = 20, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke={color} strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill={color} />
    </svg>
  ),
  Menu: ({ size = 22, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <line x1="4" y1="7" x2="20" y2="7" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="4" y1="12" x2="20" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="4" y1="17" x2="14" y2="17" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

// ─── Logo ACOLHE ───
function AcolheLogo({ color = "white", size = 28 }) {
  return (
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
  );
}

// ─── Dandara avatar — minimal stylized illustration in terracota tones ───
function DandaraAvatar({ size = 360, mini = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 360 360" style={{ display: "block" }}>
      <defs>
        <radialGradient id="dndBg" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#F4C9B6" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#F4C9B6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dndSkin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A85240" />
          <stop offset="100%" stopColor="#7E3A2C" />
        </linearGradient>
        <linearGradient id="dndWrap" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F4C9B6" />
          <stop offset="100%" stopColor="#D4745E" />
        </linearGradient>
      </defs>

      {/* soft halo */}
      <circle cx="180" cy="170" r="155" fill="url(#dndBg)" />

      {/* shoulders / dress */}
      <path d="M70 360 C70 280 120 245 180 245 C240 245 290 280 290 360 Z"
        fill="#7E3A2C" />
      <path d="M120 360 C120 305 145 285 180 285 C215 285 240 305 240 360 Z"
        fill="#5C2A1F" opacity="0.6" />

      {/* neck */}
      <path d="M158 240 Q180 260 202 240 L202 260 Q180 275 158 260 Z" fill="url(#dndSkin)" />

      {/* head */}
      <ellipse cx="180" cy="170" rx="68" ry="78" fill="url(#dndSkin)" />

      {/* head wrap / turban */}
      <path d="M112 152 C112 92 152 70 180 70 C212 70 250 95 250 150 C250 158 245 158 240 152 C232 142 218 134 200 134 C180 134 165 144 158 156 C150 170 138 168 128 162 C120 158 112 158 112 152 Z"
        fill="url(#dndWrap)" />
      <path d="M118 138 C130 100 162 88 188 92 C210 95 220 108 218 116 C214 110 200 106 184 108 C162 110 142 124 130 144 C124 152 118 148 118 138 Z"
        fill="#E84118" opacity="0.85" />
      {/* wrap knot */}
      <ellipse cx="245" cy="118" rx="14" ry="10" fill="#D4745E" transform="rotate(-20 245 118)" />
      <ellipse cx="252" cy="108" rx="8" ry="5" fill="#E84118" transform="rotate(-15 252 108)" />

      {/* earrings — gold hoops */}
      <circle cx="113" cy="186" r="6" fill="#E8B14B" />
      <circle cx="247" cy="186" r="6" fill="#E8B14B" />

      {/* face — minimal */}
      {/* eyes */}
      <ellipse cx="158" cy="172" rx="4" ry="5" fill="#1A0E08" />
      <ellipse cx="202" cy="172" rx="4" ry="5" fill="#1A0E08" />
      {/* brows */}
      <path d="M148 158 Q158 153 168 158" stroke="#1A0E08" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M192 158 Q202 153 212 158" stroke="#1A0E08" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* nose */}
      <path d="M178 188 Q176 200 180 206 Q184 208 184 204" stroke="#5C2A1F" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      {/* mouth — gentle */}
      <path d="M168 218 Q180 226 192 218" stroke="#5C2A1F" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <path d="M170 217 Q180 222 190 217 Q180 220 170 217 Z" fill="#A85240" />

      {/* collar accent */}
      <path d="M150 285 Q180 297 210 285" stroke="#E84118" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8" />

      {!mini && (
        <>
          {/* small floating dots — air / breath */}
          <circle cx="60" cy="100" r="4" fill="#E84118" opacity="0.5" />
          <circle cx="310" cy="80" r="6" fill="#2D6A4F" opacity="0.4" />
          <circle cx="320" cy="200" r="3" fill="#E84118" opacity="0.6" />
          <circle cx="40" cy="220" r="5" fill="#D4745E" opacity="0.6" />
        </>
      )}
    </svg>
  );
}

// ─── Nav ───
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
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
  const links = [
    { label: "Acolhimento", href: "acolhimento.html" },
    { label: "Jurídico", href: "juridico.html" },
    { label: "Como funciona", href: "#Como funciona" },
    { label: "Instituto", href: "instituto.html" },
  ];
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
      <AcolheLogo color={scrolled || menuOpen ? "#0A0A0A" : "white"} size={22} />
      <div className="nav-links" style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {links.map(l => (
          <a key={l.label} href={l.href} style={{
            fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500,
            color: scrolled ? "#0A0A0A" : "white",
            textDecoration: "none", letterSpacing: "0.01em",
            opacity: 0.9
          }}>{l.label}</a>
        ))}
        <button style={{
          background: scrolled ? "#0A0A0A" : "white",
          color: scrolled ? "white" : "#E84118",
          border: "none", padding: "10px 18px", borderRadius: 999,
          fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600,
          cursor: "pointer", letterSpacing: "0.02em",
        }}>Falar agora</button>
      </div>
      <button className="nav-mobile" onClick={() => setMenuOpen(o => !o)} style={{
        display: "none", background: "transparent", border: "none", cursor: "pointer",
        padding: 4,
      }}>
        {menuOpen
          ? <Icon.Close color={scrolled || menuOpen ? "#0A0A0A" : "white"} size={24} />
          : <Icon.Menu color={scrolled || menuOpen ? "#0A0A0A" : "white"} />}
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
      {links.map(l => (
        <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
          fontFamily: "Inter, sans-serif", fontSize: 18, fontWeight: 600,
          color: "#0A0A0A", textDecoration: "none", padding: "14px 0",
          borderBottom: "1px solid rgba(10,10,10,0.07)", letterSpacing: "-0.01em",
        }}>{l.label}</a>
      ))}
      <a href={WHATS_URL} target="_blank" rel="noopener" onClick={() => setMenuOpen(false)} style={{
        marginTop: 20, background: "#E84118", color: "white",
        padding: "16px 22px", borderRadius: 14, textAlign: "center",
        fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 700,
        textDecoration: "none", letterSpacing: "0.01em",
      }}>Falar agora</a>
    </div>
    </>
  );
}

// ─── Hero ───
function Hero() {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const sectionRef = useRef(null);
  const hasLeftRef = useRef(false);
  const soundInitedRef = useRef(false);
  const [showPlay, setShowPlay] = useState(false);
  const [showSoundPrompt, setShowSoundPrompt] = useState(false);

  useEffect(() => {
    let player, io;

    const initPlayer = () => {
      if (!iframeRef.current) return;
      player = new window.Vimeo.Player(iframeRef.current);
      playerRef.current = player;

      player.ready().then(() => {
        if (soundInitedRef.current) return;
        soundInitedRef.current = true;
        if (localStorage.getItem("dandara_sound") === "1") {
          player.setMuted(false).catch(() => {});
        } else {
          setShowSoundPrompt(true);
        }
      });

      const section = sectionRef.current;
      if (!section) return;
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (!hasLeftRef.current) player.play().catch(() => {});
          } else {
            player.getPaused().then(paused => {
              if (!paused) {
                player.pause();
                hasLeftRef.current = true;
                setShowSoundPrompt(false);
                setShowPlay(true);
              }
            });
          }
        },
        { threshold: 0.2 }
      );
      io.observe(section);
    };

    if (window.Vimeo) {
      initPlayer();
    } else {
      const script = document.createElement("script");
      script.src = "https://player.vimeo.com/api/player.js";
      script.onload = initPlayer;
      document.body.appendChild(script);
    }

    return () => {
      if (io) io.disconnect();
      if (player) player.destroy().catch(() => {});
    };
  }, []);

  const handleManualPlay = () => {
    const player = playerRef.current;
    if (!player) return;
    player.play().catch(() => {});
    setShowPlay(false);
    if (localStorage.getItem("dandara_sound") !== "1") setShowSoundPrompt(true);
  };

  const activateSound = () => {
    const player = playerRef.current;
    if (!player) return;
    player.setMuted(false).catch(() => {});
    player.setVolume(1).catch(() => {});
    localStorage.setItem("dandara_sound", "1");
    setShowSoundPrompt(false);
  };

  return (
    <section ref={sectionRef} data-screen-label="01 Hero" style={{
      minHeight: "92vh", position: "relative", overflow: "hidden",
      background: "linear-gradient(135deg, #E84118 0%, #D4745E 100%)",
      display: "flex", alignItems: "center", paddingTop: 200,
    }}>
      {/* texture noise */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.18, mixBlendMode: "overlay",
        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,.4) 0%, transparent 40%),
                          radial-gradient(circle at 80% 70%, rgba(0,0,0,.25) 0%, transparent 50%)`,
        pointerEvents: "none"
      }} />
      {/* abstract shapes */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18 }} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <circle cx="120" cy="780" r="180" fill="white" opacity="0.25" />
        <circle cx="1320" cy="120" r="120" fill="white" opacity="0.18" />
        <path d="M-50 500 Q400 380 800 520 T1500 500" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
      </svg>

      <div className="hero-grid" style={{
        width: "100%", maxWidth: 1320, margin: "0 auto", padding: "0 48px",
        display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 48, alignItems: "center",
        position: "relative", zIndex: 2,
      }}>
        <div>
          <Reveal delay={0}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "8px 14px", borderRadius: 999,
              background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.25)",
              fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500,
              color: "white", marginBottom: 28, letterSpacing: "0.02em"
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%", background: "#7CFFA1",
                boxShadow: "0 0 0 0 #7CFFA1", animation: "pulse 2s infinite"
              }} />
              Atendimento ativo agora — sigiloso e gratuito
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 style={{
              fontFamily: "Syne, sans-serif", fontWeight: 700,
              fontSize: "clamp(40px, 5.4vw, 76px)", lineHeight: 1.02,
              letterSpacing: "-0.025em", color: "white", margin: 0,
              textWrap: "balance",
            }}>
              Você não está<br />sozinho.
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p style={{
              fontFamily: "Inter, sans-serif", fontWeight: 400,
              fontSize: 20, lineHeight: 1.5, color: "rgba(255,255,255,0.92)",
              margin: "24px 0 40px", maxWidth: 520, textWrap: "pretty"
            }}>
              Do trauma à justiça, caminhamos juntos. ACOLHE oferece apoio
              psicossocial e assistência jurídica especializada para vítimas de
              racismo no Brasil.
            </p>
          </Reveal>

        </div>

        <Reveal delay={200} className="hero-avatar">
          <div style={{ position: "relative", display: "grid", placeItems: "center" }}>
            <div style={{
              position: "absolute", width: 380, height: 380, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)",
              filter: "blur(20px)"
            }} />
            <div style={{
              position: "relative", width: 380, height: 380, borderRadius: "50%",
              background: "linear-gradient(160deg, rgba(255,255,255,0.18), rgba(255,255,255,0.05))",
              border: "1px solid rgba(255,255,255,0.3)", padding: 10,
              boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
              animation: "floaty 6s ease-in-out infinite"
            }}>
              <div style={{
                width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden",
                background: "#000", position: "relative"
              }}>
                <iframe
                  ref={iframeRef}
                  src="https://player.vimeo.com/video/1192478851?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  title="Dandara dos Palmares"
                  style={{
                    position: "absolute",
                    top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "300%", height: "300%",
                    border: "none", pointerEvents: "none",
                  }}
                />
                {showPlay && (
                  <button
                    onClick={handleManualPlay}
                    style={{
                      position: "absolute", inset: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: "rgba(0,0,0,0.35)",
                      border: "none", cursor: "pointer", borderRadius: "50%",
                    }}
                  >
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                      <circle cx="28" cy="28" r="28" fill="rgba(255,255,255,0.18)" />
                      <circle cx="28" cy="28" r="22" fill="rgba(255,255,255,0.85)" />
                      <path d="M23 20 L38 28 L23 36 Z" fill="#E84118" />
                    </svg>
                  </button>
                )}
                {showSoundPrompt && (
                  <button
                    onClick={activateSound}
                    style={{
                      position: "absolute", inset: 0,
                      display: "flex", flexDirection: "column",
                      alignItems: "center", justifyContent: "center", gap: 10,
                      background: "rgba(0,0,0,0.52)", backdropFilter: "blur(4px)",
                      border: "none", cursor: "pointer", borderRadius: "50%",
                    }}
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <path d="M11 5 L6 9 H2 V15 H6 L11 19 V5Z" fill="white" />
                      <path d="M15.5 8.5 C17 10 17 14 15.5 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
                      <path d="M18.5 6 C21.5 9 21.5 15 18.5 18" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    </svg>
                    <span style={{
                      fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600,
                      color: "white", letterSpacing: "0.06em", textTransform: "uppercase",
                      textAlign: "center", lineHeight: 1.3, maxWidth: 100,
                    }}>Toque para ativar o som</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Dual Boxes ───
function DualBoxes() {
  const items = [
    {
      id: "procon",
      label: "PROCON RACIAL",
      sub: "Lojas, shoppings, bancos e supermercados são os principais cenários de discriminação racial relatada no Brasil",
      bg: "linear-gradient(135deg, #E84118 0%, #D4745E 100%)",
      border: "#E84118",
      Icon: Icon.Shield,
      lines: [
        "Sofri racismo em loja, restaurante ou shopping",
        "Fui maltratado em hospital, clínica ou farmácia",
        "Tive serviço negado ou fui ignorado em supermercado",
        "Sofri vigilância abusiva ou fui seguido com desconfiança",
      ],
      cta: "Buscar Acolhimento",
      ctaColor: "#E84118",
      ctaHref: "https://wa.me/5511953985365?text=Oi%2C%20sofri%20preconceito%20em%20rela%C3%A7%C3%B5es%20de%20consumo%20e%20gostaria%20de%20ajuda...",
      illustration: (
        <svg viewBox="0 0 400 300" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.10 }}>
          <ellipse cx="140" cy="150" rx="50" ry="80" fill="white" />
          <ellipse cx="200" cy="160" rx="55" ry="85" fill="white" />
          <ellipse cx="260" cy="150" rx="50" ry="80" fill="white" />
          <circle cx="140" cy="80" r="22" fill="white" />
          <circle cx="200" cy="72" r="24" fill="white" />
          <circle cx="260" cy="80" r="22" fill="white" />
        </svg>
      ),
    },
    {
      id: "acolhe-jus",
      label: "ACOLHE JUS",
      sub: "20 advogados voluntários que acompanham seu caso até o Ministério Público e a Justiça Criminal",
      bg: "linear-gradient(135deg, #2D6A4F 0%, #1A4030 100%)",
      border: "#2D6A4F",
      Icon: Icon.Scales,
      lines: [
        "Sofri racismo no trabalho ou em entrevista",
        "Fui alvo de abordagem policial abusiva ou racista",
        "Quero registrar ocorrência criminal",
        "Preciso de advogado para o meu caso",
        "Quero acompanhar um processo em andamento",
      ],
      extraButtons: [
        { label: "Preciso de orientação", href: "acolhimento.html" },
        { label: "Quero conhecer meus direitos", href: "juridico.html#marcos" },
      ],
      cta: "Buscar Acolhimento",
      ctaColor: "#2D6A4F",
      ctaHref: "https://wa.me/5511953985365?text=Oi%2C%20sofri%20preconceito%20e%20preciso%20de%20acolhimento%2Fesclarecimento...",
      illustration: (
        <svg viewBox="0 0 400 300" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.10 }}>
          <line x1="200" y1="40" x2="200" y2="260" stroke="white" strokeWidth="4" />
          <line x1="100" y1="80" x2="300" y2="80" stroke="white" strokeWidth="4" />
          <path d="M100 80 L70 160 H130 Z" stroke="white" strokeWidth="4" fill="none" />
          <path d="M300 80 L270 160 H330 Z" stroke="white" strokeWidth="4" fill="none" />
          <line x1="160" y1="260" x2="240" y2="260" stroke="white" strokeWidth="4" />
        </svg>
      ),
    },
  ];
  return (
    <section data-screen-label="02 Dual" id="Acolhimento" style={{
      padding: "120px 48px 80px", background: "#F8F5F1",
    }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <Reveal>
          <div style={{
            fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600,
            letterSpacing: "0.18em", color: "#E84118", textTransform: "uppercase",
            marginBottom: 16
          }}>Dois caminhos · uma rede</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 style={{
            fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(32px, 4vw, 52px)",
            color: "#0A0A0A", margin: "0 0 56px", letterSpacing: "-0.025em",
            lineHeight: 1.05, maxWidth: 760, textWrap: "balance"
          }}>
            Por onde você quer começar?
          </h2>
        </Reveal>
        <div className="dual-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32,
        }}>
          {items.map((it, i) => (
            <Reveal key={it.id} delay={i * 120} style={{ height: "100%" }}>
              <div className="dual-card" style={{
                position: "relative", overflow: "hidden",
                height: "100%", minHeight: 460, padding: 48, borderRadius: 24,
                borderTop: `8px solid ${it.border}`,
                background: it.bg, color: "white",
                display: "flex", flexDirection: "column",
                boxShadow: "0 18px 48px rgba(10,10,10,0.18)",
                transition: "transform .3s ease, box-shadow .3s ease"
              }}>
                {it.illustration}
                <div style={{ position: "relative", zIndex: 2 }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: 18,
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    display: "grid", placeItems: "center", marginBottom: 24,
                  }}>
                    <it.Icon size={40} color="white" />
                  </div>
                  <h3 style={{
                    fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 36,
                    margin: 0, letterSpacing: "-0.02em"
                  }}>{it.label}</h3>
                  <p style={{
                    fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 500,
                    margin: "8px 0 24px", color: "rgba(255,255,255,0.92)"
                  }}>{it.sub}</p>
                  <ul style={{
                    listStyle: "none", padding: 0, margin: "0 0 28px",
                    display: "flex", flexDirection: "column", gap: 10
                  }}>
                    {it.lines.map(l => (
                      <li key={l} style={{
                        fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 400,
                        color: "rgba(255,255,255,0.88)", display: "flex", alignItems: "center", gap: 12,
                        padding: "10px 14px", borderRadius: 12,
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        cursor: "pointer", transition: "background .2s ease"
                      }} onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.16)"}
                         onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}>
                        <span style={{ opacity: 0.7 }}>→</span>{l}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ marginTop: "auto", position: "relative", zIndex: 2 }}>
                  {it.extraButtons && (
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
                      {it.extraButtons.map(btn => (
                        <a key={btn.label} href={btn.href} style={{
                          background: "rgba(255,255,255,0.12)",
                          border: "1px solid rgba(255,255,255,0.35)",
                          color: "white", padding: "11px 18px", borderRadius: 10,
                          fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500,
                          textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
                          transition: "background .2s ease",
                        }}
                          onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.22)"}
                          onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
                        >
                          {btn.label} <Icon.Arrow size={13} color="white" />
                        </a>
                      ))}
                    </div>
                  )}
                  <a href={it.ctaHref || WHATS_URL} target="_blank" rel="noopener" style={{
                    background: "white", color: it.ctaColor, border: "none",
                    padding: "14px 22px", borderRadius: 12,
                    fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600,
                    cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                    transition: "transform .2s ease", textDecoration: "none",
                  }}>
                    {it.cta} <Icon.Arrow size={14} color={it.ctaColor} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats Bar ───
function StatsBar() {
  const stats = [
    { n: "62,7%", l: "das pessoas negras relataram discriminação em espaços de consumo", src: "PROCON-SP, 2024" },
    { n: "72%", l: "dos casos ocorrem de forma velada, sem testemunhas nem registro formal", src: "PROCON-SP, 2024" },
    { n: "750+", l: "atendimentos realizados pelo PROCON Racial no 1º semestre de 2025", src: "Zumbi dos Palmares" },
    { n: "20", l: "advogados voluntários do ACOLHE JUS prontos para acompanhar seu caso", src: "ACOLHE JUS" },
  ];
  return (
    <section data-screen-label="Stats" style={{ background: "#0A0A0A", padding: "72px 48px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <Reveal>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", color: "#E84118", textTransform: "uppercase", marginBottom: 44, textAlign: "center" }}>
            Discriminação racial no consumo em números · PROCON-SP, 2024
          </div>
        </Reveal>
        <div className="timeline-row" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
          {stats.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div style={{
                paddingLeft: i > 0 ? 32 : 0,
                paddingRight: i < stats.length - 1 ? 32 : 0,
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}>
                <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(38px, 4.5vw, 60px)", color: "white", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.68)", margin: "14px 0 8px", textWrap: "pretty" }}>{s.l}</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#E84118", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.src}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Three services ───
function Services() {
  const cards = [
    {
      id: "jur", title: "JURÍDICO", color: "#2D6A4F", Icon: Icon.Justice,
      text: "Orientação legal e representação em processos cíveis, criminais, trabalhistas e junto ao PROCON Racial. 20 advogados voluntários do ACOLHE JUS.",
    },
    {
      id: "psi", title: "PSICOLÓGICO", color: "#D4745E", Icon: Icon.HeartMind,
      text: "Acolhimento emocional, escuta especializada e acompanhamento terapêutico.",
    },
    {
      id: "soc", title: "ASSISTÊNCIA SOCIAL", color: "#E84118", Icon: Icon.People,
      text: "Articula serviços e acompanha sua jornada do primeiro contato até a resolução.",
      badge: "Integrador",
    },
  ];
  return (
    <section data-screen-label="03 Services" id="Jurídico" style={{
      padding: "60px 48px 100px", background: "#F8F5F1",
    }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <Reveal>
          <div style={{
            fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600,
            letterSpacing: "0.18em", color: "#0A0A0A", opacity: 0.55,
            textTransform: "uppercase", marginBottom: 16
          }}>Três frentes · um cuidado integrado</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 style={{
            fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3.6vw, 44px)",
            color: "#0A0A0A", margin: "0 0 48px", letterSpacing: "-0.025em",
            lineHeight: 1.1, maxWidth: 720, textWrap: "balance"
          }}>
            Cada caso recebe atenção <span style={{ fontStyle: "italic", color: "#E84118" }}>jurídica</span>, <span style={{ fontStyle: "italic", color: "#D4745E" }}>psicológica</span> e <span style={{ fontStyle: "italic", color: "#2D6A4F" }}>social</span>.
          </h2>
        </Reveal>
        <div className="svc-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24,
        }}>
          {cards.map((c, i) => (
            <Reveal key={c.id} delay={i * 100}>
              <div className="svc-card" style={{
                position: "relative", background: "white",
                borderRadius: 16, padding: 32, minHeight: 300,
                borderTop: `4px solid ${c.color}`,
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                display: "flex", flexDirection: "column",
                transition: "transform .25s ease, box-shadow .25s ease",
              }}>
                {c.badge && (
                  <div style={{
                    position: "absolute", top: 20, right: 20,
                    background: c.color, color: "white",
                    padding: "5px 11px", borderRadius: 999,
                    fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600,
                    letterSpacing: "0.04em",
                  }}>{c.badge}</div>
                )}
                <div style={{
                  width: 68, height: 68, borderRadius: 16,
                  background: `${c.color}14`, display: "grid", placeItems: "center",
                  marginBottom: 22,
                }}>
                  <c.Icon size={40} color={c.color} />
                </div>
                <h3 style={{
                  fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: 22,
                  color: "#0A0A0A", margin: "0 0 10px", letterSpacing: "-0.01em"
                }}>{c.title}</h3>
                <p style={{
                  fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.5,
                  color: "rgba(10,10,10,0.7)", margin: 0, flex: 1, textWrap: "pretty"
                }}>{c.text}</p>
                <a href="#" style={{
                  marginTop: 22, color: c.color,
                  fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600,
                  textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
                  letterSpacing: "0.01em"
                }}>
                  Saiba mais <Icon.Arrow size={14} color={c.color} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Timeline ───
function Timeline() {
  const steps = [
    { n: 1, color: "#E84118", t: "Acolhimento", d: "Você fala com Dandara, sigiloso e sem custo. Ela entende seu caso." },
    { n: 2, color: "#D4745E", t: "Triagem", d: "Conectamos você ao psicólogo, advogado ou assistente social adequado." },
    { n: 3, color: "#2D6A4F", t: "Ação", d: "Plano integrado: cuidado emocional + caminho jurídico + apoio social." },
    { n: 4, color: "#1A4030", t: "Acompanhamento", d: "Seu progresso é monitorado até a resolução. Você nunca caminha só." },
  ];
  return (
    <section data-screen-label="04 How" id="Como funciona" style={{
      padding: "100px 48px", background: "#0A0A0A", color: "white", position: "relative", overflow: "hidden"
    }}>
      {/* bg pattern */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.08, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle at 20% 30%, #E84118 0%, transparent 50%), radial-gradient(circle at 80% 70%, #2D6A4F 0%, transparent 50%)"
      }} />
      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative" }}>
        <Reveal>
          <div style={{
            fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600,
            letterSpacing: "0.18em", color: "#E84118", textTransform: "uppercase",
            marginBottom: 16
          }}>Como funciona</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 style={{
            fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(32px, 4vw, 52px)",
            margin: "0 0 64px", letterSpacing: "-0.025em", lineHeight: 1.05,
            maxWidth: 800, textWrap: "balance"
          }}>
            Um caminho claro do primeiro contato à resolução.
          </h2>
        </Reveal>

        <div className="timeline-row" style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24,
          position: "relative",
        }}>
          {/* connector line */}
          <div className="timeline-line" style={{
            position: "absolute", top: 38, left: "8%", right: "8%", height: 3,
            background: "linear-gradient(90deg, #E84118 0%, #D4745E 33%, #2D6A4F 66%, #1A4030 100%)",
            borderRadius: 3, zIndex: 0,
          }} />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div style={{ position: "relative", zIndex: 1, textAlign: "left" }}>
                <div style={{
                  width: 76, height: 76, borderRadius: "50%",
                  background: s.color, color: "white",
                  display: "grid", placeItems: "center",
                  fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 30,
                  border: "5px solid #0A0A0A",
                  boxShadow: `0 0 0 2px ${s.color}, 0 12px 30px rgba(0,0,0,0.4)`,
                  marginBottom: 22,
                }}>{s.n}</div>
                <h4 style={{
                  fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: 22,
                  margin: "0 0 8px", letterSpacing: "-0.01em"
                }}>{s.t}</h4>
                <p style={{
                  fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.55,
                  color: "rgba(255,255,255,0.7)", margin: 0, textWrap: "pretty"
                }}>{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonial / quote ───
function Quote() {
  return (
    <section style={{ padding: "100px 48px", background: "#F8F5F1" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <div style={{
            fontFamily: "Syne, sans-serif", fontSize: 80, color: "#E84118",
            lineHeight: 0.5, marginBottom: 8, fontWeight: 700
          }}>"</div>
        </Reveal>
        <Reveal delay={80}>
          <p style={{
            fontFamily: "Syne, sans-serif", fontWeight: 600,
            fontSize: "clamp(24px, 3vw, 38px)", lineHeight: 1.25,
            color: "#0A0A0A", letterSpacing: "-0.02em", margin: "0 0 32px",
            textWrap: "balance"
          }}>
            Achei que tinha que carregar aquilo sozinha. Quando falei com a Dandara,
            entendi que existe um caminho — e gente caminhando junto.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div style={{
            fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500,
            color: "#0A0A0A", letterSpacing: "0.02em"
          }}>
            Marina S. · Recife, PE · acolhida em março/2026
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Footer ───
function Footer() {
  return (
    <footer id="Sobre" style={{
      background: "#0A0A0A", color: "white", padding: "80px 48px 32px",
    }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div className="footer-grid" style={{
          display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48,
          paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.12)"
        }}>
          <div>
            <AcolheLogo color="white" size={26} />
            <p style={{
              fontFamily: "Syne, sans-serif", fontWeight: 500, fontSize: 22,
              lineHeight: 1.25, color: "white", margin: "28px 0 22px",
              letterSpacing: "-0.015em", textWrap: "balance", maxWidth: 360
            }}>
              Transformando trauma individual em mudança coletiva.
            </p>
            <div style={{
              display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap"
            }}>
              <div style={{
                padding: "10px 16px", borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.18)",
                fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500,
                color: "rgba(255,255,255,0.85)"
              }}>Realização · Universidade Zumbi dos Palmares</div>
              <a href="https://www.umojainfinity.com.br" target="_blank" rel="noopener" style={{
                padding: "10px 16px", borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.18)",
                fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500,
                color: "rgba(255,255,255,0.85)", textDecoration: "none"
              }}>Desenvolvimento · Umoja Infinity</a>
              <a href="https://www.procon.sp.gov.br/procon-racial/" target="_blank" rel="noopener" style={{
                padding: "10px 16px", borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.18)",
                fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500,
                color: "rgba(255,255,255,0.85)", textDecoration: "none"
              }}>Apoio · ProconSP</a>
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
              <div style={{
                fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "#E84118", marginBottom: 18,
              }}>{col.title}</div>
              <ul style={{
                listStyle: "none", padding: 0, margin: 0,
                display: "flex", flexDirection: "column", gap: 12
              }}>
                {col.links.map(l => (
                  <li key={l.h}>
                    <a href={l.h} style={{
                      fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 400,
                      color: "rgba(255,255,255,0.78)", textDecoration: "none",
                    }}>{l.t}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          paddingTop: 28, display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 20,
          fontFamily: "Inter, sans-serif", fontSize: 13,
          color: "rgba(255,255,255,0.55)"
        }}>
          <div>Faculdade Zumbi dos Palmares · CNPJ 14.050.274/0001-08 · © 2026 — Todos os direitos reservados.</div>
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <a href="#" style={{ color: "rgba(255,255,255,0.78)", display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
              <Icon.Instagram size={18} /> @acolhe.br
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Chat widget + WhatsApp floating ───
function FloatingDocks() {
  const [chatOpen, setChatOpen] = useState(false);
  const [tipShown, setTipShown] = useState(true);
  const [messages, setMessages] = useState([
    { who: "dandara", text: "Olá! Eu sou a Dandara. Estou aqui para te escutar, sem julgamento. Como posso te ajudar agora?" },
  ]);
  const [draft, setDraft] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setTipShown(false), 9000);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, chatOpen]);

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    setMessages(m => [...m, { who: "me", text }]);
    setDraft("");
    setTimeout(() => {
      setMessages(m => [...m, {
        who: "dandara",
        text: "Te ouvi. Você quer conversar mais sobre isso, ou prefere que eu já te conecte com nossa equipe jurídica ou psicológica?"
      }]);
    }, 900);
  };

  const quickReplies = ["Sofri racismo agora", "Preciso de advogado", "Não sei se foi racismo"];

  return (
    <>
      {/* WhatsApp button removed */}

      {/* Chat dock */}
      <div style={{
        position: "fixed", right: 24, bottom: 24, zIndex: 60,
        display: "flex", flexDirection: "column", alignItems: "flex-end",
      }}>
        {/* Open panel */}
        {chatOpen && (
          <div style={{
            width: 360, height: 520, marginBottom: 12,
            background: "white", borderRadius: 20, overflow: "hidden",
            boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
            display: "flex", flexDirection: "column",
            border: "1px solid rgba(10,10,10,0.06)",
            animation: "popIn .25s cubic-bezier(.2,.8,.2,1)"
          }}>
            {/* Header */}
            <div style={{
              background: "linear-gradient(135deg, #E84118 0%, #D4745E 100%)",
              color: "white", padding: "16px 18px",
              display: "flex", alignItems: "center", gap: 12
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%", overflow: "hidden",
                background: "linear-gradient(180deg, #F8E2D5 0%, #E8B89E 100%)",
                flex: "0 0 auto",
              }}>
                <DandaraAvatar size={44} mini />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 16 }}>Dandara</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, opacity: 0.9, display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#7CFFA1", boxShadow: "0 0 0 0 #7CFFA1", animation: "pulse 2s infinite" }} />
                  Online · responde em 1 min
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} style={{
                background: "rgba(255,255,255,0.18)", border: "none", cursor: "pointer",
                width: 32, height: 32, borderRadius: "50%", display: "grid", placeItems: "center"
              }}>
                <Icon.Close />
              </button>
            </div>
            {/* Messages */}
            <div ref={scrollRef} style={{
              flex: 1, padding: 16, background: "#F8F5F1",
              overflowY: "auto", display: "flex", flexDirection: "column", gap: 10
            }}>
              {messages.map((m, i) => (
                <div key={i} style={{
                  alignSelf: m.who === "me" ? "flex-end" : "flex-start",
                  maxWidth: "82%",
                  background: m.who === "me" ? "#0A0A0A" : "white",
                  color: m.who === "me" ? "white" : "#0A0A0A",
                  padding: "10px 14px",
                  borderRadius: m.who === "me" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.45,
                  boxShadow: m.who === "me" ? "none" : "0 2px 8px rgba(0,0,0,0.06)",
                }}>{m.text}</div>
              ))}
              {messages.length === 1 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
                  {quickReplies.map(q => (
                    <button key={q} onClick={() => { setDraft(q); setTimeout(send, 0); }} style={{
                      background: "white", border: "1px solid rgba(232,65,24,0.25)",
                      color: "#E84118", padding: "8px 12px", borderRadius: 999,
                      fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 500,
                      cursor: "pointer"
                    }}>{q}</button>
                  ))}
                </div>
              )}
            </div>
            {/* Input */}
            <div style={{
              padding: 12, background: "white",
              borderTop: "1px solid rgba(10,10,10,0.06)",
              display: "flex", alignItems: "center", gap: 8
            }}>
              <input
                value={draft}
                onChange={e => setDraft(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") send(); }}
                placeholder="Escreva uma mensagem segura…"
                style={{
                  flex: 1, border: "1px solid rgba(10,10,10,0.1)",
                  borderRadius: 999, padding: "10px 14px",
                  fontFamily: "Inter, sans-serif", fontSize: 14,
                  outline: "none", color: "#0A0A0A", background: "#F8F5F1"
                }} />
              <button onClick={send} style={{
                background: "#E84118", border: "none", cursor: "pointer",
                width: 40, height: 40, borderRadius: "50%", display: "grid", placeItems: "center",
                boxShadow: "0 6px 16px rgba(232,65,24,0.35)"
              }}><Icon.Send /></button>
            </div>
          </div>
        )}

        {/* Tooltip + Avatar trigger */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {!chatOpen && tipShown && (
            <div style={{
              background: "white", padding: "10px 14px", borderRadius: 14,
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500,
              color: "#0A0A0A", maxWidth: 220, position: "relative",
              animation: "popIn .3s ease"
            }}>
              <div style={{ fontWeight: 600, color: "#E84118", fontSize: 11, letterSpacing: "0.06em", marginBottom: 2 }}>
                DANDARA
              </div>
              Olá! Precisa de ajuda?
              <div style={{
                position: "absolute", right: -6, top: "50%", marginTop: -6,
                width: 12, height: 12, background: "white", transform: "rotate(45deg)"
              }} />
              <button onClick={() => setTipShown(false)} style={{
                position: "absolute", top: -6, right: -6,
                background: "#0A0A0A", color: "white", border: "none",
                width: 20, height: 20, borderRadius: "50%", cursor: "pointer",
                display: "grid", placeItems: "center", fontSize: 11
              }}>×</button>
            </div>
          )}
          <button onClick={() => { setChatOpen(o => !o); setTipShown(false); }} style={{
            position: "relative",
            width: 68, height: 68, borderRadius: "50%",
            background: "linear-gradient(135deg, #E84118 0%, #D4745E 100%)",
            border: "3px solid white", padding: 0,
            boxShadow: "0 12px 32px rgba(232,65,24,0.4)",
            cursor: "pointer", overflow: "hidden",
          }}>
            <div style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden", background: "#25D366", display: "grid", placeItems: "center" }}>
              <Icon.Whatsapp size={36} color="white" />
            </div>
            <span style={{
              position: "absolute", right: 2, bottom: 2,
              width: 16, height: 16, borderRadius: "50%",
              background: "#7CFFA1", border: "2px solid white",
              boxShadow: "0 0 0 0 #7CFFA1", animation: "pulse 2s infinite"
            }} />
          </button>
        </div>
      </div>
    </>
  );
}

// ─── App ───
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <DualBoxes />
      <StatsBar />
      <Services />
      <Timeline />
      <Quote />
      <Footer />
      <FloatingDocks />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
