import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { MODULAR_HEADLINE, MODULAR_SUBHEADLINE, MODULAR_COMPONENTS, MODULAR_CLOSING_LINE } from '../../data/homeContent';

export const ModularModelSection: React.FC = () => {
  return (
    <section id="modelo" className="py-20 md:py-28 border-t border-white/10">
      <Container>
        <div className="max-w-2xl mb-14">
          <h2 className="text-white">{MODULAR_HEADLINE}</h2>
          <p className="mt-4 text-white/60" style={{ fontSize: 'var(--text-body)' }}>
            {MODULAR_SUBHEADLINE}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 rounded-xl overflow-hidden">
          {MODULAR_COMPONENTS.map((comp, idx) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="bg-[#0d0d0d] p-5 flex flex-col justify-between min-h-[140px]"
            >
              <span className="text-sm font-bold text-white">{comp.name}</span>
              <span className="text-xs text-white/50 mt-3 leading-relaxed">{comp.description}</span>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-[#A855F7] font-bold uppercase tracking-wide text-sm sm:text-base">
          {MODULAR_CLOSING_LINE}
        </p>
      </Container>
    </section>
  );
};
