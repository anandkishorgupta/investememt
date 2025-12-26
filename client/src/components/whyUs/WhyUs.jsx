
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
    icon: <MdAttachMoney size={34} className="text-[#D4AF37]" />,
  },
  {
    title: "Best Planning",
    desc: "We focus on investing in various sectors, providing opportunities for growth and diversification.",
    icon: <MdTrendingUp size={34} className="text-[#D4AF37]" />,
  },
  {
    title: "Reliable Return",
    desc: "We provide professional investment services to help you grow your equity funds and achieve reliable returns.",
    icon: <MdSecurity size={34} className="text-[#D4AF37]" />,
  },
  {
    title: "Trusted & Secure",
    desc: "We prioritize transparency and security for your investments. Trust us to grow your equity funds.",
    icon: <MdLock size={34} className="text-[#D4AF37]" />,
  },
];

// Motion Variants
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
        bg-gradient-to-br from-[#0B0B0B] via-[#111111] to-[#0A0A0A]
        text-[#E7D9A8]
      "
    >
      {/* GOLD TOP LINE */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

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
            <span className="text-sm font-semibold uppercase tracking-widest text-[#B8962E]">
              WHY CHOOSE US
            </span>
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
          </motion.div>

          <motion.h2
            variants={fadeIn("left", 0.1)}
            className="text-4xl md:text-5xl font-bold leading-tight text-[#F5E6B3]"
          >
            Why{" "}
            <span className="relative inline-block text-[#D4AF37]">
              Choose
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#D4AF37]/20 rounded-md"></span>
            </span>{" "}
            Us
          </motion.h2>

          <motion.p
            variants={fadeIn("left", 0.2)}
            className="text-lg text-[#CFC38A] max-w-lg"
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
                boxShadow: "0 20px 35px rgba(212,175,55,0.25)",
              }}
              className="
                bg-gradient-to-br from-[#141414] to-[#0F0F0F]
                border border-[#D4AF37]/20
                rounded-xl p-6
                transition-all duration-300
              "
            >
              <div className="mb-4">{card.icon}</div>

              <h3 className="text-xl font-semibold text-[#F5E6B3] mb-2">
                {card.title}
              </h3>

              <p className="text-sm leading-relaxed text-[#CFC38A]">
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
