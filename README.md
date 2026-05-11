# ACOLHE — Site institucional

Site da plataforma ACOLHE, parceria entre **Faculdade Zumbi dos Palmares** e o **PROCON Racial**.

🔗 **Live:** https://SEU-USUARIO.github.io/acolhe/ _(substitua após publicar)_

## Páginas

| Arquivo | Descrição |
|---|---|
| `index.html` | Landing institucional |
| `acolhimento.html` | Canais de acolhimento (Dandara, linha, WhatsApp, presencial) |
| `juridico.html` | Consulta jurídica, casos atendidos e glossário |
| `instituto.html` | Quem somos, transparência, imprensa, trabalhe conosco |

## Stack

- HTML + React 18 (via UMD)
- JSX transpilado em runtime por Babel Standalone
- Sem build step — basta servir os arquivos estáticos

## Publicar no GitHub Pages (passo-a-passo)

1. **Criar repositório:** vá em https://github.com/new, dê o nome `acolhe` (público).
2. **Subir os arquivos:** na página do repo recém-criado, clique em **Add file → Upload files** e arraste tudo desta pasta (`index.html`, `*.jsx`, `.nojekyll`, etc).
3. **Commit:** clique em **Commit changes**.
4. **Ativar Pages:**
   - **Settings** → **Pages** (menu lateral).
   - **Source:** _Deploy from a branch_.
   - **Branch:** `main` · pasta `/ (root)` · **Save**.
5. **Aguardar ~1 min.** O link público (`https://SEU-USUARIO.github.io/acolhe/`) aparece no topo da página de Pages quando o deploy termina.

> O arquivo `.nojekyll` (vazio) garante que o GitHub Pages sirva os `.jsx` sem processamento extra. **Não delete.**

## Desenvolvimento local

Qualquer servidor estático funciona. Exemplos:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Acesse `http://localhost:8080`.

## Créditos

- **Realização:** Universidade Zumbi dos Palmares
- **Desenvolvimento:** [Umoja Infinity](https://www.umojainfinity.com.br)
- **Apoio:** [PROCON-SP / PROCON Racial](https://www.procon.sp.gov.br/procon-racial/)

Faculdade Zumbi dos Palmares · CNPJ 14.050.274/0001-08 · © 2026
