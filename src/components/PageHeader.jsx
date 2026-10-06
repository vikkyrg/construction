import { Link } from 'react-router-dom';
import heroImg from '../assets/hero-construction.jpg';

const PageHeader = ({ title, subtitle, breadcrumb }) => {
  return (
    <div className="relative bg-[#111111] text-white pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden font-sans border-b border-neutral-800">
      {/* Background Image with Dark Overlay Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt={title}
          className="w-full h-full object-cover object-center filter brightness-50 opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-black/60" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center">
        {/* Subtitle / Tagline */}
        {subtitle && (
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-6 h-[2px] bg-[#E5A83B]"></span>
            <span className="text-[#E5A83B] text-xs md:text-sm font-extrabold uppercase tracking-[0.25em]">
              {subtitle}
            </span>
            <span className="w-6 h-[2px] bg-[#E5A83B]"></span>
          </div>
        )}

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6">
          {title}
        </h1>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-neutral-400 uppercase">
          <Link to="/" className="hover:text-[#E5A83B] transition-colors">
            HOME
          </Link>
          <span className="text-neutral-600">/</span>
          <span className="text-[#E5A83B]">{breadcrumb || title}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
