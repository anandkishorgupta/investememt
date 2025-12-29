import { motion } from "framer-motion";
import { FiArrowLeft, FiMapPin } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { portfolioData } from "../Constant/portfolioInfo";

const PortfolioDetails = () => {
  const { id } = useParams();
  const company = portfolioData.find((p) => p.id === Number(id));

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center text-neutral-500">
        Company not found
      </div>
    );
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-neutral-50 min-h-screen text-neutral-900">
      {/* Back Button */}
       <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-6 left-6 z-50"
      >
        <Link
          to="/portfolio"
          className="mt-15 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur border border-neutral-200 text-sm hover:text-amber-600 transition"
        >
          <FiArrowLeft /> Back
        </Link>
      </motion.div>

      {/* Main Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Image on left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="rounded-3xl overflow-hidden shadow-lg"
        >
          <img
            src={company.image}
            alt={company.name}
            className="w-full h-full object-cover rounded-3xl"
          />
        </motion.div>

        {/* Content on right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-2 px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium"
          >
            {company.category}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-semibold"
          >
            {company.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-600 leading-relaxed"
          >
            {company.description}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {company.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full bg-white border border-amber-200 text-amber-700 text-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 text-neutral-700">
              <FiMapPin className="text-amber-600" /> {company.location}
            </div>
            {/* <div className="flex items-center gap-3 text-neutral-700">
              <FiUsers className="text-amber-600" /> {company.clients}
            </div>
            <div className="flex items-center gap-3 text-neutral-700">
              <FiAward className="text-amber-600" /> {company.investment}
            </div> */}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default PortfolioDetails;
