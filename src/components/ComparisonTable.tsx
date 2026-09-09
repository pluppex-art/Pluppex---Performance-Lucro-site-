import React from 'react';
import { COMPARISON_DATA } from '../data/siteData';
import { XCircle, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface ComparisonTableProps {
  onOpenDiagnostic: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onOpenDiagnostic }) => {
  return (
    <section id="diferencial-pluppex" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono-tech tracking-wide mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
          <span>O DIFERENCIAL COMPETITIVO</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          Agência Tradicional vs Pluppex
        </h2>
        <p className="mt-4 text-base text-slate-400">
          Por que a Pluppex não opera como uma agência de marketing ou tráfego comum.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-purple-900/40 bg-[#0c0618] shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-purple-900/50 bg-[#120825] text-xs font-mono-tech uppercase">
              <th className="py-4 px-6 text-slate-400 font-semibold w-1/4">Critério Operacional</th>
              <th className="py-4 px-6 text-rose-300/80 font-semibold w-3/8 bg-rose-950/20 border-r border-purple-900/50">
                Agência Tradicional
              </th>
              <th className="py-4 px-6 text-purple-200 font-bold w-3/8 bg-purple-950/40">
                Pluppex (Máquina de Receita)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-950/60 text-sm">
            {COMPARISON_DATA.map((row, idx) => (
              <tr key={idx} className="hover:bg-purple-950/20 transition-colors">
                <td className="py-4 px-6 font-display font-semibold text-slate-200">
                  {row.aspect}
                </td>
                <td className="py-4 px-6 text-slate-400 bg-rose-950/10 border-r border-purple-950/60">
                  <div className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-rose-500/70 shrink-0 mt-0.5" />
                    <span>{row.traditional}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-white font-medium bg-purple-950/20">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{row.pluppex}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Signature statement below comparison */}
      <div className="mt-12 text-center">
        <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase tracking-tight">
          NÃO SOMOS APENAS QUEM GERA LEADS.
        </h3>
        <p className="text-2xl sm:text-3xl font-display font-extrabold text-white uppercase mt-1">
          SOMOS QUEM CONSTRÓI A MÁQUINA PARA TRANSFORMÁ-LOS EM RECEITA.
        </p>

        <div className="mt-6">
          <button
            id="btn-comparison-cta"
            onClick={onOpenDiagnostic}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#090412] hover:bg-purple-100 transition-all font-display text-xs uppercase font-bold shadow-lg shadow-purple-500/20"
          >
            <span>Fazer Diagnóstico de Transição de Modelo</span>
            <ArrowRight className="w-4 h-4 text-purple-700" />
          </button>
        </div>
      </div>
    </section>
  );
};
