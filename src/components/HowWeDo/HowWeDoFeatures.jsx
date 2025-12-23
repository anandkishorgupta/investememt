import { motion } from "framer-motion";

const HowWeDoFeatures = ({ features, animate }) => {
  return (
    <div className="mt-8 space-y-5">
      {features.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={animate ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="flex items-start space-x-4"
        >
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#FFF8E6] border border-[#D4AF37]/30">
            <span className="text-[#D4AF37] font-bold text-lg">✓</span>
          </div>
          <span className="text-[#1A1A1A] text-lg font-medium">
            {feature}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default HowWeDoFeatures;
