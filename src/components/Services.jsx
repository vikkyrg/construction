import { motion } from 'framer-motion';
import { services } from '../data/services';
import { FaArrowRight } from 'react-icons/fa';
import resImg from '../assets/project-residence.jpg';
import commImg from '../assets/project-commercial.jpg';
import indImg from '../assets/hero-construction.jpg';
import renImg from '../assets/about-construction.jpg';

const serviceImages = [resImg, commImg, indImg, renImg, resImg, indImg];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">

      {/* Background sketch watermark */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage: `url(${renImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.04,
          filter: 'grayscale(100%)',
        }}
      />

      {/* Full-width container */}
      <div className="w-full px-6 md:px-10 xl:px-16 max-w-[1600px] mx-auto">
        <div className="flex items-stretch gap-0">

          {/* ── LEFT PANEL ── */}
          <div className="hidden lg:flex flex-col justify-between lg:w-[26%] xl:w-[22%] min-w-[200px] lg:pr-4 xl:pr-10 py-4">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-accent" />
                <p className="text-accent text-[11px] font-bold uppercase tracking-[0.22em]">What We Build</p>
              </div>
              <h2 className="text-[44px] xl:text-[56px] 2xl:text-[68px] font-extrabold text-dark leading-[1.0] uppercase mb-6 tracking-tight">
                OUR<br /><span className="text-accent">SERVICES</span>
              </h2>
              <p className="text-text-secondary text-[13.5px] leading-[1.7] mb-6">
                From residential spaces to large-scale infrastructure, we deliver end-to-end construction solutions with quality, precision, and professionalism.
              </p>
              <div className="w-14 h-[3px] bg-accent" />
            </div>

            <div className="border-l-[3px] border-accent pl-5 mt-auto pt-10">
              <span className="text-accent font-extrabold text-2xl tracking-tight">/ 06</span>
              <p className="text-dark font-bold text-[10px] uppercase tracking-[0.28em] mt-2 leading-[1.8]">
                Specialized<br />Services For<br />A Better Tomorrow
              </p>
            </div>
          </div>

          {/* Mobile heading */}
          <div className="lg:hidden mb-10 w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent" />
              <p className="text-accent text-[11px] font-bold uppercase tracking-[0.22em]">What We Build</p>
            </div>
            <h2 className="text-5xl font-extrabold text-dark leading-tight uppercase mb-4 tracking-tight">
              OUR <span className="text-accent">SERVICES</span>
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              From residential spaces to large-scale infrastructure, we deliver end-to-end construction solutions with quality, precision, and professionalism.
            </p>
          </div>

          {/* ── RIGHT PANEL: Cards Grid ── */}
          <div className="w-full lg:w-[74%] xl:w-[78%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative h-[320px] xl:h-[350px] bg-card-bg border border-border-light overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  {/* Angled image on right half */}
                  <div
                    className="absolute top-0 right-0 w-[52%] h-full z-0"
                    style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
                  >
                    <img
                      src={serviceImages[index]}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-dark/15 group-hover:bg-dark/5 transition-colors duration-500" />
                  </div>

                  {/* Gold angled divider */}
                  <div
                    className="absolute top-0 left-[48%] w-[2px] h-[130%] bg-accent/50 origin-top z-10 pointer-events-none"
                    style={{ transform: 'rotate(-9deg)' }}
                  />

                  {/* Text content — left half */}
                  <div className="relative z-20 p-6 xl:p-7 h-full flex flex-col w-[54%]">
                    {/* Ghost number */}
                    <span className="absolute top-1 left-3 text-[80px] xl:text-[90px] font-extrabold text-dark/[0.06] leading-none select-none tracking-tighter">
                      {service.id}
                    </span>

                    <div className="flex-grow flex flex-col justify-center">
                      <div className="mb-4">
                        <Icon className="text-[26px] xl:text-[30px] text-accent" />
                      </div>
                      <h3 className="text-[16px] xl:text-[18px] font-bold text-dark mb-3 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary text-[11.5px] xl:text-[12.5px] leading-[1.65]">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-4">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-accent hover:gap-3 transition-all"
                      >
                        Explore <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;


