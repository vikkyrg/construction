import React from 'react';

const ServiceIntro = ({ data }) => {
  return (
    <section className="py-20 md:py-28 bg-[#F4F2ED] text-[#20201E] font-sans relative overflow-hidden">
      
      {/* 1. Technical Architectural Grid Pattern Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(32, 32, 30, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(32, 32, 30, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 2. Blueprint Ambient Radial Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#C99632]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#20201E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Header Label */}
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[2px] bg-[#C99632]"></span>
          <span className="text-[#C99632] text-xs font-extrabold uppercase tracking-[0.25em]">
            OUR EXPERTISE
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#20201E] leading-tight mb-12 max-w-3xl">
          {data.introTitle || 'BUILDING SPACES DESIGNED TO LAST.'}
        </h2>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Image with Blueprint Framing */}
          <div className="lg:col-span-6 relative">
            
            {/* Structural Blueprint Frame Backing */}
            <div className="absolute -inset-3 border border-[#C99632]/30 rounded-xs translate-x-2 translate-y-2 pointer-events-none hidden sm:block" />
            <div className="absolute -top-5 -left-5 w-10 h-10 border-t-2 border-l-2 border-[#C99632] pointer-events-none hidden sm:block" />
            <div className="absolute -bottom-5 -right-5 w-10 h-10 border-b-2 border-r-2 border-[#C99632] pointer-events-none hidden sm:block" />

            <div className="relative rounded-xs overflow-hidden shadow-2xl border border-[#D8D4CA] group">
              <img
                src={data.introImage}
                alt={data.title}
                className="w-full h-[380px] md:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Gold Corner Badge */}
            <div className="absolute -bottom-6 -right-4 md:right-6 bg-[#20201E] text-white p-6 shadow-2xl border-l-4 border-[#C99632] max-w-xs hidden sm:block z-20">
              <span className="text-3xl font-black text-[#C99632] block">{data.badgePercentage || '100%'}</span>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-300">
                {data.badgeText || 'Quality & Safety Guaranteed'}
              </span>
            </div>
          </div>

          {/* Right Column Detailed Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 bg-[#C99632]/10 border border-[#C99632]/30 text-[#C99632] text-[11px] font-mono font-bold uppercase tracking-wider">
              {data.title || 'CIVIL ENGINEERING'}
            </div>

            <h3 className="text-xl md:text-2xl font-extrabold text-[#20201E] leading-snug">
              {data.introSubtitle || 'Professional Engineering & Structural Precision'}
            </h3>
            
            <p className="text-[#62605A] text-sm md:text-base leading-relaxed font-normal">
              {data.introParagraph1}
            </p>

            <p className="text-[#62605A] text-sm md:text-base leading-relaxed font-normal">
              {data.introParagraph2}
            </p>

            {/* Technical Highlights / Stats Box */}
            <div className="pt-6 border-t border-[#D8D4CA] grid grid-cols-2 gap-6 relative">
              <div className="bg-white/60 backdrop-blur-xs p-4 rounded-xs border border-[#D8D4CA]/80 shadow-xs">
                <h4 className="text-2xl font-black text-[#20201E] mb-1">{data.stat1Value || 'ISO 9001'}</h4>
                <p className="text-xs text-[#62605A] font-bold uppercase tracking-wider">{data.stat1Label || 'Certified Construction'}</p>
              </div>
              <div className="bg-white/60 backdrop-blur-xs p-4 rounded-xs border border-[#D8D4CA]/80 shadow-xs">
                <h4 className="text-2xl font-black text-[#C99632] mb-1">{data.stat2Value || 'ZERO'}</h4>
                <p className="text-xs text-[#62605A] font-bold uppercase tracking-wider">{data.stat2Label || 'Safety Compromise'}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServiceIntro;

