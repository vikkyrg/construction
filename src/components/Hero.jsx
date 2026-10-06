import { motion } from 'framer-motion';
import heroBg from '../assets/hero-construction.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img src={heroBg} alt="Construction Site" className="w-full h-full object-cover parallax-bg" />
        <div className="absolute inset-0 bg-dark/60"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center md:text-left pt-20">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-accent text-sm md:text-md uppercase tracking-[0.3em] mb-4 font-semibold">
          Construction • Engineering • Design
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
          BUILDING SPACES<br/>
          THAT STAND<br/>
          THE TEST OF TIME.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 max-w-2xl text-lg md:text-xl mb-10 mx-auto md:mx-0">
          We deliver exceptional construction solutions through precision, craftsmanship, and responsible project management.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
          <a href="#contact" className="px-8 py-4 bg-accent text-dark font-bold uppercase tracking-wider hover:bg-white transition-colors text-center">
            Get a Quote
          </a>
          <a href="#projects" className="px-8 py-4 border border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-dark transition-colors text-center">
            View Projects
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/50 text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-accent absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
