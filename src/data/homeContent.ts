import {
  HomePillar,
  MachineTab,
  AuroraSignal,
  ProblemDisconnect,
  AudienceQualifier,
  ModularComponent,
  HowToStartStep,
} from '../types';

export const CTA_LABEL = 'DIAGNOSTICAR MINHA OPERAÇÃO';

export const HERO_EYEBROW = 'VENDER É CIÊNCIA, NÃO SORTE.';

export const HERO_HEADLINE_LINES = [
  'Sua empresa não precisa de mais ferramentas.',
  'Precisa de uma máquina de receita.',
];

export const HERO_BODY =
  'A Pluppex constrói e opera sua máquina de receita, conectando aquisição, CRM, inteligência, automação e operação comercial para transformar oportunidades em vendas.';

export const HERO_MICROCOPY = 'Descubra onde sua receita está travando.';

export const HOME_PILLARS: HomePillar[] = [
  {
    id: 'gerar',
    number: '01',
    label: 'GERAR',
    description: 'Criamos oportunidades através de aquisição e performance.',
  },
  {
    id: 'converter',
    number: '02',
    label: 'CONVERTER',
    description: 'Organizamos a operação comercial para transformar oportunidades em vendas.',
  },
  {
    id: 'escalar',
    number: '03',
    label: 'ESCALAR',
    description: 'Usamos tecnologia, dados e inteligência para fazer a operação crescer sem depender cada vez mais de esforço.',
  },
];

export const MACHINE_EYEBROW = 'A MÁQUINA DE RECEITA';
export const MACHINE_HEADLINE = 'Do sinal à receita.';
export const MACHINE_SUBHEADLINE =
  'Cada oportunidade gera dados. Cada dado gera inteligência. Cada inteligência orienta uma ação.';

export const MACHINE_TABS: MachineTab[] = [
  {
    id: 'aquisicao',
    label: 'AQUISIÇÃO',
    eyebrow: 'ENTRADA DA MÁQUINA',
    headline: 'Colocamos novas oportunidades dentro da máquina.',
    items: [
      'Tráfego pago',
      'Criativos',
      'Landing pages',
      'Funis',
      'Estratégia de aquisição',
      'Geração de demanda',
    ],
    resultLine: 'Mais oportunidades entrando.',
  },
  {
    id: 'spy',
    label: 'SPY',
    eyebrow: 'SISTEMA OPERACIONAL DA OPERAÇÃO',
    headline: 'Organizamos tudo que acontece com cada oportunidade.',
    items: [
      'CRM',
      'Pipeline',
      'Gestão de leads',
      'Follow-up',
      'WhatsApp',
      'Automação comercial',
    ],
    resultLine: 'Nenhuma oportunidade deveria desaparecer dentro da operação.',
  },
  {
    id: 'aurora',
    label: 'AURORA',
    eyebrow: 'INTELIGÊNCIA POR TRÁS DO SPY',
    headline: 'Transformamos dados da operação em inteligência e ação.',
    items: [
      'Agentes de IA',
      'Detecção de oportunidades',
      'Análise de conversas',
      'Priorização',
      'Recomendação de ações',
      'Automação inteligente',
    ],
    resultLine: 'Seu CRM não deveria apenas lembrar. Deveria perceber.',
  },
  {
    id: 'operacao',
    label: 'OPERAÇÃO',
    eyebrow: 'A MÁQUINA EM MOVIMENTO',
    headline: 'Fazemos a máquina funcionar.',
    items: [
      'RevOps',
      'Processos comerciais',
      'Tecnologia',
      'Integrações',
      'Automações',
      'Dashboards',
      'Business Intelligence',
      'Gestão financeira comercial',
      'Otimização',
    ],
    resultLine: 'Uma operação que melhora continuamente.',
  },
];

export const AURORA_SIGNALS: AuroraSignal[] = [
  { id: 'signal-1', label: 'Nova oportunidade detectada.' },
  { id: 'signal-2', label: 'Lead com alta intenção.' },
  { id: 'signal-3', label: 'Follow-up recomendado.' },
];

export const PROBLEM_EYEBROW = 'O PROBLEMA';
export const PROBLEM_HEADLINE = 'O problema não é falta de ferramentas.';
export const PROBLEM_SUBHEADLINE = 'É falta de conexão.';

export const PROBLEM_DISCONNECTS: ProblemDisconnect[] = [
  {
    id: 'marketing',
    actor: 'Marketing',
    statement: 'Marketing gera, mas não sabe o que aconteceu depois.',
  },
  {
    id: 'vendas',
    actor: 'Vendas',
    statement: 'Vendas recebe, mas perde oportunidades no caminho.',
  },
  {
    id: 'crm',
    actor: 'CRM',
    statement: 'CRM registra, mas ninguém acompanha tudo.',
  },
  {
    id: 'gestao',
    actor: 'Gestão',
    statement: 'Gestão analisa, mas descobre os problemas tarde.',
  },
];

export const PROBLEM_CLOSING_LINE = 'A PLUPPEX CONECTA TUDO.';

export const AUDIENCE_HEADLINE =
  'Para empresas que querem vender mais sem depender de mais esforço.';

export const AUDIENCE_QUALIFIERS: AudienceQualifier[] = [
  {
    id: 'geram-mas-perdem',
    statement: 'Já geram oportunidades, mas perdem vendas.',
  },
  {
    id: 'equipe-sem-previsibilidade',
    statement: 'Já possuem equipe, mas falta previsibilidade.',
  },
  {
    id: 'ferramentas-sem-conexao',
    statement: 'Já possuem ferramentas, mas falta conexão.',
  },
];

export const MODULAR_HEADLINE = 'Você não precisa comprar tudo.';
export const MODULAR_SUBHEADLINE =
  'A máquina é construída de acordo com o gargalo da sua empresa.';
export const MODULAR_CLOSING_LINE = 'O gargalo define a máquina.';

export const MODULAR_COMPONENTS: ModularComponent[] = [
  { id: 'performance', name: 'Performance', description: 'Aquisição e geração de demanda.' },
  { id: 'spy', name: 'SPY', description: 'CRM e operação comercial.' },
  { id: 'aurora', name: 'Aurora', description: 'Inteligência por trás da operação.' },
  { id: 'tech', name: 'Tech', description: 'Tecnologia e integrações.' },
  { id: 'automacao', name: 'Automação', description: 'Processos que rodam sem esforço manual.' },
  { id: 'revops', name: 'RevOps', description: 'Governança e dados da receita.' },
];

export const HOW_TO_START_EYEBROW = 'COMO COMEÇAR';
export const HOW_TO_START_HEADLINE = 'Comece pelo diagnóstico.';

export const HOW_TO_START_STEPS: HowToStartStep[] = [
  { number: '01', title: 'DIAGNOSTICAR', description: 'Encontramos onde a operação trava.' },
  { number: '02', title: 'CONSTRUIR', description: 'Definimos a estrutura necessária.' },
  { number: '03', title: 'OPERAR', description: 'Colocamos a máquina para funcionar.' },
  { number: '04', title: 'ESCALAR', description: 'Medimos, aprendemos e melhoramos.' },
];

export const FINAL_CTA_HEADLINE = 'Descubra onde sua máquina está travando.';
export const FINAL_CTA_BODY =
  'Antes de contratar qualquer coisa, descubra o que sua operação realmente precisa.';

export const SPY_AURORA_LINE = 'O SPY é onde sua equipe opera. A Aurora é a inteligência que opera por trás.';
