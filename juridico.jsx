// Jurídico page
const { useState: jS } = React;
const { PgReveal: JRev, PgIcon: JI, PgNav: JNav, PgFooter: JFoot, WHATS_URL: JW } = window;

function Section({ id, label, eyebrow, title, children, bg = "#F8F5F1", color = "#0A0A0A" }) {
  return (
    <PgReveal>
      <section id={id} data-screen-label={label} style={{ padding: "100px 48px", background: bg, color }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", color: "#2D6A4F", textTransform: "uppercase", marginBottom: 14 }}>{eyebrow}</div>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3.4vw, 48px)", margin: "0 0 36px", letterSpacing: "-0.025em", lineHeight: 1.05, maxWidth: 820, textWrap: "balance" }}>{title}</h2>
          {children}
        </div>
      </section>
    </PgReveal>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = jS("");
  const cases = [
    { id: "BO-2024-0142", area: "Trabalho", status: "em curso", title: "Discriminação racial em processo seletivo", date: "fev/2024" },
    { id: "BO-2024-0098", area: "Consumo", status: "vitória", title: "Vigilância racial em rede varejista", date: "jan/2024" },
    { id: "BO-2023-0521", area: "Educação", status: "em curso", title: "Bullying racial em ambiente escolar", date: "nov/2023" },
    { id: "BO-2023-0488", area: "Trabalho", status: "vitória", title: "Insulto racial reiterado por gestor", date: "out/2023" },
  ];
  const glossary = [
    { t: "Racismo", d: "Crime tipificado pela Lei 7.716/89, com pena de 1 a 3 anos de reclusão. Imprescritível e inafiançável." },
    { t: "Injúria racial", d: "Ofensa à honra com elementos raciais. Tipificada no art. 140 §3º do Código Penal — desde 2023, equiparada ao racismo." },
    { t: "Boletim de Ocorrência", d: "Registro formal feito em delegacia. Primeiro passo para a investigação criminal." },
    { t: "Dano moral", d: "Reparação civil pelo sofrimento causado. Cabe em paralelo à esfera criminal." },
    { t: "Direitos do consumidor", d: "Conjunto de proteções (CDC) acionáveis quando o racismo ocorre em relações de consumo, via Procon." },
  ];
  const filtered = glossary.filter(g => !searchTerm || g.t.toLowerCase().includes(searchTerm.toLowerCase()) || g.d.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <JNav activePath="juridico.html" />

      {/* Hero */}
      <section style={{ minHeight: "62vh", paddingTop: 140, paddingBottom: 80, background: "linear-gradient(135deg, #2D6A4F 0%, #1A4030 100%)", color: "white", position: "relative", overflow: "hidden" }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.16 }} viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
          <line x1="200" y1="0" x2="200" y2="600" stroke="white" strokeWidth="1.5" />
          <line x1="1240" y1="0" x2="1240" y2="600" stroke="white" strokeWidth="1.5" />
          <circle cx="200" cy="300" r="120" fill="white" opacity="0.15" />
          <circle cx="1240" cy="200" r="80" fill="white" opacity="0.2" />
        </svg>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", position: "relative" }}>
          <JRev><div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", color: "white", textTransform: "uppercase", marginBottom: 14, opacity: 0.85 }}>Jurídico · Acolhe Jus</div></JRev>
          <JRev delay={120}>
            <h1 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(40px, 5.2vw, 72px)", lineHeight: 1.04, letterSpacing: "-0.025em", color: "white", margin: 0, textWrap: "balance", maxWidth: 900 }}>
              Justiça é parte do<br />acolhimento.
            </h1>
          </JRev>
          <JRev delay={240}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 19, lineHeight: 1.55, color: "rgba(255,255,255,0.92)", margin: "20px 0 0", maxWidth: 620 }}>
              Equipe especializada em direito antidiscriminatório acompanha cada etapa: orientação, registro, ação criminal, ação civil, esfera trabalhista e Procon Racial.
            </p>
          </JRev>
        </div>
      </section>

      {/* Consulta jurídica */}
      <Section id="consulta" label="01 Consulta" eyebrow="Consulta Jurídica" title="Entenda seu caso antes de qualquer passo.">
        <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[
            { n: "1", t: "Conte o que aconteceu", d: "Em formulário sigiloso ou direto com a Dandara, descreva os fatos. Tudo é confidencial.", c: "#E84118" },
            { n: "2", t: "Análise por advogado", d: "Em até 48h, advogado especializado avalia viabilidade e te explica caminhos possíveis.", c: "#2D6A4F" },
            { n: "3", t: "Plano e próximos passos", d: "Você recebe um plano claro: o que fazer, prazos, documentos e quem te acompanha.", c: "#D4745E" },
          ].map(s => (
            <div key={s.n} style={{ background: "white", borderRadius: 16, padding: 28, borderTop: `4px solid ${s.c}`, boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: s.c, color: "white", display: "grid", placeItems: "center", fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 20, marginBottom: 18 }}>{s.n}</div>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: 20, margin: "0 0 8px", letterSpacing: "-0.01em" }}>{s.t}</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.5, color: "rgba(10,10,10,0.7)", margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <a href={JW} target="_blank" rel="noopener" style={{ background: "#2D6A4F", color: "white", padding: "14px 22px", borderRadius: 12, fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
            Iniciar consulta <JI.Arrow size={14} color="white" />
          </a>
        </div>
      </Section>

      {/* Casos atendidos */}
      <Section id="casos" label="02 Casos" eyebrow="Casos Atendidos" title="Mais de 340 ações em curso. Aqui estão alguns." bg="#0A0A0A" color="white">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="svc-grid">
          {cases.map(c => (
            <div key={c.id} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.55)", textTransform: "uppercase" }}>{c.id}</span>
                <span style={{ background: c.status === "vitória" ? "#2D6A4F" : "#D4745E", color: "white", padding: "4px 10px", borderRadius: 999, fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>{c.status}</span>
              </div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#E84118", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>{c.area} · {c.date}</div>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: 22, margin: 0, letterSpacing: "-0.01em", textWrap: "balance" }}>{c.title}</h3>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, display: "flex", gap: 32, padding: "24px 0", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
          {[{ n: "340+", l: "ações em curso" }, { n: "82%", l: "vitórias ou acordos" }, { n: "1.200+", l: "vidas atendidas" }].map(s => (
            <div key={s.l}>
              <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 32, color: "white", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.65)", marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Glossário */}
      <Section id="glossario" label="03 Glossário" eyebrow="Glossário" title="Termos jurídicos, em linguagem clara.">
        <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Buscar termo…" style={{ width: "100%", maxWidth: 480, border: "1px solid rgba(10,10,10,0.12)", borderRadius: 12, padding: "14px 16px", fontFamily: "Inter, sans-serif", fontSize: 15, outline: "none", background: "white", marginBottom: 28 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }} className="svc-grid">
          {filtered.map(g => (
            <div key={g.t} style={{ background: "white", borderRadius: 14, padding: 24, borderLeft: "4px solid #2D6A4F" }}>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 20, margin: "0 0 8px", letterSpacing: "-0.01em" }}>{g.t}</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.55, color: "rgba(10,10,10,0.7)", margin: 0, textWrap: "pretty" }}>{g.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <JFoot />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
