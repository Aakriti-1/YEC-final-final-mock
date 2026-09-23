import React, { useState } from 'react';
import { SPONSORS_2026_2027 } from '../data/sponsorsData';
import { SponsorLogo } from './SponsorLogo';
import { SponsorModal } from './SponsorModal';
import { MapPin, Briefcase, ChevronRight, Handshake, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const SponsorsSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedSponsorIndex, setSelectedSponsorIndex] = useState<number | null>(null);

  const allSponsors = SPONSORS_2026_2027;

  // Repeat for continuous infinite sliding loop
  const marqueeSponsors = [...allSponsors, ...allSponsors, ...allSponsors, ...allSponsors];

  const handleNextSponsor = () => {
    if (selectedSponsorIndex === null) return;
    setSelectedSponsorIndex((prev) => ((prev ?? 0) + 1) % allSponsors.length);
  };

  const handlePrevSponsor = () => {
    if (selectedSponsorIndex === null) return;
    setSelectedSponsorIndex((prev) => ((prev ?? 0) - 1 + allSponsors.length) % allSponsors.length);
  };

  const currentSelectedSponsor = selectedSponsorIndex !== null ? allSponsors[selectedSponsorIndex] : null;

  return (
    <section
      id="sponsors-section"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#f0f2f5] text-zinc-900 border-t-4 border-b-4 border-black"
    >
      {/* Neo-brutalist decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff9900]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#39ae8a]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Scroll-triggered reveal transition */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative z-10"
      >
        <div className="max-w-7xl mx-auto mb-10">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Handshake className="w-3.5 h-3.5 text-[#ff9900]" />
                <span>2026/2027 Sponsorship Lineup</span>
              </div>
              <h2
                id="sponsors-section-heading"
                className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-black leading-none"
              >
                Our 2026/2027 Sponsors
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-2xl font-medium">
                Our official 2026/2027 sponsors and industry partners will be announced soon.
              </p>
            </div>

            {/* Partner CTA */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#packages-section"
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ff9900] border-2 border-black text-black text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffaa22] transition-all cursor-pointer"
              >
                <span>Partner with Us</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Full-width continuous rotating marquee */}
        <div className="relative w-full overflow-hidden my-4">
          {/* Edge gradient masks for smooth entry and exit */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#f0f2f5] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#f0f2f5] to-transparent z-10" />

          {/* Continuous rotating track */}
          <div
            className="animate-marquee-continuous flex items-center py-6 select-none"
            style={{
              animationPlayState: isPaused || selectedSponsorIndex !== null ? 'paused' : 'running',
              animationDuration: '38s',
              width: 'max-content'
            }}
          >
            {marqueeSponsors.map((sponsor, index) => {
              const actualIndex = index % allSponsors.length;

              return (
                <div
                  key={`sponsor-marquee-${sponsor.id}-${index}`}
                  id={`sponsor-card-${sponsor.id}-${index}`}
                  onClick={() => setSelectedSponsorIndex(actualIndex)}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedSponsorIndex(actualIndex);
                    }
                  }}
                  className="mx-3.5 w-80 sm:w-96 flex-shrink-0 bg-white rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1.5 hover:-translate-x-1.5 transition-all duration-200 cursor-pointer overflow-hidden group focus:outline-none focus:ring-4 focus:ring-[#ff9900]"
                >
                  {/* Card Top Bar */}
                  <div className="px-5 py-2.5 flex items-center justify-between border-b-2 border-black bg-zinc-100">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider text-black bg-zinc-200 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                      Sponsor
                    </span>
                    <span className="text-[10px] font-mono font-bold text-zinc-500">
                      2026/2027
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex flex-col justify-between h-52">
                    <div>
                      {/* Logo Badge & Name */}
                      <div className="flex items-center gap-3 mb-3">
                        <SponsorLogo logoKey={sponsor.logo} size="sm" />
                        <div className="min-w-0">
                          <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-black leading-tight truncate">
                            {sponsor.name}
                          </h3>
                        </div>
                      </div>

                      {/* Location & Industry badges */}
                      <div className="space-y-1.5 mb-3 text-xs text-zinc-700">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#ff9900] shrink-0" />
                          <span className="font-semibold truncate">{sponsor.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-[#39ae8a] shrink-0" />
                          <span className="font-medium text-zinc-600 truncate">{sponsor.industry}</span>
                        </div>
                      </div>

                      {/* Description status */}
                      <p className="text-xs text-zinc-500 font-mono">
                        {sponsor.description}
                      </p>
                    </div>

                    {/* Bottom CTA prompt */}
                    <div className="pt-3 border-t border-zinc-200 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-black group-hover:text-[#ff9900] transition-colors flex items-center gap-1">
                        <span>Click for details</span>
                        <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 border border-zinc-300">
                        TBA
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Interactive Detail Modal on Click */}
      <SponsorModal
        sponsor={currentSelectedSponsor}
        onClose={() => setSelectedSponsorIndex(null)}
        onNext={handleNextSponsor}
        onPrev={handlePrevSponsor}
      />
    </section>
  );
};
