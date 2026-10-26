/* =====================================================================
   ARQUIVO GERADO — NÃO EDITAR À MÃO.
   Fonte editável: 05_sintese/dados/*.csv  →  python build_dados.py
   (ver 05_sintese/dados/LEIA-ME_comercial.md)
   Só o que as quatro camadas desenham — o material interno do
   vault não entra aqui (ver dados.json e os CSVs da pasta).
   ===================================================================== */

var ATORES = {
  "cliente": {
    "nome": "CLIENTE",
    "papel": "pagador principal",
    "lado": "dentro",
    "x": 720,
    "y": 160
  },
  "medico": {
    "nome": "MÉDICO TITULAR",
    "papel": "protagonista · assina as métricas",
    "lado": "dentro",
    "x": 720,
    "y": 200
  },
  "centro": {
    "nome": "CENTRO DE LONGEVIDADE",
    "papel": "provedor · entrada e saída",
    "lado": "dentro",
    "x": 720,
    "y": 246
  },
  "diagnostico": {
    "nome": "EINSTEIN DIAGNÓSTICO",
    "papel": "exames por indicação",
    "lado": "dentro",
    "x": 720,
    "y": 332
  },
  "operadora": {
    "nome": "OPERADORA",
    "papel": "paga só com indicação",
    "lado": "fora",
    "x": 720,
    "y": 476
  },
  "empresa": {
    "nome": "EMPRESA",
    "papel": "contrata para os colaboradores",
    "lado": "fora",
    "x": 720,
    "y": 562
  },
  "parceiro": {
    "nome": "PARCEIRO",
    "papel": "IA · wearable · tech",
    "lado": "fora",
    "x": 720,
    "y": 648
  }
};

var PROTOCOLOS = [
  "Individualizado",
  "Performance 20+",
  "Core 40+",
  "Frontier 40+"
];

var ENQUADRAMENTOS = {
  "particular": {
    "rotulo": "particular",
    "curto": "particular",
    "cor": "#9c5518",
    "fundo": "#fdf0dc"
  },
  "rol": {
    "rotulo": "reembolsável · rol",
    "curto": "reembolsável",
    "cor": "#0f7a64",
    "fundo": "#def2ec"
  },
  "contrato": {
    "rotulo": "contrato",
    "curto": "contrato",
    "cor": "#1774DE",
    "fundo": "#dfecfb"
  },
  "beneficio": {
    "rotulo": "ganho indireto",
    "curto": "ganho indireto",
    "cor": "#5a6b7a",
    "fundo": "#eceff3"
  },
  "sem_codigo": {
    "rotulo": "não faturável",
    "curto": "não faturável",
    "cor": "#8a8f98",
    "fundo": "#f1f2f4"
  },
  "aberto": {
    "rotulo": "a definir",
    "curto": "a definir",
    "cor": "#7c8697",
    "fundo": "#f0f2f5"
  },
  "indicacao": {
    "rotulo": "indicação clínica",
    "curto": "indica",
    "cor": "#6b4fbb",
    "fundo": "#efeafa"
  }
};

var RELACOES = [
  {
    "de": "cliente",
    "para": "operadora",
    "tipo": "pagamento",
    "enquadramento": "contrato",
    "oque": "mensalidade do plano de saúde — a relação que já existe antes do Centro"
  },
  {
    "de": "parceiro",
    "para": "cliente",
    "tipo": "beneficio",
    "enquadramento": "beneficio",
    "oque": "o wearable e o app ficam com a pessoa — ela usa sem pagar ao parceiro"
  },
  {
    "de": "empresa",
    "para": "operadora",
    "tipo": "pagamento",
    "enquadramento": "contrato",
    "oque": "plano coletivo empresarial — a empresa paga o plano dos colaboradores"
  },
  {
    "de": "empresa",
    "para": "centro",
    "tipo": "confirmar",
    "enquadramento": "contrato",
    "oque": "o Centro como benefício corporativo — modelo de contratação a definir"
  },
  {
    "de": "medico",
    "para": "cliente",
    "tipo": "indicacao",
    "enquadramento": "indicacao",
    "oque": "porta de entrada — indica o pacote certo para cada perfil"
  },
  {
    "de": "medico",
    "para": "operadora",
    "tipo": "indicacao",
    "enquadramento": "indicacao",
    "oque": "porta de saída — a indicação clínica documentada destrava o reembolso no M³"
  },
  {
    "de": "medico",
    "para": "diagnostico",
    "tipo": "indicacao",
    "enquadramento": "indicacao",
    "oque": "porta de saída — pede os exames dos eixos com indicação"
  },
  {
    "de": "empresa",
    "para": "cliente",
    "tipo": "beneficio",
    "enquadramento": "beneficio",
    "oque": "o colaborador usa o Centro como benefício — sem pagar do bolso"
  }
];

var CLUSTERS = [
  {
    "nome": "mobilidade",
    "familia": "capacidade intrínseca",
    "descricao": "Força, marcha, equilíbrio e composição corporal — o que sustenta a independência hoje e daqui a dez anos."
  },
  {
    "nome": "cognição",
    "familia": "capacidade intrínseca",
    "descricao": "Memória, atenção e raciocínio — testes cognitivos e o rastreio pelo olhar (Viewmind), que pegam mudanças sutis cedo."
  },
  {
    "nome": "emocional",
    "familia": "capacidade intrínseca",
    "descricao": "Humor e saúde mental — o rastreio que lembra que bem-estar também é longevidade."
  },
  {
    "nome": "sensorial",
    "familia": "capacidade intrínseca",
    "descricao": "Audição e visão, investigadas por perguntas direcionadas — o que isola quando passa despercebido."
  },
  {
    "nome": "vitalidade",
    "familia": "capacidade intrínseca",
    "descricao": "A energia de base: fôlego no esforço, inflamação, metabolismo, vitamina D e fadiga — a reserva fisiológica por trás dos outros domínios."
  },
  {
    "nome": "sono",
    "familia": "estilo de vida",
    "descricao": "Quanto e como se dorme — a triagem feita em casa que, se alterada, abre a investigação."
  },
  {
    "nome": "nutrição",
    "familia": "estilo de vida",
    "descricao": "O que se come, e como — os nutrientes, as gorduras e o ferro no sangue, e o pilar que se trabalha na rotina."
  },
  {
    "nome": "atividade física",
    "familia": "estilo de vida",
    "descricao": "Quanto e como a pessoa se move no dia a dia — o pilar que transforma medida em hábito."
  },
  {
    "nome": "conexão social",
    "familia": "estilo de vida",
    "descricao": "Vínculos e pertencimento — o pilar mais esquecido, e um dos que mais pesam no envelhecimento."
  }
];

var EIXOS = [
  {
    "id": "circadiana",
    "nome": "circadiana",
    "descricao": "O sono investigado a fundo e tratado — da noite de exame ao CPAP.",
    "itens": [
      {
        "curto": "Polissonografia",
        "item": "Polissonografia",
        "canal": "presencial",
        "descricao": "o exame de referência do sono, uma noite no Einstein",
        "enq": "rol",
        "condicao": "a versão com EEG de noite inteira está no Anexo I; cobertura condicionada à indicação",
        "confianca": "confirmado"
      }
    ]
  },
  {
    "id": "autonomica",
    "nome": "autonômica",
    "descricao": "A regulação do estresse — o sistema nervoso que acelera e freia o corpo.",
    "itens": []
  },
  {
    "id": "cognitiva",
    "nome": "cognitiva",
    "descricao": "O cérebro visto por dentro e o risco que se herda — para agir antes do sintoma.",
    "itens": [
      {
        "curto": "RNM volume cerebral",
        "item": "Ressonância de crânio com volume cerebral",
        "canal": "presencial",
        "descricao": "mede o volume das regiões do cérebro — a reserva cognitiva por imagem",
        "enq": "rol",
        "condicao": "a RM de crânio está no Rol; a volumetria em si não tem código próprio",
        "confianca": "provavel"
      },
      {
        "curto": "ApoE",
        "item": "ApoE",
        "canal": "presencial",
        "descricao": "variante genética de risco cardiovascular e cognitivo",
        "enq": "particular",
        "condicao": "",
        "confianca": "confirmado"
      }
    ]
  },
  {
    "id": "oncologica",
    "nome": "oncológica",
    "descricao": "A busca precoce de sinais de câncer no sangue — antes de qualquer sintoma.",
    "itens": [
      {
        "curto": "Galleri",
        "item": "Galleri (detecção multicâncer)",
        "canal": "presencial",
        "descricao": "um exame de sangue que procura sinais de dezenas de tipos de câncer de uma vez",
        "enq": "particular",
        "condicao": "sem código no Rol",
        "confianca": "confirmado"
      }
    ]
  },
  {
    "id": "hormonal",
    "nome": "hormonal",
    "descricao": "Os hormônios acompanhados no tempo e modulados com critério clínico — energia, massa muscular, osso e humor passam por eles.",
    "itens": [
      {
        "curto": "Estradiol",
        "item": "Estradiol",
        "canal": "presencial",
        "descricao": "principal estrogênio — osso, humor e sono passam por ele",
        "enq": "rol",
        "condicao": "",
        "confianca": "confirmado"
      },
      {
        "curto": "FSH",
        "item": "FSH",
        "canal": "presencial",
        "descricao": "sinaliza a transição hormonal — situa a pessoa no tempo",
        "enq": "rol",
        "condicao": "",
        "confianca": "confirmado"
      },
      {
        "curto": "Testosterona",
        "item": "Testosterona",
        "canal": "presencial",
        "descricao": "força, vitalidade e metabolismo — no homem e, menos, na mulher",
        "enq": "rol",
        "condicao": "",
        "confianca": "confirmado"
      }
    ]
  },
  {
    "id": "cardiometabolica",
    "nome": "cardiometabólica",
    "descricao": "Coração, vasos, fígado e metabolismo investigados com imagem e marcadores — e modulados.",
    "itens": [
      {
        "curto": "Angio-TC",
        "item": "Angio-TC com score de cálcio",
        "canal": "presencial",
        "descricao": "as coronárias por imagem — o risco visto, não estimado",
        "enq": "rol",
        "condicao": "com DUT nº 3 — e o score de cálcio isolado não tem item próprio",
        "confianca": "confirmado"
      },
      {
        "curto": "Densitometria M³",
        "item": "Densitometria de corpo total (com indicação)",
        "canal": "presencial",
        "descricao": "a mesma máquina do M¹, agora com pergunta clínica — osso e composição corporal",
        "enq": "rol",
        "condicao": "densitometria óssea está no Rol com indicação diagnóstica; o rastreio do M¹ segue particular",
        "confianca": "provavel"
      },
      {
        "curto": "ELF",
        "item": "ELF (painel de fibrose hepática)",
        "canal": "presencial",
        "descricao": "estima fibrose do fígado sem biópsia — o órgão que adoece calado",
        "enq": "particular",
        "condicao": "o Rol cobre fibrose por elastografia, que é outro método",
        "confianca": "confirmado"
      },
      {
        "curto": "NT-proBNP",
        "item": "NT-proBNP",
        "canal": "presencial",
        "descricao": "marcador de sobrecarga do coração — pedido se há sinal clínico",
        "enq": "rol",
        "condicao": "",
        "confianca": "confirmado"
      },
      {
        "curto": "Troponina",
        "item": "Troponina",
        "canal": "presencial",
        "descricao": "marcador de lesão do músculo cardíaco — pedido se há sinal clínico",
        "enq": "rol",
        "condicao": "",
        "confianca": "confirmado"
      }
    ]
  },
  {
    "id": "osteometabolica",
    "nome": "osteometabólica",
    "descricao": "Osso e músculo: a densidade, a massa e o treino que as sustenta.",
    "itens": [
      {
        "curto": "Densitometria M³",
        "item": "Densitometria de corpo total (com indicação)",
        "canal": "presencial",
        "descricao": "a mesma máquina do M¹, agora com pergunta clínica — osso e composição corporal",
        "enq": "rol",
        "condicao": "densitometria óssea está no Rol com indicação diagnóstica; o rastreio do M¹ segue particular",
        "confianca": "provavel"
      }
    ]
  }
];

var JORNADA_PESSOA = [
  {
    "trilha": "presencial",
    "ordem": "1",
    "etapa": "Avaliação inicial",
    "quando": "mês 0",
    "pessoa": "Passa pela avaliação completa: biomarcadores, físico e cognitivo",
    "profissional": "Equipe multidisciplinar",
    "espaco": "fisico",
    "bastidor": "Agendamento e enquadramento de cada exame, item a item",
    "fonte": "primaria",
    "espera": "",
    "passo": "entrada",
    "mes": "0"
  },
  {
    "trilha": "presencial",
    "ordem": "2",
    "etapa": "Devolutiva médica",
    "quando": "2 semanas",
    "pessoa": "Recebe o resultado e o plano",
    "profissional": "Médico — guardião da jornada",
    "espaco": "misto",
    "bastidor": "Laudo processado, prontuário atualizado",
    "fonte": "primaria",
    "espera": "2 semanas sem o resultado",
    "passo": "pescoco",
    "mes": "0.5"
  },
  {
    "trilha": "presencial",
    "ordem": "3",
    "etapa": "Avaliação nutricional",
    "quando": "—",
    "pessoa": "Recebe o plano alimentar",
    "profissional": "Nutricionista",
    "espaco": "misto",
    "bastidor": "Agenda e registro do plano",
    "fonte": "primaria",
    "espera": "",
    "passo": "saida",
    "mes": "1"
  },
  {
    "trilha": "presencial",
    "ordem": "4",
    "etapa": "Treinos",
    "quando": "1 a 8 por mês",
    "pessoa": "Treina, presencial ou online",
    "profissional": "Educador físico",
    "espaco": "misto",
    "bastidor": "Agenda do educador físico",
    "fonte": "primaria",
    "espera": "",
    "passo": "saida",
    "mes": "1-12"
  },
  {
    "trilha": "presencial",
    "ordem": "5",
    "etapa": "Reavaliação nutricional",
    "quando": "3 meses",
    "pessoa": "Ajusta hábitos",
    "profissional": "Nutricionista",
    "espaco": "misto",
    "bastidor": "Lembrete de reavaliação",
    "fonte": "inferencia",
    "espera": "",
    "passo": "saida",
    "mes": "3"
  },
  {
    "trilha": "presencial",
    "ordem": "6",
    "etapa": "Reavaliação médica",
    "quando": "6 meses",
    "pessoa": "Reavalia biomarcadores e composição corporal",
    "profissional": "Médico",
    "espaco": "fisico",
    "bastidor": "Processamento e faturamento, item a item",
    "fonte": "primaria",
    "espera": "",
    "passo": "pescoco",
    "mes": "6"
  },
  {
    "trilha": "presencial",
    "ordem": "7",
    "etapa": "Reavaliação nutricional",
    "quando": "8 meses",
    "pessoa": "Ajusta hábitos",
    "profissional": "Nutricionista",
    "espaco": "misto",
    "bastidor": "Lembrete de reavaliação",
    "fonte": "inferencia",
    "espera": "",
    "passo": "saida",
    "mes": "8"
  },
  {
    "trilha": "presencial",
    "ordem": "8",
    "etapa": "Reavaliação médica",
    "quando": "12 meses",
    "pessoa": "Reavaliação completa — o ciclo do ano fecha",
    "profissional": "Médico",
    "espaco": "fisico",
    "bastidor": "Fechamento do ciclo: renovação e faturamento",
    "fonte": "primaria",
    "espera": "",
    "passo": "pescoco",
    "mes": "12"
  }
];

var COMPONENTES = {
  "Core 40+": [
    {
      "curto": "Cognitiva",
      "item": "Avaliação cognitiva (MoCA + Viewmind)",
      "cluster": "cognição",
      "canal": "presencial",
      "descricao": "memória, atenção e cognição — detecta mudanças sutis cedo",
      "enq": "particular",
      "condicao": "",
      "confianca": "confirmado"
    },
    {
      "curto": "Física/funcional",
      "item": "Avaliação física e funcional",
      "cluster": "mobilidade",
      "canal": "presencial",
      "descricao": "marcha, mobilidade e funcionalidade — o retrato funcional de hoje",
      "enq": "particular",
      "condicao": "",
      "confianca": "confirmado"
    },
    {
      "curto": "Sensorial",
      "item": "Avaliação sensorial (perguntas direcionadas + audiometria)",
      "cluster": "sensorial",
      "canal": "presencial",
      "descricao": "audição e demais sentidos — o que isola quando passa despercebido",
      "enq": "rol",
      "condicao": "só a audiometria tonal; o resto do bloco não tem código",
      "confianca": "confirmado"
    },
    {
      "curto": "Saúde emocional",
      "item": "Avaliação de saúde emocional",
      "cluster": "emocional",
      "canal": "digital",
      "descricao": "humor e bem-estar — o rastreio de sintomas depressivos e a linha de base de como a pessoa se sente",
      "enq": "particular",
      "condicao": "GDS no Core e no Frontier (40+) · no Performance 20+, instrumento a definir",
      "confianca": "confirmado"
    },
    {
      "curto": "Equilíbrio",
      "item": "Avaliação de equilíbrio (ABCPB)",
      "cluster": "mobilidade",
      "canal": "presencial",
      "descricao": "confiança no equilíbrio — mede o risco de queda antes da queda",
      "enq": "particular",
      "condicao": "",
      "confianca": "confirmado"
    },
    {
      "curto": "Fadiga",
      "item": "Percepção de fadiga",
      "cluster": "vitalidade",
      "canal": "digital",
      "descricao": "quanta energia a pessoa sente ter — o cansaço que não cai em exame",
      "enq": "sem_codigo",
      "condicao": "escala de entrevista",
      "confianca": "confirmado"
    },
    {
      "curto": "Densitometria",
      "item": "Composição corporal e osso (densitometria de corpo total)",
      "cluster": "mobilidade",
      "canal": "presencial",
      "descricao": "composição corporal e densidade óssea de corpo inteiro",
      "enq": "particular",
      "condicao": "rastreio assintomático; a densitometria diagnóstica é outro uso",
      "confianca": "confirmado"
    },
    {
      "curto": "VO₂",
      "item": "Ergoespirometria (VO₂)",
      "cluster": "vitalidade",
      "canal": "presencial",
      "descricao": "capacidade cardiorrespiratória medida no esforço — o alvo do treino",
      "enq": "rol",
      "condicao": "sem DUT — revisado em 15/10",
      "confianca": "confirmado"
    },
    {
      "curto": "Inflamatórios",
      "item": "Biomarcadores inflamatórios",
      "cluster": "vitalidade",
      "canal": "presencial",
      "descricao": "interleucinas 6 e 10 — a inflamação crônica de baixo grau, fundo de muitas doenças",
      "enq": "rol",
      "condicao": "a redação do Rol não é idêntica ao bloco",
      "confianca": "provavel"
    },
    {
      "curto": "Vitamina D e B12",
      "item": "Vitamina D e B12",
      "cluster": "vitalidade",
      "canal": "presencial",
      "descricao": "duas carências comuns e corrigíveis — osso, músculo e nervo",
      "enq": "rol",
      "condicao": "no Performance 20+, só a vitamina D",
      "confianca": "confirmado"
    },
    {
      "curto": "Oligoelementos",
      "item": "Oligoelementos",
      "cluster": "nutrição",
      "canal": "presencial",
      "descricao": "minerais-traço como zinco e selênio — faltas pequenas, efeito grande",
      "enq": "rol",
      "condicao": "zinco e cobre sim; selênio não",
      "confianca": "confirmado"
    },
    {
      "curto": "Estilo de vida",
      "item": "Entrevista de estilo de vida",
      "cluster": "nutrição|atividade física|conexão social",
      "canal": "digital",
      "descricao": "conversa sobre rotina, alimentação, movimento e hábitos",
      "enq": "sem_codigo",
      "condicao": "anamnese estruturada",
      "confianca": "confirmado"
    },
    {
      "curto": "Biologix",
      "item": "Biologix",
      "cluster": "sono",
      "canal": "digital",
      "descricao": "triagem do sono em casa, dormindo como sempre",
      "enq": "particular",
      "condicao": "o Rol só lista poligrafia de recém-nascido",
      "confianca": "provavel"
    }
  ],
  "Frontier 40+": [
    {
      "curto": "Cognitiva",
      "item": "Avaliação cognitiva (MoCA + Viewmind)",
      "cluster": "cognição",
      "canal": "presencial",
      "descricao": "memória, atenção e cognição — detecta mudanças sutis cedo",
      "enq": "particular",
      "condicao": "",
      "confianca": "confirmado"
    },
    {
      "curto": "Física/funcional",
      "item": "Avaliação física e funcional",
      "cluster": "mobilidade",
      "canal": "presencial",
      "descricao": "marcha, mobilidade e funcionalidade — o retrato funcional de hoje",
      "enq": "particular",
      "condicao": "",
      "confianca": "confirmado"
    },
    {
      "curto": "Sensorial",
      "item": "Avaliação sensorial (perguntas direcionadas + audiometria)",
      "cluster": "sensorial",
      "canal": "presencial",
      "descricao": "audição e demais sentidos — o que isola quando passa despercebido",
      "enq": "rol",
      "condicao": "só a audiometria tonal; o resto do bloco não tem código",
      "confianca": "confirmado"
    },
    {
      "curto": "Saúde emocional",
      "item": "Avaliação de saúde emocional",
      "cluster": "emocional",
      "canal": "digital",
      "descricao": "humor e bem-estar — o rastreio de sintomas depressivos e a linha de base de como a pessoa se sente",
      "enq": "particular",
      "condicao": "GDS no Core e no Frontier (40+) · no Performance 20+, instrumento a definir",
      "confianca": "confirmado"
    },
    {
      "curto": "Equilíbrio",
      "item": "Avaliação de equilíbrio (ABCPB)",
      "cluster": "mobilidade",
      "canal": "presencial",
      "descricao": "confiança no equilíbrio — mede o risco de queda antes da queda",
      "enq": "particular",
      "condicao": "",
      "confianca": "confirmado"
    },
    {
      "curto": "Fadiga",
      "item": "Percepção de fadiga",
      "cluster": "vitalidade",
      "canal": "digital",
      "descricao": "quanta energia a pessoa sente ter — o cansaço que não cai em exame",
      "enq": "sem_codigo",
      "condicao": "escala de entrevista",
      "confianca": "confirmado"
    },
    {
      "curto": "Densitometria",
      "item": "Composição corporal e osso (densitometria de corpo total)",
      "cluster": "mobilidade",
      "canal": "presencial",
      "descricao": "composição corporal e densidade óssea de corpo inteiro",
      "enq": "particular",
      "condicao": "rastreio assintomático; a densitometria diagnóstica é outro uso",
      "confianca": "confirmado"
    },
    {
      "curto": "VO₂",
      "item": "Ergoespirometria (VO₂)",
      "cluster": "vitalidade",
      "canal": "presencial",
      "descricao": "capacidade cardiorrespiratória medida no esforço — o alvo do treino",
      "enq": "rol",
      "condicao": "sem DUT — revisado em 15/10",
      "confianca": "confirmado"
    },
    {
      "curto": "Inflamatórios",
      "item": "Biomarcadores inflamatórios",
      "cluster": "vitalidade",
      "canal": "presencial",
      "descricao": "interleucinas 6 e 10 — a inflamação crônica de baixo grau, fundo de muitas doenças",
      "enq": "rol",
      "condicao": "a redação do Rol não é idêntica ao bloco",
      "confianca": "provavel"
    },
    {
      "curto": "Vitamina D e B12",
      "item": "Vitamina D e B12",
      "cluster": "vitalidade",
      "canal": "presencial",
      "descricao": "duas carências comuns e corrigíveis — osso, músculo e nervo",
      "enq": "rol",
      "condicao": "no Performance 20+, só a vitamina D",
      "confianca": "confirmado"
    },
    {
      "curto": "Oligoelementos",
      "item": "Oligoelementos",
      "cluster": "nutrição",
      "canal": "presencial",
      "descricao": "minerais-traço como zinco e selênio — faltas pequenas, efeito grande",
      "enq": "rol",
      "condicao": "zinco e cobre sim; selênio não",
      "confianca": "confirmado"
    },
    {
      "curto": "Estilo de vida",
      "item": "Entrevista de estilo de vida",
      "cluster": "nutrição|atividade física|conexão social",
      "canal": "digital",
      "descricao": "conversa sobre rotina, alimentação, movimento e hábitos",
      "enq": "sem_codigo",
      "condicao": "anamnese estruturada",
      "confianca": "confirmado"
    },
    {
      "curto": "Biologix",
      "item": "Biologix",
      "cluster": "sono",
      "canal": "digital",
      "descricao": "triagem do sono em casa, dormindo como sempre",
      "enq": "particular",
      "condicao": "o Rol só lista poligrafia de recém-nascido",
      "confianca": "provavel"
    },
    {
      "curto": "Metabolômica",
      "item": "Metabolômica / proteômica",
      "cluster": "nutrição",
      "canal": "presencial",
      "descricao": "a assinatura das moléculas do metabolismo, num retrato só",
      "enq": "particular",
      "condicao": "",
      "confianca": "confirmado"
    },
    {
      "curto": "Trü",
      "item": "Relógio biológico (Trü)",
      "cluster": "vitalidade",
      "canal": "presencial",
      "descricao": "idade biológica por metilação — o número-símbolo do progresso",
      "enq": "particular",
      "condicao": "",
      "confianca": "confirmado"
    },
    {
      "curto": "Retina scan",
      "item": "Retina scan",
      "cluster": "sensorial",
      "canal": "presencial",
      "descricao": "os únicos vasos que se veem sem cortar — espelho da circulação",
      "enq": "rol",
      "condicao": "",
      "confianca": "confirmado"
    },
    {
      "curto": "Genético",
      "item": "Aconselhamento genético",
      "cluster": "vitalidade",
      "canal": "presencial",
      "descricao": "traduz o resultado genético em decisão — evita susto sem contexto",
      "enq": "rol",
      "condicao": "a consulta sim; os testes que ela origina têm DUT própria",
      "confianca": "confirmado"
    },
    {
      "curto": "Omega-index",
      "item": "Omega-index",
      "cluster": "nutrição",
      "canal": "presencial",
      "descricao": "ômega-3 nas células — marcador de proteção cardiovascular",
      "enq": "particular",
      "condicao": "",
      "confianca": "confirmado"
    },
    {
      "curto": "VOP",
      "item": "Velocidade de onda de pulso (VOP)",
      "cluster": "vitalidade",
      "canal": "presencial",
      "descricao": "a rigidez das artérias — a idade do sistema vascular",
      "enq": "particular",
      "condicao": "",
      "confianca": "confirmado"
    }
  ],
  "Performance 20+": [
    {
      "curto": "Biologix",
      "item": "Biologix",
      "cluster": "sono",
      "canal": "digital",
      "descricao": "triagem do sono em casa, dormindo como sempre",
      "enq": "particular",
      "condicao": "o Rol só lista poligrafia de recém-nascido",
      "confianca": "provavel"
    },
    {
      "curto": "Força e potência",
      "item": "Avaliação de força e potência",
      "cluster": "mobilidade",
      "canal": "presencial",
      "descricao": "força máxima e explosão — a reserva que sustenta a independência",
      "enq": "particular",
      "condicao": "",
      "confianca": "confirmado"
    },
    {
      "curto": "Pisada",
      "item": "Avaliação da pisada",
      "cluster": "mobilidade",
      "canal": "presencial",
      "descricao": "como o pé distribui a carga ao andar — origem silenciosa de lesões",
      "enq": "particular",
      "condicao": "baropodometria ausente do Rol",
      "confianca": "confirmado"
    },
    {
      "curto": "Bioimpedância",
      "item": "Composição corporal (bioimpedância)",
      "cluster": "mobilidade",
      "canal": "presencial",
      "descricao": "massa magra, gordura e água — acompanha a evolução entre exames",
      "enq": "rol",
      "condicao": "sem DUT — confirmado em 15/10",
      "confianca": "confirmado"
    },
    {
      "curto": "VO₂",
      "item": "Ergoespirometria (VO₂)",
      "cluster": "vitalidade",
      "canal": "presencial",
      "descricao": "capacidade cardiorrespiratória medida no esforço — o alvo do treino",
      "enq": "rol",
      "condicao": "sem DUT — revisado em 15/10",
      "confianca": "confirmado"
    },
    {
      "curto": "Painel metabólico",
      "item": "Painel metabólico",
      "cluster": "vitalidade",
      "canal": "presencial",
      "descricao": "glicemia, insulina (HOMA), rim e fígado — como o corpo usa energia",
      "enq": "rol",
      "condicao": "",
      "confianca": "confirmado"
    },
    {
      "curto": "Perfil lipídico",
      "item": "Perfil lipídico",
      "cluster": "nutrição",
      "canal": "presencial",
      "descricao": "colesterol e frações — o que se deposita na parede da artéria",
      "enq": "rol",
      "condicao": "",
      "confianca": "confirmado"
    },
    {
      "curto": "Hemograma",
      "item": "Hemograma",
      "cluster": "nutrição",
      "canal": "presencial",
      "descricao": "o retrato básico do sangue — anemia, defesa e coagulação",
      "enq": "rol",
      "condicao": "",
      "confianca": "confirmado"
    },
    {
      "curto": "Ferro/ferritina",
      "item": "Ferro e ferritina",
      "cluster": "nutrição",
      "canal": "presencial",
      "descricao": "o estoque de ferro — causa frequente de cansaço inexplicado",
      "enq": "rol",
      "condicao": "",
      "confianca": "confirmado"
    },
    {
      "curto": "Vitamina D",
      "item": "Vitamina D",
      "cluster": "vitalidade",
      "canal": "presencial",
      "descricao": "status de vitamina D — osso, músculo e imunidade",
      "enq": "rol",
      "condicao": "",
      "confianca": "confirmado"
    },
    {
      "curto": "Saúde emocional",
      "item": "Avaliação de saúde emocional",
      "cluster": "emocional",
      "canal": "digital",
      "descricao": "humor e bem-estar — o rastreio de sintomas depressivos e a linha de base de como a pessoa se sente",
      "enq": "particular",
      "condicao": "GDS no Core e no Frontier (40+) · no Performance 20+, instrumento a definir",
      "confianca": "confirmado"
    },
    {
      "curto": "Estilo de vida",
      "item": "Entrevista de estilo de vida",
      "cluster": "nutrição|atividade física|conexão social",
      "canal": "digital",
      "descricao": "conversa sobre rotina, alimentação, movimento e hábitos",
      "enq": "sem_codigo",
      "condicao": "anamnese estruturada",
      "confianca": "confirmado"
    }
  ]
};

var CAMADAS = {
  "ecossistema": {
    "nivel": "macro",
    "manchete": "O dinheiro entra pelas pontas. O reembolso acontece no meio, por indicação.",
    "pergunta": "quem paga, quem autoriza e quem se beneficia?",
    "pergunta_pessoa": "quem paga por mim, e quem autoriza o que eu faço?",
    "revela": "O dinheiro entra pelas pontas e o reembolso acontece no meio. O laço que sustenta o sistema é a pessoa pagando ao Centro, e o que o alivia é o Centro encaminhando ao hospital, por indicação. Quem paga mais é quem menos aparece nos laços de reembolso.",
    "alavanca": "a regra — o enquadramento regulatório da assinatura define se este desenho se sustenta, e ainda não tem dono",
    "alavanca_alvo": "ator:centro"
  },
  "sistema": {
    "nivel": "meso",
    "manchete": "Tudo o que se mede passa pelo mapa, com o médico, antes de virar cuidado.",
    "pergunta": "o que o Centro mede e modula — e o que puxa o quê?",
    "pergunta_pessoa": "o que o Centro faz com o que eu trago?",
    "revela": "O M² é a garganta e o atraso do sistema: tudo o que se mede espera o dossiê para virar cuidado. A travessia é particular nas pontas e reembolsável no meio — não por escolha comercial, mas porque medir sem sintoma está fora da cobertura e modular com indicação está dentro.",
    "alavanca": "a informação — o dossiê é o ponto onde um dado vira decisão clínica: melhorar o que chega até ele muda tudo o que vem depois",
    "alavanca_alvo": "ponto:dossie"
  },
  "servicos": {
    "nivel": "meso",
    "manchete": "O mesmo exame é particular na entrada e pode ir ao plano dentro de um eixo, com indicação.",
    "pergunta": "o que entra em cada pacote?",
    "pergunta_pessoa": "o que entra no meu pacote — e o que eu já tenho?",
    "revela": "O mesmo exame muda de cor conforme o motivo: na entrada é particular por natureza, porque é rastreio sem sintoma. Dentro de um eixo, com indicação, pode ir ao rol. A cor não é do exame, é do momento da travessia.",
    "alavanca": "a composição — cada item a mais na entrada é hora clínica da estrutura que já existe, e a entrada precisa continuar leve para que a saída tenha gente",
    "alavanca_alvo": "cartao:Core 40+"
  },
  "jornadas": {
    "nivel": "micro",
    "manchete": "Entre as consultas, uma equipe acompanha. Quando ela para de responder, é a equipe que procura.",
    "pergunta": "o que a pessoa vive — no Centro e à distância?",
    "pergunta_pessoa": "o que eu vivo neste ano — e quem está comigo quando eu sumo?",
    "revela": "A trilha digital roda por trás o ano inteiro e é ela que alimenta cada reavaliação. O estoque que cresce não é de exames, é de confiança — e ele se esvazia no silêncio da pessoa, o sinal mais importante do blueprint.",
    "alavanca": "o contato humano contínuo — o guardião da jornada é onde a recorrência se ganha ou se perde. É o recurso mais escasso e o mais decisivo",
    "alavanca_alvo": "laco:1"
  }
};

var RELATORIO = {
  "titulo": "Sistemática Longevidade",
  "subtitulo": "o Centro de Longevidade, visto por quem passa por ele",
  "versao": "v8",
  "data": "25/10/2026",
  "para_quem": "os executivos do Einstein",
  "pergunta_abertura": "o que é o Centro, e como ler este relatório?",
  "pergunta_direcao": "o que temos, e o que preciso para o modelo de negócio fechar?",
  "manchete": "O Centro de Longevidade, em sete perguntas.",
  "tese": "Medir, mapear e modular, vistos de quatro lados: quem paga, o que o Centro faz, o que entra no pacote e o que a pessoa vive. No fim, o que encontramos.",
  "voz": "Faço exames todo ano, em três lugares, e ninguém olha para eles juntos. Não quero só viver mais: quero continuar inteira.",
  "voz_fonte": "52 anos · uma voz composta, a média das seis proto-personas da pesquisa qualitativa (12 entrevistas, jul/2026) — não é uma pessoa real",
  "hoje_titulo": "hoje",
  "hoje_1": "já se cuida, mas sozinha",
  "hoje_2": "exames espalhados, sem leitura conjunta",
  "hoje_3": "dorme mal e acha normal",
  "travessia_titulo": "a travessia",
  "futuro_titulo": "os próximos anos",
  "futuro_1": "um mapa só, com o que vem primeiro",
  "futuro_2": "reavaliação aos 6 e aos 12 meses",
  "futuro_3": "autonomia e memória acompanhadas",
  "legenda": "a avaliação é particular — o que o médico indicar a partir do mapa pode ir ao plano",
  "como_ler": "Cada camada responde a uma pergunta, escrita no alto. Embaixo, o que o desenho mostra. Comece por quem paga e termine no que encontramos.",
  "legenda_fontes": "clique num bloco do modelo de negócio para ver o que temos e o que preciso · os números 1 a 6 seguem a cadeia do cliente à receita",
  "fontes": "devolutiva da owner em 15/10/2026 (portfólio e travessia) · pág. 30 do deck ComexV2 (jornada do ano) · Anexo I do Rol ANS, busca direta (enquadramentos) · pesquisa qualitativa, 12 entrevistas, jul/2026 (a pessoa) · laudo-exemplo da Avaliação de Longevidade Funcional (o dossiê)",
  "pergunta_pessoa_abertura": "por onde eu começo?",
  "pergunta_pessoa_direcao": "o que muda para mim?",
  "conclusao": "A avaliação já existe. O acompanhamento do ano é o que falta desenhar — e ele depende de três definições: o parecer jurídico, o número de eixos e o que ela recebe na espera.",
  "ciclo": "reavaliação aos 6 e aos 12 meses — e o ciclo recomeça",
  "laco_titulo": "o laço que segura o ano",
  "laco_nota": "esvazia no silêncio dela — o contato ativo religa",
  "verdade_titulo": "Só se sustenta se",
  "w_intro": "Antes das camadas, o básico: o que é, para quem, onde, quando, como e quanto.",
  "w_oque": "Um centro do Einstein que mede a saúde de uma vez, junta os resultados num mapa só e acompanha a pessoa ao longo do ano.",
  "w_porque": "Hoje quem se cuida faz isso sozinho: exames em vários lugares, especialistas que não conversam entre si e pouca ajuda para manter o hábito.",
  "w_quem": "Adultos que querem envelhecer com autonomia, em qualquer idade, e empresas, para os seus colaboradores. O grupo prioritário ainda está em definição. A pesquisa ouviu seis perfis:",
  "w_onde": "Nas unidades Einstein que já existem: a avaliação no Espaço Einstein, os exames no hospital e o acompanhamento a distância.",
  "w_quando": "Um dia de avaliação, a devolutiva com o mapa e um ano de acompanhamento, com nova avaliação aos 6 e aos 12 meses.",
  "w_como": "Em três passos, que se repetem a cada ano:",
  "w_como_1": "avaliar tudo num dia",
  "w_como_2": "o médico lê tudo junto e diz o que vem primeiro",
  "w_como_3": "o plano do ano, com alguém que acompanha",
  "w_quanto": "A avaliação é particular. O que o médico indicar a partir do mapa pode ir ao plano de saúde. Os preços ainda estão em definição.",
  "jor_mae": "A travessia inteira: uma só, para todo cliente",
  "jor_mae_sub": "Três passos com regra fixa, iguais para todos. Clique numa linha para abrir a jornada dela.",
  "jor_nota_m1": "a avaliação é particular · quem não sabe por onde começar passa antes pela pré-triagem",
  "jor_nota_m2": "o médico titular recebe um resumo do mapa e assina os exames de métrica",
  "jor_nota_m3": "a modulação pode ser indicada pelo médico do Centro",
  "jor_padrao": "Parte IA, parte atuação clínica pontual: o que é específico de cada cliente se resolve aqui, e a travessia segue a mesma regra para todos.",
  "proposta_titulo": "O MODELO DE NEGÓCIO · CLIQUE NUM BLOCO PARA VER O QUE TEMOS E O QUE PRECISO",
  "conclusao_curta": "A avaliação já existe. Falta desenhar o acompanhamento do ano — e cada bloco do quadro diz o que precisamos para isso."
};

var ACHADOS = [
  {
    "nivel": "macro",
    "curto": "Hoje se vende só a avaliação. O acompanhamento do ano ainda não é oferta.",
    "achado": "O que o Centro vende hoje é a entrada. A recorrência mora na saída — e a saída ainda não existe como oferta.",
    "para_ela": "hoje ela consegue comprar a avaliação. O acompanhamento ao longo do ano ainda não está à venda.",
    "camada": "servicos",
    "link": "?vista=servicos",
    "fonte": "devolutiva de 15/10 · análise de receita",
    "grafico": "",
    "componente": "receita"
  },
  {
    "nivel": "macro",
    "curto": "A assinatura depende de um parecer jurídico que ainda não tem responsável.",
    "achado": "O enquadramento regulatório da assinatura é o risco que governa o desenho inteiro — e segue sem dono e sem prazo.",
    "para_ela": "ainda não se sabe se o acompanhamento poderá ser contratado como serviço ou se terá de seguir as regras de um plano de saúde.",
    "camada": "ecossistema",
    "link": "?vista=ecossistema&ator=operadora",
    "fonte": "nota de viabilização, pendência 1 · mapeamento regulatório",
    "grafico": "",
    "componente": "receita"
  },
  {
    "nivel": "meso",
    "curto": "A avaliação é particular. O que o médico indica depois pode ir ao plano.",
    "achado": "A travessia é particular nas pontas e reembolsável no meio — e isso é desenho, não fraqueza. Medir sem sintoma está fora da cobertura por natureza. O que o dossiê indica entra no rol com indicação clínica. Modular é cuidado eletivo e contínuo.",
    "para_ela": "a avaliação inicial é paga por ela. Os exames que o médico indicar depois podem ir ao plano.",
    "camada": "sistema",
    "link": "?vista=sistema&item=dossie",
    "fonte": "devolutiva de 15/10 · Anexo I do Rol ANS",
    "grafico": "",
    "componente": "receita"
  },
  {
    "nivel": "meso",
    "curto": "Os exames indicados no mapa dependem da agenda do hospital.",
    "achado": "O M² é a garganta: o único trecho que só acontece por indicação, e por isso onde o reembolso de fato acontece — numa agenda que é do hospital, não do Centro. Uma entrada volumosa exporta fila para uma estrutura que o Centro não controla.",
    "para_ela": "entre a conversa com o médico e o exame indicado, ela pode esperar pela agenda do hospital.",
    "camada": "sistema",
    "link": "?vista=sistema&item=dossie",
    "fonte": "devolutiva de 15/10 · nota de arquitetura",
    "grafico": "",
    "componente": "recursos"
  },
  {
    "nivel": "meso",
    "curto": "O sono é triado em casa. A noite no laboratório, só se a triagem pedir.",
    "achado": "A triagem do sono em casa, nos três protocolos, transforma a elegibilidade do sono em taxa de encaminhamento: o exame caro só acontece quando a triagem altera.",
    "para_ela": "o sono é triado em casa, dormindo como sempre. A noite no laboratório só acontece se for preciso.",
    "camada": "sistema",
    "link": "?vista=sistema&grupo=sono",
    "fonte": "imagem do portfólio, 15/10 · releitura da conta",
    "grafico": "",
    "componente": "atividades"
  },
  {
    "nivel": "meso",
    "curto": "O que mantém a pessoa no ano é alguém que conhece o caso e a procura.",
    "achado": "O recurso crítico não é a hora de médico nem a de treino: é o contato humano contínuo. O guardião da jornada concentra quase metade das horas por pessoa — e é onde a recorrência se ganha ou se perde.",
    "para_ela": "a diferença que ela sente é alguém que conhece o caso e a procura quando ela some.",
    "camada": "jornadas",
    "link": "?vista=jornadas&item=alwayscare",
    "fonte": "dimensionamento a partir de protocolos publicados — ainda sem validação interna",
    "grafico": "horas",
    "componente": "relacionamento"
  },
  {
    "nivel": "micro",
    "curto": "Ela quer manter autonomia, memória e disposição — não só viver mais.",
    "achado": "A pessoa não quer viver mais: quer viver inteira. Autonomia, cognição e propósito pesam tanto quanto saúde física nos depoimentos.",
    "para_ela": "",
    "camada": "jornadas",
    "link": "?vista=jornadas",
    "fonte": "pesquisa qualitativa, 12 entrevistas, jul/2026",
    "grafico": "",
    "componente": "segmentos"
  },
  {
    "nivel": "micro",
    "curto": "Ela espera duas semanas entre a avaliação e o resultado.",
    "achado": "A espera mais sensível do ano são as duas semanas entre o dia da avaliação e a conversa sobre os resultados: ela já fez tudo e ainda não sabe nada. Hoje a jornada não diz o que ela recebe nesse intervalo.",
    "para_ela": "",
    "camada": "jornadas",
    "link": "?vista=jornadas&item=abertura",
    "fonte": "pág. 30 do deck ComexV2 (jornada do ano)",
    "grafico": "",
    "componente": "proposta"
  },
  {
    "nivel": "micro",
    "curto": "Quem já tem exames não quer repeti-los.",
    "achado": "Quem chega com exames de fora quer, antes de tudo, não repetir nada — é o primeiro valor que ela percebe. A jornada da curadoria ainda é leitura nossa, sem fonte primária.",
    "para_ela": "",
    "camada": "jornadas",
    "link": "?vista=jornadas&item=curadoria",
    "fonte": "jornada da curadoria — inferência",
    "grafico": "",
    "componente": "proposta"
  },
  {
    "nivel": "micro",
    "curto": "Do teste de sono em casa ao tratamento: seis semanas e três profissionais.",
    "achado": "Da triagem do sono em casa ao plano de tratamento passam cerca de seis semanas, e ela muda de profissional três vezes. É onde ela mais precisa saber quem a acompanha.",
    "para_ela": "",
    "camada": "jornadas",
    "link": "?vista=jornadas&item=polissono",
    "fonte": "jornadas do Biologix e da polissonografia",
    "grafico": "",
    "componente": "atividades"
  },
  {
    "nivel": "micro",
    "curto": "Quando ela para de responder, é o sinal mais importante do ano.",
    "achado": "O silêncio dela é o sinal mais importante do ano. Ele dispara o contato semanal, mas ainda não está definido quem é responsável por levar um desvio à equipe clínica.",
    "para_ela": "",
    "camada": "jornadas",
    "link": "?vista=jornadas",
    "fonte": "pág. 30 do deck (contato semanal) · leitura nossa (quem escala)",
    "grafico": "",
    "componente": "relacionamento"
  },
  {
    "nivel": "micro",
    "curto": "O rastreamento de câncer é escolha dela, com o médico.",
    "achado": "No rastreamento de câncer, a decisão de fazer é dela, com o médico, sabendo o que o exame pode e não pode dizer. O consentimento é uma etapa da jornada, não um formulário.",
    "para_ela": "",
    "camada": "jornadas",
    "link": "?vista=jornadas&item=galleri",
    "fonte": "jornada do eixo oncológico — inferência",
    "grafico": "",
    "componente": "proposta"
  }
];

var PENDENCIAS = [
  {
    "nivel": "macro",
    "curto": "Parecer jurídico sobre a assinatura (ANS)",
    "destaque": "sim",
    "decisao": "Parecer jurídico sobre o enquadramento da assinatura (ANS) — a condição de tudo o que está aqui",
    "dono": "sem dono",
    "prazo": "sem prazo",
    "status": "aberta",
    "componente": "receita"
  },
  {
    "nivel": "macro",
    "curto": "Preço da entrada e preço da saída, separados",
    "destaque": "",
    "decisao": "Preço da entrada por protocolo e preço da saída (assinatura) — hoje fundidos numa conta só",
    "dono": "owner + comercial",
    "prazo": "a definir",
    "status": "aberta",
    "componente": "receita"
  },
  {
    "nivel": "meso",
    "curto": "Quantas pessoas passam da entrada para a saída",
    "destaque": "",
    "decisao": "Taxa de passagem da entrada para a saída — a medida mais sensível da conta na arquitetura da travessia",
    "dono": "economia em saúde",
    "prazo": "a definir",
    "status": "aberta",
    "componente": "receita"
  },
  {
    "nivel": "meso",
    "curto": "Composição do eixo autonômico",
    "destaque": "",
    "decisao": "Composição do eixo autonômico (biofeedback, mindfulness, medicação) e sua elegibilidade — a sala já existe",
    "dono": "owner (clínico)",
    "prazo": "a definir",
    "status": "parcial",
    "componente": "proposta"
  },
  {
    "nivel": "meso",
    "curto": "Experiências com terceiros: dentro, fora ou por indicação",
    "destaque": "",
    "decisao": "Camada de experiências com terceiros (sauna, crio, meditação guiada): dentro do pacote, fora, ou por indicação",
    "dono": "owner",
    "prazo": "a definir",
    "status": "aberta",
    "componente": "parcerias"
  },
  {
    "nivel": "meso",
    "curto": "Equipamentos e pessoas: quem levanta, até quando",
    "destaque": "",
    "decisao": "Equipamentos e dimensionamento de pessoas: quem levanta internamente e até quando",
    "dono": "owner + economia em saúde",
    "prazo": "a definir",
    "status": "aberta",
    "componente": "custos"
  },
  {
    "nivel": "meso",
    "curto": "Sete eixos ou seis: confirmar com a owner",
    "destaque": "sim",
    "decisao": "Os sete eixos do M³ contra os seis da devolutiva: cognitiva, cardiometabólica e oncológica entram, nutrição e exercício de precisão viram pilares do M¹ — confirmar com a owner",
    "dono": "produtização → owner",
    "prazo": "próxima conversa",
    "status": "parcial",
    "componente": "proposta"
  },
  {
    "nivel": "micro",
    "curto": "O que ela recebe nas duas semanas de espera",
    "destaque": "sim",
    "decisao": "O que a pessoa recebe nas duas semanas entre a avaliação e a conversa sobre os resultados",
    "dono": "produtização → owner",
    "prazo": "a definir",
    "status": "aberta",
    "componente": "proposta"
  },
  {
    "nivel": "micro",
    "curto": "Quem leva um desvio à equipe clínica, e em quanto tempo",
    "destaque": "",
    "decisao": "Quem é responsável por levar um desvio da pessoa à equipe clínica, e em quanto tempo ela tem resposta",
    "dono": "owner (clínico)",
    "prazo": "a definir",
    "status": "aberta",
    "componente": "relacionamento"
  },
  {
    "nivel": "micro",
    "curto": "Validar as jornadas da curadoria e do câncer",
    "destaque": "",
    "decisao": "Validar com a owner a jornada da curadoria e a do rastreamento de câncer — hoje leituras nossas",
    "dono": "produtização → owner",
    "prazo": "próxima conversa",
    "status": "aberta",
    "componente": "atividades"
  },
  {
    "nivel": "meso",
    "curto": "Sessão a quatro mãos do BMC e do Lean",
    "destaque": "",
    "decisao": "Sessão a quatro mãos do BMC e do Lean — construídos a partir de hipóteses nossas, para ela validar, corrigir ou substituir",
    "dono": "produtização + owner",
    "prazo": "a marcar",
    "status": "aberta",
    "componente": ""
  },
  {
    "nivel": "micro",
    "curto": "Pré-triagem: quem conduz, por qual canal, e quanto custa",
    "destaque": "",
    "decisao": "A pré-triagem para quem não sabe qual protocolo escolher é cobrada: falta definir quem conduz a conversa, por qual canal, o preço e se o valor é abatido quando ela segue para a avaliação",
    "dono": "produtização → owner",
    "prazo": "próxima conversa",
    "status": "aberta",
    "componente": "canais"
  },
  {
    "nivel": "meso",
    "curto": "Qual grupo de pessoas o Centro prioriza na entrada",
    "destaque": "",
    "decisao": "Qual das seis proto-personas o Centro prioriza na entrada — hoje há uma hipótese de trabalho (40 a 65 anos, alta liderança) ainda não validada com a owner",
    "dono": "owner",
    "prazo": "próxima conversa",
    "status": "aberta",
    "componente": "segmentos"
  },
  {
    "nivel": "meso",
    "curto": "Dois ajustes no portfólio: densitometria e retina",
    "destaque": "",
    "decisao": "A densitometria do M³ aparece em dois eixos (cardiometabólico e osteometabólico) e o retina scan está no domínio sensorial, mas a descrição é vascular. Confirmar onde cada um mora",
    "dono": "owner (clínico)",
    "prazo": "próxima conversa",
    "status": "aberta",
    "componente": "proposta"
  }
];

var PROXIMOS = [
  {
    "passo": "Levar este relatório à owner e fechar as três definições em destaque",
    "quando": "próxima conversa",
    "dono": "produtização"
  },
  {
    "passo": "Revisar com a owner o BMC e o Lean, hipótese por hipótese",
    "quando": "a marcar",
    "dono": "produtização + owner"
  },
  {
    "passo": "Refazer a conta do Centro com os preços e a adesão ao acompanhamento",
    "quando": "depois dessas definições",
    "dono": "economia em saúde"
  },
  {
    "passo": "Relatório final",
    "quando": "30/11/2026",
    "dono": "produtização"
  }
];

var PERSONAS = [
  {
    "nome": "Early adopter",
    "motivacao": "inovação e prevenção precoce",
    "foco": "",
    "fonte": "pesquisa qualitativa, 12 entrevistas, jul/2026"
  },
  {
    "nome": "Otimizador de performance",
    "motivacao": "energia e funcionalidade",
    "foco": "",
    "fonte": "pesquisa qualitativa, 12 entrevistas, jul/2026"
  },
  {
    "nome": "Preventivo cognitivo",
    "motivacao": "planejamento e risco",
    "foco": "",
    "fonte": "pesquisa qualitativa, 12 entrevistas, jul/2026"
  },
  {
    "nome": "Interessado não estruturado",
    "motivacao": "organização e apoio",
    "foco": "",
    "fonte": "pesquisa qualitativa, 12 entrevistas, jul/2026"
  },
  {
    "nome": "Cético",
    "motivacao": "evidência e benefício concreto",
    "foco": "",
    "fonte": "pesquisa qualitativa, 12 entrevistas, jul/2026"
  },
  {
    "nome": "Planejador da velhice",
    "motivacao": "autonomia e transição",
    "foco": "",
    "fonte": "pesquisa qualitativa, 12 entrevistas, jul/2026"
  }
];

var NAO_OUVIDOS = [
  {
    "grupo": "Quem não sabe por onde começar e não marca",
    "por_que": "é quem a pré-triagem quer receber",
    "como_ouvir": "registrar quem procura o Centro e não agenda"
  },
  {
    "grupo": "Quem faz a avaliação e não segue",
    "por_que": "é onde o acompanhamento do ano se perde",
    "como_ouvir": "conversar com quem não voltou depois dos resultados"
  },
  {
    "grupo": "Quem para de responder no ano",
    "por_que": "o silêncio é o sinal mais importante do ano",
    "como_ouvir": "ouvir os casos em que o contato ativo não teve retorno"
  },
  {
    "grupo": "A empresa que paga pelo colaborador",
    "por_que": "é quem define se o benefício continua",
    "como_ouvir": "entrevistar o RH de empresas que já compram do Einstein"
  }
];

var PASSAGENS = {
  "m1-m2": {
    "de": "entrada",
    "para": "pescoco",
    "rotulo": "M¹ → M²",
    "quem": "o médico, guardião da jornada",
    "fonte": "primaria"
  },
  "m2-m3": {
    "de": "pescoco",
    "para": "saida",
    "rotulo": "M² → M³",
    "quem": "com o dossiê em mãos, o médico titular ou o do Centro encaminha aos eixos",
    "fonte": "primaria"
  },
  "m3-m2": {
    "de": "saida",
    "para": "pescoco",
    "rotulo": "M³ → M²",
    "quem": "o Always Care leva às reavaliações de 6 e 12 meses · quem leva um desvio à clínica: a definir",
    "fonte": "inferencia"
  }
};

var LACO = [
  {
    "rotulo": "contato",
    "fonte": "primaria"
  },
  {
    "rotulo": "confiança",
    "fonte": "inferencia"
  },
  {
    "rotulo": "adesão",
    "fonte": "inferencia"
  },
  {
    "rotulo": "resultado",
    "fonte": "inferencia"
  }
];

var HORAS = [
  {
    "quem": "contato ativo (navegador)",
    "horas": 10.92
  },
  {
    "quem": "avaliação física",
    "horas": 4.75
  },
  {
    "quem": "treino em grupo",
    "horas": 3.0
  },
  {
    "quem": "médico guardião",
    "horas": 2.25
  },
  {
    "quem": "nutrição",
    "horas": 2.25
  },
  {
    "quem": "especialistas (endócrino e sono)",
    "horas": 0.88
  }
];

var CONDICOES = [
  {
    "condicao": "a assinatura puder ser vendida como serviço",
    "se_nao": "o acompanhamento teria de seguir as regras de um plano de saúde"
  },
  {
    "condicao": "quem faz a avaliação seguir para o ano",
    "se_nao": "o Centro vende só a entrada, e o desenho do ano perde a base"
  },
  {
    "condicao": "o contato semanal segurar a pessoa",
    "se_nao": "o laço esvazia e a reavaliação dos 12 meses encontra menos gente"
  }
];

var PROPOSTA = [
  {
    "id": "segmentos",
    "componente": "Cliente / usuário",
    "bloco": "Segmentos de clientes",
    "cor": "#cfe2fb",
    "temos": "seis perfis ouvidos na pesquisa, adultos de qualquer idade e empresas que contratam para os colaboradores",
    "preciso": "escolher o grupo que o Centro prioriza na entrada e ouvir quem ainda não ouvimos",
    "pedido": "acesso aos clientes de hoje do Einstein e ao RH das empresas que já compram dele, para ouvir quem ainda falta"
  },
  {
    "id": "proposta",
    "componente": "Portfólio",
    "bloco": "Proposta de valor",
    "cor": "#e2d8f8",
    "temos": "medir num dia, mapear num dossiê só e modular ao longo do ano, com o médico titular no centro da decisão",
    "preciso": "fechar sete ou seis eixos e o que a pessoa recebe nas duas semanas de espera",
    "pedido": "aval clínico para os protocolos de cada eixo, com a evidência que o Einstein exige"
  },
  {
    "id": "atividades",
    "componente": "Atividades diferenciadoras",
    "bloco": "Atividades-chave",
    "cor": "#fde0c4",
    "temos": "a avaliação num dia, a leitura integrada do médico e a prescrição pela medida",
    "preciso": "validar com a owner as jornadas da curadoria e do rastreamento de câncer",
    "pedido": "uma agenda compartilhada entre as unidades, para a avaliação inteira caber num dia"
  },
  {
    "id": "recursos",
    "componente": "Recursos diferenciadores",
    "bloco": "Recursos-chave",
    "cor": "#cdeef0",
    "temos": "a infraestrutura e a marca Einstein, e o médico titular de cada cliente como aliado",
    "preciso": "formar o médico de gerociência e dimensionar quem faz o contato ativo",
    "pedido": "sincronia no uso do que já existe (Espaço Einstein, salas, diagnóstico) e a liberação de equipamentos e equipe"
  },
  {
    "id": "custos",
    "componente": "Estrutura de custo",
    "bloco": "Estrutura de custos",
    "cor": "#fdf3c0",
    "temos": "um dimensionamento por horas, a partir de protocolos publicados",
    "preciso": "validar as horas por pessoa e saber quem levanta equipamentos e equipe",
    "pedido": "um responsável e um prazo para o levantamento de equipamentos e de equipe"
  },
  {
    "id": "receita",
    "componente": "Fontes de receita",
    "bloco": "Fontes de receita",
    "cor": "#d4efcf",
    "temos": "a avaliação é particular, e o que o médico indica pode ir ao plano",
    "preciso": "o parecer jurídico da assinatura e os preços da entrada e do ano, separados",
    "pedido": "o parecer jurídico da assinatura, com dono e prazo"
  },
  {
    "id": "parcerias",
    "componente": "Quem faz junto",
    "bloco": "Parcerias-chave",
    "cor": "#e4e7ec",
    "temos": "Einstein Diagnóstico para os exames indicados, parceiros de tecnologia (wearable e IA) e o médico titular de cada cliente",
    "preciso": "fechar a plataforma de IA e o relógio biológico, e decidir o que fica com terceiros",
    "pedido": "apoio institucional para fechar a plataforma de IA e o relógio biológico"
  },
  {
    "id": "relacionamento",
    "componente": "Como acompanha",
    "bloco": "Relacionamento",
    "cor": "#f8dde4",
    "temos": "um guardião da jornada: contato ativo semanal, Always Care e reavaliações ao longo do ano",
    "preciso": "definir quem leva um desvio à equipe clínica, e em quanto tempo",
    "pedido": "uma equipe de contato ativo, com um protocolo clínico para levar os desvios adiante"
  },
  {
    "id": "canais",
    "componente": "Por onde chega",
    "bloco": "Canais",
    "cor": "#dbe4f3",
    "temos": "as unidades Einstein, o app Meu Einstein, a indicação médica e o RH das empresas",
    "preciso": "definir a pré-triagem (quem conduz e por qual canal) e testar a porta das empresas",
    "pedido": "a porta das empresas pelo RH e a indicação do corpo clínico do Einstein"
  }
];

var TECNOLOGIAS = [
  {
    "id": "abertura",
    "nome": "Dia de abertura (o pacote de metrificação)",
    "apelido": "Dia de abertura",
    "entrega": "Um dia no Centro: o pacote de avaliações que abre a travessia — a composição varia por fluxo.",
    "estagio": "entrada",
    "tags": [
      "Individualizado",
      "Performance 20+",
      "Core 40+",
      "Frontier 40+"
    ],
    "cluster": "",
    "eixo": "",
    "alimenta": [
      "dossie",
      "alwayscare"
    ],
    "fluxos": [
      {
        "de": "cliente",
        "para": "centro",
        "oque": "compra do dia de abertura — o pacote inteiro de metrificação, num dia",
        "tipo": "pagamento",
        "enq": "particular"
      }
    ],
    "jornada": [
      {
        "ordem": 1,
        "etapa": "Chega em jejum",
        "quando": "mês 0",
        "pessoa": "Chega em jejum — a manhã é reservada",
        "profissional": "Recepção e equipe de avaliação",
        "espaco": "fisico",
        "bastidor": "Agenda do dia e enquadramento de cada exame",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 2,
        "etapa": "As medidas",
        "quando": "mês 0",
        "pessoa": "Passa pelas estações de medida",
        "profissional": "Equipe multidisciplinar",
        "espaco": "fisico",
        "bastidor": "Coleta, processamento e laudos",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 3,
        "etapa": "Integração",
        "quando": "até 2 semanas",
        "pessoa": "",
        "profissional": "Equipe clínica",
        "espaco": "fisico",
        "bastidor": "Os resultados viram um Mapa só",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 4,
        "etapa": "Devolutiva",
        "quando": "2 semanas",
        "pessoa": "Ouve o Mapa explicado, em conversa",
        "profissional": "Médico — guardião da jornada",
        "espaco": "misto",
        "bastidor": "Prontuário atualizado",
        "fonte": "primaria",
        "espera": "2 semanas sem o resultado"
      },
      {
        "ordem": 5,
        "etapa": "As modulações",
        "quando": "2 semanas",
        "pessoa": "Sai com o plano dos próximos anos",
        "profissional": "Médico",
        "espaco": "misto",
        "bastidor": "Encaminhamento para os eixos",
        "fonte": "primaria",
        "espera": ""
      }
    ]
  },
  {
    "id": "biologix",
    "nome": "Biologix (triagem do sono)",
    "apelido": "Biologix",
    "entrega": "Triagem do sono feita na casa do cliente; resultado alterado abre a investigação no Einstein.",
    "estagio": "entrada",
    "tags": [
      "Core 40+",
      "Frontier 40+",
      "Performance 20+"
    ],
    "cluster": "sono",
    "eixo": "",
    "alimenta": [
      "polissono",
      "alwayscare"
    ],
    "fluxos": [
      {
        "de": "cliente",
        "para": "centro",
        "oque": "item do protocolo de entrada",
        "tipo": "confirmar",
        "enq": "particular"
      },
      {
        "de": "centro",
        "para": "diagnostico",
        "oque": "se alterar, encaminhamento à polissonografia",
        "tipo": "beneficio",
        "enq": "beneficio"
      }
    ],
    "jornada": [
      {
        "ordem": 1,
        "etapa": "O kit chega",
        "quando": "dia 0",
        "pessoa": "Recebe o kit do sono em casa",
        "profissional": "— autosserviço",
        "espaco": "digital",
        "bastidor": "Logística do kit",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 2,
        "etapa": "As noites",
        "quando": "3 noites",
        "pessoa": "Dorme como sempre, com o sensor",
        "profissional": "—",
        "espaco": "digital",
        "bastidor": "Registro automático dos dados",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 3,
        "etapa": "Leitura do traçado",
        "quando": "1 semana",
        "pessoa": "",
        "profissional": "Equipe clínica",
        "espaco": "fisico",
        "bastidor": "Análise do traçado",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 4,
        "etapa": "Resultado",
        "quando": "2 semanas",
        "pessoa": "Entende o próprio sono, no Mapa",
        "profissional": "Médico",
        "espaco": "misto",
        "bastidor": "Resultado anexado ao Mapa",
        "fonte": "primaria",
        "espera": "≈ 1 semana até o resultado"
      },
      {
        "ordem": 5,
        "etapa": "Se alterar",
        "quando": "2 semanas",
        "pessoa": "Recebe a indicação do exame de referência",
        "profissional": "Médico do sono",
        "espaco": "fisico",
        "bastidor": "Encaminhamento ao Einstein Diagnóstico",
        "fonte": "primaria",
        "espera": ""
      }
    ]
  },
  {
    "id": "dxa",
    "nome": "Densitometria de corpo total (DXA)",
    "apelido": "DXA",
    "entrega": "Composição corporal e densidade óssea de corpo inteiro — a régua dos eixos físico e osteometabólico.",
    "estagio": "entrada",
    "tags": [
      "Core 40+",
      "Frontier 40+"
    ],
    "cluster": "mobilidade",
    "eixo": "",
    "alimenta": [
      "treino",
      "glp1"
    ],
    "fluxos": [
      {
        "de": "cliente",
        "para": "centro",
        "oque": "item particular da avaliação — rastreio assintomático",
        "tipo": "pagamento",
        "enq": "particular"
      }
    ],
    "jornada": [
      {
        "ordem": 1,
        "etapa": "Agendado no dia",
        "quando": "mês 0",
        "pessoa": "",
        "profissional": "Equipe de agendamento",
        "espaco": "fisico",
        "bastidor": "Encaixe no dia de abertura",
        "fonte": "inferencia",
        "espera": ""
      },
      {
        "ordem": 2,
        "etapa": "O exame",
        "quando": "mês 0",
        "pessoa": "Deita alguns minutos, sem preparo",
        "profissional": "Técnico em densitometria",
        "espaco": "fisico",
        "bastidor": "Aquisição e laudo",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 3,
        "etapa": "Leitura",
        "quando": "2 semanas",
        "pessoa": "",
        "profissional": "Médico",
        "espaco": "fisico",
        "bastidor": "Massa, osso e gordura entram no Mapa",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 4,
        "etapa": "Metas",
        "quando": "2 semanas",
        "pessoa": "Recebe metas de massa e osso",
        "profissional": "Médico e educador físico",
        "espaco": "misto",
        "bastidor": "Alvos registrados no plano",
        "fonte": "inferencia",
        "espera": ""
      }
    ]
  },
  {
    "id": "vo2",
    "nome": "Ergoespirometria (VO₂)",
    "apelido": "VO₂",
    "entrega": "Capacidade cardiorrespiratória medida no esforço — o alvo do exercício de precisão.",
    "estagio": "entrada",
    "tags": [
      "Core 40+",
      "Frontier 40+",
      "Performance 20+"
    ],
    "cluster": "vitalidade",
    "eixo": "",
    "alimenta": [
      "treino"
    ],
    "fluxos": [
      {
        "de": "cliente",
        "para": "centro",
        "oque": "no rastreio da entrada: particular por desenho",
        "tipo": "pagamento",
        "enq": "particular"
      },
      {
        "de": "operadora",
        "para": "centro",
        "oque": "reembolsável quando houver indicação clínica",
        "tipo": "confirmar",
        "enq": "rol"
      }
    ],
    "jornada": [
      {
        "ordem": 1,
        "etapa": "O teste de esforço",
        "quando": "mês 0",
        "pessoa": "Pedala ou corre com máscara, até o limite",
        "profissional": "Educador físico e médico",
        "espaco": "fisico",
        "bastidor": "Aquisição dos gases",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 2,
        "etapa": "As zonas",
        "quando": "2 semanas",
        "pessoa": "",
        "profissional": "Educador físico",
        "espaco": "fisico",
        "bastidor": "Cálculo das zonas de treino",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 3,
        "etapa": "Alvos no treino",
        "quando": "2 semanas",
        "pessoa": "Treina com alvos que são seus",
        "profissional": "Educador físico",
        "espaco": "misto",
        "bastidor": "Zonas registradas no plano",
        "fonte": "primaria",
        "espera": ""
      }
    ]
  },
  {
    "id": "angiotc",
    "nome": "Angio-TC com score de cálcio",
    "apelido": "Angio-TC",
    "entrega": "Imagem das coronárias com score de cálcio — risco cardiovascular visto, não estimado.",
    "estagio": "saida",
    "tags": [],
    "cluster": "",
    "eixo": "cardiometabolica",
    "alimenta": [
      "treino"
    ],
    "fluxos": [
      {
        "de": "operadora",
        "para": "centro",
        "oque": "reembolsável dentro dos critérios da DUT nº 3",
        "tipo": "confirmar",
        "enq": "rol"
      },
      {
        "de": "cliente",
        "para": "centro",
        "oque": "fora dos critérios da DUT: particular",
        "tipo": "pagamento",
        "enq": "particular"
      },
      {
        "de": "centro",
        "para": "diagnostico",
        "oque": "achado, investigação cardiológica dirigida",
        "tipo": "beneficio",
        "enq": "beneficio"
      }
    ],
    "jornada": [
      {
        "ordem": 1,
        "etapa": "Indicação",
        "quando": "mês 0",
        "pessoa": "Conversa sobre risco cardiovascular",
        "profissional": "Médico",
        "espaco": "misto",
        "bastidor": "Critérios da diretriz verificados",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 2,
        "etapa": "O exame",
        "quando": "mês 0",
        "pessoa": "Faz a tomografia no Einstein",
        "profissional": "Equipe de imagem",
        "espaco": "fisico",
        "bastidor": "Agendamento e laudo",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 3,
        "etapa": "O risco visto",
        "quando": "2 semanas",
        "pessoa": "Vê o próprio risco, não uma estimativa",
        "profissional": "Médico",
        "espaco": "misto",
        "bastidor": "Laudo integrado ao Mapa",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 4,
        "etapa": "Se houver achado",
        "quando": "2 semanas",
        "pessoa": "",
        "profissional": "Cardiologista",
        "espaco": "fisico",
        "bastidor": "Investigação dirigida no Einstein",
        "fonte": "primaria",
        "espera": ""
      }
    ]
  },
  {
    "id": "tru",
    "nome": "Relógio biológico (Trü)",
    "apelido": "Trü",
    "entrega": "Idade biológica estimada por metilação — o número-símbolo do progresso.",
    "estagio": "entrada",
    "tags": [
      "Frontier 40+"
    ],
    "cluster": "vitalidade",
    "eixo": "",
    "alimenta": [
      "alwayscare"
    ],
    "fluxos": [
      {
        "de": "cliente",
        "para": "centro",
        "oque": "item particular",
        "tipo": "pagamento",
        "enq": "particular"
      },
      {
        "de": "centro",
        "para": "parceiro",
        "oque": "licença e insumo do teste",
        "tipo": "confirmar",
        "enq": "contrato"
      }
    ],
    "jornada": [
      {
        "ordem": 1,
        "etapa": "A coleta",
        "quando": "mês 0",
        "pessoa": "Coleta de sangue, no mesmo dia",
        "profissional": "Equipe de coleta",
        "espaco": "fisico",
        "bastidor": "Amostra enviada ao parceiro",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 2,
        "etapa": "Processamento",
        "quando": "4 a 6 semanas",
        "pessoa": "",
        "profissional": "Parceiro externo",
        "espaco": "digital",
        "bastidor": "Metilação processada fora",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 3,
        "etapa": "A idade biológica",
        "quando": "2 meses",
        "pessoa": "Vê a própria idade biológica",
        "profissional": "Médico",
        "espaco": "misto",
        "bastidor": "Resultado anexado ao Mapa",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 4,
        "etapa": "O reteste",
        "quando": "12 meses",
        "pessoa": "Compara com o ano anterior",
        "profissional": "Médico",
        "espaco": "fisico",
        "bastidor": "Série histórica no prontuário",
        "fonte": "inferencia",
        "espera": ""
      }
    ]
  },
  {
    "id": "curadoria",
    "nome": "Curadoria e pré-triagem (indecisos e exames de fora)",
    "apelido": "Curadoria",
    "entrega": "Uma conversa curta para quem não sabe por onde começar, e a leitura dos exames que a pessoa já tem.",
    "estagio": "entrada",
    "tags": [
      "Individualizado"
    ],
    "cluster": "",
    "eixo": "",
    "alimenta": [
      "dossie",
      "glp1",
      "hormonal",
      "treino",
      "autonomica",
      "cpap",
      "alwayscare"
    ],
    "fluxos": [
      {
        "de": "cliente",
        "para": "centro",
        "oque": "serviço de curadoria e canalização",
        "tipo": "confirmar",
        "enq": "particular"
      }
    ],
    "jornada": [
      {
        "ordem": 1,
        "etapa": "Pré-triagem",
        "quando": "antes do dia 0",
        "pessoa": "Conta o que busca e como está, sem precisar saber qual protocolo escolher",
        "profissional": "Equipe de orientação — a definir quem",
        "espaco": "misto",
        "bastidor": "Conversa cobrada, particular: questionário breve e conversa curta que indicam o protocolo (Performance, Core, Frontier) ou a curadoria dos exames que ela já tem",
        "fonte": "inferencia",
        "espera": ""
      },
      {
        "ordem": 2,
        "etapa": "Envia o que já tem",
        "quando": "antes do dia 0",
        "pessoa": "Se já tem exames recentes, manda os que fez",
        "profissional": "— autosserviço",
        "espaco": "digital",
        "bastidor": "Ingestão dos arquivos",
        "fonte": "inferencia",
        "espera": ""
      },
      {
        "ordem": 3,
        "etapa": "Leitura e validação",
        "quando": "antes do dia 0",
        "pessoa": "",
        "profissional": "Equipe clínica",
        "espaco": "fisico",
        "bastidor": "Lê, valida e identifica as lacunas",
        "fonte": "inferencia",
        "espera": ""
      },
      {
        "ordem": 4,
        "etapa": "Só o que falta",
        "quando": "dia 0",
        "pessoa": "Faz apenas os exames que faltam",
        "profissional": "Equipe de avaliação",
        "espaco": "fisico",
        "bastidor": "Pedido reduzido ao necessário",
        "fonte": "inferencia",
        "espera": ""
      },
      {
        "ordem": 5,
        "etapa": "Mapa montado",
        "quando": "2 semanas",
        "pessoa": "Recebe o Mapa sem ter repetido nada",
        "profissional": "Médico",
        "espaco": "misto",
        "bastidor": "Prontuário com dado externo integrado",
        "fonte": "inferencia",
        "espera": ""
      }
    ]
  },
  {
    "id": "dossie",
    "nome": "Dossiê de Longevidade Funcional",
    "apelido": "Dossiê",
    "entrega": "Tudo o que foi medido num mapa só, com o que vem primeiro — e um resumo para o médico titular.",
    "estagio": "pescoco",
    "tags": [],
    "cluster": "",
    "eixo": "",
    "alimenta": [],
    "fluxos": [
      {
        "de": "cliente",
        "para": "centro",
        "oque": "o dossiê vem dentro do pacote de entrada",
        "tipo": "pagamento",
        "enq": "particular"
      }
    ],
    "jornada": [
      {
        "ordem": 1,
        "etapa": "Integração",
        "quando": "até 2 semanas",
        "pessoa": "",
        "profissional": "Médico especializado em gerociência",
        "espaco": "fisico",
        "bastidor": "Testes físicos, cognitivos, biomarcadores e estilo de vida lidos juntos",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 2,
        "etapa": "O Mapa",
        "quando": "2 semanas",
        "pessoa": "Vê os seis domínios classificados: favorável, aprimorar, priorizar",
        "profissional": "Médico responsável",
        "espaco": "misto",
        "bastidor": "Laudo completo no app Meu Einstein",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 3,
        "etapa": "As prioridades",
        "quando": "2 semanas",
        "pessoa": "Sai com o que fazer primeiro, em linguagem dele",
        "profissional": "Médico responsável",
        "espaco": "misto",
        "bastidor": "Encaminhamento para os eixos de modulação",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 4,
        "etapa": "Para o seu médico",
        "quando": "2 semanas",
        "pessoa": "Leva ao seu médico um resumo de uma página",
        "profissional": "Médico titular",
        "espaco": "misto",
        "bastidor": "Carta ao médico sobre o seu paciente: os exames de métrica que o mapa sugere valem com a assinatura dele",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 5,
        "etapa": "Reavaliação",
        "quando": "6 meses",
        "pessoa": "Refaz as medidas e compara",
        "profissional": "Equipe de avaliação",
        "espaco": "fisico",
        "bastidor": "O dossiê é reescrito com a evolução",
        "fonte": "primaria",
        "espera": ""
      }
    ]
  },
  {
    "id": "polissono",
    "nome": "Polissonografia",
    "apelido": "Polissonografia",
    "entrega": "O exame de referência do sono, feito no Einstein quando a triagem indica.",
    "estagio": "saida",
    "tags": [],
    "cluster": "",
    "eixo": "circadiana",
    "alimenta": [
      "cpap"
    ],
    "fluxos": [
      {
        "de": "operadora",
        "para": "diagnostico",
        "oque": "exame do rol, com achado e indicação documentada",
        "tipo": "confirmar",
        "enq": "rol"
      },
      {
        "de": "cliente",
        "para": "diagnostico",
        "oque": "se o plano não cobrir a variante: particular",
        "tipo": "confirmar",
        "enq": "particular"
      }
    ],
    "jornada": [
      {
        "ordem": 1,
        "etapa": "A indicação",
        "quando": "2 semanas",
        "pessoa": "Entende por que precisa do exame",
        "profissional": "Médico do sono",
        "espaco": "misto",
        "bastidor": "Indicação documentada para o plano",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 2,
        "etapa": "A noite de exame",
        "quando": "1 mês",
        "pessoa": "Dorme uma noite no Einstein",
        "profissional": "Equipe do laboratório do sono",
        "espaco": "fisico",
        "bastidor": "Aquisição e laudo",
        "fonte": "primaria",
        "espera": "≈ 2 semanas até a noite de exame"
      },
      {
        "ordem": 3,
        "etapa": "Cobertura",
        "quando": "1 mês",
        "pessoa": "",
        "profissional": "Equipe administrativa",
        "espaco": "fisico",
        "bastidor": "Autorização junto à operadora",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 4,
        "etapa": "O plano de sono",
        "quando": "6 semanas",
        "pessoa": "Recebe o plano de tratamento",
        "profissional": "Médico do sono",
        "espaco": "misto",
        "bastidor": "Laudo volta ao Centro",
        "fonte": "primaria",
        "espera": "≈ 2 semanas até o plano"
      }
    ]
  },
  {
    "id": "neuroimagem",
    "nome": "Investigação cognitiva (RNM de volume cerebral + ApoE)",
    "apelido": "RNM + ApoE",
    "entrega": "O cérebro visto por dentro e o risco herdado — pedidos quando o dossiê aponta a cognição.",
    "estagio": "saida",
    "tags": [],
    "cluster": "",
    "eixo": "cognitiva",
    "alimenta": [],
    "fluxos": [
      {
        "de": "operadora",
        "para": "diagnostico",
        "oque": "RM de crânio com indicação clínica",
        "tipo": "confirmar",
        "enq": "rol"
      },
      {
        "de": "cliente",
        "para": "centro",
        "oque": "ApoE e aconselhamento",
        "tipo": "pagamento",
        "enq": "particular"
      }
    ],
    "jornada": [
      {
        "ordem": 1,
        "etapa": "A indicação",
        "quando": "2 semanas",
        "pessoa": "Entende por que olhar o cérebro por dentro",
        "profissional": "Médico responsável",
        "espaco": "misto",
        "bastidor": "Indicação a partir do dossiê (cognição)",
        "fonte": "inferencia",
        "espera": ""
      },
      {
        "ordem": 2,
        "etapa": "Os exames",
        "quando": "1 mês",
        "pessoa": "Faz a ressonância e a coleta do ApoE",
        "profissional": "Equipe de imagem e laboratório",
        "espaco": "fisico",
        "bastidor": "RM pelo plano com indicação; ApoE particular",
        "fonte": "inferencia",
        "espera": ""
      },
      {
        "ordem": 3,
        "etapa": "Aconselhamento",
        "quando": "6 semanas",
        "pessoa": "Entende o que o risco herdado significa — e o que não significa",
        "profissional": "Aconselhamento genético",
        "espaco": "misto",
        "bastidor": "Laudo integrado ao dossiê",
        "fonte": "inferencia",
        "espera": ""
      },
      {
        "ordem": 4,
        "etapa": "O plano",
        "quando": "2 meses",
        "pessoa": "Sai com estímulo cognitivo e data de reavaliação",
        "profissional": "Médico responsável",
        "espaco": "misto",
        "bastidor": "Reavaliação no próximo ciclo",
        "fonte": "inferencia",
        "espera": ""
      }
    ]
  },
  {
    "id": "galleri",
    "nome": "Detecção multicâncer (Galleri)",
    "apelido": "Galleri",
    "entrega": "Um exame de sangue que procura sinais de dezenas de cânceres de uma vez — achado abre investigação dirigida.",
    "estagio": "saida",
    "tags": [],
    "cluster": "",
    "eixo": "oncologica",
    "alimenta": [],
    "fluxos": [
      {
        "de": "cliente",
        "para": "centro",
        "oque": "exame de detecção multicâncer",
        "tipo": "pagamento",
        "enq": "particular"
      }
    ],
    "jornada": [
      {
        "ordem": 1,
        "etapa": "A indicação",
        "quando": "2 semanas",
        "pessoa": "Escolhe fazer, sabendo o que o exame pode e não pode dizer",
        "profissional": "Médico responsável",
        "espaco": "misto",
        "bastidor": "Consentimento informado",
        "fonte": "inferencia",
        "espera": ""
      },
      {
        "ordem": 2,
        "etapa": "A coleta",
        "quando": "1 mês",
        "pessoa": "Uma coleta de sangue",
        "profissional": "Laboratório",
        "espaco": "fisico",
        "bastidor": "Amostra enviada ao parceiro",
        "fonte": "inferencia",
        "espera": ""
      },
      {
        "ordem": 3,
        "etapa": "O resultado",
        "quando": "2 meses",
        "pessoa": "Recebe o resultado explicado",
        "profissional": "Médico responsável",
        "espaco": "misto",
        "bastidor": "Sinal detectado abre investigação dirigida no Einstein",
        "fonte": "inferencia",
        "espera": ""
      }
    ]
  },
  {
    "id": "glp1",
    "nome": "Modulação metabólica (GLP-1)",
    "apelido": "Metabólica",
    "entrega": "Modulação metabólica com prescrição e acompanhamento clínico contínuos.",
    "estagio": "saida",
    "tags": [],
    "cluster": "",
    "eixo": "cardiometabolica",
    "alimenta": [],
    "fluxos": [
      {
        "de": "cliente",
        "para": "centro",
        "oque": "assinatura da saída — consultas e acompanhamento",
        "tipo": "pagamento",
        "enq": "particular"
      },
      {
        "de": "operadora",
        "para": "centro",
        "oque": "consulta de endocrinologia pelo rol, com indicação",
        "tipo": "pagamento",
        "enq": "rol"
      }
    ],
    "jornada": [
      {
        "ordem": 1,
        "etapa": "Elegibilidade",
        "quando": "2 semanas",
        "pessoa": "Conversa sobre indicação e limites",
        "profissional": "Médico",
        "espaco": "misto",
        "bastidor": "Critérios clínicos verificados",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 2,
        "etapa": "Prescrição",
        "quando": "2 semanas",
        "pessoa": "Sai com a prescrição e a orientação",
        "profissional": "Médico",
        "espaco": "misto",
        "bastidor": "Receita emitida",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 3,
        "etapa": "Retirada",
        "quando": "mensal",
        "pessoa": "Retira a medicação na farmácia",
        "profissional": "Farmacêutico",
        "espaco": "fisico",
        "bastidor": "Fora do Centro",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 4,
        "etapa": "Ajuste",
        "quando": "contínuo",
        "pessoa": "",
        "profissional": "Médico e nutricionista",
        "espaco": "digital",
        "bastidor": "Dose ajustada pela resposta",
        "fonte": "primaria",
        "espera": ""
      }
    ]
  },
  {
    "id": "hormonal",
    "nome": "Modulação hormonal",
    "apelido": "Hormonal",
    "entrega": "Hormônios acompanhados no tempo e modulados com critério clínico.",
    "estagio": "saida",
    "tags": [],
    "cluster": "",
    "eixo": "hormonal",
    "alimenta": [],
    "fluxos": [
      {
        "de": "cliente",
        "para": "centro",
        "oque": "assinatura da saída — acompanhamento longitudinal",
        "tipo": "pagamento",
        "enq": "particular"
      },
      {
        "de": "operadora",
        "para": "centro",
        "oque": "estradiol, FSH, testosterona e consulta, com indicação",
        "tipo": "pagamento",
        "enq": "rol"
      }
    ],
    "jornada": [
      {
        "ordem": 1,
        "etapa": "O painel",
        "quando": "mês 0",
        "pessoa": "",
        "profissional": "Equipe de coleta",
        "espaco": "fisico",
        "bastidor": "Hormônios no sangue da abertura",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 2,
        "etapa": "A decisão",
        "quando": "2 semanas",
        "pessoa": "Entende o que os hormônios dizem",
        "profissional": "Médico",
        "espaco": "misto",
        "bastidor": "Decisão clínica registrada",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 3,
        "etapa": "Se indicado",
        "quando": "mensal",
        "pessoa": "Retira a medicação na farmácia",
        "profissional": "Farmacêutico",
        "espaco": "fisico",
        "bastidor": "Receita e acompanhamento",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 4,
        "etapa": "Reavaliação",
        "quando": "6 meses",
        "pessoa": "",
        "profissional": "Médico",
        "espaco": "fisico",
        "bastidor": "Dosagens reavaliadas no tempo",
        "fonte": "primaria",
        "espera": ""
      }
    ]
  },
  {
    "id": "treino",
    "nome": "Exercício de precisão (grupo de 4 · 1-1 avulso)",
    "apelido": "Treino",
    "entrega": "Treino prescrito por medida, em grupos de quatro — com opção individual.",
    "estagio": "saida",
    "tags": [],
    "cluster": "",
    "eixo": "osteometabolica",
    "alimenta": [],
    "fluxos": [
      {
        "de": "cliente",
        "para": "centro",
        "oque": "assinatura da saída — treino em pequeno grupo",
        "tipo": "pagamento",
        "enq": "particular"
      },
      {
        "de": "cliente",
        "para": "centro",
        "oque": "treino 1-1 como módulo avulso",
        "tipo": "confirmar",
        "enq": "particular"
      }
    ],
    "jornada": [
      {
        "ordem": 1,
        "etapa": "Os alvos",
        "quando": "2 semanas",
        "pessoa": "Recebe os alvos do próprio treino",
        "profissional": "Educador físico",
        "espaco": "misto",
        "bastidor": "Avaliação física vira prescrição",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 2,
        "etapa": "O treino",
        "quando": "1 a 8 por mês",
        "pessoa": "Treina em grupo de quatro, por medida",
        "profissional": "Educador físico",
        "espaco": "misto",
        "bastidor": "Agenda e sala",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 3,
        "etapa": "Ajuste de carga",
        "quando": "contínuo",
        "pessoa": "",
        "profissional": "Educador físico",
        "espaco": "digital",
        "bastidor": "Cargas ajustadas pela resposta",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 4,
        "etapa": "Reavaliação",
        "quando": "3 e 6 meses",
        "pessoa": "Refaz as medidas e vê o progresso",
        "profissional": "Educador físico e médico",
        "espaco": "fisico",
        "bastidor": "Novas medidas no Mapa",
        "fonte": "primaria",
        "espera": ""
      }
    ]
  },
  {
    "id": "autonomica",
    "nome": "Biofeedback e mindfulness (autonômica)",
    "apelido": "Autonômica",
    "entrega": "Regulação do estresse: biofeedback e mindfulness com protocolo próprio.",
    "estagio": "saida",
    "tags": [],
    "cluster": "",
    "eixo": "autonomica",
    "alimenta": [],
    "fluxos": [
      {
        "de": "cliente",
        "para": "centro",
        "oque": "assinatura da saída — ou biofeedback avulso",
        "tipo": "confirmar",
        "enq": "particular"
      }
    ],
    "jornada": [
      {
        "ordem": 1,
        "etapa": "A medida",
        "quando": "mês 0",
        "pessoa": "",
        "profissional": "Equipe clínica",
        "espaco": "fisico",
        "bastidor": "Estresse e variabilidade no Mapa",
        "fonte": "inferencia",
        "espera": ""
      },
      {
        "ordem": 2,
        "etapa": "As sessões",
        "quando": "semanal",
        "pessoa": "Faz biofeedback no Centro",
        "profissional": "Equipe de saúde mental",
        "espaco": "fisico",
        "bastidor": "Protocolo e sala",
        "fonte": "inferencia",
        "espera": ""
      },
      {
        "ordem": 3,
        "etapa": "A prática",
        "quando": "diária",
        "pessoa": "Pratica em casa, entre as sessões",
        "profissional": "— autosserviço",
        "espaco": "digital",
        "bastidor": "Acompanhamento da adesão",
        "fonte": "inferencia",
        "espera": ""
      }
    ]
  },
  {
    "id": "cpap",
    "nome": "Modulação circadiana (CPAP · medicações)",
    "apelido": "CPAP",
    "entrega": "Cuidado do sono (CPAP e medicação) com acompanhamento do Centro.",
    "estagio": "saida",
    "tags": [],
    "cluster": "",
    "eixo": "circadiana",
    "alimenta": [],
    "fluxos": [
      {
        "de": "cliente",
        "para": "centro",
        "oque": "assinatura da saída — medicina do sono e acompanhamento",
        "tipo": "pagamento",
        "enq": "particular"
      },
      {
        "de": "centro",
        "para": "operadora",
        "oque": "sono tratado, melhor desfecho no longo prazo — sem a operadora pagar",
        "tipo": "beneficio",
        "enq": "beneficio"
      }
    ],
    "jornada": [
      {
        "ordem": 1,
        "etapa": "Diagnóstico",
        "quando": "6 semanas",
        "pessoa": "",
        "profissional": "Médico do sono",
        "espaco": "fisico",
        "bastidor": "Confirmado pela polissonografia",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 2,
        "etapa": "Titulação",
        "quando": "2 meses",
        "pessoa": "Adapta o aparelho com ajuda",
        "profissional": "Equipe de medicina do sono",
        "espaco": "fisico",
        "bastidor": "Titulação registrada",
        "fonte": "primaria",
        "espera": "≈ 2 semanas até a titulação"
      },
      {
        "ordem": 3,
        "etapa": "Equipamento",
        "quando": "2 meses",
        "pessoa": "Recebe aparelho e insumos",
        "profissional": "Fornecedor",
        "espaco": "fisico",
        "bastidor": "Fora do Centro",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 4,
        "etapa": "Adesão",
        "quando": "contínuo",
        "pessoa": "",
        "profissional": "Equipe de medicina do sono",
        "espaco": "digital",
        "bastidor": "Adesão acompanhada à distância",
        "fonte": "primaria",
        "espera": ""
      }
    ]
  },
  {
    "id": "alwayscare",
    "nome": "Plataforma Always Care (IA + navegador)",
    "apelido": "Always Care",
    "entrega": "Acompanhamento contínuo: dados do dia a dia lidos por gente, com contato ativo.",
    "estagio": "saida",
    "tags": [],
    "cluster": "",
    "eixo": "",
    "alimenta": [],
    "fluxos": [
      {
        "de": "cliente",
        "para": "centro",
        "oque": "dentro da assinatura — contato ativo do navegador",
        "tipo": "pagamento",
        "enq": "particular"
      },
      {
        "de": "centro",
        "para": "parceiro",
        "oque": "plataforma por membro",
        "tipo": "confirmar",
        "enq": "contrato"
      },
      {
        "de": "centro",
        "para": "operadora",
        "oque": "adesão sustentada, melhor desfecho — sem a operadora pagar",
        "tipo": "beneficio",
        "enq": "beneficio"
      }
    ],
    "jornada": [
      {
        "ordem": 1,
        "etapa": "Onboarding",
        "quando": "primeiros 30 dias",
        "pessoa": "Conecta wearable e CGM",
        "profissional": "Equipe de onboarding",
        "espaco": "digital",
        "bastidor": "Integração dos dados na plataforma",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 2,
        "etapa": "Os dados fluem",
        "quando": "contínuo",
        "pessoa": "Sobe os exames feitos fora, e o wearable alimenta sozinho",
        "profissional": "Parceiro de tecnologia",
        "espaco": "digital",
        "bastidor": "O dado externo entra no prontuário",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 3,
        "etapa": "A leitura",
        "quando": "contínuo",
        "pessoa": "Recebe correção alimentar, estímulo de atividade e leitura do sono",
        "profissional": "IA com supervisão humana",
        "espaco": "digital",
        "bastidor": "Lê e aciona quando importa",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 4,
        "etapa": "O toque",
        "quando": "semanal",
        "pessoa": "Recebe um contato por semana",
        "profissional": "Navegador",
        "espaco": "digital",
        "bastidor": "Contato ativo registrado",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 5,
        "etapa": "O silêncio",
        "quando": "contínuo",
        "pessoa": "Deixa de interagir — e é procurado",
        "profissional": "Equipe de contato ativo",
        "espaco": "digital",
        "bastidor": "Alerta de baixo engajamento",
        "fonte": "primaria",
        "espera": ""
      },
      {
        "ordem": 6,
        "etapa": "Sinal fora da curva",
        "quando": "quando desvia",
        "pessoa": "Recebe contato se o desvio for relevante",
        "profissional": "Equipe clínica, a definir quem escala",
        "espaco": "misto",
        "bastidor": "Triagem do alerta, que antecipa a reavaliação",
        "fonte": "inferencia",
        "espera": ""
      }
    ]
  }
];
