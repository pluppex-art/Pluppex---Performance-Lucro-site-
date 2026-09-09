import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Activity, TrendingUp, Users, Cpu, ShieldCheck, Zap } from 'lucide-react';

interface MetricItem {
  id: string;
  label: string;
  sublabel: string;
  target: number;
  prefix?: string;
  suffix?: string;
  formatType?: 'integer' | 'compact' | 'currency';
  icon: React.ElementType;
}

const METRICS: MetricItem[] = [
  {
    id: 'projects',
    label: 'Projetos de Máquina Implementados',
    sublabel: 'Empresas B2B, indústrias e serviços escalados',
    target: 164,
    suffix: '+',
    formatType: 'integer',
    icon: ShieldCheck,
  },
  {
    id: 'leads',
    label: 'Leads Qualificados Gerados',
    sublabel: 'Filtrados rigorosamente por ICP e intenção',
    target: 840000,
    prefix: '+',
    suffix: '',
    formatType: 'compact',
    icon: Users,
  },
  {
    id: 'ai-hours',
    label: 'Horas de Automação IA',
    sublabel: 'Tempo humano braçal poupado via Aurora & S.P.Y',
    target: 48500,
    suffix: 'h+',
    formatType: 'integer',
    icon: Cpu,
  },
  {
    id: 'pipeline',
    label: 'Receita Monitorada em Pipeline',
    sublabel: 'Volume financeiro transacionado e auditado',
    target: 142,
    prefix: 'R$ ',
    suffix: 'M+',
    formatType: 'integer',
    icon: TrendingUp,
  },
];

// Counting Number Component that animates smoothly when in view
const CounterNumber: React.FC<{
  target: number;
  prefix?: string;
  suffix?: string;
  formatType?: 'integer' | 'compact' | 'currency';
  inView: boolean;
  delay?: number;
}> = ({ target, prefix = '', suffix = '', formatType = 'integer', inView, delay = 0 }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const timeout = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // EaseOutExpo curve
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeOut * target));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };

      window.requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [inView, target, delay]);

  const formatValue = (num: number) => {
    if (formatType === 'compact') {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace('.', ',') + 'M';
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(0) + ' mil';
      }
    }
    return num.toLocaleString('pt-BR');
  };

  return (
    <span className="font-mono-tech tabular-nums font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
      <span className="text-purple-400 font-normal mr-0.5">{prefix}</span>
      {formatValue(count)}
      <span className="text-purple-300 font-bold ml-0.5 text-2xl sm:text-3xl">{suffix}</span>
    </span>
  );
};

export const StatsCounterBar: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section 
      id="stats-counter-bar" 
      ref={ref}
      className="relative z-20 -mt-6 sm:-mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="rounded-3xl bg-[#0a0516]/95 border border-purple-800/40 p-6 sm:p-8 lg:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl relative overflow-hidden"
      >
        {/* Ambient background glows */}
        <div className="absolute top-0 right-1/4 w-80 h-32 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-32 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-purple-900/40">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-500/40 text-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
              <Activity className="w-4 h-4 text-purple-300" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping opacity-75" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-purple-400" />
            </div>
            <div>
              <span className="text-[11px] font-mono-tech tracking-widest uppercase font-bold text-white block">
                TELEMETRIA & PROVA SOCIAL
              </span>
              <p className="text-xs text-slate-400 font-sans">
                Impacto acumulado nas operações com arquitetura Pluppex ativa
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-[11px] font-mono-tech tracking-wide self-start sm:self-auto">
            <Zap className="w-3 h-3 text-purple-400" />
            <span>ATUALIZAÇÃO EM TEMPO REAL</span>
          </div>
        </div>

        {/* 4 Stats Grid with Staggered Fade-in */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {METRICS.map((metric, idx) => {
            const Icon = metric.icon;

            return (
              <motion.div
                key={metric.id}
                id={`stat-card-${metric.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="p-5 rounded-2xl bg-[#0e0720]/80 border border-purple-950/80 hover:border-purple-500/40 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="p-2 rounded-xl bg-[#160b2e] border border-purple-900/60 text-purple-300 group-hover:text-white group-hover:border-purple-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono-tech text-slate-300 uppercase">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="my-1">
                    <CounterNumber
                      target={metric.target}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                      formatType={metric.formatType}
                      inView={isInView}
                      delay={0.15 + idx * 0.1}
                    />
                  </div>

                  <h3 className="text-sm font-display font-bold text-white group-hover:text-purple-200 transition-colors mt-2">
                    {metric.label}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {metric.sublabel}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
