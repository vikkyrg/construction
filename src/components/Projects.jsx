import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { projects } from '../data/projects';

const categories = ['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'INDUSTRIAL', 'RENOVATION'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#fafaf9] text-[#111827]">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[2px] bg-[#c49a45]"></span>
              <span className="text-[#c49a45] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
                FEATURED PROJECTS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight mb-4 uppercase">
              FEATURED <span className="text-[#c49a45]">WORK</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-xl leading-relaxed">
              Explore a selection of our recent projects that showcase our commitment
              to quality, innovation, and exceptional craftsmanship.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center flex-nowrap whitespace-nowrap overflow-x-auto no-scrollbar text-xs md:text-sm font-semibold tracking-wider uppercase pt-2 max-w-full">
            {categories.map((cat, idx) => (
              <div key={cat} className="flex items-center shrink-0">
                {idx > 0 && <span className="text-gray-300 mx-1.5 md:mx-2.5 select-none">|</span>}
                <button
                  onClick={() => setActiveFilter(cat)}
                  className={`transition-colors relative pb-1 whitespace-nowrap ${
                    activeFilter === cat
                      ? 'text-[#c49a45] font-bold border-b-2 border-[#c49a45]'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {cat}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/3] overflow-hidden bg-gray-900 cursor-pointer shadow-sm"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                {/* Card Content Overlay (Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex justify-between items-end z-10">
                  <div>
                    <span className="text-[#c49a45] text-xs font-bold uppercase tracking-widest block mb-1.5">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug group-hover:text-[#f3e7c4] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-300 text-xs md:text-sm font-medium">
                      <FaMapMarkerAlt className="w-3.5 h-3.5 text-white/90 shrink-0" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  {/* Arrow Action Button */}
                  <div className="w-10 h-10 md:w-12 md:h-12 border border-white/40 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#c49a45] group-hover:border-[#c49a45] shrink-0 ml-4">
                    <FaArrowRight className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
