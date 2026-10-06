import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';

import projectOceanview from '../assets/project-oceanview.jpg';
import projectBusinessHub from '../assets/project-business-hub.jpg';
import projectIndustrial from '../assets/project-industrial.jpg';
import projectRenovation from '../assets/project-renovation.jpg';
import galleryInterior from '../assets/gallery-luxury-interior.jpg';
import gallerySteel from '../assets/gallery-steel-structure.jpg';
import galleryApartment from '../assets/gallery-apartment.jpg';
import galleryCeiling from '../assets/gallery-false-ceiling.jpg';
import galleryStructural from '../assets/gallery-structural-work.jpg';
import aboutImg from '../assets/about-construction.jpg';

const categories = ['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'INDUSTRIAL', 'RENOVATION', 'INTERIOR'];

const galleryItems = [
  { id: 1, title: 'Modern Villa', category: 'RESIDENTIAL', image: projectOceanview, size: 'large' },
  { id: 2, title: 'Business Hub Complex', category: 'COMMERCIAL', image: projectBusinessHub, size: 'medium' },
  { id: 3, title: 'Luxury Interior', category: 'INTERIOR', image: galleryInterior, size: 'small' },
  { id: 4, title: 'Home Renovation', category: 'RENOVATION', image: projectRenovation, size: 'small' },
  { id: 5, title: 'High-rise Construction', category: 'INDUSTRIAL', image: projectIndustrial, size: 'medium' },
  { id: 6, title: 'Steel Structure', category: 'COMMERCIAL', image: gallerySteel, size: 'medium' },
  { id: 7, title: 'Apartment Building', category: 'RESIDENTIAL', image: galleryApartment, size: 'medium' },
  { id: 8, title: 'False Ceiling Work', category: 'INTERIOR', image: galleryCeiling, size: 'small' },
  { id: 9, title: 'Structural Work', category: 'INDUSTRIAL', image: galleryStructural, size: 'small' },
  { id: 10, title: 'Complete Makeover', category: 'RENOVATION', image: aboutImg, size: 'small' },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeFilter === 'ALL' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#fafaf9] text-[#111827]">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[2px] bg-[#c49a45]"></span>
              <span className="text-[#c49a45] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
                VISUALS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight mb-4 uppercase">
              PROJECT <span className="text-[#c49a45]">GALLERY</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-xl leading-relaxed">
              Explore our construction, architectural, and interior projects that reflect our commitment to quality and excellence.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm font-semibold tracking-wider uppercase pt-2">
            {categories.map((cat, idx) => (
              <div key={cat} className="flex items-center">
                {idx > 0 && <span className="text-gray-300 mx-2 md:mx-3 select-none">|</span>}
                <button
                  onClick={() => setActiveFilter(cat)}
                  className={`transition-all duration-300 ${
                    activeFilter === cat
                      ? 'bg-[#c49a45] text-white px-4 py-1.5 font-bold shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 py-1.5'
                  }`}
                >
                  {cat}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        {activeFilter === 'ALL' ? (
          /* Exact Reference Grid Layout for ALL mode */
          <div className="flex flex-col gap-6">
            {/* ROW 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* Item 1: Modern Villa (5 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(0)}
                className="md:col-span-5 group relative min-h-[260px] md:min-h-[340px] overflow-hidden bg-gray-900 cursor-pointer shadow-sm"
              >
                <img src={galleryItems[0].image} alt={galleryItems[0].title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-4 h-[2px] bg-[#c49a45]"></span>
                      <span className="text-[#c49a45] text-xs font-bold uppercase tracking-widest">{galleryItems[0].category}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">{galleryItems[0].title}</h3>
                  </div>
                  <div className="w-9 h-9 border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#c49a45] group-hover:border-[#c49a45] shrink-0 ml-3">
                    <FaArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Item 2: Business Hub Complex (4 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(1)}
                className="md:col-span-4 group relative min-h-[260px] md:min-h-[340px] overflow-hidden bg-gray-900 cursor-pointer shadow-sm"
              >
                <img src={galleryItems[1].image} alt={galleryItems[1].title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-4 h-[2px] bg-[#c49a45]"></span>
                      <span className="text-[#c49a45] text-xs font-bold uppercase tracking-widest">{galleryItems[1].category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white leading-snug">{galleryItems[1].title}</h3>
                  </div>
                  <div className="w-9 h-9 border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#c49a45] group-hover:border-[#c49a45] shrink-0 ml-3">
                    <FaArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Right Column (3 cols) - Stacked Cards 3 & 4 */}
              <div className="md:col-span-3 flex flex-col gap-6">
                {/* Item 3: Luxury Interior */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  onClick={() => openLightbox(2)}
                  className="group relative flex-1 min-h-[155px] overflow-hidden bg-gray-900 cursor-pointer shadow-sm"
                >
                  <img src={galleryItems[2].image} alt={galleryItems[2].title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end z-10">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-3 h-[2px] bg-[#c49a45]"></span>
                        <span className="text-[#c49a45] text-[10px] font-bold uppercase tracking-widest">{galleryItems[2].category}</span>
                      </div>
                      <h3 className="text-base font-bold text-white leading-snug">{galleryItems[2].title}</h3>
                    </div>
                    <div className="w-8 h-8 border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#c49a45] group-hover:border-[#c49a45] shrink-0 ml-2">
                      <FaArrowRight className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Item 4: Home Renovation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  onClick={() => openLightbox(3)}
                  className="group relative flex-1 min-h-[155px] overflow-hidden bg-gray-900 cursor-pointer shadow-sm"
                >
                  <img src={galleryItems[3].image} alt={galleryItems[3].title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end z-10">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-3 h-[2px] bg-[#c49a45]"></span>
                        <span className="text-[#c49a45] text-[10px] font-bold uppercase tracking-widest">{galleryItems[3].category}</span>
                      </div>
                      <h3 className="text-base font-bold text-white leading-snug">{galleryItems[3].title}</h3>
                    </div>
                    <div className="w-8 h-8 border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#c49a45] group-hover:border-[#c49a45] shrink-0 ml-2">
                      <FaArrowRight className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* Item 5: High-rise Construction (5 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(4)}
                className="md:col-span-5 group relative min-h-[250px] md:min-h-[300px] overflow-hidden bg-gray-900 cursor-pointer shadow-sm"
              >
                <img src={galleryItems[4].image} alt={galleryItems[4].title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-4 h-[2px] bg-[#c49a45]"></span>
                      <span className="text-[#c49a45] text-xs font-bold uppercase tracking-widest">{galleryItems[4].category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white leading-snug">{galleryItems[4].title}</h3>
                  </div>
                  <div className="w-9 h-9 border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#c49a45] group-hover:border-[#c49a45] shrink-0 ml-3">
                    <FaArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Item 6: Steel Structure (3 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(5)}
                className="md:col-span-3 group relative min-h-[250px] md:min-h-[300px] overflow-hidden bg-gray-900 cursor-pointer shadow-sm"
              >
                <img src={galleryItems[5].image} alt={galleryItems[5].title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-4 h-[2px] bg-[#c49a45]"></span>
                      <span className="text-[#c49a45] text-xs font-bold uppercase tracking-widest">{galleryItems[5].category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug">{galleryItems[5].title}</h3>
                  </div>
                  <div className="w-8 h-8 border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#c49a45] group-hover:border-[#c49a45] shrink-0 ml-2">
                    <FaArrowRight className="w-3 h-3 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Item 7: Apartment Building (4 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(6)}
                className="md:col-span-4 group relative min-h-[250px] md:min-h-[300px] overflow-hidden bg-gray-900 cursor-pointer shadow-sm"
              >
                <img src={galleryItems[6].image} alt={galleryItems[6].title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-4 h-[2px] bg-[#c49a45]"></span>
                      <span className="text-[#c49a45] text-xs font-bold uppercase tracking-widest">{galleryItems[6].category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white leading-snug">{galleryItems[6].title}</h3>
                  </div>
                  <div className="w-9 h-9 border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#c49a45] group-hover:border-[#c49a45] shrink-0 ml-3">
                    <FaArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ROW 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* Item 8: False Ceiling Work (3 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(7)}
                className="md:col-span-3 group relative min-h-[210px] overflow-hidden bg-gray-900 cursor-pointer shadow-sm"
              >
                <img src={galleryItems[7].image} alt={galleryItems[7].title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-3 h-[2px] bg-[#c49a45]"></span>
                      <span className="text-[#c49a45] text-[10px] font-bold uppercase tracking-widest">{galleryItems[7].category}</span>
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug">{galleryItems[7].title}</h3>
                  </div>
                  <div className="w-8 h-8 border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#c49a45] group-hover:border-[#c49a45] shrink-0 ml-2">
                    <FaArrowRight className="w-3 h-3 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Item 9: Structural Work (3 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(8)}
                className="md:col-span-3 group relative min-h-[210px] overflow-hidden bg-gray-900 cursor-pointer shadow-sm"
              >
                <img src={galleryItems[8].image} alt={galleryItems[8].title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-3 h-[2px] bg-[#c49a45]"></span>
                      <span className="text-[#c49a45] text-[10px] font-bold uppercase tracking-widest">{galleryItems[8].category}</span>
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug">{galleryItems[8].title}</h3>
                  </div>
                  <div className="w-8 h-8 border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#c49a45] group-hover:border-[#c49a45] shrink-0 ml-2">
                    <FaArrowRight className="w-3 h-3 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Item 10: Complete Makeover (3 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(9)}
                className="md:col-span-3 group relative min-h-[210px] overflow-hidden bg-gray-900 cursor-pointer shadow-sm"
              >
                <img src={galleryItems[9].image} alt={galleryItems[9].title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-3 h-[2px] bg-[#c49a45]"></span>
                      <span className="text-[#c49a45] text-[10px] font-bold uppercase tracking-widest">{galleryItems[9].category}</span>
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug">{galleryItems[9].title}</h3>
                  </div>
                  <div className="w-8 h-8 border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#c49a45] group-hover:border-[#c49a45] shrink-0 ml-2">
                    <FaArrowRight className="w-3 h-3 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Item 11: CTA Card - VIEW ALL PROJECTS (3 cols) */}
              <motion.a
                href="#projects"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-3 group relative min-h-[210px] p-6 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#291e10] via-[#3d2c14] to-[#1c1308] border border-[#c49a45]/30 cursor-pointer shadow-sm hover:border-[#c49a45] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-4 h-[2px] bg-[#c49a45]"></span>
                    <span className="text-[#c49a45] text-xs font-bold uppercase tracking-widest">EXPLORE MORE</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight leading-tight">
                    VIEW ALL<br />PROJECTS
                  </h3>
                </div>

                <div className="flex justify-end mt-4">
                  <div className="w-12 h-12 rounded-full bg-[#c49a45] group-hover:bg-[#d4a853] flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <FaArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        ) : (
          /* Filtered View (Standard Grid) */
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openLightbox(index)}
                  className="group relative aspect-[4/3] overflow-hidden bg-gray-900 cursor-pointer shadow-sm"
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end z-10">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-4 h-[2px] bg-[#c49a45]"></span>
                        <span className="text-[#c49a45] text-xs font-bold uppercase tracking-widest">{item.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white leading-snug">{item.title}</h3>
                    </div>
                    <div className="w-9 h-9 border border-white/40 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#c49a45] group-hover:border-[#c49a45] shrink-0 ml-3">
                      <FaArrowRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              onClick={closeLightbox} 
              className="absolute top-6 right-6 text-white/80 text-2xl hover:text-white hover:bg-white/10 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <FaTimes />
            </button>

            {/* Prev Button */}
            <button 
              onClick={prevImage} 
              className="absolute left-4 md:left-8 text-white/80 text-2xl hover:text-white hover:bg-white/10 w-12 h-12 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <FaChevronLeft />
            </button>

            {/* Main Image & Caption */}
            <div className="max-w-5xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <motion.img 
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={filteredItems[lightboxIndex].image} 
                alt={filteredItems[lightboxIndex].title} 
                className="max-w-full max-h-[75vh] object-contain shadow-2xl" 
              />
              <div className="mt-4 text-center">
                <span className="text-[#c49a45] text-xs font-bold uppercase tracking-widest">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="text-white text-xl font-bold mt-1">
                  {filteredItems[lightboxIndex].title}
                </h3>
              </div>
            </div>

            {/* Next Button */}
            <button 
              onClick={nextImage} 
              className="absolute right-4 md:right-8 text-white/80 text-2xl hover:text-white hover:bg-white/10 w-12 h-12 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
