## Plano: Site institucional Caroline Arruda

Entregar como **arquivos estáticos puros** em `public/caroline/` (para não conflitar com a SPA TanStack na raiz). Acessível em `/caroline/index.html`. Cidade e dados de contato ficam como placeholders `[Cidade]`, `[Endereço]`, `[WhatsApp]`, `[Instagram]`, `[Link de agendamento]`.

### Arquivos a criar

- `public/caroline/index.html` — página única, HTML5 semântico
- `public/caroline/style.css` — design system completo, mobile-first
- `public/caroline/script.js` — menu mobile, smooth scroll, FAQ accordion, header on-scroll

### Estrutura do `index.html`

`<head>` com:
- charset, viewport, `lang="pt-BR"`
- `title`: "Psicóloga Caroline Arruda | Psicoterapia em [Cidade]"
- `meta description` conforme briefing
- canonical placeholder, Open Graph, Twitter Card, favicon placeholder
- Google Fonts: Cormorant Garamond (títulos) + Inter (corpo)
- 4 blocos JSON-LD: `Person`, `MedicalBusiness`, `WebSite`, `FAQPage`

`<body>` com landmarks (`header`, `main`, `footer`) e seções com `id` para âncoras:
1. **Header** — logo textual "Caroline Arruda" + subtítulo "Psicóloga Clínica", nav (Início, Sobre, Atendimento, Abordagem, Dúvidas, Contato), botão CTA "Agendar atendimento", botão hambúrguer mobile
2. **Hero** (`#inicio`) — H1 único, subtexto, identificação CRP, dois CTAs, placeholder de imagem (figura com `aspect-ratio` e alt descritivo)
3. **Acolhimento** — "Você não precisa chegar sabendo explicar tudo"
4. **Sobre** (`#sobre`) — biografia ética conforme briefing
5. **Para quem é o atendimento** — 5 cards
6. **Como funciona** (`#atendimento`) — passos numerados
7. **Demandas acolhidas** — 8 cards + aviso sutil
8. **Abordagem** (`#abordagem`) — Humanista-Existencial, Logoterapia, menção à TCC complementar
9. **Alimentação, corpo e identidade** — diferencial estratégico
10. **Benefícios percebidos** — lista de possibilidades (sem promessa)
11. **Localização e atendimento** (`#contato` parcial) — placeholder de mapa/endereço
12. **FAQ** (`#duvidas`) — 7 perguntas em `<details>` (acessível por teclado nativo)
13. **CTA final** — "Um espaço seguro para ser, sentir e existir"
14. **Footer** — dados profissionais, CRP, placeholders, links internos, aviso ético

### `style.css` — design system

`:root` com tokens:
```
--off-white: #F7F1E8;  --bege: #E8D8C4;  --dourado: #B8924A;
--marrom: #2C241D;     --oliva: #6F7652;  --branco: #FFFCF7;
--cinza: #756C62;
--font-display: 'Cormorant Garamond', Georgia, serif;
--font-body: 'Inter', system-ui, sans-serif;
--radius: 14px;  --radius-lg: 24px;
--shadow-soft: 0 6px 24px rgba(44,36,29,.06);
--container: 1140px;  --section-y: clamp(64px, 8vw, 120px);
```

Princípios:
- Mobile-first, breakpoints em 640px / 960px
- Muito respiro (`clamp()` para espaçamentos e tipografia fluida)
- Cards com `border-radius: var(--radius-lg)`, sombra discreta, borda fina `--bege`
- Botão primário: fundo `--marrom`, texto `--branco`, hover suave (`transition: .25s`)
- Botão secundário: outline `--marrom`
- Dourado apenas como acento (linhas finas separadoras, ícones, hover de links)
- Hero com gradiente sutil off-white → bege, forma orgânica decorativa via CSS (blob com `border-radius` assimétrico)
- Contraste AA: corpo `--marrom` sobre `--off-white`, secundário `--cinza`
- `@media (prefers-reduced-motion: reduce)` desabilita transitions/animations
- `:focus-visible` com outline dourado de 2px
- Tap targets ≥ 44px

### `script.js` (JS puro, sem libs)

- Toggle do menu mobile (`aria-expanded`, fecha ao clicar em link ou Esc)
- Smooth scroll para âncoras (respeitando `prefers-reduced-motion`)
- Header ganha classe `.is-scrolled` ao rolar > 20px
- Ano dinâmico no footer
- (FAQ usa `<details>` nativo — sem JS necessário)

### Acessibilidade & SEO

- Um único `<h1>` (hero); H2s para cada seção
- `alt` em todas as imagens; imagem da Caroline com `loading="lazy"` se abaixo da dobra
- `aria-label` em botões de ícone, `aria-current` na nav ativa
- `nav` com `aria-label="Principal"`
- `lang="pt-BR"` no `<html>`
- JSON-LD com placeholders explícitos para `address`, `telephone`, `url`
- Sem texto pequeno (<14px); sem informação só por cor

### Como o usuário acessa

Adicionar uma nota: a página fica em `/caroline/index.html` (não substitui a home React). Se quiser tornar a rota raiz, é uma decisão separada — esta entrega segue o briefing de "arquivos estáticos puros".

### Fora do escopo

- Não preenche cidade/endereço/WhatsApp/Instagram (placeholders mantidos)
- Não cria depoimentos, antes/depois ou promessas de resultado
- Não usa frameworks, bibliotecas externas (apenas Google Fonts)
- Não gera imagem da psicóloga (placeholder com `figure` estilizado)
