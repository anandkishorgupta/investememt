
import { motion } from "framer-motion";
import {
  MdAttachMoney,
  MdLock,
  MdSecurity,
  MdTrendingUp,
} from "react-icons/md";
import { useInView } from "react-intersection-observer";

const cards = [
  {
    title: "Safe Investment",
    desc: "Devshree Venture provides safe investment options with a focus on consistent returns and risk management.",
    icon: <MdAttachMoney size={34} className="text-amber-700" />,
  },
  {
    title: "Best Planning",
    desc: "We focus on investing in various sectors, providing opportunities for growth and diversification.",
    icon: <MdTrendingUp size={34} className="text-amber-700" />,
  },
  {
    title: "Reliable Return",
    desc: "We provide professional investment services to help you grow your equity funds and achieve reliable returns.",
    icon: <MdSecurity size={34} className="text-amber-700" />,
  },
  {
    title: "Trusted & Secure",
    desc: "We prioritize transparency and security for your investments. Trust us to grow your equity funds.",
    icon: <MdLock size={34} className="text-amber-700" />,
  },
];

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
    y: direction === "up" ? 40 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 26,
      delay,
    },
  },
});

const WhyChooseUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="
        relative overflow-hidden
        py-20 px-5 md:px-10 lg:px-16
        bg-gradient-to-br from-amber-50 via-white to-amber-50
        text-amber-900
      "
    >
      {/* top golden line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* TEXT SECTION */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="space-y-6"
        >
          <motion.div
            variants={fadeIn("left")}
            className="flex items-center gap-3"
          >
            {/* <span className="text-sm font-semibold uppercase tracking-widest text-amber-700">
              WHY CHOOSE US
            </span>
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span> */}
          </motion.div>

          <motion.h2
            variants={fadeIn("left", 0.1)}
            className="text-4xl md:text-5xl font-bold leading-tight text-amber-900"
          >
            Why{" "}
            <span className="relative inline-block text-amber-800">
              Choose
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-amber-300/40 rounded-md"></span>
            </span>{" "}
            Us
          </motion.h2>

          <motion.p
            variants={fadeIn("left", 0.2)}
            className="text-lg text-amber-800 max-w-lg"
          >
            We help our clients grow wealth through disciplined strategies,
            professional planning, and long-term investment vision.
          </motion.p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn("right", i * 0.1)}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 35px rgba(251,191,36,0.35)",
              }}
              className="
                bg-white
                border border-amber-200
                rounded-xl p-6
                transition-all duration-300
              "
            >
              <div className="mb-4">{card.icon}</div>

              <h3 className="text-xl font-semibold text-amber-900 mb-2">
                {card.title}
              </h3>

              <p className="text-sm leading-relaxed text-amber-800">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
