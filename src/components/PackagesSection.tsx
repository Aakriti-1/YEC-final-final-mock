import React from 'react';
import { PACKAGES, HERO_ASSETS } from '../data/yecData';
import { PackageItem } from '../types';
import { FileText, ArrowUpRight } from 'lucide-react';

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
        {/* Title */}
        <h2
          id="packages-main-heading"
          className="font-display text-6xl sm:text-7xl md:text-8xl uppercase tracking-wider text-white mb-6 drop-shadow-md"
        >
          PACKAGES
        </h2>

        {/* Subtitle */}
        <p
          id="packages-description-text"
          className="font-body text-base sm:text-xl text-zinc-200 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Interested in partnering with YEC? Check out these specific packages to get to know us, our goals and the future!
        </p>

        {/* 3 Pill Action Buttons */}
        <div
          id="packages-buttons-container"
          className="flex flex-wrap items-center justify-center gap-5 w-full"
        >
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className="flex flex-col items-center">
              <button
                id={`package-btn-${pkg.id}`}
                onClick={() => onSelectPackage(pkg)}
                className="px-8 py-4 rounded-full bg-white text-zinc-950 font-bold font-body text-base tracking-wider hover:bg-[#ff9900] hover:text-black transition-all duration-200 transform hover:-translate-y-0.5 shadow-xl hover:shadow-[#ff9900]/30 flex items-center gap-2.5"
              >
                <FileText className="w-5 h-5" />
                <span>{pkg.title}</span>
              </button>
              <a
                href={pkg.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-300 hover:text-white mt-2 flex items-center gap-1 underline underline-offset-4"
              >
                <span>Direct PDF Link</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
