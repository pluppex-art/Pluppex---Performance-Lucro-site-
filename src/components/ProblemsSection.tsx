import React, { useState } from 'react';
import { PROBLEMS_LIST } from '../data/siteData';
import { ProblemItem } from '../types';
import { AlertTriangle, CheckSquare, Square, ArrowRight, ShieldAlert, Zap } from 'lucide-react';

interface ProblemsSectionProps {
  onOpenDiagnosticWithProblems: (selectedProblems: string[]) => void;
}

export const ProblemsSection: React.FC<ProblemsSectionProps> = ({ onOpenDiagnosticWithProblems }) => {
  const [selectedProblems, setSelectedProblems] = useState<string[]>(['p1', 'p3', 'p4']);

  const toggleProblem = (id: string) => {
    setSelectedProblems((prev) => 
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedProblems.length === PROBLEMS_LIST.length) {
      setSelectedProblems([]);
    } else {
      setSelectedProblems(PROBLEMS_LIST.map((p) => p.id));
    }
  };

  return (
    <section id="problemas-resolvidos" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background flare */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs font-mono-tech tracking-wide mb-4">
          <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
          <span>DIAGNÓSTICO DE PONTOS DE FRICÇÃO COMERCIAL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
          Sua empresa tem algum desses problemas?
        </h2>
        <p className="mt-4 text-base text-slate-400">
          Selecione as frases que retratam a rotina atual do seu comercial. Veja como esses sintomas drenam a margem e impedem o crescimento previsível.
        </p>
      </div>

      {/* Quick Interactive Checklist Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#0d071c] border border-purple-900/50 mb-8 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <button
            id="btn-toggle-all-problems"
            onClick={handleSelectAll}
            className="text-xs font-mono-tech text-purple-300 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            {selectedProblems.length === PROBLEMS_LIST.length ? (
              <CheckSquare className="w-4 h-4 text-purple-400" />
            ) : (
              <Square className="w-4 h-4 text-purple-700" />
            )}
            <span>{selectedProblems.length === PROBLEMS_LIST.length ? 'Desmarcar todos' : 'Selecionar todos os 11'}</span>
          </button>
          <span className="text-purple-900">|</span>
          <span className="text-xs font-mono-tech text-slate-400">
            Identificados: <strong className="text-white font-bold">{selectedProblems.length}</strong> de {PROBLEMS_LIST.length} gargalos
          </span>
        </div>

        {selectedProblems.length > 0 && (
          <button
            id="btn-diagnose-selected-problems"
            onClick={() => onOpenDiagnosticWithProblems(selectedProblems)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-900/40 hover:bg-purple-900/60 text-purple-200 border border-purple-500/40 text-xs font-mono-tech uppercase font-semibold transition-all"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-purple-400" />
            <span>Eliminar esses {selectedProblems.length} gargalos na Pluppex</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* 11 Problems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROBLEMS_LIST.map((problem) => {
          const isSelected = selectedProblems.includes(problem.id);
          return (
            <div
              key={problem.id}
              id={`problem-card-${problem.id}`}
              onClick={() => toggleProblem(problem.id)}
              className={`p-5 rounded-xl border transition-all duration-200 cursor-pointer select-none relative flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#150a2b] border-purple-500/60 shadow-[0_0_15px_rgba(168,85,247,0.15)]'
                  : 'bg-[#0b0517]/70 border-purple-950/60 hover:border-purple-800 hover:bg-[#120824]'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-[10px] font-mono-tech uppercase px-2 py-0.5 rounded bg-[#160b2e] text-purple-300 border border-purple-900/60">
                    {problem.category}
                  </span>
                  <div className={`p-1 rounded transition-colors ${isSelected ? 'text-purple-400' : 'text-purple-900'}`}>
                    {isSelected ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4" />}
                  </div>
                </div>

                <h3 className={`text-base font-display font-semibold transition-colors ${
                  isSelected ? 'text-white' : 'text-slate-300'
                }`}>
                  "{problem.quote}"
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-purple-950">
                <p className="text-xs text-slate-400 leading-relaxed">
                  <span className="font-semibold text-purple-300">Impacto real: </span>
                  {problem.impact}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Culminating Banner: É PARA ISSO QUE A PLUPPEX EXISTE */}
      <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0f0721] via-[#140a2c] to-[#0f0721] border border-purple-500/30 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <span className="text-xs font-mono-tech tracking-widest uppercase text-purple-300 font-semibold mb-2 inline-block">
          RESPOSTA ESTRUTURAL PLUPPEX
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
          É PARA ISSO QUE A PLUPPEX EXISTE.
        </h3>
        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Nenhuma dessas dores se resolve comprando mais uma ferramenta isolada ou trocando de agência de posts. Elas são resolvidas quando você constrói uma <strong>máquina de receita</strong> integrada e operada com rigor científico.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <button
            id="btn-problems-banner-cta"
            onClick={() => onOpenDiagnosticWithProblems(selectedProblems)}
            className="px-6 py-3.5 rounded-xl bg-white text-[#090412] hover:bg-purple-100 font-display font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-purple-500/25 flex items-center gap-2"
          >
            <Zap className="w-4 h-4 text-purple-600" />
            <span>Diagnosticar Minha Operação Agora</span>
          </button>
        </div>
      </div>
    </section>
  );
};
