import { motion } from 'framer-motion';
import aboutImg from '../assets/about-construction.jpg';
import resImg from '../assets/project-residence.jpg';
import { FaArrowRight, FaHardHat, FaShieldAlt, FaUsers, FaGem } from 'react-icons/fa';


const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ══════════════════════════════
               LEFT — IMAGE COLLAGE
          ══════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="w-full lg:w-[48%] flex-shrink-0"
          >
            {/* Outer wrapper gives the collage a fixed aspect ratio */}
            <div className="relative w-full" style={{ paddingBottom: '90%' }}>


              {/* Gold accent square — top-left, behind everything */}
              <div className="absolute top-0 left-[8%] z-0"
                style={{ width: '32%', height: '38%', backgroundColor: '#C99632' }}
              />

              {/* Main image — offset right & slightly down from gold square */}
              <div className="absolute z-10 shadow-2xl overflow-hidden"
                style={{ top: '5%', left: '18%', right: '6%', height: '68%' }}>
                <img src={aboutImg} alt="Construction site" className="w-full h-full object-cover object-center" />
              </div>

              {/* Gold thin vertical bar — right side of composition */}
              <div className="absolute z-20"
                style={{ top: '18%', right: '2%', width: '5px', height: '30%', backgroundColor: '#C99632' }}
              />

              {/* Bottom row: secondary image (left) + stats box (right) */}
              {/* Secondary building image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute z-20 overflow-hidden shadow-xl"
                style={{ bottom: '0', left: '4%', width: '38%', height: '33%' }}
              >
                <img src={resImg} alt="Modern building" className="w-full h-full object-cover" />
              </motion.div>

              {/* Dark stats box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute z-20 shadow-2xl flex flex-col justify-center pl-8 pr-4 py-6 overflow-hidden"
                style={{ bottom: '0', left: 'calc(4% + 38% + 2%)', right: '6%', height: '33%', backgroundColor: '#1C1B18' }}
              >
                {/* Diagonal hatch watermark */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
                  style={{ backgroundImage: 'repeating-linear-gradient(45deg, #C99632 0px, #C99632 1px, transparent 1px, transparent 11px)' }}
                />
                <h4 className="font-extrabold text-accent leading-none mb-2 relative z-10"
                  style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>15+</h4>
                <p className="text-white/75 font-bold uppercase tracking-[0.22em] leading-[1.8] relative z-10"
                  style={{ fontSize: 'clamp(8px, 1vw, 11px)' }}>
                  Years of<br />Excellence
                </p>
              </motion.div>

              {/* Dot grid — behind stats box area */}
              <div className="absolute z-10 opacity-40"
                style={{
                  bottom: '3%', right: '1%', width: '80px', height: '80px',
                  backgroundImage: 'radial-gradient(circle, #C99632 1.5px, transparent 1.5px)',
                  backgroundSize: '9px 9px'
                }}
              />

            </div>
          </motion.div>

          {/* ══════════════════════════════
               RIGHT — CONTENT
          ══════════════════════════════ */}
          <div className="w-full lg:w-[52%]">

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65 }}>
              {/* Label */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-[1px] bg-accent" />
                <p className="text-accent text-[11px] font-bold uppercase tracking-[0.25em]">Who We Are</p>
              </div>
              {/* Heading */}
              <h2 className="font-extrabold text-dark leading-[1.08] tracking-tight mb-6"
                style={{ fontSize: 'clamp(30px, 3.8vw, 52px)' }}>
                BUILT ON <span className="text-accent">EXPERIENCE</span>.<br />
                DRIVEN BY EXCELLENCE.
              </h2>
            </motion.div>

            {/* Body text */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}>
              <div className="space-y-4 text-text-secondary text-[14px] leading-[1.75] mb-10 max-w-[520px]">
                <p>We are a premier construction and engineering firm dedicated to transforming visions into reality. With over a decade of industry expertise, we specialize in delivering high-end residential, commercial, and industrial projects.</p>
                <p>Our commitment to uncompromising quality, strict safety standards, and modern construction methodologies ensures that every structure we build stands the test of time.</p>
              </div>
            </motion.div>

            {/* Icons row */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.2 }}
              className="grid grid-cols-4 gap-4 mb-10 pb-10 border-b border-border-light">
              {[
                { icon: FaHardHat, label: 'Quality\nCraftsmanship' },
                { icon: FaShieldAlt, label: 'Safety\nFirst' },
                { icon: FaUsers, label: 'Experienced\nTeam' },
                { icon: FaGem, label: 'Innovative\nSolutions' },
              ].map(({ icon: Icon, label }, i) => (
                <div key={i} className={`flex flex-col items-center md:items-start ${i < 3 ? 'md:border-r border-border-light' : ''} pr-2`}>
                  <Icon className="text-accent mb-3" style={{ fontSize: '26px', opacity: 0.9 }} />
                  <h5 className="text-dark font-extrabold uppercase leading-tight text-center md:text-left whitespace-pre-line"
                    style={{ fontSize: '9.5px', letterSpacing: '0.18em' }}>{label}</h5>
                </div>
              ))}
            </motion.div>

            {/* Buttons row */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-8 relative">
              <a href="#services"
                className="inline-flex items-center gap-3 bg-accent text-white font-bold uppercase px-8 py-4 hover:bg-dark transition-colors duration-300"
                style={{ fontSize: '11px', letterSpacing: '0.15em' }}>
                Discover Our Services <FaArrowRight />
              </a>


            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;




