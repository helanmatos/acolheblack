// Instituto page
const { PgReveal: IRev, PgIcon: II, PgNav: INav, PgFooter: IFoot } = window;

// ─── Supabase ────────────────────────────────────────────────────────────────
// Substitua SUPABASE_ANON_KEY pela sua chave:
// Painel Supabase → Settings → API → Project API keys → anon public
const SUPABASE_URL     = "https://nrffuuoeqdibdjwamkbd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yZmZ1dW9lcWRpYmRqd2Fta2JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxMjU0NjAsImV4cCI6MjA3NDcwMTQ2MH0.mFfa9EleAv2cLrRZEEaDZ1C2CUHZbnZ8ppdyYH6mDyI";
// ─────────────────────────────────────────────────────────────────────────────

function FormModal({ tipo, onFechar }) {
  const [dados, setDados] = React.useState({
    nome: "", email: "", telefone: "",
    organizacao: "", area_interesse: "", disponibilidade: "", mensagem: ""
  });
  const [status, setStatus] = React.useState("idle"); // idle | enviando | sucesso | erro

  const config = {
    vaga: {
      titulo: "Vagas abertas",
      cor: "#E84118",
      areas: ["Advogado(a) trabalhista", "Psicólogo(a) clínico", "Coordenador(a) regional NE"],
      labelArea: "Cargo de interesse",
    },
    voluntariado: {
      titulo: "Voluntariado",
      cor: "#2D6A4F",
      areas: ["Jurídica", "Psicossocial", "Comunicação", "Articulação"],
      labelArea: "Área de atuação",
      temDisponibilidade: true,
    },
    parceria: {
      titulo: "Parcerias",
      cor: "#D4745E",
      areas: ["Empresa", "Universidade", "Movimento social", "Outro"],
      labelArea: "Tipo de organização",
      temOrganizacao: true,
    },
  };

  const c = config[tipo];
  const set = (campo, valor) => setDados(prev => ({ ...prev, [campo]: valor }));

  // Fecha com Escape
  React.useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") onFechar(); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, []);

  const enviar = async (e) => {
    e.preventDefault();
    setStatus("enviando");
    try {
      const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      const { error } = await client.from("acolheblack_formularios").insert({
        tipo,
        nome:           dados.nome,
        email:          dados.email,
        telefone:       dados.telefone    || null,
        organizacao:    dados.organizacao  || null,
        area_interesse: dados.area_interesse || null,
        disponibilidade:dados.disponibilidade || null,
        mensagem:       dados.mensagem    || null,
      });
      if (error) throw error;
      setStatus("sucesso");
    } catch (err) {
      console.error("Erro Supabase:", err);
      setStatus("erro");
    }
  };

  const inp = {
    width: "100%", padding: "12px 16px", fontFamily: "Inter, sans-serif",
    fontSize: 14, border: "1px solid rgba(10,10,10,0.18)", borderRadius: 10,
    background: "#F8F5F1", color: "#0A0A0A", outline: "none", boxSizing: "border-box", marginTop: 6,
  };
  const lbl = { fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "rgba(10,10,10,0.72)", display: "block" };
  const row = { marginBottom: 16 };

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onFechar(); }}
      style={{
        position: "fixed", inset: 0, background: "rgba(10,10,10,0.65)", zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24, backdropFilter: "blur(4px)",
      }}
    >
      <div style={{
        background: "white", borderRadius: 20, padding: 40, width: "100%",
        maxWidth: 540, maxHeight: "90vh", overflowY: "auto", position: "relative",
        boxShadow: "0 32px 80px rgba(10,10,10,0.28)",
      }}>
        {/* Botão fechar */}
        <button onClick={onFechar} style={{
          position: "absolute", top: 18, right: 18, background: "#F8F5F1",
          border: "none", borderRadius: "50%", width: 36, height: 36,
          cursor: "pointer", fontSize: 20, lineHeight: 1, display: "flex",
          alignItems: "center", justifyContent: "center", color: "#0A0A0A",
        }}>×</button>

        {status === "sucesso" ? (
          /* Tela de sucesso */
          <div style={{ textAlign: "center", padding: "48px 0" }}>
            <div style={{
              width: 64, height: 64, borderRadius: "50%", background: c.cor,
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 20px", fontSize: 28, color: "white",
            }}>✓</div>
            <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 22, margin: "0 0 10px" }}>
              Mensagem recebida!
            </h3>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(10,10,10,0.68)", lineHeight: 1.65, margin: "0 0 28px" }}>
              Em breve alguém da equipe ACOLHE entrará em contato com você.
            </p>
            <button onClick={onFechar} style={{
              padding: "12px 32px", background: c.cor, color: "white", border: "none",
              borderRadius: 10, fontFamily: "Inter, sans-serif", fontSize: 14,
              fontWeight: 600, cursor: "pointer",
            }}>Fechar</button>
          </div>
        ) : (
          /* Formulário */
          <form onSubmit={enviar}>
            <div style={{ borderLeft: `4px solid ${c.cor}`, paddingLeft: 14, marginBottom: 28 }}>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: c.cor, textTransform: "uppercase", marginBottom: 4 }}>
                Trabalhe conosco
              </div>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 22, margin: 0, letterSpacing: "-0.01em" }}>
                {c.titulo}
              </h3>
            </div>

            <div style={row}>
              <label style={lbl}>Nome completo *</label>
              <input required style={inp} value={dados.nome}
                onChange={e => set("nome", e.target.value)} placeholder="Seu nome completo" />
            </div>

            <div style={row}>
              <label style={lbl}>E-mail *</label>
              <input required type="email" style={inp} value={dados.email}
                onChange={e => set("email", e.target.value)} placeholder="seu@email.com" />
            </div>

            <div style={row}>
              <label style={lbl}>Telefone</label>
              <input style={inp} value={dados.telefone}
                onChange={e => set("telefone", e.target.value)} placeholder="(00) 00000-0000" />
            </div>

            {c.temOrganizacao && (
              <div style={row}>
                <label style={lbl}>Organização *</label>
                <input required style={inp} value={dados.organizacao}
                  onChange={e => set("organizacao", e.target.value)} placeholder="Nome da organização" />
              </div>
            )}

            <div style={row}>
              <label style={lbl}>{c.labelArea}</label>
              <select style={inp} value={dados.area_interesse}
                onChange={e => set("area_interesse", e.target.value)}>
                <option value="">Selecione...</option>
                {c.areas.map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>

            {c.temDisponibilidade && (
              <div style={row}>
                <label style={lbl}>Disponibilidade semanal</label>
                <select style={inp} value={dados.disponibilidade}
                  onChange={e => set("disponibilidade", e.target.value)}>
                  <option value="">Selecione...</option>
                  <option>Até 4h/semana</option>
                  <option>4–8h/semana</option>
                  <option>Mais de 8h/semana</option>
                </select>
              </div>
            )}

            <div style={row}>
              <label style={lbl}>Mensagem</label>
              <textarea style={{ ...inp, resize: "vertical", minHeight: 96 }}
                value={dados.mensagem}
                onChange={e => set("mensagem", e.target.value)}
                placeholder="Conte um pouco sobre você e sua motivação..." />
            </div>

            {status === "erro" && (
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#E84118", marginBottom: 12 }}>
                Erro ao enviar. Verifique sua conexão e tente novamente.
              </p>
            )}

            <button type="submit" disabled={status === "enviando"} style={{
              width: "100%", padding: "14px 0",
              background: status === "enviando" ? "rgba(10,10,10,0.25)" : c.cor,
              color: "white", border: "none", borderRadius: 10,
              fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600,
              cursor: status === "enviando" ? "not-allowed" : "pointer", transition: "background 0.2s",
            }}>
              {status === "enviando" ? "Enviando..." : "Enviar"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

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
  const [modalAberto, setModalAberto] = React.useState(null);

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
      <section className="page-hero" style={{ minHeight: "60vh", paddingTop: 200, paddingBottom: 80, background: "#0A0A0A", color: "white", position: "relative", overflow: "hidden" }}>
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
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 17, lineHeight: 1.65, color: "rgba(10,10,10,0.78)", margin: 0, textWrap: "pretty", maxWidth: 760 }}>
            O ACOLHE é uma iniciativa da <strong>Universidade Zumbi dos Palmares</strong> — primeira instituição de ensino superior do Brasil com foco na promoção da igualdade racial, fundada em 2003 em São Paulo. Em 2021, em parceria com a Fundação PROCON-SP, a Zumbi criou o <strong>PROCON Racial</strong>: o primeiro canal exclusivo do Brasil para denúncias de discriminação racial no consumo.
            <br /><br />
            O ACOLHE reúne em uma só rede escuta qualificada, cuidado psicológico, orientação jurídica pelo ACOLHE JUS — com 20 advogados voluntários — e a <strong>Câmara de Mediação Racial</strong>, mecanismo especializado que resolve conflitos 3 a 5 vezes mais rápido que a via judicial. Nosso compromisso é com a dignidade e com a transformação estrutural que cada caso individual carrega.
          </p>

        {/* Equipe — oculta até os dados estarem prontos */}
        {false && (
          <>
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
          </>
        )}
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
            <div key={i} className="traj-row" style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 24, padding: "24px 0", borderTop: "1px solid rgba(10,10,10,0.08)", alignItems: "start" }}>
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


      {/* Imprensa */}
      <ISection id="imprensa" label="03 Imprensa" eyebrow="Na imprensa" title="O que estão dizendo sobre o ACOLHE.">
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {press.map((p, i) => (
            <a key={i} href="#" className="press-row" style={{ display: "grid", gridTemplateColumns: "120px 200px 1fr auto", gap: 24, padding: "22px 0", borderTop: "1px solid rgba(10,10,10,0.1)", textDecoration: "none", color: "#0A0A0A", alignItems: "center" }}>
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
        {modalAberto && <FormModal tipo={modalAberto} onFechar={() => setModalAberto(null)} />}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="svc-grid">
          {[
            { id: "vaga",         t: "Vagas abertas", d: "Advogado(a) trabalhista · Psicólogo(a) clínico · Coordenador(a) regional NE", c: "#E84118" },
            { id: "voluntariado", t: "Voluntariado",   d: "Áreas de atuação: jurídica, psicossocial, comunicação, articulação. Carga horária flexível.", c: "#2D6A4F" },
            { id: "parceria",     t: "Parcerias",      d: "Empresas, universidades e movimentos podem firmar convênios para ampliar a rede.", c: "#D4745E" },
          ].map(card => (
            <div key={card.id} style={{ background: "#F8F5F1", borderRadius: 16, padding: 28, borderLeft: `4px solid ${card.c}` }}>
              <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 22, margin: "0 0 10px", letterSpacing: "-0.01em" }}>{card.t}</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.55, color: "rgba(10,10,10,0.7)", margin: "0 0 18px", textWrap: "pretty" }}>{card.d}</p>
              <button
                onClick={() => setModalAberto(card.id)}
                style={{ background: "none", border: "none", padding: 0, cursor: "pointer", fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#0A0A0A", display: "inline-flex", alignItems: "center", gap: 8 }}
              >Quero participar →</button>
            </div>
          ))}
        </div>
      </ISection>

      <IFoot />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
