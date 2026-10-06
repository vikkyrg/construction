import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import imgConcrete from '../assets/about-construction.jpg';

const ServiceProcess = ({ process }) => {
  if (!process || process.length === 0) return null;

  // Split steps into top row (first 4 steps) and bottom row (remaining steps)
  const topRowSteps = process.slice(0, 4);
  const bottomRowSteps = process.slice(4);

  return (
    <section className="py-12 md:py-16 bg-[#F3EFE7] text-[#20201E] font-sans relative overflow-hidden border-y border-[#E2DDD3]">
      




      {/* 4. Top-Left & Bottom-Right Dot Matrix Arrays */}
      <div className="absolute top-10 left-8 hidden lg:grid grid-cols-6 gap-2 w-20 opacity-40 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C99632]" />
        ))}
      </div>

      <div className="absolute bottom-10 right-8 hidden lg:grid grid-cols-6 gap-2 w-20 opacity-40 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C99632]" />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 max-w-2xl">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="w-6 h-[2px] bg-[#C99632]"></span>
            <span className="text-[#C99632] text-xs font-extrabold uppercase tracking-[0.25em]">
              EXECUTION FRAMEWORK
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-[#20201E] leading-tight mb-2.5">
            OUR SERVICE <span className="text-[#C99632]">PROCESS</span>
          </h2>

          <p className="text-[#62605A] text-xs md:text-xs leading-relaxed font-normal">
            A structured and transparent process to ensure quality, efficiency, and timely delivery from concept to completion.
          </p>
        </div>

        {/* 2-Row Connected Layout */}
        <div className="relative">
          
          {/* TOP ROW: Steps 01 to 04 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {topRowSteps.map((stepItem, index) => (
              <div
                key={stepItem.step || index}
                className="bg-white p-4 sm:p-5 border border-[#E2DDD3] shadow-sm rounded-xs hover:border-[#C99632] hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between min-h-[145px]"
              >
                {/* L-Shaped Top Right Gold Corner Bracket Accent */}
                <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C99632] opacity-80 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Step Badge & Faint Number Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C99632] font-mono">
                      STEP {stepItem.step || `0${index + 1}`}
                    </span>
                    <span className="text-2xl font-black text-neutral-200 group-hover:text-[#C99632]/25 transition-colors font-sans select-none">
                      {stepItem.step || `0${index + 1}`}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#20201E] mb-1.5 leading-snug group-hover:text-[#C99632] transition-colors">
                    {stepItem.name}
                  </h3>

                  {/* Step Description */}
                  <p className="text-[#62605A] text-xs leading-relaxed font-normal">
                    {stepItem.desc}
                  </p>
                </div>

                {/* Bottom Line Accent & Right Arrow */}
                <div className="mt-4 pt-2.5 border-t border-neutral-100 flex items-center justify-between">
                  <div className="w-7 h-[2px] bg-[#D8D4CA] group-hover:bg-[#C99632] transition-colors" />
                  <FaArrowRight className="text-[#C99632] text-xs group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM ROW: Steps 05 to 07 (Centered row for remaining 3 steps) */}
          {bottomRowSteps.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto mt-4 lg:mt-5">
              {bottomRowSteps.map((stepItem, index) => {
                const stepNum = index + 5;
                const formattedNum = stepNum < 10 ? `0${stepNum}` : `${stepNum}`;

                return (
                  <div
                    key={stepItem.step || stepNum}
                    className="bg-white p-4 sm:p-5 border border-[#E2DDD3] shadow-sm rounded-xs hover:border-[#C99632] hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between min-h-[145px]"
                  >
                    {/* L-Shaped Top Right Gold Corner Bracket Accent */}
                    <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C99632] opacity-80 group-hover:opacity-100 transition-opacity" />

                    <div>
                      {/* Step Badge & Faint Number Header */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C99632] font-mono">
                          STEP {stepItem.step || formattedNum}
                        </span>
                        <span className="text-2xl font-black text-neutral-200 group-hover:text-[#C99632]/25 transition-colors font-sans select-none">
                          {stepItem.step || formattedNum}
                        </span>
                      </div>

                      {/* Step Title */}
                      <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#20201E] mb-1.5 leading-snug group-hover:text-[#C99632] transition-colors">
                        {stepItem.name}
                      </h3>

                      {/* Step Description */}
                      <p className="text-[#62605A] text-xs leading-relaxed font-normal">
                        {stepItem.desc}
                      </p>
                    </div>

                    {/* Bottom Line Accent & Right Arrow */}
                    <div className="mt-4 pt-2.5 border-t border-neutral-100 flex items-center justify-between">
                      <div className="w-7 h-[2px] bg-[#D8D4CA] group-hover:bg-[#C99632] transition-colors" />
                      <FaArrowRight className="text-[#C99632] text-xs group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default ServiceProcess;

