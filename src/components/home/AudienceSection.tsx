import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { AUDIENCE_HEADLINE, AUDIENCE_QUALIFIERS } from '../../data/homeContent';

export const AudienceSection: React.FC = () => {
  return (
    <section id="para-quem-e" className="py-20 md:py-28 border-t border-white/10">
      <Container>
        <div className="max-w-2xl mb-14">
          <h2 className="text-white">{AUDIENCE_HEADLINE}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AUDIENCE_QUALIFIERS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-xl border border-white/10 bg-white/[0.02]"
            >
              <span className="text-xs font-mono-tech text-white/30 block mb-3">0{idx + 1}</span>
              <p className="text-white/80 leading-relaxed" style={{ fontSize: 'var(--text-body)' }}>
                {item.statement}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
