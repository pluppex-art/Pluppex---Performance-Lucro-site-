import React, { useState } from 'react';
import { MessageSquare, X, ArrowRight, Sparkles } from 'lucide-react';

interface WhatsAppWidgetProps {
  onOpenDiagnostic: () => void;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ onOpenDiagnostic }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStartChat = (customMsg?: string) => {
    const defaultMsg = customMsg || 'Olá! Gostaria de conversar com os especialistas da Pluppex sobre como construir a máquina de receita da minha empresa.';
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(defaultMsg)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div 
          id="whatsapp-quick-popover"
          className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#0f0820] border border-purple-500/30 p-5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3"
        >
          <div className="flex items-center justify-between border-b border-purple-900/40 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
              <div>
                <h5 className="font-display font-bold text-sm text-white">Mesa de Operações Pluppex</h5>
                <p className="text-[10px] font-mono-tech text-purple-300">Resposta média: &lt; 5 minutos</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            Converse diretamente com nossa diretoria comercial e de tecnologia. Avaliamos a maturidade da sua operação sem burocracia.
          </p>

          <div className="space-y-2">
            <button
              onClick={() => handleStartChat('Olá! Gostaria de fazer o diagnóstico da máquina de receita da minha empresa.')}
              className="w-full text-left p-2.5 rounded-lg bg-[#180d30] hover:bg-purple-950/60 border border-purple-900/40 text-xs text-slate-200 hover:text-white transition-colors flex items-center justify-between group"
            >
              <span>Diagnosticar minha operação</span>
              <ArrowRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => handleStartChat('Olá! Gostaria de entender mais sobre o SPY e os Agentes de IA da Pluppex.')}
              className="w-full text-left p-2.5 rounded-lg bg-[#180d30] hover:bg-purple-950/60 border border-purple-900/40 text-xs text-slate-200 hover:text-white transition-colors flex items-center justify-between group"
            >
              <span>Conhecer o SPY e Agentes de IA</span>
              <ArrowRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenDiagnostic();
              }}
              className="w-full py-2.5 rounded-lg bg-white text-[#090412] hover:bg-purple-50 font-display font-bold text-xs uppercase tracking-wider text-center mt-2 shadow-md shadow-purple-500/20"
            >
              Preencher Diagnóstico Completo
            </button>
          </div>
        </div>
      )}

      <button
        id="btn-floating-whatsapp"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-display font-bold text-xs shadow-xl shadow-purple-950/40 border border-purple-400/40 transition-all hover:scale-105 active:scale-95"
        aria-label="Abrir WhatsApp Pluppex"
      >
        <MessageSquare className="w-4 h-4 fill-white" />
        <span className="hidden sm:inline font-mono-tech tracking-wide uppercase">Falar com Especialista</span>
        <span className="w-2 h-2 rounded-full bg-white animate-ping" />
      </button>
    </div>
  );
};
