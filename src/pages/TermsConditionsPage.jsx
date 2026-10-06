import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';

const TermsConditionsPage = () => {
  return (
    <div className="bg-[#F4F2ED] text-[#20201E] font-sans">
      <PageHeader 
        title="TERMS & CONDITIONS" 
        subtitle="LEGAL INFO" 
        breadcrumb="TERMS & CONDITIONS" 
      />
      <section className="py-16 md:py-24 container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-[#E2DDD3]">
          <h2 className="text-2xl font-black uppercase mb-6 text-[#20201E] border-l-4 border-[#C99632] pl-4">Terms & Conditions</h2>
          
          <div className="space-y-6 text-[#62605A] text-sm leading-relaxed">
            <p>Welcome to Aura Constructions. By accessing our website and engaging our services, you agree to be bound by the following terms and conditions.</p>
            
            <h3 className="text-lg font-bold text-[#20201E]">1. Service Scope</h3>
            <p>Aura Constructions provides civil engineering, architectural planning, project management, and turnkey interior services. All project timelines and costs are estimates until a formal contract (BOQ) is signed by both parties.</p>
            
            <h3 className="text-lg font-bold text-[#20201E]">2. Quotations and Pricing</h3>
            <p>Any quote generated via our website is provisional. Final project pricing is subject to structural site inspection, soil testing, and finalized architectural blueprints.</p>

            <h3 className="text-lg font-bold text-[#20201E]">3. Intellectual Property</h3>
            <p>All images, project case studies, text, and architectural renders displayed on this website are the intellectual property of Aura Constructions. Unauthorized reproduction is strictly prohibited.</p>

            <h3 className="text-lg font-bold text-[#20201E]">4. Limitation of Liability</h3>
            <p>While we strive for accuracy, the information on this website is provided "as is". We are not liable for direct or indirect damages arising from the use of our digital platforms.</p>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
};

export default TermsConditionsPage;
