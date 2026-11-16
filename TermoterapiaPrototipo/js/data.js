/* Ícones SVG */
export const ICONS = {
  th: 'M14 14.8V5a2 2 0 1 0-4 0v9.8a4 4 0 1 0 4 0z',
  reg: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 12h6M9 16h4',
  info: 'M12 12v5M12 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
  chat: 'M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5z',
  bell: 'M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0',
  home: 'M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
  trend: 'M3 17l6-6 4 4 8-8M14 7h7v7',
  user: 'M20 21a8 8 0 1 0-16 0M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  search: 'M21 21l-4.3-4.3M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0z',
  star: 'M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21 7 14.2 2 9.3l6.9-1z',
  back: 'M15 18l-6-6 6-6',
  warn: 'M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z',
  snow: 'M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1',
  fl: 'M12 2c2 3.5 6 6.2 6 11a6 6 0 1 1-12 0c0-2.4 1.2-4.7 3-6.5-.2 2.2 1.2 3.5 2.5 3.5C11 7 11 4.2 12 2z',
  send: 'M22 2L11 13M22 2l-7 20-4-9-9-4z',
  pin: 'M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  a11y: 'M12 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5 9h14M12 9v6M12 15l-3 5M12 15l3 5',
  book: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5V5a2 2 0 0 1 2-2h14v14H6.5A2.5 2.5 0 0 0 4 19.5z',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
};

export const ic = (k, c = '') => `<svg class="i ${c}" viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[k]}"/></svg>`;

/* =========================================================================
   DADOS DO PACIENTE
   ========================================================================= */
export const PERGUNTAS_TRIAGEM = [
  ['Onde está o desconforto?', ['Ombro ou pescoço', 'Costas ou lombar', 'Joelho ou tornozelo', 'Outro local']],
  ['Como a dor começou?', ['Após pancada, torção ou esforço', 'Aos poucos, sem lesão', 'Rigidez ou tensão', 'Após cirurgia ou orientação do fisio']],
  ['Há quanto tempo?', ['Menos de 48 horas', 'Entre 2 e 7 dias', 'Mais de uma semana']],
  ['Você tem algum destes sinais?', ['Inchaço ou local quente', 'Ferida, dormência ou alteração de pele', 'Problema de circulação ou diabetes', 'Nenhum desses']]
];

export const decidirTriagem = (a) => {
  if (a[3] === 'Ferida, dormência ou alteração de pele' || a[3] === 'Problema de circulação ou diabetes' || a[1] === 'Após cirurgia ou orientação do fisio') return 'alerta';
  if (a[2] === 'Menos de 48 horas' || a[3] === 'Inchaço ou local quente' || a[1] === 'Após pancada, torção ou esforço') return 'frio';
  return 'calor';
};

export const ORIENTACOES = {
  frio: {
    n: 'Frio', m: 15, c: 'bl',
    p: ['Envolva a bolsa fria em uma toalha fina antes de encostar na pele.', 'Apoie com firmeza no local por 15 minutos, sem apertar.', 'Observe a pele na metade do tempo. Se doer ou arder, pare.', 'Retire e aguarde ao menos 1 hora antes de repetir.'],
    a: 'Nunca coloque gelo direto na pele e não ultrapasse 20 minutos.'
  },
  calor: {
    n: 'Calor', m: 20, c: 'or',
    p: ['Aqueça a bolsa e teste no antebraço: precisa estar morna, nunca quente.', 'Use uma toalha entre a bolsa e a pele e descanse por 20 minutos.', 'Não deite sobre a bolsa nem durma durante a aplicação.', 'Ao terminar, hidrate e observe a cor da pele.'],
    a: 'Não use calor se o local estiver inchado, avermelhado ou quente.'
  }
};

export const INFORMACOES = [
  ['Quando escolher frio', 'Indicado nas primeiras 48 horas após pancadas, torções e quando há inchaço ou calor local. O frio reduz o fluxo sanguíneo local e ajuda a controlar a dor e o edema.'],
  ['Quando escolher calor', 'Indicado para rigidez muscular, tensão e dores que duram mais de uma semana sem sinais de inflamação. O calor aumenta a circulação e relaxa a musculatura.'],
  ['Sinais para parar imediatamente', 'Dormência, formigamento forte, pele esbranquiçada ou muito vermelha, ardência ou aumento da dor. Retire o recurso e procure avaliação.'],
  ['Quando falar com o fisioterapeuta', 'Em pós-operatório, diabetes, alteração de sensibilidade ou de circulação, feridas abertas ou quando não houver melhora após 48 horas.']
];

/* =========================================================================
   MÓDULO DE TERMOTERAPIA — ABA DO FISIOTERAPEUTA
   (8 Recursos, 10 Condições, 7 Objetivos e Relações de Evidência)
   ========================================================================= */

export const OBJETIVOS_TERAPEUTICOS = {
  analgesia: 'Analgesia',
  edema: 'Redução/controle de sintomas de edema',
  rigidez: 'Redução de rigidez',
  preparacao: 'Preparação para movimento/exercício',
  recuperacao: 'Recuperação pós-exercício',
  adm: 'Melhora de amplitude de movimento (associado)',
  relaxamento: 'Conforto/relaxamento muscular'
};

export const RECURSOS_CLINICOS = {
  crio_sup: {
    nome: 'Crioterapia superficial',
    categoria: 'Frio superficial',
    cls: '',
    prioridade: 'Muito alta',
    descricao: 'Gelo picado/em cubos, cold pack/bolsa de gel e compressa fria com barreira protetora.',
    mecanismo: 'Redução da temperatura tecidual superficial, diminuição da velocidade de condução nervosa nociceptiva e redução metabólica local.',
    condicoesMvp: ['entorse_tornozelo', 'po_artroplastia_joelho', 'oa_joelho', 'lesao_muscular_doms', 'po_geral'],
    objetivosEstudados: ['analgesia', 'edema', 'recuperacao'],
    parametrosEstudos: 'Protocolos descritos variam de 10 a 20 min, com barreira úmida ou seca, aplicados de forma intermitente (não representa prescrição universal).',
    desfechos: 'Intensidade da dor (EVA/END), edema perimétrico e amplitude de movimento.',
    evidenciaPorCondicao: [
      { cond: 'Entorse de tornozelo', res: 'Pequena redução de dor em curto prazo; efeito limitado sobre edema isoladamente.' },
      { cond: 'Pós-operatório de artroplastia de joelho', res: 'Auxilia no controle sintomático da dor nas primeiras 48–72h como adjuvante.' },
      { cond: 'Osteoartrite de joelho', res: 'Alívio álgico transitório; certeza variável conforme protocolo e desfecho.' }
    ],
    certeza: 'Baixa a moderada (varia por condição e desfecho)',
    contraindicacoes: 'Crioglobulinemia, fenômeno de Raynaud, hipersensibilidade ou urticária ao frio, déficit sensorial térmico e insuficiência arterial periférica.',
    eventosAdversos: 'Queimadura térmica por frio (frostbite), neuropraxia transitória (ex.: nervo fibular), dor paradoxal ou eritema intenso.',
    referencias: [
      'Miranda JP et al. Effectiveness of cryotherapy on pain intensity, range of motion and swelling in musculoskeletal disorders. Br J Sports Med, 2026.',
      'Revisões sistemáticas de crioterapia pós-artroplastia total de joelho (Cochrane / PubMed).'
    ],
    ultimaRevisao: 'Novembro/2026'
  },

  calor_sup: {
    nome: 'Calor superficial',
    categoria: 'Calor superficial',
    cls: 'c',
    prioridade: 'Muito alta',
    descricao: 'Compressa quente, bolsa térmica (hidrocolator) e manta/almofada térmica.',
    mecanismo: 'Vasodilatação cutânea reflexa, aumento do fluxo sanguíneo superficial, modulação sensorial da dor e redução da rigidez viscoelástica superficial.',
    condicoesMvp: ['oa_joelho', 'lombalgia', 'cervicalgia', 'oa_mao', 'capsulite_ombro'],
    objetivosEstudados: ['analgesia', 'rigidez', 'preparacao', 'relaxamento', 'adm'],
    parametrosEstudos: 'Estudos utilizam bolsas a ~40–45 °C (com 6 a 8 camadas de toalha) ou mantas térmicas de baixa intensidade por 15 a 30 min antes de exercícios.',
    desfechos: 'Dor em curto prazo, rigidez percebida, incapacidade funcional e tolerância ao movimento.',
    evidenciaPorCondicao: [
      { cond: 'Lombalgia inespecífica', res: 'Alívio sintomático modesto da dor em curto prazo; deve ser usado apenas como adjuvante ao movimento ativo.' },
      { cond: 'Osteoartrite de joelho', res: 'Melhora temporária de dor e rigidez antes do exercício terapêutico.' },
      { cond: 'Dor cervical inespecífica / Capsulite', res: 'Conforto sintomático e facilitação da mobilidade quando associado à cinesioterapia.' }
    ],
    certeza: 'Baixa a moderada (efeito de curto prazo)',
    contraindicacoes: 'Inflamação aguda, edema ativo, hemorragia recente, déficit de sensibilidade térmica, pele friável e neoplasia na região.',
    eventosAdversos: 'Queimadura térmica superficial, eritema ab igne, tontura por hipotensão postural em áreas extensas.',
    referencias: [
      'French SD et al. Superficial heat or cold for low back pain. Cochrane Database Syst Rev (PubMed).',
      'Diretrizes clínicas de manejo não farmacológico da osteoartrite (OARSI / ACR).'
    ],
    ultimaRevisao: 'Novembro/2026'
  },

  criocompressao: {
    nome: 'Criocompressão',
    categoria: 'Frio superficial + compressão mecânica',
    cls: '',
    prioridade: 'Alta',
    descricao: 'Sistemas que associam resfriamento contínuo ou intermitente à compressão pneumática/estática.',
    mecanismo: 'Associa redução térmica nociceptiva ao aumento da pressão hidrostática externa, limitando a formação de exsudato intersticial.',
    condicoesMvp: ['po_artroplastia_joelho', 'entorse_tornozelo', 'po_geral'],
    objetivosEstudados: ['analgesia', 'edema'],
    parametrosEstudos: 'Ciclos de 15 a 30 min com temperatura controlada (~5–10 °C) e compressão leve a moderada (15–30 mmHg) no pós-operatório imediato.',
    desfechos: 'Dor pós-operatória, consumo de analgésicos, circunferência articular e amplitude de flexão do joelho.',
    evidenciaPorCondicao: [
      { cond: 'Pós-operatório de artroplastia de joelho', res: 'Pode oferecer leve vantagem na dor e conforto precoce em relação ao gelo simples em alguns ensaios, com heterogeneidade entre protocolos.' },
      { cond: 'Pós-operatório musculoesquelético geral', res: 'Opção adjuvante viável; certeza da evidência varia conforme o procedimento cirúrgico.' }
    ],
    certeza: 'Baixa a moderada (heterogênea)',
    contraindicacoes: 'Trombose venosa profunda (TVP) suspeita ou ativa, insuficiência arterial periférica, síndrome compartimental, neuropatia periférica e intolerância ao frio.',
    eventosAdversos: 'Isquemia periférica por compressão excessiva, lesão cutânea por frio, parestesia.',
    referencias: [
      'Miranda JP et al. Br J Sports Med, 2026.',
      'Revisões sistemáticas de criocompressão após artroplastia total de joelho (PubMed).'
    ],
    ultimaRevisao: 'Novembro/2026'
  },

  imersao_fria: {
    nome: 'Imersão em água fria',
    categoria: 'Frio superficial (imersão)',
    cls: '',
    prioridade: 'Alta',
    descricao: 'Cold-water immersion (CWI) / banho frio parcial ou de membros inferiores.',
    mecanismo: 'Resfriamento convectivo uniforme de grandes grupos musculares associado à pressão hidrostática da água.',
    condicoesMvp: ['lesao_muscular_doms', 'entorse_tornozelo'],
    objetivosEstudados: ['recuperacao', 'analgesia'],
    parametrosEstudos: 'Estudos esportivos descrevem imersão entre 10 °C e 15 °C por 10 a 15 min imediatamente após esforço intenso.',
    desfechos: 'Dor muscular tardia (DOMS) em 24–72h, percepção de fadiga e recuperação de potência.',
    evidenciaPorCondicao: [
      { cond: 'Lesão muscular / DOMS', res: 'Reduz a percepção de dor muscular tardia (DOMS) em 24–48h comparado ao repouso passivo; o uso crônico pode atenuar adaptações hipertróficas.' },
      { cond: 'Entorse de tornozelo', res: 'Alternativa de resfriamento para extremidade distal na fase inicial.' }
    ],
    certeza: 'Moderada para DOMS (dependente do objetivo)',
    contraindicacoes: 'Doença cardiovascular descompensada, fenômeno de Raynaud, alergia ao frio, feridas abertas ou infecções cutâneas.',
    eventosAdversos: 'Hipotermia leve em imersões extensas, vasoespasmo periférico, desconforto térmico intenso.',
    referencias: [
      'Moore E et al. Impact of Cold-Water Immersion Compared with Passive Recovery Following a Single Bout of Strenuous Exercise. Sports Med (PubMed).',
      'Miranda JP et al. Br J Sports Med, 2026.'
    ],
    ultimaRevisao: 'Novembro/2026'
  },

  parafina: {
    nome: 'Parafina',
    categoria: 'Calor superficial (condução)',
    cls: 'c',
    prioridade: 'Média',
    descricao: 'Banho de parafina terapêutica para extremidades e pequenas articulações periféricas.',
    mecanismo: 'Transferência de calor latente de fusão de forma envolvente e uniforme em contornos articulares irregulares (mãos e pés).',
    condicoesMvp: ['oa_mao'],
    objetivosEstudados: ['analgesia', 'rigidez', 'preparacao', 'adm'],
    parametrosEstudos: 'Imersões repetidas (6 a 10 camadas) em parafina a 50–54 °C, envolta em plástico e toalha por 15 a 20 min antes de exercícios ativos.',
    desfechos: 'Dor articular na mão, rigidez matinal, força de preensão e amplitude de movimento.',
    evidenciaPorCondicao: [
      { cond: 'Osteoartrite de mão', res: 'Redução de dor e rigidez em curto prazo quando combinada a exercícios terapêuticos de mão.' }
    ],
    certeza: 'Baixa a moderada (específica para mão)',
    contraindicacoes: 'Feridas abertas, infecções fúngicas/cutâneas, edema agudo, déficit de sensibilidade térmica nas mãos/pés e doença vascular periférica.',
    eventosAdversos: 'Queimadura superficial se a temperatura do tanque exceder 55 °C, irritação cutânea.',
    referencias: [
      'Ayling J, Marks R. Efficacy of paraffin wax baths for rheumatoid arthritic hands / hand osteoarthritis. Physiotherapy (PubMed).'
    ],
    ultimaRevisao: 'Novembro/2026'
  },

  ultrassom: {
    nome: 'Ultrassom terapêutico',
    categoria: 'Energia mecânica / Aquecimento profundo (modo contínuo)',
    cls: 'p',
    prioridade: 'Alta',
    descricao: 'Ultrassom contínuo (predominantemente térmico) e pulsado (predominantemente não térmico).',
    mecanismo: 'Absorção de ondas acústicas de alta frequência (1 MHz profundo; 3 MHz superficial). Modo contínuo eleva temperatura do colágeno; modo pulsado gera micromassagem acústica sem aquecimento relevante.',
    condicoesMvp: ['oa_joelho', 'capsulite_ombro', 'tendinopatia_manguito', 'cervicalgia'],
    objetivosEstudados: ['analgesia', 'rigidez', 'adm', 'preparacao'],
    parametrosEstudos: 'Contínuo (100%): 1 ou 3 MHz, 1,0–1,5 W/cm², 5–10 min (janela térmica curta antes de alongar). Pulsado (20–50%): 0,5–1,0 W/cm² SATA. Não existe dose universal.',
    desfechos: 'Dor (EVA), amplitude de movimento e função articular.',
    evidenciaPorCondicao: [
      { cond: 'Osteoartrite de joelho', res: 'Possível redução modesta de dor em curto prazo em revisões sistemáticas, com alta heterogeneidade entre modo contínuo e pulsado.' },
      { cond: 'Capsulite adesiva de ombro', res: 'Estudado como adjuvante térmico antes da mobilização/alongamento; evidência limitada como terapia isolada.' },
      { cond: 'Tendinopatia do manguito rotador', res: 'Evidência inconsistente/insuficiente para superioridade sobre exercício ativo ou placebo.' }
    ],
    certeza: 'Baixa (dependente do modo e condição)',
    contraindicacoes: 'Epífises de crescimento abertas, útero gravídico, neoplasias, região ocular, área cardíaca/marcapasso, tromboflebite e próteses cimentadas (modo contínuo).',
    eventosAdversos: 'Dor periosteal por superaquecimento (standing waves), queimadura interna se o cabeçote permanecer estático.',
    referencias: [
      'Guan H et al. Ultrasound therapy for pain reduction in musculoskeletal conditions — revisão sistemática/meta-análise, 2024.'
    ],
    ultimaRevisao: 'Novembro/2026'
  },

  diatermia_oc: {
    nome: 'Diatermia por ondas curtas',
    categoria: 'Aquecimento profundo (eletromagnético)',
    cls: 'p',
    prioridade: 'Média',
    descricao: 'Ondas curtas contínuas (efeito térmico profundo) e pulsadas (efeito atérmico/baixo calor).',
    mecanismo: 'Campo eletromagnético de alta frequência (27,12 MHz) que promove agitação iônica e rotação dipolar em tecidos profundos.',
    condicoesMvp: ['oa_joelho', 'lombalgia', 'cervicalgia'],
    objetivosEstudados: ['analgesia', 'rigidez', 'preparacao'],
    parametrosEstudos: 'Sessões de 15 a 20 min com sensação térmica branda (Dose II/III de Schliephake) no modo contínuo; parâmetros variam amplamente nos estudos.',
    desfechos: 'Dor e função autorrelatada em distúrbios musculoesqueléticos.',
    evidenciaPorCondicao: [
      { cond: 'Osteoartrite de joelho', res: 'Resultados heterogêneos; alguns estudos mostram alívio sintomático de curto prazo, mas qualidade metodológica é limitada.' },
      { cond: 'Lombalgia e Cervicalgia inespecíficas', res: 'Evidência limitada e inconclusiva; não deve substituir exercício terapêutico.' }
    ],
    certeza: 'Muito baixa a baixa (resultados heterogêneos)',
    contraindicacoes: 'Implantes metálicos ou eletrônicos (marcapasso, neuroestimuladores), gestação, epífises de crescimento, tumores, isquemia e déficit sensorial.',
    eventosAdversos: 'Queimadura tecidual profunda por concentração de campo em metal/umidade, interferência em dispositivos eletrônicos.',
    referencias: [
      'Pollet J et al. The Efficacy of Electromagnetic Diathermy for the Treatment of Musculoskeletal Disorders: A Systematic Review with Meta-Analysis. J Clin Med, 2023. DOI: 10.3390/jcm12123956.'
    ],
    ultimaRevisao: 'Novembro/2026'
  },

  tecar: {
    nome: 'Radiofrequência / TECAR',
    categoria: 'Aquecimento tecidual (capacitivo/resistivo)',
    cls: 'p',
    prioridade: 'Média',
    descricao: 'Transferência Elétrica Capacitiva e Resistiva (radiofrequência ~300 kHz a 1 MHz).',
    mecanismo: 'Corrente alternada de alta frequência que gera aquecimento endógeno seletivo conforme a impedância tecidual (capacitivo: tecidos ricos em água; resistivo: tendões/cápsula/osso).',
    condicoesMvp: ['lombalgia', 'cervicalgia', 'oa_joelho', 'tendinopatia_manguito'],
    objetivosEstudados: ['analgesia', 'rigidez', 'relaxamento', 'preparacao'],
    parametrosEstudos: 'Aplicações de 10 a 20 min combinando modos capacitivo e resistivo com sensação térmica confortável associada à terapia manual/exercício.',
    desfechos: 'Dor (EVA), incapacidade funcional e amplitude de movimento.',
    evidenciaPorCondicao: [
      { cond: 'Lombalgia e Cervicalgia inespecíficas', res: 'Estudos iniciais sugerem melhora sintomática de curto prazo quando associada a exercícios, sem comprovação de superioridade sobre outras modalidades térmicas.' },
      { cond: 'Osteoartrite de joelho / Tendinopatia', res: 'Evidência emergente ainda limitada por amostras pequenas e risco de viés.' }
    ],
    certeza: 'Muito baixa a baixa (sem superioridade comprovada)',
    contraindicacoes: 'Marcapasso e implantes eletrônicos ativos, gestação, neoplasias, trombose venosa profunda, infecções ativas e alteração de sensibilidade térmica.',
    eventosAdversos: 'Queimadura cutânea por mau acoplamento da placa de retorno ou excesso de intensidade.',
    referencias: [
      'Pollet J et al. J Clin Med, 2023. DOI: 10.3390/jcm12123956.',
      'Ensaios clínicos controlados de diatermia capacitiva-resistiva em dor musculoesquelética (PubMed).'
    ],
    ultimaRevisao: 'Novembro/2026'
  }
};

export const CONDICOES_CLINICAS = {
  oa_joelho: {
    nome: '1. Osteoartrite de joelho',
    regiao: 'Joelho',
    objetivos: ['analgesia', 'rigidez', 'preparacao'],
    recursosEstudados: ['calor_sup', 'crio_sup', 'ultrassom', 'diatermia_oc', 'tecar'],
    resumoEvidencia: 'Calor superficial e crioterapia oferecem alívio sintomático de curto prazo. Ultrassom e diatermia apresentam resultados heterogêneos. O pilar central do tratamento permanece o exercício terapêutico e educação.',
    evidenciaInsuficiente: 'Superioridade entre diferentes modalidades de aquecimento profundo (diatermia/TECAR vs. calor superficial simples).',
    referencias: 'Guan H et al. (2024); Pollet J et al. (2023); Diretrizes OARSI.',
    observacao: 'Recurso adjuvante: não substitui fortalecimento muscular, controle de carga e avaliação clínica.'
  },
  lombalgia: {
    nome: '2. Lombalgia inespecífica',
    regiao: 'Coluna lombar',
    objetivos: ['analgesia', 'rigidez', 'relaxamento', 'preparacao'],
    recursosEstudados: ['calor_sup', 'tecar', 'diatermia_oc'],
    resumoEvidencia: 'O calor superficial contínuo ou em bolsa proporciona alívio modesto da dor e rigidez em curto prazo (especialmente na fase aguda/subaguda). TECAR e ondas curtas têm certeza baixa.',
    evidenciaInsuficiente: 'Uso isolado de recursos térmicos para melhora funcional em longo prazo.',
    referencias: 'Cochrane Back and Neck Group; Pollet J et al. (2023).',
    observacao: 'Termoterapia não substitui exercício terapêutico ativo e educação em dor.'
  },
  entorse_tornozelo: {
    nome: '3. Entorse de tornozelo',
    regiao: 'Tornozelo e pé',
    objetivos: ['analgesia', 'edema'],
    recursosEstudados: ['crio_sup', 'criocompressao', 'imersao_fria'],
    resumoEvidencia: 'Crioterapia superficial reduz discretamente a dor nas primeiras 48h, mas apresenta efeito pequeno ou incerto sobre o edema e retorno funcional quando usada isoladamente.',
    evidenciaInsuficiente: 'Protocolos ideais de duração/frequência do gelo para acelerar o retorno ao esporte.',
    referencias: 'Miranda JP et al. Br J Sports Med, 2026.',
    observacao: 'Priorizar proteção articular, carga progressiva e exercícios sensório-motores.'
  },
  lesao_muscular_doms: {
    nome: '4. Lesão muscular / DOMS',
    regiao: 'Musculatura esquelética',
    objetivos: ['recuperacao', 'analgesia'],
    recursosEstudados: ['imersao_fria', 'crio_sup'],
    resumoEvidencia: 'Imersão em água fria (10–15 °C por 10–15 min) reduz a dor muscular tardia (DOMS) em 24–48h após exercício extenuante. Evidência limitada para lesões musculares estruturais.',
    evidenciaInsuficiente: 'Uso rotineiro pós-treino de força (pode atenuar sinalização hipertrófica).',
    referencias: 'Miranda JP et al. Br J Sports Med, 2026; Moore E et al. Sports Med.',
    observacao: 'Contextualizar conforme o calendário competitivo vs. fase de hipertrofia.'
  },
  po_artroplastia_joelho: {
    nome: '5. Pós-operatório de artroplastia de joelho',
    regiao: 'Joelho (pós-operatório)',
    objetivos: ['analgesia', 'edema', 'adm'],
    recursosEstudados: ['crio_sup', 'criocompressao'],
    resumoEvidencia: 'Crioterapia superficial e criocompressão reduzem a dor pós-operatória precoce e podem auxiliar na tolerância à mobilização inicial, com benefício pequeno sobre o edema.',
    evidenciaInsuficiente: 'Diferença clinicamente relevante entre dispositivos caros de criocompressão e bolsa de gelo bem aplicada.',
    referencias: 'Miranda JP et al. Br J Sports Med, 2026; Revisões Cochrane PTJ.',
    observacao: 'Seguir protocolos cirúrgicos e monitorar integridade da ferida operatória e sinais de TVP.'
  },
  cervicalgia: {
    nome: '6. Dor cervical inespecífica',
    regiao: 'Coluna cervical',
    objetivos: ['analgesia', 'rigidez', 'relaxamento', 'preparacao'],
    recursosEstudados: ['calor_sup', 'tecar', 'ultrassom', 'diatermia_oc'],
    resumoEvidencia: 'Calor superficial oferece conforto sintomático e redução de tensão muscular como preparação para terapia manual e exercícios cervicais.',
    evidenciaInsuficiente: 'Eficácia isolada de ultrassom ou diatermia sem associação com cinesioterapia.',
    referencias: 'Guan H et al. (2024); Pollet J et al. (2023).',
    observacao: 'Recurso adjuvante: não substitui avaliação neurológica e tratamento ativo.'
  },
  oa_mao: {
    nome: '7. Osteoartrite de mão',
    regiao: 'Mãos e punhos',
    objetivos: ['analgesia', 'rigidez', 'preparacao', 'adm'],
    recursosEstudados: ['parafina', 'calor_sup'],
    resumoEvidencia: 'Banho de parafina e calor superficial aliviam dor e rigidez articular de curto prazo, potencializando o ganho de função quando seguidos de exercícios para as mãos.',
    evidenciaInsuficiente: 'Manutenção dos ganhos sem programa contínuo de exercícios.',
    referencias: 'Diretrizes EULAR / ACR para Osteoartrite de Mão.',
    observacao: 'Inspecionar integridade cutânea e sensibilidade térmica distal antes da imersão.'
  },
  capsulite_ombro: {
    nome: '8. Capsulite adesiva de ombro',
    regiao: 'Ombro',
    objetivos: ['analgesia', 'rigidez', 'adm', 'preparacao'],
    recursosEstudados: ['calor_sup', 'ultrassom'],
    resumoEvidencia: 'Calor superficial ou ultrassom contínuo são utilizados antes do alongamento/mobilização para melhorar o conforto e a extensibilidade tecidual.',
    evidenciaInsuficiente: 'Uso de modalidades térmicas sem mobilização articular associada.',
    referencias: 'JOSPT Clinical Practice Guidelines — Adhesive Capsulitis; Guan H et al. (2024).',
    observacao: 'A janela térmica após aquecimento profundo dura poucos minutos; mobilizar imediatamente.'
  },
  tendinopatia_manguito: {
    nome: '9. Tendinopatia do manguito rotador',
    regiao: 'Ombro',
    objetivos: ['analgesia', 'preparacao'],
    recursosEstudados: ['ultrassom', 'tecar', 'crio_sup'],
    resumoEvidencia: 'A disponibilidade de recursos físicos não implica evidência forte: ultrassom e TECAR têm evidência fraca/inconclusiva. Crioterapia pode ser usada pontualmente após carga.',
    evidenciaInsuficiente: 'Benefício clínico relevante do ultrassom terapêutico sobre exercício progressivo.',
    referencias: 'Guan H et al. (2024); Diretrizes clínicas de dor no ombro.',
    observacao: 'O tratamento de primeira linha é o gerenciamento de carga e exercício resistido progressivo.'
  },
  po_geral: {
    nome: '10. Pós-operatório musculoesquelético geral',
    regiao: 'Diversas regiões (selecionado)',
    objetivos: ['analgesia', 'edema'],
    recursosEstudados: ['crio_sup', 'criocompressao'],
    resumoEvidencia: 'Categoria de consulta para cirurgias ortopédicas selecionadas: crioterapia auxilia no controle álgico imediato, devendo respeitar restrições específicas de cada cirurgia.',
    evidenciaInsuficiente: 'Aplicação indiscriminada sem liberação da equipe cirúrgica.',
    referencias: 'Miranda JP et al. Br J Sports Med, 2026.',
    observacao: 'Categoria de consulta — não constitui autorização automática de tratamento.'
  }
};

export const RELACOES_EVIDENCIA = {
  'oa_joelho__crio_sup': {
    beneficio: 'Redução de dor em curto prazo.',
    limitacoes: 'Efeito e relevância clínica variam conforme protocolo e desfecho.',
    seguranca: 'Conferir sensibilidade, circulação e integridade da pele.',
    certeza: 'Baixa a moderada'
  },
  'oa_joelho__calor_sup': {
    beneficio: 'Alívio sintomático e redução de rigidez em contextos selecionados.',
    limitacoes: 'Não deve ser apresentado como tratamento isolado.',
    seguranca: 'Conferir sensibilidade térmica e risco de queimadura.',
    certeza: 'Baixa a moderada'
  },
  'oa_joelho__ultrassom': {
    beneficio: 'Possível redução modesta da dor em protocolos específicos.',
    limitacoes: 'Alta heterogeneidade entre modo contínuo e pulsado; efeito pequeno.',
    seguranca: 'Evitar sobre próteses cimentadas e áreas com déficit sensorial.',
    certeza: 'Baixa (específica por condição)'
  },
  'oa_joelho__diatermia_oc': {
    beneficio: 'Aquecimento profundo com possível alívio sintomático transitório.',
    limitacoes: 'Evidência heterogênea e limitações metodológicas nos ensaios.',
    seguranca: 'Rigoroso rastreio de implantes metálicos/eletrônicos.',
    certeza: 'Muito baixa a baixa'
  },
  'oa_joelho__tecar': {
    beneficio: 'Alívio sintomático quando combinado a exercícios ativos.',
    limitacoes: 'Sem superioridade comprovada sobre outras modalidades térmicas.',
    seguranca: 'Verificar sensibilidade térmica e acoplamento da placa.',
    certeza: 'Muito baixa a baixa'
  },
  'lombalgia__calor_sup': {
    beneficio: 'Alívio sintomático de dor e rigidez em curto prazo.',
    limitacoes: 'Efeito transitório; não substitui exercício e educação.',
    seguranca: 'Não deitar sobre bolsas quentes; checar sensibilidade.',
    certeza: 'Moderada (curto prazo)'
  },
  'entorse_tornozelo__crio_sup': {
    beneficio: 'Analgesia local nas primeiras 48 horas.',
    limitacoes: 'Benefício pequeno e incerto sobre edema e recuperação funcional.',
    seguranca: 'Proteger nervo fibular superficial; nunca aplicar gelo direto na pele.',
    certeza: 'Baixa a moderada'
  },
  'lesao_muscular_doms__imersao_fria': {
    beneficio: 'Redução da dor muscular tardia (DOMS) em 24–48h.',
    limitacoes: 'Pode atenuar adaptações de hipertrofia se usada cronicamente.',
    seguranca: 'Checar tolerância cardiovascular e fenômeno de Raynaud.',
    certeza: 'Moderada'
  },
  'po_artroplastia_joelho__crio_sup': {
    beneficio: 'Controle sintomático da dor no pós-operatório imediato.',
    limitacoes: 'Efeito modesto sobre o edema; usar como adjuvante.',
    seguranca: 'Proteger curativo cirúrgico contra umidade e observar perfusão distal.',
    certeza: 'Baixa a moderada'
  },
  'po_artroplastia_joelho__criocompressao': {
    beneficio: 'Analgesia precoce e conforto articular após artroplastia.',
    limitacoes: 'Custo elevado com vantagem clínica pequena sobre gelo convencional.',
    seguranca: 'Monitorar sinais de TVP, pressão excessiva e sensibilidade.',
    certeza: 'Baixa a moderada'
  },
  'oa_mao__parafina': {
    beneficio: 'Alívio de dor e rigidez articular antes de exercícios manuais.',
    limitacoes: 'Efeito de curto prazo; requer cinesioterapia associada.',
    seguranca: 'Conferir temperatura do banho (50–54 °C) e integridade da pele.',
    certeza: 'Baixa a moderada'
  },
  'tendinopatia_manguito__ultrassom': {
    beneficio: 'Sem benefício clínico consistente comprovado.',
    limitacoes: 'Evidência insuficiente para recomendar como intervenção principal.',
    seguranca: 'Evitar aplicação estática sobre acrômio/tubérculo maior.',
    certeza: 'Muito baixa (evidência insuficiente)'
  }
};