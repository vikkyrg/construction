import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';
import { servicesList } from '../data/servicesData';

const Services = () => {
  return (
    <>
      <PageHeader
        title="OUR EXPERTISE & SERVICES"
        subtitle="SPECIALIZED CAPABILITIES"
        breadcrumb="SERVICES"
      />

      <section className="py-20 md:py-28 bg-[#F4F2ED] text-[#20201E] font-sans">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          
          {/* Intro Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#C99632]"></span>
              <span className="text-[#C99632] text-xs font-extrabold uppercase tracking-[0.25em]">
                SPECIALIZED CAPABILITIES
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#20201E] leading-tight mb-6">
              OUR EXPERTISE & <span className="text-[#C99632]">SERVICES</span>
            </h2>
            <p className="text-[#62605A] text-base md:text-lg leading-relaxed font-normal">
              From residential spaces to large-scale infrastructure, we deliver complete construction solutions with quality, precision, and professional expertise.
            </p>
          </div>

          {/* 6 Services Premium Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white border border-[#D8D4CA] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden relative"
              >
                {/* Top Image Banner */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Number Badge */}
                  <span className="absolute top-4 right-4 text-xs font-extrabold tracking-widest text-[#C99632] bg-[#20201E] px-3 py-1 shadow-md">
                    {service.id}
                  </span>

                  <h3 className="absolute bottom-4 left-6 right-6 text-xl font-extrabold text-white group-hover:text-[#C99632] transition-colors leading-snug">
                    {service.title}
                  </h3>
                </div>

                {/* Content Body */}
                <div className="p-7 flex flex-col justify-between flex-grow">
                  <p className="text-[#62605A] text-xs md:text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* View Service Link Button */}
                  <div className="pt-4 border-t border-neutral-100">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#20201E] group-hover:text-[#C99632] transition-colors"
                    >
                      <span>VIEW SERVICE</span>
                      <FaArrowRight className="text-xs group-hover:translate-x-1.5 transition-transform duration-300 text-[#C99632]" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <CTA />
    </>
  );
};

export default Services;
