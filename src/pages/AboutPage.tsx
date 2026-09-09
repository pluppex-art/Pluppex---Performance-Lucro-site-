import React from 'react';
import { PageType } from '../types';
import { FoundersSection } from '../components/FoundersSection';
import { ManifestoSection } from '../components/ManifestoSection';
import { PluppexLogo } from '../components/PluppexLogo';
import { MANIFESTO_TEXT, WORK_MODEL_STEPS } from '../data/siteData';
import { 
  ShieldCheck, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Target, 
  Layers, 
  Cpu, 
  TrendingUp,
  Award,
  ChevronRight,
  Activity
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenDiagnostic: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenDiagnostic }) => {
  const companyValues = [
    {
      title: 'Ciência, Não Sorte',
      desc: 'Processos comerciais precisam ser replicáveis e auditáveis por métricas matemáticas, não por intuição.',
      icon: Target
    },
    {
      title: 'Sistemas Conectados',
      desc: 'Mídia, CRM e Inteligência Artificial operam na mesma esteira com visibilidade ponta a ponta.',
      icon: Layers
    },
    {
      title: 'Skin in the Game',
      desc: 'Construímos e operamos a máquina junto com o cliente, compartilhando a responsabilidade do resultado.',
      icon: ShieldCheck
    },
    {
      title: 'Obsessão por Margem',
      desc: 'Não nos importamos com métricas de vaidade. O único indicador que importa é o lucro líquido no banco.',
      icon: TrendingUp
    }
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: SOBRE A PLUPPEX */}
      {/* ========================================================================= */}
      <section className="relative p-8 sm:p-14 lg:p-16 rounded-3xl bg-gradient-to-b from-[#180933] via-[#0e0520] to-[#070212] border border-purple-500/35 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/90 border border-purple-500/40 text-purple-200 text-xs font-mono-tech tracking-wide mb-6 shadow-lg shadow-purple-950/50">
            <Compass className="w-3.5 h-3.5 text-purple-400" />
            <span className="font-semibold text-white">HISTÓRIA & PROPÓSITO</span>
            <span className="text-slate-400">•</span>
            <span className="text-cyan-300">A Engenharia da Receita</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white tracking-tight leading-[1.08] uppercase">
            Construímos e Operamos <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Máquinas de Receita.
            </span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl font-display text-purple-200/90 font-medium max-w-3xl leading-snug">
            Nascemos da convicção de que empresas não deveriam ter que escolher entre uma boa agência de marketing, um bom time de vendas ou tecnologia avançada.
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-light">
            O verdadeiro crescimento exponencial só acontece quando essas três frentes operam conectadas. A Pluppex une a gestão de mídia, a tecnologia proprietária do S.P.Y CRM e a inteligência da Aurora em uma engrenagem sincronizada.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenDiagnostic}
              className="px-8 py-4 rounded-xl bg-white text-[#080312] hover:bg-purple-100 font-display font-black text-xs uppercase tracking-wider shadow-xl shadow-purple-500/30 transition-all flex items-center justify-center gap-2.5 group"
            >
              <Zap className="w-4 h-4 text-purple-700 fill-purple-700" />
              <span>Conhecer a Máquina Pluppex</span>
              <ArrowRight className="w-4 h-4 text-purple-700 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Company Pillars Strip */}
          <div className="mt-12 pt-6 border-t border-purple-900/50 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Modelo de Atuação</span>
              <span className="text-base sm:text-lg font-display font-bold text-white">Co-operação Real</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Construímos e operamos</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Tecnologia</span>
              <span className="text-base sm:text-lg font-display font-bold text-cyan-300">100% Proprietária</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">S.P.Y CRM + Aurora IA</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Cultura</span>
              <span className="text-base sm:text-lg font-display font-bold text-purple-300">Orientada a Margem</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Sem métricas de vaidade</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Foco de Mercado</span>
              <span className="text-base sm:text-lg font-display font-bold text-emerald-400">B2B & Alto Valor</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Vendas estruturadas</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. NOSSA FILOSOFIA FUNDAMENTAL */}
      {/* ========================================================================= */}
      <section className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#110724] to-[#090314] border border-purple-500/40 shadow-2xl">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono-tech text-purple-400 uppercase tracking-widest font-semibold block">
            NOSSA FILOSOFIA FUNDAMENTAL
          </span>

          <h2 className="text-2xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
            Crescimento não acontece por acaso. <br />
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Ele é Construído com Engenharia.
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto font-mono-tech text-xs pt-4">
            <div className="p-4 rounded-xl bg-[#090314] border border-purple-900/60 text-slate-300 space-y-2">
              <p>• Empresas não deveriam depender exclusivamente de indicação.</p>
              <p>• Empresas não deveriam depender da memória dos vendedores.</p>
              <p>• Empresas não deveriam depender do empresário para cobrar cada follow-up.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#090314] border border-purple-900/60 text-slate-300 space-y-2">
              <p>• Marketing não deveria estar separado de vendas.</p>
              <p>• Vendas não deveriam estar separadas do CRM.</p>
              <p>• Dados não deveriam estar separados da inteligência.</p>
            </div>
          </div>

          <div className="pt-6">
            <p className="text-xl sm:text-2xl font-display font-extrabold text-white uppercase tracking-tight">
              TUDO PRECISA ESTAR CONECTADO. <span className="text-cyan-300">UMA ÚNICA MÁQUINA.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. QUEM ESTÁ POR TRÁS DA PLUPPEX (FOUNDERS) */}
      {/* ========================================================================= */}
      <FoundersSection onOpenDiagnostic={onOpenDiagnostic} />

      {/* ========================================================================= */}
      {/* 4. VALORES & RIGOR DE ENGENHARIA */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono-tech uppercase text-purple-400 font-semibold block mb-1">
            PILAR DE PRINCÍPIOS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase">
            Nossos Valores Inegociáveis
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Como orientamos cada decisão estratégica dentro dos nossos clientes:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-[#0e0620] border border-purple-900/50 hover:border-purple-500/50 transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/40 text-purple-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-purple-300" />
                  </div>
                  <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-purple-200 transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FORMA DE TRABALHAR (STEPS) */}
      {/* ========================================================================= */}
      <section className="space-y-8">
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
      </section>

      {/* ========================================================================= */}
      {/* 6. MANIFESTO SECTION */}
      {/* ========================================================================= */}
      <ManifestoSection onOpenDiagnostic={onOpenDiagnostic} />

      {/* ========================================================================= */}
      {/* 7. GRAND FINAL CTA */}
      {/* ========================================================================= */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#0e0620] border border-purple-900/50 text-center shadow-xl">
        <h3 className="text-2xl font-display font-bold text-white uppercase">
          Vamos Conversar sobre o Futuro da Sua Empresa?
        </h3>
        <p className="text-sm text-slate-300 mt-2 max-w-lg mx-auto">
          Faça um diagnóstico rápido com os sócios fundadores e entenda a viabilidade da sua máquina de receitas.
        </p>
        <button
          onClick={onOpenDiagnostic}
          className="mt-6 px-7 py-3.5 rounded-xl bg-white text-[#090412] hover:bg-purple-100 font-display font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/25 transition-all"
        >
          Iniciar Diagnóstico
        </button>
      </section>
    </div>
  );
};
