import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import logoImg from '../assets/logo.png';
import { servicesList } from '../data/servicesData';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services', hasDropdown: true },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT', path: '/contact' }
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans ${
        scrolled 
          ? 'bg-[#20201E]/95 backdrop-blur-md py-3.5 shadow-xl border-b border-neutral-800/80' 
          : isHomePage
            ? 'bg-transparent py-6 border-b border-transparent'
            : 'bg-[#20201E]/90 backdrop-blur-md py-4 border-b border-neutral-800/60'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
        
        {/* Logo Left */}
        <Link to="/" className="flex items-center group shrink-0">
          <img 
            src={logoImg} 
            alt="AURA CONSTRUCTIONS" 
            className="h-10 md:h-12 object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-7 xl:space-x-10">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.hasDropdown && location.pathname.startsWith('/services'));

            if (item.hasDropdown) {
              return (
                <div 
                  key={item.name}
                  className="relative group py-2 flex items-center"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-[0.18em] transition-colors duration-200 drop-shadow-sm ${
                      isActive ? 'text-[#C99632]' : 'text-neutral-200 hover:text-[#C99632]'
                    }`}
                  >
                    <span>{item.name}</span>
                    <FaChevronDown className={`text-[10px] transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-[#C99632]' : 'text-neutral-300'}`} />
                  </Link>

                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute -bottom-3 left-0 right-0 h-[2px] bg-[#C99632]" 
                    />
                  )}

                  {/* Elegant Desktop Dropdown Menu */}
                  <AnimatePresence>
                    {servicesDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[340px] bg-[#161616] border-t-2 border-[#C99632] shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-2 text-[#F3EFE7]"
                      >
                        <div className="px-5 py-3 border-b border-white/5 mb-2 flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C99632]">
                            OUR SERVICES
                          </span>
                          <Link to="/services" className="text-[10px] font-bold text-neutral-400 hover:text-white uppercase tracking-wider transition-colors">
                            VIEW ALL &rarr;
                          </Link>
                        </div>

                        {servicesList.map((srv) => (
                          <Link
                            key={srv.id}
                            to={`/services/${srv.slug}`}
                            onClick={() => setServicesDropdown(false)}
                            className="flex items-center justify-between px-5 py-3 hover:bg-[#20201E] transition-all duration-300 group relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#C99632]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="flex items-center gap-4 relative z-10">
                              <span className="text-[10px] font-mono font-bold text-neutral-500 group-hover:text-[#C99632] transition-colors">
                                {srv.id}
                              </span>
                              <span className="text-sm font-semibold text-neutral-300 group-hover:text-white transition-colors">
                                {srv.title}
                              </span>
                            </div>
                            <FaArrowRight className="text-[10px] opacity-0 group-hover:opacity-100 text-[#C99632] transform -translate-x-3 group-hover:translate-x-0 transition-all relative z-10" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <div key={item.name} className="relative py-2 flex items-center">
                <Link
                  to={item.path}
                  className={`text-xs font-extrabold uppercase tracking-[0.18em] transition-colors duration-200 drop-shadow-sm ${
                    isActive ? 'text-[#C99632]' : 'text-neutral-200 hover:text-[#C99632]'
                  }`}
                >
                  {item.name}
                </Link>

                {/* Active Indicator Line */}
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute -bottom-3 left-0 right-0 h-[2px] bg-[#C99632]" 
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Right CTA Area (Separator + GET A QUOTE Button) */}
        <div className="hidden lg:flex items-center">
          <div className="h-6 w-[1px] bg-white/25 mx-5 xl:mx-7"></div>

          <Link
            to="/contact"
            className="bg-[#C99632] hover:bg-[#b58324] text-[#20201E] font-extrabold text-xs uppercase tracking-[0.15em] px-6 py-3.5 transition-all duration-300 flex items-center gap-2.5 shadow-md group shrink-0"
          >
            <span>GET A QUOTE</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white text-xl p-2 hover:text-[#C99632] transition-colors focus:outline-none" 
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#161616] border-t border-neutral-800 px-6 py-6 flex flex-col space-y-4 shadow-2xl overflow-hidden"
          >
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.name} className="border-b border-neutral-800/60 pb-2">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full text-neutral-200 hover:text-[#C99632] text-sm font-bold uppercase tracking-widest py-2 flex items-center justify-between"
                    >
                      <span>{item.name}</span>
                      <FaChevronDown className={`text-xs text-neutral-400 transition-transform ${mobileServicesOpen ? 'rotate-180 text-[#C99632]' : ''}`} />
                    </button>

                    {/* Mobile Services Accordion */}
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-2.5 pt-2 pb-1"
                        >
                          {servicesList.map((srv) => (
                            <Link
                              key={srv.id}
                              to={`/services/${srv.slug}`}
                              onClick={() => {
                                setMobileMenu(false);
                                setMobileServicesOpen(false);
                              }}
                              className="flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-[#C99632] py-1"
                            >
                              <span className="text-[#C99632] font-bold text-[10px]">{srv.id}</span>
                              <span>{srv.title}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  onClick={() => setMobileMenu(false)} 
                  className="text-neutral-200 hover:text-[#C99632] text-sm font-bold uppercase tracking-widest py-2 border-b border-neutral-800/60 flex items-center justify-between"
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}

            <Link 
              to="/contact" 
              onClick={() => setMobileMenu(false)} 
              className="mt-4 text-center px-6 py-3.5 bg-[#C99632] text-[#20201E] font-extrabold text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2"
            >
              <span>GET A QUOTE</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
