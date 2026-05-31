-- ================================================================
-- ACOLHEBLACK — Configuração Supabase
-- Execute este SQL em: Painel Supabase → SQL Editor → New query
-- ================================================================

-- 1. Criar tabela de formulários
CREATE TABLE IF NOT EXISTS acolheblack_formularios (
  id              uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  tipo            text        NOT NULL CHECK (tipo IN ('vaga', 'voluntariado', 'parceria')),
  nome            text        NOT NULL,
  email           text        NOT NULL,
  telefone        text,
  organizacao     text,
  area_interesse  text,
  disponibilidade text,
  mensagem        text,
  lido            boolean     DEFAULT false,
  criado_em       timestamptz DEFAULT now()
);

-- 2. Habilitar Row Level Security (RLS)
ALTER TABLE acolheblack_formularios ENABLE ROW LEVEL SECURITY;

-- 3. Permitir apenas INSERT público (anon pode enviar, não pode ler/editar)
CREATE POLICY "insert_publico"
  ON acolheblack_formularios
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- 4. Apenas usuários autenticados (admin) podem ver os registros
CREATE POLICY "leitura_autenticada"
  ON acolheblack_formularios
  FOR SELECT
  TO authenticated
  USING (true);

-- ================================================================
-- AUTOMAÇÃO DE E-MAIL via Database Webhook
-- ================================================================
-- Configure em: Painel Supabase → Database → Webhooks → Create webhook
--
--   Nome:       acolheblack_novo_formulario
--   Table:      acolheblack_formularios
--   Events:     INSERT
--   URL:        <cole aqui a URL do webhook n8n>
--   Method:     POST
--   Headers:    Content-Type: application/json
--
-- O n8n receberá um payload com os dados do registro.
-- No n8n: crie um workflow com trigger "Webhook" → nó "Send Email"
--   - Para: e-mail da equipe ACOLHE
--   - Assunto: Novo formulário: {{ $json.record.tipo }}
--   - Corpo: Nome: {{ $json.record.nome }} / E-mail: {{ $json.record.email }} / ...
--
-- ================================================================
-- VERIFICAR SE DEU CERTO
-- ================================================================
-- SELECT * FROM acolheblack_formularios ORDER BY criado_em DESC LIMIT 10;
