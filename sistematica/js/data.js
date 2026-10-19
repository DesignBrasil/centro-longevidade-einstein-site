/* =====================================================================
   ARQUIVO GERADO — NÃO EDITAR À MÃO.
   Fonte editável: 05_sintese/dados/*.csv  →  python build_dados.py
   (ver 05_sintese/dados/LEIA-ME_comercial.md)
   Só o que as quatro camadas desenham — o material interno do
   vault não entra aqui (ver dados.json e os CSVs da pasta).
   ===================================================================== */

var ATORES = {
  "paciente": {
    "nome": "PACIENTE",
    "papel": "pagador principal",
    "lado": "dentro",
    "x": 720,
    "y": 160
  },
  "medico": {
    "nome": "MÉDICO",
    "papel": "indica e autoriza · porta de entrada e saída",
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
    "de": "paciente",
    "para": "operadora",
    "tipo": "pagamento",
    "enquadramento": "contrato",
    "oque": "mensalidade do plano de saúde — a relação que já existe antes do Centro"
  },
  {
    "de": "parceiro",
    "para": "paciente",
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
    "para": "paciente",
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
    "para": "paciente",
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
    "fonte": "primaria"
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
    "fonte": "primaria"
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
    "fonte": "primaria"
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
    "fonte": "primaria"
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
    "fonte": "inferencia"
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
    "fonte": "primaria"
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
    "fonte": "inferencia"
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
    "fonte": "primaria"
  },
  {
    "trilha": "digital",
    "ordem": "1",
    "etapa": "Onboarding",
    "quando": "primeiros 30 dias",
    "pessoa": "Conecta wearable e CGM",
    "profissional": "Equipe de onboarding",
    "espaco": "digital",
    "bastidor": "Integração dos dados na plataforma",
    "fonte": "primaria"
  },
  {
    "trilha": "digital",
    "ordem": "2",
    "etapa": "Acompanhamento por IA",
    "quando": "contínuo",
    "pessoa": "Recebe correção alimentar, estímulo de atividade e leitura do sono",
    "profissional": "IA com supervisão humana",
    "espaco": "digital",
    "bastidor": "Processamento e regras de correção",
    "fonte": "primaria"
  },
  {
    "trilha": "digital",
    "ordem": "3",
    "etapa": "Silêncio da pessoa",
    "quando": "contínuo",
    "pessoa": "Deixa de interagir",
    "profissional": "Equipe de contato ativo, 1x por semana",
    "espaco": "digital",
    "bastidor": "Alerta de baixo engajamento",
    "fonte": "primaria"
  },
  {
    "trilha": "digital",
    "ordem": "4",
    "etapa": "A pessoa alimenta a plataforma",
    "quando": "contínuo",
    "pessoa": "Sobe exames feitos fora",
    "profissional": "— autosserviço",
    "espaco": "digital",
    "bastidor": "Ingestão do dado externo no prontuário",
    "fonte": "primaria"
  },
  {
    "trilha": "digital",
    "ordem": "5",
    "etapa": "Alerta à equipe clínica",
    "quando": "quando desvia",
    "pessoa": "Recebe contato se o desvio for relevante",
    "profissional": "Profissional de saúde, a definir qual",
    "espaco": "digital",
    "bastidor": "Triagem do alerta: quem decide escalar",
    "fonte": "inferencia"
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
      "descricao": "testes de força, marcha e mobilidade — o retrato funcional de hoje",
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
      "curto": "Emocional",
      "item": "Avaliação emocional (GDS)",
      "cluster": "emocional",
      "canal": "digital",
      "descricao": "rastreio de sintomas depressivos — humor também é longevidade",
      "enq": "particular",
      "condicao": "",
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
      "item": "Densitometria de corpo total",
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
      "condicao": "",
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
      "descricao": "testes de força, marcha e mobilidade — o retrato funcional de hoje",
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
      "curto": "Emocional",
      "item": "Avaliação emocional (GDS)",
      "cluster": "emocional",
      "canal": "digital",
      "descricao": "rastreio de sintomas depressivos — humor também é longevidade",
      "enq": "particular",
      "condicao": "",
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
      "item": "Densitometria de corpo total",
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
      "condicao": "",
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
      "item": "Bioimpedância",
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
      "curto": "Saúde mental",
      "item": "Saúde mental",
      "cluster": "emocional",
      "canal": "digital",
      "descricao": "como a pessoa avalia o próprio bem-estar — a linha de base",
      "enq": "aberto",
      "condicao": "instrumento a definir",
      "confianca": "aberto"
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
        "de": "paciente",
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
        "fonte": "primaria"
      },
      {
        "ordem": 2,
        "etapa": "As medidas",
        "quando": "mês 0",
        "pessoa": "Passa pelas estações de medida",
        "profissional": "Equipe multidisciplinar",
        "espaco": "fisico",
        "bastidor": "Coleta, processamento e laudos",
        "fonte": "primaria"
      },
      {
        "ordem": 3,
        "etapa": "Integração",
        "quando": "até 2 semanas",
        "pessoa": "",
        "profissional": "Equipe clínica",
        "espaco": "fisico",
        "bastidor": "Os resultados viram um Mapa só",
        "fonte": "primaria"
      },
      {
        "ordem": 4,
        "etapa": "Devolutiva",
        "quando": "2 semanas",
        "pessoa": "Ouve o Mapa explicado, em conversa",
        "profissional": "Médico — guardião da jornada",
        "espaco": "misto",
        "bastidor": "Prontuário atualizado",
        "fonte": "primaria"
      },
      {
        "ordem": 5,
        "etapa": "As modulações",
        "quando": "2 semanas",
        "pessoa": "Sai com o plano dos próximos anos",
        "profissional": "Médico",
        "espaco": "misto",
        "bastidor": "Encaminhamento para os eixos",
        "fonte": "primaria"
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
        "de": "paciente",
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
        "fonte": "primaria"
      },
      {
        "ordem": 2,
        "etapa": "As noites",
        "quando": "3 noites",
        "pessoa": "Dorme como sempre, com o sensor",
        "profissional": "—",
        "espaco": "digital",
        "bastidor": "Registro automático dos dados",
        "fonte": "primaria"
      },
      {
        "ordem": 3,
        "etapa": "Leitura do traçado",
        "quando": "1 semana",
        "pessoa": "",
        "profissional": "Equipe clínica",
        "espaco": "fisico",
        "bastidor": "Análise do traçado",
        "fonte": "primaria"
      },
      {
        "ordem": 4,
        "etapa": "Resultado",
        "quando": "2 semanas",
        "pessoa": "Entende o próprio sono, no Mapa",
        "profissional": "Médico",
        "espaco": "misto",
        "bastidor": "Resultado anexado ao Mapa",
        "fonte": "primaria"
      },
      {
        "ordem": 5,
        "etapa": "Se alterar",
        "quando": "2 semanas",
        "pessoa": "Recebe a indicação do exame de referência",
        "profissional": "Médico do sono",
        "espaco": "fisico",
        "bastidor": "Encaminhamento ao Einstein Diagnóstico",
        "fonte": "primaria"
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
        "de": "paciente",
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
        "fonte": "inferencia"
      },
      {
        "ordem": 2,
        "etapa": "O exame",
        "quando": "mês 0",
        "pessoa": "Deita alguns minutos, sem preparo",
        "profissional": "Técnico em densitometria",
        "espaco": "fisico",
        "bastidor": "Aquisição e laudo",
        "fonte": "primaria"
      },
      {
        "ordem": 3,
        "etapa": "Leitura",
        "quando": "2 semanas",
        "pessoa": "",
        "profissional": "Médico",
        "espaco": "fisico",
        "bastidor": "Massa, osso e gordura entram no Mapa",
        "fonte": "primaria"
      },
      {
        "ordem": 4,
        "etapa": "Metas",
        "quando": "2 semanas",
        "pessoa": "Recebe metas de massa e osso",
        "profissional": "Médico e educador físico",
        "espaco": "misto",
        "bastidor": "Alvos registrados no plano",
        "fonte": "inferencia"
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
        "de": "paciente",
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
        "fonte": "primaria"
      },
      {
        "ordem": 2,
        "etapa": "As zonas",
        "quando": "2 semanas",
        "pessoa": "",
        "profissional": "Educador físico",
        "espaco": "fisico",
        "bastidor": "Cálculo das zonas de treino",
        "fonte": "primaria"
      },
      {
        "ordem": 3,
        "etapa": "Alvos no treino",
        "quando": "2 semanas",
        "pessoa": "Treina com alvos que são seus",
        "profissional": "Educador físico",
        "espaco": "misto",
        "bastidor": "Zonas registradas no plano",
        "fonte": "primaria"
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
        "de": "paciente",
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
        "fonte": "primaria"
      },
      {
        "ordem": 2,
        "etapa": "O exame",
        "quando": "mês 0",
        "pessoa": "Faz a tomografia no Einstein",
        "profissional": "Equipe de imagem",
        "espaco": "fisico",
        "bastidor": "Agendamento e laudo",
        "fonte": "primaria"
      },
      {
        "ordem": 3,
        "etapa": "O risco visto",
        "quando": "2 semanas",
        "pessoa": "Vê o próprio risco, não uma estimativa",
        "profissional": "Médico",
        "espaco": "misto",
        "bastidor": "Laudo integrado ao Mapa",
        "fonte": "primaria"
      },
      {
        "ordem": 4,
        "etapa": "Se houver achado",
        "quando": "2 semanas",
        "pessoa": "",
        "profissional": "Cardiologista",
        "espaco": "fisico",
        "bastidor": "Investigação dirigida no Einstein",
        "fonte": "primaria"
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
        "de": "paciente",
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
        "fonte": "primaria"
      },
      {
        "ordem": 2,
        "etapa": "Processamento",
        "quando": "4 a 6 semanas",
        "pessoa": "",
        "profissional": "Parceiro externo",
        "espaco": "digital",
        "bastidor": "Metilação processada fora",
        "fonte": "primaria"
      },
      {
        "ordem": 3,
        "etapa": "A idade biológica",
        "quando": "2 meses",
        "pessoa": "Vê a própria idade biológica",
        "profissional": "Médico",
        "espaco": "misto",
        "bastidor": "Resultado anexado ao Mapa",
        "fonte": "primaria"
      },
      {
        "ordem": 4,
        "etapa": "O reteste",
        "quando": "12 meses",
        "pessoa": "Compara com o ano anterior",
        "profissional": "Médico",
        "espaco": "fisico",
        "bastidor": "Série histórica no prontuário",
        "fonte": "inferencia"
      }
    ]
  },
  {
    "id": "curadoria",
    "nome": "Entrada de curadoria (exames de fora)",
    "apelido": "Curadoria",
    "entrega": "Leitura dos exames que o cliente já tem: completa só o que falta e canaliza para os eixos.",
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
        "de": "paciente",
        "para": "centro",
        "oque": "serviço de curadoria e canalização",
        "tipo": "confirmar",
        "enq": "particular"
      }
    ],
    "jornada": [
      {
        "ordem": 1,
        "etapa": "Envia o que já tem",
        "quando": "antes do dia 0",
        "pessoa": "Manda os exames que já fez",
        "profissional": "— autosserviço",
        "espaco": "digital",
        "bastidor": "Ingestão dos arquivos",
        "fonte": "inferencia"
      },
      {
        "ordem": 2,
        "etapa": "Leitura e validação",
        "quando": "antes do dia 0",
        "pessoa": "",
        "profissional": "Equipe clínica",
        "espaco": "fisico",
        "bastidor": "Lê, valida e identifica as lacunas",
        "fonte": "inferencia"
      },
      {
        "ordem": 3,
        "etapa": "Só o que falta",
        "quando": "dia 0",
        "pessoa": "Faz apenas os exames que faltam",
        "profissional": "Equipe de avaliação",
        "espaco": "fisico",
        "bastidor": "Pedido reduzido ao necessário",
        "fonte": "inferencia"
      },
      {
        "ordem": 4,
        "etapa": "Mapa montado",
        "quando": "2 semanas",
        "pessoa": "Recebe o Mapa sem ter repetido nada",
        "profissional": "Médico",
        "espaco": "misto",
        "bastidor": "Prontuário com dado externo integrado",
        "fonte": "inferencia"
      }
    ]
  },
  {
    "id": "dossie",
    "nome": "Dossiê de Longevidade Funcional",
    "apelido": "Dossiê",
    "entrega": "Tudo o que foi medido integrado num mapa só: cada domínio classificado em favorável, aprimorar ou priorizar — e o cuidado direcionado aos eixos.",
    "estagio": "pescoco",
    "tags": [],
    "cluster": "",
    "eixo": "",
    "alimenta": [],
    "fluxos": [
      {
        "de": "paciente",
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
        "fonte": "primaria"
      },
      {
        "ordem": 2,
        "etapa": "O Mapa",
        "quando": "2 semanas",
        "pessoa": "Vê os seis domínios classificados: favorável, aprimorar, priorizar",
        "profissional": "Médico responsável",
        "espaco": "misto",
        "bastidor": "Laudo completo no app Meu Einstein",
        "fonte": "primaria"
      },
      {
        "ordem": 3,
        "etapa": "As prioridades",
        "quando": "2 semanas",
        "pessoa": "Sai com o que fazer primeiro, em linguagem dele",
        "profissional": "Médico responsável",
        "espaco": "misto",
        "bastidor": "Encaminhamento para os eixos de modulação",
        "fonte": "primaria"
      },
      {
        "ordem": 4,
        "etapa": "Reavaliação",
        "quando": "6 meses",
        "pessoa": "Refaz as medidas e compara",
        "profissional": "Equipe de avaliação",
        "espaco": "fisico",
        "bastidor": "O dossiê é reescrito com a evolução",
        "fonte": "primaria"
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
        "de": "paciente",
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
        "fonte": "primaria"
      },
      {
        "ordem": 2,
        "etapa": "A noite de exame",
        "quando": "1 mês",
        "pessoa": "Dorme uma noite no Einstein",
        "profissional": "Equipe do laboratório do sono",
        "espaco": "fisico",
        "bastidor": "Aquisição e laudo",
        "fonte": "primaria"
      },
      {
        "ordem": 3,
        "etapa": "Cobertura",
        "quando": "1 mês",
        "pessoa": "",
        "profissional": "Equipe administrativa",
        "espaco": "fisico",
        "bastidor": "Autorização junto à operadora",
        "fonte": "primaria"
      },
      {
        "ordem": 4,
        "etapa": "O plano de sono",
        "quando": "6 semanas",
        "pessoa": "Recebe o plano de tratamento",
        "profissional": "Médico do sono",
        "espaco": "misto",
        "bastidor": "Laudo volta ao Centro",
        "fonte": "primaria"
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
        "de": "paciente",
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
        "fonte": "inferencia"
      },
      {
        "ordem": 2,
        "etapa": "Os exames",
        "quando": "1 mês",
        "pessoa": "Faz a ressonância e a coleta do ApoE",
        "profissional": "Equipe de imagem e laboratório",
        "espaco": "fisico",
        "bastidor": "RM pelo plano com indicação; ApoE particular",
        "fonte": "inferencia"
      },
      {
        "ordem": 3,
        "etapa": "Aconselhamento",
        "quando": "6 semanas",
        "pessoa": "Entende o que o risco herdado significa — e o que não significa",
        "profissional": "Aconselhamento genético",
        "espaco": "misto",
        "bastidor": "Laudo integrado ao dossiê",
        "fonte": "inferencia"
      },
      {
        "ordem": 4,
        "etapa": "O plano",
        "quando": "2 meses",
        "pessoa": "Sai com estímulo cognitivo e data de reavaliação",
        "profissional": "Médico responsável",
        "espaco": "misto",
        "bastidor": "Reavaliação no próximo ciclo",
        "fonte": "inferencia"
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
        "de": "paciente",
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
        "fonte": "inferencia"
      },
      {
        "ordem": 2,
        "etapa": "A coleta",
        "quando": "1 mês",
        "pessoa": "Uma coleta de sangue",
        "profissional": "Laboratório",
        "espaco": "fisico",
        "bastidor": "Amostra enviada ao parceiro",
        "fonte": "inferencia"
      },
      {
        "ordem": 3,
        "etapa": "O resultado",
        "quando": "2 meses",
        "pessoa": "Recebe o resultado explicado",
        "profissional": "Médico responsável",
        "espaco": "misto",
        "bastidor": "Sinal detectado abre investigação dirigida no Einstein",
        "fonte": "inferencia"
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
        "de": "paciente",
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
        "fonte": "primaria"
      },
      {
        "ordem": 2,
        "etapa": "Prescrição",
        "quando": "2 semanas",
        "pessoa": "Sai com a prescrição e a orientação",
        "profissional": "Médico",
        "espaco": "misto",
        "bastidor": "Receita emitida",
        "fonte": "primaria"
      },
      {
        "ordem": 3,
        "etapa": "Retirada",
        "quando": "mensal",
        "pessoa": "Retira a medicação na farmácia",
        "profissional": "Farmacêutico",
        "espaco": "fisico",
        "bastidor": "Fora do Centro",
        "fonte": "primaria"
      },
      {
        "ordem": 4,
        "etapa": "Ajuste",
        "quando": "contínuo",
        "pessoa": "",
        "profissional": "Médico e nutricionista",
        "espaco": "digital",
        "bastidor": "Dose ajustada pela resposta",
        "fonte": "primaria"
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
        "de": "paciente",
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
        "fonte": "primaria"
      },
      {
        "ordem": 2,
        "etapa": "A decisão",
        "quando": "2 semanas",
        "pessoa": "Entende o que os hormônios dizem",
        "profissional": "Médico",
        "espaco": "misto",
        "bastidor": "Decisão clínica registrada",
        "fonte": "primaria"
      },
      {
        "ordem": 3,
        "etapa": "Se indicado",
        "quando": "mensal",
        "pessoa": "Retira a medicação na farmácia",
        "profissional": "Farmacêutico",
        "espaco": "fisico",
        "bastidor": "Receita e acompanhamento",
        "fonte": "primaria"
      },
      {
        "ordem": 4,
        "etapa": "Reavaliação",
        "quando": "6 meses",
        "pessoa": "",
        "profissional": "Médico",
        "espaco": "fisico",
        "bastidor": "Dosagens reavaliadas no tempo",
        "fonte": "primaria"
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
        "de": "paciente",
        "para": "centro",
        "oque": "assinatura da saída — treino em pequeno grupo",
        "tipo": "pagamento",
        "enq": "particular"
      },
      {
        "de": "paciente",
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
        "fonte": "primaria"
      },
      {
        "ordem": 2,
        "etapa": "O treino",
        "quando": "1 a 8 por mês",
        "pessoa": "Treina em grupo de quatro, por medida",
        "profissional": "Educador físico",
        "espaco": "misto",
        "bastidor": "Agenda e sala",
        "fonte": "primaria"
      },
      {
        "ordem": 3,
        "etapa": "Ajuste de carga",
        "quando": "contínuo",
        "pessoa": "",
        "profissional": "Educador físico",
        "espaco": "digital",
        "bastidor": "Cargas ajustadas pela resposta",
        "fonte": "primaria"
      },
      {
        "ordem": 4,
        "etapa": "Reavaliação",
        "quando": "3 e 6 meses",
        "pessoa": "Refaz as medidas e vê o progresso",
        "profissional": "Educador físico e médico",
        "espaco": "fisico",
        "bastidor": "Novas medidas no Mapa",
        "fonte": "primaria"
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
        "de": "paciente",
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
        "fonte": "inferencia"
      },
      {
        "ordem": 2,
        "etapa": "As sessões",
        "quando": "semanal",
        "pessoa": "Faz biofeedback no Centro",
        "profissional": "Equipe de saúde mental",
        "espaco": "fisico",
        "bastidor": "Protocolo e sala",
        "fonte": "inferencia"
      },
      {
        "ordem": 3,
        "etapa": "A prática",
        "quando": "diária",
        "pessoa": "Pratica em casa, entre as sessões",
        "profissional": "— autosserviço",
        "espaco": "digital",
        "bastidor": "Acompanhamento da adesão",
        "fonte": "inferencia"
      }
    ]
  },
  {
    "id": "cpap",
    "nome": "Modulação circadiana (CPAP · medicações)",
    "apelido": "CPAP",
    "entrega": "Tratamento do sono (CPAP e medicação) com acompanhamento do Centro.",
    "estagio": "saida",
    "tags": [],
    "cluster": "",
    "eixo": "circadiana",
    "alimenta": [],
    "fluxos": [
      {
        "de": "paciente",
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
        "fonte": "primaria"
      },
      {
        "ordem": 2,
        "etapa": "Titulação",
        "quando": "2 meses",
        "pessoa": "Adapta o aparelho com ajuda",
        "profissional": "Equipe de medicina do sono",
        "espaco": "fisico",
        "bastidor": "Titulação registrada",
        "fonte": "primaria"
      },
      {
        "ordem": 3,
        "etapa": "Equipamento",
        "quando": "2 meses",
        "pessoa": "Recebe aparelho e insumos",
        "profissional": "Fornecedor",
        "espaco": "fisico",
        "bastidor": "Fora do Centro",
        "fonte": "primaria"
      },
      {
        "ordem": 4,
        "etapa": "Adesão",
        "quando": "contínuo",
        "pessoa": "",
        "profissional": "Equipe de medicina do sono",
        "espaco": "digital",
        "bastidor": "Adesão acompanhada à distância",
        "fonte": "primaria"
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
        "de": "paciente",
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
        "etapa": "Os dados fluem",
        "quando": "contínuo",
        "pessoa": "",
        "profissional": "Parceiro de tecnologia",
        "espaco": "digital",
        "bastidor": "Wearable alimenta a plataforma",
        "fonte": "primaria"
      },
      {
        "ordem": 2,
        "etapa": "A leitura",
        "quando": "contínuo",
        "pessoa": "",
        "profissional": "Navegador e IA",
        "espaco": "digital",
        "bastidor": "Lê e aciona quando importa",
        "fonte": "primaria"
      },
      {
        "ordem": 3,
        "etapa": "O toque",
        "quando": "semanal",
        "pessoa": "Recebe um contato por semana",
        "profissional": "Navegador",
        "espaco": "digital",
        "bastidor": "Contato ativo registrado",
        "fonte": "primaria"
      },
      {
        "ordem": 4,
        "etapa": "Sinal fora da curva",
        "quando": "quando desvia",
        "pessoa": "",
        "profissional": "Equipe clínica",
        "espaco": "digital",
        "bastidor": "Antecipa a reavaliação",
        "fonte": "primaria"
      }
    ]
  }
];
