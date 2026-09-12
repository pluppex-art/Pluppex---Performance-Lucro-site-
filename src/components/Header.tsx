import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { PluppexLogo } from './PluppexLogo';
import { CTA_LABEL } from '../data/homeContent';
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight
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

  const navItems: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Início' },
    { id: 'solutions', label: 'Ecossistema' },
    { id: 'technology', label: 'Tecnologia' },
    { id: 'spy', label: 'S.P.Y' },
    { id: 'aurora', label: 'Aurora' },
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
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Official Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left group focus:outline-none"
          >
            <PluppexLogo variant="full" theme="white" size="md" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 p-1 rounded-full backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                    isActive
                      ? 'text-white bg-[#A855F7]'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="cta-quick-diagnostic-btn"
              onClick={onOpenDiagnostic}
              className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg bg-[#A855F7] text-white hover:bg-[#C084FC] transition-all tracking-wide uppercase"
            >
              <span>{CTA_LABEL}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-b border-white/10 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl">
          <div className="text-[11px] font-mono-tech uppercase text-white/40 px-3 py-1">
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
                    ? 'bg-[#A855F7] text-white'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            );
          })}

          <div className="pt-3 border-t border-white/10">
            <button
              id="mobile-menu-cta-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiagnostic();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#A855F7] text-white hover:bg-[#C084FC] font-bold text-xs tracking-wide uppercase"
            >
              <span>{CTA_LABEL}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
