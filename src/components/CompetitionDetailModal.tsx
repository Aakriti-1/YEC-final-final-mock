import React from 'react';
import { Competition } from '../types';
import { TICKET_LINKS } from '../data/yecData';
import { X, Users, Calendar, ExternalLink } from 'lucide-react';

interface CompetitionDetailModalProps {
  competition: Competition | null;
  onClose: () => void;
}

export const CompetitionDetailModal: React.FC<CompetitionDetailModalProps> = ({ competition, onClose }) => {
  if (!competition) return null;

  const ticketLink = competition.week === 1 ? TICKET_LINKS.week1 : TICKET_LINKS.week2;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        id="competition-detail-modal"
        className="relative w-full max-w-2xl bg-white text-zinc-900 rounded-xl border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b-[3px] border-black bg-zinc-100">
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white ${
                competition.week === 1
                  ? 'bg-[#ff9900] text-black'
                  : 'bg-[#39ae8a]'
              }`}
            >
              {competition.weekLabel}
            </span>
            <span className="text-xs font-semibold text-zinc-600">Dates: {competition.dates}</span>
          </div>

          <button
            id="close-competition-modal-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Banner Image & Title */}
          <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-lg bg-zinc-50 border border-zinc-200">
            <img
              src={competition.image}
              alt={competition.name}
              className="w-32 sm:w-44 h-auto object-contain shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="text-center sm:text-left">
              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wide text-black mb-1">
                {competition.name}
              </h3>
              <p className="font-body text-black text-sm leading-relaxed">
                {competition.description}
              </p>
            </div>
          </div>

          {/* Key Specifications Grid (Blank as details are pending) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border-2 border-black bg-white flex items-start gap-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Users className="w-5 h-5 text-black shrink-0 mt-0.5" />
              <div>
                <span className="text-xs uppercase font-bold text-zinc-500 block tracking-wider">
                  Team Composition
                </span>
                <span className="font-bold text-sm text-zinc-400 italic">
                  To be announced
                </span>
              </div>
            </div>

            <div className="p-4 rounded-lg border-2 border-black bg-white flex items-start gap-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Calendar className="w-5 h-5 text-black shrink-0 mt-0.5" />
              <div>
                <span className="text-xs uppercase font-bold text-zinc-500 block tracking-wider">
                  Eligibility
                </span>
                <span className="font-bold text-sm text-zinc-400 italic">
                  To be announced
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="px-6 py-4 border-t-[3px] border-black bg-zinc-100 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border-2 border-black text-sm font-bold hover:bg-zinc-200 transition-colors cursor-pointer"
          >
            Close
          </button>

          <a
            href="#signup"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-bold flex items-center gap-2 hover:bg-zinc-800 transition-colors shadow-md cursor-pointer select-none"
            aria-label="Sign Up (Link coming soon)"
          >
            <span>Sign Up (Coming Soon)</span>
            <ExternalLink className="w-4 h-4 opacity-70" />
          </a>
        </div>
      </div>
    </div>
  );
};
