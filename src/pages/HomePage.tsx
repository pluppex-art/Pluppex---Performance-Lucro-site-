import React from 'react';
import { PageType } from '../types';
import { HeroSection } from '../components/home/HeroSection';
import { WhatWeDoSection } from '../components/home/WhatWeDoSection';
import { MachineSection } from '../components/home/MachineSection';
import { ProblemSection } from '../components/home/ProblemSection';
import { AudienceSection } from '../components/home/AudienceSection';
import { ModularModelSection } from '../components/home/ModularModelSection';
import { HowToStartSection } from '../components/home/HowToStartSection';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenDiagnostic: () => void;
  onOpenDiagnosticWithProblems: (problems: string[]) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenDiagnostic }) => {
  return (
    <div>
      <HeroSection onOpenDiagnostic={onOpenDiagnostic} />
      <WhatWeDoSection />
      <MachineSection />
      <ProblemSection />
      <AudienceSection />
      <ModularModelSection />
      <HowToStartSection />
      <FinalCtaSection onOpenDiagnostic={onOpenDiagnostic} />
    </div>
  );
};
