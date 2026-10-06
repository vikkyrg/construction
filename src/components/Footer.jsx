import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaArrowRight } from 'react-icons/fa';
import logoImg from '../assets/logo.png';
import footerBgImg from '../assets/gallery-apartment.jpg';
import { servicesList } from '../data/servicesData';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3500);
    }
  };

  return (
    <footer className="relative bg-[#20201E] text-white pt-20 pb-8 overflow-hidden font-sans border-t border-neutral-800/60">
      
      {/* Right Side Background Image & Gradient Fade Overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 pointer-events-none overflow-hidden z-0">
        <img
          src={footerBgImg}
          alt="Building Background"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity filter brightness-110 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#20201E] via-[#20201E]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#20201E]/80 via-transparent to-[#20201E]/70" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-0 pb-16 border-b border-neutral-800/80">
          
          {/* Column 1: Logo, Tagline & Social Links */}
          <div className="lg:col-span-3 lg:pr-8 lg:border-r lg:border-neutral-800/80 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-block mb-6">
                <img src={logoImg} alt="AURA CONSTRUCTIONS" className="h-10 md:h-11 object-contain" />
              </Link>
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-8 max-w-xs font-normal">
                Building stronger communities through innovative construction, exceptional quality, and lasting relationships.
              </p>
            </div>

            {/* Social Media Outlined Circles */}
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-neutral-700/80 text-neutral-400 hover:text-white hover:border-[#C99632] hover:bg-[#C99632]/10 flex items-center justify-center transition-all duration-300 text-xs"
              >
                <FaFacebookF />
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-neutral-700/80 text-neutral-400 hover:text-white hover:border-[#C99632] hover:bg-[#C99632]/10 flex items-center justify-center transition-all duration-300 text-xs"
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-neutral-700/80 text-neutral-400 hover:text-white hover:border-[#C99632] hover:bg-[#C99632]/10 flex items-center justify-center transition-all duration-300 text-xs"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="#" 
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-neutral-700/80 text-neutral-400 hover:text-white hover:border-[#C99632] hover:bg-[#C99632]/10 flex items-center justify-center transition-all duration-300 text-xs"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Column 2: COMPANY */}
          <div className="lg:col-span-2 lg:px-8 lg:border-r lg:border-neutral-800/80">
            <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">
              COMPANY
            </h4>
            <div className="w-6 h-[2px] bg-[#C99632] mt-2 mb-6"></div>
            
            <ul className="space-y-3 text-xs md:text-sm">
              <li>
                <Link to="/about" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 group">
                  <span className="text-[#C99632] text-[10px] font-bold group-hover:translate-x-1 transition-transform">&gt;</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 group">
                  <span className="text-[#C99632] text-[10px] font-bold group-hover:translate-x-1 transition-transform">&gt;</span>
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 group">
                  <span className="text-[#C99632] text-[10px] font-bold group-hover:translate-x-1 transition-transform">&gt;</span>
                  <span>Our Process</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 group">
                  <span className="text-[#C99632] text-[10px] font-bold group-hover:translate-x-1 transition-transform">&gt;</span>
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 group">
                  <span className="text-[#C99632] text-[10px] font-bold group-hover:translate-x-1 transition-transform">&gt;</span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: SERVICES */}
          <div className="lg:col-span-2 lg:px-8 lg:border-r lg:border-neutral-800/80">
            <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">
              SERVICES
            </h4>
            <div className="w-6 h-[2px] bg-[#C99632] mt-2 mb-6"></div>

            <ul className="space-y-3 text-xs md:text-sm">
              {servicesList.map((srv) => (
                <li key={srv.id}>
                  <Link to={`/services/${srv.slug}`} className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 group">
                    <span className="text-[#C99632] text-[10px] font-bold group-hover:translate-x-1 transition-transform">&gt;</span>
                    <span>{srv.shortTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: QUICK LINKS */}
          <div className="lg:col-span-2 lg:px-8 lg:border-r lg:border-neutral-800/80">
            <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">
              QUICK LINKS
            </h4>
            <div className="w-6 h-[2px] bg-[#C99632] mt-2 mb-6"></div>

            <ul className="space-y-3 text-xs md:text-sm">
              <li>
                <Link to="/" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 group">
                  <span className="text-[#C99632] text-[10px] font-bold group-hover:translate-x-1 transition-transform">&gt;</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/careers" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 group">
                  <span className="text-[#C99632] text-[10px] font-bold group-hover:translate-x-1 transition-transform">&gt;</span>
                  <span>Careers</span>
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 group">
                  <span className="text-[#C99632] text-[10px] font-bold group-hover:translate-x-1 transition-transform">&gt;</span>
                  <span>Testimonials</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 group">
                  <span className="text-[#C99632] text-[10px] font-bold group-hover:translate-x-1 transition-transform">&gt;</span>
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 group">
                  <span className="text-[#C99632] text-[10px] font-bold group-hover:translate-x-1 transition-transform">&gt;</span>
                  <span>Terms &amp; Conditions</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 group">
                  <span className="text-[#C99632] text-[10px] font-bold group-hover:translate-x-1 transition-transform">&gt;</span>
                  <span>FAQ</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: STAY CONNECTED & Subscription Form */}
          <div className="lg:col-span-3 lg:pl-8">
            <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">
              STAY CONNECTED
            </h4>
            <div className="w-6 h-[2px] bg-[#C99632] mt-2 mb-6"></div>

            <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-6 font-normal">
              Subscribe to get the latest project updates and construction insights.
            </p>

            {/* Form Input Group */}
            <form onSubmit={handleSubscribe} className="flex items-center w-full max-w-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full bg-[#181818]/90 border border-neutral-700/80 border-r-0 px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#C99632] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#C99632] hover:bg-[#b58324] text-[#20201E] font-bold px-4 py-3.5 text-xs flex items-center justify-center transition-colors shrink-0"
              >
                <FaArrowRight className="text-sm" />
              </button>
            </form>

            {subscribed && (
              <p className="mt-3 text-xs text-[#C99632] font-medium">
                Thank you for subscribing!
              </p>
            )}
          </div>

        </div>

        {/* Bottom Copyright & Footer Policy Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-normal">
          <p>
            &copy; 2026 <strong className="text-white font-bold">Aura Constructions</strong>. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-neutral-400">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-neutral-700">|</span>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <span className="text-neutral-700">|</span>
            <Link to="/contact" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
