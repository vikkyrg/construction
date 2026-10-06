import { motion } from 'framer-motion';
import heroBg from '../assets/hero-construction.jpg';

const CTA = () => {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden text-center">
      <div className="absolute inset-0 w-full h-full">
        <img src={heroBg} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/80"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-6">
          READY TO BUILD<br/>SOMETHING GREAT?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Let's discuss your next construction project and bring your vision to life.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="px-8 py-4 bg-accent text-dark font-bold uppercase tracking-wider hover:bg-white transition-colors">
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
