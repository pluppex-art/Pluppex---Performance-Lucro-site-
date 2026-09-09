import React, { useState } from 'react';
import { PageType } from '../types';
import { PRODUCTS_ECOSYSTEM } from '../data/siteData';
import { PluppexLogo } from '../components/PluppexLogo';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Sparkles, 
  Target, 
  KanbanSquare, 
  Bot, 
  Eye, 
  Zap, 
  Rocket, 
  Terminal,
  Activity,
  Filter,
  Check,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Workflow
} from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (page: PageType) => void;
  onOpenDiagnostic: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate, onOpenDiagnostic }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas as Soluções' },
    { id: 'crm', label: 'CRM & Vendas' },
    { id: 'ai', label: 'Inteligência Artificial' },
    { id: 'ads', label: 'Mídia & Aquisição' },
    { id: 'engine', label: 'Máquina de Receita' },
  ];

  const filteredProducts = PRODUCTS_ECOSYSTEM.filter((product) => {
    if (!product) return false;
    if (activeCategory === 'all') return true;
    if (activeCategory === 'crm') return product.id === 'spy';
    if (activeCategory === 'ai') return product.id === 'aurora' || product.category?.toLowerCase().includes('ia') || product.category?.toLowerCase().includes('inteligência');
    if (activeCategory === 'ads') return product.id === 'performance' || product.category?.toLowerCase().includes('demanda') || product.category?.toLowerCase().includes('tráfego');
    if (activeCategory === 'engine') return product.id === 'tech' || product.id === 'revops' || product.id === 'coproducao';
    return true;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return <Target className="w-6 h-6 text-purple-300" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-cyan-300" />;
      case 'KanbanSquare': return <KanbanSquare className="w-6 h-6 text-purple-300" />;
      case 'Bot': return <Bot className="w-6 h-6 text-cyan-300" />;
      case 'Eye': return <Eye className="w-6 h-6 text-purple-300" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-fuchsia-300" />;
      case 'Layers': return <Layers className="w-6 h-6 text-purple-300" />;
      case 'Rocket': return <Rocket className="w-6 h-6 text-cyan-300" />;
      default: return <Zap className="w-6 h-6 text-purple-300" />;
    }
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: ECOSSISTEMA PLUPPEX */}
      {/* ========================================================================= */}
      <section className="relative p-8 sm:p-14 lg:p-16 rounded-3xl bg-gradient-to-b from-[#180933] via-[#0e0520] to-[#070212] border border-purple-500/35 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/90 border border-purple-500/40 text-purple-200 text-xs font-mono-tech tracking-wide mb-6 shadow-lg shadow-purple-950/50">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span className="font-semibold text-white">ECOSSISTEMA INTEGRADO</span>
            <span className="text-slate-400">•</span>
            <span className="text-cyan-300">Da Mídia ao Caixa Líquido</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white tracking-tight leading-[1.08] uppercase">
            Soluções Desenhadas para Operar em <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Sincronia Matemática.
            </span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl font-display text-purple-200/90 font-medium max-w-3xl leading-snug">
            A Pluppex não entrega ferramentas soltas. Nossos produtos e serviços foram concebidos para formar uma engrenagem única: sem atrito entre marketing, time comercial e diretoria.
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-light">
            Quando o tráfego pago conversa nativamente com o CRM e uma inteligência artificial audita cada lead no WhatsApp, a consequência natural é uma operação previsível, escalável e lucrativa.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              id="solutions-hero-cta"
              onClick={onOpenDiagnostic}
              className="px-8 py-4 rounded-xl bg-white text-[#080312] hover:bg-purple-100 font-display font-black text-xs uppercase tracking-wider shadow-xl shadow-purple-500/30 transition-all flex items-center justify-center gap-2.5 group"
            >
              <Zap className="w-4 h-4 text-purple-700 fill-purple-700" />
              <span>Diagnosticar Minha Operação Completa</span>
              <ArrowRight className="w-4 h-4 text-purple-700 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Ecosystem Architecture Strip */}
          <div className="mt-12 pt-6 border-t border-purple-900/50 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Demanda Qualificada</span>
              <span className="text-base sm:text-lg font-display font-bold text-white">Tráfego & ICP</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Meta Ads + Google Ads</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Gestão Rigorosa</span>
              <span className="text-base sm:text-lg font-display font-bold text-purple-300">S.P.Y CRM</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Pipelines & SLAs</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Autonomia & IA</span>
              <span className="text-base sm:text-lg font-display font-bold text-cyan-300">Aurora IA</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">SDR no WhatsApp 24/7</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Governança de Lucro</span>
              <span className="text-base sm:text-lg font-display font-bold text-emerald-400">RevOps & Dados</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Visão do Ad até o Caixa</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CATEGORY SELECTOR TABS */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
              Componentes da Máquina de Receita
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Explore cada produto e serviço do ecossistema Pluppex em detalhe:
            </p>
          </div>

          <div className="flex flex-wrap gap-2 bg-[#0a0314] p-1.5 rounded-2xl border border-purple-900/60 font-mono-tech text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-md shadow-purple-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-purple-950/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Products Matrix */}
        <div className="space-y-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#110724] to-[#090314] border border-purple-900/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl relative overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Title, Code, Description & Quote */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#180933] border border-purple-500/40 text-purple-300 shadow-md group-hover:scale-105 transition-transform">
                      {getIcon(product.icon)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono-tech uppercase font-bold text-white px-2 py-0.5 rounded bg-purple-900 border border-purple-700">
                        {product.code}
                      </span>
                      <span className="text-xs font-mono-tech text-cyan-300 uppercase ml-2 font-semibold">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight uppercase">
                    {product.title}
                  </h3>

                  <p className="text-sm font-semibold text-purple-300 font-display">
                    {product.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {product.description}
                  </p>

                  {/* Highlight Quote */}
                  <div className="p-4 rounded-xl bg-[#14082c] border-l-2 border-purple-400 text-xs italic text-purple-100">
                    "{product.quote}"
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        if (product.id === 'spy') onNavigate('spy');
                        else if (product.id === 'aurora') onNavigate('aurora');
                        else onOpenDiagnostic();
                      }}
                      className="px-5 py-3 rounded-xl bg-purple-600/80 hover:bg-purple-600 text-white font-mono-tech text-xs font-bold uppercase transition-all flex items-center gap-2 shadow-lg shadow-purple-600/25"
                    >
                      <span>
                        {product.id === 'spy' ? 'Explorar S.P.Y CRM' : product.id === 'aurora' ? 'Explorar Aurora IA' : 'Solicitar para Minha Operação'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Features & Strategic Highlights */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="p-6 rounded-2xl bg-[#090314] border border-purple-900/60">
                    <span className="text-xs font-mono-tech uppercase font-bold text-purple-400 block mb-3">
                      CAPACIDADES & RECURSOS:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {(product.features || []).map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#14082c]/80 border border-purple-500/40 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono-tech uppercase font-bold text-cyan-300 block mb-1">
                        INTEGRAÇÃO COM A MÁQUINA:
                      </span>
                      <p className="text-xs text-slate-300 font-mono-tech">
                        Conexão nativa e sincronizada com Meta/Google Ads, S.P.Y CRM e motor Aurora IA.
                      </p>
                    </div>
                    <span className="text-xs font-mono-tech text-purple-300 font-bold px-3 py-1.5 rounded-lg bg-purple-950 border border-purple-800 shrink-0 ml-4">
                      SLA Ativo
                    </span>
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
            Pronto para Unir Todas Essas Frentes na Sua Empresa?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Não contrate agências isoladas ou softwares que ninguém usa. Construa a sua máquina de receitas com o ecossistema completo da Pluppex.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#090416] font-display font-black text-xs uppercase tracking-wider hover:bg-purple-100 transition-all shadow-xl shadow-purple-500/30 flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-purple-700 fill-purple-700" />
              <span>Solicitar Diagnóstico Estrutural</span>
            </button>

            <button
              onClick={() => onNavigate('technology')}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#120726] hover:bg-[#1b0a36] text-slate-300 hover:text-white border border-purple-900/60 text-xs font-mono-tech uppercase font-semibold transition-all flex items-center justify-center gap-2"
            >
              <span>Ver Motor de Tecnologia</span>
              <ChevronRight className="w-4 h-4 text-purple-400" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
