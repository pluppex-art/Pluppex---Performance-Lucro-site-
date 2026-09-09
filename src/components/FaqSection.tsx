import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqItem {
  id: string;
  question: string;
  category: string;
  answer: string;
  bullets?: string[];
}

interface FaqSectionProps {
  onOpenDiagnostic: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenDiagnostic }) => {
  const [openId, setOpenId] = useState<string | null>('diff-agency');

  const faqs: FaqItem[] = [
    {
      id: 'diff-agency',
      category: 'DIFERENCIAÇÃO',
      question: 'O que distingue a Pluppex de uma agência tradicional de marketing?',
      answer: 'Agências tradicionais operam com foco em entregáveis isolados: quantidade de posts, cliques baratos ou listas de leads frios, abandonando o cliente na hora mais crítica — o fechamento e a receita no caixa. A Pluppex não é uma agência de publicidade. Nós somos arquitetos e operadores de máquinas de receita completas.',
      bullets: [
        'Agência tradicional: cobra mensalidade fixa e entrega relatórios de métricas de vaidade (cliques, impressões).',
        'Pluppex: conecta tráfego de alta intenção, infraestrutura técnica, CRM S.P.Y e IA Aurora direto no seu caixa, alinhando interesses com foco em lucro real.'
      ]
    },
    {
      id: 'spy-crm-integration',
      category: 'INTEGRAÇÃO & CRM',
      question: 'Como a ferramenta S.P.Y se integra ao meu CRM atual?',
      answer: 'O S.P.Y foi arquitetado com dupla função: ele pode atuar como o CRM central e definitivo da sua operação ou operar em perfeita sintonia como uma camada de alta velocidade sobre o seu CRM e ERP legados (como Salesforce, HubSpot, Pipedrive ou RD Station).',
      bullets: [
        'Operação Autônoma: se você não possui CRM ou quer aposentar sistemas complexos, o S.P.Y assume 100% da rotina com pipelines e SLAs automáticos.',
        'Integração Híbrida: se você já possui outro sistema, o S.P.Y opera a linha de frente rápida (captura de WhatsApp, triagem IA pela Aurora e follow-ups) e sincroniza automaticamente os negócios fechados via API e webhooks.'
      ]
    },
    {
      id: 'aurora-subscription',
      category: 'INTELIGÊNCIA ARTIFICIAL',
      question: 'A camada de inteligência artificial Aurora está inclusa no contrato principal?',
      answer: 'Sim. A Aurora é a inteligência nativa do ecossistema Pluppex e do S.P.Y CRM, concebida para fazer parte da engrenagem da sua máquina de receita — e não um plugin externo com cobranças surpresa por mensagem ou token.',
      bullets: [
        'Inclusa no ecossistema: agentes de SDR para resposta relâmpago (< 1 min), cálculo de intenção de compra e alertas de follow-up integrados.',
        'Sem surpresas técnicas: toda a infraestrutura de modelos e orquestração de dados é calibrada e mantida pela engenharia da Pluppex.'
      ]
    },
    {
      id: 'machine-meaning',
      category: 'MODELO DE ATUAÇÃO',
      question: 'O que significa na prática "Nós construímos e operamos a máquina de receita"?',
      answer: 'Significa que você não contrata um curso teórico nem recebe um software vazio para sua equipe tentar configurar sozinha. Nós desenhamos toda a arquitetura de atração e conversão, implementamos as ferramentas proprietárias e operamos as engrenagens diariamente ao lado dos seus closers e diretores.',
      bullets: [
        'Construir: desenhar funis de vendas, configurar integrações técnicas, instalar o S.P.Y CRM e treinar a IA Aurora.',
        'Operar: otimizar anúncios diários, auditar tempos de resposta da equipe comercial, resgatar negociações paradas e calibrar a conversão semanalmente.'
      ]
    },
    {
      id: 'team-and-tools',
      category: 'EQUIPE & PESSOAS',
      question: 'Minha empresa precisa demitir vendedores ou substituir a equipe comercial?',
      answer: 'De forma alguma. O propósito da Pluppex é potencializar a sua força de vendas humana, e não substituí-la. Tiramos dos seus vendedores o trabalho braçal e desgastante (preenchimento manual de planilhas, cobrança de leads frios e triagem repetitiva). Nossos agentes e automações preparam o terreno para que seus closers dediquem 100% da energia em reuniões de alto valor e fechamentos de contratos.',
      bullets: [
        'Integramos com os principais ERPs, plataformas de pagamento e bancos de dados do mercado.',
        'Seus vendedores recebem o lead já filtrado, com resumo da dor e script sugerido pela Aurora.'
      ]
    },
    {
      id: 'time-to-results',
      category: 'PRAZOS & EXECUÇÃO',
      question: 'Em quanto tempo é possível observar os primeiros resultados práticos de receita?',
      answer: 'O ciclo de implementação segue uma cadência ágil. Nas primeiras duas semanas realizamos o Diagnóstico Operacional, correção do rastreamento de dados e estruturação dos pipelines do S.P.Y CRM. A partir do momento em que a IA Aurora e o tráfego são ativados, a triagem instantânea e a recuperação de oportunidades perdidas acontecem no mesmo instante. Os ganhos de previsibilidade e CAC otimizado se consolidam nos primeiros 30 a 60 dias de operação contínua.'
    },
    {
      id: 'partnership-model',
      category: 'INVESTIMENTO & PARCERIA',
      question: 'Como funciona o modelo comercial e de remuneração da Pluppex?',
      answer: 'Trabalhamos com uma estrutura de parceria e coinvestimento, não com uma relação fria de cliente-fornecedor. Praticamos um modelo equilibrado composto por taxa de operação/engenharia e participação no crescimento real gerado (revenue share ou comissão sobre novas receitas geradas pela máquina). Se a sua operação vende mais com margem saudável, a Pluppex prospera junto.'
    }
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono-tech tracking-wide mb-4">
          <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
          <span>PERGUNTAS FREQUENTES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
          Perguntas & Respostas Frequentes
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          Tudo o que você precisa saber sobre o funcionamento da máquina de receitas da Pluppex, nossa diferenciação e nosso modelo de parceria.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              id={`faq-item-${faq.id}`}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-[#120826] border-purple-500/60 shadow-[0_0_20px_rgba(168,85,247,0.15)]'
                  : 'bg-[#0c0618] border-purple-950/70 hover:border-purple-800/60 hover:bg-[#0f071f]'
              }`}
            >
              {/* Question button trigger */}
              <button
                type="button"
                onClick={() => toggleFaq(faq.id)}
                className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono-tech uppercase font-bold text-purple-300 px-2 py-0.5 rounded bg-purple-950/80 border border-purple-900">
                      {faq.category}
                    </span>
                    <span className="text-xs font-mono-tech text-slate-400">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className={`text-base sm:text-lg font-display font-bold transition-colors ${
                    isOpen ? 'text-white' : 'text-slate-200'
                  }`}>
                    {faq.question}
                  </h3>
                </div>

                <div className={`p-2 rounded-lg transition-transform duration-300 shrink-0 ${
                  isOpen 
                    ? 'bg-purple-600/30 text-purple-200 rotate-180' 
                    : 'bg-[#160b2e] text-slate-400'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Expandable answer panel */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 sm:p-6 pt-0 border-t border-purple-950/60 space-y-4">
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>

                      {faq.bullets && faq.bullets.length > 0 && (
                        <div className="p-4 rounded-xl bg-[#090412] border border-purple-950/80 space-y-2">
                          {faq.bullets.map((b, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <span className="text-purple-400 font-bold mt-0.5">•</span>
                              <span className="leading-relaxed">{b}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Still have questions? Call to action card */}
      <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#14082c] via-[#0f0622] to-[#14082c] border border-purple-900/60 text-center shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-left">
          <h4 className="text-xl font-display font-bold text-white">
            Sua dúvida não está listada aqui?
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Solicite um diagnóstico operacional gratuito e converse diretamente com nossos especialistas.
          </p>
        </div>

        <button
          onClick={onOpenDiagnostic}
          className="shrink-0 px-6 py-3 rounded-xl bg-white text-[#090412] hover:bg-purple-100 font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-purple-500/20"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-700" />
          <span>Fazer Diagnóstico Sem Compromisso</span>
          <ArrowRight className="w-3.5 h-3.5 text-purple-700" />
        </button>
      </div>
    </section>
  );
};
