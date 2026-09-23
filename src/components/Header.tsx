import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { HERO_ASSETS } from '../data/yecData';

interface HeaderProps {
  activeTab?: string;
  onSelectTab?: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab = 'yec', onSelectTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (anchorId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0e14]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3'
          : 'bg-[#0b0e14]/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a
          id="header-brand-logo"
          href="#page-top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <img
            src={HERO_ASSETS.lesLogo}
            alt="York Engineering Competition Logo"
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-sm sm:text-base tracking-wide text-white leading-tight">
              York Engineering Competition
            </span>
            <span className="text-[11px] text-zinc-400 font-normal">
              York University
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium text-zinc-200">
          <a
            id="nav-home"
            href="#page-top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-3 py-2 rounded-md hover:text-white hover:bg-white/10 transition-colors"
          >
            Home
          </a>

          {/* About Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button
              id="nav-about-dropdown-btn"
              className="flex items-center gap-1 px-3 py-2 rounded-md hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => handleNavClick('about-yec')}
            >
              About Us
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 rounded-md bg-[#161b26] border border-white/10 shadow-xl py-2 z-50">
                <a
                  id="nav-about-team"
                  href="#team-section"
                  onClick={(e) => {
                    e.preventDefault();
                    setAboutDropdownOpen(false);
                    handleNavClick('team-section');
                  }}
                  className="block px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/10"
                >
                  Meet EngSoc Team
                </a>
                <a
                  id="nav-about-documents"
                  href="https://lasengsoc.com/governing-documents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/10"
                >
                  <span>Governing Documents</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            )}
          </div>

          <a
            id="nav-schedule"
            href="#schedule-section"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('schedule-section');
            }}
            className="px-3 py-2 rounded-md hover:text-white hover:bg-white/10 transition-colors"
          >
            Schedule
          </a>

          <a
            id="nav-events"
            href="#tickets-section"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('tickets-section');
            }}
            className="px-3 py-2 rounded-md hover:text-white hover:bg-white/10 transition-colors"
          >
            Events & Tickets
          </a>

          <a
            id="nav-packages"
            href="#packages-section"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('packages-section');
            }}
            className="px-3 py-2 rounded-md hover:text-white hover:bg-white/10 transition-colors"
          >
            Packages
          </a>

          <a
            id="nav-sponsors"
            href="#sponsors-section"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('sponsors-section');
            }}
            className="px-3 py-2 rounded-md hover:text-white hover:bg-white/10 transition-colors"
          >
            Sponsors
          </a>

          {/* More Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMoreDropdownOpen(true)}
            onMouseLeave={() => setMoreDropdownOpen(false)}
          >
            <button
              id="nav-more-dropdown-btn"
              className="flex items-center gap-1 px-3 py-2 rounded-md hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              More
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {moreDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 w-48 rounded-md bg-[#161b26] border border-white/10 shadow-xl py-2 z-50">
                <a
                  id="nav-more-join-us"
                  href="https://lasengsoc.com/directorships"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/10"
                >
                  <span>Join Us!</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
                <a
                  id="nav-more-engshop"
                  href="https://lasengsoc.com/engshop-y7m66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/10"
                >
                  <span>EngShop</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Right action: Mobile hamburger */}
        <div className="flex items-center gap-3">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-200 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden fixed inset-x-0 top-[60px] bg-[#0d1117]/98 border-b border-white/15 px-6 py-6 backdrop-blur-xl shadow-2xl transition-all"
        >
          <div className="flex flex-col space-y-3 text-base font-medium text-zinc-200">
            <a
              id="mobile-nav-home"
              href="#page-top"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="py-2 px-3 rounded-md hover:bg-white/10 text-white"
            >
              Home
            </a>
            <a
              id="mobile-nav-about"
              href="#about-yec"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about-yec');
              }}
              className="py-2 px-3 rounded-md hover:bg-white/10 text-white"
            >
              About YEC
            </a>
            <a
              id="mobile-nav-schedule"
              href="#schedule-section"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('schedule-section');
              }}
              className="py-2 px-3 rounded-md hover:bg-white/10 text-white"
            >
              Competition Schedule
            </a>
            <a
              id="mobile-nav-team"
              href="#team-section"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('team-section');
              }}
              className="py-2 px-3 rounded-md hover:bg-white/10 text-white"
            >
              Meet the Team
            </a>
            <a
              id="mobile-nav-packages"
              href="#packages-section"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('packages-section');
              }}
              className="py-2 px-3 rounded-md hover:bg-white/10 text-white"
            >
              Sponsorship & Packages
            </a>
            <a
              id="mobile-nav-sponsors"
              href="#sponsors-section"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('sponsors-section');
              }}
              className="py-2 px-3 rounded-md hover:bg-white/10 text-white"
            >
              2026/2027 Sponsors
            </a>
            <hr className="border-white/10 my-2" />
            <div className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
              More
            </div>
            <a
              id="mobile-nav-join"
              href="https://lasengsoc.com/directorships"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-white/10 text-zinc-300"
            >
              <span>Join Us!</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              id="mobile-nav-shop"
              href="https://lasengsoc.com/engshop-y7m66"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-white/10 text-zinc-300"
            >
              <span>EngShop</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              id="mobile-nav-discord"
              href="https://discord.gg/3aUC4ZP9dM"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2 px-3 rounded-md bg-[#5865F2]/20 text-[#7289da] font-semibold"
            >
              <span>Join Discord</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
