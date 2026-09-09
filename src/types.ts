export type PageType =
  | 'home'
  | 'solutions'
  | 'technology'
  | 'spy'
  | 'aurora'
  | 'cases'
  | 'about'
  | 'diagnostic';

export interface MachineStage {
  id: string;
  number: string;
  name: string;
  components: string[];
  description: string;
  metricLabel: string;
  metricValue: string;
  iconName: string;
}

export interface ProblemItem {
  id: string;
  quote: string;
  category: string;
  impact: string;
}

export interface ProductItem {
  strategicDelivery: any;
  techStack: any;
  pillars: any;
  id: string;
  code: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  features: string[];
  quote: string;
  icon: string;
  iconImage?: string;
  ctaText: string;
}

export interface Founder {
  name: string;
  role: string;
  pillar: 'VISÃO' | 'VENDAS' | 'TECNOLOGIA';
  bio: string;
  focusAreas: string[];
  quote: string;
}

export interface DiagnosticFormData {
  name: string;
  company: string;
  whatsapp: string;
  email: string;
  segment: string;
  city: string;
  revenueRange: string;
  salesRepsCount: string;
  marketingInvestment: string;
  mainChallenge: string;
  mainGoal: string;
  biggestLeak: string;
  selectedProblems?: string[];
}

export interface CaseItem {
  id: string;
  clientSegment: string;
  challenge: string;
  solutionBuilt: string[];
  impactDescription: string;
  tags: string[];
}
