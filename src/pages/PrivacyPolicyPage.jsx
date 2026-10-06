import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-[#F4F2ED] text-[#20201E] font-sans">
      <PageHeader 
        title="PRIVACY POLICY" 
        subtitle="LEGAL INFO" 
        breadcrumb="PRIVACY POLICY" 
      />
      <section className="py-16 md:py-24 container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-[#E2DDD3]">
          <h2 className="text-2xl font-black uppercase mb-6 text-[#20201E] border-l-4 border-[#C99632] pl-4">Privacy Policy</h2>
          
          <div className="space-y-6 text-[#62605A] text-sm leading-relaxed">
            <p>At Aura Constructions, your privacy is critically important to us. This policy details how we collect, use, and protect your personal data when you interact with our website and services.</p>
            
            <h3 className="text-lg font-bold text-[#20201E]">1. Information Collection</h3>
            <p>We collect information such as your name, email address, phone number, and project details when you request a quote, use our contact forms, or subscribe to our newsletters.</p>
            
            <h3 className="text-lg font-bold text-[#20201E]">2. Use of Information</h3>
            <p>The information we collect is strictly used to provide architectural consulting, construction quotations, project updates, and customer support. We do not sell your personal data to third parties.</p>

            <h3 className="text-lg font-bold text-[#20201E]">3. Data Security</h3>
            <p>We implement industry-standard digital security protocols to protect your submitted blueprints, financial data, and personal contact information against unauthorized access.</p>

            <h3 className="text-lg font-bold text-[#20201E]">4. Cookies</h3>
            <p>Our website uses minimal cookies to track site analytics and improve user experience. You may disable cookies through your browser settings without affecting the core functionality of our site.</p>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
};

export default PrivacyPolicyPage;
