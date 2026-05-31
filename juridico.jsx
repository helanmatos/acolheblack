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
    { t: "Injúria racial", d: "Ofensa à honra com elementos raciais. Desde a Lei 14.532/2023, equiparada ao racismo: inafiançável, imprescritível e com pena de 2 a 5 anos." },
    { t: "Boletim de Ocorrência", d: "Registro formal feito em delegacia. Primeiro passo para a investigação criminal." },
    { t: "Dano moral", d: "Reparação civil pelo sofrimento causado. Cabe em paralelo à esfera criminal." },
    { t: "Direitos do consumidor", d: "Conjunto de proteções (CDC) acionáveis quando o racismo ocorre em relações de consumo, via PROCON Racial." },
    { t: "Estatuto da Igualdade Racial", d: "Lei 12.288/2010. Institui medidas e políticas para combater discriminação e promover a igualdade étnico-racial em todas as áreas da vida social." },
    { t: "PROCON Racial", d: "Primeiro canal exclusivo do Brasil para denúncias de discriminação racial no consumo, criado em 2021 pela Universidade Zumbi dos Palmares e a Fundação PROCON-SP." },
    { t: "Mediação racial", d: "Processo voluntário, sigiloso e 3 a 5 vezes mais rápido que o litígio judicial. Mediadores com letramento racial garantem que o processo seja culturalmente sensível." },
    { t: "Protocolo Antirracista", d: "Exigido pela Lei 18.427/2026-SP para estabelecimentos comerciais de grande circulação. Inclui treinamento de equipes, canais de denúncia e fluxos de acolhimento." },
  ];
  const filtered = glossary.filter(g => !searchTerm || g.t.toLowerCase().includes(searchTerm.toLowerCase()) || g.d.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <JNav activePath="juridico.html" />

      {/* Hero */}
      <section className="page-hero" style={{ minHeight: "62vh", paddingTop: 200, paddingBottom: 80, background: "linear-gradient(135deg, #2D6A4F 0%, #1A4030 100%)", color: "white", position: "relative", overflow: "hidden" }}>
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


      {/* Marcos Legais */}
      <Section id="marcos" label="03 Marcos Legais" eyebrow="Marcos Legais" title="A lei é o seu escudo. Conheça seus direitos.">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }} className="svc-grid">
          {[
            { year: "1988", title: "Constituição Federal", desc: "Criminaliza o racismo (art. 5º, XLII) — crime inafiançável e imprescritível. Veda discriminação como objetivo fundamental da República (art. 3º, IV)." },
            { year: "1989", title: "Lei 7.716 — Lei do Racismo", desc: "Define crimes de preconceito de raça ou cor, com penas de reclusão de 1 a 3 anos. Base do direito antirracista penal no Brasil." },
            { year: "2010", title: "Lei 12.288 — Estatuto da Igualdade Racial", desc: "Institui medidas e políticas para combater discriminação e promover a igualdade étnico-racial em todas as áreas da vida social." },
            { year: "2022", title: "Decreto 10.932 — Convenção Interamericana", desc: "Promulga a Convenção Interamericana contra o Racismo, a Discriminação Racial e Formas Correlatas de Intolerância." },
            { year: "2023", title: "Lei 14.532 — Injúria Racial", desc: "Equipara a injúria racial ao crime de racismo: inafiançável, imprescritível, com pena de 2 a 5 anos de reclusão." },
            { year: "2024", title: "Resolução CNJ 598 — Perspectiva Racial", desc: "Institui protocolo obrigatório para todo o Judiciário julgar com perspectiva racial, enfrentando o racismo estrutural nos processos." },
            { year: "Dez/2025", title: "ADPF 973 — STF", desc: "Decisão unânime do STF reconhece o racismo estrutural no Brasil e determina revisão do Plano Nacional de Combate ao Racismo e criação de protocolos em todo o Judiciário." },
            { year: "2026", title: "Lei 18.427/SP — Protocolo Antirracista", desc: "Obriga estabelecimentos comerciais de grande circulação a adotarem protocolo antirracista, treinar equipes e criar canais qualificados de denúncia e acolhimento." },
          ].map(m => (
            <div key={m.year} style={{ background: "white", borderRadius: 14, padding: 24, display: "flex", gap: 18, alignItems: "flex-start" }}>
              <div style={{ flex: "0 0 auto", background: "#2D6A4F", color: "white", borderRadius: 10, padding: "8px 14px", fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>{m.year}</div>
              <div>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 17, margin: "0 0 6px", letterSpacing: "-0.01em" }}>{m.title}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.55, color: "rgba(10,10,10,0.7)", margin: 0, textWrap: "pretty" }}>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Glossário */}
      <Section id="glossario" label="04 Glossário" eyebrow="Glossário" title="Termos jurídicos, em linguagem clara.">
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
