import React from 'react';
import { PageType } from '../types';
import { MachineVisualizer } from '../components/MachineVisualizer';
import { ProblemsSection } from '../components/ProblemsSection';
import { ComparisonTable } from '../components/ComparisonTable';
import { FoundersSection } from '../components/FoundersSection';
import { PillarsSection } from '../components/PillarsSection';
import { FaqSection } from '../components/FaqSection';
import { StatsCounterBar } from '../components/StatsCounterBar';
import { ManifestoSection } from '../components/ManifestoSection';
import { motion } from 'framer-motion';
import { WORK_MODEL_STEPS, PRODUCTS_ECOSYSTEM, MANIFESTO_TEXT } from '../data/siteData';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Activity,
  TrendingUp,
  ShieldCheck,
  Zap,
  Eye,
  Sparkles,
  Layers,
  ChevronRight,
  Database,
  LineChart,
  Bot
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenDiagnostic: () => void;
  onOpenDiagnosticWithProblems: (problems: string[]) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenDiagnostic,
  onOpenDiagnosticWithProblems
}) => {
  return (
    <div className="space-y-24">
      {/* 16. HERO DO SITE */}
      <section id="hero-section" className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative p-8 sm:p-14 lg:p-16 rounded-3xl bg-gradient-to-b from-[#180933] via-[#0e0520] to-[#070212] border border-purple-500/35 shadow-2xl overflow-hidden text-center">
          {/* Background visual accents */}
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Pulsing Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/90 border border-purple-500/40 text-purple-200 text-xs font-mono-tech tracking-wide mb-6 shadow-lg shadow-purple-950/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="font-semibold text-white">MÁQUINA DE RECEITA PLUPPEX</span>
              <span className="text-slate-400">•</span>
              <span className="text-cyan-300">Operação Ativa no S.P.Y CRM</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-[1.06] uppercase">
              Construímos e Operamos a <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                Máquina de Receita da Sua Empresa.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed font-light">
              Conectamos tráfego pago, tecnologia proprietária, CRM sob medida, automações e inteligência artificial para gerar mais oportunidades e transformar conversas em contratos fechados no caixa.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="hero-cta-build-machine"
                onClick={onOpenDiagnostic}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#080312] font-display font-black text-xs uppercase tracking-wider hover:bg-purple-100 transition-all shadow-xl shadow-purple-500/30 flex items-center justify-center gap-2.5 group"
              >
                <Zap className="w-4 h-4 text-purple-700 fill-purple-700" />
                <span>CONSTRUIR MINHA MÁQUINA</span>
                <ArrowRight className="w-4 h-4 text-purple-700 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#maquina-de-receita"
                id="hero-cta-how-it-works"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#130728] hover:bg-[#1c0c38] text-slate-200 hover:text-white border border-purple-900/60 hover:border-purple-400/80 transition-all text-xs font-mono-tech uppercase font-semibold flex items-center justify-center gap-2"
              >
                <Activity className="w-4 h-4 text-cyan-400" />
                <span>VER O LOOP DA MÁQUINA</span>
                <ChevronRight className="w-4 h-4 text-purple-400" />
              </a>
            </div>

            {/* Machine Telemetry Pillars Strip */}
            <div className="mt-12 pt-6 border-t border-purple-900/50 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
                <span className="text-[10px] font-mono-tech text-slate-400 uppercase block tracking-wider mb-0.5">Demanda Ativa</span>
                <span className="text-xs sm:text-sm font-display font-bold text-white">Meta + Google Ads</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Canais proprietários</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
                <span className="text-[10px] font-mono-tech text-slate-400 uppercase block tracking-wider mb-0.5">Estrutura Comercial</span>
                <span className="text-xs sm:text-sm font-display font-bold text-purple-300">S.P.Y CRM + SLAs</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Zero leads perdidos</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
                <span className="text-[10px] font-mono-tech text-slate-400 uppercase block tracking-wider mb-0.5">Inteligência Artificial</span>
                <span className="text-xs sm:text-sm font-display font-bold text-cyan-300">Aurora IA 24/7</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Resposta em &lt; 45s</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
                <span className="text-[10px] font-mono-tech text-slate-400 uppercase block tracking-wider mb-0.5">Governança de Caixa</span>
                <span className="text-xs sm:text-sm font-display font-bold text-emerald-400">RevOps Integrado</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Visão do Ad ao Caixa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DATA-DRIVEN STATS BAR (INCREMENTING COUNTERS FOR AUTHORITY & SOCIAL PROOF) */}
      <StatsCounterBar />

      {/* 17. SEGUNDA DOBRA */}
      <section id="segunda-dobra" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#100722] via-[#0b0518] to-[#070310] border border-purple-900/50 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-mono-tech tracking-widest uppercase text-purple-300 font-semibold mb-2 block">
              A EQUAÇÃO CRÍTICA DO CRESCIMENTO
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white tracking-tight uppercase">
              Mais oportunidades não adiantam se sua empresa não consegue convertê-las.
            </h2>
            <p className="mt-4 text-base text-slate-300">
              A Pluppex atua nos dois lados da equação com a mesma intensidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Left Equation: GERAMOS OPORTUNIDADES */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e071e] border border-purple-900/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/40">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white uppercase">
                    GERAMOS OPORTUNIDADES
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Tráfego qualificado, marketing estratégico, posicionamento, anúncios orientados a conversão e canais proprietários de aquisição.
                </p>
                <div className="space-y-1.5 text-xs text-slate-400 font-mono-tech">
                  <p>• Canais de mídia paga com testes sistemáticos</p>
                  <p>• ICP claramente identificado e atraído</p>
                  <p>• Demanda previsível alimentando o comercial</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-950 text-xs font-mono-tech text-purple-300 font-bold">
                Entrada: Atenção Qualificada
              </div>
            </div>

            {/* Right Equation: POTENCIALIZAMOS A CONVERSÃO */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e071e] border border-purple-900/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/40">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white uppercase">
                    POTENCIALIZAMOS A CONVERSÃO
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  CRM estruturado, processos de vendas rigorosos, automação de ponta a ponta, follow-up que não esquece o lead e agentes de IA.
                </p>
                <div className="space-y-1.5 text-xs text-slate-400 font-mono-tech">
                  <p>• Zero leads esquecidos no WhatsApp</p>
                  <p>• SDR IA para qualificação em menos de 1 minuto</p>
                  <p>• SPY auditando intenções e oportunidades frias</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-950 text-xs font-mono-tech text-white font-bold">
                Saída: Clientes Fechados no Caixa
              </div>
            </div>
          </div>

          {/* Central Result Formula */}
          <div className="mt-10 p-5 rounded-xl bg-[#090414] border border-purple-950 text-center">
            <p className="text-sm sm:text-base font-display font-bold text-white tracking-wide uppercase">
              RESULTADO: <span className="text-purple-300">MAIS OPORTUNIDADES</span> → <span className="text-purple-200">MAIS CLIENTES</span> → <span className="text-white">MAIS RECEITA</span>.
            </p>
          </div>
        </div>
      </section>

      {/* 04. A MÁQUINA DE RECEITA (VISUAL PRINCIPAL) */}
      <section id="maquina-de-receita" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono-tech tracking-widest uppercase text-purple-300 font-semibold mb-2 block">
            ARQUITETURA DE ENGENHARIA COMERCIAL
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight uppercase leading-tight">
            Sua empresa não precisa de mais uma ferramenta.
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white uppercase mt-2">
            PRECISA DE UMA MÁQUINA.
          </p>
        </div>

        <MachineVisualizer onSelectDiagnostic={onOpenDiagnostic} />
      </section>

      {/* OS 4 PILARES TECNOLÓGICOS COM ÍCONES MINIMALISTAS MODERNOS */}
      <PillarsSection onNavigate={onNavigate} onOpenDiagnostic={onOpenDiagnostic} />

      {/* 05. PROBLEMAS QUE RESOLVEMOS */}
      <ProblemsSection onOpenDiagnosticWithProblems={onOpenDiagnosticWithProblems} />

      {/* 06. ECOSSISTEMA PLUPPEX SPOTLIGHT */}
      <section id="ecossistema-resumo" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono-tech tracking-wide mb-4">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>NOSSAS SOLUÇÕES & INFRAESTRUTURA INTEGRADA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Nossas Soluções: O Ecossistema Pluppex
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Apresentamos produtos e soluções desenhados para funcionar sincronizados como engrenagens de uma única máquina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS_ECOSYSTEM.slice(0, 6).map((product, idx) => (
            <motion.div
              key={product.id}
              id={`home-product-card-${product.id}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-[#0c0618] border border-purple-950 hover:border-purple-500/50 transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  {product.iconImage ? (
                    <div className="w-12 h-12 rounded-xl border border-purple-500/40 bg-[#150a2b] p-1 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:border-purple-400 transition-colors">
                      <img
                        src={product.iconImage}
                        alt={`Ícone da solução ${product.title}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-xl border border-purple-900/60 bg-[#150a2b] flex items-center justify-center text-purple-400 group-hover:text-white transition-colors">
                      <Layers className="w-5 h-5" />
                    </div>
                  )}

                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] font-mono-tech uppercase font-bold text-white px-2 py-0.5 rounded bg-purple-900 border border-purple-700">
                      {product.code}
                    </span>
                    <span className="text-[10px] font-mono-tech text-purple-300 uppercase">
                      {product.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                  {product.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {product.tagline}
                </p>

                <div className="mt-4 pt-4 border-t border-purple-950 space-y-2">
                  {product.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-1 h-1 rounded-full bg-purple-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-950 flex items-center justify-between">
                <button
                  onClick={() => onNavigate(product.id === 'spy' ? 'spy' : product.id === 'aurora' ? 'aurora' : 'solutions')}
                  className="text-xs font-mono-tech uppercase text-purple-300 hover:text-white flex items-center gap-1 font-semibold"
                >
                  <span>{product.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigate('solutions')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#140b28] hover:bg-purple-950 text-slate-200 hover:text-white border border-purple-900/60 hover:border-purple-400 transition-all text-xs font-mono-tech uppercase font-semibold"
          >
            <span>Ver Todas as Soluções & Produtos do Ecossistema</span>
            <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
          </button>
        </div>
      </section>

      {/* 09. NOSSO MODELO DE ATUAÇÃO */}
      <section id="modelo-de-atuacao" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono-tech tracking-widest uppercase text-purple-300 font-semibold mb-2 block">
            PARCEIROS DE CRESCIMENTO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Nosso Modelo de Atuação em 4 Fases
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Não somos apenas fornecedores. Atuamos como parceiros operacionais de receita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORK_MODEL_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#120825] to-[#090414] border border-purple-950 hover:border-purple-800 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-display font-black text-purple-400/40 block mb-3 font-mono-tech">
                  {step.step}
                </span>
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-purple-950">
                <p className="text-xs font-mono-tech text-purple-300">
                  {step.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. O DIFERENCIAL */}
      <ComparisonTable onOpenDiagnostic={onOpenDiagnostic} />

      {/* 11 & 12. PARA QUEM É & RESULTADOS */}
      <section id="para-quem-e" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Para Quem é */}
          <div className="p-8 rounded-2xl bg-[#0c0618] border border-purple-950">
            <span className="text-xs font-mono-tech uppercase text-purple-300 font-semibold mb-2 block">
              FILTRO DE MATURIDADE
            </span>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Para Quem é a Pluppex?
            </h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Priorizamos empresários que entendem que crescimento exige estrutura, método e tecnologia:
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Já possuem um produto ou serviço validado no mercado</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Possuem operação comercial e equipe de vendas ativa</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Precisam gerar mais oportunidades e aumentar a conversão</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Querem implementar CRM robusto e automatizar processos repetitivos</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Desejam aplicar IA de forma prática e útil na rotina de fechamento</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Buscam previsibilidade e escala com margem protegida</span>
              </li>
            </ul>
          </div>

          {/* Resultados que Buscamos */}
          <div className="p-8 rounded-2xl bg-[#0c0618] border border-purple-950">
            <span className="text-xs font-mono-tech uppercase text-white font-semibold mb-2 block">
              OBJETIVOS OPERACIONAIS
            </span>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Resultados que Buscamos
            </h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Nunca prometemos números mágicos. Construímos as condições técnicas para atingir metas reais:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-[#140a28] border border-purple-950">
                <span className="text-xs font-display font-bold text-white block">MAIS OPORTUNIDADES</span>
                <span className="text-[11px] text-slate-400">Pessoas certas entrando no funil</span>
              </div>
              <div className="p-3 rounded-lg bg-[#140a28] border border-purple-950">
                <span className="text-xs font-display font-bold text-white block">MAIS CONVERSÃO</span>
                <span className="text-[11px] text-slate-400">Mais leads transformados em clientes</span>
              </div>
              <div className="p-3 rounded-lg bg-[#140a28] border border-purple-950">
                <span className="text-xs font-display font-bold text-white block">MAIS PRODUTIVIDADE</span>
                <span className="text-[11px] text-slate-400">Menos trabalho manual e retrabalho</span>
              </div>
              <div className="p-3 rounded-lg bg-[#140a28] border border-purple-950">
                <span className="text-xs font-display font-bold text-white block">MAIS INTELIGÊNCIA</span>
                <span className="text-[11px] text-slate-400">Dados confiáveis para decisões rápidas</span>
              </div>
              <div className="p-3 rounded-lg bg-[#140a28] border border-purple-950">
                <span className="text-xs font-display font-bold text-white block">MAIS PREVISIBILIDADE</span>
                <span className="text-[11px] text-slate-400">Clareza no ciclo de aquisição e venda</span>
              </div>
              <div className="p-3 rounded-lg bg-[#140a28] border border-purple-950">
                <span className="text-xs font-display font-bold text-purple-300 block">MAIS RECEITA</span>
                <span className="text-[11px] text-slate-400">A consequência natural de uma máquina melhor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM ESTÁ POR TRÁS DA PLUPPEX */}
      <FoundersSection onOpenDiagnostic={onOpenDiagnostic} />

      {/* SEÇÃO DE FAQ ESTILO ACCORDION */}
      <FaqSection onOpenDiagnostic={onOpenDiagnostic} />

      {/* 14. MANIFESTO */}
      <ManifestoSection onOpenDiagnostic={onOpenDiagnostic} />

      {/* 18. CTA DE DIAGNÓSTICO FINAL */}
      <section id="cta-final-diagnostico" className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-[#170a2f] via-[#100624] to-[#170a2f] border border-purple-500/40 text-center shadow-2xl relative overflow-hidden">
          <span className="text-xs font-mono-tech text-purple-300 uppercase font-semibold tracking-wider block mb-3">
            PRÓXIMO PASSO ESTRATÉGICO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight uppercase">
            Onde sua empresa está perdendo receita?
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Talvez o problema não seja falta de clientes. Talvez seja a forma como sua empresa gera, acompanha e converte oportunidades.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="cta-final-diagnose-btn"
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#070312] font-display font-black text-xs uppercase tracking-wider hover:bg-purple-100 transition-all shadow-xl shadow-purple-500/25 flex items-center justify-center gap-2"
            >
              <Activity className="w-4 h-4 text-purple-700" />
              <span>DIAGNOSTICAR MINHA OPERAÇÃO</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
