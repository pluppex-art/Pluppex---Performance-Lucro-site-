import React from 'react';
import { motion } from 'framer-motion';
import { Radio } from 'lucide-react';
import { MachineTab } from '../../types';
import { AURORA_SIGNALS } from '../../data/homeContent';

interface AuroraPanelProps {
  tab: MachineTab;
}

export const AuroraPanel: React.FC<AuroraPanelProps> = ({ tab }) => {
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

      <div className="mt-8 max-w-md space-y-2">
        {AURORA_SIGNALS.map((signal, idx) => (
          <motion.div
            key={signal.id}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.12 }}
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#18BFFF] shrink-0" />
            <Radio className="w-3.5 h-3.5 text-white/30 shrink-0" />
            <span className="text-sm text-white/80">{signal.label}</span>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-white/50 text-sm border-t border-white/10 pt-5">
        {tab.resultLine}
      </p>
    </div>
  );
};
