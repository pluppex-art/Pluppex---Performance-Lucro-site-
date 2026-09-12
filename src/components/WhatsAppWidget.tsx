import React from 'react';
import { MessageSquare } from 'lucide-react';

interface WhatsAppWidgetProps {
  onOpenDiagnostic: () => void;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ onOpenDiagnostic }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        id="btn-floating-whatsapp"
        onClick={onOpenDiagnostic}
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-black border border-white/15 text-white hover:border-[#A855F7] transition-all"
        aria-label="Diagnosticar minha operação"
        title="Diagnosticar minha operação"
      >
        <MessageSquare className="w-5 h-5 group-hover:text-[#A855F7] transition-colors" />
      </button>
    </div>
  );
};
