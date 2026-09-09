import React from 'react';
import { 
  XCircle, 
  Sparkles, 
  ArrowRight, 
  Activity, 
  Layers, 
  Cpu, 
  TrendingUp, 
  Target, 
  Database,
  CheckCircle2,
  Workflow
} from 'lucide-react';
import { PluppexLogo } from './PluppexLogo';

interface ManifestoSectionProps {
  onOpenDiagnostic?: () => void;
}

export const ManifestoSection: React.FC<ManifestoSectionProps> = ({ onOpenDiagnostic }) => {
  const problems = [
    {
      title: 'Marketing sem Vendas',
      desc: 'Muitos leads gerados, mas o time comercial não fecha contratos.',
      icon: Target,
    },
    {
      title: 'Vendedores sem Processo',
      desc: 'Cada vendedor atende do seu jeito, sem cadência, roteiro ou consistência.',
      icon: Layers,
    },
    {
      title: 'CRM Abandonado',
      desc: 'Ferramenta cara contratada que ninguém alimenta ou analisa.',
      icon: Database,
    },
    {
      title: 'Tráfego no Escuro',
      desc: 'Investimento pesado em anúncios sem saber qual canal gera lucro real.',
      icon: TrendingUp,
    },
    {
      title: 'Sistemas Desconectados',
      desc: 'Ferramentas isoladas que não conversam e geram retrabalho manual.',
      icon: Workflow,
    },
    {
      title: 'IA Sem Aplicação',
      desc: 'Vontade de usar inteligência artificial sem saber onde ela gera faturamento.',
      icon: Cpu,
    },
  ];

  const engineSteps = [
    'Geramos oportunidades',
    'Organizamos funis',
    'Potencializamos vendas',
    'Automatizamos operações',
    'Aplicamos inteligência',
    'Medimos métricas',
    'Otimizamos conversões',
    'Escalamos com lucro'
  ];

  return (
    <section id="manifesto-pluppex" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Main Container Card */}
      <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-b from-[#110724] via-[#0c051a] to-[#070311] border border-purple-900/50 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        {/* Section Header */}
        <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 font-mono-tech text-xs uppercase tracking-widest font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>MANIFESTO OFICIAL PLUPPEX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight uppercase leading-tight">
            Toda empresa quer crescer. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Poucas têm a máquina para sustentar.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            O crescimento da sua empresa não trava por falta de esforço. Trava porque as engrenagens de aquisição, vendas, tecnologia e gestão operam de forma isolada.
          </p>
        </div>

        {/* The 6 Disconnected Symptoms (Visual Grid) */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {problems.map((item, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-[#140a28]/70 border border-purple-900/40 hover:border-purple-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-950/40 group flex flex-col justify-between"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-800/40 text-rose-400 shrink-0 group-hover:scale-105 transition-transform">
                  <XCircle className="w-5 h-5 text-rose-400/90" />
                </div>
                <div>
                  <h3 className="text-sm font-display font-bold text-white uppercase tracking-wide group-hover:text-purple-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Turning Point: The Pluppex Revenue Engine */}
        <div className="relative z-10 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-purple-950/50 via-[#180933] to-purple-950/50 border border-purple-500/40 shadow-xl mb-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <PluppexLogo variant="icon" className="w-8 h-8" />
            <span className="text-xs font-mono-tech uppercase font-bold tracking-widest text-cyan-300">
              A SOLUÇÃO DEFINITIVA
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight max-w-2xl mx-auto">
            A Pluppex existe para conectar tudo isso. Construímos e operamos a sua máquina de receita.
          </h3>

          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
            Unimos inteligência de dados, tráfego qualificado, CRM com cadência ativa e automações com IA em uma operação única e coordenada.
          </p>

          {/* Engine Lifecycle Badges */}
          <div className="mt-8 pt-6 border-t border-purple-900/60 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {engineSteps.map((step, idx) => (
              <div
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-[#0e0620] border border-purple-500/30 text-[11px] sm:text-xs font-mono-tech text-purple-200 font-medium flex items-center gap-1.5 shadow-sm hover:border-purple-400 hover:text-white transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* The Big Punchline & Core Belief */}
        <div className="relative z-10 pt-6 text-center">
          <p className="text-sm font-mono-tech text-slate-400 tracking-wider uppercase mb-3">
            PORQUE CRESCIMENTO NÃO DEVERIA DEPENDER DE SORTE.
          </p>

          <h3 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight uppercase text-white drop-shadow-[0_4px_24px_rgba(168,85,247,0.4)]">
            VENDER É CIÊNCIA, <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              NÃO SORTE.
            </span>
          </h3>

          {onOpenDiagnostic && (
            <div className="mt-8">
              <button
                id="manifesto-cta-diagnostico"
                onClick={onOpenDiagnostic}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-[#090416] font-display font-black text-xs uppercase tracking-wider hover:bg-purple-100 transition-all shadow-xl shadow-purple-500/30 hover:scale-[1.02] group"
              >
                <Activity className="w-4 h-4 text-purple-700" />
                <span>VER O DIAGNÓSTICO DA SUA MÁQUINA</span>
                <ArrowRight className="w-4 h-4 text-purple-700 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
