import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { PROBLEM_EYEBROW, PROBLEM_HEADLINE, PROBLEM_SUBHEADLINE, PROBLEM_DISCONNECTS, PROBLEM_CLOSING_LINE } from '../../data/homeContent';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problema" className="py-20 md:py-28 border-t border-white/10">
      <Container>
        <div className="max-w-2xl mb-14">
          <span className="eyebrow text-[#A855F7] block mb-4">{PROBLEM_EYEBROW}</span>
          <h2 className="text-white">{PROBLEM_HEADLINE}</h2>
          <p className="mt-2 text-white/60" style={{ fontSize: 'var(--text-h3)', fontWeight: 700 }}>
            {PROBLEM_SUBHEADLINE}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-16">
          {PROBLEM_DISCONNECTS.map((item, idx) => (
            <motion.p
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="text-white/70 border-l-2 border-white/15 pl-5"
              style={{ fontSize: 'var(--text-body)' }}
            >
              {item.statement}
            </motion.p>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#A855F7]"
        >
          {PROBLEM_CLOSING_LINE}
        </motion.h2>
      </Container>
    </section>
  );
};
