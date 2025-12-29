import { motion } from "framer-motion";
import { WHAT_WE_DO_CARDS as items } from "../../Constant/whatWeDo.data";
const WhatWeDo = () => {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = (direction = "left") => ({
    hidden: { opacity: 0, x: direction === "left" ? -60 : 60, y: 20 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  });


  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-amber-900 tracking-tight">
            What We Do
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-amber-800">
            We combine capital, strategy, and partnerships to help individuals
            and businesses grow confidently and sustainably.
          </p>
          <div className="mt-6 w-24 h-1.5 mx-auto bg-gradient-to-r from-amber-600 to-amber-400 rounded-full" />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto"
        >
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                custom={item.direction}
                variants={itemVariants(item.direction)}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="relative rounded-3xl bg-white border border-amber-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Top gradient bar */}
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-500 to-amber-700" />

                  <div className="p-8 flex flex-col items-start">
                    {/* Icon */}
                    <motion.div
                      className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-md"
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-semibold text-amber-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-amber-800 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Hover glow overlay */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-amber-50/40 to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;

