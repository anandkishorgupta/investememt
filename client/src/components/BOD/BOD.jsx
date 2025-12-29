import { motion } from "framer-motion";
import { BOD_INFO } from "../../Constant/bodInfo";

import { containerVariants } from "./bod.motion ";
import BODCard from "./bodCard";

const BOD = () => {
  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden relative">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center mb-4">
          <div className="w-8 h-0.5 bg-yellow-600 mr-3" />
          <h2 className="text-yellow-600 font-semibold text-lg">
            Our Team
          </h2>
          <div className="w-8 h-0.5 bg-yellow-600 ml-3" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-amber-700">
          Board of Directors
        </h1>
      </div>

      {/* Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
      >
        {BOD_INFO.map((director, index) => (
          <BODCard key={index} director={director} />
        ))}
      </motion.div>
    </div>
  );
};

export default BOD;
