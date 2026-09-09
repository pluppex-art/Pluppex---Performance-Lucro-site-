import React from 'react';
import { PageType } from '../types';
import { PluppexLogo } from './PluppexLogo';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenDiagnostic: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDiagnostic }) => {
  const handleNav = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="pluppex-footer" className="bg-[#06030c] border-t border-purple-950/60 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-purple-950/60">
          {/* Brand & Manifesto snippet */}
          <div className="lg:col-span-2 space-y-4">
            <div className="cursor-pointer" onClick={() => handleNav('home')}>
              <PluppexLogo variant="full" theme="white-purple" size="lg" />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
              Construímos e operamos a máquina de receita da sua empresa. Conectamos tráfego pago, tecnologia, CRM, agentes e inteligência artificial para gerar e converter oportunidades com previsibilidade.
            </p>

            <div className="pt-2">
              <span className="text-xs font-mono-tech uppercase text-purple-400 tracking-widest font-semibold block">
                "Vender é ciência, não sorte."
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-display font-bold text-sm text-white tracking-wide uppercase mb-3">
              Navegação
            </h5>
            <ul className="space-y-2 text-xs font-mono-tech">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-purple-300 transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-purple-300 transition-colors">
                  Ecossistema de Soluções
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('technology')} className="hover:text-purple-300 transition-colors">
                  Tecnologia & Infraestrutura
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('cases')} className="hover:text-purple-300 transition-colors">
                  Cases & Aplicações
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-purple-300 transition-colors">
                  Sobre a Pluppex & Sócios
                </button>
              </li>
            </ul>
          </div>

          {/* Products & Proprietary Tech */}
          <div>
            <h5 className="font-display font-bold text-sm text-white tracking-wide uppercase mb-3">
              Produtos
            </h5>
            <ul className="space-y-2 text-xs font-mono-tech">
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-purple-300 transition-colors">
                  Pluppex Performance
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('technology')} className="hover:text-purple-300 transition-colors">
                  Pluppex Tech & Automação
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('spy')} className="text-purple-300 hover:text-white transition-colors font-semibold flex items-center gap-1">
                  <span>S.P.Y — CRM da Pluppex</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('aurora')} className="text-purple-300 hover:text-white transition-colors font-semibold flex items-center gap-1">
                  <span>Aurora — IA do S.P.Y & Pluppex</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-purple-300 transition-colors">
                  Pluppex RevOps
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-purple-300 transition-colors">
                  Lançamentos & Coprodução
                </button>
              </li>
            </ul>
          </div>

          {/* Action column */}
          <div>
            <h5 className="font-display font-bold text-sm text-white tracking-wide uppercase mb-3">
              Atendimento
            </h5>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Avalie o vazamento de oportunidades na sua empresa hoje mesmo com nosso diagnóstico.
            </p>
            <button
              id="footer-diagnostic-cta"
              onClick={onOpenDiagnostic}
              className="w-full py-2.5 px-3 rounded-lg bg-white text-[#090412] hover:bg-purple-100 font-display font-bold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Diagnosticar Operação</span>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech">
          <p>© {new Date().getFullYear()} Pluppex Tecnologia & Performance Ltda. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Construímos e operamos máquinas de receita</span>
            <span>•</span>
            <span className="text-purple-400 font-medium">Vender é ciência, não sorte</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
