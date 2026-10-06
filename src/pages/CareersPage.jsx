import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';
import { FaArrowRight } from 'react-icons/fa';

const CareersPage = () => {
  return (
    <div className="bg-[#F4F2ED] text-[#20201E] font-sans">
      <PageHeader 
        title="CAREERS" 
        subtitle="JOIN OUR TEAM" 
        breadcrumb="CAREERS" 
      />
      <section className="py-16 md:py-24 container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">Build Your <span className="text-[#C99632]">Future</span> With Us</h2>
            <p className="text-[#62605A] max-w-2xl mx-auto">We are always looking for passionate, skilled professionals to join our engineering, architecture, and construction teams.</p>
          </div>
          
          <div className="grid gap-6">
            {[
              { title: 'Senior Civil Engineer', location: 'Chennai, TN', type: 'Full-Time' },
              { title: 'Project Manager', location: 'Bangalore, KA', type: 'Full-Time' },
              { title: 'Site Supervisor', location: 'Hyderabad, TS', type: 'Contract' },
            ].map((job, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 shadow-sm border border-[#E2DDD3] flex flex-col md:flex-row items-start md:items-center justify-between hover:border-[#C99632] hover:shadow-lg transition-all group">
                <div>
                  <h3 className="text-xl font-bold uppercase mb-2 group-hover:text-[#C99632] transition-colors">{job.title}</h3>
                  <div className="flex gap-4 text-xs font-bold text-[#62605A]">
                    <span>📍 {job.location}</span>
                    <span>🕒 {job.type}</span>
                  </div>
                </div>
                <button className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-extrabold text-white bg-[#20201E] px-6 py-3 hover:bg-[#C99632] transition-colors">
                  APPLY NOW <FaArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
};

export default CareersPage;
