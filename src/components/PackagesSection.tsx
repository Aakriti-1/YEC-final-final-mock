import React from 'react';
import { PACKAGES, HERO_ASSETS } from '../data/yecData';
import { PackageItem } from '../types';
import { FileText, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface PackagesSectionProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  return (
    <section
      id="packages-section"
      className="relative min-h-[550px] flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 14, 22, 0.78), rgba(10, 14, 22, 0.78)), url("${HERO_ASSETS.packagesBg}")`
      }}
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Title with smooth scroll entrance */}
        <motion.h2
          id="packages-main-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl sm:text-7xl md:text-8xl uppercase tracking-wider text-white mb-6 drop-shadow-md"
        >
          PACKAGES
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          id="packages-description-text"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-base sm:text-xl text-zinc-200 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Interested in partnering with YEC? Check out these specific packages to get to know us, our goals and the future!
        </motion.p>

        {/* 3 Pill Action Buttons with staggered scroll entrance */}
        <div
          id="packages-buttons-container"
          className="flex flex-wrap items-center justify-center gap-5 w-full"
        >
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: 0.25 + idx * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="flex flex-col items-center"
            >
              <button
                id={`package-btn-${pkg.id}`}
                onClick={() => onSelectPackage(pkg)}
                className="px-8 py-4 rounded-full bg-white text-zinc-950 font-bold font-body text-base tracking-wider hover:bg-[#ff9900] hover:text-black transition-all duration-200 transform hover:-translate-y-0.5 shadow-xl hover:shadow-[#ff9900]/30 flex items-center gap-2.5 cursor-pointer"
              >
                <FileText className="w-5 h-5" />
                <span>{pkg.title}</span>
              </button>
              <a
                href={pkg.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-300 hover:text-white mt-2 flex items-center gap-1 underline underline-offset-4 cursor-pointer"
              >
                <span>Direct PDF Link</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
