import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DiagnosticModal } from './components/DiagnosticModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { SpyPage } from './pages/SpyPage';
import { AuroraPage } from './pages/AuroraPage';
import { CasesPage } from './pages/CasesPage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState<boolean>(false);
  const [diagnosticProblems, setDiagnosticProblems] = useState<string[]>([]);

  // Smooth scroll to top on page change
  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDiagnosticWithProblems = (problems: string[]) => {
    setDiagnosticProblems(problems);
    setIsDiagnosticOpen(true);
  };

  const handleOpenGeneralDiagnostic = () => {
    setDiagnosticProblems([]);
    setIsDiagnosticOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07040d] text-slate-100 relative selection:bg-purple-600/35 selection:text-white">
      {/* Background High-Tech Grid & Lighting */}
      <div className="fixed inset-0 bg-grid-pattern opacity-50 pointer-events-none z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial-gradient pointer-events-none z-0" />

      {/* Main Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenDiagnostic={handleOpenGeneralDiagnostic}
      />

      {/* Main Content Area */}
      <main className="relative z-10">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenDiagnostic={handleOpenGeneralDiagnostic}
            onOpenDiagnosticWithProblems={handleOpenDiagnosticWithProblems}
          />
        )}
        {currentPage === 'solutions' && (
          <SolutionsPage
            onNavigate={handleNavigate}
            onOpenDiagnostic={handleOpenGeneralDiagnostic}
          />
        )}
        {currentPage === 'technology' && (
          <TechnologyPage
            onNavigate={handleNavigate}
            onOpenDiagnostic={handleOpenGeneralDiagnostic}
          />
        )}
        {currentPage === 'spy' && (
          <SpyPage
            onNavigate={handleNavigate}
            onOpenDiagnostic={handleOpenGeneralDiagnostic}
          />
        )}
        {currentPage === 'aurora' && (
          <AuroraPage
            onNavigate={handleNavigate}
            onOpenDiagnostic={handleOpenGeneralDiagnostic}
          />
        )}
        {currentPage === 'cases' && (
          <CasesPage
            onNavigate={handleNavigate}
            onOpenDiagnostic={handleOpenGeneralDiagnostic}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenDiagnostic={handleOpenGeneralDiagnostic}
          />
        )}
      </main>

      {/* Persistent Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDiagnostic={handleOpenGeneralDiagnostic}
      />

      {/* Interactive Diagnostic Modal */}
      <DiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
        initialProblems={diagnosticProblems}
      />

      {/* Direct WhatsApp Widget */}
      <WhatsAppWidget
        onOpenDiagnostic={handleOpenGeneralDiagnostic}
      />
    </div>
  );
}

