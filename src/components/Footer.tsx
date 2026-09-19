import React from 'react';
import { SOCIAL_LINKS } from '../data/yecData';
import { MessageSquare, ArrowUp, Mail, Globe, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0b0e14] text-white border-t border-white/10 pt-12 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Half and Half Socials (No Big Boxes) */}
        <div id="footer-socials-container" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT HALF (50%): LASSONDE ENG SOCIALS */}
          <div id="half-socials-les" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#e31837] text-white font-sans">
                  LES
                </span>
                <span className="font-mono text-xs text-zinc-400">
                  @lasengsoc
                </span>
              </div>

              <h4 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white mb-2">
                Lassonde Engineering Society
              </h4>
              <p className="text-sm text-zinc-400 font-body leading-relaxed mb-5 max-w-lg">
                Official updates on student life, academic initiatives, social mixers, engineering advocacy, and student club activities.
              </p>

              {/* Social Icon Pills */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                {/* Instagram */}
                <a
                  id="les-social-instagram"
                  href={SOCIAL_LINKS.les.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#E1306C] text-zinc-300 hover:text-white transition-all text-xs font-medium border border-white/10"
                >
                  <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>

                {/* LinkedIn */}
                <a
                  id="les-social-linkedin"
                  href={SOCIAL_LINKS.les.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#0A66C2] text-zinc-300 hover:text-white transition-all text-xs font-medium border border-white/10"
                >
                  <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>

                {/* Twitter / X */}
                <a
                  id="les-social-twitter"
                  href={SOCIAL_LINKS.les.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all text-xs font-medium border border-white/10"
                >
                  <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span>Twitter / X</span>
                </a>

                {/* Facebook */}
                <a
                  id="les-social-facebook"
                  href={SOCIAL_LINKS.les.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#4267B2] text-zinc-300 hover:text-white transition-all text-xs font-medium border border-white/10"
                >
                  <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.82 5H18V0h-3.806C10.596 0 9 1.582 9 4.615V8z"/>
                  </svg>
                  <span>Facebook</span>
                </a>

                {/* Discord */}
                <a
                  id="les-social-discord"
                  href={SOCIAL_LINKS.les.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#5865F2] text-zinc-300 hover:text-white transition-all text-xs font-medium border border-white/10"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>Discord</span>
                </a>

                {/* Website */}
                <a
                  id="les-social-website"
                  href={SOCIAL_LINKS.les.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#ff9900] text-zinc-300 hover:text-black transition-all text-xs font-medium border border-white/10"
                >
                  <Globe className="w-4 h-4 shrink-0" />
                  <span>lasengsoc.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-3 flex items-center gap-4 text-xs text-zinc-400 font-body">
              <span>Email: <a href={`mailto:${SOCIAL_LINKS.les.email}`} className="text-white hover:underline">{SOCIAL_LINKS.les.email}</a></span>
            </div>
          </div>

          {/* RIGHT HALF (50%): YORK ENG COMP SOCIALS */}
          <div id="half-socials-yec" className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#ff9900] text-black font-sans">
                  YEC
                </span>
                <span className="font-mono text-xs text-zinc-400">
                  @yorkengcomp
                </span>
              </div>

              <h4 className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-white mb-2">
                York Engineering Competition
              </h4>
              <p className="text-sm text-zinc-400 font-body leading-relaxed mb-5 max-w-lg">
                Stay tuned for category rulebooks, problem statements, participant pairings, judging schedules, and ticket links.
              </p>

              {/* Social & Action Pills */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                {/* Instagram */}
                <a
                  id="yec-social-instagram"
                  href={SOCIAL_LINKS.yec.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#E1306C] text-zinc-300 hover:text-white transition-all text-xs font-medium border border-white/10"
                >
                  <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>

                {/* Email */}
                <a
                  id="yec-social-email"
                  href={`mailto:${SOCIAL_LINKS.yec.email}`}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#39ae8a] text-zinc-300 hover:text-white transition-all text-xs font-medium border border-white/10"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>Email YEC</span>
                </a>
              </div>
            </div>

            <div className="pt-3 flex items-center gap-4 text-xs text-zinc-400 font-body">
              <span>Contact: <a href={`mailto:${SOCIAL_LINKS.yec.email}`} className="text-white hover:underline">{SOCIAL_LINKS.yec.email}</a></span>
            </div>
          </div>
        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-body">
          <p>© {new Date().getFullYear()} Lassonde Engineering Society. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
