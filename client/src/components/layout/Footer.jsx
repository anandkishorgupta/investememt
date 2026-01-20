import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaChartLine,
  FaEnvelope,
  FaFacebookF,
  FaGem,
  FaInstagram,
  FaMapMarkerAlt,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import devShreeLogo from "../../assets/logos/devshree.jpeg";

/* -------------------------------------------------------------------------- */
/*                                  CONSTANTS                                 */
/* -------------------------------------------------------------------------- */

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Teams", path: "/teams" },
  { name: "Contact", path: "/contact" },
];

const SOCIAL_LINKS = [
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/venturedevshree?igsh=MWk3MGg2NXM3cGRqZA==",
  },
  {
    icon: FaFacebookF,
    url: "https://www.facebook.com/share/19SE363xvm/",
  },
  {
    icon: FaWhatsapp,
    url: "https://wa.me/9779851443514",
  },
];

const BRAND_HIGHLIGHTS = [
  { icon: FaStar, label: "Strategic Vision" },
  { icon: FaGem, label: "Risk Management" },
  { icon: FaChartLine, label: "Growth Focus" },
];


const CONTACT_INFO = [
  {
    icon: FaMapMarkerAlt,
    title: "HEADQUARTERS",
    label: "Radhe Radhe, Kathmandu, Nepal",
    link: "https://www.google.com/maps?q=27.672679,85.40293",
  },
  {
    icon: FaEnvelope,
    title: "INQUIRIES",
    label: "venture.devshree@gmail.com",
    link: "mailto:venture.devshree@gmail.com",
  },
  {
    icon: FaWhatsapp,
    title: "WHATSAPP",
    label: "+977 9851443514",
    link: "https://wa.me/9779851443514",
  },
];
const STATS = [
  { value: "15+", label: "Portfolio Companies" },
  { value: "1", label: "Year  Experience" },
  { value: "3", label: "Sectors" },
  { value: "100%", label: "Commitment" },
];

/* -------------------------------------------------------------------------- */
/*                                 ANIMATIONS                                 */
/* -------------------------------------------------------------------------- */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

const statVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */

const Footer = () => {
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative pt-14 pb-12 overflow-hidden text-amber-900">
      {/* Decorative Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] top-[-200px] left-[-200px]"
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-amber-200/20 blur-[120px] bottom-[-150px] right-[-150px]"
        animate={{ x: [0, -80, 0], y: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* MAIN GRID */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full border border-amber-300 overflow-hidden">
                <img
                  src={devShreeLogo}
                  alt="Devshree Venture Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  Devshree
                  <span className="block text-lg bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                    Venture Pvt. Ltd.
                  </span>
                </h3>
                <div className="h-1 w-16 mt-2 bg-gradient-to-r from-amber-400 to-transparent" />
              </div>
            </div>

            <p className="text-sm text-amber-700 leading-relaxed">
              We identify, invest in, and nurture exceptional businesses with
              transformative potential, creating sustainable value.
            </p>

            <div className="space-y-3 pt-4">
              {BRAND_HIGHLIGHTS.map(({ icon: Icon, label }, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center">
                    <Icon className="text-amber-600 text-sm" />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ name, path }) => (
                <li key={name} className="group">
                  <Link
                    to={path}
                    className="flex items-center text-sm font-medium text-amber-700 hover:text-amber-600 transition-colors"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* CONTACT */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold">Contact</h4>

            {CONTACT_INFO.map(({ icon: Icon, title, label, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center">
                  <Icon className="text-amber-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-amber-700">
                    {title}
                  </p>
                  <p className="text-sm group-hover:underline">{label}</p>
                </div>
              </a>
            ))}
          </motion.div>
          {/* Stats */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold">Our Footprint</h4>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={statVariants}
                  className="relative p-4 rounded-xl bg-amber-50 border border-amber-300"
                >
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-amber-700 mt-1">
                    {stat.label}
                  </div>

                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <div className="pt-8 border-t border-amber-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-4">
              {SOCIAL_LINKS.map(({ icon: Icon, url }, idx) => (
                <motion.a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  className="w-10 h-10 rounded-lg border border-amber-300 flex items-center justify-center"
                >
                  <Icon className="text-amber-600" />
                </motion.a>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm text-amber-700">
                © {new Date().getFullYear()} Devshree Venture Pvt. Ltd. All rights
                reserved.
              </p>
              <p className="text-xs text-amber-600 mt-1">
                Crafting Excellence • Building Legacy • Creating Value
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;