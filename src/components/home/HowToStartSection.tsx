import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { HOW_TO_START_EYEBROW, HOW_TO_START_HEADLINE, HOW_TO_START_STEPS } from '../../data/homeContent';

export const HowToStartSection: React.FC = () => {
  return (
    <section id="como-comecar" className="py-20 md:py-28 border-t border-white/10">
      <Container>
        <div className="max-w-2xl mb-14">
          <span className="eyebrow text-[#A855F7] block mb-4">{HOW_TO_START_EYEBROW}</span>
          <h2 className="text-white">{HOW_TO_START_HEADLINE}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_TO_START_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <span className="text-3xl font-extrabold text-white/15 block mb-3">{step.number}</span>
              <h3 className="text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
