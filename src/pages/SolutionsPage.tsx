import React from 'react';
import { PageType } from '../types';
import { PRODUCTS_ECOSYSTEM } from '../data/siteData';
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
  Terminal 
} from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (page: PageType) => void;
  onOpenDiagnostic: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate, onOpenDiagnostic }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return <Target className="w-5 h-5 text-purple-300" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-purple-300" />;
      case 'KanbanSquare': return <KanbanSquare className="w-5 h-5 text-purple-300" />;
      case 'Bot': return <Bot className="w-5 h-5 text-purple-300" />;
      case 'Eye': return <Eye className="w-5 h-5 text-purple-300" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-300" />;
      case 'Layers': return <Layers className="w-5 h-5 text-purple-300" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-purple-300" />;
      default: return <Zap className="w-5 h-5 text-purple-300" />;
    }
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono-tech tracking-wide mb-4">
          <Layers className="w-3.5 h-3.5 text-purple-400" />
          <span>O ECOSSISTEMA PLUPPEX</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          Soluções Integradas em Uma Única Máquina
        </h1>
        <p className="mt-4 text-base text-slate-300 leading-relaxed">
          A Pluppex não entrega ferramentas isoladas. Nossos produtos e serviços foram concebidos para operar em sincronia matemática: do primeiro anúncio até a receita líquida no balanço.
        </p>
      </div>

      {/* Solutions Detailed Grid */}
      <div className="space-y-12">
        {PRODUCTS_ECOSYSTEM.map((product) => (
          <div
            key={product.id}
            id={`product-detail-${product.id}`}
            className="p-8 sm:p-10 rounded-3xl bg-[#0c0618] border border-purple-950 hover:border-purple-500/40 transition-all shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Title, Code, Description & Quote */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#140b28] border border-purple-900/60">
                    {getIcon(product.icon)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tech uppercase font-bold text-white px-2 py-0.5 rounded bg-purple-900 border border-purple-700">
                      {product.code}
                    </span>
                    <span className="text-xs font-mono-tech text-purple-300 uppercase ml-2">
                      {product.category}
                    </span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  {product.title}
                </h2>

                <p className="text-sm font-semibold text-purple-300 font-display">
                  {product.tagline}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {product.description}
                </p>

                {/* Highlight Quote */}
                <div className="p-4 rounded-xl bg-[#120824] border-l-2 border-purple-400 text-xs italic text-purple-100">
                  "{product.quote}"
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      if (product.id === 'spy') onNavigate('spy');
                      else if (product.id === 'aurora') onNavigate('aurora');
                      else onOpenDiagnostic();
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#090412] hover:bg-purple-100 font-display font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-purple-500/20"
                  >
                    <span>{product.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-purple-700" />
                  </button>
                </div>
              </div>

              {/* Right Column: Capabilities & Deliverables */}
              <div className="lg:col-span-7 bg-[#080312] p-6 sm:p-8 rounded-2xl border border-purple-950">
                <h3 className="text-xs font-mono-tech uppercase text-slate-400 font-bold mb-4 tracking-wider">
                  Módulos de Execução & Entregáveis:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feat, fIdx) => (
                    <div key={fIdx} className="p-3 rounded-lg bg-[#110724] border border-purple-950 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-normal">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* S.P.Y CRM specific callout */}
                {product.id === 'spy' && (
                  <div className="mt-6 pt-6 border-t border-purple-950">
                    <span className="text-[11px] font-mono-tech text-purple-300 font-bold uppercase block mb-3">
                      Recursos Centrais do S.P.Y — O CRM da Pluppex:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono-tech">
                      <div className="p-2.5 rounded bg-[#130926] border border-purple-950 text-slate-300">
                        <strong className="text-white block">Pipeline Visual</strong> Gestão de Etapas
                      </div>
                      <div className="p-2.5 rounded bg-[#130926] border border-purple-950 text-slate-300">
                        <strong className="text-white block">IA Aurora Nativa</strong> Cérebro Integrado
                      </div>
                      <div className="p-2.5 rounded bg-[#130926] border border-purple-950 text-slate-300">
                        <strong className="text-white block">WhatsApp Conectado</strong> Histórico 100% Salvo
                      </div>
                      <div className="p-2.5 rounded bg-[#130926] border border-purple-950 text-slate-300">
                        <strong className="text-white block">Distribuição & SLA</strong> Round Robin Automático
                      </div>
                      <div className="p-2.5 rounded bg-[#130926] border border-purple-950 text-slate-300">
                        <strong className="text-white block">Auditoria Ativa</strong> Alerta de Leads Frios
                      </div>
                      <div className="p-2.5 rounded bg-[#130926] border border-purple-950 text-slate-300">
                        <strong className="text-purple-300 block">Prevenção de Fuga</strong> Follow-up Blindado
                      </div>
                    </div>
                  </div>
                )}

                {/* Aurora IA specific callout */}
                {product.id === 'aurora' && (
                  <div className="mt-6 pt-6 border-t border-purple-950">
                    <span className="text-[11px] font-mono-tech text-purple-300 font-bold uppercase block mb-3">
                      Atuação da Aurora — A IA do S.P.Y e da Pluppex:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono-tech">
                      <div className="p-2.5 rounded bg-[#130926] border border-purple-950 text-slate-300">
                        <strong className="text-white block">SDR IA no S.P.Y</strong> Resposta em &lt; 1 min
                      </div>
                      <div className="p-2.5 rounded bg-[#130926] border border-purple-950 text-slate-300">
                        <strong className="text-white block">Score de Intenção</strong> Detecção Algorítmica
                      </div>
                      <div className="p-2.5 rounded bg-[#130926] border border-purple-950 text-slate-300">
                        <strong className="text-white block">Follow-up Autônomo</strong> Resgate de Orçamentos
                      </div>
                      <div className="p-2.5 rounded bg-[#130926] border border-purple-950 text-slate-300">
                        <strong className="text-white block">Mídia + Vendas</strong> Correlação Real no Caixa
                      </div>
                      <div className="p-2.5 rounded bg-[#130926] border border-purple-950 text-slate-300">
                        <strong className="text-white block">Copiloto da Liderança</strong> Decisões Estratégicas
                      </div>
                      <div className="p-2.5 rounded bg-[#130926] border border-purple-950 text-slate-300">
                        <strong className="text-purple-300 block">Operação 24/7</strong> Sem Folgas ou Pausas
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#0d061c] border border-purple-900/50 text-center shadow-xl">
        <h3 className="text-2xl font-display font-bold text-white uppercase">
          Quer entender como essas soluções se conectam na sua operação?
        </h3>
        <p className="text-sm text-slate-300 mt-2 max-w-xl mx-auto">
          Fazemos um diagnóstico técnico e comercial sem compromisso para apontar quais engrenagens precisam ser ativadas primeiro.
        </p>
        <button
          onClick={onOpenDiagnostic}
          className="mt-6 px-6 py-3.5 rounded-xl bg-white text-[#090412] font-display font-bold text-xs uppercase tracking-wider hover:bg-purple-100 transition-all shadow-lg shadow-purple-500/20"
        >
          Diagnosticar Minha Operação
        </button>
      </div>
    </div>
  );
};
