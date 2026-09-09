import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { PluppexLogo } from './PluppexLogo';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronRight, 
  Activity,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenDiagnostic: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenDiagnostic
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageType; label: string; badge?: string }[] = [
    { id: 'home', label: 'Início' },
    { id: 'solutions', label: 'Ecossistema' },
    { id: 'technology', label: 'Tecnologia' },
    { id: 'spy', label: 'S.P.Y', badge: 'CRM' },
    { id: 'aurora', label: 'Aurora', badge: 'IA' },
    { id: 'cases', label: 'Cases' },
    { id: 'about', label: 'Sobre Nós' }
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      id="main-site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#090514]/90 backdrop-blur-md border-b border-purple-900/30 shadow-2xl shadow-purple-950/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Official Logo */}
          <button 
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left group focus:outline-none transition-transform hover:scale-[1.01]"
          >
            <PluppexLogo variant="full" theme="white-purple" size="md" />
          </button>

          {/* Desktop Minimalist Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#120924]/80 border border-purple-900/30 p-1 rounded-full backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white bg-purple-700/70 border border-purple-400/40 shadow-[0_0_14px_rgba(168,85,247,0.3)]'
                      : 'text-slate-300 hover:text-white hover:bg-purple-900/30'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded font-mono-tech font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="cta-quick-diagnostic-btn"
              onClick={onOpenDiagnostic}
              className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-white text-[#090412] hover:bg-purple-100 hover:text-purple-950 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] font-display tracking-wide uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Diagnóstico Operacional</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-purple-700" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-diagnostic-icon-btn"
              onClick={onOpenDiagnostic}
              className="p-2 rounded-lg bg-purple-600/20 text-purple-300 border border-purple-500/30"
              aria-label="Abrir Diagnóstico"
            >
              <Activity className="w-4 h-4" />
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#140a28] border border-purple-900/50 text-slate-300 hover:text-white"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d061c] border-b border-purple-900/40 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl">
          <div className="text-[11px] font-mono-tech uppercase text-purple-400 px-3 py-1">
            Navegação Principal
          </div>
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-purple-900/60 text-white border border-purple-500/40'
                    : 'text-slate-300 hover:bg-purple-950/40 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-700/50 font-mono-tech">
                      {item.badge}
                    </span>
                  )}
                </div>
                <ChevronRight className="w-4 h-4 text-purple-400" />
              </button>
            );
          })}

          <div className="pt-3 border-t border-purple-900/40">
            <button
              id="mobile-menu-cta-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiagnostic();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-white text-[#090412] hover:bg-purple-100 font-semibold text-xs font-display tracking-wide uppercase shadow-lg shadow-purple-500/20"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Construir Minha Máquina</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
