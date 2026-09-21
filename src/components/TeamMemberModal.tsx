import React, { useEffect } from 'react';
import { TeamMember } from '../types';
import { X, GraduationCap, Briefcase, Calendar, Sparkles, ChevronLeft, ChevronRight, User } from 'lucide-react';

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  totalMembers?: number;
}

export const TeamMemberModal: React.FC<TeamMemberModalProps> = ({
  member,
  onClose,
  onNext,
  onPrev,
  currentIndex = 0,
  totalMembers = 0
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      }
    };

    if (member) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [member, onClose, onNext, onPrev]);

  if (!member) return null;

  const isLead = Boolean(member.category === 'Competition Lead' || (member.role && member.role.toLowerCase().includes('competition lead')));
  const accentColor = isLead ? '#39ae8a' : '#ff9900';

  return (
    <div
      id="team-member-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        id="team-member-detail-modal"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white text-zinc-900 rounded-2xl border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden max-h-[92vh] flex flex-col font-body animate-scale-up"
      >
        {/* Top Header Bar */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b-[3px] border-black text-black"
          style={{
            backgroundColor: isLead ? '#a7e4d2' : '#fed7aa'
          }}
        >
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border-2 border-black ${
                isLead
                  ? 'bg-[#39ae8a] text-white'
                  : 'bg-black text-white'
              }`}
            >
              {member.category || 'Team Member'}
            </span>
            {totalMembers > 0 && (
              <span className="text-xs font-mono font-bold text-zinc-800 bg-white/80 px-2 py-0.5 rounded border border-black/40">
                {currentIndex + 1} of {totalMembers}
              </span>
            )}
          </div>

          <button
            id="close-team-modal-btn"
            onClick={onClose}
            className="w-9 h-9 rounded-full border-2 border-black bg-white text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Close member profile"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Member Identity Hero */}
          <div className="flex items-center gap-5 p-4 rounded-xl border-2 border-black bg-zinc-50 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[3px] border-black bg-zinc-200 flex items-center justify-center shrink-0 shadow-inner relative overflow-hidden"
              title={`${member.name} Avatar`}
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <User className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-400 stroke-[1.5]" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h3
                id="team-member-modal-name"
                className="font-display text-3xl sm:text-4xl uppercase tracking-wider text-black leading-tight"
              >
                {member.name}
              </h3>
              {member.role ? (
                <p className="font-body text-sm sm:text-base font-bold text-zinc-700 mt-0.5">
                  {member.role}
                </p>
              ) : null}
            </div>
          </div>

          {/* Details Grid: Major, Role, Year */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Major */}
            <div
              id="team-member-modal-major"
              className="p-3.5 rounded-xl border-2 border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
            >
              <div className="flex items-center gap-1.5 text-zinc-600 mb-1">
                <GraduationCap className="w-4 h-4 text-black" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                  Major
                </span>
              </div>
              <p className="font-display text-sm font-bold text-black leading-snug min-h-[1.5rem]">
                {member.major || '—'}
              </p>
            </div>

            {/* Role */}
            <div
              id="team-member-modal-role"
              className="p-3.5 rounded-xl border-2 border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
            >
              <div className="flex items-center gap-1.5 text-zinc-600 mb-1">
                <Briefcase className="w-4 h-4 text-black" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                  Role
                </span>
              </div>
              <p className="font-display text-sm font-bold text-black leading-snug min-h-[1.5rem]">
                {member.role || '—'}
              </p>
            </div>

            {/* Year */}
            <div
              id="team-member-modal-year"
              className="p-3.5 rounded-xl border-2 border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
            >
              <div className="flex items-center gap-1.5 text-zinc-600 mb-1">
                <Calendar className="w-4 h-4 text-black" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                  Year
                </span>
              </div>
              <p className="font-display text-sm font-bold text-black leading-snug min-h-[1.5rem]">
                {member.year || '—'}
              </p>
            </div>
          </div>

          {/* Interesting Fact Feature Box */}
          <div
            id="team-member-modal-interesting-fact"
            className="p-5 rounded-xl border-[3px] border-black bg-[#ff9900]/10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative"
            style={{
              backgroundColor: isLead ? 'rgba(57, 174, 138, 0.12)' : 'rgba(255, 153, 0, 0.12)'
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center text-black"
                style={{ backgroundColor: accentColor }}
              >
                <Sparkles className="w-3.5 h-3.5 text-black fill-current" />
              </div>
              <span className="font-display text-sm uppercase tracking-wider font-bold text-black">
                Interesting Fact
              </span>
            </div>
            <p className="font-body text-zinc-500 text-sm sm:text-base leading-relaxed font-medium">
              {member.interestingFact ? `"${member.interestingFact}"` : '—'}
            </p>
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="px-6 py-4 border-t-[3px] border-black bg-zinc-50 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {onPrev && (
              <button
                id="team-modal-prev-btn"
                onClick={onPrev}
                className="flex items-center gap-1 px-3.5 py-2 rounded-full border-2 border-black bg-white hover:bg-black hover:text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
                aria-label="Previous team member"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous</span>
              </button>
            )}
            {onNext && (
              <button
                id="team-modal-next-btn"
                onClick={onNext}
                className="flex items-center gap-1 px-3.5 py-2 rounded-full border-2 border-black bg-white hover:bg-black hover:text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
                aria-label="Next team member"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            id="team-modal-close-btn"
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
