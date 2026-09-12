import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from './Container';
import { FINAL_CTA_HEADLINE, FINAL_CTA_BODY, CTA_LABEL } from '../../data/homeContent';

interface FinalCtaSectionProps {
  onOpenDiagnostic: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenDiagnostic }) => {
  return (
    <section id="cta-final" className="py-20 md:py-28 border-t border-white/10">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-white">{FINAL_CTA_HEADLINE}</h2>
          <p className="mt-4 text-white/60" style={{ fontSize: 'var(--text-body)' }}>
            {FINAL_CTA_BODY}
          </p>

          <button
            id="final-cta-diagnostic"
            onClick={onOpenDiagnostic}
            className="group mt-9 inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#18BFFF] text-black font-bold text-sm uppercase tracking-wider hover:bg-[#3fcaff] transition-colors"
          >
            <span>{CTA_LABEL}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </Container>
    </section>
  );
};
