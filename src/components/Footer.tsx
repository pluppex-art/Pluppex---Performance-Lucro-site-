import React from 'react';
import { PageType } from '../types';
import { PluppexLogo } from './PluppexLogo';
import { CTA_LABEL, SPY_AURORA_LINE } from '../data/homeContent';
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenDiagnostic: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDiagnostic }) => {
  const handleNav = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Início' },
    { id: 'solutions', label: 'Ecossistema' },
    { id: 'technology', label: 'Tecnologia' },
    { id: 'cases', label: 'Cases' },
    { id: 'about', label: 'Sobre Nós' },
  ];

  return (
    <footer id="pluppex-footer" className="bg-black border-t border-white/10 pt-16 pb-10 text-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          <div className="lg:col-span-1 space-y-4">
            <div className="cursor-pointer" onClick={() => handleNav('home')}>
              <PluppexLogo variant="full" theme="white" size="lg" />
            </div>
            <span className="text-xs font-mono-tech uppercase text-white/50 tracking-widest font-semibold block">
              "Vender é ciência, não sorte."
            </span>
          </div>

          <div>
            <h5 className="font-bold text-sm text-white tracking-wide uppercase mb-3">
              Navegação
            </h5>
            <ul className="space-y-2 text-xs font-mono-tech">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button onClick={() => handleNav(item.id)} className="hover:text-[#A855F7] transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <p className="text-xs text-white/40 leading-relaxed mt-4 max-w-xs">
              {SPY_AURORA_LINE}
            </p>
          </div>

          <div>
            <h5 className="font-bold text-sm text-white tracking-wide uppercase mb-3">
              Comece por aqui
            </h5>
            <p className="text-xs text-white/50 leading-relaxed mb-4">
              Antes de contratar qualquer coisa, descubra o que sua operação realmente precisa.
            </p>
            <button
              id="footer-diagnostic-cta"
              onClick={onOpenDiagnostic}
              className="w-full py-3 px-3 rounded-lg bg-[#A855F7] text-white hover:bg-[#C084FC] font-bold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-1.5"
            >
              <span>{CTA_LABEL}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-white/40">
          <p>© {new Date().getFullYear()} Pluppex Tecnologia & Performance Ltda. Todos os direitos reservados.</p>
          <span className="font-medium text-white/50">Performance & Lucro com Crescimento Exponencial</span>
        </div>
      </div>
    </footer>
  );
};
