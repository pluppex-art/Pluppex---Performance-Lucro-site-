import React, { useState, useEffect } from 'react';
import { MACHINE_STAGES } from '../data/siteData';
import { MachineStage } from '../types';
import { 
  Play, 
  RotateCcw, 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  Zap,
  Flame
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MachineVisualizerProps {
  onSelectDiagnostic: () => void;
}

export const MachineVisualizer: React.FC<MachineVisualizerProps> = ({ onSelectDiagnostic }) => {
  const [activeStageId, setActiveStageId] = useState<string>('demanda');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationIndex, setSimulationIndex] = useState<number>(0);

  const activeStage = MACHINE_STAGES.find((s) => s.id === activeStageId) || MACHINE_STAGES[0];

  // Simulation runner
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSimulating) {
      timer = setInterval(() => {
        setSimulationIndex((prev) => {
          const next = prev + 1;
          if (next < MACHINE_STAGES.length) {
            setActiveStageId(MACHINE_STAGES[next].id);
            return next;
          } else {
            setIsSimulating(false);
            return 0;
          }
        });
      }, 1200);
    }
    return () => clearInterval(timer);
  }, [isSimulating]);

  const handleStartSimulation = () => {
    setSimulationIndex(0);
    setActiveStageId(MACHINE_STAGES[0].id);
    setIsSimulating(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full bg-[#090d16] border border-slate-800/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header section */}
      <motion.div 
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-purple-900/40 pb-6 relative z-10"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono-tech tracking-wide mb-3">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            <span>SISTEMA INTEGRADO DE ENGENHARIA DE RECEITA</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            A Máquina em Funcionamento Contínuo
          </h3>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Clique em cada etapa ou execute a simulação operacional para entender como a Pluppex transforma demanda bruta em receita líquida previsível.
          </p>
        </div>

        {/* Simulation Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            id="btn-simulate-machine-cycle"
            onClick={handleStartSimulation}
            disabled={isSimulating}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold font-mono-tech uppercase transition-all ${
              isSimulating
                ? 'bg-purple-950 text-purple-200 border border-purple-400 animate-pulse cursor-wait'
                : 'bg-[#140b28] hover:bg-purple-950 text-white border border-purple-900/60 hover:border-purple-400 shadow-sm'
            }`}
          >
            <Play className={`w-3.5 h-3.5 ${isSimulating ? 'text-purple-300 fill-purple-300' : 'text-purple-400'}`} />
            <span>{isSimulating ? `Ciclo Ativo [0${simulationIndex + 1}/08]` : 'Simular Ciclo'}</span>
          </button>
        </div>
      </motion.div>

      {/* Central Architecture representation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 items-stretch">
        {/* Left / Top: 8 Stage Flow Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {MACHINE_STAGES.map((stage, idx) => {
            const isSelected = stage.id === activeStageId;
            const isPassedInSimulation = isSimulating && idx <= simulationIndex;

            return (
              <motion.div
                key={stage.id}
                id={`machine-stage-card-${stage.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -2, transition: { duration: 0.15 } }}
                onClick={() => {
                  if (!isSimulating) {
                    setActiveStageId(stage.id);
                  }
                }}
                className={`group relative p-4 rounded-xl cursor-pointer transition-all duration-300 border text-left ${
                  isSelected
                    ? 'bg-[#160b2e] border-purple-400/80 shadow-[0_0_20px_rgba(168,85,247,0.25)] ring-1 ring-purple-400/50'
                    : isPassedInSimulation
                    ? 'bg-[#140b28] border-purple-500/50'
                    : 'bg-[#0e071e]/70 border-purple-950/60 hover:bg-[#150a2d]/60 hover:border-purple-800'
                }`}
              >
                {/* Stage Number & Badge */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono-tech text-xs font-bold px-2 py-0.5 rounded ${
                    isSelected 
                      ? 'bg-white text-[#090412]' 
                      : 'bg-[#1a0f33] text-purple-300 group-hover:text-white'
                  }`}>
                    {stage.number}
                  </span>
                  <span className="text-[10px] font-mono-tech text-slate-400">
                    {stage.metricLabel}: <strong className="text-slate-200">{stage.metricValue}</strong>
                  </span>
                </div>

                {/* Stage Name */}
                <h4 className={`text-base font-display font-bold transition-colors ${
                  isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                }`}>
                  {stage.name}
                </h4>

                {/* Stage Components */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {stage.components.map((comp, cIdx) => (
                    <span 
                      key={cIdx} 
                      className={`text-[10px] px-2 py-0.5 rounded-full font-mono-tech border ${
                        isSelected 
                          ? 'bg-purple-950/80 text-purple-200 border-purple-600/60' 
                          : 'bg-[#120924] text-slate-400 border-purple-950'
                      }`}
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right / Bottom: Deep Dive on Selected Stage & The Central "RECEITA" Core */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Central Reactor: RECEITA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-xl bg-gradient-to-b from-[#160a2e] to-[#0d061c] border border-purple-500/30 relative overflow-hidden shadow-xl text-center"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/15 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-violet-500/15 rounded-full blur-2xl" />

            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              <span className="text-[11px] font-mono-tech tracking-wider uppercase text-purple-300 font-semibold">
                NÚCLEO DO SISTEMA
              </span>
            </div>

            <div className="my-2">
              <h4 className="text-4xl sm:text-5xl font-display font-black tracking-wider text-white">
                RECEITA
              </h4>
              <p className="text-xs font-mono-tech text-purple-300 mt-1 uppercase tracking-wider">
                Previsibilidade • Margem • Escala
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-purple-900/40 text-left font-mono-tech">
              <div className="p-2 rounded bg-[#0e071e] border border-purple-950">
                <span className="text-[9px] text-slate-400 uppercase block">Gargalos</span>
                <span className="text-xs text-purple-300 font-bold">Identificados</span>
              </div>
              <div className="p-2 rounded bg-[#0e071e] border border-purple-950">
                <span className="text-[9px] text-slate-400 uppercase block">Follow-up</span>
                <span className="text-xs text-white font-bold">Automatizado</span>
              </div>
              <div className="p-2 rounded bg-[#0e071e] border border-purple-950">
                <span className="text-[9px] text-slate-400 uppercase block">Conversão</span>
                <span className="text-xs text-purple-300 font-bold">Auditada</span>
              </div>
            </div>
          </motion.div>

          {/* Detailed Stage Breakdown Card with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeStage.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="flex-1 p-6 rounded-xl bg-[#0c0618] border border-purple-900/40 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between border-b border-purple-900/40 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono-tech text-xs font-bold text-white px-2 py-0.5 rounded bg-purple-700 border border-purple-500">
                      ETAPA {activeStage.number}
                    </span>
                    <h5 className="font-display font-bold text-lg text-white">
                      {activeStage.name}
                    </h5>
                  </div>
                  <span className="text-xs font-mono-tech text-purple-300">
                    {activeStage.metricLabel}: {activeStage.metricValue}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {activeStage.description}
                </p>

                <div className="space-y-2">
                  <span className="text-[11px] font-mono-tech uppercase text-purple-300 block font-semibold">
                    Módulos e Competências Integradas:
                  </span>
                  <div className="space-y-1.5">
                    {activeStage.components.map((comp, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-purple-900/40">
                <button
                  id={`btn-diagnose-stage-${activeStage.id}`}
                  onClick={onSelectDiagnostic}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white text-[#090412] hover:bg-purple-100 transition-all text-xs font-mono-tech font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                >
                  <span>Diagnosticar {activeStage.name} na Minha Empresa</span>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-700" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Process flow strip */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 pt-6 border-t border-purple-900/40 flex items-center justify-center text-center"
      >
        <p className="text-xs font-mono-tech tracking-wider text-slate-400">
          <span className="text-purple-400 font-semibold">GERAR OPORTUNIDADES</span> → CONVERTER OPORTUNIDADES → GERAR CLIENTES → GERAR VENDAS → <span className="text-white font-bold">GERAR RECEITA</span> → OTIMIZAR → ESCALAR
        </p>
      </motion.div>
    </motion.div>
  );
};
