import React, { useState } from 'react';
import { PageType } from '../types';
import { PluppexLogo } from '../components/PluppexLogo';
import { 
  Eye, 
  Search, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare, 
  Zap, 
  Clock, 
  Kanban,
  Bot,
  Layers,
  Activity,
  Filter,
  Users,
  DollarSign,
  TrendingUp,
  Sliders,
  ChevronRight,
  PhoneCall,
  Calendar,
  AlertCircle
} from 'lucide-react';

interface SpyPageProps {
  onNavigate: (page: PageType) => void;
  onOpenDiagnostic: () => void;
}

export const SpyPage: React.FC<SpyPageProps> = ({ onNavigate, onOpenDiagnostic }) => {
  const [simulatorState, setSimulatorState] = useState<'idle' | 'analyzing' | 'detected'>('detected');
  const [selectedKanbanTab, setSelectedKanbanTab] = useState<'all' | 'high_value' | 'urgent'>('all');
  const [activeLeadCard, setActiveLeadCard] = useState<number>(0);

  const runSimulation = () => {
    setSimulatorState('analyzing');
    setTimeout(() => {
      setSimulatorState('detected');
    }, 800);
  };

  const kanbanStages = [
    {
      id: 'novos',
      name: '1. Novos Leads',
      count: 14,
      leads: [
        { id: 1, name: 'Distribuidora Farmavita', val: 'R$ 68.000', tag: 'Meta Ads', score: 92, time: '3m atrás', sla: '07m restantes' },
        { id: 2, name: 'Grupo Engenharia Forte', val: 'R$ 145.000', tag: 'Google Search', score: 97, time: '14m atrás', sla: '12m restantes' }
      ]
    },
    {
      id: 'aurora',
      name: '2. Qualificados por Aurora IA',
      count: 9,
      leads: [
        { id: 3, name: 'Clínica Prime Odonto', val: 'R$ 38.000', tag: 'SDR Autônomo', score: 95, time: '32m atrás', status: 'Decisor Confirmado' },
        { id: 4, name: 'Indústria MetalSul B2B', val: 'R$ 210.000', tag: 'Áudio WhatsApp', score: 99, time: '1h atrás', status: 'Budget > R$ 2M/ano' }
      ]
    },
    {
      id: 'reuniao',
      name: '3. Reunião Agendada',
      count: 6,
      leads: [
        { id: 5, name: 'Logística TransNorte', val: 'R$ 92.000', tag: 'Google Meet', score: 96, time: 'Hoje, 15:00', status: 'Closer: Gustavo' },
      ]
    },
    {
      id: 'proposta',
      name: '4. Proposta em Fechamento',
      count: 4,
      leads: [
        { id: 6, name: 'Rede Educacional Alfa', val: 'R$ 180.000', tag: 'Em Validação', score: 98, time: 'Aguardando Aprovação', status: 'Alerta de Follow-up Ativo' }
      ]
    }
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: S.P.Y CRM */}
      {/* ========================================================================= */}
      <section className="relative p-8 sm:p-14 lg:p-16 rounded-3xl bg-gradient-to-b from-[#180933] via-[#0e0520] to-[#070212] border border-purple-500/35 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/90 border border-purple-500/40 text-purple-200 text-xs font-mono-tech tracking-wide mb-6 shadow-lg shadow-purple-950/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
            </span>
            <span className="font-semibold text-white">S.P.Y CRM CORPORATIVO</span>
            <span className="text-slate-400">•</span>
            <span className="text-cyan-300">Auditoria Contínua com IA</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white tracking-tight leading-[1.08] uppercase">
            S.P.Y CRM — O Sistema que <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Não Deixa Dinheiro na Mesa.
            </span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl font-display text-purple-200/90 font-medium max-w-3xl leading-snug">
            "O CRM desenvolvido para enxergar cada oportunidade oculta, blindar o follow-up da equipe e acelerar o ciclo de fechamento."
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-light">
            Mais do que um quadro de tarefas engessado, o <strong>S.P.Y CRM</strong> integra a IA <strong>Aurora</strong> de forma nativa para auditar conversas no WhatsApp em tempo real, distribuir leads por SLA, criar cadências obrigatórias e garantir que nenhuma venda morra por inércia humana.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              id="spy-hero-cta"
              onClick={onOpenDiagnostic}
              className="px-8 py-4 rounded-xl bg-white text-[#080312] hover:bg-purple-100 font-display font-black text-xs uppercase tracking-wider shadow-xl shadow-purple-500/30 transition-all flex items-center justify-center gap-2.5 group"
            >
              <Zap className="w-4 h-4 text-purple-700 fill-purple-700" />
              <span>Implantar o S.P.Y na Minha Empresa</span>
              <ArrowRight className="w-4 h-4 text-purple-700 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#kanban-interativo-spy"
              className="px-7 py-4 rounded-xl bg-[#130728] hover:bg-[#1c0c38] text-slate-200 hover:text-white border border-purple-900/60 hover:border-purple-400/80 transition-all text-xs font-mono-tech uppercase font-semibold flex items-center justify-center gap-2"
            >
              <Kanban className="w-4 h-4 text-purple-400" />
              <span>Ver Kanban do S.P.Y ao Vivo</span>
            </a>
          </div>

          {/* Real-Time Telemetry Bar */}
          <div className="mt-12 pt-6 border-t border-purple-900/50 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Perda por Esquecimento</span>
              <span className="text-base sm:text-lg font-display font-bold text-emerald-400">0% de vazamento</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Com regras ativas de SLA</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Distribuição de Leads</span>
              <span className="text-base sm:text-lg font-display font-bold text-cyan-300">Round-Robin + IA</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Equilíbrio automático da equipe</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Auditoria WhatsApp</span>
              <span className="text-base sm:text-lg font-display font-bold text-purple-300">Tempo Real</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Detecção de objeções e datas</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Previsibilidade de Caixa</span>
              <span className="text-base sm:text-lg font-display font-bold text-white">94% de acurácia</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Baseada em probabilidade real</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE KANBAN SHOWCASE (O KANBAN VIVO DO S.P.Y) */}
      {/* ========================================================================= */}
      <section id="kanban-interativo-spy" className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#110724] to-[#0a0316] border border-purple-500/40 shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-purple-900/60 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-300 font-mono-tech text-xs uppercase font-semibold mb-2">
              <Kanban className="w-3.5 h-3.5 text-purple-400" />
              <span>ESTEIRA DE CONVERSÃO S.P.Y</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
              Visão Panorâmica de Pipeline com IA
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Cards enriquecidos com score de compra, dados de tráfego e alertas automáticos de follow-up:
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono-tech text-slate-400">Total em Pipeline:</span>
            <span className="px-3 py-1.5 rounded-xl bg-purple-950/80 border border-purple-500/40 text-cyan-300 font-mono-tech font-bold text-xs">
              R$ 678.000,00 em Negociação
            </span>
          </div>
        </div>

        {/* The 4 Kanban Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {kanbanStages.map((stage) => (
            <div key={stage.id} className="p-4 rounded-2xl bg-[#090314] border border-purple-900/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-purple-950 pb-3 mb-3">
                  <h3 className="font-display font-bold text-xs uppercase text-white tracking-wide">
                    {stage.name}
                  </h3>
                  <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 font-bold border border-purple-800">
                    {stage.count}
                  </span>
                </div>

                <div className="space-y-3">
                  {stage.leads.map((lead) => (
                    <div
                      key={lead.id}
                      onClick={() => setActiveLeadCard(lead.id)}
                      className="p-3.5 rounded-xl bg-[#130728] border border-purple-900/60 hover:border-purple-500/60 transition-all cursor-pointer shadow-sm hover:shadow-md hover:shadow-purple-950/40 group"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className="font-display font-bold text-xs text-white group-hover:text-purple-200 transition-colors">
                          {lead.name}
                        </span>
                        <span className="text-[10px] font-mono-tech text-emerald-400 font-bold">
                          {lead.val}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono-tech mb-2">
                        <span className="px-1.5 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/60">
                          {lead.tag}
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                          Score: {lead.score}%
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[10px] font-mono-tech text-slate-400 pt-2 border-t border-purple-950">
                        <span>{lead.time}</span>
                        {lead.sla && (
                          <span className="text-amber-400 font-bold flex items-center gap-1">
                            <Clock className="w-2.5 h-2.5" />
                            {lead.sla}
                          </span>
                        )}
                        {lead.status && (
                          <span className="text-purple-300 font-semibold">
                            {lead.status}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-purple-950 text-center">
                <span className="text-[10px] font-mono-tech text-slate-500 uppercase">
                  Regra de Automação Ativa
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SIMULADOR DE AUDITORIA DO WHATSAPP (S.P.Y RADAR) */}
      {/* ========================================================================= */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[#0c0618] border border-purple-900/60 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-purple-950 pb-6 mb-8">
          <div>
            <span className="text-xs font-mono-tech uppercase text-purple-400 font-semibold block mb-1">
              RADAR DE AUDITORIA EM TEMPO REAL
            </span>
            <h2 className="text-2xl font-display font-bold text-white">
              Como o S.P.Y Intercepta e Salva Vendas
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              O S.P.Y lê mensagens e áudios, extrai datas de compromisso e blinda o vendedor contra esquecimentos:
            </p>
          </div>

          <button
            onClick={runSimulation}
            disabled={simulatorState === 'analyzing'}
            className="px-4 py-2.5 rounded-xl bg-[#140b28] hover:bg-[#1f0e3f] text-white font-mono-tech text-xs uppercase flex items-center gap-2 border border-purple-800 transition-all shadow-sm"
          >
            <Search className={`w-3.5 h-3.5 ${simulatorState === 'analyzing' ? 'animate-spin text-purple-400' : 'text-purple-400'}`} />
            <span>{simulatorState === 'analyzing' ? 'Auditoria em Andamento...' : 'Simular Auditoria do S.P.Y'}</span>
          </button>
        </div>

        {/* Live Simulator View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Chat Interaction Feed */}
          <div className="lg:col-span-6 p-5 rounded-2xl bg-[#080312] border border-purple-950 space-y-4 font-mono-tech text-xs">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-purple-950 pb-2">
              <span>CANAL: WHATSAPP COMERCIAL INTEGRADO</span>
              <span className="text-purple-300 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                SINCRONIZAÇÃO S.P.Y
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-[#120824] border border-purple-950 max-w-[85%]">
                <span className="text-[10px] text-slate-400 block mb-1 font-bold">CLIENTE (DIRETOR DE OPERAÇÕES):</span>
                <p className="text-slate-200">
                  "Gustavo, gostei da proposta, mas nossa diretoria só vai aprovar o orçamento no início do mês que vem. Me manda um alô lá pelo dia 03."
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#120824] border border-purple-950 max-w-[85%] ml-auto text-right">
                <span className="text-[10px] text-slate-400 block mb-1 font-bold">VENDEDOR (SEM CRM INTELIGENTE):</span>
                <p className="text-slate-300">
                  "Combinado! Falo com você lá."
                </p>
                <span className="text-[10px] text-rose-400 font-bold block mt-1">
                  ⚠️ [Sem S.P.Y: O vendedor esqueceria de agendar e a venda seria perdida]
                </span>
              </div>
            </div>
          </div>

          {/* Right: SPY + Aurora Output */}
          <div className="lg:col-span-6 p-5 rounded-2xl bg-[#14082c]/80 border border-purple-500/40 space-y-4">
            <div className="flex items-center justify-between border-b border-purple-500/30 pb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="font-display font-bold text-xs text-white uppercase">
                  DIAGNÓSTICO AUTOMÁTICO DO S.P.Y CRM
                </span>
              </div>
              <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-purple-900 text-purple-200 font-bold border border-purple-700">
                INTENÇÃO DE COMPRA: 94%
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-[#0b0416] border border-purple-950">
                <span className="font-mono-tech text-[10px] text-cyan-300 uppercase block font-bold">
                  1. Detecção da Data Limite
                </span>
                <p className="text-slate-200 mt-0.5">
                  Gatilho de aprovação de diretoria mapeado com data de retorno fixada para o dia 03.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#0b0416] border border-purple-950">
                <span className="font-mono-tech text-[10px] text-emerald-400 uppercase block font-bold">
                  2. Ação Automática no Pipeline
                </span>
                <p className="text-slate-200 mt-0.5">
                  Card movido no pipeline do S.P.Y para "Aprovação de Diretoria". Tarefa de follow-up prioritário agendada automaticamente para o dia 03 às 09:30 com notificação push e trava de SLA.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#0b0416] border border-purple-950">
                <span className="font-mono-tech text-[10px] text-purple-300 uppercase block font-bold">
                  3. Script de Fechamento Sugerido
                </span>
                <p className="text-slate-200 mt-0.5 italic">
                  "Bom dia, [Nome]! Conforme combinamos para o início do mês, preparei a minuta do onboarding para iniciarmos já nesta semana. Como foi a validação da diretoria?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. AS 9 CAPACIDADES PRINCIPAIS DO S.P.Y */}
      {/* ========================================================================= */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono-tech uppercase font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>ENGENHARIA COMERCIAL</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
            Como o S.P.Y CRM Blinda Sua Operação Comercial
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Controle absoluto de pipeline, atendimento e histórico com a inteligência da Aurora em cada etapa:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'Pipeline Visual & Gestão de Etapas', desc: 'Estruturação clara de todas as oportunidades desde a entrada até o fechamento com métricas de tempo por fase.' },
            { title: 'Auditoria de Conversas em Tempo Real', desc: 'Monitora interações via WhatsApp e canais de atendimento para identificar pontos de atrito ou oportunidades perdidas.' },
            { title: 'Motor de IA Aurora Nativo', desc: 'Inteligência artificial operando diretamente no CRM para calcular score de intenção e automatizar tarefas burocráticas.' },
            { title: 'Distribuição Inteligente de Leads & SLAs', desc: 'Distribui leads entre os vendedores com regras de Round Robin e dispara alertas se o tempo de resposta estourar o limite.' },
            { title: 'Resgate de Oportunidades Frias', desc: 'O S.P.Y audita negociações paradas e aciona gatilhos de reativação para não deixar dinheiro parado.' },
            { title: 'Higienização Contínua do Funil', desc: 'Atualiza o status dos cards sem depender de preenchimento manual maçante pelo time de vendas.' },
            { title: 'Cadência Obrigatória de Follow-up', desc: 'Garante que nenhuma oportunidade deixe de receber acompanhamento no timing certo de compra.' },
            { title: 'Histórico Unificado do Cliente', desc: 'Linha do tempo completa com todas as mensagens, anotações, propostas enviadas e interações anteriores.' },
            { title: 'Visão Executiva em Tempo Real', desc: 'Painéis estratégicos para sócios e diretores visualizarem o volume financeiro do funil e previsibilidade de caixa.' }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#0e0620] border border-purple-900/50 hover:border-purple-500/50 transition-all group">
              <div className="flex items-center gap-2.5 mb-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                <h4 className="font-display font-bold text-sm text-white group-hover:text-purple-200 transition-colors">
                  {item.title}
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. GRAND FINAL CTA */}
      {/* ========================================================================= */}
      <section className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-[#180833] via-[#0d041c] to-[#180833] border border-purple-500/40 text-center shadow-2xl overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-3">
            <PluppexLogo variant="icon" className="w-12 h-12" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight">
            Elimine o Gargalo Comercial da Sua Empresa com o S.P.Y.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Descubra como estruturar o pipeline da sua empresa com o S.P.Y e ativar a IA Aurora para multiplicar conversões e faturamento líquido.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="spy-bottom-cta"
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#090416] font-display font-black text-xs uppercase tracking-wider hover:bg-purple-100 transition-all shadow-xl shadow-purple-500/30 flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-purple-700 fill-purple-700" />
              <span>Diagnosticar Meu Processo Comercial</span>
            </button>

            <button
              onClick={() => onNavigate('solutions')}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#120726] hover:bg-[#1b0a36] text-slate-300 hover:text-white border border-purple-900/60 text-xs font-mono-tech uppercase font-semibold transition-all flex items-center justify-center gap-2"
            >
              <span>Ver Ecossistema Completo</span>
              <ChevronRight className="w-4 h-4 text-purple-400" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
