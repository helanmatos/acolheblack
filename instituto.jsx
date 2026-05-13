// Instituto page
const { PgReveal: IRev, PgIcon: II, PgNav: INav, PgFooter: IFoot } = window;

function ISection({ id, label, eyebrow, title, children, bg = "#F8F5F1", color = "#0A0A0A" }) {
  return (
    <IRev>
      <section id={id} data-screen-label={label} style={{ padding: "100px 48px", background: bg, color }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", color: "#E84118", textTransform: "uppercase", marginBottom: 14 }}>{eyebrow}</div>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 3.4vw, 48px)", margin: "0 0 36px", letterSpacing: "-0.025em", lineHeight: 1.05, maxWidth: 820, textWrap: "balance" }}>{title}</h2>
          {children}
        </div>
      </section>
    </IRev>
  );
}

function App() {
  const team = [
    { n: "Aline Souza", r: "Diretora-executiva", b: "Advogada antidiscriminatória, 12 anos no movimento negro." },
    { n: "Dr. Marcos Lima", r: "Coordenação Jurídica", b: "Especialista em direitos humanos e Lei 7.716/89." },
    { n: "Joana Pereira", r: "Coordenação Psicossocial", b: "Psicóloga clínica com foco em traumas raciais." },
    { n: "Rafael Andrade", r: "Articulação Institucional", b: "Pontes com Procon, Defensoria e órgãos públicos." },
  ];
  const press = [
    { date: "abr/2024", outlet: "Folha de S.Paulo", title: "ACOLHE atende 1.200 vítimas no primeiro ano" },
    { date: "mar/2024", outlet: "G1", title: "Procon Racial: o que muda na proteção ao consumidor" },
    { date: "jan/2024", outlet: "Carta Capital", title: "Da denúncia à reparação: o caminho jurídico contra o racismo" },
  ];

  return (
    <>
      <INav activePath="instituto.html" />

      {/* Hero */}
      <section style={{ minHeight: "60vh", paddingTop: 140, paddingBottom: 80, background: "#0A0A0A", color: "white", position: "relative", overflow: "hidden" }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18 }} viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
          <circle cx="1280" cy="120" r="180" fill="#E84118" />
          <circle cx="160" cy="500" r="120" fill="#2D6A4F" />
        </svg>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", position: "relative" }}>
          <IRev><div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", color: "#E84118", textTransform: "uppercase", marginBottom: 14 }}>Instituto ACOLHE</div></IRev>
          <IRev delay={120}>
            <h1 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "clamp(40px, 5.2vw, 72px)", lineHeight: 1.04, letterSpacing: "-0.025em", color: "white", margin: 0, textWrap: "balance", maxWidth: 920 }}>
              Transformando trauma<br />individual em mudança coletiva.
            </h1>
          </IRev>
          <IRev delay={240}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 19, lineHeight: 1.55, color: "rgba(255,255,255,0.88)", margin: "20px 0 0", maxWidth: 640 }}>
              O ACOLHE é uma iniciativa da Faculdade Zumbi dos Palmares dedicada a oferecer apoio psicossocial e assistência jurídica especializada para vítimas de racismo no Brasil.
            </p>
          </IRev>
        </div>
      </section>

      {/* Quem somos */}
      <ISection id="quem-somos" label="01 Quem somos" eyebrow="Quem somos" title="Nascemos da urgência. Crescemos pela escuta.">
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "start" }} className="svc-grid">
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 17, lineHeight: 1.65, color: "rgba(10,10,10,0.78)", margin: 0, textWrap: "pretty" }}>
            O ACOLHE é uma iniciativa da <strong>Universidade Zumbi dos Palmares</strong> — primeira instituição de ensino superior do Brasil com foco na promoção da igualdade racial, fundada em 2003 em São Paulo. Em 2021, em parceria com a Fundação PROCON-SP, a Zumbi criou o <strong>PROCON Racial</strong>: o primeiro canal exclusivo do Brasil para denúncias de discriminação racial no consumo.
            <br /><br />
            O ACOLHE reúne em uma só rede escuta qualificada, cuidado psicológico, orientação jurídica pelo ACOLHE JUS — com 20 advogados voluntários — e a <strong>Câmara de Mediação Racial</strong>, mecanismo especializado que resolve conflitos 3 a 5 vezes mais rápido que a via judicial. Nosso compromisso é com a dignidade e com a transformação estrutural que cada caso individual carrega.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { n: "1.200+", l: "vidas atendidas" },
              { n: "340+", l: "ações jurídicas" },
              { n: "82%", l: "vitórias ou acordos" },
              { n: "12", l: "estados alcançados" },
            ].map(s => (
              <div key={s.l} style={{ background: "white", borderRadius: 14, padding: 22, borderTop: "4px solid #E84118" }}>
                <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 32, color: "#0A0A0A", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(10,10,10,0.65)", marginTop: 6 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipe */}
        <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: 24, margin: "64px 0 24px", letterSpacing: "-0.015em" }}>Equipe</h3>
        <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {team.map(m => (
            <div key={m.n} style={{ background: "white", borderRadius: 14, padding: 22 }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #F4C9B6, #D4745E)", marginBottom: 14 }} />
              <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 17, marginBottom: 2 }}>{m.n}</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#E84118", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>{m.r}</div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, lineHeight: 1.5, color: "rgba(10,10,10,0.7)", margin: 0 }}>{m.b}</p>
            </div>
          ))}
        </div>
      </ISection>

      {/* Trajetória */}
      <ISection id="trajetoria" label="02 Trajetória" eyebrow="Trajetória" title="Uma década construindo respostas concretas ao racismo." bg="white">
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {[
            { date: "Jun/2020", title: "Movimento AR e Manifesto Vidas Negras Importam", desc: "A Zumbi lidera articulação nacional pelo direito à vida e à dignidade da população negra, reunindo dez metas estratégicas." },
            { date: "Nov/2020", title: "Programa Segurança Sem Preconceito", desc: "Em parceria com FENAVIST, ABSEG e ABCFV, a Zumbi forma agentes de segurança privada em letramento racial e integra grupo de trabalho do CNJ." },
            { date: "Nov/2021", title: "PROCON Racial — primeiro no Brasil", desc: "Em parceria com a Fundação PROCON-SP, a Zumbi cria o primeiro canal exclusivo do Brasil para denúncias de discriminação racial no consumo, com acolhimento qualificado." },
            { date: "Mar/2022", title: "Programa Racismo Zero nas Relações de Consumo", desc: "Lançado no Dia Internacional de Luta Contra a Discriminação Racial. Articula PROCON Racial, Manual Antirracista no Varejo e Projeto Acolhe." },
            { date: "Abr/2023", title: "Campanha Notas do Respeito", desc: "Em parceria com a Agência Grey Brasil, a Zumbi transforma a nota fiscal em instrumento de conscientização e canal de orientação jurídica e psicológica." },
            { date: "Mar/2024", title: "Bolsa Antirracista", desc: "A peça, criada pela estilista Naya Violeta, traduz a Lei 14.532/2023 em linguagem cotidiana e direciona consumidores ao acolhimento especializado." },
            { date: "2026", title: "Câmara de Mediação Racial", desc: "Em parceria com a Faleck & Associados, nasce o mecanismo especializado de prevenção e resolução de conflitos de consumo com viés racial." },
          ].map((m, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 24, padding: "24px 0", borderTop: "1px solid rgba(10,10,10,0.08)", alignItems: "start" }}>
              <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 14, color: "#E84118", paddingTop: 3 }}>{m.date}</div>
              <div>
                <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: 18, marginBottom: 6, letterSpacing: "-0.01em" }}>{m.title}</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.6, color: "rgba(10,10,10,0.7)", textWrap: "pretty" }}>{m.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 8, padding: "12px 0", borderTop: "1px solid rgba(10,10,10,0.08)", fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(10,10,10,0.45)" }}>
          Fonte: Universidade Zumbi dos Palmares — Núcleo Segurança do Futuro, Memória das Ações Afirmativas (2020–2026).
        </div>
      </ISection>

      {/* Transparência */}
      <ISection id="transparencia" label="02 Transparência" eyebrow="Transparência" title="Cada real declarado. Cada relatório, público." bg="white">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="svc-grid">
          {[
            { y: "Relatório 2023", d: "Demonstrativo financeiro auditado, atendimentos por estado, indicadores jurídicos.", cta: "Baixar PDF" },
            { y: "Relatório 2022", d: "Primeiro ano completo de atuação. 480 atendimentos, 120 ações em curso.", cta: "Baixar PDF" },
            { y: "Política de Doações", d: "Como recebemos, registramos e prestamos contas de cada apoio recebido.", cta: "Ler política" },
          ].map(r => (
            <div key={r.y} style={{ background: "#F8F5F1", borderRadius: 16, padding: 28 }}>
              <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 22, marginBottom: 10, letterSpacing: "-0.01em" }}>{r.y}</div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.55, color: "rgba(10,10,10,0.7)", margin: "0 0 18px" }}>{r.d}</p>
              <a href="#" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#E84118", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>{r.cta} <II.Arrow size={14} color="#E84118" /></a>
            </div>
          ))}
        </div>
      </ISection>

      {/* Imprensa */}
      <ISection id="imprensa" label="03 Imprensa" eyebrow="Na imprensa" title="O que estão dizendo sobre o ACOLHE.">
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {press.map((p, i) => (
            <a key={i} href="#" style={{ display: "grid", gridTemplateColumns: "120px 200px 1fr auto", gap: 24, padding: "22px 0", borderTop: "1px solid rgba(10,10,10,0.1)", textDecoration: "none", color: "#0A0A0A", alignItems: "center" }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(10,10,10,0.55)" }}>{p.date}</span>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#E84118" }}>{p.outlet}</span>
              <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: 19, letterSpacing: "-0.01em", textWrap: "balance" }}>{p.title}</span>
              <II.Arrow size={16} color="#0A0A0A" />
            </a>
          ))}
        </div>
        <div style={{ marginTop: 32, padding: 28, background: "#0A0A0A", color: "white", borderRadius: 16, display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center" }} className="svc-grid">
          <div>
            <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 600, fontSize: 22, marginBottom: 6 }}>Contato para imprensa</div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.78)" }}>Aline Souza — Diretora-executiva · imprensa@acolhe.org.br</div>
          </div>
          <a href="mailto:imprensa@acolhe.org.br" style={{ background: "white", color: "#0A0A0A", padding: "14px 22px", borderRadius: 12, fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Solicitar entrevista</a>
        </div>
      </ISection>

      {/* Trabalhe conosco */}
      <ISection id="trabalhe" label="04 Trabalhe conosco" eyebrow="Trabalhe conosco" title="Vagas, voluntariado e parcerias." bg="white">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="svc-grid">
          {[
            { t: "Vagas abertas", d: "Advogado(a) trabalhista · Psicólogo(a) clínico · Coordenador(a) regional NE", c: "#E84118" },
            { t: "Voluntariado", d: "Áreas de atuação: jurídica, psicossocial, comunicação, articulação. Carga horária flexível.", c: "#2D6A4F" },
            { t: "Parcerias", d: "Empresas, universidades e movimentos podem firmar convênios para ampliar a rede.", c: "#D4745E" },
          ].map(c => (
            <div key={c.t} style={{ background: "#F8F5F1", borderRadius: 16, padding: 28, borderLeft: `4px solid ${c.c}` }}>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 22, margin: "0 0 10px", letterSpacing: "-0.01em" }}>{c.t}</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.55, color: "rgba(10,10,10,0.7)", margin: "0 0 18px", textWrap: "pretty" }}>{c.d}</p>
              <a href="mailto:rh@acolhe.org.br" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#0A0A0A", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>Quero participar <II.Arrow size={14} /></a>
            </div>
          ))}
        </div>
      </ISection>

      <IFoot />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
