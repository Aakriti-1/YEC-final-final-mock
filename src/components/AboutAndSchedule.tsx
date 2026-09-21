import React, { useState, useEffect, useCallback } from 'react';
import { HERO_ASSETS, COMPETITIONS, ABOUT_PHOTOS } from '../data/yecData';
import { Competition } from '../types';
import { Award, ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutAndScheduleProps {
  onSelectCompetition: (comp: Competition) => void;
}

export const AboutAndSchedule: React.FC<AboutAndScheduleProps> = ({ onSelectCompetition }) => {
  const week1Comps = COMPETITIONS.filter((c) => c.week === 1);
  const week2Comps = COMPETITIONS.filter((c) => c.week === 2);

  // Auto-rotating photos state
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentPhotoIndex((prev) => (prev + 1) % ABOUT_PHOTOS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentPhotoIndex((prev) => (prev - 1 + ABOUT_PHOTOS.length) % ABOUT_PHOTOS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  return (
    <section id="about-yec" className="relative bg-[#f6f7f9] text-[#121620] py-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative top ribbon banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto mb-12"
      >
        <img
          src={HERO_ASSETS.yecBanner}
          alt="YEC Graphic Banner"
          className="w-full h-auto max-h-16 object-cover rounded-md shadow-sm border border-zinc-200"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* WHAT IS Y E C ? Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          {/* Left Column: Heading & Detailed Description */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Boxed Title with bold border */}
            <motion.div
              id="what-is-yec-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="border-[6px] sm:border-[10px] border-black bg-[#3b477a]/15 p-6 sm:p-8 rounded-lg mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-center"
            >
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.75rem] uppercase tracking-wider text-black leading-none text-center w-full">
                WHAT IS <span className="text-[#ff9900]">Y</span> <span className="text-[#39ae8a]">E</span> <span className="text-[#e31837]">C</span> ?
              </h2>
            </motion.div>

            {/* Content paragraph card with mint/sage tint and bold border */}
            <motion.div
              id="what-is-yec-description-box"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="border-[4px] sm:border-[6px] border-black bg-[#a7e4d2]/75 p-6 sm:p-8 rounded-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex-1 flex flex-col justify-center"
            >
              <p className="font-body text-base sm:text-lg leading-relaxed text-zinc-950 font-bold">
                First established in 2008, the York Engineering Competition (YEC) is one of the largest and most important events led by the Lassonde Engineering Society. Offered annually to all our 4.7k students, we strive to challenge our participants to push the boundaries of Engineering by showcasing their creativity and critical thinking in one of our seven competitions.
              </p>
              <p className="font-body text-base sm:text-lg leading-relaxed text-zinc-950 font-bold mt-4">
                Winners of the YEC qualify for the Ontario Engineering Competition (OEC) to represent York Engineering at a provincial level. Students who win OEC can then qualify for the Canadian Engineering Competition (CEC). This competition challenges students to practice and develop practical engineering skills, while gaining valuable feedback and learning from industry professionals and professors.
              </p>

              {/* Pathway Pills */}
              <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-black/20">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-[#ff9900]" />
                  YEC 2026
                </span>
                <span className="text-sm font-bold text-black">➔</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#39ae8a] text-white text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  OEC Ontario
                </span>
                <span className="text-sm font-bold text-black">➔</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e31837] text-white text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  CEC Canada
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 6 Auto-Rotating Photos */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-stretch"
          >
            <div
              id="what-is-yec-carousel"
              className="group relative w-full min-h-[360px] sm:min-h-[440px] rounded-lg border-[4px] sm:border-[6px] border-black overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-[#141a29] flex flex-col justify-between"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Image Stack with Smooth Cross-Fade */}
              <div className="absolute inset-0">
                {ABOUT_PHOTOS.map((photo, idx) => {
                  const isActive = idx === currentPhotoIndex;
                  return (
                    <img
                      key={photo.id}
                      id={`yec-rotating-photo-${idx}`}
                      src={photo.url}
                      alt={photo.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                        isActive
                          ? 'opacity-100 scale-100 z-10'
                          : 'opacity-0 scale-105 pointer-events-none z-0'
                      }`}
                      referrerPolicy="no-referrer"
                    />
                  );
                })}
              </div>

              {/* Top Controls Bar: Pause / Play toggle button */}
              <div className="relative z-30 p-3 sm:p-4 flex items-center justify-end pointer-events-auto">
                <button
                  type="button"
                  id="yec-carousel-pause-toggle"
                  onClick={() => setIsPaused((prev) => !prev)}
                  className="p-1.5 rounded-md bg-white/90 backdrop-blur-sm border-2 border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff9900] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer opacity-80 hover:opacity-100"
                  title={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
                  aria-label={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
                >
                  {isPaused ? <Play className="w-3.5 h-3.5 text-black" /> : <Pause className="w-3.5 h-3.5 text-black" />}
                </button>
              </div>

              {/* Left / Right Nav Arrows */}
              <button
                type="button"
                id="yec-carousel-prev-btn"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-md bg-white/95 hover:bg-[#ff9900] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-200 active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                id="yec-carousel-next-btn"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-md bg-white/95 hover:bg-[#ff9900] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-200 active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Bottom 6 Dots Navigation Indicators (Purely dots, no text) */}
              <div className="relative z-30 p-3 sm:p-4 flex items-center justify-center pointer-events-auto">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
                  {ABOUT_PHOTOS.map((photo, idx) => {
                    const isActive = idx === currentPhotoIndex;
                    return (
                      <button
                        key={photo.id}
                        id={`yec-carousel-indicator-${idx}`}
                        type="button"
                        onClick={() => setCurrentPhotoIndex(idx)}
                        aria-label={`Go to photo ${idx + 1}`}
                        className={`h-2.5 rounded-full transition-all duration-300 border border-black cursor-pointer ${
                          isActive
                            ? 'w-7 bg-[#ff9900] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]'
                            : 'w-2.5 bg-white/70 hover:bg-white'
                        }`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Animated Progress Bar at Bottom of Frame */}
              {!isPaused && (
                <div
                  key={currentPhotoIndex}
                  className="absolute bottom-0 left-0 h-1 bg-[#ff9900] z-40 animate-[progress_3.5s_linear_infinite]"
                  style={{
                    animation: 'yecProgressBar 3.5s linear forwards'
                  }}
                />
              )}
            </div>
          </motion.div>
        </div>

        {/* SCHEDULE SECTION */}
        <div id="schedule-section" className="pt-6 sm:pt-8 mb-12">
          {/* Schedule Title Banner with Robot Mascot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col md:flex-row items-center md:items-end justify-between gap-4 sm:gap-6 border-[4px] sm:border-[6px] border-black bg-[#ff9900]/15 px-5 sm:px-8 pt-4 sm:pt-5 pb-0 rounded-lg mb-8 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="flex-1 w-full pb-3 sm:pb-4">
              <h2
                id="schedule-main-heading"
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-wide text-black leading-tight"
              >
                <span className="text-[#ff9900]">Y</span> <span className="text-[#39ae8a]">E</span> <span className="text-[#e31837]">C</span> 2026 SCHEDULE
              </h2>
              <p className="font-body text-zinc-800 text-sm sm:text-base md:text-lg mt-1.5 font-medium max-w-3xl leading-snug">
                Explore all 7 competition categories across two intense weekends of engineering innovation.
              </p>
            </div>

            {/* Mascot stationed and jumping directly from the bottom black line */}
            <div className="relative shrink-0 flex flex-col items-center justify-end self-center md:self-end mt-1 md:mt-0">
              {/* Floor Contact Shadow anchored to the bottom black line */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 md:w-28 h-1.5 sm:h-2 bg-black/40 rounded-full blur-[1px] animate-shadow-pulse pointer-events-none"
              />

              <img
                id="yec-jumping-robot"
                src={HERO_ASSETS.robotMascot}
                alt="YEC Mascot Robot"
                className="relative z-10 w-22 sm:w-26 md:w-30 lg:w-34 h-auto object-contain shrink-0 drop-shadow-md animate-robot-jump block"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* WEEK 1 */}
          <div id="week-1-container" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="border-[4px] sm:border-[6px] border-black bg-[#ff9900] text-black px-6 py-4 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-wrap items-center justify-between gap-2 mb-8"
            >
              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wider font-bold">
                WEEK 1
              </h3>
              <span className="font-body font-bold text-sm sm:text-base tracking-widest uppercase bg-black text-white px-4 py-1.5 rounded-full">
                DATES: TBD
              </span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {week1Comps.map((comp, idx) => (
                <motion.div
                  key={comp.id}
                  id={`comp-card-${comp.id}`}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => onSelectCompetition(comp)}
                  className="group cursor-pointer border-[4px] border-black bg-white rounded-lg overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] flex flex-col"
                >
                  <div className="h-52 bg-zinc-100 overflow-hidden border-b-[3px] border-black relative">
                    <img
                      src={comp.image}
                      alt={comp.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-3xl uppercase tracking-wide text-black mb-2 group-hover:text-[#ff9900] transition-colors">
                        {comp.name}
                      </h4>
                      <p className="font-body text-black text-sm leading-relaxed line-clamp-4">
                        {comp.description}
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-zinc-200 flex items-center justify-between text-xs font-semibold text-black">
                      <span className="text-[#ff9900] font-bold">Click to view details</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* WEEK 2 */}
          <div id="week-2-container" className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="border-[4px] sm:border-[6px] border-black bg-[#39ae8a] text-white px-6 py-4 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-wrap items-center justify-between gap-2 mb-8"
            >
              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wider font-bold">
                WEEK 2
              </h3>
              <span className="font-body font-bold text-sm sm:text-base tracking-widest uppercase bg-black text-white px-4 py-1.5 rounded-full">
                DATES: TBD
              </span>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {week2Comps.map((comp, idx) => (
                <motion.div
                  key={comp.id}
                  id={`comp-card-${comp.id}`}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => onSelectCompetition(comp)}
                  className="group cursor-pointer border-[4px] border-black bg-white rounded-lg overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] flex flex-col"
                >
                  <div className="h-48 bg-zinc-100 overflow-hidden border-b-[3px] border-black relative">
                    <img
                      src={comp.image}
                      alt={comp.name}
                      className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-2xl uppercase tracking-wide text-black mb-2 group-hover:text-[#39ae8a] transition-colors">
                        {comp.name}
                      </h4>
                      <p className="font-body text-black text-xs leading-relaxed line-clamp-4">
                        {comp.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-zinc-200 flex items-center justify-between text-xs font-semibold text-black">
                      <span className="text-[#39ae8a] font-bold">Click to view details</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative bottom ribbon banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14"
        >
          <img
            src={HERO_ASSETS.yecBanner}
            alt="YEC Graphic Banner"
            className="w-full h-auto max-h-16 object-cover rounded-md shadow-sm border border-zinc-200"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};
