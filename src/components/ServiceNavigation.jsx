import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ServiceNavigation = ({ prevService, nextService }) => {
  return (
    <section className="bg-[#20201E] text-white py-12 md:py-16 border-t border-[#333]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          
          {/* Previous Service */}
          <div className="w-full md:w-1/2 flex justify-start border-b border-[#333] pb-8 md:border-none md:pb-0">
            {prevService && (
              <Link 
                to={`/services/${prevService.slug}`}
                className="group flex flex-col items-start w-full"
              >
                <div className="flex items-center gap-2 text-[#C99632] text-[10px] font-extrabold uppercase tracking-[0.2em] mb-2">
                  <FaArrowLeft className="transform group-hover:-translate-x-1 transition-transform" />
                  <span>PREVIOUS SERVICE</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white group-hover:text-[#C99632] transition-colors">
                  {prevService.title}
                </h3>
              </Link>
            )}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] h-16 bg-[#444]" />

          {/* Next Service */}
          <div className="w-full md:w-1/2 flex justify-start md:justify-end md:text-right">
            {nextService && (
              <Link 
                to={`/services/${nextService.slug}`}
                className="group flex flex-col items-start md:items-end w-full"
              >
                <div className="flex items-center gap-2 text-[#C99632] text-[10px] font-extrabold uppercase tracking-[0.2em] mb-2">
                  <span>NEXT SERVICE</span>
                  <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white group-hover:text-[#C99632] transition-colors">
                  {nextService.title}
                </h3>
              </Link>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceNavigation;
