/* Por dentro do motor — ciclo do dinheiro v3 (16/10/2026).
   Uma cena só: a passagem do site (o túnel É o Centro de Longevidade),
   os atores como estações ao redor e as tecnologias morando no estágio
   em que vivem — clica-se no próprio desenho; as setas entram uma a uma.
   Dados: js/data.js, GERADO de 05_sintese/dados/*.csv (não editar à mão).
   Sem cifras no desenho (15/10): os valores vivem na gaveta de premissas. */

(function () {
  "use strict";

  var NS = "http://www.w3.org/2000/svg";
  var cena = document.getElementById("cena");
  var leitura = document.getElementById("leitura");
  var premissasCorpo = document.getElementById("premissas-corpo");
  var NUM = ["①", "②", "③", "④", "⑤"];
  var atual = null;

  function el(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    (parent || cena).appendChild(e);
    return e;
  }
  function txt(x, y, s, cls, anchor, parent) {
    var t = el("text", { x: x, y: y, "class": cls || "", "text-anchor": anchor || "start" }, parent);
    t.textContent = s;
    return t;
  }

  /* ================= a cena estática ================= */
  // geometria do túnel (viewBox 0 0 900 1300): boca em cima, garganta no meio, boca embaixo
  var ZONAS = {
    entrada: "M150,70 C150,310 380,440 380,590 L520,590 C520,440 750,310 750,70 Z",
    pescoco: "M380,590 L520,590 L520,750 L380,750 Z",
    saida: "M380,750 C380,900 150,1030 150,1230 L750,1230 C750,1030 520,900 520,750 Z"
  };
  el("path", { d: ZONAS.entrada, "class": "zona z-entrada" });
  el("path", { d: ZONAS.pescoco, "class": "zona z-pescoco" });
  el("path", { d: ZONAS.saida, "class": "zona z-saida" });
  el("path", { d: "M150,70 C150,310 380,440 380,590 L380,750 C380,900 150,1030 150,1230", "class": "parede" });
  el("path", { d: "M750,70 C750,310 520,440 520,590 L520,750 C520,900 750,1030 750,1230", "class": "parede" });
  el("path", { d: "M205,70 C205,320 405,450 405,600 L405,740 C405,890 205,1020 205,1230", "class": "parede fina" });
  el("path", { d: "M695,70 C695,320 495,450 495,600 L495,740 C495,890 695,1020 695,1230", "class": "parede fina" });
  el("ellipse", { cx: 450, cy: 70, rx: 300, ry: 18, "class": "parede fina" });
  el("ellipse", { cx: 450, cy: 1230, rx: 300, ry: 18, "class": "parede fina" });
  el("line", { x1: 450, y1: 92, x2: 450, y2: 1208, "class": "espinha" });

  // rótulos de estágio (verticais, na margem esquerda) e as pontas do tempo
  txt(28, 330, "ENTRADA · MEDE", "rotulo-estagio re-entrada", "middle").setAttribute("transform", "rotate(-90 28 330)");
  txt(28, 670, "PESCOÇO · CANALIZA", "rotulo-estagio re-pescoco", "middle").setAttribute("transform", "rotate(-90 28 670)");
  txt(28, 990, "SAÍDA · MODULA", "rotulo-estagio re-saida", "middle").setAttribute("transform", "rotate(-90 28 990)");
  txt(872, 80, "hoje", "ponta", "end");
  txt(872, 1236, "os próximos anos", "ponta", "end");
  txt(450, 130, "dentro do túnel: o Centro de Longevidade", "tunel-legenda", "middle");

  /* ---- atores como estações (o "centro" é o próprio túnel) ---- */
  var estacoes = {};
  Object.keys(ATORES).forEach(function (id) {
    if (id === "centro") return;
    var a = ATORES[id];
    var g = el("g", { "class": "estacao", transform: "translate(" + a.x + "," + a.y + ")" });
    el("rect", { x: -97, y: -26, width: 194, height: 52, rx: 10 }, g);
    txt(0, -4, a.nome, "nome", "middle", g);
    txt(0, 14, a.papel, "papel", "middle", g);
    estacoes[id] = g;
  });

  // âncora do ator "centro": a espinha do túnel, na altura do estágio da tecnologia
  var ANC_CENTRO = { entrada: { x: 450, y: 340 }, pescoco: { x: 450, y: 638 }, saida: { x: 450, y: 975 } };
  function ancora(id) {
    if (id === "centro") return ANC_CENTRO[(atual && atual.estagio) || "pescoco"];
    return { x: ATORES[id].x, y: ATORES[id].y };
  }

  /* ---- as tecnologias moram no estágio em que vivem ---- */
  function slotsDe(est, n) {
    var out = [], i, linha, lado, prog;
    if (est === "pescoco") {
      for (i = 0; i < n; i++) out.push([450, 700 + i * 46]);
      return out;
    }
    var y0 = est === "entrada" ? 175 : 845;
    var y1 = est === "entrada" ? 500 : 1105;
    var linhas = Math.ceil(n / 2);
    var passo = linhas > 1 ? (y1 - y0) / (linhas - 1) : 0;
    for (i = 0; i < n; i++) {
      linha = Math.floor(i / 2);
      lado = i % 2 === 0 ? -1 : 1;
      prog = linhas > 1 ? linha / (linhas - 1) : 0;
      // o funil aperta na entrada e reabre na saída — os pontos acompanham
      var dx = est === "entrada" ? 150 - 90 * prog : 60 + 90 * prog;
      out.push([450 + lado * dx, y0 + linha * passo]);
    }
    return out;
  }

  var gFluxos = el("g", {});
  var gAnc = el("g", {});
  var pontos = {};
  var porEstagio = { entrada: [], pescoco: [], saida: [] };
  TECNOLOGIAS.forEach(function (t) { porEstagio[t.estagio].push(t); });
  Object.keys(porEstagio).forEach(function (est) {
    var lista = porEstagio[est];
    var slots = slotsDe(est, lista.length);
    lista.forEach(function (tec, i) {
      var x = slots[i][0], y = slots[i][1];
      var g = el("g", { "class": "ponto", transform: "translate(" + x + "," + y + ")", role: "button", tabindex: 0, "aria-label": tec.nome });
      el("circle", { r: 18, "class": "alvo" }, g);
      el("circle", { r: 6.5, "class": "v" }, g);
      txt(0, 24, tec.apelido || tec.nome, "p-label", "middle", g);
      g.addEventListener("click", function () { selecionar(tec); });
      g.addEventListener("keydown", function (ev) { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); selecionar(tec); } });
      pontos[tec.id] = { g: g, x: x, y: y };
    });
  });

  /* ---- curva entre dois pontos (desvio alternado para não sobrepor) ---- */
  function caminho(a, b, idx) {
    var mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
    var dx = b.x - a.x, dy = b.y - a.y;
    var len = Math.sqrt(dx * dx + dy * dy) || 1;
    var lado = (idx % 2 === 0 ? 1 : -1) * (1 + Math.floor(idx / 2));
    var ox = (-dy / len) * 54 * lado, oy = (dx / len) * 54 * lado;
    return {
      d: "M " + a.x + " " + a.y + " Q " + (mx + ox) + " " + (my + oy) + " " + b.x + " " + b.y,
      lx: mx + ox * 0.78, ly: my + oy * 0.78
    };
  }

  var defs = el("defs", {});
  [["m-pagamento", "#9c5518"], ["m-confirmar", "#c9842e"], ["m-beneficio", "#0f7a64"]].forEach(function (m) {
    var mk = el("marker", { id: m[0], viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto-start-reverse" }, defs);
    el("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: m[1] }, mk);
  });

  /* ================= interação ================= */
  function selecionar(tec) {
    atual = tec;
    // ponto ativo
    Object.keys(pontos).forEach(function (id) {
      pontos[id].g.classList.toggle("ativa", id === tec.id);
      var velho = pontos[id].g.querySelector(".halo");
      if (velho) velho.remove();
    });
    el("circle", { r: 8, "class": "halo" }, pontos[tec.id].g);

    // fluxos, uma seta de cada vez, numeradas
    gFluxos.innerHTML = "";
    gAnc.innerHTML = "";
    var envolvidos = {};
    tec.fluxos.forEach(function (f, i) {
      envolvidos[f.de] = true; envolvidos[f.para] = true;
      var a = ancora(f.de), b = ancora(f.para);
      var c = caminho(a, b, i);
      var atraso = (0.15 + i * 0.5) + "s";
      var p = el("path", { d: c.d, "class": "fluxo fx f-" + f.tipo, "marker-end": "url(#m-" + f.tipo + ")" }, gFluxos);
      p.style.animationDelay = atraso;
      var t = txt(c.lx, c.ly, NUM[i] + (f.f && f.f !== "—" ? " " + f.f : ""), "rot-fluxo fx rf-" + f.tipo, "middle", gFluxos);
      t.style.animationDelay = atraso;
    });
    // a âncora do Centro no túnel (quando algum fluxo toca o centro)
    if (envolvidos.centro) {
      var ac = ANC_CENTRO[tec.estagio];
      el("circle", { cx: ac.x, cy: ac.y, r: 7, "class": "anc-c" }, gAnc);
      txt(ac.x, ac.y - 14, "CENTRO", "anc-rotulo", "middle", gAnc);
    }
    // estações: acende as envolvidas, apaga as demais
    Object.keys(estacoes).forEach(function (id) {
      estacoes[id].classList.toggle("ativa", !!envolvidos[id]);
      estacoes[id].classList.toggle("apagada", !envolvidos[id]);
    });

    // leitura editorial
    var TIPO_TXT = { pagamento: "pagamento", confirmar: "a confirmar ⚠️", beneficio: "benefício sem pagamento" };
    var fluxosHtml = tec.fluxos.map(function (f, i) {
      var de = f.de === "centro" ? "CENTRO" : ATORES[f.de].nome;
      var para = f.para === "centro" ? "CENTRO" : ATORES[f.para].nome;
      return "<li><span class='num'>" + NUM[i] + "</span><b>" + de + " → " + para + "</b>" +
        "<span class='tipo t-" + f.tipo + "'>" + TIPO_TXT[f.tipo] + (f.f && f.f !== "—" ? " · " + f.f : "") + "</span>" +
        "</li>";
    }).join("");
    leitura.innerHTML =
      "<p class='l-estagio e-" + tec.estagio + "'>" + tec.grupo + "</p>" +
      "<h2 class='serif'>" + tec.nome + "</h2>" +
      "<p class='l-tags'>" + tec.tags.join(" · ") + "</p>" +
      "<ol class='l-fluxos'>" + fluxosHtml + "</ol>";

    // premissas do estágio acendem
    if (premissasCorpo) {
      Array.prototype.forEach.call(premissasCorpo.querySelectorAll(".premissa"), function (p) {
        p.classList.toggle("ativa", p.dataset.estagio === tec.estagio || p.dataset.estagio === "geral");
      });
    }
  }

  // estado inicial: a tecnologia que a cliente citou como exemplo que "faz sentido"
  selecionar(TECNOLOGIAS[0]);

  /* ================= o mesmo fundo do site: a malha de arame ================= */
  var fundo = document.getElementById("passagem-fundo");
  if (fundo) {
    var gapF = function (t) {
      t = Math.max(0, Math.min(1, t));
      var d = (t - 0.5) / 0.18;
      return 47 - 23 * Math.exp(-d * d); // meia-largura, em % da largura da página
    };
    var malha = document.createElementNS(NS, "g");
    fundo.appendChild(malha);
    var desenhaMalha = function () {
      var w = document.documentElement.clientWidth || window.innerWidth;
      fundo.style.height = "0px"; // mede o conteudo sem o proprio fundo (evita o ratchet)
      var h = Math.max(document.documentElement.scrollHeight, window.innerHeight);
      fundo.setAttribute("viewBox", "0 0 " + w + " " + h);
      fundo.style.height = h + "px";
      malha.innerHTML = "";
      var cx = w / 2;
      var raio = function (t) { return gapF(t) / 100 * w; };
      var mk = function (tag, cls) {
        var e = document.createElementNS(NS, tag);
        e.setAttribute("class", cls);
        malha.appendChild(e);
        return e;
      };
      var S0 = 56, kk, tt, esq = "", dir = "";
      for (kk = 0; kk <= S0; kk++) {
        tt = kk / S0;
        esq += (kk ? " L" : "M") + (cx - raio(tt)).toFixed(1) + "," + (tt * h).toFixed(1);
        dir += " L" + (cx + raio(1 - tt)).toFixed(1) + "," + ((1 - tt) * h).toFixed(1);
      }
      mk("path", "pf-interior").setAttribute("d", esq + " L" + (cx + raio(1)).toFixed(1) + "," + h + dir + " Z");
      var N = 26, i, t;
      for (i = 0; i <= N; i++) {
        t = i / N;
        var rr = raio(t);
        var a = mk("ellipse", "pf-anel");
        a.setAttribute("cx", cx); a.setAttribute("cy", (t * h).toFixed(1));
        a.setAttribute("rx", rr.toFixed(1)); a.setAttribute("ry", (rr * 0.16).toFixed(1));
      }
      var M = 15, S = 56, j, k;
      for (j = 0; j < M; j++) {
        var sj = Math.sin((-90 + 180 * j / (M - 1)) * Math.PI / 180);
        var d = "";
        for (k = 0; k <= S; k++) {
          t = k / S;
          d += (k ? " L" : "M") + (cx + sj * raio(t)).toFixed(1) + "," + (t * h).toFixed(1);
        }
        mk("path", (j === 0 || j === M - 1) ? "pf-borda" : "pf-merid").setAttribute("d", d);
      }
    };
    desenhaMalha();
    window.addEventListener("resize", desenhaMalha, { passive: true });
    window.addEventListener("load", desenhaMalha);
    if (window.ResizeObserver) new ResizeObserver(desenhaMalha).observe(document.body);
  }
})();
