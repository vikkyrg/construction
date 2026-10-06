import { motion } from 'framer-motion';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '250+', label: 'Projects Completed' },
  { value: '180+', label: 'Satisfied Clients' },
  { value: '35+', label: 'Expert Professionals' },
];

const Stats = () => {
  return (
    <section className="bg-dark text-white py-16 border-b border-white/15">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} transition={{ delay: index * 0.1 }}
              className="text-center md:text-left border-l border-white/15 pl-6">
              <h3 className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</h3>
              <p className="text-sm uppercase tracking-widest text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
