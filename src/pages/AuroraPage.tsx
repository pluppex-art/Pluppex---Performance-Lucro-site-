import React, { useState } from 'react';
import { PageType } from '../types';
import { PluppexLogo } from '../components/PluppexLogo';
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
  Layers, 
  Kanban,
  Bot,
  MessageSquare,
  Clock,
  DollarSign,
  AlertTriangle,
  Send,
  Terminal,
  Calendar,
  Check,
  Flame,
  ChevronRight,
  Mic,
  Play,
  Volume2,
  Sliders,
  Calculator,
  Brain,
  Activity,
  UserCheck,
  Cpu,
  Smartphone,
  Eye
} from 'lucide-react';

interface AuroraPageProps {
  onNavigate: (page: PageType) => void;
  onOpenDiagnostic: () => void;
}

export const AuroraPage: React.FC<AuroraPageProps> = ({ onNavigate, onOpenDiagnostic }) => {
  // Scenario state in cockpit
  const [activeScenario, setActiveScenario] = useState<'pipeline' | 'cac' | 'closer' | 'chat'>('pipeline');
  const [copiedAction, setCopiedAction] = useState(false);

  // Audio simulation state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeAudioLead, setActiveAudioLead] = useState<'lead1' | 'lead2'>('lead1');

  // Interactive ROI Calculator state
  const [monthlyLeads, setMonthlyLeads] = useState<number>(350);
  const [ticketMedio, setTicketMedio] = useState<number>(8500);

  // Calculations
  const leadsEsquecidos = Math.round(monthlyLeads * 0.28); // 28% de leads esquecidos em média
  const leadsRecuperados = Math.round(leadsEsquecidos * 0.32); // 32% recuperados pela Aurora
  const vendasAdicionais = Math.max(1, Math.round(leadsRecuperados * 0.18)); // 18% taxa de fechamento
  const receitaResgatada = vendasAdicionais * ticketMedio;
  const horasEconomizadas = Math.round((monthlyLeads * 14) / 60); // 14 min por lead qualificado manualmente

  // Interactive Playground state
  const [activePrompt, setActivePrompt] = useState<number>(0);
  const [isTypingAi, setIsTypingAi] = useState<boolean>(false);

  const testPrompts = [
    {
      id: 0,
      label: 'Lead B2B no WhatsApp às 23h',
      tag: 'Qualificação Instantânea',
      leadText: 'Boa noite! Temos uma distribuidora farmacêutica e estamos com 8 vendedores perdendo propostas. Como a Pluppex ajuda?',
      auroraResponse: 'Olá! Para distribuidoras estruturamos cadências ativas no WhatsApp e painéis de esteira no S.P.Y CRM para travar perdas. Qual é o faturamento mensal aproximado da sua distribuidora para desenharmos a máquina ideal?',
      leadReply: 'Faturamos cerca de R$ 1.8 milhão por mês.',
      auroraAction: 'Perfil Decisor Corporativo identificado (Score 98/100). Reunião com especialista em distribuição agendada para amanhã às 10h. Lead inserido na etapa "Qualificado por IA" do S.P.Y CRM.'
    },
    {
      id: 1,
      label: 'Detecção de Lead Frio Esquecido',
      tag: 'Resgate Autônomo',
      leadText: 'Lead "Dr. Eduardo - Clínica Prime" sem contato há 12 dias após envio de proposta de R$ 42.000.',
      auroraResponse: 'Ação executada: Disparo de áudio contextualizado personalizado no WhatsApp abordando a principal objeção levantada (tempo de implementação do projeto).',
      leadReply: 'Eduardo respondeu 8 minutos depois: "Olá, desculpe a correria. Se conseguirmos iniciar semana que vem, fechamos."',
      auroraAction: 'Oportunidade de R$ 42.000 resgatada com sucesso. Alerta sonoro de fechamento emitido para o closer responsável no S.P.Y.'
    },
    {
      id: 2,
      label: 'Auditoria de Mídia & Lucro Real',
      tag: 'Arbitragem de Ads',
      leadText: 'Comando do Diretor: "Aurora, qual campanha está gerando mais lucro líquido este mês?"',
      auroraResponse: 'Processando dados de Meta Ads (R$ 18.400 investidos) + Google Search (R$ 14.200 investidos) cruzados com baixas de notas no S.P.Y...',
      leadReply: 'Conclusão: Campanha "B2B Decisores Meta" gerou R$ 186.000 em faturamento líquido (ROAS Real 10.1x), enquanto Google gerou R$ 48.000 com maior inadimplência.',
      auroraAction: 'Recomendação estratégica: Redirecionar R$ 6.000 do Google para a campanha campeã do Meta Ads para maximizar margem no trimestre.'
    }
  ];

  const handleSelectPrompt = (index: number) => {
    setIsTypingAi(true);
    setActivePrompt(index);
    setTimeout(() => {
      setIsTypingAi(false);
    }, 450);
  };

  const handleSimulateAction = () => {
    setCopiedAction(true);
    setTimeout(() => setCopiedAction(false), 2500);
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: AURORA NEURAL ENGINE */}
      {/* ========================================================================= */}
      <section className="relative p-8 sm:p-14 lg:p-16 rounded-3xl bg-gradient-to-b from-[#180933] via-[#0e0520] to-[#070212] border border-purple-500/35 shadow-2xl overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          {/* Pulsing Live Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/90 border border-purple-500/40 text-purple-200 text-xs font-mono-tech tracking-wide mb-6 shadow-lg shadow-purple-950/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-semibold text-white">AURORA AI ENGINE v4.2</span>
            <span className="text-slate-400">•</span>
            <span className="text-emerald-300">Nativa no S.P.Y CRM</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white tracking-tight leading-[1.08] uppercase">
            A Inteligência Artificial que <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Opera a sua Máquina de Receita.
            </span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl font-display text-purple-200/90 font-medium max-w-3xl leading-snug">
            Não é um chatbot genérico que responde frases prontas. A Aurora atua como SDR autônomo no WhatsApp, audita funis 24/7 e entrega decisões táticas de lucro direto para os diretores.
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-light">
            Desenvolvida pela Pluppex especificamente para vendas complexas, serviços de alto valor e B2B. A Aurora qualifica oportunidades em 45 segundos, resgata leads esquecidos e descobre onde sua empresa perde margem.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              id="aurora-hero-cta-btn"
              onClick={onOpenDiagnostic}
              className="px-8 py-4 rounded-xl bg-white text-[#080312] hover:bg-purple-100 font-display font-black text-xs uppercase tracking-wider shadow-xl shadow-purple-500/30 transition-all flex items-center justify-center gap-2.5 group"
            >
              <Zap className="w-4 h-4 text-purple-700 fill-purple-700" />
              <span>Ativar a Aurora na Minha Empresa</span>
              <ArrowRight className="w-4 h-4 text-purple-700 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#calculadora-aurora"
              className="px-7 py-4 rounded-xl bg-[#130728] hover:bg-[#1c0c38] text-slate-200 hover:text-white border border-purple-900/60 hover:border-purple-400/80 transition-all text-xs font-mono-tech uppercase font-semibold flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-cyan-400" />
              <span>Calcular Receita Resgatada</span>
            </a>
          </div>

          {/* Engine Real-Time Telemetry Bar */}
          <div className="mt-12 pt-6 border-t border-purple-900/50 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Tempo Médio de Resposta</span>
              <span className="text-base sm:text-lg font-display font-bold text-emerald-400">&lt; 45 segundos</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Qualificação contínua no WhatsApp</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Resgate de Pipeline</span>
              <span className="text-base sm:text-lg font-display font-bold text-cyan-300">R$ 180k+ / mês</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Oportunidades recuperadas</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Precisão de Diagnóstico</span>
              <span className="text-base sm:text-lg font-display font-bold text-purple-300">96.8%</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">ICP e intenção de compra</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0e0620]/90 border border-purple-900/40">
              <span className="text-[10px] font-mono-tech text-slate-400 uppercase block">Sincronização Nativa</span>
              <span className="text-base sm:text-lg font-display font-bold text-white">S.P.Y CRM</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Sem integrações frágeis</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE VISUAL PIPELINE LOOP: COMO A AURORA CONECTA A MÁQUINA */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-mono-tech uppercase font-semibold mb-2">
            <Activity className="w-3.5 h-3.5 text-purple-400" />
            <span>FLUXO OPERACIONAL CONTÍNUO</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
            O Loop Perfeito de Receita da Aurora
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Como cada oportunidade é capturada, aquecida, distribuída e transformada em caixa real:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Step 1 */}
          <div className="p-6 rounded-2xl bg-[#0e0620] border border-purple-900/50 hover:border-purple-500/60 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-tech text-purple-400 font-bold px-2 py-0.5 rounded bg-purple-950 border border-purple-800">
                  ETAPA 01
                </span>
                <span className="text-[10px] font-mono-tech text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Tempo: 0 a 45s
                </span>
              </div>
              <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-purple-200 transition-colors">
                1. Atendimento & Triagem
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Lead clica no anúncio (Meta/Google) e envia mensagem no WhatsApp. A Aurora responde instantaneamente com linguagem natural, transcrevendo áudios e filtrando curiosos.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-950 text-[11px] font-mono-tech text-purple-300">
              • Filtro de ICP & segmento
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-2xl bg-[#0e0620] border border-purple-900/50 hover:border-purple-500/60 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-tech text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800">
                  ETAPA 02
                </span>
                <span className="text-[10px] font-mono-tech text-cyan-300 flex items-center gap-1">
                  Score de Compra
                </span>
              </div>
              <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-cyan-200 transition-colors">
                2. Diagnóstico & Score
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                A Aurora diagnostica o tamanho da empresa, faturamento, dor principal e poder de decisão. Cria o card do lead automaticamente no S.P.Y CRM com resumo completo.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-950 text-[11px] font-mono-tech text-cyan-300">
              • Histórico gravado no S.P.Y
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-2xl bg-[#0e0620] border border-purple-900/50 hover:border-purple-500/60 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-tech text-purple-300 font-bold px-2 py-0.5 rounded bg-purple-950 border border-purple-800">
                  ETAPA 03
                </span>
                <span className="text-[10px] font-mono-tech text-emerald-400">
                  Google Calendar
                </span>
              </div>
              <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-purple-200 transition-colors">
                3. Agendamento com Closer
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Se o lead for qualificado, a Aurora agenda a reunião diretamente na agenda do vendedor compatível, envia o link do Google Meet e prepara o briefing de fechamento.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-950 text-[11px] font-mono-tech text-purple-300">
              • Vendedor entra pronto para fechar
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-6 rounded-2xl bg-[#0e0620] border border-purple-900/50 hover:border-purple-500/60 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-tech text-fuchsia-400 font-bold px-2 py-0.5 rounded bg-fuchsia-950/60 border border-fuchsia-800">
                  ETAPA 04
                </span>
                <span className="text-[10px] font-mono-tech text-fuchsia-300">
                  24/7 Ativo
                </span>
              </div>
              <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-fuchsia-200 transition-colors">
                4. Auditoria & Resgate
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Se uma proposta não for respondida ou o vendedor atrasar o follow-up, a Aurora ativa réguas de reengajamento automatizadas para não deixar nenhum dinheiro na mesa.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-950 text-[11px] font-mono-tech text-fuchsia-300">
              • Zero vazamento de pipeline
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SIMULADOR INTERATIVO AO VIVO DA AURORA (INTERACTIVE PLAYGROUND) */}
      {/* ========================================================================= */}
      <section className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#120728] to-[#0a0316] border border-purple-500/40 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-purple-900/60 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-300 font-mono-tech text-xs uppercase font-semibold mb-2">
              <Bot className="w-3.5 h-3.5 text-purple-400" />
              <span>PLAYGROUND COGNITIVO INTERATIVO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
              Veja a Aurora Pensando e Decidindo
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Escolha uma situação real para ver o fluxo de raciocínio e execução da IA:
            </p>
          </div>

          {/* Interactive Situation Buttons */}
          <div className="flex flex-wrap gap-2">
            {testPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectPrompt(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono-tech transition-all flex items-center gap-1.5 ${
                  activePrompt === idx
                    ? 'bg-white text-[#090314] font-bold shadow-lg shadow-purple-500/20'
                    : 'bg-[#090314] text-slate-400 hover:text-white border border-purple-900/50 hover:border-purple-600'
                }`}
              >
                <Sparkles className={`w-3.5 h-3.5 ${activePrompt === idx ? 'text-purple-700' : 'text-purple-400'}`} />
                <span>{p.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* The Live Interactive Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Terminal Left: Chat Transcript Simulation */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-[#06020c] border border-purple-900/80 font-sans space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-purple-950 pb-3 text-xs font-mono-tech text-slate-400">
                <span className="flex items-center gap-1.5 text-purple-300">
                  <Smartphone className="w-3.5 h-3.5 text-purple-400" />
                  <span>Sessão WhatsApp #PLX-{testPrompts[activePrompt].id + 8420}</span>
                </span>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                  {testPrompts[activePrompt].tag}
                </span>
              </div>

              {/* Lead Msg 1 */}
              <div className="p-3.5 rounded-2xl rounded-bl-none bg-slate-900/90 border border-slate-800 text-slate-200 text-xs">
                <span className="text-[10px] font-mono-tech text-slate-400 block mb-1">Lead Comercial:</span>
                <p>{testPrompts[activePrompt].leadText}</p>
              </div>

              {/* Aurora Response */}
              <div className="p-3.5 rounded-2xl rounded-br-none bg-gradient-to-r from-purple-950/90 via-[#180833] to-purple-950/90 border border-purple-500/40 text-purple-100 text-xs shadow-md">
                <div className="flex items-center justify-between text-[10px] font-mono-tech text-cyan-300 mb-1.5">
                  <span className="flex items-center gap-1 font-bold">
                    <Bot className="w-3 h-3 text-cyan-400" />
                    <span>Aurora SDR IA</span>
                  </span>
                  <span className="text-slate-400">Tempo de resposta: 38s</span>
                </div>
                {isTypingAi ? (
                  <div className="flex items-center gap-1.5 py-1 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.4s]" />
                    <span className="text-[11px] font-mono-tech ml-2">Aurora processando dados...</span>
                  </div>
                ) : (
                  <p className="leading-relaxed">{testPrompts[activePrompt].auroraResponse}</p>
                )}
              </div>

              {/* Lead Msg 2 */}
              <div className="p-3.5 rounded-2xl rounded-bl-none bg-slate-900/90 border border-slate-800 text-slate-200 text-xs">
                <span className="text-[10px] font-mono-tech text-slate-400 block mb-1">Lead Comercial:</span>
                <p>{testPrompts[activePrompt].leadReply}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-purple-950 text-[11px] font-mono-tech text-slate-400 flex items-center justify-between">
              <span>Status da Conversa: Qualificado com Sucesso</span>
              <span className="text-emerald-400 font-bold">Taxa de Conversão: 100%</span>
            </div>
          </div>

          {/* Terminal Right: S.P.Y CRM Action Executed */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0f0622] border border-purple-500/40 font-mono-tech text-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-purple-300 border-b border-purple-900/60 pb-3 font-bold text-xs">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span>AÇÃO AUTOMÁTICA NO S.P.Y CRM</span>
              </div>

              <div className="p-4 rounded-xl bg-[#070210] border border-purple-900/70 text-slate-200 space-y-2">
                <span className="text-[10px] text-cyan-300 uppercase font-bold block">
                  Regra de Automação Executada:
                </span>
                <p className="text-xs text-purple-200 leading-relaxed">
                  {testPrompts[activePrompt].auroraAction}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] text-slate-400 uppercase block">Checklist de Integridade:</span>
                <div className="space-y-1.5 text-[11px] text-slate-300">
                  <p className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Gravação da transcrição no card do cliente</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Notificação no WhatsApp do vendedor designado</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Atualização do dashboard de CAC e conversão</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-purple-900/50">
              <button
                onClick={onOpenDiagnostic}
                className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-display font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30"
              >
                <Zap className="w-3.5 h-3.5 text-white fill-white" />
                <span>Quero Essa Automação na Minha Empresa</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INTELIGÊNCIA DE VOZ E ÁUDIO NO WHATSAPP (AUDIO WAVEFORM ENGINE) */}
      {/* ========================================================================= */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#0b0416] border border-purple-900/60 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/90 border border-purple-500/30 text-purple-300 text-xs font-mono-tech uppercase font-semibold">
              <Mic className="w-3.5 h-3.5 text-cyan-400" />
              <span>INTELIGÊNCIA DE VOZ EXCLUSIVA</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-display font-black text-white uppercase tracking-tight leading-tight">
              A Aurora Ouve, Entende e Transcreve Áudios do WhatsApp em Milissegundos.
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed font-light">
              Mais de 60% dos tomadores de decisão em B2B preferem enviar áudios no WhatsApp em vez de preencher formulários longos. Enquanto chatbots comuns travam ao receber áudio, a Aurora:
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200 font-mono-tech">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Transcreve com fidelidade fonética termos técnicos e jargões do seu nicho.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Identifica o nível de urgência, objeção oculta e orçamento mencionado no tom de voz.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Responde em texto ou áudio humanizado com o tom de autoridade da sua marca.</span>
              </li>
            </ul>
          </div>

          {/* Interactive Voice Player Mockup */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-[#120726] border border-purple-500/40 space-y-4">
            <div className="flex items-center justify-between border-b border-purple-900/60 pb-3">
              <span className="text-xs font-mono-tech text-purple-300 font-bold flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-cyan-400" />
                <span>DEMO DE TRANSCRIÇÃO E ANÁLISE DE VOZ</span>
              </span>
              <span className="text-[10px] font-mono-tech text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                Latência: 0.4s
              </span>
            </div>

            {/* Audio Waveform Card */}
            <div className="p-4 rounded-xl bg-[#080210] border border-purple-900/60 space-y-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center shrink-0 hover:scale-105 transition-transform shadow-md shadow-purple-600/30"
                >
                  <Play className={`w-4 h-4 fill-white ${isPlayingAudio ? 'animate-pulse' : ''}`} />
                </button>
                <div className="flex-1">
                  <div className="flex items-center justify-between text-[11px] font-mono-tech text-slate-400 mb-1">
                    <span>Áudio do Lead (Dr. Roberto - Diretor Médico)</span>
                    <span className="text-cyan-300">0:18</span>
                  </div>
                  {/* Visual Waveform bars */}
                  <div className="flex items-center gap-1 h-6">
                    {[40, 75, 95, 30, 85, 100, 60, 45, 90, 100, 70, 40, 80, 95, 50, 65, 80, 100, 75, 45, 85, 90, 60, 35, 75, 50, 30].map((h, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-full transition-all duration-300 ${
                          isPlayingAudio 
                            ? 'bg-gradient-to-t from-purple-500 to-cyan-400' 
                            : 'bg-purple-900/60'
                        }`}
                        style={{ height: `${isPlayingAudio ? Math.max(15, (h * (i % 2 === 0 ? 1 : 0.7))) : h * 0.5}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Transcribed Text by Aurora */}
              <div className="p-3 rounded-lg bg-[#14082c] border border-purple-800/40 text-xs space-y-1">
                <span className="text-[10px] font-mono-tech text-purple-300 font-bold block">
                  TRANSCRIÇÃO EM TEMPO REAL PELA AURORA:
                </span>
                <p className="text-slate-200 italic">
                  "Olá pessoal, estou buscando uma máquina comercial completa para nossa rede de 4 unidades. Precisamos integrar os leads das campanhas com nossos consultores porque estamos perdendo tempo de resposta..."
                </p>
              </div>

              {/* Extracted Intelligence Badges */}
              <div className="grid grid-cols-3 gap-2 pt-1 font-mono-tech text-[10px]">
                <div className="p-2 rounded bg-purple-950/50 border border-purple-800/40 text-center">
                  <span className="text-slate-400 block">Perfil</span>
                  <span className="text-white font-bold">Diretoria (4 un.)</span>
                </div>
                <div className="p-2 rounded bg-purple-950/50 border border-purple-800/40 text-center">
                  <span className="text-slate-400 block">Urgência</span>
                  <span className="text-amber-400 font-bold">Alta (Gargalo)</span>
                </div>
                <div className="p-2 rounded bg-purple-950/50 border border-purple-800/40 text-center">
                  <span className="text-slate-400 block">Ação</span>
                  <span className="text-emerald-400 font-bold">Reunião VIP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE ROI CALCULATOR (CALCULADORA DE RECEITA RESGATADA) */}
      {/* ========================================================================= */}
      <section id="calculadora-aurora" className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#14082c] via-[#0d041c] to-[#070210] border border-purple-500/40 shadow-2xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/90 border border-purple-500/30 text-purple-300 text-xs font-mono-tech uppercase font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            <span>SIMULADOR DE ECONOMIA & RECEITA</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
            Quanto Dinheiro a Aurora Pode Salvar na Sua Operação?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Ajuste os controles abaixo com a realidade da sua empresa e veja a projeção de impacto imediato:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Sliders (Left Column) */}
          <div className="lg:col-span-6 space-y-6 bg-[#090314] p-6 rounded-2xl border border-purple-900/60 font-mono-tech">
            {/* Slider 1: Monthly Leads */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-bold">Leads Recebidos por Mês:</span>
                <span className="text-purple-300 font-black text-base">{monthlyLeads} leads</span>
              </div>
              <input
                type="range"
                min={50}
                max={3000}
                step={50}
                value={monthlyLeads}
                onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                className="w-full h-2 bg-purple-950 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>50 leads</span>
                <span>1.500 leads</span>
                <span>3.000 leads</span>
              </div>
            </div>

            {/* Slider 2: Average Ticket */}
            <div className="space-y-2 pt-4 border-t border-purple-950">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-bold">Ticket Médio por Venda / Contrato:</span>
                <span className="text-cyan-300 font-black text-base">
                  R$ {ticketMedio.toLocaleString('pt-BR')}
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={60000}
                step={1000}
                value={ticketMedio}
                onChange={(e) => setTicketMedio(Number(e.target.value))}
                className="w-full h-2 bg-purple-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>R$ 1.000</span>
                <span>R$ 30.000</span>
                <span>R$ 60.000</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-400 leading-relaxed font-sans">
              * Baseado na média de mercado onde 28% dos leads não recebem follow-up adequado dentro do prazo ótimo de conversão.
            </div>
          </div>

          {/* Results Card (Right Column) */}
          <div className="lg:col-span-6 p-7 rounded-2xl bg-gradient-to-br from-purple-950/60 via-[#180833] to-purple-950/60 border border-purple-500/40 text-center space-y-5 shadow-xl">
            <span className="text-xs font-mono-tech text-cyan-300 uppercase tracking-widest font-bold block">
              POTENCIAL DE RECEITA RESGATADA PELA AURORA:
            </span>

            <div className="text-3xl sm:text-5xl font-display font-black text-white drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              R$ {receitaResgatada.toLocaleString('pt-BR')}
              <span className="text-xs font-mono-tech text-purple-300 block font-normal mt-1">
                por mês em vendas adicionais estimadas
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-purple-900/60 font-mono-tech text-xs">
              <div className="p-3 rounded-xl bg-[#090314] border border-purple-900/50">
                <span className="text-[10px] text-slate-400 uppercase block">Tempo Economizado</span>
                <span className="text-base font-bold text-emerald-400">~{horasEconomizadas} horas</span>
                <span className="text-[9px] text-slate-400 block">de time comercial/mês</span>
              </div>
              <div className="p-3 rounded-xl bg-[#090314] border border-purple-900/50">
                <span className="text-[10px] text-slate-400 uppercase block">Leads Recuperados</span>
                <span className="text-base font-bold text-purple-300">{leadsRecuperados} contatos</span>
                <span className="text-[9px] text-slate-400 block">que virariam perda</span>
              </div>
            </div>

            <button
              onClick={onOpenDiagnostic}
              className="w-full py-4 rounded-xl bg-white text-[#090314] hover:bg-purple-100 font-display font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-purple-500/25 flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-purple-700 fill-purple-700" />
              <span>Resgatar Essa Receita com a Pluppex</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WHATSAPP DO DONO: O RELATÓRIO EXECUTIVO DAS 08:00 */}
      {/* ========================================================================= */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#0a0314] border border-purple-900/60 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono-tech uppercase text-purple-400 font-semibold tracking-wider block">
              CONTROLE TOTAL SEM MICROMANAGEMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
              O Briefing Executivo que Você Recebe no WhatsApp Toda Manhã.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Esqueça abrir planilhas confusas ou cobrar coordenadores para saber se a meta vai bater. Às 08:00 em ponto, a Aurora envia no WhatsApp dos sócios um resumo conciso com previsibilidade de fechamento, alertas de risco e saúde do caixa.
            </p>

            <div className="space-y-2 text-xs font-mono-tech text-slate-300 pt-2">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Previsão de faturamento líquido da semana com 94% de acurácia.</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Identificação de vendedores que precisam de intervenção tática.</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Aviso de campanhas de tráfego que começaram a encarecer antes de queimar budget.</span>
              </p>
            </div>
          </div>

          {/* WhatsApp CEO Briefing Phone Mockup */}
          <div className="lg:col-span-6 max-w-md mx-auto w-full p-5 rounded-3xl bg-[#070210] border border-purple-500/40 shadow-2xl space-y-3 font-sans text-xs">
            <div className="flex items-center gap-2.5 border-b border-purple-950 pb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xs">
                A
              </div>
              <div>
                <p className="font-bold text-white text-xs flex items-center gap-1">
                  <span>Aurora Copilot • Diretoria</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                </p>
                <p className="text-[10px] text-slate-400 font-mono-tech">S.P.Y Intelligence • 08:00</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl rounded-tl-none bg-[#14082c] border border-purple-500/30 text-slate-200 space-y-2.5 font-mono-tech text-[11px] leading-relaxed">
              <p className="font-bold text-purple-200">
                ☀️ Bom dia, Diretor. Aqui está o briefing tático da sua máquina nas últimas 24h:
              </p>
              <div className="space-y-1 text-slate-300">
                <p>• <strong>48 novos leads</strong> recebidos (Meta Ads gerando 72% do volume).</p>
                <p>• <strong>31 leads qualificados</strong> com perfil decisor pela Aurora.</p>
                <p>• <strong>8 reuniões agendadas</strong> para hoje na esteira dos closers.</p>
                <p>• <strong>R$ 84.000 em propostas</strong> na etapa de fechamento final.</p>
              </div>
              <div className="p-2 rounded bg-[#090314] border border-amber-900/40 text-amber-300 text-[10px]">
                ⚠️ <strong>Atenção:</strong> 2 contratos importantes com Dr. Roberto e Imobiliária Alpha aguardam assinatura. Link de reengajamento enviado.
              </div>
              <p className="text-[10px] text-cyan-300 font-bold">
                🎯 Previsão da semana: R$ 158.000 (Meta da semana: R$ 140.000 — Superação provável de +12%).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. GRAND FINAL CTA */}
      {/* ========================================================================= */}
      <section className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-[#180833] via-[#0d041c] to-[#180833] border border-purple-500/40 text-center shadow-2xl overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-3">
            <PluppexLogo variant="icon" className="w-12 h-12" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight">
            Chega de Perder Leads por Lentidão. <br />
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Ative a Aurora na Sua Empresa.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Conectamos a Aurora ao seu WhatsApp comercial e ao S.P.Y CRM para construir uma operação previsível, com velocidade extrema e decisões orientadas a lucro.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="aurora-bottom-cta-btn"
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#090416] font-display font-black text-xs uppercase tracking-wider hover:bg-purple-100 transition-all shadow-xl shadow-purple-500/30 flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-purple-700 fill-purple-700" />
              <span>Solicitar Diagnóstico com a Equipe</span>
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
