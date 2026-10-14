const BPMN_MAP = {"prevencao": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<definitions xmlns=\"http://www.omg.org/spec/BPMN/20100524/MODEL\"\n  xmlns:bpmndi=\"http://www.omg.org/spec/BPMN/20100524/DI\"\n  xmlns:omgdc=\"http://www.omg.org/spec/DD/20100524/DC\"\n  xmlns:omgdi=\"http://www.omg.org/spec/DD/20100524/DI\"\n  xmlns:color=\"http://www.omg.org/spec/BPMN/non-normative/color/1.0\"\n  targetNamespace=\"http://einstein.br/longevidade/prevencao\">\n  <collaboration id=\"collab_prevencao\">\n    <participant id=\"pool_prevencao\" name=\"Prevencao (Core) — Jornada do Cliente\" processRef=\"proc_prevencao\"/>\n  </collaboration>\n  <process id=\"proc_prevencao\" name=\"Jornada — Prevencao\" isExecutable=\"false\">\n    <laneSet id=\"ls_prevencao\">\n    <lane id=\"lane_com\" name=\"Comercial / Financeiro\">\n      <flowNodeRef>s_start</flowNodeRef>\n      <flowNodeRef>com0</flowNodeRef>\n      <flowNodeRef>com3b</flowNodeRef>\n      <flowNodeRef>com4</flowNodeRef>\n      <flowNodeRef>com6</flowNodeRef>\n      <flowNodeRef>com3a</flowNodeRef>\n      <flowNodeRef>s_end</flowNodeRef>\n    </lane>\n    <lane id=\"lane_gua\" name=\"Guardiao da Jornada\">\n      <flowNodeRef>gua0</flowNodeRef>\n      <flowNodeRef>gua1</flowNodeRef>\n      <flowNodeRef>gua4</flowNodeRef>\n      <flowNodeRef>gua6</flowNodeRef>\n    </lane>\n    <lane id=\"lane_ast\" name=\"Assistencial\">\n      <flowNodeRef>ast6</flowNodeRef>\n      <flowNodeRef>ast2</flowNodeRef>\n      <flowNodeRef>ast5</flowNodeRef>\n    </lane>\n    </laneSet>\n    <startEvent id=\"s_start\" name=\"Entrada\"><outgoing>sf_0</outgoing></startEvent>\n    <endEvent id=\"s_end\" name=\"Fim\"><incoming>sf_13</incoming></endEvent>\n    <task id=\"com0\" name=\"Registro\ndo lead\">\n      <documentation>Cadastro comercial inicial do interessado.</documentation>\n      <incoming>sf_0</incoming><outgoing>sf_1</outgoing>\n    </task>\n    <task id=\"gua0\" name=\"Acolhimento\ne triagem\">\n      <documentation>Enfermeiro navegador recebe e faz a triagem inicial de necessidade — autoridade legal de triagem (COFEN 661/2021).</documentation>\n      <incoming>sf_1</incoming><outgoing>sf_2</outgoing>\n    </task>\n    <task id=\"gua1\" name=\"Recomendacao\nde nivel\">\n      <documentation>Guardiao da jornada recomenda Prevencao, Aceleracao ou Sob Medida com base na triagem.</documentation>\n      <incoming>sf_2</incoming><outgoing>sf_3</outgoing>\n    </task>\n    <task id=\"com3b\" name=\"⚠️ Validar\nenquadramento ANS\">\n      <documentation>[CRITICO] Calcanhar de Aquiles do projeto: responsavel de compliance ainda nao nomeado. Chamamento Publico ANS no 004/2026 em curso, sem desfecho ate 29/09/2026.</documentation>\n      <incoming>sf_4</incoming><outgoing>sf_5</outgoing>\n    </task>\n    <task id=\"com4\" name=\"Emitir contrato\n/ assinatura\">\n      <documentation>Formalizacao e ativacao do plano de cuidado.</documentation>\n      <incoming>sf_5</incoming><outgoing>sf_6</outgoing>\n    </task>\n    <task id=\"gua4\" name=\"Onboarding\npos-assinatura\">\n      <documentation>Guardiao da jornada inicia a cadencia de contato.</documentation>\n      <incoming>sf_6</incoming><outgoing>sf_7</outgoing><outgoing>sf_8</outgoing>\n    </task>\n    <task id=\"ast6\" name=\"Reavaliacao\nperiodica\">\n      <documentation>3 / 6 / 12 meses, conforme a jornada hibrida presencial + digital.</documentation>\n      <incoming>sf_9</incoming><incoming>sf_10</incoming><outgoing>sf_11</outgoing>\n    </task>\n    <task id=\"com6\" name=\"Faturamento\nrecorrente\">\n      <documentation>Cobranca recorrente do plano de cuidado.</documentation>\n      <incoming>sf_11</incoming><outgoing>sf_13</outgoing>\n    </task>\n    <task id=\"ast2\" name=\"Avaliacao clinica\nampla anual\">\n      <documentation>Exames de rastreio padrao + consulta clinica geral.</documentation>\n      <incoming>sf_3</incoming><outgoing>sf_12</outgoing>\n    </task>\n    <task id=\"com3a\" name=\"Pacote majorit.\nreembolsavel\">\n      <documentation>Maior compatibilidade com a Lei 14.454/2022 — caminho de reembolso mais direto entre os 3 niveis.</documentation>\n      <incoming>sf_12</incoming><outgoing>sf_4</outgoing>\n    </task>\n    <task id=\"ast5\" name=\"Execucao do\nprotocolo Core\">\n      <documentation>Consultas e exames de rotina conforme calendario anual.</documentation>\n      <incoming>sf_7</incoming><outgoing>sf_9</outgoing>\n    </task>\n    <task id=\"gua6\" name=\"Cadencia de\ncontato ativo\">\n      <documentation>Contato ativo do guardiao da jornada entre os encontros; a frequencia ainda nao foi definida.</documentation>\n      <incoming>sf_8</incoming><outgoing>sf_10</outgoing>\n    </task>\n    <sequenceFlow id=\"sf_0\" sourceRef=\"s_start\" targetRef=\"com0\"/>\n    <sequenceFlow id=\"sf_1\" sourceRef=\"com0\" targetRef=\"gua0\"/>\n    <sequenceFlow id=\"sf_2\" sourceRef=\"gua0\" targetRef=\"gua1\"/>\n    <sequenceFlow id=\"sf_3\" sourceRef=\"gua1\" targetRef=\"ast2\"/>\n    <sequenceFlow id=\"sf_4\" sourceRef=\"com3a\" targetRef=\"com3b\"/>\n    <sequenceFlow id=\"sf_5\" sourceRef=\"com3b\" targetRef=\"com4\"/>\n    <sequenceFlow id=\"sf_6\" sourceRef=\"com4\" targetRef=\"gua4\"/>\n    <sequenceFlow id=\"sf_7\" sourceRef=\"gua4\" targetRef=\"ast5\"/>\n    <sequenceFlow id=\"sf_8\" sourceRef=\"gua4\" targetRef=\"gua6\"/>\n    <sequenceFlow id=\"sf_9\" sourceRef=\"ast5\" targetRef=\"ast6\"/>\n    <sequenceFlow id=\"sf_10\" sourceRef=\"gua6\" targetRef=\"ast6\"/>\n    <sequenceFlow id=\"sf_11\" sourceRef=\"ast6\" targetRef=\"com6\"/>\n    <sequenceFlow id=\"sf_12\" sourceRef=\"ast2\" targetRef=\"com3a\"/>\n    <sequenceFlow id=\"sf_13\" sourceRef=\"com6\" targetRef=\"s_end\"/>\n  </process>\n  <bpmndi:BPMNDiagram id=\"dia_prevencao\">\n    <bpmndi:BPMNPlane id=\"plane_prevencao\" bpmnElement=\"collab_prevencao\">\n      <bpmndi:BPMNShape id=\"dishape_pool_prevencao\" bpmnElement=\"pool_prevencao\" isHorizontal=\"true\">\n        <omgdc:Bounds x=\"0\" y=\"0\" width=\"2140\" height=\"480\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dilane_com\" bpmnElement=\"lane_com\" isHorizontal=\"true\">\n        <omgdc:Bounds x=\"30\" y=\"30\" width=\"2110\" height=\"150\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dilane_gua\" bpmnElement=\"lane_gua\" isHorizontal=\"true\">\n        <omgdc:Bounds x=\"30\" y=\"180\" width=\"2110\" height=\"150\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dilane_ast\" bpmnElement=\"lane_ast\" isHorizontal=\"true\">\n        <omgdc:Bounds x=\"30\" y=\"330\" width=\"2110\" height=\"150\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_s_start\" bpmnElement=\"s_start\" color:background-color=\"#FFFFFF\" color:border-color=\"#0F7A64\">\n        <omgdc:Bounds x=\"134\" y=\"87\" width=\"36\" height=\"36\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_s_end\" bpmnElement=\"s_end\" color:background-color=\"#FFFFFF\" color:border-color=\"#0C3A6F\">\n        <omgdc:Bounds x=\"1910\" y=\"87\" width=\"36\" height=\"36\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_com0\" bpmnElement=\"com0\" color:background-color=\"#DFECFB\" color:border-color=\"#1C7CF9\">\n        <omgdc:Bounds x=\"230\" y=\"72\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_gua0\" bpmnElement=\"gua0\" color:background-color=\"#E3E9F2\" color:border-color=\"#0C3A6F\">\n        <omgdc:Bounds x=\"230\" y=\"222\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_gua1\" bpmnElement=\"gua1\" color:background-color=\"#E3E9F2\" color:border-color=\"#0C3A6F\">\n        <omgdc:Bounds x=\"440\" y=\"222\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_com3b\" bpmnElement=\"com3b\" color:background-color=\"#F7E4CC\" color:border-color=\"#9C5518\">\n        <omgdc:Bounds x=\"1070\" y=\"72\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_com4\" bpmnElement=\"com4\" color:background-color=\"#DFECFB\" color:border-color=\"#1C7CF9\">\n        <omgdc:Bounds x=\"1280\" y=\"72\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_gua4\" bpmnElement=\"gua4\" color:background-color=\"#E3E9F2\" color:border-color=\"#0C3A6F\">\n        <omgdc:Bounds x=\"1280\" y=\"222\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_ast6\" bpmnElement=\"ast6\" color:background-color=\"#DEF2EC\" color:border-color=\"#0F7A64\">\n        <omgdc:Bounds x=\"1700\" y=\"372\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_com6\" bpmnElement=\"com6\" color:background-color=\"#DFECFB\" color:border-color=\"#1C7CF9\">\n        <omgdc:Bounds x=\"1700\" y=\"72\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_ast2\" bpmnElement=\"ast2\" color:background-color=\"#DEF2EC\" color:border-color=\"#0F7A64\">\n        <omgdc:Bounds x=\"650\" y=\"372\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_com3a\" bpmnElement=\"com3a\" color:background-color=\"#DFECFB\" color:border-color=\"#1C7CF9\">\n        <omgdc:Bounds x=\"860\" y=\"72\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_ast5\" bpmnElement=\"ast5\" color:background-color=\"#DEF2EC\" color:border-color=\"#0F7A64\">\n        <omgdc:Bounds x=\"1490\" y=\"372\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_gua6\" bpmnElement=\"gua6\" color:background-color=\"#E3E9F2\" color:border-color=\"#0C3A6F\">\n        <omgdc:Bounds x=\"1700\" y=\"222\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id=\"diedge_sf_0\" bpmnElement=\"sf_0\"><omgdi:waypoint x=\"170.0\" y=\"105.0\"/><omgdi:waypoint x=\"230.0\" y=\"105.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_1\" bpmnElement=\"sf_1\"><omgdi:waypoint x=\"380.0\" y=\"105.0\"/><omgdi:waypoint x=\"305.0\" y=\"105.0\"/><omgdi:waypoint x=\"305.0\" y=\"255.0\"/><omgdi:waypoint x=\"230.0\" y=\"255.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_2\" bpmnElement=\"sf_2\"><omgdi:waypoint x=\"380.0\" y=\"255.0\"/><omgdi:waypoint x=\"440.0\" y=\"255.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_3\" bpmnElement=\"sf_3\"><omgdi:waypoint x=\"590.0\" y=\"255.0\"/><omgdi:waypoint x=\"620.0\" y=\"255.0\"/><omgdi:waypoint x=\"620.0\" y=\"405.0\"/><omgdi:waypoint x=\"650.0\" y=\"405.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_4\" bpmnElement=\"sf_4\"><omgdi:waypoint x=\"1010.0\" y=\"105.0\"/><omgdi:waypoint x=\"1070.0\" y=\"105.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_5\" bpmnElement=\"sf_5\"><omgdi:waypoint x=\"1220.0\" y=\"105.0\"/><omgdi:waypoint x=\"1280.0\" y=\"105.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_6\" bpmnElement=\"sf_6\"><omgdi:waypoint x=\"1430.0\" y=\"105.0\"/><omgdi:waypoint x=\"1355.0\" y=\"105.0\"/><omgdi:waypoint x=\"1355.0\" y=\"255.0\"/><omgdi:waypoint x=\"1280.0\" y=\"255.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_7\" bpmnElement=\"sf_7\"><omgdi:waypoint x=\"1430.0\" y=\"255.0\"/><omgdi:waypoint x=\"1460.0\" y=\"255.0\"/><omgdi:waypoint x=\"1460.0\" y=\"405.0\"/><omgdi:waypoint x=\"1490.0\" y=\"405.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_8\" bpmnElement=\"sf_8\"><omgdi:waypoint x=\"1430.0\" y=\"255.0\"/><omgdi:waypoint x=\"1700.0\" y=\"255.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_9\" bpmnElement=\"sf_9\"><omgdi:waypoint x=\"1640.0\" y=\"405.0\"/><omgdi:waypoint x=\"1700.0\" y=\"405.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_10\" bpmnElement=\"sf_10\"><omgdi:waypoint x=\"1850.0\" y=\"255.0\"/><omgdi:waypoint x=\"1775.0\" y=\"255.0\"/><omgdi:waypoint x=\"1775.0\" y=\"405.0\"/><omgdi:waypoint x=\"1700.0\" y=\"405.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_11\" bpmnElement=\"sf_11\"><omgdi:waypoint x=\"1850.0\" y=\"405.0\"/><omgdi:waypoint x=\"1775.0\" y=\"405.0\"/><omgdi:waypoint x=\"1775.0\" y=\"105.0\"/><omgdi:waypoint x=\"1700.0\" y=\"105.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_12\" bpmnElement=\"sf_12\"><omgdi:waypoint x=\"800.0\" y=\"405.0\"/><omgdi:waypoint x=\"830.0\" y=\"405.0\"/><omgdi:waypoint x=\"830.0\" y=\"105.0\"/><omgdi:waypoint x=\"860.0\" y=\"105.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_13\" bpmnElement=\"sf_13\"><omgdi:waypoint x=\"1850.0\" y=\"105.0\"/><omgdi:waypoint x=\"1910.0\" y=\"105.0\"/></bpmndi:BPMNEdge>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</definitions>", "aceleracao": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<definitions xmlns=\"http://www.omg.org/spec/BPMN/20100524/MODEL\"\n  xmlns:bpmndi=\"http://www.omg.org/spec/BPMN/20100524/DI\"\n  xmlns:omgdc=\"http://www.omg.org/spec/DD/20100524/DC\"\n  xmlns:omgdi=\"http://www.omg.org/spec/DD/20100524/DI\"\n  xmlns:color=\"http://www.omg.org/spec/BPMN/non-normative/color/1.0\"\n  targetNamespace=\"http://einstein.br/longevidade/aceleracao\">\n  <collaboration id=\"collab_aceleracao\">\n    <participant id=\"pool_aceleracao\" name=\"Aceleracao (Frontier) — Jornada do Cliente\" processRef=\"proc_aceleracao\"/>\n  </collaboration>\n  <process id=\"proc_aceleracao\" name=\"Jornada — Aceleracao\" isExecutable=\"false\">\n    <laneSet id=\"ls_aceleracao\">\n    <lane id=\"lane_com\" name=\"Comercial / Financeiro\">\n      <flowNodeRef>s_start</flowNodeRef>\n      <flowNodeRef>com0</flowNodeRef>\n      <flowNodeRef>com3b</flowNodeRef>\n      <flowNodeRef>com4</flowNodeRef>\n      <flowNodeRef>com6</flowNodeRef>\n      <flowNodeRef>com3a</flowNodeRef>\n      <flowNodeRef>s_end</flowNodeRef>\n    </lane>\n    <lane id=\"lane_gua\" name=\"Guardiao da Jornada\">\n      <flowNodeRef>gua0</flowNodeRef>\n      <flowNodeRef>gua1</flowNodeRef>\n      <flowNodeRef>gua4</flowNodeRef>\n      <flowNodeRef>gua6</flowNodeRef>\n    </lane>\n    <lane id=\"lane_ast\" name=\"Assistencial\">\n      <flowNodeRef>ast6</flowNodeRef>\n      <flowNodeRef>ast2</flowNodeRef>\n      <flowNodeRef>ast5</flowNodeRef>\n    </lane>\n    </laneSet>\n    <startEvent id=\"s_start\" name=\"Entrada\"><outgoing>sf_0</outgoing></startEvent>\n    <endEvent id=\"s_end\" name=\"Fim\"><incoming>sf_13</incoming></endEvent>\n    <task id=\"com0\" name=\"Registro\ndo lead\">\n      <documentation>Cadastro comercial inicial do interessado.</documentation>\n      <incoming>sf_0</incoming><outgoing>sf_1</outgoing>\n    </task>\n    <task id=\"gua0\" name=\"Acolhimento\ne triagem\">\n      <documentation>Enfermeiro navegador recebe e faz a triagem inicial de necessidade — autoridade legal de triagem (COFEN 661/2021).</documentation>\n      <incoming>sf_1</incoming><outgoing>sf_2</outgoing>\n    </task>\n    <task id=\"gua1\" name=\"Recomendacao\nde nivel\">\n      <documentation>Guardiao da jornada recomenda Prevencao, Aceleracao ou Sob Medida com base na triagem.</documentation>\n      <incoming>sf_2</incoming><outgoing>sf_3</outgoing>\n    </task>\n    <task id=\"com3b\" name=\"⚠️ Validar\nenquadramento ANS\">\n      <documentation>[CRITICO] Calcanhar de Aquiles do projeto: responsavel de compliance ainda nao nomeado. Chamamento Publico ANS no 004/2026 em curso, sem desfecho ate 29/09/2026.</documentation>\n      <incoming>sf_4</incoming><outgoing>sf_5</outgoing>\n    </task>\n    <task id=\"com4\" name=\"Emitir contrato\n/ assinatura\">\n      <documentation>Formalizacao e ativacao do plano de cuidado.</documentation>\n      <incoming>sf_5</incoming><outgoing>sf_6</outgoing>\n    </task>\n    <task id=\"gua4\" name=\"Onboarding\npos-assinatura\">\n      <documentation>Guardiao da jornada inicia a cadencia de contato.</documentation>\n      <incoming>sf_6</incoming><outgoing>sf_7</outgoing><outgoing>sf_8</outgoing>\n    </task>\n    <task id=\"ast6\" name=\"Reavaliacao\nperiodica\">\n      <documentation>3 / 6 / 12 meses, conforme a jornada hibrida presencial + digital.</documentation>\n      <incoming>sf_9</incoming><incoming>sf_10</incoming><outgoing>sf_11</outgoing>\n    </task>\n    <task id=\"com6\" name=\"Faturamento\nrecorrente\">\n      <documentation>Cobranca recorrente do plano de cuidado.</documentation>\n      <incoming>sf_11</incoming><outgoing>sf_13</outgoing>\n    </task>\n    <task id=\"ast2\" name=\"Protocolos de\ninvestigacao avancada\">\n      <documentation>Biomarcadores avancados e metas de performance mensuraveis.</documentation>\n      <incoming>sf_3</incoming><outgoing>sf_12</outgoing>\n    </task>\n    <task id=\"com3a\" name=\"⚠ Pacote misto\nreembolsavel+particular\">\n      <documentation>[GAP] Composicao item a item — parte cai na Lei 14.454, parte e particular. GAP #1 ainda sem desenho fechado.</documentation>\n      <incoming>sf_12</incoming><outgoing>sf_4</outgoing>\n    </task>\n    <task id=\"ast5\" name=\"Execucao do\nprotocolo Aceleracao\">\n      <documentation>Reavaliacoes mais frequentes de biomarcadores.</documentation>\n      <incoming>sf_7</incoming><outgoing>sf_9</outgoing>\n    </task>\n    <task id=\"gua6\" name=\"Cadencia de\ncontato ativo\">\n      <documentation>Contato ativo mais frequente, dado o volume de dados de performance.</documentation>\n      <incoming>sf_8</incoming><outgoing>sf_10</outgoing>\n    </task>\n    <sequenceFlow id=\"sf_0\" sourceRef=\"s_start\" targetRef=\"com0\"/>\n    <sequenceFlow id=\"sf_1\" sourceRef=\"com0\" targetRef=\"gua0\"/>\n    <sequenceFlow id=\"sf_2\" sourceRef=\"gua0\" targetRef=\"gua1\"/>\n    <sequenceFlow id=\"sf_3\" sourceRef=\"gua1\" targetRef=\"ast2\"/>\n    <sequenceFlow id=\"sf_4\" sourceRef=\"com3a\" targetRef=\"com3b\"/>\n    <sequenceFlow id=\"sf_5\" sourceRef=\"com3b\" targetRef=\"com4\"/>\n    <sequenceFlow id=\"sf_6\" sourceRef=\"com4\" targetRef=\"gua4\"/>\n    <sequenceFlow id=\"sf_7\" sourceRef=\"gua4\" targetRef=\"ast5\"/>\n    <sequenceFlow id=\"sf_8\" sourceRef=\"gua4\" targetRef=\"gua6\"/>\n    <sequenceFlow id=\"sf_9\" sourceRef=\"ast5\" targetRef=\"ast6\"/>\n    <sequenceFlow id=\"sf_10\" sourceRef=\"gua6\" targetRef=\"ast6\"/>\n    <sequenceFlow id=\"sf_11\" sourceRef=\"ast6\" targetRef=\"com6\"/>\n    <sequenceFlow id=\"sf_12\" sourceRef=\"ast2\" targetRef=\"com3a\"/>\n    <sequenceFlow id=\"sf_13\" sourceRef=\"com6\" targetRef=\"s_end\"/>\n  </process>\n  <bpmndi:BPMNDiagram id=\"dia_aceleracao\">\n    <bpmndi:BPMNPlane id=\"plane_aceleracao\" bpmnElement=\"collab_aceleracao\">\n      <bpmndi:BPMNShape id=\"dishape_pool_aceleracao\" bpmnElement=\"pool_aceleracao\" isHorizontal=\"true\">\n        <omgdc:Bounds x=\"0\" y=\"0\" width=\"2140\" height=\"480\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dilane_com\" bpmnElement=\"lane_com\" isHorizontal=\"true\">\n        <omgdc:Bounds x=\"30\" y=\"30\" width=\"2110\" height=\"150\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dilane_gua\" bpmnElement=\"lane_gua\" isHorizontal=\"true\">\n        <omgdc:Bounds x=\"30\" y=\"180\" width=\"2110\" height=\"150\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dilane_ast\" bpmnElement=\"lane_ast\" isHorizontal=\"true\">\n        <omgdc:Bounds x=\"30\" y=\"330\" width=\"2110\" height=\"150\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_s_start\" bpmnElement=\"s_start\" color:background-color=\"#FFFFFF\" color:border-color=\"#0F7A64\">\n        <omgdc:Bounds x=\"134\" y=\"87\" width=\"36\" height=\"36\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_s_end\" bpmnElement=\"s_end\" color:background-color=\"#FFFFFF\" color:border-color=\"#0C3A6F\">\n        <omgdc:Bounds x=\"1910\" y=\"87\" width=\"36\" height=\"36\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_com0\" bpmnElement=\"com0\" color:background-color=\"#DFECFB\" color:border-color=\"#1C7CF9\">\n        <omgdc:Bounds x=\"230\" y=\"72\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_gua0\" bpmnElement=\"gua0\" color:background-color=\"#E3E9F2\" color:border-color=\"#0C3A6F\">\n        <omgdc:Bounds x=\"230\" y=\"222\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_gua1\" bpmnElement=\"gua1\" color:background-color=\"#E3E9F2\" color:border-color=\"#0C3A6F\">\n        <omgdc:Bounds x=\"440\" y=\"222\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_com3b\" bpmnElement=\"com3b\" color:background-color=\"#F7E4CC\" color:border-color=\"#9C5518\">\n        <omgdc:Bounds x=\"1070\" y=\"72\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_com4\" bpmnElement=\"com4\" color:background-color=\"#DFECFB\" color:border-color=\"#1C7CF9\">\n        <omgdc:Bounds x=\"1280\" y=\"72\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_gua4\" bpmnElement=\"gua4\" color:background-color=\"#E3E9F2\" color:border-color=\"#0C3A6F\">\n        <omgdc:Bounds x=\"1280\" y=\"222\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_ast6\" bpmnElement=\"ast6\" color:background-color=\"#DEF2EC\" color:border-color=\"#0F7A64\">\n        <omgdc:Bounds x=\"1700\" y=\"372\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_com6\" bpmnElement=\"com6\" color:background-color=\"#DFECFB\" color:border-color=\"#1C7CF9\">\n        <omgdc:Bounds x=\"1700\" y=\"72\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_ast2\" bpmnElement=\"ast2\" color:background-color=\"#DEF2EC\" color:border-color=\"#0F7A64\">\n        <omgdc:Bounds x=\"650\" y=\"372\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_com3a\" bpmnElement=\"com3a\" color:background-color=\"#F7E4CC\" color:border-color=\"#9C5518\">\n        <omgdc:Bounds x=\"860\" y=\"72\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_ast5\" bpmnElement=\"ast5\" color:background-color=\"#DEF2EC\" color:border-color=\"#0F7A64\">\n        <omgdc:Bounds x=\"1490\" y=\"372\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_gua6\" bpmnElement=\"gua6\" color:background-color=\"#E3E9F2\" color:border-color=\"#0C3A6F\">\n        <omgdc:Bounds x=\"1700\" y=\"222\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id=\"diedge_sf_0\" bpmnElement=\"sf_0\"><omgdi:waypoint x=\"170.0\" y=\"105.0\"/><omgdi:waypoint x=\"230.0\" y=\"105.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_1\" bpmnElement=\"sf_1\"><omgdi:waypoint x=\"380.0\" y=\"105.0\"/><omgdi:waypoint x=\"305.0\" y=\"105.0\"/><omgdi:waypoint x=\"305.0\" y=\"255.0\"/><omgdi:waypoint x=\"230.0\" y=\"255.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_2\" bpmnElement=\"sf_2\"><omgdi:waypoint x=\"380.0\" y=\"255.0\"/><omgdi:waypoint x=\"440.0\" y=\"255.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_3\" bpmnElement=\"sf_3\"><omgdi:waypoint x=\"590.0\" y=\"255.0\"/><omgdi:waypoint x=\"620.0\" y=\"255.0\"/><omgdi:waypoint x=\"620.0\" y=\"405.0\"/><omgdi:waypoint x=\"650.0\" y=\"405.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_4\" bpmnElement=\"sf_4\"><omgdi:waypoint x=\"1010.0\" y=\"105.0\"/><omgdi:waypoint x=\"1070.0\" y=\"105.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_5\" bpmnElement=\"sf_5\"><omgdi:waypoint x=\"1220.0\" y=\"105.0\"/><omgdi:waypoint x=\"1280.0\" y=\"105.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_6\" bpmnElement=\"sf_6\"><omgdi:waypoint x=\"1430.0\" y=\"105.0\"/><omgdi:waypoint x=\"1355.0\" y=\"105.0\"/><omgdi:waypoint x=\"1355.0\" y=\"255.0\"/><omgdi:waypoint x=\"1280.0\" y=\"255.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_7\" bpmnElement=\"sf_7\"><omgdi:waypoint x=\"1430.0\" y=\"255.0\"/><omgdi:waypoint x=\"1460.0\" y=\"255.0\"/><omgdi:waypoint x=\"1460.0\" y=\"405.0\"/><omgdi:waypoint x=\"1490.0\" y=\"405.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_8\" bpmnElement=\"sf_8\"><omgdi:waypoint x=\"1430.0\" y=\"255.0\"/><omgdi:waypoint x=\"1700.0\" y=\"255.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_9\" bpmnElement=\"sf_9\"><omgdi:waypoint x=\"1640.0\" y=\"405.0\"/><omgdi:waypoint x=\"1700.0\" y=\"405.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_10\" bpmnElement=\"sf_10\"><omgdi:waypoint x=\"1850.0\" y=\"255.0\"/><omgdi:waypoint x=\"1775.0\" y=\"255.0\"/><omgdi:waypoint x=\"1775.0\" y=\"405.0\"/><omgdi:waypoint x=\"1700.0\" y=\"405.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_11\" bpmnElement=\"sf_11\"><omgdi:waypoint x=\"1850.0\" y=\"405.0\"/><omgdi:waypoint x=\"1775.0\" y=\"405.0\"/><omgdi:waypoint x=\"1775.0\" y=\"105.0\"/><omgdi:waypoint x=\"1700.0\" y=\"105.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_12\" bpmnElement=\"sf_12\"><omgdi:waypoint x=\"800.0\" y=\"405.0\"/><omgdi:waypoint x=\"830.0\" y=\"405.0\"/><omgdi:waypoint x=\"830.0\" y=\"105.0\"/><omgdi:waypoint x=\"860.0\" y=\"105.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_13\" bpmnElement=\"sf_13\"><omgdi:waypoint x=\"1850.0\" y=\"105.0\"/><omgdi:waypoint x=\"1910.0\" y=\"105.0\"/></bpmndi:BPMNEdge>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</definitions>", "sobmedida": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<definitions xmlns=\"http://www.omg.org/spec/BPMN/20100524/MODEL\"\n  xmlns:bpmndi=\"http://www.omg.org/spec/BPMN/20100524/DI\"\n  xmlns:omgdc=\"http://www.omg.org/spec/DD/20100524/DC\"\n  xmlns:omgdi=\"http://www.omg.org/spec/DD/20100524/DI\"\n  xmlns:color=\"http://www.omg.org/spec/BPMN/non-normative/color/1.0\"\n  targetNamespace=\"http://einstein.br/longevidade/sobmedida\">\n  <collaboration id=\"collab_sobmedida\">\n    <participant id=\"pool_sobmedida\" name=\"Sob Medida (Individualizado) — Jornada do Cliente\" processRef=\"proc_sobmedida\"/>\n  </collaboration>\n  <process id=\"proc_sobmedida\" name=\"Jornada — Sob Medida\" isExecutable=\"false\">\n    <laneSet id=\"ls_sobmedida\">\n    <lane id=\"lane_com\" name=\"Comercial / Financeiro\">\n      <flowNodeRef>s_start</flowNodeRef>\n      <flowNodeRef>com0</flowNodeRef>\n      <flowNodeRef>com3b</flowNodeRef>\n      <flowNodeRef>com4</flowNodeRef>\n      <flowNodeRef>com6</flowNodeRef>\n      <flowNodeRef>com3a</flowNodeRef>\n      <flowNodeRef>s_end</flowNodeRef>\n    </lane>\n    <lane id=\"lane_gua\" name=\"Guardiao da Jornada\">\n      <flowNodeRef>gua0</flowNodeRef>\n      <flowNodeRef>gua1</flowNodeRef>\n      <flowNodeRef>gua4</flowNodeRef>\n      <flowNodeRef>gua6</flowNodeRef>\n    </lane>\n    <lane id=\"lane_ast\" name=\"Assistencial\">\n      <flowNodeRef>ast6</flowNodeRef>\n      <flowNodeRef>ast2</flowNodeRef>\n      <flowNodeRef>ast5</flowNodeRef>\n      <flowNodeRef>ast2b</flowNodeRef>\n    </lane>\n    </laneSet>\n    <startEvent id=\"s_start\" name=\"Entrada\"><outgoing>sf_0</outgoing></startEvent>\n    <endEvent id=\"s_end\" name=\"Fim\"><incoming>sf_14</incoming></endEvent>\n    <task id=\"com0\" name=\"Registro\ndo lead\">\n      <documentation>Cadastro comercial inicial do interessado.</documentation>\n      <incoming>sf_0</incoming><outgoing>sf_1</outgoing>\n    </task>\n    <task id=\"gua0\" name=\"Acolhimento\ne triagem\">\n      <documentation>Enfermeiro navegador recebe e faz a triagem inicial de necessidade — autoridade legal de triagem (COFEN 661/2021).</documentation>\n      <incoming>sf_1</incoming><outgoing>sf_2</outgoing>\n    </task>\n    <task id=\"gua1\" name=\"Recomendacao\nde nivel\">\n      <documentation>Guardiao da jornada recomenda Prevencao, Aceleracao ou Sob Medida com base na triagem.</documentation>\n      <incoming>sf_2</incoming><outgoing>sf_3</outgoing>\n    </task>\n    <task id=\"com3b\" name=\"⚠️ Validar\nenquadramento ANS\">\n      <documentation>[CRITICO] Calcanhar de Aquiles do projeto: responsavel de compliance ainda nao nomeado. Chamamento Publico ANS no 004/2026 em curso, sem desfecho ate 29/09/2026.</documentation>\n      <incoming>sf_4</incoming><outgoing>sf_5</outgoing>\n    </task>\n    <task id=\"com4\" name=\"Emitir contrato\n/ assinatura\">\n      <documentation>Formalizacao e ativacao do plano de cuidado.</documentation>\n      <incoming>sf_5</incoming><outgoing>sf_6</outgoing>\n    </task>\n    <task id=\"gua4\" name=\"Onboarding\npos-assinatura\">\n      <documentation>Guardiao da jornada inicia a cadencia de contato.</documentation>\n      <incoming>sf_6</incoming><outgoing>sf_7</outgoing><outgoing>sf_8</outgoing>\n    </task>\n    <task id=\"ast6\" name=\"Reavaliacao\nperiodica\">\n      <documentation>3 / 6 / 12 meses, conforme a jornada hibrida presencial + digital.</documentation>\n      <incoming>sf_9</incoming><incoming>sf_10</incoming><outgoing>sf_11</outgoing>\n    </task>\n    <task id=\"com6\" name=\"Faturamento\nrecorrente\">\n      <documentation>Cobranca recorrente do plano de cuidado.</documentation>\n      <incoming>sf_11</incoming><outgoing>sf_14</outgoing>\n    </task>\n    <task id=\"ast2\" name=\"⚠ Protocolo individualizado\n(genoma, RM corpo total)\">\n      <documentation>[GAP] Evidencia clinica ainda insuficiente em alguns itens — risco medico-legal se comunicado como garantia de resultado.</documentation>\n      <incoming>sf_3</incoming><outgoing>sf_12</outgoing>\n    </task>\n    <task id=\"com3a\" name=\"Pacote\n100% particular\">\n      <documentation>Sem negociacao de convenio — modelo mais simples comercialmente, porem mais caro ao cliente.</documentation>\n      <incoming>sf_13</incoming><outgoing>sf_4</outgoing>\n    </task>\n    <task id=\"ast5\" name=\"Execucao do\nprotocolo Sob Medida\">\n      <documentation>Time dedicado por caso, sem teto de escopo pre-definido.</documentation>\n      <incoming>sf_7</incoming><outgoing>sf_9</outgoing>\n    </task>\n    <task id=\"gua6\" name=\"Cadencia\nsob demanda\">\n      <documentation>Time dedicado; frequencia definida caso a caso.</documentation>\n      <incoming>sf_8</incoming><outgoing>sf_10</outgoing>\n    </task>\n    <task id=\"ast2b\" name=\"⚠️ Consentimento de\nincerteza cientifica\">\n      <documentation>[GAP/CRITICO] GAP #5 — protocolo de comunicacao de incerteza cientifica ainda nao desenhado. Necessario antes de vender resultado como certeza.</documentation>\n      <incoming>sf_12</incoming><outgoing>sf_13</outgoing>\n    </task>\n    <sequenceFlow id=\"sf_0\" sourceRef=\"s_start\" targetRef=\"com0\"/>\n    <sequenceFlow id=\"sf_1\" sourceRef=\"com0\" targetRef=\"gua0\"/>\n    <sequenceFlow id=\"sf_2\" sourceRef=\"gua0\" targetRef=\"gua1\"/>\n    <sequenceFlow id=\"sf_3\" sourceRef=\"gua1\" targetRef=\"ast2\"/>\n    <sequenceFlow id=\"sf_4\" sourceRef=\"com3a\" targetRef=\"com3b\"/>\n    <sequenceFlow id=\"sf_5\" sourceRef=\"com3b\" targetRef=\"com4\"/>\n    <sequenceFlow id=\"sf_6\" sourceRef=\"com4\" targetRef=\"gua4\"/>\n    <sequenceFlow id=\"sf_7\" sourceRef=\"gua4\" targetRef=\"ast5\"/>\n    <sequenceFlow id=\"sf_8\" sourceRef=\"gua4\" targetRef=\"gua6\"/>\n    <sequenceFlow id=\"sf_9\" sourceRef=\"ast5\" targetRef=\"ast6\"/>\n    <sequenceFlow id=\"sf_10\" sourceRef=\"gua6\" targetRef=\"ast6\"/>\n    <sequenceFlow id=\"sf_11\" sourceRef=\"ast6\" targetRef=\"com6\"/>\n    <sequenceFlow id=\"sf_12\" sourceRef=\"ast2\" targetRef=\"ast2b\"/>\n    <sequenceFlow id=\"sf_13\" sourceRef=\"ast2b\" targetRef=\"com3a\"/>\n    <sequenceFlow id=\"sf_14\" sourceRef=\"com6\" targetRef=\"s_end\"/>\n  </process>\n  <bpmndi:BPMNDiagram id=\"dia_sobmedida\">\n    <bpmndi:BPMNPlane id=\"plane_sobmedida\" bpmnElement=\"collab_sobmedida\">\n      <bpmndi:BPMNShape id=\"dishape_pool_sobmedida\" bpmnElement=\"pool_sobmedida\" isHorizontal=\"true\">\n        <omgdc:Bounds x=\"0\" y=\"0\" width=\"2140\" height=\"480\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dilane_com\" bpmnElement=\"lane_com\" isHorizontal=\"true\">\n        <omgdc:Bounds x=\"30\" y=\"30\" width=\"2110\" height=\"150\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dilane_gua\" bpmnElement=\"lane_gua\" isHorizontal=\"true\">\n        <omgdc:Bounds x=\"30\" y=\"180\" width=\"2110\" height=\"150\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dilane_ast\" bpmnElement=\"lane_ast\" isHorizontal=\"true\">\n        <omgdc:Bounds x=\"30\" y=\"330\" width=\"2110\" height=\"150\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_s_start\" bpmnElement=\"s_start\" color:background-color=\"#FFFFFF\" color:border-color=\"#0F7A64\">\n        <omgdc:Bounds x=\"134\" y=\"87\" width=\"36\" height=\"36\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_s_end\" bpmnElement=\"s_end\" color:background-color=\"#FFFFFF\" color:border-color=\"#0C3A6F\">\n        <omgdc:Bounds x=\"1910\" y=\"87\" width=\"36\" height=\"36\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_com0\" bpmnElement=\"com0\" color:background-color=\"#DFECFB\" color:border-color=\"#1C7CF9\">\n        <omgdc:Bounds x=\"230\" y=\"72\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_gua0\" bpmnElement=\"gua0\" color:background-color=\"#E3E9F2\" color:border-color=\"#0C3A6F\">\n        <omgdc:Bounds x=\"230\" y=\"222\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_gua1\" bpmnElement=\"gua1\" color:background-color=\"#E3E9F2\" color:border-color=\"#0C3A6F\">\n        <omgdc:Bounds x=\"440\" y=\"222\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_com3b\" bpmnElement=\"com3b\" color:background-color=\"#F7E4CC\" color:border-color=\"#9C5518\">\n        <omgdc:Bounds x=\"1070\" y=\"72\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_com4\" bpmnElement=\"com4\" color:background-color=\"#DFECFB\" color:border-color=\"#1C7CF9\">\n        <omgdc:Bounds x=\"1280\" y=\"72\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_gua4\" bpmnElement=\"gua4\" color:background-color=\"#E3E9F2\" color:border-color=\"#0C3A6F\">\n        <omgdc:Bounds x=\"1280\" y=\"222\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_ast6\" bpmnElement=\"ast6\" color:background-color=\"#DEF2EC\" color:border-color=\"#0F7A64\">\n        <omgdc:Bounds x=\"1700\" y=\"372\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_com6\" bpmnElement=\"com6\" color:background-color=\"#DFECFB\" color:border-color=\"#1C7CF9\">\n        <omgdc:Bounds x=\"1700\" y=\"72\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_ast2\" bpmnElement=\"ast2\" color:background-color=\"#F7E4CC\" color:border-color=\"#9C5518\">\n        <omgdc:Bounds x=\"650\" y=\"372\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_com3a\" bpmnElement=\"com3a\" color:background-color=\"#DFECFB\" color:border-color=\"#1C7CF9\">\n        <omgdc:Bounds x=\"860\" y=\"72\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_ast5\" bpmnElement=\"ast5\" color:background-color=\"#DEF2EC\" color:border-color=\"#0F7A64\">\n        <omgdc:Bounds x=\"1490\" y=\"372\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_gua6\" bpmnElement=\"gua6\" color:background-color=\"#E3E9F2\" color:border-color=\"#0C3A6F\">\n        <omgdc:Bounds x=\"1700\" y=\"222\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id=\"dishape_ast2b\" bpmnElement=\"ast2b\" color:background-color=\"#F7E4CC\" color:border-color=\"#9C5518\">\n        <omgdc:Bounds x=\"860\" y=\"372\" width=\"150\" height=\"66\"/>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id=\"diedge_sf_0\" bpmnElement=\"sf_0\"><omgdi:waypoint x=\"170.0\" y=\"105.0\"/><omgdi:waypoint x=\"230.0\" y=\"105.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_1\" bpmnElement=\"sf_1\"><omgdi:waypoint x=\"380.0\" y=\"105.0\"/><omgdi:waypoint x=\"305.0\" y=\"105.0\"/><omgdi:waypoint x=\"305.0\" y=\"255.0\"/><omgdi:waypoint x=\"230.0\" y=\"255.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_2\" bpmnElement=\"sf_2\"><omgdi:waypoint x=\"380.0\" y=\"255.0\"/><omgdi:waypoint x=\"440.0\" y=\"255.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_3\" bpmnElement=\"sf_3\"><omgdi:waypoint x=\"590.0\" y=\"255.0\"/><omgdi:waypoint x=\"620.0\" y=\"255.0\"/><omgdi:waypoint x=\"620.0\" y=\"405.0\"/><omgdi:waypoint x=\"650.0\" y=\"405.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_4\" bpmnElement=\"sf_4\"><omgdi:waypoint x=\"1010.0\" y=\"105.0\"/><omgdi:waypoint x=\"1070.0\" y=\"105.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_5\" bpmnElement=\"sf_5\"><omgdi:waypoint x=\"1220.0\" y=\"105.0\"/><omgdi:waypoint x=\"1280.0\" y=\"105.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_6\" bpmnElement=\"sf_6\"><omgdi:waypoint x=\"1430.0\" y=\"105.0\"/><omgdi:waypoint x=\"1355.0\" y=\"105.0\"/><omgdi:waypoint x=\"1355.0\" y=\"255.0\"/><omgdi:waypoint x=\"1280.0\" y=\"255.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_7\" bpmnElement=\"sf_7\"><omgdi:waypoint x=\"1430.0\" y=\"255.0\"/><omgdi:waypoint x=\"1460.0\" y=\"255.0\"/><omgdi:waypoint x=\"1460.0\" y=\"405.0\"/><omgdi:waypoint x=\"1490.0\" y=\"405.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_8\" bpmnElement=\"sf_8\"><omgdi:waypoint x=\"1430.0\" y=\"255.0\"/><omgdi:waypoint x=\"1700.0\" y=\"255.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_9\" bpmnElement=\"sf_9\"><omgdi:waypoint x=\"1640.0\" y=\"405.0\"/><omgdi:waypoint x=\"1700.0\" y=\"405.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_10\" bpmnElement=\"sf_10\"><omgdi:waypoint x=\"1850.0\" y=\"255.0\"/><omgdi:waypoint x=\"1775.0\" y=\"255.0\"/><omgdi:waypoint x=\"1775.0\" y=\"405.0\"/><omgdi:waypoint x=\"1700.0\" y=\"405.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_11\" bpmnElement=\"sf_11\"><omgdi:waypoint x=\"1850.0\" y=\"405.0\"/><omgdi:waypoint x=\"1775.0\" y=\"405.0\"/><omgdi:waypoint x=\"1775.0\" y=\"105.0\"/><omgdi:waypoint x=\"1700.0\" y=\"105.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_12\" bpmnElement=\"sf_12\"><omgdi:waypoint x=\"800.0\" y=\"405.0\"/><omgdi:waypoint x=\"860.0\" y=\"405.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_13\" bpmnElement=\"sf_13\"><omgdi:waypoint x=\"1010.0\" y=\"405.0\"/><omgdi:waypoint x=\"935.0\" y=\"405.0\"/><omgdi:waypoint x=\"935.0\" y=\"105.0\"/><omgdi:waypoint x=\"860.0\" y=\"105.0\"/></bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id=\"diedge_sf_14\" bpmnElement=\"sf_14\"><omgdi:waypoint x=\"1850.0\" y=\"105.0\"/><omgdi:waypoint x=\"1910.0\" y=\"105.0\"/></bpmndi:BPMNEdge>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</definitions>"};

const TIERS = {
  prevencao: { label:"Prevenção", internal:"Core", name:"Prevenção",
    desc:"A porta de entrada: entender riscos e construir uma rotina de cuidado guiada.",
    features:["Avaliação clínica ampla anual","Plano nutricional e treinos orientados em pequeno grupo","Acompanhamento digital entre os encontros","Maior compatibilidade com reembolso"],
    wash:"var(--tier-green-wash)", border:"var(--tier-green-border)", tag:"var(--brand-bright)",
    exames:[
      {n:"Lipídios + ApoB, HbA1c + glicose + insulina, hemograma", e:"ok"},
      {n:"Vitamina D e B12", e:"ok"},
      {n:"Biomarcadores inflamatórios e metabólicos", e:"ok"},
      {n:"Zinco e cobre (dosagem)", e:"ok"},
      {n:"Avaliação física (fitness, força, equilíbrio — ABCPB)", e:"part"},
      {n:"Avaliação cognitiva (MOCA + Viewmind)", e:"part"},
      {n:"Avaliação emocional (GDS)", e:"part"},
      {n:"Densitometria de corpo total", e:"part"},
      {n:"Teste ergoespirométrico (VO2)", e:"part"},
      {n:"Selênio (dosagem)", e:"part"}
    ] },
  aceleracao: { label:"Aceleração", internal:"Frontier", name:"Aceleração",
    desc:"Para quem já cuida da saúde e quer otimizar performance e biomarcadores com mais profundidade.",
    features:["Protocolos de investigação avançada","Metas de performance mensuráveis","Mescla itens reembolsáveis e particulares"],
    wash:"var(--tier-orange-wash)", border:"var(--tier-orange-border)", tag:"var(--accent-2)",
    exames:[
      {n:"Tudo do protocolo Prevenção, mais:", e:"hdr"},
      {n:"Estradiol, FSH, testosterona", e:"ok"},
      {n:"NT-proBNP / troponina", e:"ok"},
      {n:"Retina scan (retinografia)", e:"ok"},
      {n:"Audiometria", e:"ok"},
      {n:"Aconselhamento genético (consulta)", e:"ok"},
      {n:"Angio-TC com score de cálcio", e:"cond"},
      {n:"Relógio biológico (Trü)", e:"part"},
      {n:"Metabolômica (Metasync)", e:"part"},
      {n:"ELF (painel de fibrose hepática)", e:"part"},
      {n:"Omega-index", e:"part"},
      {n:"ApoE", e:"part"}
    ] },
  sobmedida: { label:"Sob Medida", internal:"Individualizado", name:"Sob Medida",
    desc:"Protocolo desenhado caso a caso, para necessidades ou objetivos específicos.",
    features:["Composição 100% particular","Time dedicado por caso","Sem teto de escopo pré-definido"],
    wash:"var(--tier-neutral-wash)", border:"var(--tier-neutral-border)", tag:"var(--paper)",
    exames:[
      {n:"Genoma / sequenciamento", e:"part"},
      {n:"RM corpo total", e:"part"},
      {n:"Microbiota intestinal", e:"part"},
      {n:"Painel de rastreio oncológico (Gallery)", e:"part"},
      {n:"Hormônio anti-mülleriano", e:"part"},
      {n:"Polissonografia domiciliar", e:"cond"}
    ] }
};
const TIER_ORDER = ["prevencao","aceleracao","sobmedida"];
const EXAM_TAG = {
  ok:   { label:"Reembolsável",  cls:"exam-ok" },
  part: { label:"Particular",    cls:"exam-part" },
  cond: { label:"Condicional",   cls:"exam-cond" },
  pend: { label:"A confirmar",   cls:"exam-pend" },
  hdr:  { label:"",              cls:"exam-hdr" }
};

const JOURNEY = {
  prevencao:{
    com:[{label:"Registro do lead"},{label:"Pacote majorit. reembolsável"},{label:"Validar enquadramento ANS",flag:"crit"},{label:"Emitir contrato / assinatura"},{label:"Faturamento recorrente"}],
    gua:[{label:"Acolhimento e triagem"},{label:"Recomendação de nível"},{label:"Onboarding pós-assinatura"},{label:"Cadência de contato ativo"}],
    ast:[{label:"Avaliação clínica ampla anual"},{label:"Execução do protocolo Core"},{label:"Reavaliação periódica"}]
  },
  aceleracao:{
    com:[{label:"Registro do lead"},{label:"Pacote misto reembolsável+particular",flag:"gap"},{label:"Validar enquadramento ANS",flag:"crit"},{label:"Emitir contrato / assinatura"},{label:"Faturamento recorrente"}],
    gua:[{label:"Acolhimento e triagem"},{label:"Recomendação de nível"},{label:"Onboarding pós-assinatura"},{label:"Cadência de contato ativo"}],
    ast:[{label:"Protocolos de investigação avançada"},{label:"Execução do protocolo Aceleração"},{label:"Reavaliação periódica"}]
  },
  sobmedida:{
    com:[{label:"Registro do lead"},{label:"Pacote 100% particular"},{label:"Validar enquadramento ANS",flag:"crit"},{label:"Emitir contrato / assinatura"},{label:"Faturamento recorrente"}],
    gua:[{label:"Acolhimento e triagem"},{label:"Recomendação de nível"},{label:"Onboarding pós-assinatura"},{label:"Cadência sob demanda"}],
    ast:[{label:"Protocolo individualizado (genoma, RM corpo total)",flag:"gap"},{label:"Consentimento de incerteza científica",flag:"crit"},{label:"Execução do protocolo Sob Medida"},{label:"Reavaliação periódica"}]
  }
};
const JOURNEY_STORY = {
  prevencao: "O cliente chega e o guardião da jornada faz a triagem e recomenda o nível. Enquanto o time assistencial conduz a avaliação clínica ampla anual, o comercial monta o pacote majoritariamente reembolsável e valida o enquadramento ANS. Assinado o contrato, o guardião assume o contato ativo entre os encontros e agenda as reavaliações de 3, 6, 8 e 12 meses.",
  aceleracao: "O cliente chega e o guardião da jornada faz a triagem e recomenda o nível. Enquanto o time assistencial conduz os protocolos de investigação avançada, o comercial monta o pacote misto (parte reembolsável, parte particular) e valida o enquadramento ANS. Assinado o contrato, o guardião assume o contato ativo — mais frequente, porque o volume de dados é maior — e agenda as reavaliações do ciclo.",
  sobmedida: "O cliente chega e o guardião da jornada faz a triagem e recomenda o nível. O time assistencial desenha o protocolo individualizado e o consentimento de incerteza científica antes de seguir, enquanto o comercial monta o pacote 100% particular e valida o enquadramento ANS. Assinado o contrato, o guardião acompanha sob demanda e agenda a reavaliação periódica."
};
const LANE_META = [
  {key:"com", name:"Comercial / Financeiro", color:"var(--accent-2)",
    context:"Estrutura o pacote comercial e o enquadramento financeiro de cada assinatura — inclui a validação do enquadramento ANS.",
    baseAlerts:[{t:"danger",icon:"⚠️",m:"Enquadramento ANS ainda em aberto — calcanhar de Aquiles do projeto, responsável de compliance não nomeado (Chamamento Público nº 004/2026)"}]},
  {key:"gua", name:"Guardião da Jornada", color:"var(--brand-bright)",
    context:"Orquestra a jornada do cliente entre as demais áreas — já regulamentado, decisão interna, sem dependência externa.",
    baseAlerts:[{t:"ok",icon:"✅",m:"Enfermeiro navegador já regulamentado — COFEN 735/2024 (navegação) e COFEN 661/2021 (triagem)"}]},
  {key:"ast", name:"Assistencial", color:"var(--brand)",
    context:"Executa a avaliação clínica e o protocolo de cada nível — a profundidade e o risco variam por produto.",
    baseAlerts:[]}
];

const JOURNEY_STEPS = [
  { label:"Início", owner:"com", text:"Você entra em contato. Seu cadastro é registrado." },
  { label:"Triagem", owner:"gua", text:"Em poucos minutos, o guardião da jornada entende sua necessidade real." },
  { label:"Decisão de nível", owner:"gua", text:"Com base na triagem, você é direcionado a Prevenção, Aceleração ou Sob Medida." },
  { label:"Protocolo", owner:"ast", text:{
      prevencao:"Uma avaliação clínica ampla, uma vez por ano — o ponto de partida pra entender riscos.",
      aceleracao:"Protocolos de investigação avançada, com metas de performance mensuráveis.",
      sobmedida:"Um protocolo pensado só pra você — com consentimento claro sobre o que a ciência ainda não garante." } },
  { label:"Pacote comercial", owner:"com", text:{
      prevencao:"O pacote é majoritariamente reembolsável.",
      aceleracao:"O pacote mistura reembolsável e particular, item a item.",
      sobmedida:"O pacote é 100% particular — sem negociação de convênio." },
    note:"Ponto de atrito conhecido: é aqui que surge a pergunta \"meu convênio cobre isso?\" — o enquadramento ANS e o desenho reembolsável×particular precisam estar claros antes da assinatura." },
  { label:"Assinatura", owner:"com", text:"Contrato assinado, plano de cuidado ativado." },
  { label:"Onboarding", owner:"gua", text:"O guardião assume — você não navega mais sozinho pelo sistema." },
  { label:"Acompanhamento", owner:"gua", text:{
      prevencao:"Entre os encontros, a trilha digital segue coletando e o guardião da jornada mantém contato ativo.",
      aceleracao:"O mesmo contato ativo, mais frequente — o volume de dados do protocolo avançado pede leitura mais de perto.",
      sobmedida:"Acompanhamento sob demanda, com time dedicado ao caso." },
    note:"A frequência do contato ativo ainda não foi decidida — é uma das definições abertas do projeto, não um número contratado." },
  { label:"Continuidade", owner:"ast", text:"Aos 3, 6, 8 e 12 meses o ciclo é reavaliado — nutrição, biomarcadores e condicionamento. No fim do ano o ciclo fecha e recomeça, com o que a trilha digital mediu no meio do caminho." }
];
let curStep = 0;

const NARR_TABS = [
  {key:"intro", n:"01", label:"Introdução"},
  {key:"detalhe", n:"02", label:"Detalhes"},
  {key:"fechamento", n:"03", label:"Fechamento"}
];

let curTier = "prevencao";
let curLane = 0;
let curNarr = "intro";
let viewer = null;
let bpmnEverLoaded = false;

// ---- SCROLL-DRIVEN MOTION (GSAP ScrollTrigger, native scroll) ----
gsap.registerPlugin(ScrollTrigger);

const tabRevealsDone = {};
function initRevealsForTab(key){
  if (tabRevealsDone[key]) return;
  tabRevealsDone[key] = true;
  const root = document.getElementById("tab-"+key);
  root.querySelectorAll(".reveal").forEach(el=>{
    gsap.from(el, { opacity:0, y:18, duration:.6, ease:"power1.out",
      scrollTrigger:{ trigger:el, start:"top 90%", toggleActions:"play none none none" } });
  });
}

let progressST = null;
function setupScrollProgress(key){
  if (progressST) progressST.kill();
  const el = document.getElementById("tab-"+key);
  progressST = ScrollTrigger.create({
    trigger:el, start:"top top", end:"bottom bottom",
    onUpdate: self => { document.getElementById("scroll-progress").style.transform = "scaleX("+self.progress.toFixed(4)+")"; }
  });
}

function initCountUp(){
  const el = document.getElementById("stat-1955");
  if (!el || el.dataset.counted) return;
  ScrollTrigger.create({
    trigger:el, start:"top 90%", once:true,
    onEnter: ()=>{
      el.dataset.counted = "1";
      const obj = { v:1900 };
      gsap.to(obj, { v:1955, duration:1.6, ease:"power2.out", onUpdate:()=>{ el.textContent = Math.round(obj.v); } });
    }
  });
}

// ---- NARRATIVE TABS ----
function paintNarrTabs(){
  document.getElementById("narr-tabs").innerHTML = NARR_TABS.map(t=>{
    const active = t.key===curNarr;
    return '<button class="narr-tab'+(active?' active':'')+'" onclick="goTab(&quot;'+t.key+'&quot;)"><span class="n">'+t.n+'</span>'+t.label+'</button>';
  }).join("");
}
function goTab(key){
  curNarr = key;
  document.querySelectorAll(".page-tab").forEach(el=>el.classList.remove("active"));
  const target = document.getElementById("tab-"+key);
  void target.offsetWidth;
  target.classList.add("active");
  paintNarrTabs();
  window.scrollTo(0, 0);
  if (key==="detalhe"){
    if (!bpmnEverLoaded){ bpmnEverLoaded = true; loadBpmn(); }
    else setTimeout(()=>{ viewer && viewer.get("canvas").zoom("fit-viewport","auto"); }, 30);
  }
  if (key==="fechamento") setTimeout(initCountUp, 50);
  initRevealsForTab(key);
  setupScrollProgress(key);
  setTimeout(()=>ScrollTrigger.refresh(), 80);
}
function jumpToPlanos(){
  goTab("detalhe");
  setTimeout(()=>{
    ScrollTrigger.refresh();
    const el = document.getElementById("planos");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior:"smooth" });
  }, 110);
}
function handleContatoSubmit(e){
  e.preventDefault();
  const msg = document.getElementById("contato-msg");
  msg.style.display = "block";
  msg.textContent = "Isso é um mockup de produto — nenhum dado foi enviado. Numa versão real, este formulário chegaria ao time comercial do Centro de Longevidade.";
  return false;
}
function jumpToContato(){
  goTab("fechamento");
  setTimeout(()=>{
    ScrollTrigger.refresh();
    const el = document.getElementById("contato");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior:"smooth" });
  }, 110);
}

function selectTier(k){
  curTier = k;
  paintTierTabs();
  paintProduct();
  paintStory();
  paintStepPanel();
  if (bpmnEverLoaded) loadBpmn();
  curLane = 0;
  paintLanePills();
  paintGuide();
}

// ---- STEPPER (jornada do cliente) ----
function stepText(s){ return typeof s.text === "string" ? s.text : s.text[curTier]; }
function paintStepNodes(){
  document.getElementById("step-nodes").innerHTML =
    '<div class="step-track-line"></div>' +
    JOURNEY_STEPS.map((s,i)=>{
      const active = i===curStep;
      return '<button class="step-node'+(active?' active':'')+'" onclick="selectStep('+i+')"><div class="step-dot"></div><div class="step-node-label">'+s.label+'</div></button>';
    }).join("");
}
function selectStep(i){ curStep=i; paintStepNodes(); paintStepPanel(); }
function stepPrev(){ if (curStep>0) selectStep(curStep-1); }
function stepNext(){ if (curStep<JOURNEY_STEPS.length-1) selectStep(curStep+1); }
function paintStepPanel(){
  const panel = document.getElementById("step-panel");
  const s = JOURNEY_STEPS[curStep];
  const owner = LANE_META.find(l=>l.key===s.owner);
  panel.style.opacity = "0";
  setTimeout(()=>{
    panel.innerHTML =
      '<div style="display:flex;gap:12px;align-items:center;margin-bottom:22px;flex-wrap:wrap;">'+
        '<div class="mono" style="font-size:11px;color:'+owner.color+';border:1px solid '+owner.color+';border-radius:999px;padding:5px 14px;">'+owner.name+'</div>'+
        '<div class="mono" style="font-size:11px;color:var(--muted-2);">Momento '+(curStep+1)+' de '+JOURNEY_STEPS.length+'</div>'+
      '</div>'+
      '<p class="serif" style="margin:0;font-size:clamp(22px,3vw,32px);line-height:1.35;font-weight:500;color:var(--paper);max-width:56ch;">'+stepText(s)+'</p>'+
      (s.note ? '<p style="margin:22px 0 0;font-size:13.5px;line-height:1.55;color:var(--muted);max-width:62ch;border-top:1px solid var(--line);padding-top:18px;">'+s.note+'</p>' : '');
    panel.style.opacity = "1";
  }, 140);
}
function paintStory(){
  document.getElementById("journey-story").textContent = JOURNEY_STORY[curTier];
}
function paintTierTabs(){
  document.getElementById("tier-tabs").innerHTML = TIER_ORDER.map(k=>{
    const active = k===curTier;
    const style = "padding:13px 24px;border-radius:999px;font-family:'Space Mono',monospace;font-size:13px;letter-spacing:.02em;font-weight:700;"+
      "background:"+(active?"var(--accent)":"transparent")+";color:"+(active?"var(--on-accent)":"var(--muted)")+";border:1px solid "+(active?"var(--accent)":"var(--line)")+";";
    return '<button style="'+style+'" onclick="selectTier(&quot;'+k+'&quot;)">'+TIERS[k].label+'</button>';
  }).join("");
}
function paintProduct(){
  const a = TIERS[curTier];
  document.getElementById("product-panel").innerHTML =
    '<div style="background:'+a.wash+';border:1px solid '+a.border+';border-radius:24px;padding:56px;display:grid;grid-template-columns:0.7fr 1.3fr;gap:48px;">'+
      '<div style="display:flex;flex-direction:column;gap:14px;">'+
        '<div class="mono" style="font-size:11px;color:'+a.tag+';letter-spacing:.08em;text-transform:uppercase;">nome interno: '+a.internal+'</div>'+
        '<div class="serif" style="font-size:44px;font-weight:600;color:var(--paper);">'+a.name+'</div>'+
        '<div style="font-size:15px;line-height:1.6;color:var(--muted);">'+a.desc+'</div>'+
      '</div>'+
      '<div style="display:flex;flex-direction:column;gap:16px;justify-content:center;">'+
        a.features.map(f=>'<div style="display:flex;gap:14px;align-items:flex-start;padding:16px 0;border-top:1px solid var(--line);"><div class="mono" style="color:'+a.tag+';font-size:14px;">＋</div><div style="font-size:15px;color:var(--paper);line-height:1.4;">'+f+'</div></div>').join("")+
      '</div>'+
    '</div>'+
    '<div style="margin-top:24px;background:var(--panel-2);border:1px solid var(--line);border-radius:20px;padding:36px 40px;">'+
      '<div class="eyebrow" style="color:var(--muted-2);margin-bottom:18px;">Hall de exames — protocolo '+a.name+'</div>'+
      '<div class="exam-grid">'+
        a.exames.map(x=>{
          if (x.e === "hdr") return '<div class="exam-subhead">'+x.n+'</div>';
          const t = EXAM_TAG[x.e];
          return '<div class="exam-row"><span class="exam-tag '+t.cls+'">'+t.label+'</span><span class="exam-name">'+x.n+'</span></div>';
        }).join("")+
      '</div>'+
      '<div style="margin-top:20px;font-size:11.5px;line-height:1.6;color:var(--muted-2);">Fonte: deck estratégico interno (pág. 28) cruzado com busca primária no Anexo I oficial do Rol ANS (RN 465/2021 e alterações até RN 584/2023, texto baixado de gov.br e pesquisado diretamente em 02/10/2026) — ver <i>02_analise_biodesign/hall_de_exames_por_produto.md</i> no vault para a lista de referências numerada.</div>'+
    '</div>'+
    '<button class="btn-primary" style="margin-top:28px;width:100%;justify-content:center;" onclick="jumpToContato()">Entre em contato sobre '+a.name+' →</button>';
}

// ---- BPMN ----
async function loadBpmn(){
  if (!viewer){
    viewer = new BpmnJS({ container:"#bpmn-canvas", keyboard:{ bindTo:window } });
    const eventBus = viewer.get("eventBus");
    const tooltip = document.getElementById("bpmn-tooltip");
    eventBus.on("element.hover", (e)=>{
      const bo = e.element.businessObject;
      if (!bo || bo.$type!=="bpmn:Task"){ tooltip.style.display="none"; return; }
      const docs = bo.documentation && bo.documentation.length ? bo.documentation[0].text : "";
      if (!docs){ tooltip.style.display="none"; return; }
      tooltip.innerHTML = "<b>"+(bo.name||"").replace(/\n/g," ")+"</b><br>"+docs;
      tooltip.style.display="block";
    });
    eventBus.on("element.out", ()=>{ tooltip.style.display="none"; });
    const canvasEl = document.getElementById("bpmn-canvas");
    canvasEl.addEventListener("mousemove",(e)=>{
      tooltip.style.left = Math.min(e.clientX+16, window.innerWidth-300)+"px";
      tooltip.style.top = Math.min(e.clientY+16, window.innerHeight-140)+"px";
    });
    // scroll comum rola a página normalmente; só ctrl/cmd+scroll faz zoom no diagrama —
    // evita o "scroll infinito" de ficar preso dando zoom ao tentar rolar a página.
    canvasEl.addEventListener("wheel",(e)=>{
      if (!(e.ctrlKey || e.metaKey)){ e.stopImmediatePropagation(); return; }
      e.preventDefault();
    }, { capture:true, passive:false });
  }
  try{
    await viewer.importXML(BPMN_MAP[curTier]);
    viewer.get("canvas").zoom("fit-viewport","auto");
  }catch(err){ console.error("Erro ao importar BPMN", err); }
}
function zoomIn(){ viewer && viewer.get("zoomScroll").stepZoom(1); }
function zoomOut(){ viewer && viewer.get("zoomScroll").stepZoom(-1); }
function fitView(){ viewer && viewer.get("canvas").zoom("fit-viewport","auto"); }
function resetZoom(){ viewer && viewer.get("canvas").zoom(1); }
function downloadBpmn(){
  const blob = new Blob([BPMN_MAP[curTier]], { type: "application/xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "jornada_"+curTier+"_einstein.bpmn";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ---- GUIDE (3 lanes) ----
function laneSteps(laneKey){
  const raw = JOURNEY[curTier][laneKey];
  return raw.map((s,i)=>({ n:String(i+1).padStart(2,"0"), tx:s.label, c: s.flag==="crit", gap: s.flag==="gap" }));
}
function laneAlerts(laneKey, meta){
  const raw = JOURNEY[curTier][laneKey];
  const derived = raw.filter(s=>s.flag).map(s=>({ t: s.flag==="crit"?"danger":"warn", icon: s.flag==="crit"?"🚨":"⚠️", m: s.label }));
  return [...meta.baseAlerts, ...derived];
}
function paintLanePills(){
  document.getElementById("lane-pills").innerHTML = LANE_META.map((l,i)=>{
    const active = i===curLane;
    return '<button class="lane-pill'+(active?' active':'')+'" style="'+(active?'border-color:'+l.color+';color:'+l.color:'')+'" onclick="selectLane('+i+')">'+l.name+'</button>';
  }).join("");
}
function selectLane(i){ curLane=i; paintLanePills(); paintGuide(); }
function paintGuide(){
  const meta = LANE_META[curLane];
  const steps = laneSteps(meta.key);
  const alerts = laneAlerts(meta.key, meta);
  document.getElementById("guide-main").innerHTML =
    alerts.map(a=>'<div class="alert-item '+a.t+'"><span>'+a.icon+'</span><span>'+a.m+'</span></div>').join("")+
    '<div class="eyebrow" style="color:var(--muted-2);margin:18px 0 10px;">Etapas — '+meta.name+'</div>'+
    steps.map(s=>'<div class="step-item"><div class="step-num'+(s.c?' crit':'')+'">'+s.n+'</div><div><div style="font-size:14px;font-weight:600;color:var(--paper);">'+s.tx+(s.c?'<span class="crit-tag">CRÍTICO</span>':'')+'</div></div></div>').join("");
  const crit = steps.filter(s=>s.c).length;
  document.getElementById("guide-sidebar").innerHTML =
    '<div style="background:var(--panel-2);border:1px solid var(--line);border-radius:12px;padding:16px;margin-bottom:14px;">'+
      '<div class="eyebrow" style="color:var(--muted-2);margin-bottom:10px;">Resumo</div>'+
      '<div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;"><span style="color:var(--muted);">Etapas</span><span style="font-weight:700;color:var(--paper);">'+steps.length+'</span></div>'+
      '<div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;"><span style="color:var(--muted);">Críticas</span><span style="font-weight:700;color:'+(crit>0?'var(--crit)':'var(--brand-bright)')+';">'+crit+'</span></div>'+
    '</div>'+
    '<div style="background:var(--panel-2);border:1px solid var(--line);border-radius:12px;padding:16px;">'+
      '<div class="eyebrow" style="color:var(--muted-2);margin-bottom:10px;">Contexto</div>'+
      '<div style="font-size:12.5px;line-height:1.55;color:var(--muted);">'+meta.context+'</div>'+
    '</div>';
}

// ---- INIT ----
paintNarrTabs();
paintTierTabs();
paintProduct();
paintStory();
paintStepNodes();
paintStepPanel();
paintLanePills();
paintGuide();

initRevealsForTab("intro");
setupScrollProgress("intro");
ScrollTrigger.refresh();
if (document.fonts && document.fonts.ready) document.fonts.ready.then(()=>ScrollTrigger.refresh());
