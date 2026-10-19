/* Por dentro do motor — as quatro camadas (19/10/2026).
   A peça é um encadeamento, não uma tela só. Cada camada responde UMA
   pergunta e aponta para a seguinte, no mesmo vocabulário da prancha
   sistêmica: ECOSSISTEMA ⊃ SISTEMA ⊃ SERVIÇOS ⊃ JORNADAS.
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
    for (var z = 1; z > 0.62 && w.getBoundingClientRect().height > alvo;) {
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
  var VISTAS = [
    { id: "ecossistema", rot: "ECOSSISTEMA", perg: "quem paga, quem autoriza e quem se beneficia?" },
    { id: "sistema", rot: "SISTEMA", perg: "o que o Centro mede e modula — e o que puxa o quê?" },
    { id: "servicos", rot: "SERVIÇOS", perg: "o que entra em cada pacote?" },
    { id: "jornadas", rot: "JORNADAS", perg: "o que a pessoa vive — no Centro e à distância?" }
  ];
  var vistaAtual = null, botoesVista = {};
  var pergunta = document.getElementById("pergunta");
  (function () {
    var barra = document.getElementById("camadas");
    VISTAS.forEach(function (v) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "f-camada";
      b.textContent = v.rot;
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
    pergunta.innerHTML = "<b>" + v.rot + "</b> · " + v.perg;
    if (v.id === "jornadas") montaJornada(jornadaAtual);
    // painel oculto tem altura zero: o encaixe só vale quando a camada abre
    reencaixaTudo();
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
          if (alvo && b.dataset.vista === "jornadas") jornadaAtual = alvo;
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
  var caixasEco = {}, arcosEco = {}, ecoEscolheAtor = null;
  (function montaEcossistema() {
    marcadores(el("defs", {}, eco));
    var dentro = [], fora = [];
    Object.keys(ATORES).forEach(function (id) {
      (ATORES[id].lado === "dentro" ? dentro : fora).push(id);
    });
    dentro.sort(function (a, b) { return ATORES[a].y - ATORES[b].y; });
    fora.sort(function (a, b) { return ATORES[a].y - ATORES[b].y; });

    var pos = {};
    txt(eco, 250, 62, "NO SISTEMA DO CENTRO", "grupo-rotulo", "middle");
    txt(eco, 690, 62, "MUNDO EXTERNO", "grupo-rotulo", "middle");
    [[dentro, 250, "e"], [fora, 690, "d"]].forEach(function (col) {
      col[0].forEach(function (id, i) {
        var y = 130 + i * 180;
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
    // quem sustenta o sistema — o paciente
    var PRIORIDADE = ["paciente", "centro", "operadora", "parceiro", "diagnostico", "farmacia"];
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
      var aConfirmar = r.itens.length > 0 && r.confirmar === r.itens.length;
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
      "<p class='l-coluna'>AS RELAÇÕES DE DINHEIRO</p>" +
      "<ul class='l-rels'>" + rels.map(function (r, i) {
        return "<li data-i='" + i + "' tabindex='0'>" +
          "<span class='r-par'><b>" + ATORES[r.de].nome + "</b><span class='seta'>→</span><b>" + ATORES[r.para].nome + "</b></span>" +
          "<span class='enq enq-" + r.enq + "'>" + ENQ_TXT[r.enq] + "</span>" +
          "<span class='r-itens'>" + (r.estrutural ? "fora do portfólio"
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
    function escolheAtor(id) {
      selecao = selecao === "a" + id ? null : "a" + id;
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
      out.push([250 + lado * (53 + 57 * prog), y0 + linha * passo]);
    }
    return out;
  }

  var pontos = {}, itemAtual = null;
  var porEstagio = { entrada: [], pescoco: [], saida: [] };
  TECNOLOGIAS.forEach(function (t) {
    // o M¹ é feito só dos GRUPOS: os exames moram dentro deles, e as portas
    // (dia de abertura, curadoria) são jornada, não portfólio — vivem na
    // camada JORNADAS. Ponto no funil, aqui, só M² e M³.
    if (t.estagio !== "entrada") porEstagio[t.estagio].push(t);
  });
  Object.keys(porEstagio).forEach(function (est) {
    var lista = porEstagio[est], slots = slotsDe(est, lista.length);
    lista.forEach(function (tec, i) {
      var x = slots[i][0], y = slots[i][1];
      var g = el("g", { "class": "ponto", transform: "translate(" + x + "," + y + ")", role: "button", tabindex: 0, "aria-label": tec.nome }, cena);
      el("circle", { r: 17, "class": "alvo" }, g);
      el("circle", { r: 7.5, "class": "v" }, g);
      txt(g, 0, 23, tec.apelido || tec.nome, "p-label", "middle");
      g.addEventListener("click", function () { selecionaItem(tec); });
      g.addEventListener("keydown", function (ev) { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); selecionaItem(tec); } });
      pontos[tec.id] = { g: g, x: x, y: y };
    });
  });

  /* ---- os grupos do portfólio, nas calhas da boca ----
     Cada grupo reúne as avaliações dos pacotes (componentes.csv) e os itens
     que têm dinâmica própria (coluna `cluster` de tecnologias.csv). É o que
     tira o viés de ver só os itens com seta: o M¹ mede sete dimensões. */
  var GRUPOS = (function () {
    var mapa = {}, ordem = [];
    CLUSTERS.forEach(function (c) {                 // a ordem e o texto vêm do back
      mapa[c.nome] = { nome: c.nome, descricao: c.descricao, aval: [], chaves: {}, pacotes: {}, itens: [] };
      ordem.push(c.nome);
    });
    if (typeof COMPONENTES !== "undefined") {
      Object.keys(COMPONENTES).forEach(function (p) {
        COMPONENTES[p].forEach(function (c) {
          if (!mapa[c.cluster]) return;
          var g = mapa[c.cluster], chave = c.curto || c.item;
          g.pacotes[p] = true;
          if (!g.chaves[chave]) { g.chaves[chave] = true; g.aval.push(c); }
        });
      });
    }
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
  // mesmo rótulo embaixo, mesma seleção — muda só o que eles representam
  var rotulosGrupo = {};
  (function () {
    var n = GRUPOS.length, linhas = Math.ceil(n / 2);
    var y0 = 140, y1 = 320, passo = linhas > 1 ? (y1 - y0) / (linhas - 1) : 0;
    GRUPOS.forEach(function (g, i) {
      var linha = Math.floor(i / 2);
      var sozinho = i === n - 1 && n % 2 === 1;
      var prog = linhas > 1 ? linha / (linhas - 1) : 0;
      var dx = 88 - 42 * prog;                    // acompanha o aperto da boca
      var x = sozinho ? 250 : 250 + (i % 2 === 0 ? -dx : dx);
      var y = y0 + linha * passo;
      var grupo = el("g", { "class": "ponto g-cluster", transform: "translate(" + x + "," + y + ")",
                            role: "button", tabindex: 0, "aria-label": "grupo " + g.nome }, cena);
      el("circle", { r: 17, "class": "alvo" }, grupo);
      el("circle", { r: 7.5, "class": "v" }, grupo);
      txt(grupo, 0, 23, maiuscula(g.nome.split(" ")[0]), "p-label", "middle");
      grupo.addEventListener("click", function () { selecionaGrupo(g); });
      grupo.addEventListener("keydown", function (ev) { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); selecionaGrupo(g); } });
      rotulosGrupo[g.nome] = grupo;
    });
  })();

  function limpaSelecao() {
    var todos = Object.keys(pontos).map(function (id) { return pontos[id].g; })
      .concat(Object.keys(rotulosGrupo).map(function (n) { return rotulosGrupo[n]; }));
    todos.forEach(function (g) {
      g.classList.remove("ativa");
      var velho = g.querySelector(".halo");
      if (velho) velho.remove();
    });
  }

  /* "Quem paga" — igual nas três escalas: grupo de M¹, exame de M² e
     modulação de M³. Uma linha por relação (de, para, enquadramento). */
  // os fluxos de um grupo: os dos seus itens com dinâmica própria; se não
  // houver, vale o do pacote (o grupo é comprado dentro do dia de abertura)
  function fluxosDoGrupo(g) {
    var fs = [];
    g.itens.forEach(function (t) { fs = fs.concat(t.fluxos || []); });
    if (!fs.length) {
      var abertura = porId("abertura");
      fs = (abertura && abertura.fluxos) || [];
    }
    return fs;
  }

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
    dinheiro.sort(function (a, b) { return (a.de === "paciente" ? 0 : 1) - (b.de === "paciente" ? 0 : 1); });
    return "<p class='l-sub'>Quem paga</p><ul class='l-rels compacta'>" + dinheiro.map(function (f) {
      return "<li><span class='r-par'><b>" + ATORES[f.de].nome + "</b><span class='seta'>→</span><b>" + ATORES[f.para].nome + "</b></span>" +
        "<span class='enq enq-" + f.enq + "'>" + ENQ_TXT[f.enq] + "</span>" +
        (f.modos.length > 1 ? "<span class='l-modos'>" + f.modos.join(" · ") + "</span>" : "") + "</li>";
    }).join("") + "</ul>" + (nota ? "<p class='l-legenda'>" + nota + "</p>" : "");
  }

  function selecionaGrupo(g) {
    limpaSelecao();
    rotulosGrupo[g.nome].classList.add("ativa");
    el("circle", { r: 8, "class": "halo" }, rotulosGrupo[g.nome]);
    Object.keys(zonas).forEach(function (z) { zonas[z].classList.toggle("z-on", z === "entrada"); });
    escreve(leituraSis,
      "<p class='l-coluna'>UM GRUPO DO PORTFÓLIO</p>" +
      "<p class='l-estagio e-entrada'>" + M_ROTULO.entrada + "</p>" +
      "<h2 class='serif'>" + maiuscula(g.nome) + "</h2>" +
      "<p class='l-entrega'>" + maiuscula(g.descricao) + "</p>" +
      "<p class='l-sub'>O que se mede aqui · " + (g.aval.length + g.soltos.length) + " avaliações</p>" +
      "<ul class='l-aval'>" + g.aval.map(function (c) {
        return "<li><b class='" + (c.canal === "digital" ? "c-digital" : "") + "'>" + c.item + "</b>" +
          "<span>" + maiuscula(c.descricao) + "</span></li>";
      }).concat(g.soltos.map(function (t) {
        return "<li><b>" + limpa(t.nome) + " <small>· por indicação</small></b>" +
          "<span>" + limpa(t.entrega) + "</span></li>";
      })).join("") + "</ul>" +
      // o dinheiro do grupo: o que o pacote cobre e o que pode ir ao rol
      quemPaga(fluxosDoGrupo(g), "o grupo entra no pacote de abertura — o que tem indicação " +
        "clínica pode alcançar o reembolso") +
      "<p class='l-proxima'>" + elo("servicos", "Ver os pacotes") + "</p>");
    Array.prototype.forEach.call(leituraSis.querySelectorAll(".l-chip"), function (b) {
      b.addEventListener("click", function () { selecionaItem(porId(b.dataset.id)); });
    });
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
    }
    Object.keys(zonas).forEach(function (z) { zonas[z].classList.toggle("z-on", z === tec.estagio); });

    var html =
      "<p class='l-coluna'>O ITEM NO SISTEMA</p>" +
      "<p class='l-estagio e-" + tec.estagio + "'>" + M_ROTULO[tec.estagio] + "</p>" +
      "<h2 class='serif'>" + limpa(tec.nome) + "</h2>" +
      "<p class='l-entrega'>" + limpa(tec.entrega) + "</p>";
    html += quemPaga(tec.fluxos || []);
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
        var grupos = {}, ordem = [];
        itens.forEach(function (c) {
          if (!grupos[c.cluster]) { grupos[c.cluster] = []; ordem.push(c.cluster); }
          grupos[c.cluster].push(c);
        });
        // a pergunta comercial: quanto deste pacote o plano pode cobrir?
        var noRol = itens.filter(function (c) { return c.enq === "rol"; }).length;
        corpo = "<p class='c-conta'>" + itens.length + " avaliações · <b class='c-rol'>" + noRol +
          " podem ir ao rol</b></p>" +
          ordem.map(function (cl) {
            return "<p class='l-cluster'>" + cl + "</p><ul class='c-lista'>" +
              grupos[cl].map(function (c) {
                var dica = c.descricao + (c.condicao ? " — " + c.condicao : "");
                return "<li class='enqp-" + c.enq + (c.confianca !== "confirmado" ? " c-duvida" : "") +
                  "' title='" + dica.replace(/'/g, "’") + "'>" +
                  "<span class='c-item" + (c.canal === "digital" ? " c-digital" : "") + "'>" + c.item + "</span></li>";
              }).join("") + "</ul>";
          }).join("");
      } else {
        corpo = "<p class='c-conta'>sob medida</p>" +
          "<p class='l-itens'>Composto a partir dos exames que a pessoa já tem: a curadoria lê, " +
          "valida e o Centro completa só o que falta.</p>";
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
  (function montaListaJornadas() {
    var lista = document.getElementById("lista-jor");
    var grupos = [["entrada", "M¹ · MEDIR"], ["pescoco", "M² · MAPEAR"], ["saida", "M³ · MODULAR"]];
    escreve(lista, "<p class='l-coluna'>ESCOLHA UMA JORNADA</p>" +
      "<button class='j-opt j-destaque' data-pessoa='1'>A travessia inteira" +
      "<small>" + (typeof JORNADA_PESSOA !== "undefined" ? JORNADA_PESSOA.length : 0) + "</small></button>" +
      "<p class='l-legenda j-nota'>o ano completo, nas duas trilhas</p>" +
      "<p class='l-sub'>Uma linha de cada vez</p>" + grupos.map(function (g) {
      // no M¹ a lista traz só as PORTAS: os exames que moram dentro de um grupo
      // não são jornada à parte — a jornada deles é a do dia de abertura
      var itens = TECNOLOGIAS.filter(function (t) {
        return t.estagio === g[0] && (t.jornada || []).length && !t.cluster;
      });
      if (!itens.length) return "";
      return "<p class='l-sub'>" + g[1] + "</p>" + itens.map(function (t) {
        return "<button class='j-opt' data-id='" + t.id + "'>" + t.apelido +
          "<small>" + t.jornada.length + "</small></button>";
      }).join("");
    }).join(""));
    Array.prototype.forEach.call(lista.querySelectorAll(".j-opt"), function (b) {
      b.addEventListener("click", function () {
        montaJornada(b.dataset.pessoa ? "pessoa" : porId(b.dataset.id));
      });
    });
  })();

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
        return "<div class='bpp-marco'><b>" + (numerar ? (i + 1) + " · " : "") + e.etapa + "</b>" +
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
     juntas, e o paciente vem primeiro. */
  function faixaQuemPaga(tec) {
    var junta = {}, ordem = [];
    (tec.fluxos || []).forEach(function (f) {
      var k = f.de + "|" + f.para + "|" + f.enq;
      if (!junta[k]) { junta[k] = { de: f.de, para: f.para, enq: f.enq, oque: [] }; ordem.push(k); }
      junta[k].oque.push(limpa(f.oque));
    });
    if (!ordem.length) return "";
    ordem.sort(function (a, b) { return (junta[a].de !== "paciente") - (junta[b].de !== "paciente"); });
    return "<div class='bpp-dinheiro'><p class='l-sub'>Quem paga esta linha</p><div class='bpd-pag'>" +
      ordem.map(function (k) {
        var f = junta[k];
        return "<div class='pag enq-" + f.enq + "'><b>" + ATORES[f.de].nome + " → " +
          ATORES[f.para].nome + "</b><span>" + ENQ_TXT[f.enq] + " · " +
          f.oque.join(" · ") + "</span></div>";
      }).join("") + "</div></div>";
  }

  function montaJornada(tec) {
    tec = tec || jornadaAtual || "pessoa";
    jornadaAtual = tec;
    var ehPessoa = tec === "pessoa";
    Array.prototype.forEach.call(document.querySelectorAll(".j-opt"), function (b) {
      b.classList.toggle("on", ehPessoa ? !!b.dataset.pessoa : b.dataset.id === tec.id);
    });
    var html, rodape = "<p class='l-legenda'>em itálico, o que ainda é leitura nossa — " +
      "o resto vem da fonte primária</p>";
    if (ehPessoa) {
      var etapas = JORNADA_PESSOA.filter(function (e) { return e.trilha === "presencial"; });
      var digital = JORNADA_PESSOA.filter(function (e) { return e.trilha === "digital"; });
      html = "<div class='j-topo j-topo-pessoa'><h2 class='serif'>Um ano no Centro, nas duas trilhas</h2>" +
        "<p class='l-entrega'>A presencial marca o ritmo; a digital roda por trás e alimenta cada reavaliação.</p></div>" +
        desenhaBlueprint(etapas, true) +
        "<div class='bpp-digital'><p class='l-sub'>Always Care · roda em paralelo, o ano inteiro</p>" +
        "<div class='bpd'>" + digital.map(function (e) {
          return "<div class='bpd-cel" + (e.fonte === "inferencia" ? " bpp-infere" : "") + "'>" +
            "<b>" + e.etapa + "</b><span>" + e.pessoa + "</span>" +
            "<small>" + e.profissional + " · " + e.quando + "</small></div>";
        }).join("") + "</div></div>" + rodape;
    } else {
      html = "<div class='j-topo j-topo-pessoa'>" +
        "<p class='l-estagio e-" + tec.estagio + "'>" + M_ROTULO[tec.estagio] + "</p>" +
        "<h2 class='serif'>" + limpa(tec.nome) + "</h2>" +
        "<p class='l-entrega'>" + limpa(tec.entrega) + "</p></div>" +
        desenhaBlueprint(tec.jornada || [], true) + faixaQuemPaga(tec) + rodape +
        "<p class='l-proxima'>Esta é uma linha dentro do ano. " +
        "<button class='l-elo' data-vista='jornadas' data-pessoa='1'>Ver a travessia inteira →</button> " +
        elo("ecossistema", "E quem paga por isso?") + "</p>";
    }
    escreve(jorPalco, html);
    ligaElos(jorPalco);
    Array.prototype.forEach.call(jorPalco.querySelectorAll("[data-pessoa]"), function (b) {
      b.addEventListener("click", function () { montaJornada("pessoa"); });
    });
  }

  /* ================= estado inicial e deep links ================= */
  var q = location.search;
  var pedido = (q.match(/[?&]item=([a-z0-9]+)/i) || [])[1];
  var alvo = porId(pedido) || porId("abertura") || TECNOLOGIAS[0];
  jornadaAtual = pedido && porId(pedido) ? porId(pedido) : "pessoa";
  var grupoPedido = (q.match(/[?&]grupo=([^&]+)/i) || [])[1];
  var g = null;
  if (grupoPedido) {
    grupoPedido = decodeURIComponent(grupoPedido).toLowerCase();
    g = GRUPOS.filter(function (x) { return x.nome.indexOf(grupoPedido) === 0; })[0];
  }
  // sem pedido explícito, o SISTEMA abre pelo primeiro grupo do M¹
  if (g) selecionaGrupo(g);
  else if (pedido && pontos[alvo.id]) selecionaItem(alvo);
  else selecionaGrupo(GRUPOS[0]);
  var atorPedido = (q.match(/[?&]ator=([a-z]+)/i) || [])[1];
  if (atorPedido && ATORES[atorPedido] && ecoEscolheAtor) ecoEscolheAtor(atorPedido);
  var vistaPedida = (q.match(/[?&]vista=([a-z]+)/i) || [])[1];
  abre(VISTAS.filter(function (v) { return v.id === (vistaPedida || "").toLowerCase(); })[0] ? vistaPedida.toLowerCase() : "ecossistema");

})();
