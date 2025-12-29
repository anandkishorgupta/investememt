

import { LazyMotion, domAnimation, motion } from "framer-motion";
import { FiChevronRight, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { portfolioData } from "../Constant/portfolioInfo";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20, mass: 0.8 },
  },
};

const shimmerKeyframes = `
@keyframes shimmer {
  0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
  100% { transform: translateX(200%) translateY(200%) rotate(45deg); }
}
`;

const goldGradient = "linear-gradient(90deg, #FFD700, #D4AF37)";

const truncateText = (text, maxLength = 100) => {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + ".....";
};

const Portfolio = () => {
  const renderMetaItem = (Icon, text) => (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <Icon className="text-[#D4AF37]" />
      {text}
    </div>
  );

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white text-gray-800">
        <style>{shimmerKeyframes}</style>

        {/* Header */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_65%)]" />
          <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold"
              style={{
                background: goldGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Portfolio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 max-w-2xl mx-auto text-gray-600"
            >
              A refined selection of long-term investments and landmark ventures
              across multiple industries.
            </motion.p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {portfolioData.map((item) => (
              <motion.article
                key={item.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl flex flex-col"
              >
                {/* Gold hover overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-br from-[#FFD700]/30 via-[#D4AF37]/20 to-transparent" />
                </div>

                {/* Image */}
                <div className="relative h-56 overflow-hidden z-10">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
                  <span className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-white/90 text-[#D4AF37] backdrop-blur">
                    {item.category}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-grow relative z-20">
                  <h3 className="text-lg font-semibold group-hover:text-[#D4AF37] transition">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {truncateText(item.description, 100)}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-[#FFD700]/20 text-[#D4AF37] border border-[#D4AF37]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 space-y-2">
                    {renderMetaItem(FiMapPin, item.location)}
                  </div>

                  {/* Button */}
                  <div className="mt-auto pt-6">
                    <Link
                      to={`/portfolio/${item.id}`}
                      className="relative flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium bg-white border border-[#D4AF37]/30 transition-all duration-300 overflow-hidden
hover:bg-gradient-to-r hover:from-[#FFD700]/40 hover:via-[#D4AF37]/20 hover:to-[#FFD700]/40 hover:text-gray-900 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                    >
                      <span className="relative z-10 font-medium">
                        View Details
                      </span>
                      <FiChevronRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 hover:translate-x-2 hover:scale-110" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </div>
    </LazyMotion>
  );
};

export default Portfolio;
