import React from 'react';
import { FOUNDERS } from '../data/siteData';
import { Compass, TrendingUp, Cpu, Users, Quote, ArrowRight, ShieldCheck } from 'lucide-react';

interface FoundersSectionProps {
  onOpenDiagnostic: () => void;
}

export const FoundersSection: React.FC<FoundersSectionProps> = ({ onOpenDiagnostic }) => {
  const getPillarIcon = (pillar: string) => {
    switch (pillar) {
      case 'VISÃO':
        return <Compass className="w-5 h-5 text-purple-300" />;
      case 'VENDAS':
        return <TrendingUp className="w-5 h-5 text-purple-300" />;
      case 'TECNOLOGIA':
        return <Cpu className="w-5 h-5 text-purple-300" />;
      default:
        return <Users className="w-5 h-5 text-purple-300" />;
    }
  };

  const getPillarColor = (pillar: string) => {
    switch (pillar) {
      case 'VISÃO':
        return 'border-purple-500/40 bg-purple-950/40 text-purple-200';
      case 'VENDAS':
        return 'border-purple-500/40 bg-purple-950/40 text-purple-200';
      case 'TECNOLOGIA':
        return 'border-purple-500/40 bg-purple-950/40 text-purple-200';
      default:
        return 'border-purple-900 bg-[#120824] text-purple-300';
    }
  };

  return (
    <section id="quem-esta-por-tras" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono-tech tracking-wide mb-4">
          <Users className="w-3.5 h-3.5 text-purple-400" />
          <span>LIDERANÇA & SÓCIOS FUNDADORES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          Quem está por trás da Pluppex
        </h2>
        <p className="mt-3 text-lg font-display text-purple-300 font-semibold">
          Três competências. Uma única máquina de receita.
        </p>
        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
          A Pluppex nasceu da união de três sócios com competências complementares para construir uma empresa capaz de unir estratégia, vendas e tecnologia. Não somos apenas uma agência. Somos uma operação construída para ajudar outras empresas a crescer.
        </p>
      </div>

      {/* 3 Founders Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FOUNDERS.map((founder, idx) => (
          <div
            key={idx}
            id={`founder-card-${idx}`}
            className="p-6 sm:p-7 rounded-2xl bg-[#0c0618] border border-purple-950 hover:border-purple-500/50 transition-all shadow-xl flex flex-col justify-between group"
          >
            <div>
              {/* Header with pillar badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono-tech uppercase font-bold border flex items-center gap-1.5 ${getPillarColor(founder.pillar)}`}>
                  {getPillarIcon(founder.pillar)}
                  <span>PILAR {founder.pillar}</span>
                </span>
                <span className="text-xs font-mono-tech text-slate-500">0{idx + 1} / 03</span>
              </div>

              {/* Founder Name & Role */}
              <h3 className="text-2xl font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                {founder.name}
              </h3>
              <p className="text-xs font-mono-tech text-purple-300 uppercase tracking-wide mt-1 mb-4 font-semibold">
                {founder.role}
              </p>

              {/* Bio */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {founder.bio}
              </p>

              {/* Key Focus areas */}
              <div className="space-y-2 mb-6">
                <span className="text-[10px] font-mono-tech uppercase text-slate-400 font-bold block">
                  Áreas de Atuação Direta:
                </span>
                <div className="space-y-1.5">
                  {founder.focusAreas.map((area, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote block */}
            <div className="pt-4 border-t border-purple-950 mt-auto">
              <div className="flex items-start gap-2">
                <Quote className="w-4 h-4 text-purple-400/60 shrink-0 mt-0.5" />
                <p className="text-xs italic text-slate-400 leading-normal">
                  "{founder.quote}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Synthesis Section: Três Sócios. Três Competências. */}
      <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-[#0d061c] border border-purple-900/50 relative overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs font-mono-tech text-purple-300 tracking-wider uppercase font-semibold">
              EQUAÇÃO DE SUCESSO
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
              Três Sócios. Três Competências.
            </h3>
            <p className="text-xl sm:text-2xl font-display font-extrabold text-white uppercase mt-1">
              JUNTOS: UMA MÁQUINA DE RECEITA.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-slate-300 font-mono-tech">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <strong>Estratégia</strong> para direcionar (Gustavo Oliveira)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <strong>Vendas</strong> para converter (Frederico)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <strong>Tecnologia</strong> para escalar (Gustavo Henrique)
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <span className="w-2 h-2 rounded-full bg-violet-400" />
                <strong>IA</strong> para potencializar
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <span className="w-2 h-2 rounded-full bg-white" />
                <strong>Performance</strong> para crescer
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-[#080312] border border-purple-950">
            <span className="text-xs font-mono-tech uppercase text-purple-300 font-semibold block mb-2">
              NOSSA CRENÇA
            </span>
            <p className="text-sm text-slate-300 leading-relaxed">
              Empresas não deveriam precisar escolher entre marketing, vendas ou tecnologia. O crescimento acontece quando tudo isso trabalha junto.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed mt-3">
              É por isso que construímos a Pluppex. <strong>Para construir e operar máquinas de receita que geram oportunidades, convertem clientes e aumentam a capacidade de crescimento das empresas.</strong>
            </p>
            
            <div className="mt-5 pt-4 border-t border-purple-950 flex items-center justify-between">
              <div>
                <p className="font-display font-bold text-white text-xs">PLUPPEX</p>
                <p className="text-[11px] font-mono-tech text-slate-400">Performance & Lucro com Crescimento Exponencial</p>
              </div>
              <button
                id="btn-founders-talk-cta"
                onClick={onOpenDiagnostic}
                className="px-3.5 py-2 rounded-lg bg-white hover:bg-purple-100 text-[#090412] text-xs font-display uppercase font-bold transition-all shadow-md flex items-center gap-1.5"
              >
                <span>Falar com os Sócios</span>
                <ArrowRight className="w-3 h-3 text-purple-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
