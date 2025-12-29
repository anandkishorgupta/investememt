

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import {
//   FaChartLine,
//   FaEnvelope,
//   FaFacebookF,
//   FaGem,
//   FaInstagram,
//   FaMapMarkerAlt,
//   FaStar
// } from "react-icons/fa";

// import { Link } from "react-router-dom";
// import devShreeLogo from "../../assets/logos/devshree.jpeg";

// const Footer = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsVisible(window.scrollY > 100);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//         duration: 0.6,
//       },
//     },
//   };

//   const statVariants = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
//   };

//   const links = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Portfolio", path: "/portfolio" },
//     { name: "Teams", path: "/teams" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const socialLinks = [
//     {
//       icon: FaInstagram,
//       link: "https://www.instagram.com/venturedevshree?igsh=MWk3MGg2NXM3cGRqZA==",
//     },
//     {
//       icon: FaFacebookF,
//       link: "https://www.facebook.com/share/19SE363xvm/",
//     },
//   ];

//   return (
//     <footer className="relative bg-[#FAF8F3] text-[#3A2F1C] pt-14 pb-12 overflow-hidden">

//       {/* Soft Gold Background */}
//       <motion.div
//         className="absolute w-[500px] h-[500px] rounded-full bg-amber-300/20 blur-[120px] top-[-200px] left-[-200px]"
//         animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
//         transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute w-[400px] h-[400px] rounded-full bg-amber-200/20 blur-[120px] bottom-[-150px] right-[-150px]"
//         animate={{ x: [0, -80, 0], y: [0, 50, 0] }}
//         transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative max-w-7xl mx-auto px-4">
//         {/* Grid */}
//         <motion.div
//           className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {/* Brand */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             <div className="flex items-center space-x-4">
//               <div className="relative">
//                 <div className="w-16 h-16 rounded-full border border-[#E6D8A5] overflow-hidden">
//                   <img src={devShreeLogo} className="w-full h-full object-cover" />
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-2xl font-bold text-[#3A2F1C]">
//                   Devshree
//                   <span className="block text-lg bg-gradient-to-r from-[#B8962E] to-[#D4AF37] bg-clip-text text-transparent">
//                     Venture Pvt. Ltd.
//                   </span>
//                 </h3>
//                 <div className="h-1 w-16 mt-2 bg-gradient-to-r from-[#D4AF37] to-transparent" />
//               </div>
//             </div>

//             <p className="text-[#6B5E3B] text-sm leading-relaxed">
//               We identify, invest in, and nurture exceptional businesses with
//               transformative potential, creating sustainable value.
//             </p>

//             <div className="space-y-3 pt-4">
//               {[
//                 { icon: FaStar, text: "Strategic Vision" },
//                 { icon: FaGem, text: "Risk Management" },
//                 { icon: FaChartLine, text: "Growth Focus" },
//               ].map(({ icon: Icon, text }, i) => (
//                 <div key={i} className="flex items-center space-x-3">
//                   <div className="w-8 h-8 rounded-lg bg-[#FFF3D6] border border-[#E6D8A5] flex items-center justify-center">
//                     <Icon className="text-[#B8962E] text-sm" />
//                   </div>
//                   <span className="text-sm font-medium text-[#3A2F1C]">
//                     {text}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Navigation */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             <h4 className="text-lg font-semibold text-[#3A2F1C]">Navigation</h4>
//             <ul className="space-y-3">
//               {links.map((link) => (
//                 <motion.li key={link.name} whileHover={{ x: 6 }}>
//                   <Link
//                     to={link.path}
//                     className="text-[#6B5E3B] hover:text-[#B8962E] transition"
//                   >
//                     {link.name}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             <h4 className="text-lg font-semibold text-[#3A2F1C]">Contact</h4>
//             <div className="space-y-4">
//               {[
//                 {
//                   icon: FaMapMarkerAlt,
//                   title: "HEADQUARTERS",
//                   lines: ["Radhe Radhe, Kathmandu", "Nepal"],
//                 },
//                 {
//                   icon: FaEnvelope,
//                   title: "INQUIRIES",
//                   lines: ["venture.devshree@gmail.com"],
//                 },
//               ].map(({ icon: Icon, title, lines }, i) => (
//                 <div key={i} className="flex items-start space-x-3">
//                   <div className="w-10 h-10 rounded-lg bg-[#FFF3D6] border border-[#E6D8A5] flex items-center justify-center">
//                     <Icon className="text-[#B8962E]" />
//                   </div>
//                   <div>
//                     <p className="text-xs font-semibold text-[#6B5E3B]">
//                       {title}
//                     </p>
//                     {lines.map((line, idx) => (
//                       <p key={idx} className="text-sm text-[#3A2F1C]">
//                         {line}
//                       </p>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Stats */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             <h4 className="text-lg font-semibold text-[#3A2F1C]">
//               Our Footprint
//             </h4>
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { value: "15+", label: "Portfolio Companies" },
//                 { value: "1", label: "Years Experience" },
//                 { value: "3", label: "Sectors" },
//                 { value: "100%", label: "Commitment" },
//               ].map((stat, i) => (
//                 <motion.div
//                   key={i}
//                   variants={statVariants}
//                   className="p-4 rounded-xl bg-[#FFF9EC] border border-[#E6D8A5]"
//                 >
//                   <div className="text-2xl font-bold text-[#3A2F1C]">
//                     {stat.value}
//                   </div>
//                   <div className="text-sm text-[#6B5E3B] mt-1">
//                     {stat.label}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Bottom */}
//         <div className="pt-8 border-t border-[#E6D8A5]">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//             <div className="flex items-center space-x-4">
//               {socialLinks.map(({ icon: Icon, link }, i) => (
//                 <motion.a
//                   key={i}
//                   href={link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.15 }}
//                   className="w-10 h-10 rounded-lg border border-[#E6D8A5] flex items-center justify-center"
//                 >
//                   <Icon className="text-[#B8962E]" />
//                 </motion.a>
//               ))}
//             </div>

//             <div className="text-center">
//               <p className="text-sm text-[#6B5E3B]">
//                 © {new Date().getFullYear()} Devshree Venture Pvt. Ltd. All rights
//                 reserved.
//               </p>
//               <p className="text-xs text-[#8B7A44] mt-1">
//                 Crafting Excellence • Building Legacy • Creating Value
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaChartLine,
  FaEnvelope,
  FaFacebookF,
  FaGem,
  FaInstagram,
  FaMapMarkerAlt,
  FaStar
} from "react-icons/fa";
import { Link } from "react-router-dom";
import devShreeLogo from "../../assets/logos/devshree.jpeg";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.6 },
    },
  };

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Teams", path: "/teams" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: FaInstagram, link: "https://www.instagram.com/venturedevshree?igsh=MWk3MGg2NXM3cGRqZA==" },
    { icon: FaFacebookF, link: "https://www.facebook.com/share/19SE363xvm/" },
  ];

  return (
    <footer className="relative  text-amber-900 pt-14 pb-12 overflow-hidden">
      {/* Soft Gold Background */}
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
        {/* Grid */}
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
              <div className="relative">
                <div className="w-16 h-16 rounded-full border border-amber-300 overflow-hidden">
                  <img src={devShreeLogo} className="w-full h-full object-cover" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-amber-900">
                  Devshree
                  <span className="block text-lg bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                    Venture Pvt. Ltd.
                  </span>
                </h3>
                <div className="h-1 w-16 mt-2 bg-gradient-to-r from-amber-400 to-transparent" />
              </div>
            </div>

            <p className="text-amber-700 text-sm leading-relaxed">
              We identify, invest in, and nurture exceptional businesses with
              transformative potential, creating sustainable value.
            </p>

            <div className="space-y-3 pt-4">
              {[
                { icon: FaStar, text: "Strategic Vision" },
                { icon: FaGem, text: "Risk Management" },
                { icon: FaChartLine, text: "Growth Focus" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center">
                    <Icon className="text-amber-600 text-sm" />
                  </div>
                  <span className="text-sm font-medium text-amber-900">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold text-amber-900">Navigation</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 6 }}>
                  <Link
                    to={link.path}
                    className="text-amber-700 hover:text-amber-600 transition"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold text-amber-900">Contact</h4>
            <div className="space-y-4">
              {[
                { icon: FaMapMarkerAlt, title: "HEADQUARTERS", lines: ["Radhe Radhe, Kathmandu", "Nepal"] },
                { icon: FaEnvelope, title: "INQUIRIES", lines: ["venture.devshree@gmail.com"] },
              ].map(({ icon: Icon, title, lines }, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center">
                    <Icon className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-amber-700">{title}</p>
                    {lines.map((line, idx) => (
                      <p key={idx} className="text-sm text-amber-900">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold text-amber-900">Our Footprint</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "15+", label: "Portfolio Companies" },
                { value: "1", label: "Years Experience" },
                { value: "3", label: "Sectors" },
                { value: "100%", label: "Commitment" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={statVariants}
                  className="p-4 rounded-xl bg-amber-50 border border-amber-300"
                >
                  <div className="text-2xl font-bold text-amber-900">{stat.value}</div>
                  <div className="text-sm text-amber-700 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <div className="pt-8 border-t border-amber-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-4">
              {socialLinks.map(({ icon: Icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
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
                © {new Date().getFullYear()} Devshree Venture Pvt. Ltd. All rights reserved.
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
