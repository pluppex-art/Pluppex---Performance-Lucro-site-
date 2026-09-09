import React from 'react';
import { PageType } from '../types';
import { 
  Terminal, 
  Cpu, 
  Bot, 
  Eye, 
  Sparkles, 
  Kanban, 
  Zap, 
  Network, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Database,
  Lock,
  Workflow,
  ShieldCheck
} from 'lucide-react';

interface TechnologyPageProps {
  onNavigate: (page: PageType) => void;
  onOpenDiagnostic: () => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({ onNavigate, onOpenDiagnostic }) => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono-tech tracking-wide mb-4">
          <Terminal className="w-3.5 h-3.5 text-purple-400" />
          <span>INFRAESTRUTURA & MOTOR TECNOLÓGICO</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          Tecnologia Aplicada à Receita
        </h1>
        <p className="mt-4 text-base text-slate-300 leading-relaxed">
          "Tecnologia não é o produto. É o motor da máquina." Construímos os sistemas, as conexões e a automação que tiram o peso manual da sua equipe e garantem velocidade de fechamento.
        </p>
      </div>

      {/* 6 Tech Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. S.P.Y CRM */}
        <div className="p-7 rounded-2xl bg-[#0c0618] border border-purple-500/40 hover:border-purple-400 transition-all flex flex-col justify-between shadow-lg shadow-purple-500/10">
          <div>
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-purple-500/40 bg-[#160a2d] p-1 shrink-0">
                <img
                  src="/src/assets/images/pluppex_icon_crm_1788984289429.jpg"
                  alt="Ícone S.P.Y CRM"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="text-[10px] font-mono-tech text-purple-300 uppercase font-bold px-2 py-0.5 rounded bg-purple-950/80 border border-purple-900">
                CRM PROPRIETÁRIO
              </span>
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2">S.P.Y — O CRM da Pluppex</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              "O S.P.Y é o CRM que enxerga cada oportunidade." Centraliza pipelines sob medida, histórico de conversas, distribuição de leads por SLA e auditoria em tempo real.
            </p>
            <div className="space-y-1.5 text-xs text-slate-400 font-mono-tech">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Pipeline comercial visual e rigoroso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Distribuição inteligente (Round Robin/SLA)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Integração nativa com a IA Aurora</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-purple-950 flex items-center justify-between">
            <button
              onClick={() => onNavigate('spy')}
              className="text-xs font-mono-tech uppercase text-purple-300 hover:text-white font-semibold flex items-center gap-1"
            >
              <span>Ver Página do S.P.Y CRM</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 2. Aurora IA */}
        <div className="p-7 rounded-2xl bg-[#0c0618] border border-purple-500/40 hover:border-purple-400 transition-all flex flex-col justify-between shadow-lg shadow-purple-500/10">
          <div>
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-purple-500/40 bg-[#160a2d] p-1 shrink-0">
                <img
                  src="/src/assets/images/pluppex_icon_ai_1788984269141.jpg"
                  alt="Ícone Aurora IA"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="text-[10px] font-mono-tech text-purple-300 uppercase font-bold px-2 py-0.5 rounded bg-purple-950/80 border border-purple-900">
                IA PROPRIETÁRIA
              </span>
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2">Aurora — A IA do S.P.Y & Pluppex</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              "A inteligência que opera dentro do S.P.Y CRM." Qualifica leads em menos de 1 minuto (SDR IA), analisa intenção de compra no WhatsApp e orienta a diretoria com BI preditivo.
            </p>
            <div className="space-y-1.5 text-xs text-slate-400 font-mono-tech">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>SDR IA & follow-up autônomo no S.P.Y</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Detecção de intenção e urgência de fechamento</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Copiloto executivo de decisões estratégicas</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-purple-950 flex items-center justify-between">
            <button
              onClick={() => onNavigate('aurora')}
              className="text-xs font-mono-tech uppercase text-purple-300 hover:text-white font-semibold flex items-center gap-1"
            >
              <span>Ver Página da Aurora IA</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3. Automação & Workflows */}
        <div className="p-7 rounded-2xl bg-[#0c0618] border border-purple-950 hover:border-purple-500/40 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-purple-500/40 bg-[#160a2d] p-1 shrink-0">
                <img
                  src="/src/assets/images/pluppex_icon_automation_1788984298659.jpg"
                  alt="Ícone Automação Comercial"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="text-[10px] font-mono-tech text-purple-300 uppercase font-bold px-2 py-0.5 rounded bg-purple-950/80 border border-purple-900">
                AUTOMAÇÃO REVOPS
              </span>
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2">Automação Comercial</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Eliminamos tarefas repetitivas. Desde o momento em que o formulário é enviado até o contrato emitido, robôs processam dados e disparam alertas.
            </p>
            <div className="space-y-1.5 text-xs text-slate-400 font-mono-tech">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Roteamento instantâneo via WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Geração de propostas comerciais</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Cobrança e lembretes de follow-up</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-purple-950">
            <span className="text-[11px] font-mono-tech text-white">Zero Digitação Manual</span>
          </div>
        </div>

        {/* 4. Integrações & APIs */}
        <div className="p-7 rounded-2xl bg-[#0c0618] border border-purple-950 hover:border-purple-500/40 transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-purple-500/40 bg-[#160a2d] p-1 shrink-0">
                <img
                  src="/src/assets/images/pluppex_icon_data_1788984279687.jpg"
                  alt="Ícone Dados e Integrações"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="text-[10px] font-mono-tech text-purple-300 uppercase font-bold px-2 py-0.5 rounded bg-purple-950/80 border border-purple-900">
                INTEGRAÇÃO DE DADOS
              </span>
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2">Integrações de Sistemas</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Chega de ferramentas desconectadas. Integramos Meta Ads, Google Ads, ERP, WhatsApp, Gateways de Pagamento e plataformas legadas sem atrito.
            </p>
            <div className="space-y-1.5 text-xs text-slate-400 font-mono-tech">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Webhooks e APIs bidirecionais</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Sincronização em tempo real</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Consistência total de dados</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-purple-950">
            <span className="text-[11px] font-mono-tech text-purple-200">Hub Integrador Central</span>
          </div>
        </div>

        {/* 5. Agentes Especializados */}
        <div className="p-7 rounded-2xl bg-[#0c0618] border border-purple-950 hover:border-purple-500/40 transition-all flex flex-col justify-between">
          <div>
            <div className="p-3 rounded-xl bg-[#140a28] border border-purple-900/60 text-purple-300 w-fit mb-4">
              <Bot className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono-tech text-purple-300 uppercase font-bold block mb-1">
              FORÇA DE TRABALHO DIGITAL
            </span>
            <h3 className="text-xl font-display font-bold text-white mb-2">Agentes Autônomos de IA</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Robôs inteligentes conectados ao S.P.Y CRM para tarefas críticas: triagem 24/7 de WhatsApp, suporte comercial e atualização automática de cards.
            </p>
            <div className="space-y-1.5 text-xs text-slate-400 font-mono-tech">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Triagem imediata 24 horas por dia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Agendamento na agenda dos vendedores</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Atualização de histórico e status no CRM</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-purple-950">
            <span className="text-[11px] font-mono-tech text-purple-200">Operação Ativa 24h</span>
          </div>
        </div>

        {/* 6. RevOps & Arquitetura */}
        <div className="p-7 rounded-2xl bg-[#0c0618] border border-purple-950 hover:border-purple-500/40 transition-all flex flex-col justify-between">
          <div>
            <div className="p-3 rounded-xl bg-[#140a28] border border-purple-900/60 text-purple-300 w-fit mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono-tech text-purple-300 uppercase font-bold block mb-1">
              GOVERNANÇA & REVOPS
            </span>
            <h3 className="text-xl font-display font-bold text-white mb-2">Arquitetura de Dados RevOps</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Conexão total entre geração de demanda e vendas. Dados íntegros, auditoria de funil e métricas de faturamento em tempo real.
            </p>
            <div className="space-y-1.5 text-xs text-slate-400 font-mono-tech">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Alinhamento rigoroso de SLAs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Visão de CAC, LTV e payback real</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Eliminação definitiva de gargalos</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-purple-950">
            <span className="text-[11px] font-mono-tech text-purple-200">Governança Integrada</span>
          </div>
        </div>
      </div>

      {/* Technology Infrastructure Philosophy Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#0d061c] border border-purple-900/50 shadow-2xl">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono-tech text-purple-300 uppercase font-semibold">
            ARQUITETURA SOB MEDIDA
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Infraestrutura Técnica que Acompanha a Sua Escala
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Não impomos softwares fechados que forçam sua equipe a se adaptar à ferramenta. Nós construímos a máquina ao redor do seu modelo de negócio, com segurança de dados, alta disponibilidade e governança rigorosa.
          </p>
          <div className="pt-4">
            <button
              onClick={onOpenDiagnostic}
              className="px-6 py-3.5 rounded-xl bg-white text-[#090412] hover:bg-purple-100 font-display font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/20"
            >
              Avaliar Minha Infraestrutura Atual
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
