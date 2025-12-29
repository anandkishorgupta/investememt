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
//   "bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8962E] bg-clip-text text-transparent";

// const AboutUs = () => {
//   return (
//     <section className="bg-neutral-950 text-neutral-200 overflow-hidden">
//       {/* ================= HERO ================= */}
//       <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20">
//         <motion.h1
//           variants={fadeUp}
//           initial="hidden"
//           animate="show"
//           className={`text-4xl md:text-6xl font-semibold mb-6 ${goldText}`}
//         >
//           Saarathi Equity Fund
//         </motion.h1>

//         <motion.p
//           variants={fadeUp}
//           custom={1}
//           initial="hidden"
//           animate="show"
//           className="max-w-3xl text-neutral-400 leading-relaxed text-lg"
//         >
//           Saarathi Equity Fund is a private equity fund manager promoted by
//           professionals from diverse business and academic backgrounds. We
//           build strong, thriving businesses that deliver lasting value to
//           society while nurturing long-term investor success.
//         </motion.p>

//         {/* Decorative gold blur */}
//         <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
//       </div>

//       {/* ================= ABOUT CONTENT ================= */}
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
//           <p className="text-neutral-400 leading-relaxed">
//             We serve institutional and individual investors by connecting them
//             with a series of resources required for sustainable business growth.
//             Our approach combines professional expertise, strategic insight,
//             and continuous support to ensure long-term value creation.
//           </p>
//         </motion.div>

//         <motion.div
//           variants={fadeUp}
//           custom={1}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="border border-neutral-800 rounded-2xl p-8 bg-neutral-900/60 backdrop-blur"
//         >
//           <p className="text-neutral-300 leading-relaxed">
//             We nurture and care for our clients by supporting investee
//             companies with value-added resources, strategic guidance, and a
//             commitment to transparency, innovation, and trust.
//           </p>
//         </motion.div>
//       </div>

//       {/* ================= MISSION ================= */}
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
//               desc: "We prioritize trust and clarity, ensuring investors have full visibility into their financial journey.",
//             },
//             {
//               title: "Inclusive Wealth Creation",
//               desc: "Making investment opportunities accessible to individuals from all backgrounds.",
//             },
//             {
//               title: "Innovation-Driven Strategies",
//               desc: "Leveraging technology and insights to thrive in a dynamic global economy.",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               custom={i}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/70 hover:border-[#D4AF37]/40 transition"
//             >
//               <h3 className="text-lg font-semibold text-[#FFD700] mb-3">
//                 {item.title}
//               </h3>
//               <p className="text-neutral-400 text-sm leading-relaxed">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ================= VISION ================= */}
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
//               title: "Trust, Transparency & Innovation",
//               desc: "Redefining investment strategies with openness and cutting-edge solutions.",
//             },
//             {
//               title: "Empowering Financial Legacies",
//               desc: "Providing resources to secure and grow wealth across generations.",
//             },
//             {
//               title: "Breaking Barriers to Prosperity",
//               desc: "Creating limitless opportunities for sustainable financial growth.",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               variants={fadeUp}
//               custom={i}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               className="p-8 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800"
//             >
//               <h3 className="text-lg font-semibold text-[#FFD700] mb-3">
//                 {item.title}
//               </h3>
//               <p className="text-neutral-400 text-sm leading-relaxed">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ================= FOOTER STRIP ================= */}
//       <div className="border-t border-neutral-800 py-10 text-center">
//         <p className="text-neutral-500 text-sm">
//           © 2025 Saarathi Equity Fund · Developed by Aarawan
//         </p>
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
  "bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#B8962E] bg-clip-text text-transparent";

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 overflow-hidden">
      {/* ================= HERO ================= */}
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
          className="max-w-3xl text-gray-600 leading-relaxed text-lg"
        >
          Devshree Venture Pvt. Ltd. identifies, invests in, and nurtures
          exceptional businesses with transformative potential, creating
          sustainable value for society while fostering long-term success for
          investors.
        </motion.p>

        {/* Decorative gold blur */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      </div>

      {/* ================= ABOUT CONTENT ================= */}
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
          <p className="text-gray-600 leading-relaxed">
            We serve institutional and individual investors by connecting them
            with the resources required for sustainable business growth. Our
            approach combines professional expertise, strategic insight, and
            continuous support to ensure long-term value creation.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="border border-gray-200 rounded-2xl p-8 bg-white/70 backdrop-blur"
        >
          <p className="text-gray-600 leading-relaxed">
            We nurture and care for our clients by supporting investee
            companies with value-added resources, strategic guidance, and a
            commitment to transparency, innovation, and trust.
          </p>
        </motion.div>
      </div>

      {/* ================= MISSION ================= */}
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
              desc: "We prioritize trust and clarity, ensuring investors have full visibility into their financial journey.",
            },
            {
              title: "Inclusive Wealth Creation",
              desc: "Making investment opportunities accessible to individuals from all backgrounds.",
            },
            {
              title: "Innovation-Driven Strategies",
              desc: "Leveraging technology and insights to thrive in a dynamic global economy.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-gray-200 bg-white/80 hover:border-[#D4AF37]/40 transition"
            >
              <h3 className="text-lg font-semibold text-[#D4AF37] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= VISION ================= */}
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
              title: "Trust, Transparency & Innovation",
              desc: "Redefining investment strategies with openness and cutting-edge solutions.",
            },
            {
              title: "Empowering Financial Legacies",
              desc: "Providing resources to secure and grow wealth across generations.",
            },
            {
              title: "Breaking Barriers to Prosperity",
              desc: "Creating limitless opportunities for sustainable financial growth.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-[#D4AF37] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= FOOTER STRIP ================= */}
      <div className="border-t border-gray-200 py-10 text-center">
        <p className="text-gray-500 text-sm">
          © 2025 Devshree Venture Pvt. Ltd. · Developed by Aarawan
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
