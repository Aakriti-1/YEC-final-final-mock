import React from 'react';
import { HERO_ASSETS } from '../data/yecData';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenTicketInfo?: (week: number) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section
      id="page-top"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#090b10]"
    >
      {/* Background Image with Dark Vignette and Film Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_ASSETS.bgImage}
          alt="York Engineering Competition background"
          className="w-full h-full object-cover object-center opacity-30 select-none scale-105 transform"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090b10]/80 via-[#090b10]/60 to-[#090b10]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#090b10]/50 to-[#090b10]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* YEC 2026 Logo with fluid entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8"
        >
          <img
            id="hero-yec-logo"
            src={HERO_ASSETS.logo}
            alt="York Engineering Competition Logo"
            className="w-48 sm:w-64 md:w-80 h-auto object-contain mx-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Big stylized title: Y ork E ngineering C ompetition */}
        <motion.h1
          id="hero-main-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-tight sm:leading-none mb-6 drop-shadow-md"
        >
          <span className="text-[#ff9900]">Y</span><span>ork</span>{' '}
          <span className="text-[#39ae8a]">E</span><span>ngineering</span>{' '}
          <span className="text-[#e31837]">C</span><span>ompetition</span>
        </motion.h1>

        {/* Subtle Scroll Down Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 flex flex-col items-center text-zinc-400"
        >
          <a
            href="#about-yec"
            className="flex flex-col items-center gap-1 text-xs font-mono tracking-widest uppercase hover:text-white transition-colors cursor-pointer group"
          >
            <span className="text-[10px] tracking-wider text-zinc-400 group-hover:text-white">Scroll to Explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#ff9900]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
