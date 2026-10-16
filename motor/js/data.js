/* Versão pública enxuta — só o mapa e quem paga quem. */

var ATORES = {
  "paciente": {
    "nome": "PACIENTE",
    "papel": "pagador principal",
    "x": 450,
    "y": 40
  },
  "centro": {
    "nome": "CENTRO DE LONGEVIDADE",
    "papel": "provedor · entrada e saída",
    "x": 450,
    "y": 650
  },
  "diagnostico": {
    "nome": "EINSTEIN DIAGNÓSTICO",
    "papel": "o pescoço do funil",
    "x": 140,
    "y": 670
  },
  "operadora": {
    "nome": "OPERADORA",
    "papel": "paga só com indicação",
    "x": 760,
    "y": 670
  },
  "farmacia": {
    "nome": "FARMÁCIA",
    "papel": "recebe a prescrição",
    "x": 760,
    "y": 1010
  },
  "parceiro": {
    "nome": "PARCEIRO",
    "papel": "IA · wearable · tech",
    "x": 140,
    "y": 1010
  }
};

var TECNOLOGIAS = [
  {
    "id": "biologix",
    "grupo": "ENTRADA · metrificação",
    "nome": "Biologix (triagem do sono)",
    "apelido": "Biologix",
    "estagio": "entrada",
    "tags": [
      "Core 40+",
      "Frontier 40+",
      "Performance 20+"
    ],
    "fluxos": [
      {
        "de": "paciente",
        "para": "centro",
        "tipo": "confirmar",
        "f": "F2"
      },
      {
        "de": "centro",
        "para": "diagnostico",
        "tipo": "beneficio",
        "f": "→"
      }
    ]
  },
  {
    "id": "dxa",
    "grupo": "ENTRADA · metrificação",
    "nome": "Densitometria de corpo total (DXA)",
    "apelido": "DXA",
    "estagio": "entrada",
    "tags": [
      "Core 40+",
      "serve 2 eixos da saída"
    ],
    "fluxos": [
      {
        "de": "paciente",
        "para": "centro",
        "tipo": "pagamento",
        "f": "F2"
      }
    ]
  },
  {
    "id": "vo2",
    "grupo": "ENTRADA · metrificação",
    "nome": "Ergoespirometria (VO₂)",
    "apelido": "VO₂",
    "estagio": "entrada",
    "tags": [
      "Core 40+",
      "Performance 20+"
    ],
    "fluxos": [
      {
        "de": "paciente",
        "para": "centro",
        "tipo": "pagamento",
        "f": "F2"
      },
      {
        "de": "operadora",
        "para": "centro",
        "tipo": "confirmar",
        "f": "F3"
      }
    ]
  },
  {
    "id": "angiotc",
    "grupo": "ENTRADA · metrificação",
    "nome": "Angio-TC com score de cálcio",
    "apelido": "Angio-TC",
    "estagio": "entrada",
    "tags": [
      "Frontier 40+"
    ],
    "fluxos": [
      {
        "de": "operadora",
        "para": "centro",
        "tipo": "confirmar",
        "f": "F3"
      },
      {
        "de": "paciente",
        "para": "centro",
        "tipo": "pagamento",
        "f": "F2"
      },
      {
        "de": "centro",
        "para": "diagnostico",
        "tipo": "beneficio",
        "f": "→"
      }
    ]
  },
  {
    "id": "tru",
    "grupo": "ENTRADA · metrificação",
    "nome": "Relógio biológico (Trü)",
    "apelido": "Trü",
    "estagio": "entrada",
    "tags": [
      "Frontier 40+"
    ],
    "fluxos": [
      {
        "de": "paciente",
        "para": "centro",
        "tipo": "pagamento",
        "f": "F2"
      },
      {
        "de": "centro",
        "para": "parceiro",
        "tipo": "confirmar",
        "f": "—"
      }
    ]
  },
  {
    "id": "curadoria",
    "grupo": "ENTRADA · metrificação",
    "nome": "Entrada de curadoria (exames de fora)",
    "apelido": "Curadoria",
    "estagio": "entrada",
    "tags": [
      "segunda porta"
    ],
    "fluxos": [
      {
        "de": "paciente",
        "para": "centro",
        "tipo": "confirmar",
        "f": "—"
      }
    ]
  },
  {
    "id": "polissono",
    "grupo": "PESCOÇO · diagnóstico com indicação",
    "nome": "Polissonografia",
    "apelido": "Polissonografia",
    "estagio": "pescoco",
    "tags": [
      "Einstein, fora do pacote"
    ],
    "fluxos": [
      {
        "de": "operadora",
        "para": "diagnostico",
        "tipo": "confirmar",
        "f": "F3"
      },
      {
        "de": "paciente",
        "para": "diagnostico",
        "tipo": "confirmar",
        "f": "—"
      }
    ]
  },
  {
    "id": "glp1",
    "grupo": "SAÍDA · os 6 eixos moduladores",
    "nome": "Modulação metabólica (GLP-1)",
    "apelido": "GLP-1",
    "estagio": "saida",
    "tags": [
      "nutrição de precisão"
    ],
    "fluxos": [
      {
        "de": "paciente",
        "para": "centro",
        "tipo": "pagamento",
        "f": "F1"
      },
      {
        "de": "paciente",
        "para": "farmacia",
        "tipo": "confirmar",
        "f": "F4"
      },
      {
        "de": "operadora",
        "para": "centro",
        "tipo": "pagamento",
        "f": "F3"
      }
    ]
  },
  {
    "id": "hormonal",
    "grupo": "SAÍDA · os 6 eixos moduladores",
    "nome": "Modulação hormonal",
    "apelido": "Hormonal",
    "estagio": "saida",
    "tags": [
      "modulação hormonal"
    ],
    "fluxos": [
      {
        "de": "paciente",
        "para": "centro",
        "tipo": "pagamento",
        "f": "F1"
      },
      {
        "de": "operadora",
        "para": "centro",
        "tipo": "pagamento",
        "f": "F3"
      },
      {
        "de": "paciente",
        "para": "farmacia",
        "tipo": "confirmar",
        "f": "F4"
      }
    ]
  },
  {
    "id": "treino",
    "grupo": "SAÍDA · os 6 eixos moduladores",
    "nome": "Exercício de precisão (grupo de 4 · 1-1 avulso)",
    "apelido": "Treino",
    "estagio": "saida",
    "tags": [
      "exercício de precisão"
    ],
    "fluxos": [
      {
        "de": "paciente",
        "para": "centro",
        "tipo": "pagamento",
        "f": "F1"
      },
      {
        "de": "paciente",
        "para": "centro",
        "tipo": "confirmar",
        "f": "F5"
      }
    ]
  },
  {
    "id": "autonomica",
    "grupo": "SAÍDA · os 6 eixos moduladores",
    "nome": "Biofeedback e mindfulness (autonômica)",
    "apelido": "Autonômica",
    "estagio": "saida",
    "tags": [
      "modulação autonômica"
    ],
    "fluxos": [
      {
        "de": "paciente",
        "para": "centro",
        "tipo": "confirmar",
        "f": "F1/—"
      }
    ]
  },
  {
    "id": "cpap",
    "grupo": "SAÍDA · os 6 eixos moduladores",
    "nome": "Modulação circadiana (CPAP · medicações)",
    "apelido": "Circadiana",
    "estagio": "saida",
    "tags": [
      "modulação circadiana"
    ],
    "fluxos": [
      {
        "de": "paciente",
        "para": "centro",
        "tipo": "pagamento",
        "f": "F1"
      },
      {
        "de": "paciente",
        "para": "farmacia",
        "tipo": "confirmar",
        "f": "F4"
      },
      {
        "de": "centro",
        "para": "operadora",
        "tipo": "beneficio",
        "f": "F11"
      }
    ]
  },
  {
    "id": "alwayscare",
    "grupo": "TRILHA CONTÍNUA",
    "nome": "Plataforma Always Care (IA + navegador)",
    "apelido": "Always Care",
    "estagio": "saida",
    "tags": [
      "trilha digital · contínua"
    ],
    "fluxos": [
      {
        "de": "paciente",
        "para": "centro",
        "tipo": "pagamento",
        "f": "F1"
      },
      {
        "de": "centro",
        "para": "parceiro",
        "tipo": "confirmar",
        "f": "F7"
      },
      {
        "de": "centro",
        "para": "operadora",
        "tipo": "beneficio",
        "f": "F11"
      }
    ]
  }
];
