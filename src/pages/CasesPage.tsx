import React, { useState } from 'react';
import { PageType } from '../types';
import { REAL_CASES } from '../data/siteData';
import { PluppexLogo } from '../components/PluppexLogo';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Building, 
  Layers, 
  Zap, 
  TrendingUp, 
  BarChart3, 
  DollarSign, 
  Clock, 
  Check, 
  ChevronRight,
  Filter
} from 'lucide-react';

interface CasesPageProps {
  onNavigate: (page: PageType) => void;
  onOpenDiagnostic: () => void;
}

export const CasesPage: React.FC<CasesPageProps> = ({ onNavigate, onOpenDiagnostic }) => {
  const [activeSegmentFilter, setActiveSegmentFilter] = useState<string>('all');

  const caseMetrics = [
    { label: 'Crescimento Médio de Receita', val: '+184%', sub: 'em empresas com máquina Pluppex' },
    { label: 'Aceleração do Ciclo de Venda', val: '2.8x mais rápido', sub: 'do primeiro contato ao fechamento' },
    { label: 'Redução de Leads Esquecidos', val: 'Zero vazamento', sub: 'com SLAs ativos no S.P.Y' },
    { label: 'CAC Real Otimizado', val: '-34% em média', sub: 'com cruzamento de dados de caixa' },
  ];

  const filteredCases = REAL_CASES.filter((c) => {
    if (activeSegmentFilter === 'all') return true;
    if (activeSegmentFilter === 'distribuidora') return c.clientSegment.toLowerCase().includes('distribuidora');
    if (activeSegmentFilter === 'saude') return c.clientSegment.toLowerCase().includes('clínica') || c.clientSegment.toLowerCase().includes('médica');
    if (activeSegmentFilter === 'industria') return c.clientSegment.toLowerCase().includes('indústria');
    return true;
  });

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: CASES REAIS */}
      {/* ========================================================================= */}
      <section className="relative p-8 sm:p-14 lg:p-16 rounded-3xl bg-gradient-to-b from-[#180933] via-[#0e0520] to-[#070212] border border-purple-500/35 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/90 border border-purple-500/40 text-purple-200 text-xs font-mono-tech tracking-wide mb-6 shadow-lg shadow-purple-950/50">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold text-white">ENGENHARIA COMERCIAL COMPROVADA</span>
            <span className="text-slate-400">•</span>
            <span className="text-cyan-300">Resultados Reais</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white tracking-tight leading-[1.08] uppercase">
            Cases de Máquinas de Receita <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Construídas e em Operação.
            </span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl font-display text-purple-200/90 font-medium max-w-3xl leading-snug">
            Sem números de vaidade, sem promessas irreais. Apresentamos a arquitetura comercial implementada, os desafios superados e o impacto na última linha do balanço.
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-light">
            Empresas reais que saíram da dependência de indicação ou de agências passivas e hoje operam canais proprietários de aquisição com CRM sob medida e IA no WhatsApp.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenDiagnostic}
              className="px-8 py-4 rounded-xl bg-white text-[#080312] hover:bg-purple-100 font-display font-black text-xs uppercase tracking-wider shadow-xl shadow-purple-500/30 transition-all flex items-center justify-center gap-2.5 group"
            >
              <Zap className="w-4 h-4 text-purple-700 fill-purple-700" />
              <span>Diagnosticar Potencial da Minha Empresa</span>
              <ArrowRight className="w-4 h-4 text-purple-700 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Social Proof Strip */}
          <div className="mt-12 pt-6 border-t border-purple-900/50 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {caseMetrics.map((m, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
                <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">{m.label}</span>
                <span className="text-base sm:text-lg font-display font-bold text-white">{m.val}</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">{m.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CASE STUDIES DETAILED LIST WITH ANTES VS DEPOIS */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
              Estudos de Caso em Destaque
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Veja a estrutura exata implementada para cada segmento de atuação:
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-[#090314] p-1.5 rounded-2xl border border-purple-900/60 font-mono-tech text-xs">
            {[
              { id: 'all', label: 'Todos os Cases' },
              { id: 'distribuidora', label: 'Distribuição' },
              { id: 'saude', label: 'Saúde & Clínicas' },
              { id: 'industria', label: 'Indústria B2B' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveSegmentFilter(f.id)}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  activeSegmentFilter === f.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-md shadow-purple-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-purple-950/50'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* The Cases */}
        <div className="space-y-8">
          {filteredCases.map((caseItem, idx) => (
            <div
              key={caseItem.id}
              id={`case-card-${caseItem.id}`}
              className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#110724] to-[#090314] border border-purple-900/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-purple-900/60 pb-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono-tech uppercase font-bold text-white px-3 py-1 rounded-xl bg-purple-900 border border-purple-700 shadow-sm">
                    ESTUDO DE CASO 0{idx + 1}
                  </span>
                  <span className="text-base sm:text-lg font-display font-bold text-white">
                    {caseItem.clientSegment}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {caseItem.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono-tech px-2.5 py-1 rounded-lg bg-purple-950/80 text-purple-300 border border-purple-800/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* 1. O Desafio (Antes) */}
                <div className="lg:col-span-4 p-6 rounded-2xl bg-rose-950/20 border border-rose-500/30 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono-tech text-rose-400 font-bold uppercase block mb-3 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-400" />
                      O Gargalo Inicial (Antes):
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {caseItem.challenge}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-rose-900/40 text-[11px] font-mono-tech text-rose-300">
                    Sintoma: Falta de previsibilidade e dependência de terceiros.
                  </div>
                </div>

                {/* 2. A Máquina Construída */}
                <div className="lg:col-span-4 p-6 rounded-2xl bg-[#090314] border border-purple-900/60 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono-tech text-purple-300 font-bold uppercase block mb-3 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-purple-400" />
                      Máquina Construída pela Pluppex:
                    </span>
                    <div className="space-y-2.5">
                      {caseItem.solutionBuilt.map((sol, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-purple-950 text-[11px] font-mono-tech text-cyan-300">
                    Solução: Mídia + S.P.Y CRM + IA Aurora Integrados.
                  </div>
                </div>

                {/* 3. Impacto Estrutural (Depois) */}
                <div className="lg:col-span-4 p-6 rounded-2xl bg-gradient-to-br from-[#170830] to-[#100624] border border-purple-500/40 flex flex-col justify-between shadow-lg">
                  <div>
                    <span className="text-xs font-mono-tech text-emerald-400 font-bold uppercase block mb-3 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Impacto Estrutural no Caixa:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      {caseItem.impactDescription}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-purple-800/60 text-[11px] font-mono-tech text-emerald-300 font-bold">
                    Resultado: Canal proprietário com previsibilidade de escala.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. GRAND FINAL CTA */}
      {/* ========================================================================= */}
      <section className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-[#180833] via-[#0d041c] to-[#180833] border border-purple-500/40 text-center shadow-2xl overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-3">
            <PluppexLogo variant="icon" className="w-12 h-12" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight">
            Pronto para Construir a Próxima Máquina de Sucesso?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Vamos analisar os dados da sua empresa, identificar onde há dinheiro escorrendo pelo ralo e desenhar a esteira de receitas ideal para o seu modelo de negócio.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#090416] font-display font-black text-xs uppercase tracking-wider hover:bg-purple-100 transition-all shadow-xl shadow-purple-500/30 flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-purple-700 fill-purple-700" />
              <span>Solicitar Diagnóstico com os Sócios</span>
            </button>

            <button
              onClick={() => onNavigate('about')}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#120726] hover:bg-[#1b0a36] text-slate-300 hover:text-white border border-purple-900/60 text-xs font-mono-tech uppercase font-semibold transition-all flex items-center justify-center gap-2"
            >
              <span>Conhecer os Fundadores</span>
              <ChevronRight className="w-4 h-4 text-purple-400" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
