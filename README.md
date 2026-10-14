# Cara Marketeira — Execução Visual (site real)

Mockup navegável do posicionamento Híbrido (Centro de Longevidade Einstein), traduzido em produto, jornada de compra e operação interna. Substitui a versão anterior em Claude Artifact — aqui é HTML/CSS/JS de verdade, sem sandbox de iframe.

## Estrutura

```
site/
├── index.html        # markup, 3 abas narrativas (Introdução / Detalhes / Fechamento)
├── css/styles.css     # todo o estilo (tema claro/escuro via CSS custom properties)
├── js/script.js       # toda a interação (tabs, stepper de jornada, BPMN viewer, GSAP reveals)
└── bpmn/
    ├── prevencao.bpmn
    ├── aceleracao.bpmn
    └── sobmedida.bpmn # os 3 diagramas BPMN 2.0 como documentos abertos e portáveis
                        # (abríveis em qualquer editor BPMN — Camunda Modeler, bpmn.io, etc.)
```

O `js/script.js` também carrega uma cópia embutida do conteúdo desses 3 arquivos `.bpmn` para alimentar o visualizador interativo na aba "Detalhes" — os arquivos em `bpmn/` são a fonte canônica e o que se entrega como documento técnico independente do site.

## Como abrir

Funciona abrindo `index.html` direto no navegador (duplo clique) — não depende de servidor.

Para desenvolvimento/edição, sirva localmente para evitar qualquer restrição de `file://` em alguns navegadores:

```bash
cd site
python3 -m http.server 8080
# abrir http://localhost:8080
```

## Bibliotecas externas (via CDN, sem instalação)

- [bpmn-js](https://github.com/bpmn-io/bpmn-js) (unpkg) — visualizador do diagrama BPMN
- [GSAP + ScrollTrigger](https://gsap.com/) (cdnjs) — animações de entrada ao rolar a página
- Google Fonts: Work Sans, Inter

Scroll é nativo do navegador (`scroll-behavior:smooth`) — testado especificamente porque uma biblioteca de scroll suave (Lenis) travava o scroll quando rodando dentro do iframe sandboxed do Claude Artifact; removida em favor de robustez.

## Identidade visual (v7, 02/10/2026)

Paleta, tipografia e forma dos componentes replicadas a partir de uma página real do einstein.br (`/n/servicos/mudanca-no-estilo-de-vida`) — cores extraídas via `getComputedStyle` na página ao vivo (não estimadas no olho), não da marca institucional genérica:

| Token | Valor | Uso |
|---|---|---|
| `--accent` | `#1C7CF9` | botões primários (fundo), CTAs |
| `--brand-bright` | `#1774DE` | borda dos cards (24px radius), links |
| `--paper` | `#0C3A6F` | títulos (Work Sans 600) |
| `--muted` | `#363940` | texto de corpo (Inter) |
| `--panel` | `#DFECFB` | faixas de seção (Diferenciais, recaps) |
| `--brand` | `#003B6D` | seção de contato (fundo navy) |

A partir da v8 (02/10/2026, feedback: "não gostei do tema escuro"), o tema escuro e seu toggle foram removidos — é tema único, fiel ao einstein.br. Também foram tirados os efeitos "editoriais" que destoavam da referência (animação dramática de texto no hero, botões com efeito magnético no cursor, blobs decorativos) em favor de um movimento mais sutil e fluido (fade simples, sem distância de deslocamento exagerada). O formulário "Entre em contato" no final do site é mockup de interface (sem backend real), espelhando o formulário de lead real da página de referência.

## Atualização de conteúdo (v9, 14/10/2026)

O site tinha parado em 06/10 e a análise seguiu: rodadas 6, 7 e 8 da viabilização fecharam o desenho do serviço. O que mudou aqui:

- **Faixas etárias de entrada** por nível (0–19 fora do protocolo · 20–39 Prevenção · 40–59 e 60+ Prevenção + Aceleração · Sob Medida sem faixa fixa), como no deck validado com a cliente.
- **Seção nova "Duas trilhas rodam em paralelo"**: os sete momentos do ciclo (dia 1, 2 semanas, ~1 mês, 3, 6, 8 e 12 meses) na trilha presencial, e a trilha digital que coleta entre eles e alimenta cada reavaliação.
- **Nutrição e treino entraram no produto** (plano alimentar e treinos orientados em pequeno grupo) — antes o site só falava de exames e acompanhamento.
- **As frequências de check-in saíram** (eram "mensal" na Prevenção e "quinzenal" na Aceleração, hipóteses de 02/10). A política de contato ativo é uma decisão em aberto do projeto; o site, a jornada e os dois BPMN afetados agora dizem "cadência de contato ativo" e declaram que a frequência não foi definida.
- **`noindex, nofollow`** no `<head>` e **aviso de protótipo no topo da página**, visível antes do conteúdo: esta página replica a identidade do einstein.br e tem um formulário de contato, e não pode ser confundida com um canal oficial do hospital.

**O que deliberadamente não entrou:** nenhum número financeiro. Preço, custo por membro, margem, ponto de equilíbrio e volumes dos cenários são material interno da viabilização e não vão para uma página pública.

## Avisos já embutidos no rodapé do site

Rascunho de execução visual — mockup de trabalho, não peça de marketing final. Nomes de produto e direção de arte são hipóteses a validar. Diagrama BPMN cobre os 3 eixos ativos na priorização (Comercial, Guardião da Jornada, Assistencial); Tecnológica e Regulatória ficam fora por decisão do time. Ver `02_analise_biodesign/sondagem_posicionamento_design_comunicacao.md` para as fontes da sondagem de concorrentes.
