import React, { useState } from 'react';
import { PageType } from '../types';
import { 
  Sparkles, 
  BarChart3, 
  TrendingUp, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  LineChart, 
  PieChart, 
  Layers, 
  HelpCircle,
  Kanban 
} from 'lucide-react';

interface AuroraPageProps {
  onNavigate: (page: PageType) => void;
  onOpenDiagnostic: () => void;
}

export const AuroraPage: React.FC<AuroraPageProps> = ({ onNavigate, onOpenDiagnostic }) => {
  const [activeScenario, setActiveScenario] = useState<'cac' | 'pipeline' | 'closer'>('pipeline');

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Hero Section */}
      <div className="relative p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#160830] via-[#0e0520] to-[#080214] border border-purple-500/30 shadow-2xl overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-mono-tech tracking-wide mb-6">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>A INTELIGÊNCIA ARTIFICIAL DO S.P.Y E DA PLUPPEX</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight uppercase">
            Aurora — A IA do S.P.Y e da Pluppex
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-300 font-bold">
            "A inteligência artificial nativa que opera dentro do S.P.Y CRM e guia toda a máquina de receita."
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            A <strong>Aurora</strong> é a inteligência artificial desenvolvida pela Pluppex. Integrada ao <strong>S.P.Y CRM</strong>, ela atua como SDR autônomo qualificando leads em segundos, detecta intenções de compra no WhatsApp, agenda follow-ups de resgate e analisa todos os dados da operação (Mídia + Vendas + Caixa) para recomendar decisões táticas aos diretores.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenDiagnostic}
              className="px-6 py-3.5 rounded-xl bg-white text-[#090412] hover:bg-purple-100 font-display font-bold text-xs uppercase tracking-wider shadow-xl shadow-purple-500/25 transition-all flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-purple-700" />
              <span>Ativar a Aurora na Minha Operação</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Aurora Intelligence Dashboard Showcase */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#0c0618] border border-purple-950 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-purple-950 pb-6 mb-8">
          <div>
            <span className="text-xs font-mono-tech uppercase text-purple-400 font-semibold block mb-1">
              PAINEL EXECUTIVO INTEGRADO
            </span>
            <h3 className="text-2xl font-display font-bold text-white">
              Visão Preditiva da Aurora em Tempo Real
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Selecione o cenário para ver as recomendações táticas geradas pelo motor de IA da Aurora:
            </p>
          </div>

          {/* Scenario tabs */}
          <div className="flex items-center gap-2 bg-[#120824] p-1.5 rounded-xl border border-purple-950 text-xs font-mono-tech">
            <button
              onClick={() => setActiveScenario('pipeline')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeScenario === 'pipeline' ? 'bg-white text-[#090412] font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Gargalo no Funil
            </button>
            <button
              onClick={() => setActiveScenario('cac')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeScenario === 'cac' ? 'bg-white text-[#090412] font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Otimização de CAC
            </button>
            <button
              onClick={() => setActiveScenario('closer')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeScenario === 'closer' ? 'bg-white text-[#090412] font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Performance de Vendedores
            </button>
          </div>
        </div>

        {/* Dynamic Scenario Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Key metrics visual strip */}
          <div className="lg:col-span-4 space-y-3 font-mono-tech text-xs">
            <div className="p-4 rounded-xl bg-[#080312] border border-purple-950">
              <span className="text-slate-400 uppercase text-[10px] block">CAC Real Integrado</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-white">R$ 214,50</span>
                <span className="text-[10px] text-purple-400 font-bold">-18% vs mês anterior</span>
              </div>
              <p className="text-[10px] text-slate-500 mt-1">Mídia Meta + Google cruzada com CRM</p>
            </div>

            <div className="p-4 rounded-xl bg-[#080312] border border-purple-950">
              <span className="text-slate-400 uppercase text-[10px] block">Ciclo Médio de Venda</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-white">4.2 dias</span>
                <span className="text-[10px] text-purple-300 font-bold">Aceleração com SDR IA</span>
              </div>
              <p className="text-[10px] text-slate-500 mt-1">Tempo do primeiro contato até o fechamento</p>
            </div>

            <div className="p-4 rounded-xl bg-[#080312] border border-purple-950">
              <span className="text-slate-400 uppercase text-[10px] block">Taxa de Conversão Global</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-purple-200">14.8%</span>
                <span className="text-[10px] text-white font-bold">+5.2pp pós-Pluppex</span>
              </div>
              <p className="text-[10px] text-slate-500 mt-1">Leads qualificados transformados em vendas</p>
            </div>
          </div>

          {/* Aurora Copilot Action Recommendation Card */}
          <div className="lg:col-span-8 p-6 rounded-2xl bg-[#14082c]/70 border border-purple-500/40 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-purple-500/30 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="font-display font-bold text-xs text-white uppercase">
                    DIAGNÓSTICO EXECUTIVO AURORA
                  </span>
                </div>
                <span className="text-[10px] font-mono-tech text-purple-200 bg-purple-900/60 px-2 py-0.5 rounded border border-purple-700">
                  RECOMENDAÇÃO PRIORITÁRIA
                </span>
              </div>

              {activeScenario === 'pipeline' && (
                <div className="space-y-3">
                  <h4 className="text-lg font-display font-bold text-white">
                    Gargalo Identificado: 42 orçamentos estagnados na etapa "Em Negociação" há mais de 8 dias.
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    A Aurora detectou que os vendedores não fizeram o terceiro follow-up obrigatório. Esse atraso está gerando uma perda estimada de R$ 86.000 em pipeline aquecido.
                  </p>
                  <div className="p-4 rounded-xl bg-[#0b0416] border border-purple-950 text-xs font-mono-tech space-y-1.5">
                    <p className="text-purple-300 font-bold">AÇÃO EXECUTADA PELA AURORA:</p>
                    <p className="text-slate-200">• Ativação automática do Agente de Follow-up de Resgate no WhatsApp</p>
                    <p className="text-slate-200">• Notificação ao coordenador comercial com a lista de leads prioritários</p>
                  </div>
                </div>
              )}

              {activeScenario === 'cac' && (
                <div className="space-y-3">
                  <h4 className="text-lg font-display font-bold text-white">
                    Alocação de Mídia: Campanha "B2B Decisores Meta" gerando 3x mais contratos que Google Search.
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Embora o Google gere mais volume de cliques, a Aurora cruzou os dados e comprovou que o público do Meta Ads tem ticket médio 45% maior e menor índice de cancelamento.
                  </p>
                  <div className="p-4 rounded-xl bg-[#0b0416] border border-purple-950 text-xs font-mono-tech space-y-1.5">
                    <p className="text-purple-300 font-bold">RECOMENDAÇÃO ESTRATÉGICA:</p>
                    <p className="text-slate-200">• Remanejar 30% do budget de busca para escala da campanha vencedora no Meta</p>
                    <p className="text-slate-200">• Previsão de aumento no faturamento líquido de +22% no próximo trimestre</p>
                  </div>
                </div>
              )}

              {activeScenario === 'closer' && (
                <div className="space-y-3">
                  <h4 className="text-lg font-display font-bold text-white">
                    Disparidade de Conversão Comercial: Vendedor B tem taxa de fechamento 2.4x superior ao Vendedor A.
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    A análise de áudios e reuniões revelou que o Vendedor B aplica a técnica de ancoragem de valor nos primeiros 10 minutos e fecha o compromisso de próxima reunião na mesma ligação.
                  </p>
                  <div className="p-4 rounded-xl bg-[#0b0416] border border-purple-950 text-xs font-mono-tech space-y-1.5">
                    <p className="text-purple-300 font-bold">PLANO DE AÇÃO:</p>
                    <p className="text-slate-200">• Transcrição e extração do pitch ideal para treinamento de toda a equipe</p>
                    <p className="text-slate-200">• Parametrização do CRM para distribuição balanceada de acordo com o score do lead</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-purple-950 flex items-center justify-between">
              <span className="text-[11px] font-mono-tech text-slate-400">Aurora AI Engine • Versão Corporativa</span>
              <button
                onClick={onOpenDiagnostic}
                className="text-xs font-mono-tech uppercase text-purple-300 hover:text-white font-bold flex items-center gap-1"
              >
                <span>Ativar na Minha Empresa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Áreas de Atuação da Aurora */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#0c0618] border border-purple-950">
          <Kanban className="w-6 h-6 text-purple-400 mb-3" />
          <h4 className="font-display font-bold text-lg text-white mb-2">Dentro do S.P.Y CRM</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Opera como SDR autônomo respondendo leads em menos de 1 minuto, calcula score de intenção no WhatsApp, agenda follow-up obrigatório e atualiza o pipeline sem intervenção manual.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0c0618] border border-purple-950">
          <Layers className="w-6 h-6 text-purple-300 mb-3" />
          <h4 className="font-display font-bold text-lg text-white mb-2">Na Máquina da Pluppex</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Cruza o tráfego pago (Meta/Google Ads) com as vendas concluídas no caixa, identificando instantaneamente onde há vazamento de margem e quais canais geram clientes mais lucrativos.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0c0618] border border-purple-950">
          <BarChart3 className="w-6 h-6 text-purple-400 mb-3" />
          <h4 className="font-display font-bold text-lg text-white mb-2">Copiloto da Diretoria</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Recomendações táticas em linguagem natural para os sócios: previsibilidade de faturamento, metas comerciais e alertas de gargalos operacionais antes que virem prejuízo.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0e0620] border border-purple-900/50 text-center shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase">
          Menos Informação Espalhada. Mais Inteligência com a Aurora.
        </h3>
        <p className="text-sm text-slate-300 mt-2 max-w-lg mx-auto">
          Ative a Aurora no seu S.P.Y CRM e na sua máquina de receitas para ter controle e previsibilidade absoluta.
        </p>
        <button
          onClick={onOpenDiagnostic}
          className="mt-6 px-6 py-3.5 rounded-xl bg-white text-[#090412] hover:bg-purple-100 font-display font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/25 transition-all"
        >
          Conhecer a Aurora IA
        </button>
      </div>
    </div>
  );
};
