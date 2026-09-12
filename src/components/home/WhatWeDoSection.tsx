import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from './Container';
import { HOME_PILLARS } from '../../data/homeContent';

export const WhatWeDoSection: React.FC = () => {
  return (
    <section id="o-que-fazemos" className="py-20 md:py-28 border-t border-white/10">
      <Container>
        <div className="max-w-2xl mb-14">
          <h2 className="text-white">Construímos e operamos sua máquina de receita.</h2>
          <p className="mt-4 text-white/60" style={{ fontSize: 'var(--text-body)' }}>
            Uma operação conectada para gerar oportunidades, transformar oportunidades em vendas e crescer.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-stretch gap-0">
          {HOME_PILLARS.map((pillar, idx) => (
            <React.Fragment key={pillar.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex-1 py-6 md:px-6 first:pl-0 last:pr-0"
              >
                <span className="text-xs font-mono-tech text-white/30">{pillar.number}</span>
                <h3 className="text-white mt-2">{pillar.label}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed max-w-xs">
                  {pillar.description}
                </p>
              </motion.div>
              {idx < HOME_PILLARS.length - 1 && (
                <div className="hidden md:flex items-center px-2 text-[#18BFFF]/60">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
};
