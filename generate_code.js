const fs = require('fs');
const path = require('path');

const files = {
  'src/data/services.js': `
import { FaHome, FaCity, FaIndustry, FaHammer, FaPaintRoller, FaClipboardList } from 'react-icons/fa';

export const services = [
  { id: '01', title: 'Residential Construction', description: 'Luxury homes and modern residential complexes built with precision.', icon: FaHome },
  { id: '02', title: 'Commercial Construction', description: 'State-of-the-art office buildings and commercial spaces designed for success.', icon: FaCity },
  { id: '03', title: 'Industrial Construction', description: 'Robust industrial facilities engineered for efficiency and scale.', icon: FaIndustry },
  { id: '04', title: 'Renovation & Remodeling', description: 'Transforming existing spaces into modern, functional environments.', icon: FaHammer },
  { id: '05', title: 'Interior & Finishing', description: 'Premium interior finishes with attention to every architectural detail.', icon: FaPaintRoller },
  { id: '06', title: 'Project Management', description: 'Comprehensive oversight ensuring projects are delivered on time and budget.', icon: FaClipboardList }
];
`,
  'src/data/projects.js': `
import projectResidence from '../assets/project-residence.jpg';
import projectCommercial from '../assets/project-commercial.jpg';
import heroConstruction from '../assets/hero-construction.jpg';

export const projects = [
  { id: 1, title: 'The Horizon Residence', category: 'RESIDENTIAL', location: 'Los Angeles', year: '2026', image: projectResidence, description: 'A luxury hillside residence with panoramic ocean views and sustainable architecture.' },
  { id: 2, title: 'Apex Corporate Tower', category: 'COMMERCIAL', location: 'New York', year: '2025', image: projectCommercial, description: 'A 40-story commercial tower featuring an eco-friendly glass facade.' },
  { id: 3, title: 'Lumina Tech Hub', category: 'COMMERCIAL', location: 'San Francisco', year: '2025', image: heroConstruction, description: 'Modern technology campus with collaborative spaces.' },
  { id: 4, title: 'Serenity Villas', category: 'RESIDENTIAL', location: 'Miami', year: '2024', image: projectResidence, description: 'Exclusive waterfront villas.' },
];
`,
  'src/data/testimonials.js': `
export const testimonials = [
  { id: 1, text: "From the initial planning to the final handover, the entire process was handled professionally. The quality exceeded our expectations.", name: "James Carter", role: "CEO, Carter Holdings", rating: 5 },
  { id: 2, text: "Their attention to detail and commitment to safety is unmatched. A true partner in our commercial development.", name: "Sarah Jenkins", role: "Director of Real Estate, Horizon Group", rating: 5 },
  { id: 3, text: "We trusted them with our dream home, and they delivered a masterpiece. The craftsmanship is truly premium.", name: "Michael Chang", role: "Homeowner", rating: 5 },
];
`,
  'src/components/Navbar.jsx': `
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Services', 'Projects', 'Gallery', 'Contact'];

  return (
    <nav className={\`fixed w-full z-50 transition-all duration-300 \${scrolled ? 'bg-dark/95 backdrop-blur-md py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'}\`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className={\`text-2xl font-bold tracking-widest \${scrolled ? 'text-white' : 'text-white'}\`}>
          AURA<span className="text-accent">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a key={link} href={\`#\${link.toLowerCase()}\`} className="text-white/80 hover:text-accent text-sm uppercase tracking-wider transition-colors">
              {link}
            </a>
          ))}
          <a href="#contact" className="px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-dark transition-colors text-sm uppercase tracking-wider font-semibold">
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white text-2xl" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden absolute top-full left-0 w-full bg-dark border-t border-white/10 py-6 px-6 flex flex-col space-y-4 shadow-2xl">
          {links.map((link) => (
            <a key={link} href={\`#\${link.toLowerCase()}\`} onClick={() => setMobileMenu(false)} className="text-white text-lg uppercase tracking-widest border-b border-white/10 pb-2">
              {link}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenu(false)} className="inline-block mt-4 text-center px-6 py-3 bg-accent text-dark font-bold uppercase tracking-widest">
            Get a Quote
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
`,
  'src/components/Hero.jsx': `
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-construction.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img src={heroBg} alt="Construction Site" className="w-full h-full object-cover parallax-bg" />
        <div className="absolute inset-0 bg-dark/60"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center md:text-left pt-20">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-accent text-sm md:text-md uppercase tracking-[0.3em] mb-4 font-semibold">
          Construction • Engineering • Design
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
          BUILDING SPACES<br/>
          THAT STAND<br/>
          THE TEST OF TIME.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 max-w-2xl text-lg md:text-xl mb-10 mx-auto md:mx-0">
          We deliver exceptional construction solutions through precision, craftsmanship, and responsible project management.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
          <a href="#contact" className="px-8 py-4 bg-accent text-dark font-bold uppercase tracking-wider hover:bg-white transition-colors text-center">
            Get a Quote
          </a>
          <a href="#projects" className="px-8 py-4 border border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-dark transition-colors text-center">
            View Projects
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/50 text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-accent absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
`,
  'src/components/Stats.jsx': `
import { motion } from 'framer-motion';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '250+', label: 'Projects Completed' },
  { value: '180+', label: 'Satisfied Clients' },
  { value: '35+', label: 'Expert Professionals' },
];

const Stats = () => {
  return (
    <section className="bg-dark text-white py-16 border-b border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} transition={{ delay: index * 0.1 }}
              className="text-center md:text-left border-l border-white/20 pl-6">
              <h3 className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</h3>
              <p className="text-sm uppercase tracking-widest text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
`,
  'src/components/About.jsx': `
import { motion } from 'framer-motion';
import aboutImg from '../assets/about-construction.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={aboutImg} alt="About Us" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-dark p-8 text-center hidden md:block shadow-2xl">
              <h4 className="text-5xl font-bold text-accent mb-2">15+</h4>
              <p className="text-white text-sm uppercase tracking-widest">Years of<br/>Excellence</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2">
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-8 leading-tight">
              BUILT ON EXPERIENCE.<br/>DRIVEN BY EXCELLENCE.
            </h2>
            <div className="space-y-6 text-secondary text-lg mb-10">
              <p>
                We are a premier construction and engineering firm dedicated to transforming visions into reality. With over a decade of industry expertise, we specialize in delivering high-end residential, commercial, and industrial projects.
              </p>
              <p>
                Our commitment to uncompromising quality, strict safety standards, and modern construction methodologies ensures that every structure we build stands the test of time.
              </p>
            </div>
            <a href="#services" className="inline-block border-b-2 border-dark text-dark font-bold uppercase tracking-widest pb-2 hover:text-accent hover:border-accent transition-colors">
              Discover Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
`,
  'src/components/Services.jsx': `
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-dark text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">What We Build</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">OUR SERVICES</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="group relative p-10 border-b border-r border-white/10 hover:bg-white/5 transition-colors cursor-pointer overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="flex justify-between items-start mb-12">
                  <span className="text-4xl text-white/20 font-bold group-hover:text-accent transition-colors">{service.id}</span>
                  <Icon className="text-3xl text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/60 mb-8">{service.description}</p>
                <div className="flex items-center text-sm uppercase tracking-widest text-accent font-semibold group-hover:translate-x-2 transition-transform">
                  Explore <FaArrowRight className="ml-2" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
`,
  'src/components/Projects.jsx': `
import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const categories = ['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'INDUSTRIAL', 'RENOVATION'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  
  const filteredProjects = activeFilter === 'ALL' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">Selected Projects</p>
            <h2 className="text-4xl md:text-5xl font-bold text-dark">FEATURED WORK</h2>
          </div>
          <div className="flex flex-wrap gap-4 mt-8 md:mt-0">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveFilter(cat)}
                className={\`text-sm font-semibold tracking-widest uppercase transition-colors \${activeFilter === cat ? 'text-accent border-b-2 border-accent' : 'text-secondary hover:text-dark'}\`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-dark">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                <span className="inline-block px-3 py-1 bg-accent text-dark text-xs font-bold uppercase tracking-widest mb-3">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-white/80">{project.location} • {project.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
`,
  'src/components/Process.jsx': `
import { motion } from 'framer-motion';

const steps = [
  { id: '01', title: 'CONSULTATION' },
  { id: '02', title: 'PLANNING' },
  { id: '03', title: 'DESIGN' },
  { id: '04', title: 'CONSTRUCTION' },
  { id: '05', title: 'QUALITY CHECK' },
  { id: '06', title: 'HANDOVER' },
];

const Process = () => {
  return (
    <section className="py-24 bg-dark text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">Our Methodology</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-20">CONSTRUCTION PROCESS</h2>
        
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 -translate-y-1/2 hidden lg:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-dark border border-accent flex items-center justify-center text-xl font-bold text-accent mb-6 z-10">
                  {step.id}
                </div>
                <h4 className="text-sm tracking-widest uppercase font-semibold">{step.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
`,
  'src/components/Testimonials.jsx': `
import { useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  const prev = () => setCurrent(current === 0 ? testimonials.length - 1 : current - 1);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center relative">
          <FaQuoteLeft className="text-6xl text-accent/20 mx-auto mb-8" />
          
          <motion.div 
            key={current}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5 }}
            className="mb-10">
            <p className="text-2xl md:text-3xl font-medium text-dark leading-relaxed mb-8">
              "{testimonials[current].text}"
            </p>
            <div className="flex justify-center text-accent mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => <FaStar key={i} />)}
            </div>
            <h4 className="text-lg font-bold text-dark uppercase tracking-wide">{testimonials[current].name}</h4>
            <p className="text-secondary text-sm">{testimonials[current].role}</p>
          </motion.div>

          <div className="flex justify-center space-x-6">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-dark/20 flex items-center justify-center hover:bg-dark hover:text-white transition-colors">
              <FaChevronLeft />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full border border-dark/20 flex items-center justify-center hover:bg-dark hover:text-white transition-colors">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
`,
  'src/components/CTA.jsx': `
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
`,
  'src/components/Contact.jsx': `
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">Get in Touch</p>
            <h2 className="text-4xl font-bold text-dark mb-10">LET'S BUILD TOGETHER</h2>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">Office Address</h4>
                <p className="text-dark text-lg font-medium">123 Construction Ave,<br/>Suite 500, New York, NY 10001</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">Contact</h4>
                <p className="text-dark text-lg font-medium">1234567890<br/>hello@auraconstruction.com</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">Working Hours</h4>
                <p className="text-dark text-lg font-medium">Mon - Fri: 8:00 AM - 6:00 PM<br/>Sat - Sun: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 bg-white p-8 md:p-12 shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">Name</label>
                <input type="text" required className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-accent bg-transparent transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">Email</label>
                <input type="email" required className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-accent bg-transparent transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">Phone</label>
                <input type="tel" className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-accent bg-transparent transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">Project Type</label>
                <select className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-accent bg-transparent transition-colors">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Renovation</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">Message</label>
                <textarea rows="4" required className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-accent bg-transparent transition-colors resize-none"></textarea>
              </div>
              <div className="md:col-span-2 mt-4">
                <button type="submit" className="px-8 py-4 bg-dark text-white font-bold uppercase tracking-wider hover:bg-accent hover:text-dark transition-colors w-full md:w-auto">
                  Send Inquiry
                </button>
                {formStatus === 'success' && (
                  <p className="mt-4 text-green-600 font-medium">Thank you! Your message has been sent successfully.</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
`,
  'src/components/Footer.jsx': `
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <a href="#" className="text-2xl font-bold tracking-widest inline-block mb-6">
              AURA<span className="text-accent">.</span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed">
              Premium construction, architecture, and engineering services delivering excellence since 2011.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/60 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#projects" className="text-white/60 hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#services" className="text-white/60 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-white/60">Residential</li>
              <li className="text-white/60">Commercial</li>
              <li className="text-white/60">Industrial</li>
              <li className="text-white/60">Renovation</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Social</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="text-white/60 hover:text-accent transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">© 2026 Aura Construction. All Rights Reserved.</p>
          <div className="flex space-x-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
`,
  'src/components/FloatingContact.jsx': `
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      <a href="tel:+15551234567" className="w-12 h-12 bg-dark text-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-dark transition-colors" aria-label="Call Us">
        <FaPhone className="text-xl" />
      </a>
      <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors" aria-label="WhatsApp">
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
};

export default FloatingContact;
`,
  'src/App.jsx': `
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <div className="font-sans text-text">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
`,
  'src/main.jsx': `
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`
};

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join('C:/Users/rvikk/Desktop/construction', filePath);
  ensureDir(path.dirname(fullPath));
  fs.writeFileSync(fullPath, content.trim() + '\\n', 'utf-8');
  console.log(\`Created \${filePath}\`);
}
