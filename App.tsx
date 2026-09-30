/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { VisionSection } from './components/VisionSection';
import { InstitutionalAdvantage } from './components/InstitutionalAdvantage';
import { TrainerProfile } from './components/TrainerProfile';
import { ProgramOverview } from './components/ProgramOverview';
import { Curriculum } from './components/Curriculum';
import { TeachingGallery } from './components/TeachingGallery';
import { SkillsToolkit } from './components/SkillsToolkit';
import { TransformationSection } from './components/TransformationSection';
import { CareerPaths } from './components/CareerPaths';
import { EarningPotential } from './components/EarningPotential';
import { TrainingExperience } from './components/TrainingExperience';
import { AudienceSection } from './components/AudienceSection';
import { ProgramFit } from './components/ProgramFit';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';
import { LightboxModal } from './components/LightboxModal';
import { FloatingDock } from './components/FloatingDock';
import { FitDiagnosticModal } from './components/FitDiagnosticModal';
import { GalleryImageItem } from './types';

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [diagnosticProfileNote, setDiagnosticProfileNote] = useState('');
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryImageItem | null>(null);

  const handleOpenApply = () => {
    setIsApplyModalOpen(true);
  };

  const handleCloseApply = () => {
    setIsApplyModalOpen(false);
  };

  const handleOpenDiagnostic = () => {
    setIsDiagnosticOpen(true);
  };

  const handleCloseDiagnostic = () => {
    setIsDiagnosticOpen(false);
  };

  const handleApplyWithProfile = (track: string, background: string) => {
    setDiagnosticProfileNote(`Candidate Profile: ${background} | ${track}`);
    setIsApplyModalOpen(true);
  };

  const handleSelectGalleryItem = (item: GalleryImageItem) => {
    setSelectedGalleryItem(item);
  };

  const handleCloseLightbox = () => {
    setSelectedGalleryItem(null);
  };

  const handleNavigateLightbox = (newItem: GalleryImageItem) => {
    setSelectedGalleryItem(newItem);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F172A] font-sans flex flex-col selection:bg-[#2563D8] selection:text-white relative bg-feel-good">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenApply={handleOpenApply} />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero onOpenApply={handleOpenApply} />

        {/* Seamless Infinite Marquee Ticker */}
        <MarqueeTicker />

        {/* Section 2: The Educational Need */}
        <VisionSection />

        {/* Section 3: Institutional Advantage */}
        <InstitutionalAdvantage />

        {/* Section 4: Trainer Profile & Certification Program */}
        <TrainerProfile />

        {/* Section 5: Program at a Glance */}
        <ProgramOverview />

        {/* Section 6: Interactive Curriculum */}
        <Curriculum />

        {/* Section 7: Teaching Gallery & Practicum */}
        <TeachingGallery onSelectImage={handleSelectGalleryItem} />

        {/* Section 8: Skills & Multi-Sensory Toolkit */}
        <SkillsToolkit />

        {/* Section 9: Transformations */}
        <TransformationSection />

        {/* Section 10: Career Pathways */}
        <CareerPaths onOpenApply={handleOpenApply} />

        {/* Section 11: Earning Potential */}
        <EarningPotential />

        {/* Section 12: Training Experience */}
        <TrainingExperience />

        {/* Section 13: Audience Persona */}
        <AudienceSection />

        {/* Section 14: Program Fit */}
        <ProgramFit onOpenApply={handleOpenApply} />

        {/* Section 15: FAQ Accordion */}
        <FAQ />

        {/* Section 16: Final Call to Action */}
        <FinalCTA onOpenApply={handleOpenApply} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Dock */}
      <FloatingDock
        onOpenApply={handleOpenApply}
        onOpenDiagnostic={handleOpenDiagnostic}
      />

      {/* Interactive Fit Diagnostic Modal */}
      <FitDiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={handleCloseDiagnostic}
        onApplyWithProfile={handleApplyWithProfile}
      />

      {/* Application / Enrollment Modal */}
      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={handleCloseApply}
        initialProfileNote={diagnosticProfileNote}
      />

      {/* Lightbox Modal for Practicum Gallery */}
      <LightboxModal
        item={selectedGalleryItem}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />
    </div>
  );
}
