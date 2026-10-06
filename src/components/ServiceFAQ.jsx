import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ServiceFAQ = ({ faqs }) => {
  const [openIdx, setOpenIdx] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-[#EAE7DF] text-[#20201E] font-sans border-t border-[#D8D4CA] flex flex-col justify-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col items-center">
        
        {/* Header - Centered */}
        <div className="max-w-2xl mb-12 text-center flex flex-col items-center">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <span className="w-8 h-[2px] bg-[#C99632]"></span>
            <span className="text-[#C99632] text-xs font-extrabold uppercase tracking-[0.25em]">
              COMMON QUESTIONS
            </span>
            <span className="w-8 h-[2px] bg-[#C99632]"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#20201E]">
            FREQUENTLY ASKED <span className="text-[#C99632]">QUESTIONS</span>
          </h2>
        </div>

        {/* FAQ Accordion List - Centered */}
        <div className="w-full max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;

            return (
              <div
                key={faq.q}
                className="bg-white border border-[#D8D4CA] shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold text-sm md:text-base text-[#20201E] hover:text-[#C99632] transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#C99632] text-[#20201E]' : 'bg-[#F4F2ED] text-[#20201E]'}`}>
                    {isOpen ? <FaMinus className="text-xs" /> : <FaPlus className="text-xs" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-0 text-[#62605A] text-xs md:text-sm leading-relaxed border-t border-neutral-100">
                        <p className="pt-3">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServiceFAQ;
