import React from 'react';
import { 
  FaHardHat, 
  FaAward, 
  FaFileInvoiceDollar, 
  FaClock, 
  FaArrowRight 
} from 'react-icons/fa';

import imgConcrete from '../assets/about-construction.jpg';
import imgArchVilla from '../assets/project-residence.jpg';

// Default icon mapping for 4 advantage cards
const defaultPointIcons = [
  FaHardHat,            // 01: Proven Experience
  FaAward,              // 02: Quality Assurance
  FaFileInvoiceDollar,  // 03: Transparent Costing
  FaClock               // 04: On-Time Guarantee
];

const ServiceWhyChooseUs = ({ title, points }) => {
  if (!points || points.length === 0) return null;

  return (
    <section className="py-12 md:py-16 bg-[#F4EFE6] text-[#20201E] font-sans relative overflow-hidden border-y border-[#E2DDD3]">
      
      {/* 1. Giant Watermark Serif Number "01" (Top Center / Right) */}
      <div className="absolute top-[-30px] left-[45%] -translate-x-1/2 select-none pointer-events-none hidden lg:block opacity-25 text-[#E0D7C6] font-serif font-black text-[220px] xl:text-[260px] tracking-tight leading-none z-0">
        01
      </div>

      {/* 2. Top-Right Architectural Villa Image & CAD Blueprint Wireframes */}
      <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none hidden lg:block overflow-hidden z-0">
        <img 
          src={imgArchVilla} 
          alt="Architectural Villa" 
          className="w-full h-full object-cover object-right opacity-40 mix-blend-multiply contrast-110"
        />
        {/* Soft radial & left-to-right fade gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4EFE6] via-[#F4EFE6]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4EFE6]/50 via-transparent to-[#F4EFE6]" />
      </div>



      {/* 4. Dot Matrix Pattern Grids (Left & Right Margins) */}
      <div className="absolute top-10 left-6 hidden lg:grid grid-cols-3 gap-2.5 w-12 opacity-50 pointer-events-none z-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C99632]" />
        ))}
      </div>

      <div className="absolute bottom-10 right-6 hidden lg:grid grid-cols-3 gap-2.5 w-12 opacity-50 pointer-events-none z-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C99632]" />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 max-w-2xl">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="w-6 h-[2px] bg-[#C99632]"></span>
            <span className="text-[#C99632] text-xs font-extrabold uppercase tracking-[0.2em]">
              THE ADVANTAGE
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-[#1A1A1A] leading-[1.15] mb-2.5">
            WHY CHOOSE OUR <br />
            <span className="text-[#C99632]">{title || 'RESIDENTIAL CONSTRUCTION'}</span>
          </h2>

          <p className="text-[#62605A] text-xs md:text-xs leading-relaxed font-medium">
            We deliver more than just homes — we deliver quality, trust, and long-lasting value with a commitment to excellence at every step.
          </p>
        </div>

        {/* 4 Points Grid (Diagonal Cutout Cards Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {points.map((item, idx) => {
            const IconComponent = item.icon || defaultPointIcons[idx % defaultPointIcons.length];

            return (
              <div
                key={item.number || idx}
                className="bg-white rounded-xs border border-[#E4DCD0] shadow-sm hover:shadow-lg hover:border-[#C99632] transition-all duration-300 overflow-hidden flex flex-row group relative min-h-[135px]"
              >
                {/* Left Section: Warm Cream Parallelogram Icon Container (~26% Width) */}
                <div 
                  className="w-[26%] sm:w-[24%] bg-[#F5EFE6] p-3 sm:p-4 flex items-center justify-center relative shrink-0 border-r border-[#E8E0D4]"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 78% 100%, 0 100%)'
                  }}
                >
                  {/* Gold Outline Icon */}
                  <div className="relative z-10 text-2xl sm:text-3xl text-[#C99632] stroke-1 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent />
                  </div>
                </div>

                {/* Right Section: Content Container (~74% Width) */}
                <div className="w-[74%] sm:w-[76%] p-3.5 sm:p-4 flex flex-col justify-between relative z-10 bg-white -ml-4">
                  <div>
                    {/* Header Row: Gold Number & Horizontal Bar */}
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl sm:text-2xl font-black text-[#C99632] font-sans tracking-tight">
                        {item.number}
                      </span>
                      <div className="w-8 sm:w-10 h-[2px] bg-[#C99632]" />
                    </div>

                    {/* Point Title */}
                    <h3 className="text-sm sm:text-base md:text-lg font-black uppercase tracking-tight text-[#1A1A1A] mb-1.5 leading-snug group-hover:text-[#C99632] transition-colors">
                      {item.title}
                    </h3>

                    {/* Point Description */}
                    <p className="text-[#62605A] text-xs sm:text-xs leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom-Right Arrow */}
                  <div className="mt-3 flex justify-end">
                    <FaArrowRight className="text-[#C99632] text-xs font-bold group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServiceWhyChooseUs;


