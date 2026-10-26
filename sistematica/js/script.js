/* Por dentro do motor — as quatro camadas (19/10/2026) e a leitura da
   peça (25/10/2026): ABERTURA → as quatro camadas → DIREÇÃO.
   A peça é um encadeamento, não uma tela só. Cada camada responde UMA
   pergunta e aponta para a seguinte, no mesmo vocabulário da prancha
   sistêmica: ECOSSISTEMA ⊃ SISTEMA ⊃ SERVIÇOS ⊃ JORNADAS.
   O relatório anda com a pessoa: em cada camada, a pergunta dela fica no
   alto (ao lado da pergunta da camada) e o que o desenho revela — e onde
   se mexe — fica na faixa de baixo (camadas.csv). A abertura conta a
   história antes do sistema (relatorio.csv) e a direção fecha com o que
   encontramos, o que está aberto e o que vem a seguir (achados.csv,
   pendencias.csv, proximos.csv).
     ecossistema — quem paga, quem autoriza, quem se beneficia
     sistema     — o funil do Centro: o que ele mede e modula
     serviços    — os pacotes: o que entra em cada um
     jornadas    — o que a pessoa vive, no Centro e à distância
   Dados: js/data.js, GERADO de 05_sintese/dados/*.csv (não editar à mão).
   Sem cifras no desenho (decisão de 15/10): os valores ficam no vault. */

(function () {
  "use strict";

  var NS = "http://www.w3.org/2000/svg";
  var M_CURTO = { entrada: "M¹", pescoco: "M²", saida: "M³" };
  var M_ROTULO = { entrada: "M¹ · a Medida", pescoco: "M² · o Mapa", saida: "M³ · as Modulações" };
  /* os enquadramentos vêm do back (enquadramentos.csv): rótulo, texto curto
     e COR. A cor é a chave de leitura — a mesma na etiqueta e na seta.
     (o tracejado da seta continua significando "a confirmar") */
  var ENQ_TXT = {}, ENQ_CURTO = {};
  (function () {
    var regras = [];
    Object.keys(ENQUADRAMENTOS).forEach(function (k) {
      var e = ENQUADRAMENTOS[k];
      ENQ_TXT[k] = e.rotulo;
      ENQ_CURTO[k] = e.curto;
      regras.push(
        ".enq-" + k + "{background:" + e.fundo + ";color:" + e.cor + ";border:1px solid " + e.cor + "40}",
        ".c-lista li.enqp-" + k + "{border-left-color:" + e.cor + "}",
        ".l-aval li.enqp-" + k + "{border-left:10px solid " + e.cor + ";padding-left:14px}",
        // "a confirmar": listras na cor do enquadramento (o tracejado some numa barra grossa)
        "li.enqp-" + k + ".c-duvida{border-image:repeating-linear-gradient(to bottom," + e.cor + " 0 4px,transparent 4px 7px) 0 0 0 1}",
        ".c-leg.enqp-" + k + "{color:" + e.cor + "}",
        ".f-enq-" + k + "{stroke:" + e.cor + "}",
        ".rf-enq-" + k + "{fill:" + e.cor + "}",
        ".c-m.enq-cor-" + k + "{color:" + e.cor + "}");
    });
    var s = document.createElement("style");
    s.textContent = regras.join("\n");
    document.head.appendChild(s);
  })();

  function el(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function txt(parent, x, y, s, cls, anchor) {
    var t = el("text", { x: x, y: y, "class": cls || "", "text-anchor": anchor || "start" }, parent);
    t.textContent = s;
    return t;
  }
  function limpa(t) { return (t || "").replace(/[⚠️⚪✅❌🆕🔘]|️/g, "").replace(/\s{2,}/g, " ").trim(); }

  /* ---- nada estoura a borda: o painel se encaixa na altura disponível ----
     Escreve o conteúdo dentro de um invólucro e, se ele passar da altura do
     painel, encolhe em passos até caber (piso em 78%). Vale para qualquer
     janela — é o que garante a promessa de "uma tela, sem rolagem".
     O caminho inverso também vale: um painel marcado com `data-cresce` (o
     teto de ampliação) sobe em passos quando sobra altura — é assim que a
     letra dos serviços fica legível numa tela grande em vez de ficar miúda
     no alto. Abaixo de 1020px a peça empilha e rola: aí o zoom sai de cena. */
  var EMPILHA = 1020;
  var painesAjustar = [];
  function encaixa(cont) {
    var w = cont && cont.firstElementChild;
    if (!w) return;
    if (window.innerWidth <= EMPILHA) { w.style.zoom = "1"; return; }
    if (!cont.clientHeight) return;
    w.style.zoom = "1";
    var alvo = cont.clientHeight - 16;   // folga: o conteúdo nunca encosta na borda
    var teto = parseFloat(cont.getAttribute("data-cresce")) || 1;
    if (teto > 1 && w.getBoundingClientRect().height <= alvo) {
      var bom = 1;
      for (var g = 1.04; g <= teto + 1e-9; g += 0.04) {
        w.style.zoom = String(g);
        if (w.getBoundingClientRect().height > alvo) break;
        bom = g;
      }
      w.style.zoom = String(bom);
      return;
    }
    // encolhe só o necessário: mede depois de cada passo e para no primeiro
    // que couber (antes a medida ia um passo atrasada e tirava 3% à toa).
    // O piso é baixo de propósito: como o texto nasce grande, 0,62 ainda dá
    // uma letra legível — e cortar conteúdo seria pior do que reduzir mais.
    var piso = parseFloat(cont.getAttribute("data-piso")) || 0.62;
    for (var z = 1; z > piso && w.getBoundingClientRect().height > alvo;) {
      z -= 0.03;
      w.style.zoom = String(z);
    }
  }
  function escreve(cont, html) {
    cont.innerHTML = "<div class='ajusta'>" + html + "</div>";
    if (painesAjustar.indexOf(cont) < 0) painesAjustar.push(cont);
    encaixa(cont);
  }
  /* a altura do palco é medida, não calculada: em algumas janelas o 100vh do
     css resolve para mais do que a área visível e o rodapé da peça ficaria
     cortado. Aqui a conta é feita com o que a janela realmente mostra. */
  function dimensiona() {
    var palco = document.querySelector(".palco"), barra = document.querySelector("nav");
    if (!palco || !barra) return;
    if (window.innerWidth <= EMPILHA) { palco.style.height = ""; return; }
    palco.style.height = Math.max(360, document.documentElement.clientHeight - barra.offsetHeight) + "px";
  }
  function reencaixaTudo() { dimensiona(); painesAjustar.forEach(encaixa); }
  var reencaixe;
  window.addEventListener("resize", function () {
    clearTimeout(reencaixe);
    reencaixe = setTimeout(reencaixaTudo, 150);
  });
  /* as fontes chegam depois do script: medir com a fonte de reserva dá uma
     caixa mais alta e o painel encolheria à toa (era o que deixava a letra
     dos serviços miúda). Então mede-se de novo quando a tipografia chega. */
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(reencaixaTudo);
  window.addEventListener("load", reencaixaTudo);
  function porId(id) { return TECNOLOGIAS.filter(function (t) { return t.id === id; })[0]; }
  function maiuscula(s) { return (s || "").charAt(0).toUpperCase() + (s || "").slice(1); }
  function marcadores(defs) {
    // uma ponta de seta por enquadramento, na cor dele
    Object.keys(ENQUADRAMENTOS).forEach(function (k) {
      var mk = el("marker", { id: "m-enq-" + k, viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto-start-reverse" }, defs);
      el("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: ENQUADRAMENTOS[k].cor }, mk);
    });
  }
  // rótulos próximos demais se afastam na vertical (não empilham)
  function desempilha(lista, gap) {
    lista.slice().sort(function (a, b) { return a.ly - b.ly; })
      .reduce(function (piso, c) { c.ly = Math.max(c.ly, piso); return c.ly + gap; }, -1e9);
  }

  /* ================= as quatro camadas (a navegação) ================= */
  // os textos de leitura vêm do back: camadas.csv (pergunta, a pergunta da
  // pessoa, o que revela, a alavanca) e relatorio.csv (a capa e a voz)
  var CAM = (typeof CAMADAS !== "undefined") ? CAMADAS : {};
  var REL = (typeof RELATORIO !== "undefined") ? RELATORIO : {};
  function cam(id, k, padrao) { return (CAM[id] && CAM[id][k]) || padrao || ""; }
  var VISTAS = [
    { id: "abertura", rot: "ABERTURA", livro: true, perg: REL.pergunta_abertura || "o que é o Centro, e como ler este relatório?",
      pp: REL.pergunta_pessoa_abertura },
    { id: "ecossistema", rot: "ECOSSISTEMA", perg: cam("ecossistema", "pergunta", "quem paga, quem autoriza e quem se beneficia?") },
    { id: "sistema", rot: "SISTEMA", perg: cam("sistema", "pergunta", "o que o Centro mede e modula — e o que puxa o quê?") },
    { id: "servicos", rot: "SERVIÇOS", perg: cam("servicos", "pergunta", "o que entra em cada pacote?") },
    { id: "jornadas", rot: "JORNADAS", perg: cam("jornadas", "pergunta", "o que a pessoa vive — no Centro e à distância?") },
    { id: "direcao", rot: "DIREÇÃO", livro: true, perg: REL.pergunta_direcao || "o que encontramos, e o que falta definir?",
      pp: REL.pergunta_pessoa_direcao }
  ];
  var vistaAtual = null, botoesVista = {};
  var pergunta = document.getElementById("pergunta");
  var revela = document.getElementById("revela");
  var manchete = document.getElementById("manchete");
  (function () {
    var barra = document.getElementById("camadas");
    VISTAS.forEach(function (v, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "f-camada" + (v.livro ? " f-livro" : "");
      // numeradas: a ordem de leitura é parte do argumento
      b.innerHTML = "<small>" + i + "</small>" + v.rot;
      b.setAttribute("role", "tab");
      b.addEventListener("click", function () { abre(v.id); });
      barra.appendChild(b);
      botoesVista[v.id] = b;
    });
  })();
  function abre(id) {
    var v = VISTAS.filter(function (x) { return x.id === id; })[0] || VISTAS[0];
    vistaAtual = v.id;
    VISTAS.forEach(function (x) {
      document.getElementById("v-" + x.id).classList.toggle("on", x.id === v.id);
      botoesVista[x.id].classList.toggle("on", x.id === v.id);
      botoesVista[x.id].setAttribute("aria-selected", x.id === v.id ? "true" : "false");
    });
    // no alto, as duas perguntas: a da camada e a da pessoa que atravessa
    var pp = cam(v.id, "pergunta_pessoa") || v.pp;
    var nv = cam(v.id, "nivel");
    pergunta.innerHTML = "<b>" + v.rot + "</b>" + (nv ? "<span class='nivel nv-" + nv + "'>" + nv + "</span>" : "") + " · " + v.perg +
      (pp ? " <span class='perg-pessoa'>— para ela: «" + pp + "»</span>" : "");
    // a conclusão da camada vem antes do desenho (Goh: uma coisa primeiro)
    if (manchete) manchete.textContent = cam(v.id, "manchete") || "";
    revelaCamada(v);
    if (v.id === "jornadas") montaJornada(jornadaAtual);
    // painel oculto tem altura zero: o encaixe só vale quando a camada abre
    reencaixaTudo();
  }
  /* a faixa de baixo: o que a camada revela e onde se mexe (a leitura que o
     desenho sozinho não dá), e a próxima camada — o encadeamento sempre à
     vista, mesmo quando o painel está encolhido. Nas pontas (abertura e
     direção) a faixa carrega "como ler" e as fontes. */
  function revelaCamada(v) {
    if (!revela) return;
    // a faixa é coadjuvante: até duas linhas, cinza, sem botões. O desenho é o
    // protagonista; a próxima camada já está nas abas do alto.
    var rot, txt;
    if (v.id === "abertura") { rot = "COMO LER"; txt = REL.como_ler || ""; }
    else if (v.id === "direcao") { rot = "LEGENDA"; txt = REL.legenda_fontes || ""; }
    else { rot = "O QUE ISSO REVELA"; txt = cam(v.id, "revela"); }
    revela.innerHTML = "<b class='rv-rot'>" + rot + "</b><span class='rv-txt'></span>";
    var s = revela.querySelector(".rv-txt");
    s.textContent = txt;
    s.title = txt;
  }
  // o elo entre camadas: cada vista termina apontando a próxima
  function elo(idVista, texto) {
    return "<button class='l-elo' data-vista='" + idVista + "'>" + texto + " →</button>";
  }
  function ligaElos(raiz) {
    Array.prototype.forEach.call(raiz.querySelectorAll(".l-elo"), function (b) {
      b.addEventListener("click", function () {
        if (b.dataset.item) {
          var alvo = porId(b.dataset.item);
          if (b.dataset.vista === "jornadas") jornadaAtual = alvoJornada(b.dataset.item) || jornadaAtual;
          if (alvo && b.dataset.vista === "sistema") selecionaItem(alvo);
        }
        abre(b.dataset.vista);
      });
    });
  }

  /* ================= 1 · ECOSSISTEMA =================
     O macro: os atores dentro e fora do sistema, e TODAS as relações de
     dinheiro de uma vez (agregadas por par e enquadramento) — sem depender
     de escolher um item. Posições próprias: dentro à esquerda, fora à direita. */
  var eco = document.getElementById("eco");
  var leituraEco = document.getElementById("leitura-eco");
  var caixasEco = {}, arcosEco = {}, ecoEscolheAtor = null, ecoNota = null;
  (function montaEcossistema() {
    marcadores(el("defs", {}, eco));
    var dentro = [], fora = [];
    Object.keys(ATORES).forEach(function (id) {
      (ATORES[id].lado === "dentro" ? dentro : fora).push(id);
    });
    dentro.sort(function (a, b) { return ATORES[a].y - ATORES[b].y; });
    fora.sort(function (a, b) { return ATORES[a].y - ATORES[b].y; });

    var pos = {};
    txt(eco, 250, 62, "ATORES INTERNOS", "grupo-rotulo", "middle");
    txt(eco, 690, 62, "ATORES EXTERNOS", "grupo-rotulo", "middle");
    [[dentro, 250, "e"], [fora, 690, "d"]].forEach(function (col) {
      col[0].forEach(function (id, i) {
        // cada coluna se espalha pela mesma altura: 4 atores dentro, 3 fora
        var y = 130 + (col[0].length > 1 ? i * 420 / (col[0].length - 1) : 0);
        pos[id] = { x: col[1], y: y, col: col[2] };
        var a = ATORES[id];
        var g = el("g", { "class": "estacao e-" + a.lado + (id === "centro" ? " e-centro" : ""), transform: "translate(" + col[1] + "," + y + ")" }, eco);
        el("rect", { x: -138, y: -33, width: 276, height: 66, rx: 12 }, g);
        txt(g, 0, -6, a.nome, "nome", "middle");
        txt(g, 0, 18, a.papel, "papel", "middle");
        caixasEco[id] = g;
      });
    });

    // agrega os fluxos de todas as tecnologias: 1 arco por (de, para, enquadramento)
    var mapa = {}, ordem = [];
    TECNOLOGIAS.forEach(function (t) {
      (t.fluxos || []).forEach(function (f) {
        var k = f.de + "|" + f.para + "|" + f.enq;
        if (!mapa[k]) { mapa[k] = { de: f.de, para: f.para, enq: f.enq, tipo: f.tipo, itens: [], porques: [], confirmar: 0 }; ordem.push(k); }
        mapa[k].itens.push(t.apelido);
        if (f.oque) mapa[k].porques.push(t.apelido + ": " + limpa(f.oque));
        if (f.tipo === "confirmar") mapa[k].confirmar++;
        else mapa[k].tipo = f.tipo;
      });
    });
    var rels = ordem.map(function (k) { return mapa[k]; })
      .sort(function (a, b) { return b.itens.length - a.itens.length; });
    // a ordem de prioridade da lista: quem origina a relação, começando por
    // quem sustenta o sistema — o cliente
    var PRIORIDADE = ["cliente", "medico", "centro", "operadora", "parceiro", "diagnostico", "empresa"];
    // + as relações estruturais (relacoes.csv): existem fora do portfólio
    if (typeof RELACOES !== "undefined") {
      RELACOES.forEach(function (r) {
        rels.push({ de: r.de, para: r.para, enq: r.enquadramento, tipo: r.tipo,
                    itens: [], confirmar: 0, estrutural: r.oque });
      });
    }
    rels.sort(function (a, b) {
      var pa = PRIORIDADE.indexOf(a.de), pb = PRIORIDADE.indexOf(b.de);
      return pa !== pb ? pa - pb : b.itens.length - a.itens.length;
    });

    var gArcos = el("g", {}, eco);
    var usados = {}, geo = [];
    rels.forEach(function (r, i) {
      var a = pos[r.de], b = pos[r.para];
      var par = [r.de, r.para].sort().join("|");
      var nth = (usados[par] = (usados[par] || 0) + 1) - 1;
      var desvio = nth * 16 * (r.de < r.para ? 1 : -1);
      var c;
      if (a.col === b.col) {                       // mesma coluna: arco por fora
        var lado = a.col === "e" ? -1 : 1;
        var borda = a.x + lado * 138;
        var prof = 64 + Math.abs(b.y - a.y) * 0.16 + nth * 22;
        var cx = borda + lado * prof, my = (a.y + b.y) / 2;
        c = { d: "M " + borda + " " + a.y + " Q " + cx + " " + my + " " + borda + " " + b.y,
              lx: (2 * borda + 2 * cx) / 4, ly: my };
      } else {                                     // entre colunas: S de uma à outra
        var x1 = a.x + (a.col === "e" ? 138 : -138), y1 = a.y + desvio;
        var x2 = b.x + (b.col === "e" ? 138 : -138), y2 = b.y + desvio;
        var c1 = x1 + (a.col === "e" ? 110 : -110), c2 = x2 + (b.col === "e" ? 110 : -110);
        c = { d: "M " + x1 + " " + y1 + " C " + c1 + " " + y1 + ", " + c2 + " " + y2 + ", " + x2 + " " + y2,
              lx: (x1 + 3 * c1 + 3 * c2 + x2) / 8, ly: (y1 + y2) / 2 };
      }
      c.rel = r; c.i = i;
      geo.push(c);
    });
    desempilha(geo, 20);
    geo.forEach(function (c) {
      var r = c.rel;
      // cor = enquadramento; tracejado = ainda a confirmar
      var aConfirmar = (r.itens.length > 0 && r.confirmar === r.itens.length) ||
        (r.estrutural && r.tipo === "confirmar");
      var p = el("path", { d: c.d, "class": "fluxo f-enq-" + r.enq + (aConfirmar ? " a-confirmar" : ""),
                           "marker-end": "url(#m-enq-" + r.enq + ")" }, gArcos);
      p.style.strokeWidth = (1.6 + Math.min(3, r.itens.length * 0.22)) + "px";
      // só o enquadramento na seta — a contagem fica na lista, ao lado
      var t = txt(gArcos, c.lx, c.ly, ENQ_CURTO[r.enq], "rot-fluxo rf-enq-" + r.enq, "middle");
      arcosEco[c.i] = [p, t];
    });

    // o painel: as relações em texto. As setas NÃO aparecem todas de uma vez —
    // o desenho mostra só o que está selecionado (uma relação, ou todas as de
    // um ator, ao clicar na caixa dele).
    escreve(leituraEco,
      "<p class='l-coluna'>QUEM PAGA E QUEM INDICA</p>" +
      "<ul class='l-rels'>" + rels.map(function (r, i) {
        return "<li data-i='" + i + "' tabindex='0'>" +
          "<span class='r-par'><b>" + ATORES[r.de].nome + "</b><span class='seta'>→</span><b>" + ATORES[r.para].nome + "</b></span>" +
          "<span class='enq enq-" + r.enq + "'>" + ENQ_TXT[r.enq] + "</span>" +
          "<span class='r-itens'>" + (r.estrutural ? (r.tipo === "indicacao" ? "abre a porta" : "fora do portfólio")
            : r.itens.length + (r.itens.length > 1 ? " itens" : " item")) + "</span></li>";
      }).join("") + "</ul>" +
      "<p class='l-nota' id='eco-nota'></p>" +
      "<p class='l-proxima'>O Centro é um desses atores. " +
      elo("sistema", "Ver o Centro por dentro") + "</p>");

    var nota = document.getElementById("eco-nota");
    var linhas = leituraEco.querySelectorAll(".l-rels li[data-i]");
    function mostra(indices, texto) {
      Object.keys(arcosEco).forEach(function (k) {
        var on = indices.indexOf(+k) >= 0;
        arcosEco[k][0].classList.toggle("vis", on);
        arcosEco[k][1].classList.toggle("vis", on);
      });
      var tocados = {};
      indices.forEach(function (i) { tocados[rels[i].de] = true; tocados[rels[i].para] = true; });
      Object.keys(caixasEco).forEach(function (k) {
        caixasEco[k].classList.toggle("foco", !!tocados[k]);
        caixasEco[k].classList.toggle("apagada", indices.length > 0 && !tocados[k]);
      });
      Array.prototype.forEach.call(linhas, function (li) {
        li.classList.toggle("on", indices.indexOf(+li.dataset.i) >= 0);
      });
      nota.textContent = texto || "";
    }
    var selecao = null;
    function escolheRelacao(i) {
      selecao = selecao === "r" + i ? null : "r" + i;
      if (!selecao) return mostra([], "");
      // poucos itens: mostra o porquê de cada um (é onde mora a explicação);
      // muitos: só os nomes, senão não cabe
      var r = rels[i];
      var porques = (r.porques || []).filter(Boolean);
      mostra([i], r.estrutural ||
        (porques.length && porques.length <= 3 ? porques.join(" · ")
          : r.itens.length + " itens: " + r.itens.join(" · ")));
    }
    function escolheAtor(id, forca) {
      // `forca`: vindo de um link, seleciona sem alternar (não apaga o que já estava)
      selecao = (!forca && selecao === "a" + id) ? null : "a" + id;
      if (!selecao) return mostra([], "");
      var idx = [];
      rels.forEach(function (r, i) { if (r.de === id || r.para === id) idx.push(i); });
      mostra(idx, "Todas as relações de " + ATORES[id].nome.toLowerCase() + ": " + idx.length +
        " — clique de novo na caixa para limpar.");
    }
    Array.prototype.forEach.call(linhas, function (li) {
      li.addEventListener("click", function () { escolheRelacao(+li.dataset.i); });
      li.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); escolheRelacao(+li.dataset.i); }
      });
    });
    Object.keys(caixasEco).forEach(function (id) {
      caixasEco[id].classList.add("clicavel");
      caixasEco[id].setAttribute("role", "button");
      caixasEco[id].setAttribute("tabindex", "0");
      caixasEco[id].addEventListener("click", function () { escolheAtor(id); });
      caixasEco[id].addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); escolheAtor(id); }
      });
    });
    mostra([], "");           // começa limpo: nenhuma seta acumulada
    ecoEscolheAtor = escolheAtor;
    ecoNota = function (s) { nota.textContent = s; };
    ligaElos(leituraEco);
  })();

  /* ================= 2 · SISTEMA =================
     O Centro por dentro: o funil, cada item no seu movimento, e a cadeia
     `alimenta` (o que puxa o quê). Sem setas de dinheiro — isso é ecossistema. */
  var cena = document.getElementById("cena");
  var leituraSis = document.getElementById("leitura-sis");
  var zonas = {
    entrada: el("path", { d: "M70,70 C70,250 195,305 195,370 L305,370 C305,305 430,250 430,70 Z", "class": "zona z-entrada" }, cena),
    pescoco: el("path", { d: "M195,370 L305,370 L305,460 L195,460 Z", "class": "zona z-pescoco" }, cena),
    saida: el("path", { d: "M195,460 C195,525 70,580 70,685 L430,685 C430,580 305,525 305,460 Z", "class": "zona z-saida" }, cena)
  };
  el("path", { d: "M70,70 C70,250 195,305 195,370 L195,460 C195,525 70,580 70,685", "class": "parede" }, cena);
  el("path", { d: "M430,70 C430,250 305,305 305,370 L305,460 C305,525 430,580 430,685", "class": "parede" }, cena);
  el("path", { d: "M102,70 C102,255 208,315 208,378 L208,452 C208,515 102,575 102,685", "class": "parede fina" }, cena);
  el("path", { d: "M398,70 C398,255 292,315 292,378 L292,452 C292,515 398,575 398,685", "class": "parede fina" }, cena);
  el("ellipse", { cx: 250, cy: 70, rx: 180, ry: 12, "class": "parede fina" }, cena);
  el("ellipse", { cx: 250, cy: 685, rx: 180, ry: 12, "class": "parede fina" }, cena);
  el("line", { x1: 250, y1: 84, x2: 250, y2: 672, "class": "espinha" }, cena);
  txt(cena, 24, 190, "M¹ · MEDIR", "rotulo-estagio re-entrada", "middle").setAttribute("transform", "rotate(-90 24 190)");
  txt(cena, 24, 415, "M² · MAPEAR", "rotulo-estagio re-pescoco", "middle").setAttribute("transform", "rotate(-90 24 415)");
  txt(cena, 24, 612, "M³ · MODULAR", "rotulo-estagio re-saida", "middle").setAttribute("transform", "rotate(-90 24 612)");
  txt(cena, 474, 64, "hoje", "ponta", "end");
  txt(cena, 474, 712, "os próximos anos", "ponta", "end");
  txt(cena, 190, 712, "o que o Centro mede, investiga e modula", "tunel-legenda", "middle");
  var PASS = (typeof PASSAGENS !== "undefined") ? PASSAGENS : {};
  // a volta: do M³ ao M², por fora da passagem, pela DIREITA (a esquerda é das legendas) — é o Always
  // Care que leva a pessoa de volta à releitura do mapa (reavaliações de 6 e 12 meses)
  var defsCena = el("defs", {}, cena);
  var mkC = el("marker", { id: "m-volta", viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto" }, defsCena);
  el("path", { d: "M 0 0 L 10 5 L 0 10 z", "class": "sis-volta-ponta" }, mkC);
  el("path", { d: "M408,652 C454,652 454,610 454,570 L454,470 C454,436 380,420 316,420", "class": "sis-volta", "marker-end": "url(#m-volta)" }, cena);
  if (REL.ciclo) {
    txt(cena, 384, 372, "↺ reavaliação", "sis-volta-txt", "middle");
    txt(cena, 384, 389, "aos 6 e 12 meses", "sis-volta-txt", "middle");
  }

  function slotsDe(est, n) {
    var out = [], i, linha, lado, prog;
    // o pescoço é o M²: o que só acontece por indicação, no eixo da travessia
    if (est === "pescoco") {
      for (i = 0; i < n; i++) out.push([250, 400 + i * 34]);
      return out;
    }
    var y0 = 505, y1 = 645;
    var linhas = Math.ceil(n / 2);
    var passo = linhas > 1 ? (y1 - y0) / (linhas - 1) : 0;
    for (i = 0; i < n; i++) {
      linha = Math.floor(i / 2);
      lado = i % 2 === 0 ? -1 : 1;
      prog = linhas > 1 ? linha / (linhas - 1) : 0;
      // o último, sozinho na linha, fica no eixo da travessia
      if (i === n - 1 && n % 2 === 1) lado = 0;
      out.push([250 + lado * (53 + 57 * prog), y0 + linha * passo]);
    }
    return out;
  }

  var pontos = {}, itemAtual = null;
  var porEstagio = { entrada: [], pescoco: [], saida: [] };
  // o M³ é feito dos EIXOS (eixos.csv): cada um reúne o que investiga
  // (eixo_itens.csv) e o que trata (tecnologias com a coluna `eixo`).
  // O que é de saída sem eixo (Always Care, a trilha contínua) segue ponto.
  var EIXOS_M3 = (typeof EIXOS !== "undefined" ? EIXOS : []).map(function (e) {
    return { eixo: true, id: "eixo-" + e.id, chave: e.id, nome: e.nome, apelido: maiuscula(e.nome),
             descricao: e.descricao, itens: e.itens,
             tecs: TECNOLOGIAS.filter(function (t) { return t.eixo === e.id; }) };
  });
  porEstagio.saida = EIXOS_M3.slice();
  TECNOLOGIAS.forEach(function (t) {
    // o M¹ é feito só dos GRUPOS: os exames moram dentro deles, e as portas
    // (dia de abertura, curadoria) são jornada, não portfólio — vivem na
    // camada JORNADAS. Ponto no funil, aqui, só M² e M³.
    // (26/10) o Always Care não é ponto do M³: ele É a volta — mora na seta
    if (t.estagio !== "entrada" && !t.eixo && t.id !== "alwayscare") porEstagio[t.estagio].push(t);
  });
  (function () {
    var ac = porId("alwayscare");
    if (!ac) return;
    var g = el("g", { "class": "ponto ponto-volta", transform: "translate(454,522)", role: "button", tabindex: 0, "aria-label": ac.nome }, cena);
    el("circle", { r: 17, "class": "alvo" }, g);
    el("circle", { r: 7.5, "class": "v" }, g);
    txt(g, 12, 0, ac.apelido || ac.nome, "p-label", "middle").setAttribute("transform", "rotate(90 12 0)"); // em pé, junto da seta: não briga com os eixos
    var vai = function () { selecionaItem(ac); };
    g.addEventListener("click", vai);
    g.addEventListener("keydown", function (ev) { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); vai(); } });
    pontos[ac.id] = { g: g, x: 454, y: 522 };
  })();
  Object.keys(porEstagio).forEach(function (est) {
    var lista = porEstagio[est], slots = slotsDe(est, lista.length);
    lista.forEach(function (tec, i) {
      var x = slots[i][0], y = slots[i][1];
      var g = el("g", { "class": "ponto", transform: "translate(" + x + "," + y + ")", role: "button", tabindex: 0, "aria-label": tec.nome }, cena);
      el("circle", { r: 17, "class": "alvo" }, g);
      el("circle", { r: 7.5, "class": "v" }, g);
      txt(g, 0, 23, tec.apelido || tec.nome, "p-label", "middle");
      var abre = function () { if (tec.eixo === true) selecionaEixo(tec); else selecionaItem(tec); };
      g.addEventListener("click", abre);
      g.addEventListener("keydown", function (ev) { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); abre(); } });
      pontos[tec.id] = { g: g, x: x, y: y };
    });
  });

  /* ---- os grupos do portfólio, nas calhas da boca ----
     Cada grupo reúne as avaliações dos pacotes (componentes.csv) e os itens
     que têm dinâmica própria (coluna `cluster` de tecnologias.csv). É o que
     tira o viés de ver só os itens com seta. O M¹ mede em duas famílias:
     a capacidade intrínseca (OMS) e os pilares do estilo de vida. */
  var GRUPOS = (function () {
    var mapa = {}, ordem = [];
    CLUSTERS.forEach(function (c) {                 // a ordem e o texto vêm do back
      mapa[c.nome] = { nome: c.nome, familia: c.familia, descricao: c.descricao,
                       aval: [], chaves: {}, pacotes: {}, itens: [] };
      ordem.push(c.nome);
    });
    if (typeof COMPONENTES !== "undefined") {
      Object.keys(COMPONENTES).forEach(function (p) {
        COMPONENTES[p].forEach(function (c) {
          // um exame pode morar em mais de um grupo (cluster "a|b|c")
          c.cluster.split("|").forEach(function (cl) {
            if (!mapa[cl]) return;
            var g = mapa[cl], chave = c.curto || c.item;
            g.pacotes[p] = true;
            if (!g.chaves[chave]) { g.chaves[chave] = true; g.aval.push(c); }
          });
        });
      });
    }
    // (26/10) o mesmo exame em dois pacotes, com nomes diferentes, aparece
    // uma vez só: "Vitamina D" (Performance) dobra dentro de "Vitamina D e B12"
    // (Core/Frontier) — quando um nome começa pelo outro, fica o mais completo
    ordem.forEach(function (n) {
      var g = mapa[n];
      g.aval = g.aval.filter(function (a) {
        var ca = a.curto || a.item;
        return !g.aval.some(function (b) { var cb = b.curto || b.item; return cb !== ca && cb.indexOf(ca + " ") === 0; });
      });
    });
    TECNOLOGIAS.forEach(function (t) {
      if (t.cluster && mapa[t.cluster]) mapa[t.cluster].itens.push(t);
    });
    // itens que não constam de nenhum pacote (ex.: polissonografia, que vem
    // por indicação) contam à parte — senão o grupo os esconderia
    ordem.forEach(function (n) {
      var g = mapa[n];
      g.soltos = g.itens.filter(function (t) {
        return !g.aval.some(function (a) { return t.nome.indexOf(a.curto) >= 0 || t.apelido === a.curto; });
      });
    });
    return ordem.map(function (n) { return mapa[n]; });
  })();

  // os grupos são pontos do funil, idênticos aos de M³: mesmo círculo,
  // mesmo rótulo embaixo, mesma seleção — muda só o que eles representam.
  // Cada família ganha o seu bloco na boca, com o nome em cima.
  var rotulosGrupo = {};
  (function () {
    // meia largura útil da boca numa altura y: lida da parede fina interna
    function meiaLargura(y) {
      var melhor = 0, dist = 1e9;
      for (var t = 0; t <= 1.0001; t += 0.01) {
        var u = 1 - t, a = u * u * u, b = 3 * u * u * t, c = 3 * u * t * t, d = t * t * t;
        var py = a * 70 + b * 255 + c * 315 + d * 378, px = a * 102 + b * 102 + c * 208 + d * 208;
        if (Math.abs(py - y) < dist) { dist = Math.abs(py - y); melhor = 250 - px; }
      }
      return melhor;
    }
    var familias = [], porFamilia = {};
    GRUPOS.forEach(function (g) {
      var f = g.familia || "";
      if (!porFamilia[f]) { porFamilia[f] = []; familias.push(f); }
      porFamilia[f].push(g);
    });
    var y = 92;
    familias.forEach(function (f, k) {
      if (k > 0) y += 2;
      if (f) txt(cena, 250, y, f.toUpperCase(), "familia-rotulo", "middle");
      y += 27;
      var lista = porFamilia[f];
      // número ímpar maior que três: a primeira linha leva três (a boca é larga em cima)
      var porLinha = lista.length % 2 === 1 && lista.length > 3 ? 3 : 2;
      var linhas = [lista.slice(0, porLinha)];
      for (var i = porLinha; i < lista.length; i += 2) linhas.push(lista.slice(i, i + 2));
      // a boca afunila: a linha de rótulos mais longos vai mais acima, onde há largura
      var maior = function (l) { return Math.max.apply(null, l.map(function (g) { return g.nome.length; })); };
      var fixa = porLinha === 3 ? 1 : 0;           // a linha de três fica no topo, larga
      linhas = linhas.slice(0, fixa).concat(linhas.slice(fixa).sort(function (a, b) { return maior(b) - maior(a); }));
      linhas.forEach(function (linha) {
        var q = linha.length;
        var passo = q > 1 ? Math.min(92, 2 * (meiaLargura(y + 23) - 30) / (q - 1)) : 0;
        linha.forEach(function (g, j) { posiciona(g, 250 + (j - (q - 1) / 2) * passo, y); });
        // rótulo em duas linhas pede mais chão antes da linha seguinte
        y += linha.some(function (g) { return g.nome.indexOf(" ") > 0; }) ? 54 : 44;
      });
    });
  })();
  function posiciona(g, x, y) {
    var grupo = el("g", { "class": "ponto g-cluster", transform: "translate(" + x + "," + y + ")",
                          role: "button", tabindex: 0, "aria-label": "grupo " + g.nome }, cena);
    el("circle", { r: 17, "class": "alvo" }, grupo);
    el("circle", { r: 7.5, "class": "v" }, grupo);
    // nome de duas palavras ("atividade física") quebra em duas linhas
    g.nome.split(" ").forEach(function (p, l) {
      txt(grupo, 0, 23 + l * 15, l ? p : maiuscula(p), "p-label", "middle");
    });
    grupo.addEventListener("click", function () { selecionaGrupo(g); });
    grupo.addEventListener("keydown", function (ev) { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); selecionaGrupo(g); } });
    rotulosGrupo[g.nome] = grupo;
  }

  function limpaSelecao() {
    var todos = Object.keys(pontos).map(function (id) { return pontos[id].g; })
      .concat(Object.keys(rotulosGrupo).map(function (n) { return rotulosGrupo[n]; }));
    todos.forEach(function (g) {
      g.classList.remove("ativa");
      var velho = g.querySelector(".halo");
      if (velho) velho.remove();
    });
  }

  /* "Quem paga" — na ficha de um item avulso (porta, tratamento). Nas
     fichas de domínio, dossiê e eixo, quem diz é a cor de cada item (listaEnq).
     Uma linha por relação (de, para, enquadramento). */
  function quemPaga(fluxos, nota) {
    var linhas = [], porPar = {};
    fluxos.forEach(function (f) {
      var k = f.de + "|" + f.para + "|" + f.enq;
      if (!porPar[k]) { porPar[k] = { de: f.de, para: f.para, enq: f.enq, modos: [] }; linhas.push(porPar[k]); }
      if (f.oque) porPar[k].modos.push(limpa(f.oque));
    });
    if (!linhas.length) return "";
    // aqui entra só dinheiro. O ganho indireto (quem se beneficia sem pagar)
    // é pergunta do ECOSSISTEMA, não desta camada — mostrá-lo aqui obrigaria
    // a ficha a sustentar um terceiro conceito
    var dinheiro = linhas.filter(function (f) { return f.enq !== "beneficio"; });
    if (!dinheiro.length) return "";
    dinheiro.sort(function (a, b) { return (a.de === "cliente" ? 0 : 1) - (b.de === "cliente" ? 0 : 1); });
    return "<p class='l-sub'>Quem paga</p><ul class='l-rels compacta'>" + dinheiro.map(function (f) {
      return "<li><span class='r-par'><b>" + ATORES[f.de].nome + "</b><span class='seta'>→</span><b>" + ATORES[f.para].nome + "</b></span>" +
        "<span class='enq enq-" + f.enq + "'>" + ENQ_TXT[f.enq] + "</span>" +
        (f.modos.length > 1 ? "<span class='l-modos'>" + f.modos.join(" · ") + "</span>" : "") + "</li>";
    }).join("") + "</ul>" + (nota ? "<p class='l-legenda'>" + nota + "</p>" : "");
  }

  /* O bloco que se repete nas três escalas do funil: um título com a
     contagem por enquadramento (1 reembolsável · 2 particular…) e a lista,
     cada item com a barra na cor de quem paga. Substitui o "quem paga". */
  function listaEnq(titulo, itens, um, varios) {
    var conta = {}, ordemEnq = [];
    itens.forEach(function (c) {
      if (!conta[c.enq]) { conta[c.enq] = 0; ordemEnq.push(c.enq); }
      conta[c.enq]++;
    });
    var mistura = ordemEnq.map(function (k) {
      return "<span class='c-leg enqp-" + k + "'>" + conta[k] + " " + ENQ_CURTO[k] + "</span>";
    }).join(" ");
    return "<p class='l-sub'>" + titulo + " · " + itens.length + " " + (itens.length === 1 ? um : varios) +
      " <span class='c-legendas'>" + mistura + "</span></p>" +
      "<ul class='l-aval'>" + itens.map(function (c) {
        return "<li class='enqp-" + c.enq + (c.confianca && c.confianca !== "confirmado" ? " c-duvida" : "") + "'>" +
          "<b class='" + (c.canal === "digital" ? "c-digital" : "") + "'>" + c.item + "</b>" +
          "<span>" + maiuscula(c.descricao) + (c.condicao ? " — " + c.condicao : "") + "</span></li>";
      }).join("") + "</ul>";
  }

  function selecionaGrupo(g) {
    limpaSelecao();
    rotulosGrupo[g.nome].classList.add("ativa");
    el("circle", { r: 8, "class": "halo" }, rotulosGrupo[g.nome]);
    Object.keys(zonas).forEach(function (z) { zonas[z].classList.toggle("z-on", z === "entrada"); });
    // o que não consta de pacote (vem por indicação) entra com o enquadramento do seu fluxo
    var itens = g.aval.concat(g.soltos.map(function (t) {
      var f = (t.fluxos || []).filter(function (x) { return x.enq !== "beneficio"; })[0];
      return { item: limpa(t.nome) + " · por indicação", descricao: limpa(t.entrega), enq: f ? f.enq : "aberto" };
    }));
    escreve(leituraSis,
      "<p class='l-coluna'>" + (g.familia ? g.familia.toUpperCase() + " · UM DOMÍNIO" : "UM GRUPO DO PORTFÓLIO") + "</p>" +
      "<p class='l-estagio e-entrada'>" + M_ROTULO.entrada + "</p>" +
      "<h2 class='serif'>" + maiuscula(g.nome) + "</h2>" +
      "<p class='l-entrega'>" + maiuscula(g.descricao) + "</p>" +
      listaEnq("O que se mede aqui", itens, "avaliação", "avaliações") +
      "<p class='l-legenda'>o domínio entra no pacote de abertura, pago no particular — o que tem código " +
      "no rol pode alcançar o reembolso quando há indicação clínica</p>" +
      "<p class='l-proxima'>" + elo("servicos", "Ver os pacotes") + "</p>");
    ligaElos(leituraSis);
  }

  /* Um eixo do M³: o que ele investiga (cada exame na cor do seu
     enquadramento — aqui a mistura reembolsável + particular é a regra).
     Os tratamentos do eixo têm a sua linha na camada JORNADAS. */
  function selecionaEixo(e) {
    itemAtual = null;
    limpaSelecao();
    pontos[e.id].g.classList.add("ativa");
    el("circle", { r: 8, "class": "halo" }, pontos[e.id].g);
    Object.keys(zonas).forEach(function (z) { zonas[z].classList.toggle("z-on", z === "saida"); });
    escreve(leituraSis,
      "<p class='l-coluna'>UM EIXO DE MODULAÇÃO</p>" +
      "<p class='l-estagio e-saida'>" + M_ROTULO.saida + "</p>" +
      "<h2 class='serif'>" + maiuscula(e.nome) + "</h2>" +
      "<p class='l-entrega'>" + e.descricao + "</p>" +
      (e.itens.length ? listaEnq("O que se investiga", e.itens, "exame", "exames") :
        // eixo sem exame próprio (autonômica): diz como ele começa
        "<p class='l-sub'>O que se investiga</p><p class='l-entrega'>Sem exame próprio — o eixo começa pelo " +
        e.tecs.map(function (t) { return limpa(t.nome).split(" (")[0].toLowerCase(); }).join(" e ") + ".</p>") +
      // sem "o que se faz" nem "quem paga": a cor de cada exame já diz quem
      // paga, e os tratamentos têm a sua linha na camada JORNADAS
      "<p class='l-legenda'>chega-se aqui pelo dossiê: o que tem indicação clínica vai ao plano, o resto é particular</p>" +
      "<p class='l-proxima'><button class='l-elo' data-vista='jornadas' data-item='" + e.id + "'>Ver a jornada deste eixo →</button></p>");
    ligaElos(leituraSis);
  }

  function selecionaItem(tec) {
    itemAtual = tec;
    limpaSelecao();
    if (pontos[tec.id]) {                       // porta ou modulação: tem ponto
      pontos[tec.id].g.classList.add("ativa");
      el("circle", { r: 8, "class": "halo" }, pontos[tec.id].g);
    } else if (tec.cluster && rotulosGrupo[tec.cluster]) {
      rotulosGrupo[tec.cluster].classList.add("ativa");   // mora dentro do grupo
    } else if (tec.eixo && pontos["eixo-" + tec.eixo]) {
      pontos["eixo-" + tec.eixo].g.classList.add("ativa"); // mora dentro do eixo
    }
    Object.keys(zonas).forEach(function (z) { zonas[z].classList.toggle("z-on", z === tec.estagio); });

    var html =
      "<p class='l-coluna'>O ITEM NO SISTEMA</p>" +
      "<p class='l-estagio e-" + tec.estagio + "'>" + M_ROTULO[tec.estagio] + "</p>" +
      "<h2 class='serif'>" + limpa(tec.nome) + "</h2>" +
      "<p class='l-entrega'>" + limpa(tec.entrega) + "</p>";
    if (tec.estagio === "pescoco") {
      // M²: o mesmo padrão de legenda das outras escalas — o que se entrega, na cor de quem paga
      html += listaEnq("O que se entrega", (tec.fluxos || []).filter(function (f) {
        return f.enq !== "beneficio";
      }).map(function (f) {
        return { item: tec.apelido, descricao: limpa(f.oque), enq: f.enq };
      }), "item", "itens");
    } else {
      html += quemPaga(tec.fluxos || []);
    }
    // só a entrada entra em pacote; modulação vem por indicação, não por fluxo
    html += "<p class='l-proxima'>" +
      (tec.estagio === "entrada" ? elo("servicos", "Ver os pacotes") + " " : "") +
      "<button class='l-elo' data-vista='jornadas' data-item='" + tec.id + "'>Ver a jornada deste item →</button></p>";
    escreve(leituraSis, html);
    ligaElos(leituraSis);
  }

  /* ================= 3 · SERVIÇOS =================
     Os pacotes lado a lado, com tudo o que entra em cada um (componentes.csv),
     agrupado pelos clusters do portfólio. É o material comercial, vivo. */
  (function montaServicos() {
    var caixa = document.getElementById("cartoes");
    var cartoes = PROTOCOLOS.map(function (nome) {
      var itens = (typeof COMPONENTES !== "undefined" && COMPONENTES[nome]) || null;
      // o que esse fluxo destrava adiante: cadeia `alimenta` a partir do M¹
      var dentro = {};
      TECNOLOGIAS.forEach(function (t) {
        if (t.estagio === "entrada" && t.tags.join(" · ").indexOf(nome) >= 0) dentro[t.id] = true;
      });
      for (var mudou = true; mudou;) {
        mudou = false;
        TECNOLOGIAS.forEach(function (t) {
          if (!dentro[t.id]) return;
          (t.alimenta || []).forEach(function (id) { if (!dentro[id]) { dentro[id] = true; mudou = true; } });
        });
      }
      var adiante = TECNOLOGIAS.filter(function (t) { return dentro[t.id] && t.estagio === "saida"; });

      var corpo;
      if (itens) {
        // um pacote que contém outro inteiro (Frontier ⊃ Core) não repete a
        // lista: diz "tudo do Core" e mostra só o que acrescenta — é o destaque
        var chaves = {};
        itens.forEach(function (c) { chaves[c.curto] = true; });
        var base = null;
        PROTOCOLOS.forEach(function (p) {
          var outros = (typeof COMPONENTES !== "undefined" && COMPONENTES[p]) || null;
          if (p === nome || !outros || outros.length >= itens.length) return;
          if (outros.every(function (c) { return chaves[c.curto]; }) && (!base || outros.length > COMPONENTES[base].length)) base = p;
        });
        var total = itens, herdadas = {};
        if (base) {
          COMPONENTES[base].forEach(function (c) { herdadas[c.curto] = true; });
          itens = itens.filter(function (c) { return !herdadas[c.curto]; });
        }
        var grupos = {}, ordem = [];
        itens.forEach(function (c) {
          if (!grupos[c.cluster]) { grupos[c.cluster] = []; ordem.push(c.cluster); }
          grupos[c.cluster].push(c);
        });
        // na ordem do funil (clusters.csv), não na ordem em que aparecem no pacote
        var posicao = {};
        CLUSTERS.forEach(function (c, i) { posicao[c.nome] = i; });
        ordem.sort(function (a, b) { return posicao[a.split("|")[0]] - posicao[b.split("|")[0]]; });
        // a pergunta comercial: quanto deste pacote o plano pode cobrir?
        var noRol = total.filter(function (c) { return c.enq === "rol"; }).length;
        corpo = "<p class='c-conta'>" + total.length + " avaliações · <b class='c-rol'>" + noRol +
          " podem ir ao rol</b></p>" +
          (base ? "<p class='c-base'>Tudo do " + base + "</p><p class='c-mais'>+ " + itens.length +
            " que só o " + nome + " entrega</p>" : "") +
          ordem.map(function (cl) {
            return "<p class='l-cluster'>" + cl.split("|").join(" · ") + "</p><ul class='c-lista'>" +
              grupos[cl].map(function (c) {
                var dica = c.descricao + (c.condicao ? " — " + c.condicao : "");
                return "<li class='enqp-" + c.enq + (c.confianca !== "confirmado" ? " c-duvida" : "") +
                  "' title='" + dica.replace(/'/g, "’") + "'>" +
                  "<span class='c-item" + (c.canal === "digital" ? " c-digital" : "") + "'>" + c.item + "</span></li>";
              }).join("") + "</ul>";
          }).join("");
      } else {
        corpo = "<p class='c-conta'>sob medida</p>" +
          "<p class='l-itens'>Começa por uma pré-triagem para quem não sabe qual protocolo escolher. " +
          "Para quem já tem exames, a curadoria lê, valida e o Centro completa só o que falta.</p>";
      }
      return "<article class='cartao'>" +
        "<h3 class='serif'>" + nome + "</h3>" + corpo +
        "<p class='c-adiante'><span class='l-sub'>Destrava adiante</span>" +
        (adiante.length ? adiante.map(function (t) { return "<span class='c-mod'>" + t.apelido + "</span>"; }).join("") : "—") +
        "</p></article>";
    }).join("");
    // a legenda do que as cores dizem — vem do próprio enquadramentos.csv
    var legenda = ["rol", "particular", "sem_codigo", "aberto"].filter(function (k) {
      return ENQUADRAMENTOS[k];
    }).map(function (k) {
      return "<span class='c-leg enqp-" + k + "'>" + ENQ_TXT[k] + "</span>";
    }).join("");
    escreve(caixa, "<div class='grade'>" + cartoes + "</div>" +
      "<p class='l-proxima'><span class='c-legendas'>" + legenda + "</span>" +
      "<span class='c-leg c-duvida'>a confirmar</span> · o mouse mostra o exame · fonte: Anexo I do Rol. " +
      elo("jornadas", "Ver o que a pessoa vive") + "</p>");
    ligaElos(caixa);
  })();

  /* ================= 4 · JORNADAS =================
     Blueprint de verdade: as etapas no tempo, em três faixas —
     o que a pessoa vive presencialmente, o que vive à distância, e o
     que roda nos bastidores. Dados: jornadas.csv (palco + canal). */
  var jornadaAtual = null;
  var jorPalco = document.getElementById("jor-palco");
  /* (26/10) A travessia inteira é a MÃE: a regra, igual para todo cliente.
     As filhas são as linhas de cada passo — no M¹ as portas, no M² o dossiê,
     no M³ os eixos. O Always Care não é filha à parte: corre sob todas as
     modulações do M³ e absorve o que é de cada um (parte IA, parte clínica). */
  var VERBO = { entrada: "medir", pescoco: "mapear", saida: "modular" };
  function filhasDe(est) {
    if (est === "saida") return EIXOS_M3.map(jornadaDoEixo).filter(function (t) { return t.jornada.length; });
    return TECNOLOGIAS.filter(function (t) {
      return t.estagio === est && (t.jornada || []).length && !t.cluster && !t.eixo;
    });
  }
  (function montaListaJornadas() {
    var lista = document.getElementById("lista-jor");
    var ac = porId("alwayscare");
    escreve(lista, "<p class='l-coluna'>ESCOLHA UMA JORNADA</p>" +
      "<button class='j-opt j-destaque' data-pessoa='1'>A travessia inteira<small>mãe</small></button>" +
      "<p class='l-legenda j-nota'>a regra, igual para todo cliente</p>" +
      "<div class='j-arvore'>" + ["entrada", "pescoco", "saida"].map(function (est) {
        var itens = filhasDe(est);
        if (!itens.length) return "";
        return "<p class='l-sub'>" + M_CURTO[est] + " · " + VERBO[est].toUpperCase() + "</p>" + itens.map(function (t) {
          return "<button class='j-opt' data-id='" + t.id + "'>" + t.apelido + "<small>" + t.jornada.length + "</small></button>";
        }).join("") + (est === "saida" && ac ? "<button class='j-opt j-ac' data-id='alwayscare'>Always Care" +
          "<small>sob todas</small></button>" : "");
      }).join("") + "</div>");
    Array.prototype.forEach.call(lista.querySelectorAll(".j-opt"), function (b) {
      b.addEventListener("click", function () {
        montaJornada(b.dataset.pessoa ? "pessoa" : alvoJornada(b.dataset.id));
      });
    });
  })();

  /* A jornada de um eixo do M³ é a dos seus itens em sequência — primeiro o
     que investiga, depois o que trata (a ordem de tecnologias.csv) — e o
     dinheiro é a soma das linhas. Cada etapa leva o nome do item de origem. */
  function jornadaDoEixo(e) {
    var varios = e.tecs.length > 1, etapas = [], fluxos = [];
    e.tecs.forEach(function (t) {
      (t.jornada || []).forEach(function (j) {
        var c = {}; Object.keys(j).forEach(function (k) { c[k] = j[k]; });
        if (varios) c.etapa = t.apelido + " · " + j.etapa;
        etapas.push(c);
      });
      fluxos = fluxos.concat(t.fluxos || []);
    });
    return { id: e.id, eixo: true, apelido: e.apelido, nome: "Eixo " + e.nome, entrega: e.descricao,
             estagio: "saida", jornada: etapas, fluxos: fluxos };
  }
  function alvoJornada(id) {
    var t = porId(id);
    if (t) return t;
    var e = EIXOS_M3.filter(function (x) { return x.id === id; })[0];
    return e ? jornadaDoEixo(e) : null;
  }

  /* ---- UM renderizador de blueprint, dois conjuntos de dados ----
     A jornada da pessoa (o ano inteiro) e a de cada item do portfólio usam
     a mesma gramática: linha do tempo + três raias separadas pela linha de
     visibilidade. O que é inferência nossa sai em itálico. */
  var ESPACO_TXT = { fisico: "no Centro", misto: "presencial ou online", digital: "à distância" };
  function desenhaBlueprint(etapas, numerar) {
    function celula(txt, e, extra) {
      return "<div class='bpp-cel" + (e.fonte === "inferencia" ? " bpp-infere" : "") +
        (txt ? "" : " bpp-vazia") + "'>" + (txt || "") + (txt && extra ? extra : "") + "</div>";
    }
    var raias = [
      ["A PESSOA", "o que ela vive", function (e) {
        return celula(e.pessoa, e, "<span class='bpp-espaco esp-" + e.espaco + "'>" + ESPACO_TXT[e.espaco] + "</span>");
      }],
      ["QUEM ATENDE", "a cada contato", function (e) { return celula(e.profissional, e); }],
      ["BASTIDOR", "o que ela não vê", function (e) { return celula(e.bastidor, e); }]
    ];
    // --bpp-n: o css do celular usa o número de etapas para dar uma largura
    // mínima a cada coluna e deixar a faixa deslizar em vez de espremer
    var html = "<div class='bpp' style='--bpp-n:" + etapas.length +
      ";grid-template-columns:132px repeat(" + etapas.length + ", minmax(0,1fr))'>" +
      "<div class='bpp-eixo'>A LINHA DO TEMPO</div>" +
      etapas.map(function (e, i) {
        // a espera ANTES da etapa (Goh: a rota real) — o que ela sente
        return "<div class='bpp-marco'>" + (e.espera ? "<span class='bpp-espera'>" + e.espera + "</span>" : "") +
          "<b>" + (numerar ? (i + 1) + " · " : "") + e.etapa + "</b>" +
          "<small>" + (e.quando || "—") + "</small></div>";
      }).join("");
    raias.forEach(function (r, i) {
      if (i === 2) html += "<div class='bpp-vis'><span>linha de visibilidade</span></div>";
      html += "<div class='bpp-rot'><b>" + r[0] + "</b><small>" + r[1] + "</small></div>" +
        etapas.map(r[2]).join("");
    });
    return html + "</div>";
  }

  /* a linha do dinheiro da jornada: quem paga AQUELA linha, na cor do
     enquadramento — a mesma convenção do ecossistema e dos serviços.
     Vem de `fluxos`, então só existe para a jornada de um item; a
     travessia inteira não tem um pagador só. A relação não se repete:
     o par (de,para,enquadramento) vira uma ficha só, com as modalidades
     juntas, e o cliente vem primeiro. */
  function faixaQuemPaga(tec) {
    var junta = {}, ordem = [];
    (tec.fluxos || []).forEach(function (f) {
      var k = f.de + "|" + f.para + "|" + f.enq;
      if (!junta[k]) { junta[k] = { de: f.de, para: f.para, enq: f.enq, oque: [] }; ordem.push(k); }
      junta[k].oque.push(limpa(f.oque));
    });
    if (!ordem.length) return "";
    ordem.sort(function (a, b) { return (junta[a].de !== "cliente") - (junta[b].de !== "cliente"); });
    return "<div class='bpp-dinheiro'><p class='l-sub'>Quem paga esta linha</p><div class='bpd-pag'>" +
      ordem.map(function (k) {
        var f = junta[k];
        return "<div class='pag enq-" + f.enq + "'><b>" + ATORES[f.de].nome + " → " +
          ATORES[f.para].nome + "</b><span>" + ENQ_TXT[f.enq] + " · " +
          f.oque.join(" · ") + "</span></div>";
      }).join("") + "</div></div>";
  }

  /* O laço que segura o ano (Goh: ache o laço; Meadows: o estoque de
     confiança). Quatro nós numa linha e a seta que volta por baixo — se o
     resultado melhora, o contato vale mais e o laço gira. Dados: laco.csv. */
  function desenhaLaco() {
    var L = (typeof LACO !== "undefined") ? LACO : [];
    if (L.length < 2) return "";
    var x0 = 34, x1 = 406, passo = (x1 - x0) / (L.length - 1), s = "";
    L.forEach(function (n, i) {
      var x = x0 + i * passo;
      s += "<circle cx='" + x + "' cy='24' r='5.5' class='lc-no" + (i === 0 ? " lc-ini" : "") + "'/>" +
        "<text x='" + x + "' y='44' text-anchor='middle' class='lc-rot" + (n.fonte === "inferencia" ? " lc-infere" : "") + "'>" + n.rotulo + "</text>";
      if (i < L.length - 1) s += "<path d='M" + (x + 11) + ",24 L" + (x + passo - 11) + ",24' class='lc-seta' marker-end='url(#m-laco)'/>";
    });
    s += "<path d='M" + x1 + ",50 C" + x1 + ",70 " + x0 + ",70 " + x0 + ",50' class='lc-volta' marker-end='url(#m-laco)'/>" +
      "<text x='" + ((x0 + x1) / 2) + "' y='82' text-anchor='middle' class='lc-nota'>" + (REL.laco_titulo || "") +
      (REL.laco_nota ? " · " + REL.laco_nota : "") + "</text>";
    return "<svg class='laco' id='laco' viewBox='0 12 440 76' role='img' aria-label='" + (REL.laco_titulo || "o laço do ano") + "'>" +
      "<defs><marker id='m-laco' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='6' markerHeight='6' orient='auto'>" +
      "<path d='M0,0 L10,5 L0,10 z' class='lc-ponta'/></marker></defs>" + s + "</svg>";
  }

  function montaJornada(tec) {
    tec = tec || jornadaAtual || "pessoa";
    jornadaAtual = tec;
    var ehPessoa = tec === "pessoa";
    // na lista acende a filha — e, se o item mora num eixo, o eixo dono
    Array.prototype.forEach.call(document.querySelectorAll(".j-opt"), function (b) {
      b.classList.toggle("on", ehPessoa ? !!b.dataset.pessoa :
        (b.dataset.id === tec.id || (typeof tec.eixo === "string" && tec.eixo && b.dataset.id === "eixo-" + tec.eixo)));
    });
    var html, rodape = "<p class='l-legenda'>em itálico, o que ainda é leitura nossa — " +
      "o resto vem da fonte primária</p>";
    if (ehPessoa) {
      // a MÃE, em três camadas que se leem de cima para baixo:
      // 1 OS TRÊS PASSOS — a regra, igual para todo cliente, com as filhas;
      // 2 SEMPRE — o Always Care: absorve o que é de cada um e leva de volta
      //   ao M², às reavaliações de 6 e 12 meses (passagens.csv, m3-m2);
      // 3 O ANO, MÊS A MÊS — a linha do tempo real; cada encontro na cor do
      //   passo a que pertence (coluna `passo`), no seu mês (coluna `mes`)
      var marcos = JORNADA_PESSOA.filter(function (e) { return e.trilha === "presencial"; });
      var ac = porId("alwayscare");
      var oque = { entrada: REL.w_como_1, pescoco: REL.w_como_2, saida: REL.w_como_3 };
      // (26/10) quem assina o quê: métricas, o titular; modulação, pode ser o do Centro
      var nota = { entrada: REL.jor_nota_m1, pescoco: REL.jor_nota_m2, saida: REL.jor_nota_m3 };
      var bloco = function (est) {
        return "<section class='jm-bloco e-" + est + "'>" +
          "<p class='jm-m'><b>" + M_CURTO[est] + "</b>" + VERBO[est] + "</p>" +
          (oque[est] ? "<p class='jm-desc'>" + maiuscula(oque[est]) + "</p>" : "") +
          (nota[est] ? "<p class='jm-nota'>" + nota[est] + "</p>" : "") +
          "<div class='jm-filhas'>" + filhasDe(est).map(function (t) {
            return "<button class='jm-filha' data-id='" + t.id + "'>" + t.apelido + "</button>";
          }).join("") + "</div></section>";
      };
      var seta = function (id) {
        var ps = PASS[id];
        return "<div class='jm-seta'><span>→</span>" + (ps ? "<small" +
          (ps.fonte === "inferencia" ? " class='bpv-infere'" : "") + ">" + ps.quem + "</small>" : "") + "</div>";
      };
      // a régua do ano: o primeiro mês ganha mais espaço (três encontros
      // cabem nele); do 1º ao 12º, linear
      var pos = function (m) { return m <= 1 ? m * 14 : 14 + (m - 1) / 11 * 86; };
      var pontuais = marcos.filter(function (e) { return e.mes.indexOf("-") < 0; });
      var faixas = marcos.filter(function (e) { return e.mes.indexOf("-") >= 0; });
      // a linha do ano é colorida: cada trecho leva a cor do passo do encontro
      // que o abre (do mês 0 à devolutiva, M¹; da devolutiva à nutrição, M²…)
      var ordenados = pontuais.slice().sort(function (x, y) { return +x.mes - +y.mes; });
      var trechos = ordenados.slice(0, -1).map(function (e, i) {
        var x0 = pos(+e.mes), x1 = pos(+ordenados[i + 1].mes);
        return "<i class='jt-trecho e-" + e.passo + "' style='left:" + x0 + "%;width:" + (x1 - x0) + "%'></i>";
      }).join("");
      var regua = "<div class='jt'><div class='jt-eixo'></div>" + trechos +
        // as marcas de cada mês, discretas
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (m) {
          return "<i class='jt-tick' style='left:" + pos(m) + "%'></i>";
        }).join("") +
        pontuais.map(function (e, i) {
          var x = pos(+e.mes), lado = i % 2 ? "jt-baixo" : "jt-cima";
          var ancora = x < 4 ? " jt-ini" : (x > 96 ? " jt-fim" : "");
          return "<span class='jt-ponto e-" + e.passo + "' style='left:" + x + "%'></span>" +
            "<div class='jt-rot " + lado + ancora + " e-" + e.passo + (e.fonte === "inferencia" ? " bpp-infere" : "") +
            "' style='left:" + x + "%'><small>" + (e.quando === "—" ? "logo após" : e.quando) +
            (x > 96 ? " · ↺ o ano recomeça" : "") + "</small>" + e.etapa + "</div>";
        }).join("") +
        // o que se repete (os treinos) vive NA linha: um pulso a cada meio mês,
        // na cor do passo, e o nome no vão livre embaixo — sem faixa à parte
        faixas.map(function (e) {
          var m = e.mes.split("-"), a0 = +m[0], a1 = +m[1], pulsos = "";
          for (var k = a0; k <= a1 + 1e-9; k += 0.5) {
            var perto = pontuais.some(function (q) { return Math.abs(+q.mes - k) < 0.3; });
            if (!perto) pulsos += "<i class='jt-pulso e-" + e.passo + "' style='left:" + pos(k) + "%'></i>";
          }
          return pulsos + "<div class='jt-rot jt-baixo jt-rep e-" + e.passo + "' style='left:" + pos((a0 + a1) * 0.4) + "%'>" +
            "<small>" + e.quando + "</small>" + e.etapa + " <span>· o ano todo</span></div>";
        }).join("") +
        "</div>";
      html = "<div class='j-topo j-topo-pessoa'><h2 class='serif'>" + (REL.jor_mae || "A travessia inteira") + "</h2>" +
        "<p class='l-entrega'>" + (REL.jor_mae_sub || "") + "</p></div>" +
        "<p class='jm-cap'>Os três passos</p>" +
        "<div class='jm'>" + bloco("entrada") + seta("m1-m2") + bloco("pescoco") + seta("m2-m3") + bloco("saida") + "</div>" +
        // o Always Care vem antes do ano: é a camada que sustenta todos os encontros
        (ac ? "<p class='jm-cap'>Sempre</p><button class='jm-ac' data-id='alwayscare'>" +
          "<span class='jm-ac-txt'><b>Always Care · o ano inteiro, sob todas as modulações</b>" + (REL.jor_padrao || "") + "</span>" +
          (PASS["m3-m2"] ? "<span class='jm-ac-volta'><b>↺ leva de volta ao M²</b>" +
            "<span" + (PASS["m3-m2"].fonte === "inferencia" ? " class='bpv-infere'" : "") + ">" + PASS["m3-m2"].quem + "</span></span>" : "") +
          desenhaLaco() + "</button>" : "") +
        "<p class='jm-cap'>O ano, mês a mês <span>cada encontro na cor do seu passo</span></p>" + regua +
        "<p class='l-proxima'>Isto é o que ela vive. " +
        elo("direcao", "O que isso revela — e o que falta decidir") + "</p>";
    } else {
      // a FILHA: a trilha diz de onde ela vem e leva de volta à mãe
      html = "<p class='jm-trilha'><button class='jm-mae'>A travessia inteira</button> › " +
        M_CURTO[tec.estagio] + " " + VERBO[tec.estagio] + " › <b>" + (tec.apelido || limpa(tec.nome)) + "</b></p>" +
        // título e entrega na mesma linha: o cabeçalho não come a altura do blueprint
        // (o passo já está na trilha acima)
        "<div class='j-topo j-topo-pessoa j-topo-filha'>" +
        "<h2 class='serif'>" + limpa(tec.nome) + "</h2>" +
        "<p class='l-entrega'>" + limpa(tec.entrega) + "</p></div>" +
        desenhaBlueprint(tec.jornada || [], true) + faixaQuemPaga(tec) + rodape +
        "<p class='l-proxima'>Esta é uma linha dentro da travessia. " +
        elo("ecossistema", "E quem paga por isso?") + "</p>";
    }
    escreve(jorPalco, html);
    ligaElos(jorPalco);
    Array.prototype.forEach.call(jorPalco.querySelectorAll(".jm-mae"), function (b) {
      b.addEventListener("click", function () { montaJornada("pessoa"); });
    });
    Array.prototype.forEach.call(jorPalco.querySelectorAll(".jm-filha, .jm-ac"), function (b) {
      b.addEventListener("click", function () { montaJornada(alvoJornada(b.dataset.id)); });
    });
  }

  /* O portal do site, dentro do painel da abertura: warp de estrelas nas
     cores dos 3Ms e anéis do túnel (sem as palavras voando — os três passos
     já estão ao lado do selo). Mesma receita de site/js/script.js, sem a
     travessia de saída: aqui ela fica girando. */
  function animaPortal(caixa) {
    var cv = caixa.querySelector("canvas"), ctx = cv.getContext("2d");
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var W = 0, H = 0, CX = 0, CY = 0, speed = 0.011;
    function fit() {
      W = cv.width = caixa.clientWidth; H = cv.height = caixa.clientHeight; CX = W / 2; CY = H / 2;
    }
    var CORES = ["245,243,236", "245,243,236", "143,194,255", "127,214,189", "235,184,118"];
    function mkEstrela() { return { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1, z: Math.random() * 0.9 + 0.1, c: CORES[Math.floor(Math.random() * CORES.length)] }; }
    var estrelas = [], i;
    for (i = 0; i < 200; i++) estrelas.push(mkEstrela());
    var aneis = [], ringTimer = 0;
    function quadro() {
      requestAnimationFrame(quadro);
      if (!caixa.clientWidth) return;               // aba fechada: não desenha
      if (caixa.clientWidth !== W || caixa.clientHeight !== H) fit();
      ctx.fillStyle = "rgba(7,26,48,0.34)";
      ctx.fillRect(0, 0, W, H);
      var SC = Math.min(W, H) * 0.5;
      ringTimer++;
      if (ringTimer % 44 === 0) aneis.push({ z: 0.98 });
      aneis = aneis.filter(function (r) { return r.z > 0.02; });
      aneis.forEach(function (r) {
        r.z -= speed * r.z * 2.2;
        var rad = (1 / r.z - 1) * SC * 0.22 + 10;
        var alpha = Math.min(0.18, (1 - r.z) * 0.22) * r.z;
        ctx.beginPath(); ctx.arc(CX, CY, rad, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(23,116,222," + alpha.toFixed(3) + ")"; ctx.lineWidth = 1.2; ctx.stroke();
      });
      estrelas.forEach(function (st) {
        var px = CX + st.x / st.z * SC, py = CY + st.y / st.z * SC;
        st.z -= speed * st.z;
        var nx = CX + st.x / st.z * SC, ny = CY + st.y / st.z * SC;
        if (st.z <= 0.015 || nx < -60 || nx > W + 60 || ny < -60 || ny > H + 60) {
          var n = mkEstrela(); st.x = n.x; st.y = n.y; st.c = n.c; st.z = 1; return;
        }
        var al = Math.min(1, (1 - st.z) * 1.4);
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(nx, ny);
        ctx.strokeStyle = "rgba(" + st.c + "," + (al * 0.85).toFixed(3) + ")";
        ctx.lineWidth = Math.max(0.5, (1 - st.z) * 2.1); ctx.stroke();
      });
    }
    quadro();
  }

  /* ================= 0 · ABERTURA =================
     A história antes do sistema. À esquerda, o portal do site: a travessia
     animada, com M¹ M² M³ clicáveis (abrem o SISTEMA no passo). À direita,
     a capa em sete perguntas (5W2H). Textos: relatorio.csv. */
  var portal = document.getElementById("abre-portal");
  var leituraAbre = document.getElementById("leitura-abre");
  (function montaAbertura() {
    if (!leituraAbre) return;
    // os três movimentos: cada um abre o SISTEMA no seu passo (as palavras do
    // portal e os botões do "como" da capa usam os mesmos)
    var MOV = [
      { m: "M¹", verbo: "medir", abre: function () { selecionaGrupo(GRUPOS[0]); } },
      { m: "M²", verbo: "mapear", abre: function () { var d = porId("dossie"); if (d) selecionaItem(d); } },
      { m: "M³", verbo: "modular", abre: function () { if (EIXOS_M3[0]) selecionaEixo(EIXOS_M3[0]); } }
    ];
    if (portal) {
      Array.prototype.forEach.call(portal.querySelectorAll(".pi-m"), function (b) {
        b.addEventListener("click", function () { MOV[+b.dataset.passo].abre(); abre("sistema"); });
      });
      animaPortal(portal);
    }

    // a capa: sete perguntas (5W2H) para quem chega sem contexto — o que é,
    // por quê, para quem, onde, quando, como e quanto. Textos: relatorio.csv
    // (chaves w_*); os seis perfis vêm de personas.csv; o "como" abre o sistema.
    var PES = (typeof PERSONAS !== "undefined") ? PERSONAS : [];
    var ordem = ["ecossistema", "sistema", "servicos", "jornadas", "direcao"];
    function linha(rot, corpo) { return "<div class='w5'><dt>" + rot + "</dt><dd>" + corpo + "</dd></div>"; }
    var passos = [["M¹", "medir", "entrada", REL.w_como_1], ["M²", "mapear", "pescoco", REL.w_como_2], ["M³", "modular", "saida", REL.w_como_3]];
    escreve(leituraAbre,
      "<p class='l-coluna'>RELATÓRIO · " + (REL.versao || "") + " · " + (REL.data || "") + "</p>" +
      "<h2 class='serif'>" + (REL.manchete || "") + "</h2>" +
      (REL.w_intro ? "<p class='l-entrega'>" + REL.w_intro + "</p>" : "") +
      "<dl class='w5h'>" +
      linha("O quê", REL.w_oque || "") +
      linha("Por quê", (REL.w_porque || "") +
        (REL.voz ? "<q class='w5-voz'>" + REL.voz.split(". ").pop() + "</q>" : "")) +
      linha("Para quem", (REL.w_quem || "") +
        (PES.length ? "<span class='w5-pes'>" + PES.map(function (p) {
          return "<i" + (p.foco === "sim" ? " class='foco'" : "") + " title='" + p.motivacao.replace(/'/g, "’") + "'>" + p.nome + "</i>";
        }).join("") + "</span>" : "")) +
      linha("Onde", REL.w_onde || "") +
      linha("Quando", REL.w_quando || "") +
      linha("Como", (REL.w_como || "") + "<span class='w5-passos'>" + passos.map(function (p, i) {
          return "<button class='w5-passo re-" + p[2] + "' data-passo='" + i + "'><b>" + p[0] + " " + p[1] + "</b>" + (p[3] || "") + "</button>";
        }).join("") + "</span>") +
      linha("Quanto", REL.w_quanto || "") +
      "</dl>" +
      "<p class='l-legenda w5-camadas'>Depois, as cinco camadas: " + ordem.map(function (id, i) {
        var v = VISTAS.filter(function (x) { return x.id === id; })[0];
        return "<button class='l-elo' data-vista='" + id + "'>" + (i + 1) + " " + (v ? v.rot.toLowerCase() : id) + "</button>";
      }).join(" · ") + "</p>" +
      "<p class='l-proxima'>Comece por quem paga. " + elo("ecossistema", "Entrar no ecossistema") + "</p>");
    // os três passos do "como" abrem o sistema no movimento, como as palavras do portal
    Array.prototype.forEach.call(leituraAbre.querySelectorAll(".w5-passo"), function (b) {
      b.addEventListener("click", function () { MOV[+b.getAttribute("data-passo")].abre(); abre("sistema"); });
    });
    ligaElos(leituraAbre);
  })();

  /* ================= 5 · DIREÇÃO =================
     (26/10, devolutiva) A direção se lê pela PROPOSTA DE VALOR, para os
     executivos: seis componentes em cadeia, do cliente à receita (o mesmo
     encadeamento do quadro "Potencial do produto" e dos blocos do BMC), cada
     um com o que temos e o que preciso. Achados, definições em aberto e quem
     não ouvimos moram dentro do componente — abrem no toque. Dados:
     proposta.csv · achados.csv · pendencias.csv · nao_ouvidos.csv ·
     condicoes.csv · proximos.csv · relatorio.csv. */
  var direcao = document.getElementById("direcao");
  (function montaDirecao() {
    if (!direcao) return;
    var ACH = (typeof ACHADOS !== "undefined") ? ACHADOS : [];
    var PEN = (typeof PENDENCIAS !== "undefined") ? PENDENCIAS : [];
    var NAO = (typeof NAO_OUVIDOS !== "undefined") ? NAO_OUVIDOS : [];
    var PV = (typeof PROPOSTA !== "undefined") ? PROPOSTA : [];
    function rotDe(id) { var v = VISTAS.filter(function (x) { return x.id === id; })[0]; return v ? v.rot : id; }
    function aspas(t) { return (t || "").replace(/'/g, "’"); }
    function doComp(lista, id) { return lista.filter(function (x) { return x.componente === id; }); }
    // o BMC de Osterwalder nas posições de sempre: cada bloco é um botão, e o
    // card à direita abre o detalhe — o desenho inteiro à vista, um bloco por
    // vez no painel (o mesmo gesto do site do Health Data Brasil). Os seis
    // elos da cadeia do "Potencial do produto" levam o número; parcerias,
    // relacionamento e canais completam o quadro. Linhas · colunas numa grade de 10.
    var GRADE = { parcerias: "1/1/3/3", atividades: "1/3/2/5", recursos: "2/3/3/5", proposta: "1/5/3/7",
                  relacionamento: "1/7/2/9", canais: "2/7/3/9", segmentos: "1/9/3/11", custos: "3/1/4/6", receita: "3/6/4/11" };
    var CADEIA = ["segmentos", "proposta", "atividades", "recursos", "custos", "receita"];
    function blocoBmc(c) {
      var n = CADEIA.indexOf(c.id) + 1;
      return "<button class='bmc-b' data-pv='" + c.id + "' style='grid-area:" + (GRADE[c.id] || "auto") + ";--pv:" + c.cor + "'>" +
        // (26/10) o quadro é só a imagem e os títulos: o conteúdo mora no card à direita
        "<span class='bmc-tit'>" + (n ? "<i>" + n + "</i>" : "") +
        // palavra longa quebra com hífen dentro da caixa (ex.: Relaciona-mento)
        c.bloco.replace("Relacionamento", "Relaciona­mento") + "</span></button>";
    }
    // (26/10) um card padrão para os nove blocos: a mesma estrutura sempre —
    // cabeçalho; temos · precisamos da instituição · precisamos definir; e duas
    // colunas fixas, o que já sabemos e o que falta (vazias dizem que estão
    // vazias). O texto longo fica no title, para todo card ter o mesmo fôlego.
    function card(c) {
      var ach = doComp(ACH, c.id), pen = doComp(PEN, c.id), nao = c.id === "segmentos" ? NAO : [];
      var n = CADEIA.indexOf(c.id) + 1;
      var vazio = "<li class='pc-vazio'>nada registrado ainda</li>";
      function rot(t, qt) { return "<p class='pc-rot'>" + t + (qt !== undefined ? "<span>" + qt + "</span>" : "") + "</p>"; }
      var sabe = ach.map(function (a) {
        return "<li title='" + aspas(a.achado + (a.para_ela ? " — para ela: " + a.para_ela : "")) + "'>" +
          "<b>" + a.curto + "</b>" +
          (a.camada ? "<button class='l-elo pc-ver' data-vista='" + a.camada + "' data-link='" + (a.link || "") + "'>ver em " +
            rotDe(a.camada).toLowerCase() + " →</button>" : "") + "</li>";
      });
      var falta = pen.map(function (d) {
        return "<li title='" + aspas(d.decisao) + "'><b>" + d.curto + "</b>" +
          "<small><span class='st st-" + d.status + "'>" + d.status + "</span>" + d.dono + " · " + d.prazo + "</small></li>";
      }).concat(nao.map(function (x) {
        return "<li title='" + aspas(x.por_que + " — como ouvir: " + x.como_ouvir) + "'><b>Ouvir: " +
          x.grupo.charAt(0).toLowerCase() + x.grupo.slice(1) + "</b></li>";
      }));
      // no máximo três linhas por lista: o resto vira "+N", com os nomes no title —
      // todo card cabe na mesma altura, sem a aba encolher a letra
      function corta(l) {
        if (l.length <= 3) return l.join("");
        var resto = l.slice(2).map(function (h) { return h.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(); });
        return l.slice(0, 2).join("") + "<li class='pc-mais' title='" + aspas(resto.join(" · ")) + "'>+ " + resto.length +
          (resto.length === 1 ? " item" : " itens") + " (passe o mouse)</li>";
      }
      return "<header class='pc-cab'><p class='pc-eyebrow'>" + (n ? "elo " + n + " da cadeia · " : "") + c.componente + "</p>" +
        "<h3 class='pc-tit serif'>" + c.bloco + "</h3></header>" +
        "<div class='pc-pede'>" + rot("O que precisamos da instituição") +
        "<p class='serif'>" + maiuscula(c.pedido || "") + "</p></div>" +
        "<div class='pc-dupla'>" +
        "<div>" + rot("O que já temos") + "<p class='pc-txt'>" + maiuscula(c.temos) + "</p></div>" +
        "<div>" + rot("O que nós precisamos definir") + "<p class='pc-txt'>" + maiuscula(c.preciso) + "</p></div></div>" +
        "<div class='pc-listas'>" +
        "<section>" + rot("O que já sabemos", ach.length) + "<ul class='pc-ul'>" + (corta(sabe) || vazio) + "</ul></section>" +
        "<section>" + rot("O que falta definir", falta.length) + "<ul class='pc-ul'>" + (corta(falta) || vazio) + "</ul></section>" +
        "</div>";
    }
    escreve(direcao,
      // (26/10) nada acima das duas colunas: a primeira passada de olhos pega
      // o quadro e o card. A conclusão abre a coluna da esquerda, curta.
      "<div class='bmc-dir'><div class='bmc-col'>" +
      "<div class='dc-conc'><p class='l-coluna'>O QUE O RELATÓRIO CONCLUI</p>" +
      "<p class='serif dc-frase'>" + (REL.conclusao_curta || REL.conclusao || "") + "</p>" +
      "</div>" +
      "<p class='l-coluna pv-tit'>" + (REL.proposta_titulo || "O MODELO DE NEGÓCIO") + "</p>" +
      "<div class='bmc'>" + PV.map(blocoBmc).join("") + "</div>" +
      "</div>" +
      // os nove cards empilhados na MESMA célula: a área tem a altura do maior,
      // e a escala da aba não muda de bloco para bloco
      "<div class='pv-cards'>" + PV.map(function (c) {
        return "<div class='pv-card' data-pv='" + c.id + "' style='--pv:" + c.cor + "'>" + card(c) + "</div>";
      }).join("") + "</div></div>" +
      "");
    function mostra(id) {
      Array.prototype.forEach.call(direcao.querySelectorAll(".bmc-b, .pv-card"), function (x) {
        x.classList.toggle("on", x.dataset.pv === id);
      });
    }
    // "ver em …": aplica o estado do link (item, grupo, eixo, ator) e abre a camada
    Array.prototype.forEach.call(direcao.querySelectorAll(".pv-card .l-elo[data-link]"), function (b) {
      b.addEventListener("click", function (ev) {
        ev.stopImmediatePropagation();
        aplicaEstado(b.dataset.link || ("?vista=" + b.dataset.vista), b.dataset.vista, true);
      });
    });
    Array.prototype.forEach.call(direcao.querySelectorAll(".bmc-b"), function (b) {
      b.addEventListener("click", function () { mostra(b.dataset.pv); });
    });
    // abre pela proposta de valor, o centro do quadro
    mostra("proposta");
    direcao.addEventListener("toggle", function () { encaixa(direcao); }, true);
    ligaElos(direcao);
  })();

  /* ================= estado inicial e deep links =================
     Um estado da peça é uma query: ?vista= · &item= · &grupo= · &eixo= · &ator=.
     Vale para o endereço (deep link) e para os "ver em …" da direção. */
  function aplicaEstado(q, vistaPadrao, deLink) {
    var pedido = (q.match(/[?&]item=([a-z0-9-]+)/i) || [])[1];
    var alvo = porId(pedido) || porId("abertura") || TECNOLOGIAS[0];
    jornadaAtual = (pedido && alvoJornada(pedido)) || "pessoa";
    var grupoPedido = (q.match(/[?&]grupo=([^&]+)/i) || [])[1];
    var g = null;
    if (grupoPedido) {
      grupoPedido = decodeURIComponent(grupoPedido).toLowerCase();
      g = GRUPOS.filter(function (x) { return x.nome.indexOf(grupoPedido) === 0; })[0];
    }
    var eixoPedido = (q.match(/[?&]eixo=([a-z]+)/i) || [])[1];
    var ex = eixoPedido && pontos["eixo-" + eixoPedido.toLowerCase()] &&
      EIXOS_M3.filter(function (x) { return x.chave === eixoPedido.toLowerCase(); })[0];
    // sem pedido explícito, o SISTEMA abre pelo primeiro grupo do M¹
    if (ex) selecionaEixo(ex);
    else if (g) selecionaGrupo(g);
    else if (pedido && pontos[alvo.id]) selecionaItem(alvo);
    else if (!deLink) selecionaGrupo(GRUPOS[0]);
    var atorPedido = (q.match(/[?&]ator=([a-z]+)/i) || [])[1];
    if (atorPedido === "paciente") atorPedido = "cliente"; // links de antes de 26/10
    if (atorPedido && ATORES[atorPedido] && ecoEscolheAtor) ecoEscolheAtor(atorPedido, true);
    else if (!deLink && ecoEscolheAtor) {
      // a primeira imagem do ecossistema já mostra relações, não só caixas:
      // começa por quem sustenta o sistema — a pessoa
      ecoEscolheAtor("cliente", true);
      if (ecoNota) ecoNota("Começamos por quem sustenta o sistema: a pessoa, e tudo o que ela paga ou recebe. " +
        "Clique numa relação da lista, ou em outro ator, para trocar o foco.");
    }
    var vistaPedida = ((q.match(/[?&]vista=([a-z]+)/i) || [])[1] || "").toLowerCase();
    abre(VISTAS.filter(function (v) { return v.id === vistaPedida; })[0] ? vistaPedida : vistaPadrao);
  }
  // sem pedido, a peça abre pela ABERTURA — a história antes do sistema
  aplicaEstado(location.search, "abertura", false);

})();
