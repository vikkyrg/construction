import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaArrowRight, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { services } from '../data/services';
import { projects } from '../data/projects';

import resImg from '../assets/project-residence.jpg';
import commImg from '../assets/project-commercial.jpg';
import indImg from '../assets/hero-construction.jpg';
import renImg from '../assets/about-construction.jpg';
import interiorImg from '../assets/gallery-luxury-interior.jpg';
import mgmtImg from '../assets/gallery-structural-work.jpg';

const serviceImagesMap = {
  residential: resImg,
  commercial: commImg,
  industrial: indImg,
  interior: interiorImg,
  renovation: renImg,
  management: mgmtImg
};

const categoryTabs = [
  { label: 'ALL SERVICES', slug: 'all' },
  { label: 'RESIDENTIAL', slug: 'residential' },
  { label: 'COMMERCIAL', slug: 'commercial' },
  { label: 'INDUSTRIAL', slug: 'industrial' },
  { label: 'INTERIOR DESIGN', slug: 'interior' },
  { label: 'RENOVATION', slug: 'renovation' },
  { label: 'PROJECT MANAGEMENT', slug: 'management' }
];

const DetailedServices = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(categoryParam);

  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  const handleCategorySelect = (slug) => {
    setActiveCategory(slug);
    if (slug === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: slug });
    }
  };

  // Filter services
  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.slug === activeCategory);

  // Filter related projects
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.slugCategory === activeCategory);

  return (
    <div className="py-20 md:py-28 bg-[#FAF8F5] text-[#111827] font-sans">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Top Header & Filter Selector */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#C49A45]"></span>
            <span className="text-[#C49A45] text-xs md:text-sm font-extrabold uppercase tracking-[0.25em]">
              SPECIALIZED CAPABILITIES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight mb-8">
            EXPLORE OUR <span className="text-[#C49A45]">SOLUTIONS</span>
          </h2>

          {/* Single Line Scrollable Filter Tabs */}
          <div className="flex items-center flex-nowrap whitespace-nowrap overflow-x-auto no-scrollbar pb-3 border-b border-neutral-300/80 gap-2 md:gap-3 text-xs md:text-sm font-extrabold tracking-wider uppercase">
            {categoryTabs.map((tab, idx) => {
              const isActive = activeCategory === tab.slug;
              return (
                <div key={tab.slug} className="flex items-center shrink-0">
                  {idx > 0 && <span className="text-neutral-300 mx-2 select-none">|</span>}
                  <button
                    onClick={() => handleCategorySelect(tab.slug)}
                    className={`transition-all duration-300 relative py-1.5 px-3 rounded-xs ${
                      isActive 
                        ? 'bg-[#1C1D1F] text-white font-black shadow-sm' 
                        : 'text-neutral-600 hover:text-[#C49A45] hover:bg-neutral-200/50'
                    }`}
                  >
                    {tab.label}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── SECTION 1: SERVICES CARDS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <AnimatePresence mode="wait">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              const bgImg = serviceImagesMap[service.slug] || resImg;

              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="bg-white border border-[#E5E0D5] p-8 shadow-xs flex flex-col justify-between group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  {/* Top Header Row */}
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
                      <div className="w-12 h-12 rounded-full bg-[#EFE9DC] flex items-center justify-center text-[#C49A45]">
                        <Icon className="text-xl" />
                      </div>
                      <span className="text-3xl font-black text-neutral-200 group-hover:text-[#C49A45] transition-colors">
                        {service.id}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-extrabold text-[#1A1A1A] mb-3 group-hover:text-[#C49A45] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 text-xs md:text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Key Features Bullet List */}
                    <div className="space-y-2 mb-8 bg-[#FAF8F5] p-4 rounded-xs border border-neutral-200/60">
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-400 mb-2">
                        KEY CAPABILITIES:
                      </p>
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                          <FaCheckCircle className="text-[#C49A45] text-xs shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="text-xs font-extrabold uppercase tracking-widest text-[#1A1A1A] group-hover:text-[#C49A45] flex items-center gap-2 transition-colors"
                    >
                      <span>REQUEST INQUIRY</span>
                      <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ── SECTION 2: RELATED PROJECTS FOR THIS SERVICE ── */}
        <div className="pt-12 border-t border-neutral-300/70">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-[2px] bg-[#C49A45]"></span>
                <span className="text-[#C49A45] text-xs font-extrabold uppercase tracking-[0.2em]">
                  REALIZED EXCELLENCE
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-[#1A1A1A] uppercase tracking-tight">
                RELATED <span className="text-[#C49A45]">PROJECTS</span>
              </h3>
            </div>
            <Link
              to="/projects"
              className="text-xs font-extrabold uppercase tracking-widest text-neutral-700 hover:text-[#C49A45] flex items-center gap-2 transition-colors self-start md:self-auto"
            >
              <span>VIEW ALL PROJECTS</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((proj) => (
                <div 
                  key={proj.id}
                  className="bg-white border border-[#E5E0D5] overflow-hidden shadow-xs group hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-4 left-4 bg-[#1C1D1F] text-[#C49A45] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 shadow-sm">
                      {proj.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h4 className="text-lg font-extrabold text-[#1A1A1A] mb-2 group-hover:text-[#C49A45] transition-colors">
                      {proj.title}
                    </h4>
                    <p className="text-neutral-500 text-xs leading-relaxed mb-4 line-clamp-2">
                      {proj.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-neutral-400 font-semibold pt-3 border-t border-neutral-100">
                      <div className="flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-[#C49A45]" />
                        <span>{proj.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaCalendarAlt className="text-[#C49A45]" />
                        <span>{proj.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-white border border-neutral-200">
              <p className="text-neutral-500 text-sm font-semibold">
                No specific projects listed for this filter yet. Contact us to learn about custom solutions!
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default DetailedServices;
