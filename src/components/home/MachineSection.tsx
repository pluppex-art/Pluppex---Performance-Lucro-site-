import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Container } from './Container';
import { MachineTabPanel } from './MachineTabPanel';
import { SpyPanel } from './SpyPanel';
import { AuroraPanel } from './AuroraPanel';
import { MachineTabId } from '../../types';
import { MACHINE_EYEBROW, MACHINE_HEADLINE, MACHINE_SUBHEADLINE, MACHINE_TABS } from '../../data/homeContent';

export const MachineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MachineTabId>('aquisicao');
  const activeIndex = MACHINE_TABS.findIndex((t) => t.id === activeTab);

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'ArrowRight') {
      const next = MACHINE_TABS[(idx + 1) % MACHINE_TABS.length];
      setActiveTab(next.id);
      document.getElementById(`machine-tab-${next.id}`)?.focus();
    } else if (e.key === 'ArrowLeft') {
      const prev = MACHINE_TABS[(idx - 1 + MACHINE_TABS.length) % MACHINE_TABS.length];
      setActiveTab(prev.id);
      document.getElementById(`machine-tab-${prev.id}`)?.focus();
    }
  };

  const activeTabData = MACHINE_TABS[activeIndex];

  return (
    <section id="maquina" className="py-20 md:py-28 border-t border-white/10">
      <Container>
        <div className="max-w-2xl mb-14">
          <span className="eyebrow text-[#A855F7] block mb-4">{MACHINE_EYEBROW}</span>
          <h2 className="text-white">{MACHINE_HEADLINE}</h2>
          <p className="mt-4 text-white/60" style={{ fontSize: 'var(--text-body)' }}>
            {MACHINE_SUBHEADLINE}
          </p>
        </div>

        {/* Tab stepper with animated flow line */}
        <div
          role="tablist"
          aria-label="Etapas da máquina de receita"
          className="relative flex items-stretch mb-2 overflow-x-auto pr-16 sm:pr-0"
        >
          {MACHINE_TABS.map((tab, idx) => (
            <button
              key={tab.id}
              id={`machine-tab-${tab.id}`}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`machine-panel-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className="relative flex-1 min-w-[130px] text-left pb-4 pr-4 group"
            >
              <span className={`block text-xs sm:text-sm font-bold uppercase tracking-wide transition-colors ${
                activeTab === tab.id ? 'text-white' : 'text-white/35 group-hover:text-white/60'
              }`}>
                {tab.label}
              </span>
              <span className={`mt-3 block h-[2px] w-full transition-colors ${
                activeTab === tab.id ? 'bg-[#A855F7]' : 'bg-white/10'
              } ${activeTab === tab.id ? 'flow-line' : ''}`} />
            </button>
          ))}
        </div>

        <div className="mt-10 min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTabData.id}
              id={`machine-panel-${activeTabData.id}`}
              role="tabpanel"
              aria-labelledby={`machine-tab-${activeTabData.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {activeTabData.id === 'spy' && <SpyPanel tab={activeTabData} />}
              {activeTabData.id === 'aurora' && <AuroraPanel tab={activeTabData} />}
              {(activeTabData.id === 'aquisicao' || activeTabData.id === 'operacao') && (
                <MachineTabPanel tab={activeTabData} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};
