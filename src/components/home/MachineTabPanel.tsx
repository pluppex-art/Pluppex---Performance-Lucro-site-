import React from 'react';
import { MachineTab } from '../../types';

interface MachineTabPanelProps {
  tab: MachineTab;
}

export const MachineTabPanel: React.FC<MachineTabPanelProps> = ({ tab }) => {
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

      <p className="mt-8 text-white/50 text-sm border-t border-white/10 pt-5">
        {tab.resultLine}
      </p>
    </div>
  );
};
