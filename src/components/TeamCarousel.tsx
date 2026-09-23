import React, { useState } from 'react';
import { ALL_TEAM_MEMBERS, HERO_ASSETS } from '../data/yecData';
import { User, Sparkles, ChevronRight } from 'lucide-react';
import { TeamMemberModal } from './TeamMemberModal';
import { motion } from 'motion/react';

export const TeamCarousel: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedMemberIndex, setSelectedMemberIndex] = useState<number | null>(null);

  // Submitted team members
  const teamBoxes = ALL_TEAM_MEMBERS;

  // Repeated 4 times to ensure an ultra-smooth, continuous infinite loop on any screen width
  const marqueeItems = [...teamBoxes, ...teamBoxes, ...teamBoxes, ...teamBoxes];

  const handleNextMember = () => {
    if (selectedMemberIndex === null) return;
    setSelectedMemberIndex((prev) => ((prev ?? 0) + 1) % teamBoxes.length);
  };

  const handlePrevMember = () => {
    if (selectedMemberIndex === null) return;
    setSelectedMemberIndex((prev) => ((prev ?? 0) - 1 + teamBoxes.length) % teamBoxes.length);
  };

  const currentSelectedMember = selectedMemberIndex !== null ? teamBoxes[selectedMemberIndex] : null;

  return (
    <section
      id="team-section"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center text-zinc-900"
      style={{
        backgroundImage: `linear-gradient(rgba(245, 247, 250, 0.92), rgba(245, 247, 250, 0.92)), url("${HERO_ASSETS.teamBg}")`
      }}
    >
      {/* Scroll-triggered reveal transition when user scrolls down to this section */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <div className="max-w-7xl mx-auto mb-10">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#ff9900]" />
                <span>Organizing Committee & Competition Leads</span>
              </div>
              <h2
                id="team-section-heading"
                className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-wider text-black leading-none"
              >
                Meet the Team!
              </h2>
            </div>

            {/* Interactive hint */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-zinc-500 hidden sm:inline-block">
                {isPaused ? 'Paused' : 'Hover card to pause'}
              </span>
            </div>
          </div>
        </div>

        {/* Full-width continuous sliding marquee in one row */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left & Right gradient fade masks for smooth entry/exit */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#f5f7fa] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#f5f7fa] to-transparent z-10" />

          {/* Continuous sliding track in one row */}
          <div
            className="animate-marquee-continuous flex items-center py-6 select-none"
            style={{
              animationPlayState: isPaused || selectedMemberIndex !== null ? 'paused' : 'running',
              width: 'max-content'
            }}
          >
            {marqueeItems.map((member, index) => {
              const actualIndex = index % teamBoxes.length;

              return (
                <div
                  key={`${member.name}-${index}`}
                  id={`team-member-card-${index}`}
                  onClick={() => setSelectedMemberIndex(actualIndex)}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedMemberIndex(actualIndex);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View profile and details for ${member.name}`}
                  className="group mx-3.5 w-56 sm:w-64 h-64 sm:h-72 shrink-0 border-[3px] border-black bg-white rounded-xl p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1.5 hover:-translate-x-1.5 transition-all duration-200 flex flex-col items-center justify-between text-center cursor-pointer select-none focus:outline-none focus:ring-4 focus:ring-[#ff9900]"
                >
                  {/* Top: Avatar and details */}
                  <div className="flex flex-col items-center w-full">
                    {/* Profile Picture Frame */}
                    <div
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[3px] border-black mb-3 shrink-0 shadow-inner bg-zinc-100 flex items-center justify-center relative transition-all duration-300 group-hover:scale-105 group-hover:border-[#ff9900] overflow-hidden"
                      title={member.name}
                    >
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <User className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-300 stroke-[1.5]" />
                      )}
                    </div>

                    {/* Name & Role */}
                    <div className="w-full flex flex-col items-center justify-center px-1">
                      <h3 className="font-display text-base sm:text-lg uppercase tracking-wider text-black group-hover:text-[#ff9900] transition-colors leading-tight line-clamp-1">
                        {member.name}
                      </h3>
                      {member.role ? (
                        <span className="font-body text-xs font-bold text-zinc-600 tracking-wide mt-1 line-clamp-1">
                          {member.role}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  {/* Bottom Hover CTA Bar (matches Sponsor card) */}
                  <div className="w-full pt-2.5 border-t border-zinc-200 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-zinc-800 group-hover:text-[#ff9900] transition-colors flex items-center gap-1">
                      <span>View details</span>
                      <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-zinc-100 border border-zinc-300 text-zinc-600">
                      BIO
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Interactive Modal displaying Team Member Details */}
      <TeamMemberModal
        member={currentSelectedMember}
        onClose={() => setSelectedMemberIndex(null)}
        onNext={handleNextMember}
        onPrev={handlePrevMember}
        currentIndex={selectedMemberIndex ?? 0}
        totalMembers={teamBoxes.length}
      />
    </section>
  );
};
