// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.15,
//       duration: 0.8,
//       ease: "easeOut",
//     },
//   }),
// };

// const goldText =
//   "bg-gradient-to-r from-[#C9A44C] via-[#FFD700] to-[#B08D2C] bg-clip-text text-transparent";

// const AboutUs = () => {
//   return (
//     <section className="bg-[#FAF8F3] text-gray-800 overflow-hidden">

//       {/* ===== HERO ===== */}
//       <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20">
//         <motion.h1
//           variants={fadeUp}
//           initial="hidden"
//           animate="show"
//           className={`text-4xl md:text-6xl font-semibold mb-6 ${goldText}`}
//         >
//           Devshree Venture Pvt. Ltd.
//         </motion.h1>

//         <motion.p
//           variants={fadeUp}
//           custom={1}
//           initial="hidden"
//           animate="show"
//           className="max-w-3xl text-gray-700 leading-relaxed text-lg"
//         >
//           Devshree Venture Pvt. Ltd. identifies, invests in, and nurtures
//           exceptional businesses with transformative potential, creating
//           sustainable value for society while fostering long-term success.
//         </motion.p>

//         {/* Soft Gold Glow */}
//         <div className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-[#D4AF37]/20 rounded-full blur-[120px]" />
//       </div>

//       {/* ===== ABOUT SECTION ===== */}
//       <div className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-16">
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//         >
//           <h2 className={`text-3xl font-semibold mb-4 ${goldText}`}>
//             About Us
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             We serve institutional and individual investors by connecting them
//             with the resources required for sustainable business growth. Our
//             approach blends expertise, trust, and long-term strategic thinking.
//           </p>
//         </motion.div>

//         <motion.div
//           variants={fadeUp}
//           custom={1}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="rounded-2xl p-8 bg-[#FFF9EC] border border-[#E7D9A8]"
//         >
//           <p className="text-gray-700 leading-relaxed">
//             We nurture our partners by providing strategic guidance, operational
//             support, and a commitment to integrity, innovation, and sustainable
//             success.
//           </p>
//         </motion.div>
//       </div>

//       {/* ===== MISSION ===== */}
//       <div className="max-w-7xl mx-auto px-6 pb-24">
//         <motion.h2
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className={`text-3xl font-semibold mb-12 ${goldText}`}
//         >
//           Mission
//         </motion.h2>

//         <div className="grid md:grid-cols-3 gap-10">
//           {[
//             {
//               title: "Transparent Investment Approach",
//               desc: "Ensuring clarity, confidence, and trust in every financial decision.",
//             },
//             {
//               title: "Inclusive Wealth Creation",
//               desc: "Opening doors to sustainable opportunities for everyone.",
//             },
//             {
//               title: "Innovation-Led Growth",
//               desc: "Adopting future-focused strategies to remain resilient and competitive.",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               custom={i}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               className="p-8 rounded-2xl bg-[#FFFDF6] border border-[#E6D8A5] hover:shadow-lg transition"
//             >
//               <h3 className="text-lg font-semibold text-[#C9A44C] mb-3">
//                 {item.title}
//               </h3>
//               <p className="text-gray-700 text-sm leading-relaxed">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ===== VISION ===== */}
//       <div className="max-w-7xl mx-auto px-6 pb-28">
//         <motion.h2
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className={`text-3xl font-semibold mb-12 ${goldText}`}
//         >
//           Vision
//         </motion.h2>

//         <div className="grid md:grid-cols-3 gap-10">
//           {[
//             {
//               title: "Trust & Transparency",
//               desc: "Building lasting partnerships through honesty and clarity.",
//             },
//             {
//               title: "Legacy Creation",
//               desc: "Empowering generations with enduring financial strength.",
//             },
//             {
//               title: "Limitless Growth",
//               desc: "Expanding opportunities through innovation and insight.",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               custom={i}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               className="p-8 rounded-2xl bg-[#FFF9EC] border border-[#E7D9A8]"
//             >
//               <h3 className="text-lg font-semibold text-[#C9A44C] mb-3">
//                 {item.title}
//               </h3>
//               <p className="text-gray-700 text-sm leading-relaxed">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;



import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const goldText =
  "bg-gradient-to-r from-amber-600 via-amber-400 to-amber-500 bg-clip-text text-transparent";

const AboutUs = () => {
  return (
    <section className="bg-amber-50 text-amber-900 overflow-hidden relative">

      {/* Soft Gold Glows */}
     <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

      {/* ===== HERO ===== */}
      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className={`text-4xl md:text-6xl font-semibold mb-6 ${goldText}`}
        >
          Devshree Venture Pvt. Ltd.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
          className="max-w-3xl text-amber-800 leading-relaxed text-lg"
        >
          Devshree Venture Pvt. Ltd. identifies, invests in, and nurtures
          exceptional businesses with transformative potential, creating
          sustainable value for society while fostering long-term success.
        </motion.p>
      </div>

      {/* ===== ABOUT SECTION ===== */}
      <div className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl font-semibold mb-4 ${goldText}`}>
            About Us
          </h2>
          <p className="text-amber-800 leading-relaxed">
            We serve institutional and individual investors by connecting them
            with the resources required for sustainable business growth. Our
            approach blends expertise, trust, and long-term strategic thinking.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-2xl p-8 bg-amber-100 border border-amber-200"
        >
          <p className="text-amber-800 leading-relaxed">
            We nurture our partners by providing strategic guidance, operational
            support, and a commitment to integrity, innovation, and sustainable
            success.
          </p>
        </motion.div>
      </div>

      {/* ===== MISSION ===== */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`text-3xl font-semibold mb-12 ${goldText}`}
        >
          Mission
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Transparent Investment Approach",
              desc: "Ensuring clarity, confidence, and trust in every financial decision.",
            },
            {
              title: "Inclusive Wealth Creation",
              desc: "Opening doors to sustainable opportunities for everyone.",
            },
            {
              title: "Innovation-Led Growth",
              desc: "Adopting future-focused strategies to remain resilient and competitive.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/70 border border-amber-200 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-amber-600 mb-3">
                {item.title}
              </h3>
              <p className="text-amber-800 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== VISION ===== */}
      <div className="max-w-7xl mx-auto px-6 pb-28">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`text-3xl font-semibold mb-12 ${goldText}`}
        >
          Vision
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Trust & Transparency",
              desc: "Building lasting partnerships through honesty and clarity.",
            },
            {
              title: "Legacy Creation",
              desc: "Empowering generations with enduring financial strength.",
            },
            {
              title: "Limitless Growth",
              desc: "Expanding opportunities through innovation and insight.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/70 border border-amber-200"
            >
              <h3 className="text-lg font-semibold text-amber-600 mb-3">
                {item.title}
              </h3>
              <p className="text-amber-800 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
