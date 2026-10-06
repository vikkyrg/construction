import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServiceHero = ({ data }) => {
  return (
    <section className="relative w-full h-[65vh] md:h-[75vh] lg:h-[82vh] min-h-[500px] flex items-center bg-[#111111] text-white overflow-hidden font-sans">
      {/* Background Image with Parallax Fade & Dark Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={data.heroImage}
          alt={data.title}
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-110 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#20201E] via-[#20201E]/60 to-black/70" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 pt-20">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6">
          <Link to="/" className="hover:text-[#C99632] transition-colors">
            HOME
          </Link>
          <span className="text-neutral-600">/</span>
          <Link to="/services" className="hover:text-[#C99632] transition-colors">
            SERVICES
          </Link>
          <span className="text-neutral-600">/</span>
          <span className="text-[#C99632]">{data.title}</span>
        </div>

        {/* Small Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#C99632]"></span>
          <span className="text-[#C99632] text-xs md:text-sm font-extrabold uppercase tracking-[0.25em]">
            SPECIALIZED SERVICE
          </span>
        </div>

        {/* Large Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.05] text-white mb-6 max-w-4xl">
          {data.heroHeading1} <br />
          <span className="text-[#C99632]">{data.heroHeading2}</span>
        </h1>

        {/* Description */}
        <p className="text-neutral-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl font-normal mb-8">
          {data.shortDescription}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
          <Link
            to="/contact"
            className="bg-[#C99632] hover:bg-[#b58324] text-[#20201E] font-extrabold text-xs uppercase tracking-[0.2em] px-8 py-4 flex items-center justify-center gap-3 transition-all duration-300 shadow-lg group"
          >
            <span>GET A QUOTE</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="#related-projects"
            className="border border-white/40 hover:border-[#C99632] text-white hover:text-[#C99632] font-extrabold text-xs uppercase tracking-[0.2em] px-8 py-4 flex items-center justify-center gap-3 transition-all duration-300 backdrop-blur-xs"
          >
            <span>VIEW OUR PROJECTS</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
