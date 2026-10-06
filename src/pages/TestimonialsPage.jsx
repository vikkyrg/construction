import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialsPage = () => {
  return (
    <div className="bg-[#F4F2ED] text-[#20201E] font-sans">
      <PageHeader 
        title="CLIENT TESTIMONIALS" 
        subtitle="WHAT THEY SAY" 
        breadcrumb="TESTIMONIALS" 
      />
      <section className="py-16 md:py-24 container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Arjun Mehta', company: 'Tech Hub Corp', text: 'Aura Constructions delivered our corporate IT park 2 months ahead of schedule. Their attention to safety and quality is unmatched.' },
            { name: 'Priya Sharma', company: 'Private Client', text: 'Building our luxury villa was a stress-free experience. The finishing, woodwork, and structural integrity exceeded all our expectations.' },
            { name: 'Ravi Kumar', company: 'Global Logistics', text: 'Their industrial PEB warehouse execution was flawless. Heavy load flooring and crane integrations were done with absolute precision.' },
            { name: 'Sarah Joseph', company: 'Boutique Hotel', text: 'The interior finishing and facade work transformed our legacy property into a modern luxury boutique hotel. Highly recommended.' },
            { name: 'Vikram Singh', company: 'Singh Enterprises', text: 'We hired them for Project Management Consulting and they saved us 12% on raw materials without compromising structural strength.' },
            { name: 'Anjali Desai', company: 'Private Client', text: 'The acoustic treatments and custom Italian marble flooring in our penthouse were executed perfectly. True craftsmen.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 shadow-sm border border-[#E2DDD3] relative">
              <FaQuoteLeft className="text-4xl text-[#C99632]/20 absolute top-6 right-6" />
              <p className="text-[#62605A] leading-relaxed mb-6 italic text-sm">"{item.text}"</p>
              <div>
                <h4 className="font-black uppercase text-sm">{item.name}</h4>
                <p className="text-xs font-bold text-[#C99632]">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </div>
  );
};

export default TestimonialsPage;
