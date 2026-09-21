import React from 'react';
import { TICKET_LINKS, COMPETITIONS } from '../data/yecData';
import { X, Calendar, MapPin, ExternalLink, CheckCircle } from 'lucide-react';

interface TicketModalProps {
  week: number | null;
  onClose: () => void;
}

export const TicketModal: React.FC<TicketModalProps> = ({ week, onClose }) => {
  if (!week) return null;

  const comps = COMPETITIONS.filter((c) => c.week === week);
  const ticketUrl = week === 1 ? TICKET_LINKS.week1 : TICKET_LINKS.week2;
  const dateStr = 'Dates: TBD';
  const themeColor = week === 1 ? '#ff9900' : '#39ae8a';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        id="ticket-info-modal"
        className="relative w-full max-w-lg bg-white text-zinc-900 rounded-xl border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden max-h-[90vh] flex flex-col font-body"
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b-[3px] border-black text-white"
          style={{ backgroundColor: themeColor }}
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest bg-black text-white px-2.5 py-0.5 rounded-full">
              Official Eventbrite Ticket
            </span>
            <h3 className="font-display text-3xl uppercase tracking-wider mt-1">
              YEC Week {week} Registration
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border-2 border-black bg-white text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 overflow-y-auto">
          <div className="space-y-2 text-sm text-zinc-700">
            <div className="flex items-center gap-2 font-medium">
              <Calendar className="w-4 h-4 text-black" />
              <span>{dateStr}</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <MapPin className="w-4 h-4 text-black" />
              <span>Bergeron Centre for Engineering Excellence, York University</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-500 mb-2">
              Featured Categories for Week {week}:
            </h4>
            <div className="space-y-2">
              {comps.map((c) => (
                <div key={c.id} className="flex items-start gap-2 text-sm text-zinc-800">
                  <CheckCircle className="w-4 h-4 text-[#39ae8a] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-zinc-950">{c.name}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-lg bg-zinc-100 border border-zinc-300 text-xs text-zinc-600 leading-relaxed">
            All registered participants receive access to the competition arena, official challenge briefings, materials kits, catered lunch, and judge critique sessions.
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 py-4 border-t-[3px] border-black bg-zinc-50 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border-2 border-black text-sm font-bold hover:bg-zinc-200 transition-colors"
          >
            Close
          </button>
          <a
            href={ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-bold flex items-center gap-2 hover:bg-zinc-800 transition-colors shadow-md"
          >
            <span>Go to Eventbrite</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
