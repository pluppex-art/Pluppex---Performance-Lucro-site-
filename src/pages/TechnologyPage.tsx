import React, { useState } from 'react';
import { PageType } from '../types';
import { PluppexLogo } from '../components/PluppexLogo';
import { 
  Terminal, 
  Cpu, 
  Bot, 
  Eye, 
  Sparkles, 
  Kanban, 
  Zap, 
  Network, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Database,
  Lock,
  Workflow,
  ShieldCheck,
  Server,
  Code,
  Activity,
  ChevronRight,
  Globe,
  Radio
} from 'lucide-react';

interface TechnologyPageProps {
  onNavigate: (page: PageType) => void;
  onOpenDiagnostic: () => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({ onNavigate, onOpenDiagnostic }) => {
  const [activeStackTab, setActiveStackTab] = useState<'all' | 'crm' | 'ai' | 'infra'>('all');

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: MOTOR TECNOLÓGICO PLUPPEX */}
      {/* ========================================================================= */}
      <section className="relative p-8 sm:p-14 lg:p-16 rounded-3xl bg-gradient-to-b from-[#180933] via-[#0e0520] to-[#070212] border border-purple-500/35 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/90 border border-purple-500/40 text-purple-200 text-xs font-mono-tech tracking-wide mb-6 shadow-lg shadow-purple-950/50">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-semibold text-white">INFRAESTRUTURA & ARQUITETURA</span>
            <span className="text-slate-400">•</span>
            <span className="text-emerald-300">Alta Disponibilidade</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white tracking-tight leading-[1.08] uppercase">
            Tecnologia Aplicada à Receita: <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              O Motor Invisível da Máquina.
            </span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl font-display text-purple-200/90 font-medium max-w-3xl leading-snug">
            "Tecnologia não é o produto. É o motor que transforma tráfego em vendas e dados em decisões lucrativas."
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-light">
            Construímos a esteira que conecta Meta e Google Ads, pipelines no S.P.Y CRM, automações em Python, webhooks de baixa latência e agentes de IA autônomos para eliminar gargalos operacionais.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              id="tech-hero-cta"
              onClick={onOpenDiagnostic}
              className="px-8 py-4 rounded-xl bg-white text-[#080312] hover:bg-purple-100 font-display font-black text-xs uppercase tracking-wider shadow-xl shadow-purple-500/30 transition-all flex items-center justify-center gap-2.5 group"
            >
              <Zap className="w-4 h-4 text-purple-700 fill-purple-700" />
              <span>Conectar Minha Operação ao Motor Pluppex</span>
              <ArrowRight className="w-4 h-4 text-purple-700 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Infrastructure Metrics Strip */}
          <div className="mt-12 pt-6 border-t border-purple-900/50 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Latência de Webhook</span>
              <span className="text-base sm:text-lg font-display font-bold text-emerald-400">&lt; 180ms</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Disparo instantâneo</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Disponibilidade</span>
              <span className="text-base sm:text-lg font-display font-bold text-cyan-300">99.98% SLA</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Operação ininterrupta</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Segurança & LGPD</span>
              <span className="text-base sm:text-lg font-display font-bold text-purple-300">AES-256</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Dados criptografados</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Conexão WhatsApp</span>
              <span className="text-base sm:text-lg font-display font-bold text-white">Nativa Oficial</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Sem risco de bloqueio</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE INTERACTIVE TECH TOPOLOGY (STACK VISUALIZER) */}
      {/* ========================================================================= */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#120728] to-[#090314] border border-purple-500/40 shadow-2xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono-tech uppercase font-semibold mb-3">
            <Workflow className="w-3.5 h-3.5 text-cyan-400" />
            <span>TOPOLOGIA DA ARQUITETURA</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
            Como Cada Camada se Conecta em Milissegundos
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            A infraestrutura integrada que alimenta a esteira de vendas e relatórios em tempo real:
          </p>
        </div>

        {/* The 4 Architectural Layers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Layer 1: Ingestion */}
          <div className="p-6 rounded-2xl bg-[#090314] border border-purple-900/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-tech text-purple-400 font-bold px-2 py-0.5 rounded bg-purple-950 border border-purple-800">
                  CAMADA 01
                </span>
                <Radio className="w-4 h-4 text-purple-400 animate-pulse" />
              </div>
              <h3 className="font-display font-bold text-base text-white mb-2">
                Ingestão de Demanda
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Webhooks e APIs que capturam eventos de conversão no Meta Ads, Google Ads e formulários, normalizando os dados em menos de 200ms.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-950 text-[11px] font-mono-tech text-purple-300">
              • Meta Conversions API + CAPI
            </div>
          </div>

          {/* Layer 2: Intelligence */}
          <div className="p-6 rounded-2xl bg-[#090314] border border-purple-900/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-tech text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800">
                  CAMADA 02
                </span>
                <Bot className="w-4 h-4 text-cyan-400" />
              </div>
              <h3 className="font-display font-bold text-base text-white mb-2">
                Motor Cognitivo Aurora
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Modelos de linguagem avançados parametrizados para qualificação comercial, análise fonética de áudio no WhatsApp e cálculo de score.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-950 text-[11px] font-mono-tech text-cyan-300">
              • NLP & Whisper Fine-Tuned
            </div>
          </div>

          {/* Layer 3: CRM Core */}
          <div className="p-6 rounded-2xl bg-[#090314] border border-purple-900/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-tech text-purple-300 font-bold px-2 py-0.5 rounded bg-purple-950 border border-purple-800">
                  CAMADA 03
                </span>
                <Kanban className="w-4 h-4 text-purple-400" />
              </div>
              <h3 className="font-display font-bold text-base text-white mb-2">
                Núcleo S.P.Y CRM
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Banco de dados de alta concorrência gerenciando pipelines, SLAs de vendedores, travas de avanço de fase e automações de cadência.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-950 text-[11px] font-mono-tech text-purple-300">
              • PostgreSQL + Redis Caching
            </div>
          </div>

          {/* Layer 4: RevOps & Data Warehouse */}
          <div className="p-6 rounded-2xl bg-[#090314] border border-purple-900/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-tech text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800">
                  CAMADA 04
                </span>
                <Server className="w-4 h-4 text-emerald-400" />
              </div>
              <h3 className="font-display font-bold text-base text-white mb-2">
                BI & Inteligência de Caixa
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Rastreamento ponta a ponta que cruza investimento de mídia com dinheiro real que entra no banco, eliminando achismos táticos.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-950 text-[11px] font-mono-tech text-emerald-400">
              • BI Executivo em Tempo Real
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OS 6 PILARES TECNOLÓGICOS DETALHADOS */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
            Pilares Tecnológicos da Máquina
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Engenharia de software aplicada a vendas para gerar previsibilidade absoluta:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: S.P.Y CRM */}
          <div className="p-7 rounded-3xl bg-[#0e0620] border border-purple-900/50 hover:border-purple-500/50 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-purple-950/80 border border-purple-500/40 text-purple-300">
                  <Kanban className="w-6 h-6 text-purple-300" />
                </div>
                <span className="text-[10px] font-mono-tech text-purple-300 font-bold px-2 py-0.5 rounded bg-purple-950 border border-purple-800">
                  CRM PROPRIETÁRIO
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                S.P.Y — O CRM da Pluppex
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4 font-light">
                "O S.P.Y é o CRM que enxerga cada oportunidade." Centraliza pipelines sob medida, histórico de conversas, distribuição de leads por SLA e auditoria em tempo real.
              </p>
              <div className="space-y-2 text-xs font-mono-tech text-slate-300">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Pipeline comercial rigoroso</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Distribuição inteligente (Round Robin)</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Integração nativa com a IA Aurora</span>
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-950">
              <button
                onClick={() => onNavigate('spy')}
                className="text-xs font-mono-tech uppercase text-purple-300 hover:text-white font-bold flex items-center gap-1"
              >
                <span>Ver S.P.Y CRM</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Aurora AI Engine */}
          <div className="p-7 rounded-3xl bg-[#0e0620] border border-purple-900/50 hover:border-purple-500/50 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                  <Bot className="w-6 h-6 text-cyan-300" />
                </div>
                <span className="text-[10px] font-mono-tech text-cyan-300 font-bold px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800">
                  IA NATIVA
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                Aurora — Inteligência Artificial
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4 font-light">
                Motor cognitivo integrado ao S.P.Y CRM que analisa conversas, qualifica leads em menos de 1 minuto, agenda follow-ups obrigatórios e prevê fechamento de vendas.
              </p>
              <div className="space-y-2 text-xs font-mono-tech text-slate-300">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>SDR Autônomo 24/7 no WhatsApp</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Transcrição e análise de áudios</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Auditoria e resgate automático de leads</span>
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-950">
              <button
                onClick={() => onNavigate('aurora')}
                className="text-xs font-mono-tech uppercase text-cyan-300 hover:text-white font-bold flex items-center gap-1"
              >
                <span>Ver Aurora IA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: RevOps & Data Pipeline */}
          <div className="p-7 rounded-3xl bg-[#0e0620] border border-purple-900/50 hover:border-purple-500/50 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-purple-950/80 border border-purple-500/40 text-purple-300">
                  <Database className="w-6 h-6 text-purple-300" />
                </div>
                <span className="text-[10px] font-mono-tech text-purple-300 font-bold px-2 py-0.5 rounded bg-purple-950 border border-purple-800">
                  DADOS & REVOPS
                </span>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                RevOps & Data Intelligence
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4 font-light">
                Unificação dos dados de tráfego, vendas, conversão e financeiro. Permite calcular o CAC real e a margem líquida por canal de aquisição sem planilhas soltas.
              </p>
              <div className="space-y-2 text-xs font-mono-tech text-slate-300">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Rastreamento ponta a ponta</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Visão executiva para diretores</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Alertas preditivos de desvio de meta</span>
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-950">
              <button
                onClick={onOpenDiagnostic}
                className="text-xs font-mono-tech uppercase text-purple-300 hover:text-white font-bold flex items-center gap-1"
              >
                <span>Diagnosticar Dados</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. GRAND FINAL CTA */}
      {/* ========================================================================= */}
      <section className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-[#180833] via-[#0d041c] to-[#180833] border border-purple-500/40 text-center shadow-2xl overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-3">
            <PluppexLogo variant="icon" className="w-12 h-12" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight">
            Pronto para Integrar Essa Tecnologia na Sua Empresa?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Desenvolvemos e operamos toda a arquitetura tecnológica necessária para que seu time comercial feche mais contratos com menos esforço manual.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#090416] font-display font-black text-xs uppercase tracking-wider hover:bg-purple-100 transition-all shadow-xl shadow-purple-500/30 flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-purple-700 fill-purple-700" />
              <span>Diagnosticar Minha Infraestrutura</span>
            </button>

            <button
              onClick={() => onNavigate('cases')}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#120726] hover:bg-[#1b0a36] text-slate-300 hover:text-white border border-purple-900/60 text-xs font-mono-tech uppercase font-semibold transition-all flex items-center justify-center gap-2"
            >
              <span>Ver Cases de Sucesso</span>
              <ChevronRight className="w-4 h-4 text-purple-400" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
