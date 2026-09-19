import React, { useState } from 'react';
import { ALL_TEAM_MEMBERS, HERO_ASSETS } from '../data/yecData';
import { User, Pause, Play, Sparkles } from 'lucide-react';
import { TeamMemberModal } from './TeamMemberModal';

export const TeamCarousel: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedMemberIndex, setSelectedMemberIndex] = useState<number | null>(null);

  // Duplicate list to create a seamless, non-stop infinite loop
  const marqueeItems = [...ALL_TEAM_MEMBERS, ...ALL_TEAM_MEMBERS];

  const handleNextMember = () => {
    if (selectedMemberIndex === null) return;
    setSelectedMemberIndex((prev) => ((prev ?? 0) + 1) % ALL_TEAM_MEMBERS.length);
  };

  const handlePrevMember = () => {
    if (selectedMemberIndex === null) return;
    setSelectedMemberIndex((prev) => ((prev ?? 0) - 1 + ALL_TEAM_MEMBERS.length) % ALL_TEAM_MEMBERS.length);
  };

  const currentSelectedMember = selectedMemberIndex !== null ? ALL_TEAM_MEMBERS[selectedMemberIndex] : null;

  return (
    <section
      id="team-section"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center text-zinc-900"
      style={{
        backgroundImage: `linear-gradient(rgba(245, 247, 250, 0.92), rgba(245, 247, 250, 0.92)), url("${HERO_ASSETS.teamBg}")`
      }}
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

          {/* Interactive controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-zinc-500 hidden sm:inline-block">
              {isPaused ? 'Paused' : 'Hover to pause'}
            </span>
            <button
              id="team-marquee-toggle-btn"
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-black bg-white text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-all active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
              aria-label={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>Pause</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Full-width continuous sliding marquee container */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right gradient fade masks for smooth entry/exit */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#f5f7fa] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#f5f7fa] to-transparent z-10" />

        {/* Continuous sliding track */}
        <div
          className="animate-marquee-continuous flex items-center py-4 select-none"
          style={{
            animationPlayState: isPaused || selectedMemberIndex !== null ? 'paused' : 'running',
            width: 'max-content'
          }}
        >
          {marqueeItems.map((member, index) => {
            const actualIndex = index % ALL_TEAM_MEMBERS.length;

            return (
              <div
                key={`${member.name}-${index}`}
                id={`team-member-card-${index}`}
                onClick={() => setSelectedMemberIndex(actualIndex)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedMemberIndex(actualIndex);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View profile and details for ${member.name}`}
                className="group mx-3 w-52 sm:w-60 h-56 sm:h-64 shrink-0 border-[3px] border-black bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#ff9900]"
              >
                {/* Blank Profile Picture Frame */}
                <div
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[3px] border-black mb-3 shrink-0 shadow-inner bg-zinc-100 flex items-center justify-center relative transition-transform duration-300 group-hover:scale-105"
                  title={member.name}
                >
                  <User className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-300 stroke-[1.5]" />
                </div>

                {/* Name - Fixed container so 1-line and 2-line names maintain identical box size */}
                <div className="w-full h-14 sm:h-16 flex items-center justify-center px-1">
                  <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wider text-black group-hover:text-[#ff9900] transition-colors leading-tight line-clamp-2">
                    {member.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Modal displaying Team Major, Role, Year, and Interesting Fact */}
      <TeamMemberModal
        member={currentSelectedMember}
        onClose={() => setSelectedMemberIndex(null)}
        onNext={handleNextMember}
        onPrev={handlePrevMember}
        currentIndex={selectedMemberIndex ?? 0}
        totalMembers={ALL_TEAM_MEMBERS.length}
      />
    </section>
  );
};
