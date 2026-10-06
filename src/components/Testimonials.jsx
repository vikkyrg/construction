import { useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  const prev = () => setCurrent(current === 0 ? testimonials.length - 1 : current - 1);

  return (
    <section className="py-24 bg-secondary-bg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center relative">
          <FaQuoteLeft className="text-6xl text-accent/20 mx-auto mb-8" />
          
          <motion.div 
            key={current}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5 }}
            className="mb-10 bg-card-bg border border-border-light p-10 md:p-16">
            <p className="text-2xl md:text-3xl font-medium text-dark leading-relaxed mb-8">
              "{testimonials[current].text}"
            </p>
            <div className="flex justify-center text-accent mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => <FaStar key={i} />)}
            </div>
            <h4 className="text-lg font-bold text-dark uppercase tracking-wide">{testimonials[current].name}</h4>
            <p className="text-text-secondary text-sm">{testimonials[current].role}</p>
          </motion.div>

          <div className="flex justify-center space-x-6">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-border-light flex items-center justify-center hover:bg-dark hover:text-white transition-colors">
              <FaChevronLeft />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full border border-border-light flex items-center justify-center hover:bg-dark hover:text-white transition-colors">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
