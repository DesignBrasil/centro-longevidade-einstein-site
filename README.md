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

## Avisos já embutidos no rodapé do site

Rascunho de execução visual — mockup de trabalho, não peça de marketing final. Nomes de produto e direção de arte são hipóteses a validar. Diagrama BPMN cobre os 3 eixos ativos na priorização (Comercial, Guardião da Jornada, Assistencial); Tecnológica e Regulatória ficam fora por decisão do time. Ver `02_analise_biodesign/sondagem_posicionamento_design_comunicacao.md` para as fontes da sondagem de concorrentes.
