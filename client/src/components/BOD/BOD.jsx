// components/BOD.jsx
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BOD_INFO } from "../../Constant/bodInfo";
import BODCard from "./bodCard";
import DirectorModal from "./DirectorModal";

const BOD = () => {
  const [selectedDirector, setSelectedDirector] = useState(null);

  const openModal = (director) => setSelectedDirector(director);
  const closeModal = () => setSelectedDirector(null);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white to-amber-50/20">
      {/* Ambient Glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-amber-200/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-amber-100/10 rounded-full blur-3xl" />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent"
        >
          Board of Directors
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-amber-800 max-w-3xl mx-auto text-base md:text-lg"
        >
          Visionary leaders shaping the future through innovation, integrity, and impact.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-wrap gap-8 max-w-7xl mx-auto justify-center">
        {BOD_INFO.map((director, index) => (
          <BODCard
            key={index}
            director={director}
            index={index}
            onClick={() => openModal(director)}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedDirector && (
          <DirectorModal director={selectedDirector} onClose={closeModal} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default BOD;
