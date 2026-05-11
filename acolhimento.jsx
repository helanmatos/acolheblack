// Acolhimento page
const { useState: aS, useEffect: aE, useRef: aR } = React;
const { PgReveal, PgIcon, PgNav, PgFooter, PgDandaraAvatar, WHATS_URL, PHONE, PHONE_TEL, ADDRESS_LINES } = window;

function FalarDandaraSection() {
  const [open, setOpen] = aS(false);
  const [messages, setMessages] = aS([
    { who: "dandara", text: "Olá! Eu sou a Dandara. Estou aqui para te escutar e dar as primeiras orientações. Como posso te ajudar?" },
  ]);
  const [draft, setDraft] = aS("");
  const scrollRef = aR(null);
  aE(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [messages]);
  const send = (txt) => {
    const text = (txt ?? draft).trim();
    if (!text) return;
    setMessages(m => [...m, { who: "me", text }]);
    setDraft("");
    setTimeout(() => setMessages(m => [...m, { who: "dandara", text: "Te ouvi. Posso te conectar com nossa equipe jurídica, psicológica ou social — qual faz mais sentido agora?" }]), 900);
  };
  const quick = ["Sofri racismo agora", "Preciso de orientação", "Quero denunciar"];

  return (
    <section id="falar-dandara" data-screen-label="01 Falar com Dandara" style={{
      minHeight: "92vh", paddingTop: 110, paddingBottom: 80, position: "relative", overflow: "hidden",
      background: "linear-gradient(135deg, #E84118 0%, #D4745E 100%)",
    }}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18 }} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <circle cx="120" cy="780" r="180" fill="white" opacity="0.25" />
        <circle cx="1320" cy="120" r="120" fill="white" opacity="0.18" />
      </svg>
      <div className="hero-grid" style={{ width: "100%", maxWidth: 1320, margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", position: "relative", zIndex: 2 }}>
        <div>
          <PgReveal><div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", color: "white", textTransform: "uppercase", marginBottom: 16, opacity: 0.85 }}>Acolhimento · Falar com Dandara</div></PgReveal>
          <PgReveal delay={120}>
            <h1 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 1.04, letterSpacing: "-0.025em", color: "white", margin: 0, textWrap: "balance" }}>
              Comece pela conversa.
            </h1>
          </PgReveal>
          <PgReveal delay={240}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 19, lineHeight: 1.5, color: "rgba(255,255,255,0.92)", margin: "20px 0 0", maxWidth: 480, textWrap: "pretty" }}>
              A Dandara é uma assistente de acolhimento com IA. Sigilosa, sem julgamento e disponível agora. Conte o que aconteceu — ela vai te orientar nos próximos passos.
            </p>
          </PgReveal>
          <PgReveal delay={360}>
            <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0", display: "flex", flexDirection: "column", gap: 10, maxWidth: 480 }}>
              {["Atendimento 100% sigiloso", "Disponível 24/7", "Sem custo para você"].map(t => (
                <li key={t} style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "Inter, sans-serif", fontSize: 15, color: "rgba(255,255,255,0.92)" }}>
                  <span style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(255,255,255,0.18)", display: "grid", placeItems: "center", fontSize: 12 }}>✓</span>{t}
                </li>
              ))}
            </ul>
          </PgReveal>
        </div>

        <PgReveal delay={200}>
          <InteractiveDandara />
        </PgReveal>
      </div>
    </section>
  );
}

function InteractiveDandara() {
  const [hover, setHover] = aS(false);
  const [pulse, setPulse] = aS(0);
  const phrases = [
    "Estou aqui para te escutar.",
    "Sem julgamento, no seu tempo.",
    "Conta o que aconteceu — eu te oriento.",
    "O acolhimento começa por uma conversa.",
  ];
  const [phraseIdx, setPhraseIdx] = aS(0);
  aE(() => {
    const t = setInterval(() => setPhraseIdx(i => (i + 1) % phrases.length), 4200);
    return () => clearInterval(t);
  }, []);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setPulse(p => p + 1)}
      style={{ position: "relative", display: "grid", placeItems: "center", cursor: "pointer", userSelect: "none" }}
    >
      {/* Soft halo */}
      <div style={{ position: "absolute", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 65%)", filter: "blur(8px)", animation: "floaty 6s ease-in-out infinite" }} />
      {/* Expanding ripple on click */}
      <div key={pulse} style={{ position: "absolute", width: 380, height: 380, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.5)", animation: pulse > 0 ? "rippleOut 1.4s ease-out" : "none", opacity: 0, pointerEvents: "none" }} />
      {/* Avatar with breathing scale */}
      <div style={{ position: "relative", transform: hover ? "scale(1.04)" : "scale(1)", transition: "transform .6s cubic-bezier(.2,.7,.2,1)", animation: "breathe 4.8s ease-in-out infinite" }}>
        <PgDandaraAvatar size={420} />
        {/* Listening dot */}
        <div style={{ position: "absolute", right: 36, top: 30, display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.92)", padding: "8px 14px", borderRadius: 999, boxShadow: "0 8px 22px rgba(0,0,0,0.15)" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#7CFFA1", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, color: "#0A0A0A", letterSpacing: "0.04em" }}>OUVINDO</span>
        </div>
      </div>
      {/* Speech bubble */}
      <div style={{ position: "absolute", bottom: -8, background: "white", color: "#0A0A0A", padding: "14px 20px", borderRadius: 18, boxShadow: "0 12px 32px rgba(0,0,0,0.18)", maxWidth: 340, textAlign: "center" }}>
        <div key={phraseIdx} style={{ fontFamily: "Syne, sans-serif", fontSize: 16, fontWeight: 600, lineHeight: 1.3, animation: "popIn .6s ease both" }}>{phrases[phraseIdx]}</div>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "rgba(10,10,10,0.55)", marginTop: 6, letterSpacing: "0.06em", textTransform: "uppercase" }}>Toque para começar</div>
      </div>
    </div>
  );
}

function ContactCard({ id, label, title, sub, color, Icon, ctaLabel, ctaHref, ctaTarget, children }) {
  return (
    <PgReveal>
      <section id={id} data-screen-label={label} style={{ padding: "80px 48px", background: id === "linha-urgencia" ? "#0A0A0A" : id === "presencial" ? "#F1ECE3" : "white", color: id === "linha-urgencia" ? "white" : "#0A0A0A" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 56, alignItems: "center" }} className="contact-grid">
          <div>
            <div style={{ width: 84, height: 84, borderRadius: 22, background: `${color}18`, border: `1px solid ${color}40`, display: "grid", placeItems: "center", marginBottom: 22 }}>
              <Icon size={42} color={color} />
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", color, textTransform: "uppercase", marginBottom: 12 }}>{label}</div>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3.4vw, 44px)", margin: 0, letterSpacing: "-0.025em", lineHeight: 1.05, textWrap: "balance" }}>{title}</h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 17, lineHeight: 1.55, opacity: 0.78, margin: "16px 0 28px", maxWidth: 460 }}>{sub}</p>
            <a href={ctaHref} target={ctaTarget} rel={ctaTarget === "_blank" ? "noopener" : undefined} style={{ background: color, color: "white", border: "none", padding: "16px 24px", borderRadius: 12, fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", boxShadow: `0 10px 28px ${color}55` }}>
              {ctaLabel} <PgIcon.Arrow size={14} color="white" />
            </a>
          </div>
          <div>{children}</div>
        </div>
      </section>
    </PgReveal>
  );
}

function App() {
  return (
    <>
      <PgNav activePath="acolhimento.html" />
      <FalarDandaraSection />

      {/* Linha de urgência */}
      <ContactCard
        id="linha-urgencia"
        label="02 · Linha de urgência"
        title="Ligue agora. Atendimento humano."
        sub="Linha gratuita com equipe de psicólogos e advogados. Para casos em andamento, situações de risco ou quando você só precisa falar com alguém."
        color="#E84118"
        Icon={PgIcon.Phone}
        ctaLabel={`Ligar para ${PHONE}`}
        ctaHref={PHONE_TEL}
      >
        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 24, padding: 36, color: "white", textAlign: "center" }}>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", marginBottom: 14 }}>Linha gratuita</div>
          <a href={PHONE_TEL} style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(40px, 5vw, 64px)", color: "white", letterSpacing: "-0.02em", textDecoration: "none", display: "block", lineHeight: 1.1 }}>{PHONE}</a>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.7)", marginTop: 16 }}>Atendimento humano · sigiloso · sem custo</div>
          <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[{ t: "Apoio psicológico", n: "" }, { t: "Orientação jurídica", n: "" }, { t: "Risco imediato", n: "" }, { t: "Outras situações", n: "" }].map(o => (
              <div key={o.t} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 12, padding: "12px 14px", textAlign: "left", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E84118", flex: "0 0 auto" }} />
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "white" }}>{o.t}</div>
              </div>
            ))}
          </div>
        </div>
      </ContactCard>

      {/* WhatsApp */}
      <ContactCard
        id="whatsapp"
        label="03 · WhatsApp"
        title="Mande mensagem. Triagem com IA, depois nossa equipe."
        sub="O atendimento começa com uma triagem feita pela Dandara, nossa assistente com IA: ela esclarece dúvidas, orienta os primeiros passos e coleta de forma sigilosa os dados sobre o que aconteceu. Em seguida, sua mensagem é encaminhada para a equipe humana, que entra em contato no horário comercial."
        color="#25D366"
        Icon={PgIcon.Whatsapp}
        ctaLabel="Abrir WhatsApp"
        ctaHref={WHATS_URL}
        ctaTarget="_blank"
      >
        <div style={{ background: "white", borderRadius: 24, padding: 28, boxShadow: "0 18px 50px rgba(0,0,0,0.10)", border: "1px solid rgba(10,10,10,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 18, borderBottom: "1px solid rgba(10,10,10,0.08)" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#25D366", display: "grid", placeItems: "center" }}><PgIcon.Whatsapp size={22} /></div>
            <div>
              <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 15 }}>ACOLHE · Atendimento</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#25D366", fontWeight: 600 }}>● online</div>
            </div>
          </div>
          <div style={{ padding: "22px 0", display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { who: "them", text: "Olá! Sou a Dandara, assistente do ACOLHE. Vou te orientar e fazer uma triagem inicial — tudo com sigilo." },
              { who: "them", text: "Pode contar com calma o que aconteceu. A partir das suas respostas, encaminho para a equipe certa: jurídica, psicológica ou social." },
            ].map((m, i) => (
              <div key={i} style={{ alignSelf: "flex-start", maxWidth: "85%", background: "#E8F8EE", color: "#0A0A0A", padding: "10px 14px", borderRadius: "16px 16px 16px 4px", fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.45 }}>{m.text}</div>
            ))}
          </div>
          <a href={WHATS_URL} target="_blank" rel="noopener" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "#25D366", color: "white", padding: "14px 18px", borderRadius: 12, fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
            <PgIcon.Whatsapp size={20} /> Continuar no WhatsApp
          </a>
        </div>
      </ContactCard>

      {/* Atendimento presencial */}
      <ContactCard
        id="presencial"
        label="04 · Atendimento presencial"
        title="Quer vir até a gente? Estamos aqui."
        sub="Atendemos presencialmente na Faculdade Zumbi dos Palmares, com agendamento prévio. Espaço acolhedor, salas reservadas e equipe multidisciplinar disponível."
        color="#2D6A4F"
        Icon={PgIcon.Pin}
        ctaLabel="Agendar presencial"
        ctaHref={WHATS_URL}
        ctaTarget="_blank"
      >
        <div style={{ background: "white", borderRadius: 24, padding: 32, border: "1px solid rgba(10,10,10,0.06)", boxShadow: "0 18px 50px rgba(0,0,0,0.08)" }}>
          <div style={{ height: 200, borderRadius: 16, background: "linear-gradient(135deg, #2D6A4F 0%, #1A4030 100%)", position: "relative", overflow: "hidden", marginBottom: 24 }}>
            <svg viewBox="0 0 400 200" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.25 }}>
              <path d="M0 140 L80 110 L160 130 L240 90 L320 120 L400 100 L400 200 L0 200 Z" fill="white" />
              <path d="M0 160 L100 140 L180 155 L280 130 L400 145 L400 200 L0 200 Z" fill="white" opacity="0.5" />
              <circle cx="200" cy="80" r="32" fill="white" opacity="0.4" />
            </svg>
            <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", display: "grid", placeItems: "center" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#E84118", display: "grid", placeItems: "center", boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}>
                <PgIcon.Pin size={22} color="white" />
              </div>
            </div>
          </div>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", color: "#2D6A4F", textTransform: "uppercase", marginBottom: 10 }}>Endereço</div>
          {ADDRESS_LINES.map((l, i) => (
            <div key={i} style={{ fontFamily: i === 0 ? "Syne, sans-serif" : "Inter, sans-serif", fontSize: i === 0 ? 20 : 15, fontWeight: i === 0 ? 700 : 400, color: i === 0 ? "#0A0A0A" : "rgba(10,10,10,0.7)", lineHeight: 1.4, letterSpacing: i === 0 ? "-0.01em" : "normal" }}>{l}</div>
          ))}
          <div style={{ marginTop: 18, paddingTop: 18, borderTop: "1px solid rgba(10,10,10,0.08)", fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(10,10,10,0.7)" }}>
            <strong style={{ color: "#0A0A0A" }}>Horário:</strong> Seg–Sex, 9h–18h<br />
            <strong style={{ color: "#0A0A0A" }}>Agendamento:</strong> via WhatsApp ou linha de urgência
          </div>
        </div>
      </ContactCard>

      <PgFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
