import React from 'react';
import { 
  FaBuilding, 
  FaWindowMaximize, 
  FaRulerCombined, 
  FaPlug, 
  FaShieldAlt, 
  FaLandmark,
  FaArrowRight
} from 'react-icons/fa';

import imgStructural from '../assets/gallery-structural-work.jpg';
import imgFacade from '../assets/project-commercial.jpg';
import imgInterior from '../assets/gallery-luxury-interior.jpg';
import imgUtilities from '../assets/gallery-steel-structure.jpg';
import imgRoofing from '../assets/project-oceanview.jpg';
import imgHeritage from '../assets/about-construction.jpg';

// Left and Right background architectural accents
import imgLeftArch from '../assets/hero-construction.jpg';
import imgRightArch from '../assets/project-business-hub.jpg';

const defaultIcons = [
  FaBuilding, 
  FaWindowMaximize, 
  FaRulerCombined, 
  FaPlug, 
  FaShieldAlt, 
  FaLandmark
];

const defaultImages = [
  imgStructural,
  imgFacade,
  imgInterior,
  imgUtilities,
  imgRoofing,
  imgHeritage
];

const ServiceCapabilities = ({ capabilities }) => {
  if (!capabilities || capabilities.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-[#F3EFE8] text-[#20201E] font-sans relative overflow-hidden border-y border-[#E2DDD3]">
      
      {/* 1. Background Watermark Serif Text "SERVICES" */}
      <div className="absolute right-4 md:right-12 top-6 select-none pointer-events-none hidden lg:block opacity-[0.12] text-[#A8A090] font-serif font-black uppercase text-[120px] xl:text-[180px] tracking-widest leading-none">
        SERVICES
      </div>

      {/* 2. Top Right CAD Architectural Line Wireframe Drawing */}
      <svg 
        className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none opacity-15 text-[#C99632] hidden lg:block"
        viewBox="0 0 500 400" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1"
      >
        <line x1="100" y1="0" x2="500" y2="400" strokeDasharray="4 4" />
        <line x1="200" y1="0" x2="500" y2="300" />
        <line x1="300" y1="0" x2="500" y2="200" strokeDasharray="2 2" />
        <rect x="250" y="50" width="200" height="300" strokeWidth="1.5" />
        <line x1="250" y1="120" x2="450" y2="120" />
        <line x1="250" y1="190" x2="450" y2="190" />
        <line x1="250" y1="260" x2="450" y2="260" />
        <line x1="320" y1="50" x2="320" y2="350" />
        <line x1="380" y1="50" x2="380" y2="350" />
      </svg>

      {/* 3. Left Architectural Concrete & Louver Cutout Frame */}
      <div className="absolute left-0 top-0 bottom-0 w-32 xl:w-48 pointer-events-none hidden xl:block overflow-hidden opacity-30 mix-blend-multiply">
        <img 
          src={imgLeftArch} 
          alt="Architectural Frame" 
          className="w-full h-full object-cover object-left grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F3EFE8]/70 to-[#F3EFE8]" />
      </div>

      {/* 4. Right Architectural Glass Building Cutout Frame */}
      <div className="absolute right-0 top-0 bottom-0 w-32 xl:w-48 pointer-events-none hidden xl:block overflow-hidden opacity-25 mix-blend-multiply">
        <img 
          src={imgRightArch} 
          alt="Architectural Frame" 
          className="w-full h-full object-cover object-right grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#F3EFE8]/70 to-[#F3EFE8]" />
      </div>

      {/* 5. Bottom-Left Vertical Gold Line & Watermark Text */}
      <div className="absolute bottom-8 left-8 hidden lg:flex items-center gap-3 select-none pointer-events-none z-10">
        <div className="w-[2px] h-10 bg-[#C99632]" />
        <div className="text-[9px] font-mono font-bold tracking-[0.25em] text-[#62605A] uppercase leading-tight">
          QUALITY <br />
          SAFETY <br />
          PRECISION
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#C99632]"></span>
            <span className="text-[#C99632] text-xs font-extrabold uppercase tracking-[0.25em]">
              CORE SERVICES
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#20201E] leading-tight mb-4">
            WHAT WE <span className="text-[#C99632]">PROVIDE</span>
          </h2>

          <p className="text-[#62605A] text-xs md:text-sm leading-relaxed font-normal">
            From concept to completion, we deliver end-to-end construction solutions tailored to your vision, with quality, safety, and precision at every step.
          </p>
        </div>

        {/* 6 Capabilities Grid (Split Card Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((item, idx) => {
            const IconComponent = item.icon || defaultIcons[idx % defaultIcons.length];
            const cardImg = item.image || defaultImages[idx % defaultImages.length];

            return (
              <div
                key={item.number || idx}
                className="bg-white rounded-xs border border-[#E2DDD3] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col sm:flex-row group relative min-h-[220px]"
              >
                {/* Left Content Column (62% Width on SM screens and up) */}
                <div className="sm:w-[62%] p-6 md:p-7 flex flex-col justify-between relative z-10 bg-white">
                  <div>
                    {/* Header Row: Number & Boxed Outline Icon */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl font-black text-[#C99632] tracking-tight font-sans">
                        {item.number}
                      </span>

                      <div className="w-9 h-9 border border-[#D8D4CA] bg-[#FAF8F5] rounded-xs flex items-center justify-center text-[#C99632] group-hover:border-[#C99632] group-hover:bg-[#C99632]/10 transition-colors">
                        <IconComponent className="text-base" />
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-base md:text-lg font-black text-[#20201E] tracking-tight leading-snug mb-2 group-hover:text-[#C99632] transition-colors">
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-[#62605A] text-xs leading-relaxed font-normal line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Link Bar */}
                  <div className="mt-5 pt-3 border-t border-[#F0ECE1] flex items-center justify-between text-[10px] font-extrabold uppercase tracking-widest text-[#62605A] group-hover:text-[#20201E] transition-colors">
                    <span>FULL SPECIFICATION</span>
                    <span className="text-[#C99632] font-bold group-hover:translate-x-1.5 transition-transform duration-300">
                      &rarr;
                    </span>
                  </div>
                </div>

                {/* Right Column: Diagonal Sliced Image (38% Width on SM screens and up) */}
                <div className="sm:w-[38%] relative overflow-hidden min-h-[160px] sm:min-h-full">
                  
                  {/* Diagonal Clip Container */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    style={{
                      backgroundImage: `url(${cardImg})`,
                      clipPath: 'polygon(22% 0, 100% 0, 100% 100%, 0% 100%)'
                    }}
                  />

                  {/* Gold Seam Divider Line */}
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      clipPath: 'polygon(20% 0, 22.5% 0, 2.5% 100%, 0% 100%)',
                      backgroundColor: '#C99632',
                      opacity: 0.9
                    }}
                  />

                  {/* Soft Gradient Overlay for depth */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent pointer-events-none"
                    style={{
                      clipPath: 'polygon(22% 0, 100% 0, 100% 100%, 0% 100%)'
                    }}
                  />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServiceCapabilities;



