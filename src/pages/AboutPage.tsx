import React from 'react';
import { PageType } from '../types';
import { FoundersSection } from '../components/FoundersSection';
import { MANIFESTO_TEXT, WORK_MODEL_STEPS } from '../data/siteData';
import { ShieldCheck, Compass, CheckCircle2, ArrowRight, Zap, Target } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenDiagnostic: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenDiagnostic }) => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono-tech tracking-wide mb-4">
          <Compass className="w-3.5 h-3.5 text-purple-400" />
          <span>SOBRE A PLUPPEX</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          Construímos e Operamos Máquinas de Receita
        </h1>
        <p className="mt-4 text-base text-slate-300 leading-relaxed">
          Nascemos da convicção de que empresas não deveriam ter que escolher entre uma boa agência de marketing, um bom time de vendas ou tecnologia avançada. O verdadeiro crescimento exponencial só acontece quando essas três frentes operam conectadas.
        </p>
      </div>

      {/* Filosofia da Pluppex */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0c0618] border border-purple-900/50 shadow-2xl">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono-tech text-purple-400 uppercase tracking-widest font-semibold block">
            NOSSA FILOSOFIA FUNDAMENTAL
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white uppercase">
            Crescimento não acontece por acaso. Ele é construído.
          </h2>
          <div className="text-sm sm:text-base text-slate-300 space-y-3 leading-relaxed text-left max-w-2xl mx-auto font-mono-tech text-xs sm:text-sm">
            <p>• Empresas não deveriam depender exclusivamente de indicação.</p>
            <p>• Empresas não deveriam depender da memória dos vendedores.</p>
            <p>• Empresas não deveriam depender do empresário para acompanhar tudo.</p>
            <p>• Marketing não deveria estar separado de vendas.</p>
            <p>• Vendas não deveriam estar separadas do CRM.</p>
            <p>• CRM não deveria estar separado dos dados.</p>
            <p>• Dados não deveriam estar separados da inteligência.</p>
            <p>• IA não deveria ser apenas uma ferramenta isolada.</p>
          </div>
          <div className="pt-4">
            <p className="text-2xl sm:text-3xl font-display font-extrabold text-white uppercase tracking-tight">
              TUDO PRECISA ESTAR CONECTADO. <span className="text-purple-400">UMA MÁQUINA.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Quem está por trás */}
      <FoundersSection onOpenDiagnostic={onOpenDiagnostic} />

      {/* Metodologia de Trabalho */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono-tech uppercase text-purple-400 font-semibold block mb-1">
            MÉTODO E RIGOR
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase">
            Nossa Forma de Trabalhar
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Como atuamos ao lado da sua equipe no dia a dia:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORK_MODEL_STEPS.map((step) => (
            <div key={step.step} className="p-6 rounded-2xl bg-[#0c0618] border border-purple-950 flex flex-col justify-between hover:border-purple-500/40 transition-colors">
              <div>
                <span className="text-2xl font-mono-tech font-bold text-purple-400 block mb-2">{step.step}</span>
                <h3 className="text-lg font-display font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{step.description}</p>
              </div>
              <div className="pt-3 border-t border-purple-950 text-[11px] font-mono-tech text-purple-300">
                {step.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Manifesto */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0a0414] border border-purple-950 max-w-4xl mx-auto text-center space-y-6">
        <span className="text-xs font-mono-tech uppercase text-purple-400 font-semibold tracking-wider block">
          O MANIFESTO PLUPPEX
        </span>
        <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          {MANIFESTO_TEXT.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
        <div className="pt-6 border-t border-purple-950">
          <p className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
            {MANIFESTO_TEXT.conclusion}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#0e0620] border border-purple-900/50 text-center shadow-xl">
        <h3 className="text-2xl font-display font-bold text-white uppercase">
          Vamos Conversar sobre o Futuro da Sua Empresa?
        </h3>
        <p className="text-sm text-slate-300 mt-2 max-w-lg mx-auto">
          Faça um diagnóstico rápido com os sócios fundadores e entenda a viabilidade da sua máquina.
        </p>
        <button
          onClick={onOpenDiagnostic}
          className="mt-6 px-6 py-3.5 rounded-xl bg-white text-[#090412] hover:bg-purple-100 font-display font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/25 transition-all"
        >
          Iniciar Diagnóstico
        </button>
      </div>
    </div>
  );
};
