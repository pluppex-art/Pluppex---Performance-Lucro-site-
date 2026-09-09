import React, { useState } from 'react';
import { PageType } from '../types';
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
  Kanban 
} from 'lucide-react';

interface SpyPageProps {
  onNavigate: (page: PageType) => void;
  onOpenDiagnostic: () => void;
}

export const SpyPage: React.FC<SpyPageProps> = ({ onNavigate, onOpenDiagnostic }) => {
  const [simulatorState, setSimulatorState] = useState<'idle' | 'analyzing' | 'detected'>('detected');

  const runSimulation = () => {
    setSimulatorState('analyzing');
    setTimeout(() => {
      setSimulatorState('detected');
    }, 900);
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Hero Product Banner */}
      <div className="relative p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#160830] via-[#0e0520] to-[#080214] border border-purple-500/30 shadow-2xl overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-mono-tech tracking-wide mb-6">
            <Kanban className="w-3.5 h-3.5 text-purple-400" />
            <span>O CRM PROPRIETÁRIO DA PLUPPEX COM IA AURORA NATIVA</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight uppercase">
            S.P.Y — O CRM da Pluppex
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-300 font-bold">
            "O CRM desenvolvido para enxergar cada oportunidade e nunca mais deixar dinheiro na mesa."
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            O <strong>S.P.Y</strong> é o CRM oficial da Pluppex. Mais do que gerenciar pipelines e contatos, o S.P.Y integra a inteligência artificial <strong>Aurora</strong> de forma nativa para auditar conversas em tempo real, mapear intenções ocultas de compra, agendar follow-ups obrigatórios e blindar sua empresa contra o esquecimento de leads.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenDiagnostic}
              className="px-6 py-3.5 rounded-xl bg-white text-[#090412] hover:bg-purple-100 font-display font-bold text-xs uppercase tracking-wider shadow-xl shadow-purple-500/25 transition-all flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-purple-700" />
              <span>Conhecer o S.P.Y CRM na Minha Operação</span>
            </button>
            <button
              onClick={runSimulation}
              className="px-5 py-3.5 rounded-xl bg-[#150a2c] hover:bg-[#1f0e3f] text-purple-200 border border-purple-800 font-mono-tech text-xs uppercase transition-colors"
            >
              Simular S.P.Y + Aurora em Tempo Real
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Simulation Radar */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#0c0618] border border-purple-950 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-purple-950 pb-6 mb-8">
          <div>
            <span className="text-xs font-mono-tech uppercase text-purple-400 font-semibold block mb-1">
              DEMONSTRAÇÃO TÉCNICA
            </span>
            <h3 className="text-2xl font-display font-bold text-white">
              Radar do S.P.Y CRM com a IA Aurora em Ação
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Como o S.P.Y CRM e o motor de IA Aurora processam conversas, organizam o pipeline e evitam o vazamento de receita.
            </p>
          </div>

          <button
            onClick={runSimulation}
            disabled={simulatorState === 'analyzing'}
            className="px-4 py-2 rounded-lg bg-[#140b28] hover:bg-[#1f0e3f] text-white font-mono-tech text-xs uppercase flex items-center gap-2 border border-purple-900"
          >
            <Search className={`w-3.5 h-3.5 ${simulatorState === 'analyzing' ? 'animate-spin text-purple-400' : 'text-purple-400'}`} />
            <span>{simulatorState === 'analyzing' ? 'Auditoria em Andamento...' : 'Testar Outro Padrão'}</span>
          </button>
        </div>

        {/* Live Simulator View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Chat Interaction Feed */}
          <div className="lg:col-span-6 p-5 rounded-2xl bg-[#080312] border border-purple-950 space-y-4 font-mono-tech text-xs">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-purple-950 pb-2">
              <span>CANAL: WHATSAPP COMERCIAL CONECTADO AO S.P.Y</span>
              <span className="text-purple-300 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                SINCRONIZAÇÃO EM TEMPO REAL
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-[#120824] border border-purple-950 max-w-[85%]">
                <span className="text-[10px] text-slate-400 block mb-1 font-bold">CLIENTE (DIRETOR DE OPERAÇÕES):</span>
                <p className="text-slate-200">
                  "Gustavo, gostei da proposta, mas nossa diretoria só vai aprovar o orçamento no início do mês que vem. Me manda um alô lá pelo dia 03."
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#120824] border border-purple-950 max-w-[85%] ml-auto text-right">
                <span className="text-[10px] text-slate-400 block mb-1 font-bold">VENDEDOR (SEM CRM INTELIGENTE):</span>
                <p className="text-slate-300">
                  "Combinado! Falo com você lá."
                </p>
                <span className="text-[9px] text-rose-400 block mt-1">
                  ⚠️ [Sem S.P.Y + Aurora: O vendedor esqueceria de agendar e a oportunidade esfriaria]
                </span>
              </div>
            </div>
          </div>

          {/* Right: SPY + Aurora Output */}
          <div className="lg:col-span-6 p-5 rounded-2xl bg-[#14082c]/70 border border-purple-500/40 space-y-4">
            <div className="flex items-center justify-between border-b border-purple-500/30 pb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="font-display font-bold text-xs text-white uppercase">
                  DIAGNÓSTICO DA IA AURORA NO S.P.Y CRM
                </span>
              </div>
              <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-purple-900 text-purple-200 font-bold">
                INTENÇÃO DE COMPRA: 92%
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-[#0b0416] border border-purple-950">
                <span className="font-mono-tech text-[10px] text-purple-300 uppercase block font-bold">
                  1. Detecção da IA Aurora
                </span>
                <p className="text-slate-200 mt-0.5">
                  Gatilho de aprovação de diretoria mapeado com data limite para fechamento no dia 03.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#0b0416] border border-purple-950">
                <span className="font-mono-tech text-[10px] text-white uppercase block font-bold">
                  2. Ação Automática no S.P.Y CRM
                </span>
                <p className="text-slate-200 mt-0.5">
                  Card movido no pipeline do S.P.Y para "Aprovação de Diretoria". Tarefa de follow-up prioritário agendada automaticamente para o dia 03 às 09:30 com notificação push e SLA.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#0b0416] border border-purple-950">
                <span className="font-mono-tech text-[10px] text-purple-300 uppercase block font-bold">
                  3. Script de Follow-up Gerado pela Aurora
                </span>
                <p className="text-slate-200 mt-0.5 italic">
                  "Bom dia, [Nome]! Conforme combinamos para o início do mês, preparei a minuta do onboarding para iniciarmos já nesta semana. Como foi a validação da diretoria?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase">
            Como o S.P.Y CRM Transforma a Sua Operação Comercial
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Controle absoluto de pipeline, atendimento e histórico com a inteligência da Aurora em cada etapa.
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
            <div key={idx} className="p-5 rounded-xl bg-[#0c0618] border border-purple-950 hover:border-purple-500/40 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <h4 className="font-display font-bold text-sm text-white">{item.title}</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Bottom */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0e0620] border border-purple-900/50 text-center shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase">
          Elimine o Gargalo Comercial com o S.P.Y CRM da Pluppex
        </h3>
        <p className="text-sm text-slate-300 mt-2 max-w-lg mx-auto">
          Descubra como estruturar o pipeline da sua empresa com o S.P.Y e ativar a IA Aurora para multiplicar conversões.
        </p>
        <button
          onClick={onOpenDiagnostic}
          className="mt-6 px-6 py-3.5 rounded-xl bg-white text-[#090412] hover:bg-purple-100 font-display font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/25 transition-all"
        >
          Quero Conhecer o S.P.Y CRM
        </button>
      </div>
    </div>
  );
};
