import React from 'react';
import { PageType } from '../types';
import { REAL_CASES } from '../data/siteData';
import { ShieldCheck, CheckCircle2, ArrowRight, Building, Layers, Zap } from 'lucide-react';

interface CasesPageProps {
  onNavigate: (page: PageType) => void;
  onOpenDiagnostic: () => void;
}

export const CasesPage: React.FC<CasesPageProps> = ({ onNavigate, onOpenDiagnostic }) => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono-tech tracking-wide mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
          <span>APLICAÇÕES REAIS EM OPERAÇÃO</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          Cases de Máquinas de Receita Construídas
        </h1>
        <p className="mt-4 text-base text-slate-300 leading-relaxed">
          Sem promessas irreais ou números inventados. Apresentamos a arquitetura de engenharia comercial implementada, os desafios superados e a transformação estrutural em empresas reais.
        </p>
      </div>

      {/* Real Cases Detailed List */}
      <div className="space-y-8">
        {REAL_CASES.map((caseItem, idx) => (
          <div
            key={caseItem.id}
            id={`case-card-${caseItem.id}`}
            className="p-8 sm:p-10 rounded-3xl bg-[#0c0618] border border-purple-950 hover:border-purple-500/30 transition-all shadow-xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-purple-950 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono-tech uppercase font-bold text-white px-2.5 py-1 rounded bg-purple-900 border border-purple-700">
                  ESTUDO DE CASO 0{idx + 1}
                </span>
                <span className="text-sm font-display font-bold text-white">
                  {caseItem.clientSegment}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {caseItem.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-[#150a2c] text-purple-300 border border-purple-900/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Challenge */}
              <div className="lg:col-span-4 p-5 rounded-2xl bg-rose-950/15 border border-rose-500/30">
                <span className="text-xs font-mono-tech text-rose-400 font-bold uppercase block mb-2">
                  O Desafio Inicial:
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {caseItem.challenge}
                </p>
              </div>

              {/* Solution Built */}
              <div className="lg:col-span-4 p-5 rounded-2xl bg-[#080312] border border-purple-950">
                <span className="text-xs font-mono-tech text-purple-300 font-bold uppercase block mb-2">
                  Máquina Construída pela Pluppex:
                </span>
                <div className="space-y-2">
                  {caseItem.solutionBuilt.map((sol, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Description */}
              <div className="lg:col-span-4 p-5 rounded-2xl bg-[#140728] border border-purple-500/30">
                <span className="text-xs font-mono-tech text-purple-300 font-bold uppercase block mb-2">
                  Impacto Estrutural:
                </span>
                <p className="text-sm text-slate-200 leading-relaxed font-medium">
                  {caseItem.impactDescription}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Callout */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0e0620] border border-purple-900/50 text-center shadow-xl">
        <h3 className="text-2xl font-display font-bold text-white uppercase">
          Pronto para Transformar a Operação Comercial da Sua Empresa?
        </h3>
        <p className="text-sm text-slate-400 mt-2 max-w-lg mx-auto">
          Construímos e operamos a infraestrutura ideal para o seu segmento e momento atual de faturamento.
        </p>
        <button
          onClick={onOpenDiagnostic}
          className="mt-6 px-6 py-3.5 rounded-xl bg-white text-[#090412] hover:bg-purple-100 font-display font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/20 transition-all"
        >
          Solicitar Diagnóstico para Minha Empresa
        </button>
      </div>
    </div>
  );
};
