import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaArrowRight, FaShieldAlt } from 'react-icons/fa';
import buildingImg from '../assets/about-construction.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus(null);
      setFormData({ name: '', email: '', phone: '', projectType: 'Residential', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative bg-[#F2EFE8] overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>


      <div className="relative z-10 max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

        {/* ── LEFT COLUMN ── */}
        <div className="relative flex flex-col justify-between px-8 md:px-16 pt-16 pb-0 overflow-hidden">

          {/* Top text content */}
          <div>
            {/* GET IN TOUCH tag */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-[#C49632]" />
              <span className="text-[#C49632] text-[10px] font-bold uppercase tracking-[0.3em]">
                GET IN TOUCH
              </span>
            </div>

            {/* Main Heading */}
            <h2
              className="font-black uppercase leading-[1.0] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)' }}
            >
              <span className="text-[#1B1B1B] block">LET'S BUILD</span>
              <span className="text-[#C49632] block">TOGETHER</span>
            </h2>

            {/* Description */}
            <p className="text-neutral-500 text-sm leading-relaxed mb-12 max-w-sm">
              Have a project in mind? Get in touch with our team and let's turn your vision into reality. We're here to help you every step of the way.
            </p>

            {/* ── Contact Info Items ── */}
            <div className="space-y-7">
              {/* Office Address */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#E8E2D4] flex items-center justify-center shrink-0 mt-0.5">
                  <FaMapMarkerAlt className="text-[#C49632] text-sm" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-neutral-400 mb-1">
                    OFFICE ADDRESS
                  </p>
                  <p className="text-[#1B1B1B] font-semibold text-sm leading-snug">
                    123 Construction Ave,<br />
                    Suite 500, New York, NY 10001
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#E8E2D4] flex items-center justify-center shrink-0 mt-0.5">
                  <FaPhoneAlt className="text-[#C49632] text-sm" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-neutral-400 mb-1">
                    CONTACT
                  </p>
                  <p className="text-[#1B1B1B] font-semibold text-sm leading-snug">
                    +1 (555) 123-4567<br />
                    <a href="mailto:hello@auraconstruction.com" className="hover:text-[#C49632] transition-colors duration-200">
                      hello@auraconstruction.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#E8E2D4] flex items-center justify-center shrink-0 mt-0.5">
                  <FaClock className="text-[#C49632] text-sm" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-neutral-400 mb-1">
                    WORKING HOURS
                  </p>
                  <p className="text-[#1B1B1B] font-semibold text-sm leading-snug">
                    Mon - Fri: 8:00 AM - 6:00 PM<br />
                    Sat - Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>

        {/* ── RIGHT COLUMN — Form Card ── */}
        <div className="flex items-start justify-center px-6 md:px-10 lg:px-12 py-14 lg:py-16">
          <div className="w-full max-w-xl bg-white border border-[#E5DFD4] shadow-sm" style={{ padding: '2.5rem 2.75rem' }}>

            {/* Card Top Header */}
            <div className="flex items-center justify-between pb-7 mb-8 border-b border-[#ECDFD4]">
              <div>
                <h3 className="text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] text-[#1B1B1B]">
                  SEND US A MESSAGE
                </h3>
                <div className="w-7 h-[2px] bg-[#C49632] mt-2" />
              </div>

              {/* Hardhat badge */}
              <div className="flex items-center gap-2.5 border-l border-neutral-200 pl-5">
                {/* Hardhat SVG */}
                <svg className="w-6 h-6 text-[#C49632] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 00-9 9h18a9 9 0 00-9-9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 14h18v1.5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 15.5V14z" />
                  <line x1="12" y1="3" x2="12" y2="7" strokeLinecap="round" />
                </svg>
                <p className="text-[9px] font-bold uppercase tracking-wider text-neutral-400 leading-tight">
                  WE'LL GET BACK TO YOU<br />
                  <span className="text-neutral-500">WITHIN 24 HOURS.</span>
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-7">

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-[#1B1B1B] mb-2">
                    NAME <span className="text-[#C49632]">*</span>
                  </label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange}
                    placeholder="Your full name" required
                    className="w-full bg-transparent border-0 border-b border-[#D5CFC5] py-2 text-sm text-[#1B1B1B] placeholder:text-neutral-400 focus:outline-none focus:border-[#C49632] transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-[#1B1B1B] mb-2">
                    EMAIL <span className="text-[#C49632]">*</span>
                  </label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange}
                    placeholder="your@email.com" required
                    className="w-full bg-transparent border-0 border-b border-[#D5CFC5] py-2 text-sm text-[#1B1B1B] placeholder:text-neutral-400 focus:outline-none focus:border-[#C49632] transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Phone + Project Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-[#1B1B1B] mb-2">
                    PHONE <span className="text-[#C49632]">*</span>
                  </label>
                  <input
                    type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    placeholder="+1 (555) 123-4567" required
                    className="w-full bg-transparent border-0 border-b border-[#D5CFC5] py-2 text-sm text-[#1B1B1B] placeholder:text-neutral-400 focus:outline-none focus:border-[#C49632] transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-[#1B1B1B] mb-2">
                    PROJECT TYPE <span className="text-[#C49632]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="projectType" value={formData.projectType} onChange={handleChange}
                      className="w-full bg-transparent border-0 border-b border-[#D5CFC5] py-2 text-sm text-[#1B1B1B] appearance-none focus:outline-none focus:border-[#C49632] transition-colors duration-200 cursor-pointer pr-6"
                    >
                      <option className="bg-white">Residential</option>
                      <option className="bg-white">Commercial</option>
                      <option className="bg-white">Industrial</option>
                      <option className="bg-white">Renovation</option>
                    </select>
                    <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-neutral-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-widest text-[#1B1B1B] mb-2">
                  MESSAGE <span className="text-[#C49632]">*</span>
                </label>
                <textarea
                  name="message" rows="4" value={formData.message} onChange={handleChange}
                  placeholder="Tell us about your project..." required
                  className="w-full bg-transparent border-0 border-b border-[#D5CFC5] py-2 text-sm text-[#1B1B1B] placeholder:text-neutral-400 focus:outline-none focus:border-[#C49632] transition-colors duration-200 resize-none"
                />
              </div>

              {/* Footer: Submit + Privacy */}
              <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <button
                  type="submit"
                  className="flex items-center gap-3 bg-[#1B1B1B] hover:bg-[#C49632] text-white text-[11px] font-extrabold uppercase tracking-[0.2em] px-7 py-3.5 transition-all duration-300 group"
                >
                  SEND INQUIRY
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <div className="flex items-center gap-2.5">
                  <FaShieldAlt className="text-[#C49632] text-xl shrink-0" />
                  <div>
                    <p className="text-[9.5px] font-extrabold uppercase tracking-wider text-[#1B1B1B] leading-tight">
                      WE RESPECT YOUR PRIVACY.
                    </p>
                    <p className="text-[9.5px] text-neutral-400">Your information is safe with us.</p>
                  </div>
                </div>
              </div>

              {formStatus === 'success' && (
                <div className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold uppercase tracking-wider">
                  ✓ Message sent! We'll get back to you within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
