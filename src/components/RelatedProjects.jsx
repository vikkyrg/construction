import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const RelatedProjects = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="related-projects" className="py-20 md:py-28 bg-[#EAE7DF] text-[#20201E] font-sans border-y border-[#D8D4CA]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#C99632]"></span>
              <span className="text-[#C99632] text-xs font-extrabold uppercase tracking-[0.25em]">
                PROOF OF CAPABILITY
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#20201E]">
              RELATED <span className="text-[#C99632]">PROJECTS</span>
            </h2>
          </div>

          <Link
            to="/projects"
            className="text-xs font-extrabold uppercase tracking-widest text-[#20201E] hover:text-[#C99632] flex items-center gap-2 transition-colors self-start md:self-auto"
          >
            <span>VIEW ALL PROJECTS</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#D8D4CA] overflow-hidden shadow-sm group hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-[#20201E] text-[#C99632] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 shadow-md">
                  {item.category}
                </span>
              </div>

              <div className="p-8 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-[#20201E] mb-2 group-hover:text-[#C99632] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#62605A] text-xs leading-relaxed mb-3 line-clamp-2 max-w-md">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#62605A] font-semibold">
                    <FaMapMarkerAlt className="text-[#C99632]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <Link
                  to="/projects"
                  className="w-11 h-11 rounded-full bg-[#F4F2ED] border border-[#D8D4CA] flex items-center justify-center text-[#20201E] group-hover:bg-[#C99632] group-hover:text-[#20201E] group-hover:border-[#C99632] transition-all duration-300 shrink-0 ml-4"
                  aria-label="View Project"
                >
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RelatedProjects;
