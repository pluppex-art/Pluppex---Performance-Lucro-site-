import React from 'react';
import { motion } from 'framer-motion';
import { MachineTab } from '../../types';

interface SpyPanelProps {
  tab: MachineTab;
}

const KANBAN_COLUMNS = [
  { id: 'novo', label: 'Novo', cards: 3 },
  { id: 'conversa', label: 'Em conversa', cards: 2 },
  { id: 'fechado', label: 'Fechado', cards: 1 },
];

export const SpyPanel: React.FC<SpyPanelProps> = ({ tab }) => {
  return (
    <div>
      <span className="eyebrow text-[#18BFFF] block mb-3">{tab.eyebrow}</span>
      <h3 className="text-white max-w-lg">{tab.headline}</h3>

      <div className="mt-8 flex flex-wrap gap-2.5">
        {tab.items.map((item) => (
          <span
            key={item}
            className="px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-white/80 uppercase tracking-wide font-medium"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Schematic pipeline illustration — no real product screenshot exists, so this stays abstract */}
      <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
        {KANBAN_COLUMNS.map((col, colIdx) => (
          <div key={col.id} className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5 sm:p-3">
            <span className="text-[10px] font-mono-tech uppercase text-white/40 block mb-2">
              {col.label}
            </span>
            <div className="space-y-1.5">
              {Array.from({ length: col.cards }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: colIdx * 0.1 + i * 0.06 }}
                  className={`h-6 sm:h-7 rounded-md ${
                    colIdx === 2 && i === 0 ? 'bg-[#18BFFF]/30 border border-[#18BFFF]/50' : 'bg-white/[0.06] border border-white/10'
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-white/50 text-sm border-t border-white/10 pt-5">
        {tab.resultLine}
      </p>
    </div>
  );
};
