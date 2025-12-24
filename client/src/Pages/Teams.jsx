import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BOD_INFO } from "../Constant/bodInfo";
const Teams = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  return (
    <section className="relative bg-neutral-950 text-neutral-200 min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* GOLD RADIAL GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,0.15),transparent_70%)] pointer-events-none" />
      <motion.div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
        style={{ background: "#D4AF37" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.35, 0.25] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{ background: "#B8962E" }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* HEADER */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg font-semibold text-amber-400 mb-3 tracking-wider"
        >
          Our Team
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
        >
          Board of Directors
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-neutral-400 max-w-3xl mx-auto text-sm md:text-base"
        >
          Our board members are highly experienced professionals dedicated to
          driving growth, innovation, and lasting value for our investors and
          stakeholders.
        </motion.p>
      </div>

      {/* TEAM GRID */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
      >
        {BOD_INFO.map((member, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-neutral-900/70 backdrop-blur border border-amber-50/20 rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
          >
            <div className="relative h-64 overflow-hidden group">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-neutral-50 text-sm text-center">
                  {member.description}
                </p>
              </div>
            </div>
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-amber-400">
                {member.name}
              </h3>
              <p className="text-yellow-500 font-medium mt-1">
                {member.title}
              </p>

              {/* SOCIAL ICONS */}
              <div className="flex justify-center space-x-4 mt-3">
                {member.socials?.facebook && (
                  <a
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-blue-500 transition-colors"
                  >
                    <FaFacebookF />
                  </a>
                )}
                {member.socials?.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-pink-500 transition-colors"
                  >
                    <FaInstagram />
                  </a>
                )}
                {member.socials?.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-blue-700 transition-colors"
                  >
                    <FaLinkedinIn />
                  </a>
                )}
              </div>

             
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Teams;
