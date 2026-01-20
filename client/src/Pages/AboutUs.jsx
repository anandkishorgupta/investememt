import { motion } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                                 ANIMATIONS                                  */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const MISSION_POINTS = [
  {
    title: "Transparent Investment Approach",
    description:
      "Ensuring clarity, confidence, and trust in every financial decision.",
  },
  {
    title: "Inclusive Wealth Creation",
    description:
      "Opening doors to sustainable opportunities for everyone.",
  },
  {
    title: "Innovation-Led Growth",
    description:
      "Adopting future-focused strategies to remain resilient and competitive.",
  },
];

const VISION_POINTS = [
  {
    title: "Trust & Transparency",
    description:
      "Building lasting partnerships through honesty and clarity.",
  },
  {
    title: "Legacy Creation",
    description:
      "Empowering generations with enduring financial strength.",
  },
  {
    title: "Limitless Growth",
    description:
      "Expanding opportunities through innovation and insight.",
  },
];

/* -------------------------------------------------------------------------- */
/*                              REUSABLE COMPONENTS                            */
/* -------------------------------------------------------------------------- */

const InfoCard = ({ title, description, index }) => (
  <motion.div
    variants={fadeUp}
    custom={index}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="p-8 rounded-2xl bg-white/70 border border-amber-200 hover:shadow-lg transition"
  >
    <h3 className="text-lg font-semibold text-amber-600 mb-3">
      {title}
    </h3>
    <p className="text-amber-800 text-sm leading-relaxed">
      {description}
    </p>
  </motion.div>
);

/* -------------------------------------------------------------------------- */
/*                                 MAIN COMPONENT                              */
/* -------------------------------------------------------------------------- */

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden bg-amber-50 text-amber-900">
      {/* Soft Decorative Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

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
          className="max-w-3xl text-amber-800 leading-relaxed text-lg"
        >
          Devshree Venture Pvt. Ltd. identifies, invests in, and nurtures
          exceptional businesses with transformative potential, creating
          sustainable value for society.
        </motion.p>
      </div>

      {/* ================= ABOUT ================= */}
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
            with the resources required for sustainable business growth.
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
            We nurture our partners by providing strategic guidance,
            operational support, and a commitment to integrity and innovation.
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
          {MISSION_POINTS.map((item, index) => (
            <InfoCard
              key={item.title}
              title={item.title}
              description={item.description}
              index={index}
            />
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
          {VISION_POINTS.map((item, index) => (
            <InfoCard
              key={item.title}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
