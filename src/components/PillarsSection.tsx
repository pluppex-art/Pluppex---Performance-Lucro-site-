import React from 'react';
import { PageType } from '../types';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface PillarsSectionProps {
  onNavigate: (page: PageType) => void;
  onOpenDiagnostic: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onNavigate, onOpenDiagnostic }) => {
  const pillars = [
    {
      id: 'ai',
      badge: 'INTELIGÊNCIA ARTIFICIAL',
      title: 'IA Autônoma & Aurora',
      subtitle: 'A inteligência ativa da Pluppex e do S.P.Y CRM',
      description: 'Agentes de IA especializados que atuam como SDRs rápidos (< 1 min), analisam tom e intenção no WhatsApp e realizam follow-up autônomo para resgatar vendas adormecidas.',
      image: '/images/outline_ai_icon_1788984498178.jpg',
      alt: 'Ícone futurista outline de Inteligência Artificial Pluppex',
      points: [
        'SDR IA com resposta imediata 24/7',
        'Detecção algorítmica de intenção de compra',
        'Copiloto executivo de decisões comerciais'
      ],
      action: () => onNavigate('aurora'),
      ctaText: 'Explorar a IA Aurora'
    },
    {
      id: 'data',
      badge: 'ARQUITETURA DE DADOS',
      title: 'Business Intelligence & Dados',
      subtitle: 'Conexão real entre tráfego pago e saldo no caixa',
      description: 'Acabamos com decisões baseadas em palpites ou planilhas desatualizadas. Cruzamos dados de Meta/Google Ads, pipeline do CRM e faturamento líquido em tempo real.',
      image: '/images/outline_data_icon_1788984508514.jpg',
      alt: 'Ícone futurista outline de Análise de Dados e BI Pluppex',
      points: [
        'Rastreamento ponta a ponta com UTMs limpas',
        'Visão de CAC, LTV e margem real por canal',
        'Diagnósticos preditivos de vazamento no funil'
      ],
      action: () => onNavigate('technology'),
      ctaText: 'Ver Arquitetura de Dados'
    },
    {
      id: 'crm',
      badge: 'CRM PROPRIETÁRIO',
      title: 'S.P.Y — O CRM da Pluppex',
      subtitle: 'O centro nervoso da sua operação comercial',
      description: 'O CRM projetado especificamente para a metodologia da máquina de receita. Pipelines claros, distribuição inteligente por SLAs e histórico completo de mensagens.',
      image: '/images/outline_crm_icon_1788984517441.jpg',
      alt: 'Ícone futurista outline do S.P.Y CRM Pluppex',
      points: [
        'Gestão visual de etapas com SLAs rígidos',
        'IA Aurora nativa operando dentro do funil',
        'Histórico 100% gravado e auditável'
      ],
      action: () => onNavigate('spy'),
      ctaText: 'Conhecer o S.P.Y CRM'
    },
    {
      id: 'automation',
      badge: 'AUTOMAÇÃO & REVOPS',
      title: 'Automação & Workflows',
      subtitle: 'Eliminação definitiva de tarefas manuais repetitivas',
      description: 'Conectores robustos e fluxos contínuos entre canais de atração, WhatsApp, gateways de pagamento e sistemas legados. Sua equipe focada apenas em negociar e fechar.',
      image: '/images/outline_automation_icon_1788984528985.jpg',
      alt: 'Ícone futurista outline de Automação Comercial Pluppex',
      points: [
        'Roteamento instantâneo via WhatsApp Comercial',
        'Disparo automático de contratos e propostas',
        'Workflows de reativação de orçamentos parados'
      ],
      action: () => onNavigate('solutions'),
      ctaText: 'Ver Módulos de Automação'
    }
  ];

  return (
    <section id="pilares-tecnologicos" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono-tech tracking-wide mb-4">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>OS 4 PILARES DA MÁQUINA DE RECEITA</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          Tecnologia & Inteligência em Sincronia
        </h2>
        <p className="mt-4 text-base text-slate-300 leading-relaxed">
          Para que uma máquina de receitas opere com alta tração e previsibilidade, quatro engrenagens tecnológicas proprietárias funcionam de forma ininterrupta:
        </p>
      </div>

      {/* Grid of 4 Pillars with generated 3D icons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={pillar.id}
            id={`pillar-card-${pillar.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-7 sm:p-8 rounded-3xl bg-[#0c0618] border border-purple-950 hover:border-purple-500/50 transition-all shadow-xl hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] flex flex-col justify-between group"
          >
            <div>
              {/* Top: Icon + Badge */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-purple-500/40 bg-[#160a2d] p-1.5 shadow-lg group-hover:border-purple-400 transition-all shrink-0">
                  <img
                    src={pillar.image}
                    alt={pillar.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-xl bg-purple-600/10 pointer-events-none" />
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono-tech uppercase font-bold text-white px-2.5 py-1 rounded bg-purple-900/80 border border-purple-600/60 inline-block mb-1">
                    {pillar.badge}
                  </span>
                  <span className="text-[11px] font-mono-tech text-purple-300 block">
                    Pilar 0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs font-mono-tech text-purple-300 mt-1 uppercase tracking-wide font-medium">
                {pillar.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                {pillar.description}
              </p>

              {/* Bullet Points */}
              <div className="mt-5 pt-4 border-t border-purple-950/80 space-y-2">
                {pillar.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA action */}
            <div className="mt-6 pt-4 border-t border-purple-950 flex items-center justify-between">
              <button
                onClick={pillar.action}
                className="inline-flex items-center gap-2 text-xs font-mono-tech font-bold uppercase text-purple-300 hover:text-white transition-colors group-hover:translate-x-1 duration-200"
              >
                <span>{pillar.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
