import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutAndSchedule } from './components/AboutAndSchedule';
import { TeamCarousel } from './components/TeamCarousel';
import { PackagesSection } from './components/PackagesSection';
import { Footer } from './components/Footer';
import { CompetitionDetailModal } from './components/CompetitionDetailModal';
import { TicketModal } from './components/TicketModal';
import { PackageModal } from './components/PackageModal';
import { CartDrawer } from './components/CartDrawer';
import { Competition, PackageItem } from './types';

export default function App() {
  const [selectedCompetition, setSelectedCompetition] = useState<Competition | null>(null);
  const [selectedTicketWeek, setSelectedTicketWeek] = useState<number | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  return (
    <div id="yec-app-root" className="min-h-screen bg-[#090b10] text-white flex flex-col selection:bg-[#ff9900] selection:text-black">
      {/* Navigation Header */}
      <Header onOpenCart={() => setIsCartOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <HeroSection onOpenTicketInfo={(week) => setSelectedTicketWeek(week)} />

        {/* Section 2: What is YEC & 2-Week Competition Schedule */}
        <AboutAndSchedule onSelectCompetition={(comp) => setSelectedCompetition(comp)} />

        {/* Section 3: Meet the Team Carousel (Combined Executive & Competition Leads in One Sliding Row) */}
        <TeamCarousel />

        {/* Section 4: Packages Section */}
        <PackagesSection onSelectPackage={(pkg) => setSelectedPackage(pkg)} />
      </main>

      {/* Section 5: Footer */}
      <Footer />

      {/* Interactive Overlays & Modals */}
      <CompetitionDetailModal
        competition={selectedCompetition}
        onClose={() => setSelectedCompetition(null)}
      />

      <TicketModal
        week={selectedTicketWeek}
        onClose={() => setSelectedTicketWeek(null)}
      />

      <PackageModal
        packageItem={selectedPackage}
        onClose={() => setSelectedPackage(null)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
}
