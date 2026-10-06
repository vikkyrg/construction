import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import imgConcrete from '../assets/about-construction.jpg';
import imgSteel from '../assets/gallery-steel-structure.jpg';

const ServiceCTA = ({ serviceTitle }) => {
  return (
    <section className="py-20 md:py-28 bg-[#181817] text-white font-sans relative overflow-hidden border-t border-[#2A2A28]">
      
      {/* 1. Right Side Background Image (Steel Construction Structure at Sunset) */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full pointer-events-none overflow-hidden z-0 opacity-40">
        <img 
          src={imgSteel} 
          alt="Steel Structure" 
          className="w-full h-full object-cover object-center contrast-125 brightness-90"
        />
        {/* Soft Radial & Left Fade Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#181817] via-[#181817]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#181817]/60 via-transparent to-[#181817]" />
      </div>

      {/* 2. Top-Left Angled Dark Concrete Accent Cutout & Double Gold Lines */}
      <div className="absolute top-0 left-0 w-80 md:w-[480px] h-64 md:h-96 pointer-events-none select-none overflow-hidden hidden md:block z-0">
        {/* Outer Gold Line */}
        <div 
          className="absolute inset-0 bg-[#C99632]"
          style={{
            clipPath: 'polygon(0 0, 72% 0, 0 72%)'
          }}
        />
        <div 
          className="absolute inset-0 bg-[#181817]"
          style={{
            clipPath: 'polygon(0 0, 69% 0, 0 69%)'
          }}
        />
        {/* Inner Gold Line */}
        <div 
          className="absolute inset-0 bg-[#C99632]"
          style={{
            clipPath: 'polygon(0 0, 66% 0, 0 66%)'
          }}
        />

        {/* Concrete Image Texture Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale contrast-150 brightness-50 mix-blend-multiply"
          style={{
            backgroundImage: `url(${imgConcrete})`,
            clipPath: 'polygon(0 0, 64% 0, 0 64%)'
          }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-transparent"
          style={{
            clipPath: 'polygon(0 0, 64% 0, 0 64%)'
          }}
        />
      </div>

      {/* Top-Left Vertical Gold Line & Dot Matrix Grid */}
      <div className="absolute top-8 left-12 hidden md:block w-[1px] h-32 bg-[#C99632]/80 z-10" />
      <div className="absolute top-16 left-4 hidden lg:grid grid-cols-3 gap-2 w-10 opacity-40 pointer-events-none z-10">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C99632]" />
        ))}
      </div>

      {/* 3. Bottom-Right Angled Cutout & Double Gold Lines */}
      <div className="absolute bottom-0 right-0 w-80 md:w-[420px] h-64 md:h-80 pointer-events-none select-none overflow-hidden hidden md:block z-0">
        <div 
          className="absolute inset-0 bg-[#C99632]"
          style={{
            clipPath: 'polygon(100% 28%, 100% 100%, 28% 100%)'
          }}
        />
        <div 
          className="absolute inset-0 bg-[#181817]"
          style={{
            clipPath: 'polygon(100% 31%, 100% 100%, 31% 100%)'
          }}
        />
        <div 
          className="absolute inset-0 bg-[#C99632]"
          style={{
            clipPath: 'polygon(100% 34%, 100% 100%, 34% 100%)'
          }}
        />
        <div 
          className="absolute inset-0 bg-[#111110]"
          style={{
            clipPath: 'polygon(100% 36%, 100% 100%, 36% 100%)'
          }}
        />
      </div>

      {/* Bottom-Right Vertical Gold Line & Dot Matrix Grid */}
      <div className="absolute bottom-8 right-10 hidden md:block w-[1px] h-28 bg-[#C99632]/80 z-10" />
      <div className="absolute bottom-12 right-16 hidden lg:grid grid-cols-3 gap-2 w-10 opacity-40 pointer-events-none z-10">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C99632]" />
        ))}
      </div>

      {/* 4. Background CAD Architectural Grid Lines */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-15 text-[#C99632] hidden md:block z-0"
        viewBox="0 0 1200 500" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="0.75"
      >
        <line x1="200" y1="0" x2="1000" y2="500" strokeDasharray="3 3" />
        <line x1="450" y1="0" x2="450" y2="500" />
        <line x1="750" y1="0" x2="750" y2="500" strokeDasharray="4 4" />
        <line x1="0" y1="150" x2="1200" y2="150" />
        <line x1="0" y1="350" x2="1200" y2="350" strokeDasharray="2 2" />
      </svg>

      {/* 5. Center Text Content Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center max-w-3xl">
        
        {/* Pre-Heading */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#C99632]"></span>
          <span className="text-[#C99632] text-xs font-extrabold uppercase tracking-[0.25em]">
            START YOUR BUILD
          </span>
          <span className="w-8 h-[2px] bg-[#C99632]"></span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-5 leading-[1.15]">
          READY TO START YOUR <br />
          <span className="text-[#C99632]">{serviceTitle || 'PROJECT'}?</span>
        </h2>

        {/* Paragraph */}
        <p className="text-neutral-300 text-xs md:text-sm leading-relaxed mb-10 max-w-xl mx-auto font-normal">
          Get in touch with our engineering team today to receive a comprehensive structural consultation and detailed itemized cost estimation.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            to="/contact"
            className="w-full sm:w-auto bg-[#D4A038] hover:bg-[#C99632] text-[#1A1A1A] font-black text-xs uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg group"
          >
            <span>GET A QUOTE</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto border border-[#D4A038]/60 bg-[#1A1A1A]/80 hover:border-[#D4A038] text-white hover:text-[#D4A038] font-black text-xs uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300 backdrop-blur-sm"
          >
            <span>CONTACT US</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServiceCTA;

