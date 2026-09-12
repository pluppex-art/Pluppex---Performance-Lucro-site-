import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from './Container';
import { PluppexLogo } from '../PluppexLogo';
import { HERO_EYEBROW, HERO_HEADLINE_LINES, HERO_BODY, HERO_MICROCOPY, CTA_LABEL } from '../../data/homeContent';

interface HeroSectionProps {
  onOpenDiagnostic: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDiagnostic }) => {
  return (
    <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="pointer-events-none absolute -top-6 right-4 sm:right-10 md:right-16"
      >
        <PluppexLogo variant="icon" size="xl" className="opacity-60" />
      </motion.div>

      <Container className="relative">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow text-[#A855F7] block mb-6"
          >
            {HERO_EYEBROW}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white"
          >
            {HERO_HEADLINE_LINES.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-[#F5F5F5]/70 max-w-xl"
            style={{ fontSize: 'var(--text-body)' }}
          >
            {HERO_BODY}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10"
          >
            <button
              id="hero-cta-diagnostic"
              onClick={onOpenDiagnostic}
              className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#A855F7] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#C084FC] transition-colors"
            >
              <span>{CTA_LABEL}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-3 text-xs text-white/40">{HERO_MICROCOPY}</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
