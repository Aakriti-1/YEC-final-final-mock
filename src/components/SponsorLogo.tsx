import React from 'react';

interface SponsorLogoProps {
  logoKey: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const SponsorLogo: React.FC<SponsorLogoProps> = ({ logoKey, className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-10 px-3',
    md: 'h-14 px-4',
    lg: 'h-20 px-6'
  }[size];

  switch (logoKey) {
    case 'LASSONDE':
      return (
        <div className={`flex items-center gap-2 bg-[#e31837] text-white font-black tracking-wider rounded border-2 border-black ${sizeClasses} ${className}`}>
          <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polygon points="12 2 2 7 12 12 22 7 12 2" fill="white" stroke="none" />
            <polyline points="2 17 12 22 22 17" stroke="white" strokeWidth="2" fill="none" />
            <polyline points="2 12 12 17 22 12" stroke="white" strokeWidth="2" fill="none" />
          </svg>
          <div className="flex flex-col text-left leading-none">
            <span className="text-xs tracking-tight font-extrabold">YORK U</span>
            <span className="text-sm sm:text-base font-black tracking-tight">LASSONDE</span>
          </div>
        </div>
      );

    case 'AMD':
      return (
        <div className={`flex items-center gap-2 bg-[#111] text-white font-black tracking-wider rounded border-2 border-black ${sizeClasses} ${className}`}>
          <svg className="w-7 h-7 text-[#ed1c24] shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 4h7v4H8v3H4V4zm12 0h4v7h-4V8h-3V4h3zm0 12h3v-3h4v7h-7v-4zM4 13h4v3h3v4H4v-7z" />
          </svg>
          <span className="text-lg sm:text-xl font-extrabold tracking-widest text-[#ed1c24]">
            AMD
          </span>
        </div>
      );

    case 'MDA':
      return (
        <div className={`flex items-center gap-2 bg-[#0a192f] text-white font-black tracking-wider rounded border-2 border-black ${sizeClasses} ${className}`}>
          <svg className="w-6 h-6 text-[#39ae8a] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" stroke="#39ae8a" />
            <path d="M8 12l3 3 5-6" stroke="#39ae8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="3" r="1.5" fill="#39ae8a" />
          </svg>
          <div className="flex flex-col text-left leading-none">
            <span className="text-base sm:text-lg font-black tracking-widest text-white">MDA</span>
            <span className="text-[10px] text-[#39ae8a] font-bold tracking-widest">SPACE</span>
          </div>
        </div>
      );

    case 'HATCH':
      return (
        <div className={`flex items-center gap-2 bg-[#ff9900] text-black font-black tracking-wider rounded border-2 border-black ${sizeClasses} ${className}`}>
          <svg className="w-6 h-6 text-black shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" fill="none" stroke="currentColor" />
            <path d="M7 8.5v7M17 8.5v7M7 12h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span className="text-base sm:text-lg font-black tracking-wider text-black">
            HATCH
          </span>
        </div>
      );

    case 'MAGNA':
      return (
        <div className={`flex items-center gap-2 bg-[#0284c7] text-white font-black tracking-wider rounded border-2 border-black ${sizeClasses} ${className}`}>
          <svg className="w-6 h-6 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 18V6h3.5l5.5 8 5.5-8H21v12h-3V10.5L12.5 17h-1L6 10.5V18H3z" />
          </svg>
          <span className="text-base sm:text-lg font-black tracking-wider text-white">
            MAGNA
          </span>
        </div>
      );

    case 'CELESTICA':
      return (
        <div className={`flex items-center gap-2 bg-[#2e1065] text-white font-black tracking-wider rounded border-2 border-black ${sizeClasses} ${className}`}>
          <svg className="w-6 h-6 text-[#c084fc] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" fill="#c084fc" />
            <circle cx="12" cy="4" r="2" fill="#c084fc" />
            <circle cx="20" cy="12" r="2" fill="#c084fc" />
            <circle cx="12" cy="20" r="2" fill="#c084fc" />
            <circle cx="4" cy="12" r="2" fill="#c084fc" />
            <line x1="12" y1="6" x2="12" y2="9" stroke="#c084fc" strokeWidth="2" />
            <line x1="18" y1="12" x2="15" y2="12" stroke="#c084fc" strokeWidth="2" />
            <line x1="12" y1="18" x2="12" y2="15" stroke="#c084fc" strokeWidth="2" />
            <line x1="6" y1="12" x2="9" y2="12" stroke="#c084fc" strokeWidth="2" />
          </svg>
          <span className="text-sm sm:text-base font-black tracking-wider text-white">
            CELESTICA
          </span>
        </div>
      );

    case 'LINAMAR':
      return (
        <div className={`flex items-center gap-2 bg-[#064e3b] text-white font-black tracking-wider rounded border-2 border-black ${sizeClasses} ${className}`}>
          <svg className="w-6 h-6 text-[#34d399] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 15 8 21 9 17 14 18 20 12 17 6 20 7 14 3 9 9 8 12 2" fill="#059669" stroke="#34d399" />
          </svg>
          <span className="text-sm sm:text-base font-black tracking-wider text-[#34d399]">
            LINAMAR
          </span>
        </div>
      );

    case 'PEO':
      return (
        <div className={`flex items-center gap-2 bg-[#78350f] text-white font-black tracking-wider rounded border-2 border-black ${sizeClasses} ${className}`}>
          <svg className="w-6 h-6 text-[#fbbf24] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="#fbbf24" strokeWidth="2" />
            <path d="M7 12h10M12 7v10" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <div className="flex flex-col text-left leading-none">
            <span className="text-base sm:text-lg font-black tracking-widest text-[#fbbf24]">PEO</span>
            <span className="text-[9px] text-white font-bold">ONTARIO</span>
          </div>
        </div>
      );

    case 'IEEE':
      return (
        <div className={`flex items-center gap-2 bg-[#1e3a8a] text-white font-black tracking-wider rounded border-2 border-black ${sizeClasses} ${className}`}>
          <svg className="w-6 h-6 text-[#60a5fa] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 3 21 12 12 21 3 12 12 3" stroke="#60a5fa" strokeWidth="2" fill="none" />
            <circle cx="12" cy="12" r="3" fill="#60a5fa" />
          </svg>
          <div className="flex flex-col text-left leading-none">
            <span className="text-base sm:text-lg font-black tracking-widest text-white">IEEE</span>
            <span className="text-[9px] text-[#93c5fd] font-bold">TORONTO</span>
          </div>
        </div>
      );

    case 'TBA':
      return (
        <div className={`flex items-center gap-2 bg-zinc-100 text-zinc-700 font-black tracking-wider rounded border-2 border-dashed border-zinc-400 ${sizeClasses} ${className}`}>
          <div className="w-5 h-5 rounded-full border border-dashed border-zinc-400 flex items-center justify-center text-[10px] font-mono font-bold text-zinc-500">
            ?
          </div>
          <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-zinc-500">
            TBA
          </span>
        </div>
      );

    default:
      return (
        <div className={`flex items-center justify-center bg-zinc-100 text-zinc-700 font-bold rounded border-2 border-dashed border-zinc-400 ${sizeClasses} ${className}`}>
          <span className="font-mono text-xs">{logoKey || 'TBA'}</span>
        </div>
      );
  }
};
