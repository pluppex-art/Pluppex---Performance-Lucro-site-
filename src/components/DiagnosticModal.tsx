import React, { useState } from 'react';
import { DiagnosticFormData } from '../types';
import { PluppexLogo } from './PluppexLogo';
import {
  X,
  CheckCircle2,
  ArrowRight,
  Cpu,
  MessageSquare,
} from 'lucide-react';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProblems?: string[];
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({
  isOpen,
  onClose,
  initialProblems = []
}) => {
  const [formData, setFormData] = useState<DiagnosticFormData>({
    name: '',
    company: '',
    whatsapp: '',
    email: '',
    segment: '',
    city: '',
    revenueRange: 'R$ 50k a R$ 150k / mês',
    salesRepsCount: '2 a 5 vendedores',
    marketingInvestment: 'R$ 5k a R$ 15k / mês',
    mainChallenge: '',
    mainGoal: 'Previsibilidade e Escala de Vendas',
    biggestLeak: 'Follow-up',
    selectedProblems: initialProblems
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (!isOpen) return null;

  const leakOptions = [
    'Geração de demanda',
    'Leads',
    'Atendimento',
    'Qualificação',
    'Follow-up',
    'Vendas',
    'CRM',
    'Gestão',
    'Tecnologia',
    'Outro'
  ];

  const revenueOptions = [
    'Até R$ 50k / mês',
    'R$ 50k a R$ 150k / mês',
    'R$ 150k a R$ 500k / mês',
    'R$ 500k a R$ 1M / mês',
    'Acima de R$ 1M / mês'
  ];

  const salesRepsOptions = [
    'Apenas os sócios / 1 vendedor',
    '2 a 5 vendedores',
    '6 a 15 vendedores',
    'Mais de 15 vendedores'
  ];

  const marketingOptions = [
    'Ainda não investimos formalmente',
    'Até R$ 5k / mês',
    'R$ 5k a R$ 15k / mês',
    'R$ 15k a R$ 50k / mês',
    'Acima de R$ 50k / mês'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track event for analytics
    console.log('[Pluppex Analytics] Event: Lead_Diagnostic_Submitted', formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      `*DIAGNÓSTICO COMERCIAL — PLUPPEX*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Empresa:* ${formData.company}\n` +
      `*Segmento:* ${formData.segment || 'Não informado'} - ${formData.city || 'Brasil'}\n` +
      `*Faturamento:* ${formData.revenueRange}\n` +
      `*Vendedores:* ${formData.salesRepsCount}\n` +
      `*Investimento Mídia:* ${formData.marketingInvestment}\n` +
      `*Maior Vazamento de Oportunidades:* ${formData.biggestLeak}\n` +
      `*Objetivo:* ${formData.mainGoal}\n` +
      `*Desafio Principal:* ${formData.mainChallenge || 'Construir máquina de receita previsível'}\n\n` +
      `_Quero diagnosticar a operação da minha empresa com a Pluppex._`
    );

    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div
        id="diagnostic-modal-card"
        className="relative w-full max-w-3xl bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center p-1 rounded-lg bg-white/5 border border-white/10">
              <PluppexLogo variant="icon" className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">
                Diagnóstico de Máquina de Receita
              </h3>
              <p className="text-[11px] font-mono-tech text-[#A855F7]">
                Identifique onde sua empresa está perdendo vendas
              </p>
            </div>
          </div>

          <button
            id="btn-close-diagnostic-modal"
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70">
                <span className="font-bold text-[#A855F7] block mb-1">
                  Onde sua empresa está perdendo receita?
                </span>
                Talvez o problema não seja falta de clientes. Talvez seja a forma como sua empresa gera, acompanha e converte oportunidades.
              </div>

              {/* Personal & Business Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tech uppercase text-white/50 mb-1.5">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:border-[#A855F7] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-white/50 mb-1.5">
                    Nome da Empresa *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sua empresa"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:border-[#A855F7] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-white/50 mb-1.5">
                    WhatsApp (com DDD) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:border-[#A855F7] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-white/50 mb-1.5">
                    E-mail Corporativo *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seu@empresa.com.br"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:border-[#A855F7] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-white/50 mb-1.5">
                    Segmento de Atuação
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: SaaS B2B, Indústria, Serviços, etc."
                    value={formData.segment}
                    onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:border-[#A855F7] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-white/50 mb-1.5">
                    Cidade / Estado
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: São Paulo / SP"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:border-[#A855F7] focus:outline-none"
                  />
                </div>
              </div>

              {/* Operational Sizing */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-mono-tech uppercase text-white/50 mb-1.5">
                    Faturamento Mensal Médio
                  </label>
                  <select
                    value={formData.revenueRange}
                    onChange={(e) => setFormData({ ...formData, revenueRange: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:border-[#A855F7] focus:outline-none"
                  >
                    {revenueOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-white/50 mb-1.5">
                    Número de Vendedores
                  </label>
                  <select
                    value={formData.salesRepsCount}
                    onChange={(e) => setFormData({ ...formData, salesRepsCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:border-[#A855F7] focus:outline-none"
                  >
                    {salesRepsOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-white/50 mb-1.5">
                    Investimento Atual em Marketing
                  </label>
                  <select
                    value={formData.marketingInvestment}
                    onChange={(e) => setFormData({ ...formData, marketingInvestment: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:border-[#A855F7] focus:outline-none"
                  >
                    {marketingOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* MAIN QUESTION: Onde você acredita que sua empresa mais perde oportunidades hoje? */}
              <div className="pt-2">
                <label className="block text-sm font-bold text-white mb-2">
                  Onde você acredita que sua empresa mais perde oportunidades hoje? *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {leakOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, biggestLeak: opt })}
                      className={`p-2.5 rounded-lg text-xs font-mono-tech transition-all border text-center ${
                        formData.biggestLeak === opt
                          ? 'bg-[#A855F7] border-[#A855F7] text-white font-bold'
                          : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/30'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Challenge & Goal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tech uppercase text-white/50 mb-1.5">
                    Principal Desafio Atual
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Vendedores esquecem follow-up, leads caros..."
                    value={formData.mainChallenge}
                    onChange={(e) => setFormData({ ...formData, mainChallenge: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:border-[#A855F7] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-white/50 mb-1.5">
                    Principal Objetivo para os Próximos 6 Meses
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Dobrar receita com previsibilidade sem inchar equipe"
                    value={formData.mainGoal}
                    onChange={(e) => setFormData({ ...formData, mainGoal: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:border-[#A855F7] focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="btn-submit-revenue-machine"
                  className="w-full py-4 rounded-xl bg-[#A855F7] text-white hover:bg-[#C084FC] font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Cpu className="w-4 h-4" />
                  <span>{isSubmitting ? 'Processando Diagnóstico...' : 'ENVIAR DIAGNÓSTICO'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            /* Success State with Instant Assessment Output */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#A855F7]/15 border border-[#A855F7]/40 text-[#A855F7] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono-tech text-[#A855F7] uppercase font-semibold">
                  Diagnóstico Preliminar Gerado
                </span>
                <h4 className="text-2xl font-bold text-white mt-1">
                  Máquina de Receita Mapeada para a {formData.company || 'Sua Empresa'}
                </h4>
                <p className="text-sm text-white/70 mt-2 max-w-lg mx-auto leading-relaxed">
                  Identificamos que o principal ponto de fuga da sua operação está em <strong>{formData.biggestLeak}</strong>. A Pluppex constrói a estrutura para estancar essa perda e dar previsibilidade ao seu crescimento.
                </p>
              </div>

              {/* Summary Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto text-left font-mono-tech text-xs">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-white/50 block text-[10px] uppercase">Gargalo Crítico</span>
                  <span className="text-white font-bold">{formData.biggestLeak}</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-white/50 block text-[10px] uppercase">Time Atual</span>
                  <span className="text-white font-bold">{formData.salesRepsCount}</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-white/50 block text-[10px] uppercase">Próximo Passo</span>
                  <span className="text-[#A855F7] font-bold">Conversa com a Pluppex</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  id="btn-whatsapp-diagnostic-send"
                  onClick={handleOpenWhatsApp}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#A855F7] hover:bg-[#C084FC] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Continuar no WhatsApp</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 text-xs font-mono-tech uppercase transition-colors border border-white/10"
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
