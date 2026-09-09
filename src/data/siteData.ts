import { MachineStage, ProblemItem, ProductItem, Founder, CaseItem } from '../types';

export const MACHINE_STAGES: MachineStage[] = [
  {
    id: 'demanda',
    number: '01',
    name: 'DEMANDA',
    components: ['Tráfego pago', 'Marketing', 'Estratégia'],
    description: 'Criamos canais estratégicos de atração para posicionar a empresa diante das pessoas certas com alta intenção de compra.',
    metricLabel: 'Canal Ativo',
    metricValue: 'Meta + Google + Outbound',
    iconName: 'Megaphone'
  },
  {
    id: 'oportunidades',
    number: '02',
    name: 'OPORTUNIDADES',
    components: ['Leads', 'Captação', 'Prospecção'],
    description: 'Transformamos atenção e tráfego em cadastros qualificados, levantadas de mão e oportunidades reais no pipeline.',
    metricLabel: 'Taxa de Entrada',
    metricValue: 'Captação Contínua 24/7',
    iconName: 'UserCheck'
  },
  {
    id: 'inteligencia',
    number: '03',
    name: 'INTELIGÊNCIA',
    components: ['IA', 'Agentes', 'Qualificação'],
    description: 'Filtros automatizados com IA que avaliam ICP, orçamento, timing e prioridade de atendimento em segundos.',
    metricLabel: 'Tempo de Triagem',
    metricValue: '< 45 segundos via IA',
    iconName: 'Cpu'
  },
  {
    id: 'organizacao',
    number: '04',
    name: 'ORGANIZAÇÃO',
    components: ['CRM', 'Pipeline', 'Processos'],
    description: 'Centralização total no CRM: nenhum lead perdido, histórico unificado, SLAs claros e etapas bem definidas.',
    metricLabel: 'Visibilidade',
    metricValue: '100% Pipeline Rastreável',
    iconName: 'Kanban'
  },
  {
    id: 'conversao',
    number: '05',
    name: 'CONVERSÃO',
    components: ['SDR', 'Closer', 'Follow-up', 'Vendas'],
    description: 'Equipe e agentes coordenados executando cadências cirúrgicas de abordagem, demonstração e fechamento.',
    metricLabel: 'Follow-up SLA',
    metricValue: 'Zero Oportunidades Esquecidas',
    iconName: 'BadgeCheck'
  },
  {
    id: 'dados',
    number: '06',
    name: 'DADOS',
    components: ['Indicadores', 'BI', 'Análise'],
    description: 'Dashboards executivos com CAC real, LTV, taxa de conversão por etapa, ciclo de vendas e ROI ponta a ponta.',
    metricLabel: 'Inteligência',
    metricValue: 'BI & Rastreio Ponta a Ponta',
    iconName: 'BarChart3'
  },
  {
    id: 'otimizacao',
    number: '07',
    name: 'OTIMIZAÇÃO',
    components: ['Melhoria Contínua', 'Ajuste de Funil', 'Testes'],
    description: 'Retroalimentação sistemática: gargalos são corrigidos semanalmente com base no comportamento real de compra.',
    metricLabel: 'Ciclo de Ajuste',
    metricValue: 'Sprints Semanais de Refino',
    iconName: 'RefreshCw'
  },
  {
    id: 'escala',
    number: '08',
    name: 'ESCALA',
    components: ['Mais Investimento', 'Mais Capacidade', 'Mais Receita'],
    description: 'Aceleração calculada: investimento alavancado com previsibilidade de retorno e margem protegida.',
    metricLabel: 'Resultado Final',
    metricValue: 'Crescimento Previsível',
    iconName: 'TrendingUp'
  }
];

export const PROBLEMS_LIST: ProblemItem[] = [
  {
    id: 'p1',
    quote: 'Tenho produto, mas falta cliente.',
    category: 'Demanda & Posicionamento',
    impact: 'Capacidade ociosa e receita estagnada por ausência de um canal previsível de aquisição.'
  },
  {
    id: 'p2',
    quote: 'Invisto em tráfego, mas não sei quanto realmente retorna.',
    category: 'Rastreabilidade & Métricas',
    impact: 'Dinheiro colocado em anúncios sem saber quais campanhas realmente geraram vendas no caixa.'
  },
  {
    id: 'p3',
    quote: 'Tenho leads, mas minha equipe não consegue converter.',
    category: 'Processo Comercial',
    impact: 'Tempo gasto com contatos desqualificados e falta de alinhamento entre o lead atraído e a oferta.'
  },
  {
    id: 'p4',
    quote: 'Meu vendedor esquece de fazer follow-up.',
    category: 'Disciplina de Vendas',
    impact: 'Mais de 60% das vendas são perdidas simplesmente porque ninguém retomou o contato após o primeiro não.'
  },
  {
    id: 'p5',
    quote: 'Meu comercial depende de uma ou duas pessoas.',
    category: 'Risco Operacional',
    impact: 'Vendas viram reféns de talento individual em vez de serem sustentadas por processo replicável.'
  },
  {
    id: 'p6',
    quote: 'Meu CRM está abandonado.',
    category: 'Organização & Ferramentas',
    impact: 'Informação descentralizada em planilhas e WhatsApp pessoal dos vendedores sem controle da diretoria.'
  },
  {
    id: 'p7',
    quote: 'Tenho várias ferramentas, mas elas não conversam.',
    category: 'Tecnologia & Integração',
    impact: 'Retrabalho manual, dados duplicados e lentidão entre a entrada do lead e a abordagem.'
  },
  {
    id: 'p8',
    quote: 'Minha operação é muito manual.',
    category: 'Eficiência Operacional',
    impact: 'Profissionais caros perdendo horas com cadastros, envio de e-mails padrão e tarefas mecânicas.'
  },
  {
    id: 'p9',
    quote: 'Não consigo enxergar onde estou perdendo vendas.',
    category: 'Diagnóstico & Gargalos',
    impact: 'Falta de visão clara da taxa de passagem entre etapas para saber se o problema é lead, pitch ou preço.'
  },
  {
    id: 'p10',
    quote: 'Quero utilizar IA, mas não sei como colocar dentro da operação.',
    category: 'Inteligência Artificial Prática',
    impact: 'IA usada apenas para perguntas banais em vez de atuar como agente de qualificação e aceleração de receita.'
  },
  {
    id: 'p11',
    quote: 'Quero crescer sem precisar aumentar a estrutura na mesma proporção.',
    category: 'Escala & Alavancagem',
    impact: 'Necessidade de dobrar a folha de pagamento para cada salto de receita, comendo a margem do negócio.'
  }
];

export const PRODUCTS_ECOSYSTEM: ProductItem[] = [
  {
    id: 'performance',
    code: 'PRODUTO 01',
    title: 'PLUPPEX PERFORMANCE',
    tagline: 'Aquisição e geração de demanda através de mídia paga orientada a oportunidades.',
    category: 'Tráfego Pago & Demanda',
    description: 'Não compramos cliques. Construímos canais de aquisição capazes de gerar oportunidades reais. Desenhamos funis completos de aquisição com Meta Ads, Google Ads e remarketing estratégico para alimentar o time comercial continuamente.',
    features: [
      'Meta Ads & Google Ads de Alta Performance',
      'Campanhas de aquisição e geração de leads qualificados',
      'Estruturação de funis multicamadas (Topo, Meio, Fundo)',
      'Produção e testes contínuos de criativos e copys',
      'Otimização orientada a CAC e receita gerada, não CTR',
      'Escala progressiva de orçamento com previsibilidade'
    ],
    quote: 'Não compramos cliques. Construímos canais de aquisição capazes de gerar oportunidades.',
    icon: 'Target',
    iconImage: '/src/assets/images/outline_data_icon_1788984508514.jpg',
    ctaText: 'Acelerar Demanda'
  },
  {
    id: 'tech',
    code: 'PRODUTO 02',
    title: 'PLUPPEX TECH',
    tagline: 'A infraestrutura tecnológica que permite à máquina funcionar e escalar.',
    category: 'Tecnologia & Infraestrutura',
    description: 'A tecnologia existe para tornar a operação mais rápida, inteligente e escalável. Criamos as pontes entre marketing, vendas e atendimento através de sistemas integrados, automações robustas e arquitetura de dados sem gargalos.',
    features: [
      'Integração nativa entre ferramentas via APIs e webhooks',
      'Automações comerciais de ponta a ponta',
      'Desenvolvimento de soluções personalizadas para o negócio',
      'Eliminação de tarefas manuais repetitivas',
      'Infraestrutura técnica pronta para receber agentes de IA',
      'Processos digitais padronizados e seguros'
    ],
    quote: 'A tecnologia existe para tornar a operação mais rápida, inteligente e escalável.',
    icon: 'Terminal',
    iconImage: '/src/assets/images/outline_automation_icon_1788984528985.jpg',
    ctaText: 'Estruturar Tecnologia'
  },
  {
    id: 'spy',
    code: 'PRODUTO 03',
    title: 'S.P.Y — O CRM DA PLUPPEX',
    tagline: 'O centro nevrálgico comercial: o CRM proprietário da Pluppex que enxerga cada oportunidade.',
    category: 'CRM Proprietário Pluppex',
    description: 'O S.P.Y é o CRM oficial da Pluppex, desenvolvido para dar visibilidade absoluta à diretoria e agilidade aos vendedores. Pipelines sob medida, histórico unificado de conversas, distribuição de leads por SLA e auditoria em tempo real para nunca mais deixar dinheiro na mesa.',
    features: [
      'Pipeline comercial visual e gestão rigorosa de etapas',
      'Histórico unificado de conversas, contatos e negociações',
      'Distribuição inteligente de leads e controle de SLAs',
      'Auditoria de oportunidades e prevenção de vazamento de receita',
      'Gestão de tarefas, prazos e follow-ups obrigatórios',
      'Integração nativa e direta com a inteligência artificial Aurora'
    ],
    quote: 'O S.P.Y é o CRM que a sua operação precisava para nunca mais deixar dinheiro na mesa.',
    icon: 'KanbanSquare',
    iconImage: '/src/assets/images/outline_crm_icon_1788984517441.jpg',
    ctaText: 'Conhecer o S.P.Y CRM'
  },
  {
    id: 'aurora',
    code: 'PRODUTO 04',
    title: 'AURORA — A IA DO S.P.Y E DA PLUPPEX',
    tagline: 'A inteligência artificial nativa que vive dentro do S.P.Y CRM e guia toda a operação.',
    category: 'Inteligência Artificial Proprietária',
    description: 'A Aurora é a inteligência artificial da Pluppex e o cérebro que opera dentro do S.P.Y CRM. Ela qualifica leads em menos de 1 minuto (SDR IA), audita mensagens, detecta intenções de compra, resgata orçamentos estagnados no WhatsApp e gera diagnósticos executivos preditivos para a liderança.',
    features: [
      'IA nativa integrada diretamente ao S.P.Y CRM',
      'SDR IA: Primeiro contato instantâneo, qualificação e agendamento',
      'Detecção algorítmica de intenção de compra e alertas ao closer',
      'Follow-up autônomo e resgate de orçamentos parados',
      'Diagnósticos preditivos de gargalos e unit economics da operação',
      'Copiloto executivo de crescimento em linguagem natural'
    ],
    quote: 'A inteligência artificial que transforma conversas e dados em receita fechada.',
    icon: 'Sparkles',
    iconImage: '/src/assets/images/outline_ai_icon_1788984498178.jpg',
    ctaText: 'Conhecer a Aurora IA'
  },
  {
    id: 'revops',
    code: 'PRODUTO 05',
    title: 'REVOPS — REVENUE OPERATIONS',
    tagline: 'Marketing gera a oportunidade. Vendas transforma a oportunidade em receita.',
    category: 'Operação Integrada',
    description: 'Acabamos com o abismo entre quem gera leads e quem vende. Unificamos Marketing, Vendas, Tecnologia, Dados e Processos sob uma governança única orientada a receita real.',
    features: [
      'Alinhamento de SLA rígido entre Marketing e Vendas',
      'Métrica compartilhada: CAC, Pipeline e Faturamento gerado',
      'Auditoria de pontos de atrito no ciclo de vida do cliente',
      'Otimização do ciclo de vendas (Sales Velocity)',
      'Eliminação de silos departamentais'
    ],
    quote: 'Marketing gera a oportunidade. Vendas transforma a oportunidade em receita.',
    icon: 'Layers',
    ctaText: 'Estruturar RevOps'
  },
  {
    id: 'coproducao',
    code: 'PRODUTO 06',
    title: 'LANÇAMENTOS & COPRODUÇÃO',
    tagline: 'Transformamos conhecimento e produtos em operações comerciais escaláveis.',
    category: 'Projetos Digitais & Escala',
    description: 'Atuação estratégica completa para empresas, especialistas e produtos de alto valor que buscam estruturar uma máquina digital robusta para lançamentos contínuos ou perenes.',
    features: [
      'Arquitetura de oferta e posicionamento de autoridade',
      'Estratégia de funis de alta conversão',
      'Gestão integral de mídia de alta volumetria',
      'Estruturação de time comercial ativo para fechamentos',
      'Tecnologia, automações e dashboards de lançamento'
    ],
    quote: 'Atuação estratégica completa para transformar produtos em operações comerciais.',
    icon: 'Rocket',
    ctaText: 'Coproduzir Projeto'
  }
];

export const FOUNDERS: Founder[] = [
  {
    name: 'Gustavo Oliveira',
    role: 'Gestão & Visão Estratégica',
    pillar: 'VISÃO',
    bio: 'Responsável pela visão estratégica, posicionamento, gestão e direcionamento da Pluppex. Atua na conexão entre negócio, marketing, vendas e estratégia de crescimento. Seu papel é garantir que a tecnologia e a operação estejam sempre conectadas ao objetivo mais importante: gerar crescimento e receita.',
    focusAreas: [
      'Visão Estratégica de Negócios',
      'Posicionamento de Mercado',
      'Conexão Marketing & Vendas',
      'Governança & Direcionamento'
    ],
    quote: 'A tecnologia e a operação devem sempre servir ao objetivo primordial: gerar crescimento sustentável e receita previsível.'
  },
  {
    name: 'Frederico',
    role: 'Comercial & Vendas',
    pillar: 'VENDAS',
    bio: 'Responsável pela área comercial e pela transformação da máquina em receita. Atua em prospecção, vendas, processos comerciais, negociação, gestão do pipeline, relacionamento e conversão. Seu foco é transformar oportunidades em clientes e construir um processo comercial cada vez mais previsível.',
    focusAreas: [
      'Processos Comerciais & Cadência',
      'Gestão de Pipeline & SDRs',
      'Negociação de Alto Ticket',
      'Cultura de Follow-up Ativo'
    ],
    quote: 'Gerar oportunidades sem saber convertê-las não é crescimento. Vender é método e disciplina.'
  },
  {
    name: 'Gustavo Henrique',
    role: 'Tecnologia & Inteligência Artificial',
    pillar: 'TECNOLOGIA',
    bio: 'Responsável pela tecnologia, desenvolvimento e inteligência artificial da Pluppex. Arquiteto do S.P.Y (o CRM proprietário da Pluppex) e da Aurora (a inteligência artificial nativa que opera no S.P.Y e em toda a operação). Transforma estratégia de negócios em tecnologia robusta capaz de operar, automatizar e escalar sem atritos.',
    focusAreas: [
      'Arquitetura do S.P.Y (CRM Pluppex)',
      'Inteligência Artificial Aurora (IA do S.P.Y)',
      'Automações Comerciais & APIs',
      'Infraestrutura da Máquina de Receita'
    ],
    quote: 'Tecnologia não é o produto final. É o motor que permite à máquina rodar sem atrito e crescer exponencialmente.'
  }
];

export const COMPARISON_DATA = [
  {
    aspect: 'Escopo de Entrega',
    traditional: 'Entrega posts, criativos avulsos e relatórios de cliques',
    pluppex: 'Constrói infraestrutura completa, CRM, processos e receita'
  },
  {
    aspect: 'Compromisso Central',
    traditional: 'Entregar leads brutos e "gerar engajamento"',
    pluppex: 'Gerar oportunidades qualificadas e transformá-las em clientes'
  },
  {
    aspect: 'Atuação Comercial',
    traditional: '"Não cuidamos de vendas, nossa parte acaba no lead"',
    pluppex: 'Estrutura pipeline, cadências de follow-up, SDRs e closer'
  },
  {
    aspect: 'Tecnologia & CRM',
    traditional: 'Nenhum suporte ou deixa o CRM por conta do cliente',
    pluppex: 'Implementa, parametriza e gerencia CRM com regras e automação'
  },
  {
    aspect: 'Inteligência Artificial',
    traditional: 'Usa apenas para rascunhos básicos de texto',
    pluppex: 'Agentes autônomos para qualificação, resgate e auditoria'
  },
  {
    aspect: 'Visão de Dados',
    traditional: 'Relatório estático de curtidas, impressões e cliques',
    pluppex: 'BI ponta a ponta com CAC, tempo de ciclo e faturamento'
  },
  {
    aspect: 'Modelo de Parceria',
    traditional: 'Mero fornecedor de serviços pontuais',
    pluppex: 'Parceiro estratégico que opera e otimiza a máquina junto'
  }
];

export const WORK_MODEL_STEPS = [
  {
    step: '01',
    title: 'DIAGNÓSTICO',
    description: 'Imersão completa na operação para entender produto, mercado, oferta, marketing, vendas, tecnologia, processos e dados.',
    highlight: 'Identificamos com precisão cirúrgica onde a empresa está perdendo receita.'
  },
  {
    step: '02',
    title: 'CONSTRUÇÃO',
    description: 'Engenharia da infraestrutura: canais de tráfego, parametrização de CRM, roteiros comerciais, automações e agentes de IA.',
    highlight: 'Montamos os trilhos para que nenhum lead escape sem acompanhamento.'
  },
  {
    step: '03',
    title: 'OPERAÇÃO',
    description: 'A Pluppex entra em campo junto com sua empresa: gestão de performance, otimização diária, evolução técnica e inteligência.',
    highlight: 'Operamos a máquina lado a lado garantindo execução impecável.'
  },
  {
    step: '04',
    title: 'ESCALA',
    description: 'Após os sinais claros de previsibilidade e unit economics validados, aumentamos o investimento e a capacidade de entrega.',
    highlight: 'Multiplicação de demanda, conversão e faturamento com margem.'
  }
];

export const REAL_CASES: CaseItem[] = [
  {
    id: 'case-b2b-saas',
    clientSegment: 'B2B Software & Tecnologia Corporativa',
    challenge: 'Investimento alto em Google Ads gerando leads desqualificados; time comercial perdia 4 horas diárias com triagem manual.',
    solutionBuilt: [
      'Filtro de qualificação prévia com a IA Aurora (SDR IA da Pluppex) em tempo real',
      'Parametrização do S.P.Y CRM com distribuição automática por faturamento da empresa lead',
      'Cadência automática de follow-up multicanal (WhatsApp + E-mail) integrada ao S.P.Y',
      'Dashboard executivo Aurora cruzando palavra-chave de anúncio com contrato fechado'
    ],
    impactDescription: 'Redução do tempo de primeiro contato de 3 horas para 40 segundos. Eliminação do atrito de triagem, liberando o time comercial para focar exclusivamente em reuniões qualificadas.',
    tags: ['Aurora IA', 'Google Ads', 'S.P.Y CRM', 'RevOps']
  },
  {
    id: 'case-servicos-alto-ticket',
    clientSegment: 'Consultoria e Serviços Empresariais',
    challenge: 'Base com mais de 3.000 orçamentos parados no histórico de WhatsApp de vendedores antigos sem nenhum follow-up.',
    solutionBuilt: [
      'Implementação do S.P.Y CRM para centralizar todo o pipeline e histórico de contatos',
      'Ativação da Aurora IA para auditar conversas passadas e identificar intenções latentes',
      'Follow-up autônomo executado pela Aurora com ofertas de reativação personalizadas',
      'Campanha de Meta Ads focada em tomadores de decisão (ABM)'
    ],
    impactDescription: 'Resgate de 84 negociações consideradas "perdidas" em menos de 45 dias sem gastar R$ 1 a mais em novos anúncios, apenas organizando a máquina.',
    tags: ['S.P.Y CRM', 'Aurora IA', 'Meta Ads', 'Reativação']
  },
  {
    id: 'case-industria-distribuicao',
    clientSegment: 'Indústria & Distribuição Regional',
    challenge: 'Dependência total de indicações e representantes comerciais externos; diretoria não sabia quem eram os potenciais clientes em negociação.',
    solutionBuilt: [
      'Construção de canal previsível de geração de demanda ativa e passiva',
      'Implementação de CRM corporativo com controle de carteira e prospecção',
      'Automatização de geração de propostas comerciais e alertas de follow-up',
      'Treinamento e acompanhamento dos processos comerciais pela liderança da Pluppex'
    ],
    impactDescription: 'Criação do primeiro canal proprietário de aquisição da empresa, reduzindo a vulnerabilidade da dependência de terceiros e dando previsibilidade ao faturamento.',
    tags: ['Máquina de Receita', 'CRM Corporativo', 'Automação', 'B2B']
  }
];

export const MANIFESTO_TEXT = {
  headline: 'Vender é ciência, não sorte.',
  paragraphs: [
    'Toda empresa quer crescer.',
    'Mas poucas possuem uma máquina capaz de sustentar esse crescimento.',
    'Algumas têm marketing, mas não têm vendas.',
    'Outras têm vendedores, mas não têm processo.',
    'Algumas têm CRM, mas ninguém usa.',
    'Outras investem em tráfego, mas não sabem o retorno.',
    'Algumas possuem tecnologia, mas tudo está desconectado.',
    'E muitas querem usar inteligência artificial, mas não sabem onde aplicá-la.',
    'A Pluppex existe para conectar tudo isso.',
    'Construímos e operamos máquinas de receita.',
    'Geramos oportunidades. Organizamos oportunidades. Potencializamos vendas. Automatizamos operações. Aplicamos inteligência. Medimos. Otimizamos. Escalamos.',
    'Porque crescimento não deveria depender de sorte.'
  ],
  conclusion: 'Vender é ciência, não sorte.'
};
