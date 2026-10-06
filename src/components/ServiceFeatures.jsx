import { FaAward, FaShieldAlt, FaUsers, FaCubes } from 'react-icons/fa';

const featureIconsMap = [FaAward, FaShieldAlt, FaUsers, FaCubes];

const ServiceFeatures = ({ features }) => {
  if (!features || features.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-[#20201E] text-white font-sans">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-6 h-[2px] bg-[#C99632]"></span>
            <span className="text-[#C99632] text-xs font-extrabold uppercase tracking-[0.25em]">
              THE STANDARDS WE MAINTAIN
            </span>
            <span className="w-6 h-[2px] bg-[#C99632]"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
            KEY BENEFITS & <span className="text-[#C99632]">STANDARDS</span>
          </h2>
        </div>

        {/* 4 Feature Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => {
            const IconComponent = featureIconsMap[idx % featureIconsMap.length];

            return (
              <div
                key={item.title}
                className="bg-[#2A2A28] p-8 border border-neutral-800 shadow-md flex flex-col justify-between hover:border-[#C99632]/60 transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#C99632]/10 border border-[#C99632]/30 flex items-center justify-center text-[#C99632] mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="text-xl" />
                  </div>

                  <h3 className="text-base font-extrabold uppercase tracking-wider text-white mb-2 group-hover:text-[#C99632] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-neutral-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServiceFeatures;
