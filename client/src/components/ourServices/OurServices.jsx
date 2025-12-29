
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { SERVICES as services } from "../../Constant/services.js";

const OurServices = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const headingVariants = {
    hidden: { opacity: 0, x: -200, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
    }),
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0px 15px 25px rgba(0,0,0,0.1)",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const iconHoverVariants = {
    hover: { scale: 1.2, color: "#4B5563", transition: { duration: 0.3 } }, // subtle dark on hover
  };

  return (
    <section className="flex items-center justify-center min-h-screen relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white/95 via-gray-100 to-white/95 overflow-hidden">
      {/* Soft background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-gray-300/20 to-gray-200/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-gray-300/20 to-gray-200/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={headingVariants}
            className="flex items-center mb-4"
          >
            <div className="w-8 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 mr-3"></div>
            <span className="text-gray-700 font-medium">Our Services</span>
          </motion.div>

          <motion.h2
            initial="hidden"
            animate={controls}
            variants={headingVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Our Provided Services.
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="bg-white rounded-3xl p-6 shadow-md border border-gray-200 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden"
              >
                {/* Icon */}
                <motion.div
                  className="mb-4 w-16 h-16 rounded-2xl bg-gray-200 flex items-center justify-center shadow-sm"
                  variants={iconHoverVariants}
                >
                  <Icon className="text-gray-700 w-8 h-8" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-2">{service.description}</p>

                {/* Hover overlay */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gray-200/20" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;





