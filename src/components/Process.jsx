import { motion } from 'framer-motion';
import { FaComments, FaClipboardList, FaPencilRuler, FaHardHat, FaShieldAlt, FaKey, FaChevronRight } from 'react-icons/fa';
import aboutImg from '../assets/about-construction.jpg';
import resImg from '../assets/project-residence.jpg';
import commImg from '../assets/project-commercial.jpg';
import heroImg from '../assets/hero-construction.jpg';

const steps = [
  { id: '01', title: 'CONSULTATION', description: 'We understand your needs, goals, and budget to create the right project plan.', image: aboutImg, icon: FaComments },
  { id: '02', title: 'PLANNING', description: 'Detailed planning, site analysis, and resource allocation for smooth execution.', image: commImg, icon: FaClipboardList },
  { id: '03', title: 'DESIGN', description: 'Modern and functional designs tailored to your vision and requirements.', image: resImg, icon: FaPencilRuler },
  { id: '04', title: 'CONSTRUCTION', description: 'High-quality construction with skilled professionals and modern techniques.', image: heroImg, icon: FaHardHat },
  { id: '05', title: 'QUALITY CHECK', description: 'Rigorous quality inspections to ensure safety, durability, and excellence.', image: aboutImg, icon: FaShieldAlt },
  { id: '06', title: 'HANDOVER', description: 'On-time delivery with complete documentation and your satisfaction.', image: resImg, icon: FaKey },
];

const Process = () => {
  return (
    <section className="relative py-24 bg-secondary-bg text-dark overflow-hidden z-0">
      
      {/* Background Images with gradients */}
      <div className="absolute top-0 left-0 w-1/2 h-full pointer-events-none -z-10" style={{ WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.8), transparent)', maskImage: 'linear-gradient(to right, rgba(0,0,0,0.8), transparent)' }}>
        <img src={aboutImg} alt="" className="w-full h-full object-cover opacity-20 grayscale" />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none -z-10" style={{ WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.8), transparent)', maskImage: 'linear-gradient(to left, rgba(0,0,0,0.8), transparent)' }}>
        <img src={resImg} alt="" className="w-full h-full object-cover opacity-20 grayscale" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Title Section */}
        <div className="mb-16 flex flex-col items-center">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-[1px] bg-accent"></div>
            <p className="text-accent text-sm font-bold uppercase tracking-[0.2em]">Our Methodology</p>
            <div className="w-16 h-[1px] bg-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-wide">
            CONSTRUCTION <span className="text-accent">PROCESS</span>
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-2xl mx-auto pb-4">
            A well-structured approach to deliver exceptional results, from concept to completion.
          </p>
          <div className="w-12 h-[2px] bg-accent mt-2"></div>
        </div>
        
        {/* Process Timeline */}
        <div className="relative mt-12 md:mt-24 mb-16">
          
          {/* Wavy Connecting Line (Desktop) */}
          <div className="absolute top-[72px] left-0 w-full h-[80px] hidden lg:block -z-10">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M 8.33 0 C 14 0, 19 100, 25 100 C 31 100, 36 0, 41.66 0 C 47 0, 53 100, 58.33 100 C 64 100, 69 0, 75 0 C 81 0, 86 100, 91.66 100" 
                    stroke="#C99632" strokeWidth="1.5" vectorEffect="non-scaling-stroke" fill="none" />
            </svg>
            
            {/* Arrows */}
            <div className="absolute top-[50%] left-[16.66%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center shadow-md"><FaChevronRight className="text-[10px]" /></div>
            <div className="absolute top-[50%] left-[33.33%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center shadow-md"><FaChevronRight className="text-[10px]" /></div>
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center shadow-md"><FaChevronRight className="text-[10px]" /></div>
            <div className="absolute top-[50%] left-[66.66%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center shadow-md"><FaChevronRight className="text-[10px]" /></div>
            <div className="absolute top-[50%] left-[83.33%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center shadow-md"><FaChevronRight className="text-[10px]" /></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 !== 0;
              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col items-center group ${isEven ? 'lg:translate-y-[80px]' : ''}`}
                >
                  {/* Circular Image Container */}
                  <div className="relative w-36 h-36 rounded-full mb-8 border-[6px] border-white shadow-xl bg-white">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover rounded-full" />
                    
                    {/* Number Badge */}
                    <div className="absolute -top-2 -left-2 w-10 h-10 bg-accent rounded-full border-[3px] border-white flex items-center justify-center text-white font-bold text-sm shadow-md">
                      {step.id}
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full border-2 border-accent flex items-center justify-center text-dark text-lg shadow-md">
                      <Icon />
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h4 className="text-[13px] font-bold tracking-widest uppercase mb-3 text-dark">{step.title}</h4>
                  <p className="text-text-secondary text-[11px] leading-relaxed max-w-[160px] mx-auto text-center">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
