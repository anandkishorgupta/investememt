// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import {
//   FaChevronUp,
//   FaMapMarkerAlt,
//   FaPhone,
//   FaEnvelope,
//   FaLinkedinIn,
//   FaTwitter,
//   FaInstagram,
//   FaBuilding,
//   FaChartLine,
//   FaShieldAlt,
//   FaLightbulb,
//   FaGem,
//   FaCrown,
//   FaStar,
// } from "react-icons/fa";

// const Footer = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
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
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: { duration: 0.5 },
//     },
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="relative bg-white text-gray-800 pt-5 pb-10 px-4 overflow-hidden border-t border-gray-100">
//       {/* Luxury Top Border */}
//       <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-200" />

//       {/* Golden Glow Effect */}
//       <motion.div
//         className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-yellow-400/5 via-yellow-600/3 to-transparent mix-blend-soft-light filter blur-[120px] pointer-events-none"
//         animate={{
//           x: [0, 100, 0],
//           y: [0, -50, 0],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       {/* Animated Golden Bubbles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-gradient-to-br from-amber-200/10 to-yellow-500/5 border border-yellow-200/20"
//             initial={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight + 500,
//               width: 10 + Math.random() * 40,
//               height: 10 + Math.random() * 40,
//               opacity: 0,
//             }}
//             animate={{
//               y: "-100vh",
//               opacity: [0, 0.6, 0],
//               rotate: 360,
//               scale: [0.8, 1.2, 0.8],
//             }}
//             transition={{
//               duration: 15 + Math.random() * 15,
//               repeat: Infinity,
//               delay: Math.random() * 10,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>

//       {/* Golden Particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(30)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500"
//             initial={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight + 300,
//               opacity: 0,
//             }}
//             animate={{
//               y: "-100vh",
//               opacity: [0, 1, 0],
//             }}
//             transition={{
//               duration: 8 + Math.random() * 12,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>

//       {/* Subtle Geometric Pattern */}
//       <div className="absolute inset-0 opacity-3 bg-[radial-gradient(circle_at_20%_80%,#d4af37_0%,transparent_50%),radial-gradient(circle_at_80%_20%,#fbbf24_0%,transparent_50%)] pointer-events-none" />

//       <div className="relative max-w-7xl mx-auto">
//         {/* Main Footer Content */}
//         <motion.div
//           className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//         >
//           {/* Company Identity */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             <div className="flex items-center space-x-4">
//               <div className="relative">
//                 <motion.div
//                   className="w-16 h-16 rounded-xl border border-amber-200 bg-gradient-to-br from-white to-amber-50 shadow-lg flex items-center justify-center"
//                   whileHover={{
//                     rotate: 360,
//                     borderColor: "#d4af37",
//                     boxShadow: "0 10px 40px rgba(212, 175, 55, 0.2)",
//                   }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <FaCrown className="text-2xl text-amber-600" />
//                 </motion.div>
//                 {/* Golden Ring Effect */}
//                 <div className="absolute -inset-1 rounded-xl border border-amber-300/30 blur-sm" />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold tracking-tight text-gray-900">
//                   Saarathi
//                   <span className="block bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent text-lg font-semibold">
//                     Equity Fund
//                   </span>
//                 </h3>
//                 <div className="h-px w-16 bg-gradient-to-r from-amber-500 via-yellow-500 to-transparent mt-2" />
//               </div>
//             </div>

//             <p className="text-gray-600 leading-relaxed text-sm">
//               We identify, invest in, and nurture exceptional businesses with
//               transformative potential, creating sustainable value for all
//               stakeholders.
//             </p>

//             {/* Core Values */}
//             <div className="space-y-3 pt-4">
//               <div className="flex items-center space-x-3 group cursor-pointer">
//                 <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-amber-100 group-hover:to-yellow-100 transition-all duration-300">
//                   <FaStar className="text-amber-600 text-sm" />
//                 </div>
//                 <span className="text-gray-700 text-sm font-medium group-hover:text-amber-700 transition-colors">
//                   Strategic Vision
//                 </span>
//               </div>
//               <div className="flex items-center space-x-3 group cursor-pointer">
//                 <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-amber-100 group-hover:to-yellow-100 transition-all duration-300">
//                   <FaGem className="text-amber-600 text-sm" />
//                 </div>
//                 <span className="text-gray-700 text-sm font-medium group-hover:text-amber-700 transition-colors">
//                   Risk Management
//                 </span>
//               </div>
//               <div className="flex items-center space-x-3 group cursor-pointer">
//                 <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-amber-100 group-hover:to-yellow-100 transition-all duration-300">
//                   <FaChartLine className="text-amber-600 text-sm" />
//                 </div>
//                 <span className="text-gray-700 text-sm font-medium group-hover:text-amber-700 transition-colors">
//                   Growth Focus
//                 </span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             <h4 className="text-lg font-semibold text-gray-900 tracking-tight">
//               Navigation
//             </h4>
//             <ul className="space-y-3">
//               {[
//                 "Our Approach",
//                 "Investment Strategy",
//                 "Portfolio Companies",
//                 "Team",
//                 "Insights",
//                 "Contact",
//               ].map((link) => (
//                 <motion.li
//                   key={link}
//                   whileHover={{ x: 5 }}
//                   className="group cursor-pointer"
//                 >
//                   <a
//                     href="#"
//                     className="text-gray-600 hover:text-amber-700 text-sm font-medium transition-colors duration-300 flex items-center"
//                   >
//                     <motion.span
//                       className="w-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"
//                       whileHover={{ width: "1rem" }}
//                     />
//                     {link}
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact Information */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             <h4 className="text-lg font-semibold text-gray-900 tracking-tight">
//               Contact
//             </h4>
//             <div className="space-y-4">
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className="flex items-start space-x-3 group cursor-pointer"
//               >
//                 <div className="relative">
//                   <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 flex items-center justify-center group-hover:border-amber-400 group-hover:shadow-lg transition-all duration-300">
//                     <FaMapMarkerAlt className="text-amber-600 text-sm" />
//                   </div>
//                   <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-amber-300/20 to-yellow-300/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>
//                 <div>
//                   <p className="text-amber-600 text-xs font-medium">
//                     HEADQUARTERS
//                   </p>
//                   <p className="text-gray-900 text-sm font-medium">
//                     Gausala, Kathmandu
//                   </p>
//                   <p className="text-gray-600 text-sm">Nepal</p>
//                 </div>
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className="flex items-start space-x-3 group cursor-pointer"
//               >
//                 <div className="relative">
//                   <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 flex items-center justify-center group-hover:border-amber-400 group-hover:shadow-lg transition-all duration-300">
//                     <FaEnvelope className="text-amber-600 text-sm" />
//                   </div>
//                   <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-amber-300/20 to-yellow-300/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>
//                 <div>
//                   <p className="text-amber-600 text-xs font-medium">
//                     INQUIRIES
//                   </p>
//                   <p className="text-gray-900 text-sm font-medium">
//                     contact@saarathifund.com
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Performance Stats */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             <h4 className="text-lg font-semibold text-gray-900 tracking-tight">
//               Our Footprint
//             </h4>
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 {
//                   value: "15+",
//                   label: "Portfolio Companies",
//                   color: "from-amber-500 to-yellow-500",
//                 },
//                 {
//                   value: "5",
//                   label: "Years Experience",
//                   color: "from-amber-600 to-yellow-600",
//                 },
//                 {
//                   value: "3",
//                   label: "Sectors",
//                   color: "from-amber-400 to-yellow-400",
//                 },
//                 {
//                   value: "100%",
//                   label: "Commitment",
//                   color: "from-amber-700 to-yellow-700",
//                 },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   variants={statVariants}
//                   whileHover={{
//                     scale: 1.05,
//                     boxShadow: "0 10px 30px rgba(212, 175, 55, 0.15)",
//                   }}
//                   className="relative p-4 rounded-xl bg-gradient-to-br from-white to-amber-50 border border-amber-100 shadow-sm hover:shadow-lg transition-all duration-300"
//                 >
//                   {/* Golden Glow Effect */}
//                   <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-amber-300/10 to-yellow-300/10 blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300" />

//                   <div
//                     className={`relative text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
//                   >
//                     {stat.value}
//                   </div>
//                   <div className="relative text-gray-600 text-xs font-medium mt-1">
//                     {stat.label}
//                   </div>

//                   {/* Corner Accents */}
//                   <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r from-amber-300 to-yellow-300" />
//                   <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-gradient-to-r from-amber-300 to-yellow-300" />
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-amber-100">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//             {/* Social Links */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.5 }}
//               className="flex items-center space-x-4"
//             >
//               <span className="text-gray-600 text-sm font-medium">
//                 Connect:
//               </span>
//               <div className="flex space-x-3">
//                 {[
//                   {
//                     icon: FaLinkedinIn,
//                     bg: "bg-[#0A66C2]/10",
//                     text: "text-[#0A66C2]",
//                   },
//                   {
//                     icon: FaTwitter,
//                     bg: "bg-[#1DA1F2]/10",
//                     text: "text-[#1DA1F2]",
//                   },
//                   {
//                     icon: FaInstagram,
//                     bg: "bg-gradient-to-br from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#F77737]/10",
//                     text: "text-[#E4405F]",
//                   },
//                 ].map(({ icon: Icon, bg, text }, index) => (
//                   <motion.a
//                     key={index}
//                     href="#"
//                     whileHover={{
//                       scale: 1.2,
//                       backgroundColor: "rgba(212, 175, 55, 0.1)",
//                       borderColor: "#d4af37",
//                       boxShadow: "0 0 20px rgba(212, 175, 55, 0.2)",
//                     }}
//                     whileTap={{ scale: 0.9 }}
//                     className={`relative w-10 h-10 rounded-lg border border-gray-200 ${bg} flex items-center justify-center transition-all duration-300`}
//                   >
//                     <Icon className={`text-sm ${text}`} />
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Copyright */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6 }}
//               className="text-center"
//             >
//               <p className="text-gray-600 text-sm">
//                 © {new Date().getFullYear()} Saarathi Equity Fund. All rights
//                 reserved.
//               </p>
//               <p className="text-amber-600 text-xs mt-1 font-medium">
//                 Confidential & Proprietary Information
//               </p>
//             </motion.div>
//           </div>

//           {/* Luxury Accent Line */}
//           <div className="mt-8 pt-4 border-t border-amber-100">
//             <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
//             <motion.p
//               className="text-center text-gray-400 text-xs mt-4"
//               animate={{ opacity: [0.5, 1, 0.5] }}
//               transition={{ duration: 3, repeat: Infinity }}
//             >
//               Crafting Excellence • Building Legacy • Creating Value
//             </motion.p>
//           </div>
//         </div>
//       </div>

//       {/* Golden Corner Accents */}
//       <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-amber-200/5 to-yellow-200/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-tl from-amber-200/5 to-yellow-200/5 rounded-full blur-3xl pointer-events-none" />
//     </footer>
//   );
// };

// export default Footer;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaChartLine,
  FaCrown,
  FaEnvelope,
  FaGem,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaStar,
  FaTwitter
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
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

  const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Teams", path: "/teams" },
  { name: "Contact", path: "/contact" },
];

  return (
    <footer className=" relative bg-[#1A1A1A] text-gray-100 pt-10 pb-12 overflow-hidden">
      {/* Golden Ambient Glow */}
      <motion.div
        className=" absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#D4AF37]/20 via-[#B8962E]/10 to-transparent pointer-events-none filter blur-[120px] top-[-200px] left-[-200px]"
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className=" absolute w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-[#D4AF37]/10 via-[#B8962E]/5 to-transparent pointer-events-none filter blur-[100px] bottom-[-150px] right-[-150px]"
        animate={{ x: [0, -80, 0], y: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className=" relative max-w-7xl mx-auto px-4">
        {/* Footer Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Identity */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <motion.div
                  className="w-16 h-16 rounded-xl border border-[#D4AF37]/40 bg-gradient-to-br from-[#D4AF37]/10 to-[#B8962E]/10 shadow-lg flex items-center justify-center"
                  whileHover={{
                    rotate: 360,
                    borderColor: "#D4AF37",
                    boxShadow: "0 10px 40px rgba(212,175,55,0.3)",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCrown className="text-2xl text-[#D4AF37]" />
                </motion.div>
                <div className="absolute -inset-1 rounded-xl border border-[#D4AF37]/30 blur-sm" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  Saarathi
                  <span className="block bg-gradient-to-r from-[#D4AF37] to-[#B8962E] bg-clip-text text-transparent text-lg font-semibold">
                    Equity Fund
                  </span>
                </h3>
                <div className="h-px w-16 bg-gradient-to-r from-[#D4AF37] via-[#B8962E] to-transparent mt-2" />
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              We identify, invest in, and nurture exceptional businesses with
              transformative potential, creating sustainable value.
            </p>

            {/* Core Values */}
            <div className="space-y-3 pt-4">
              {[
                { icon: FaStar, text: "Strategic Vision" },
                { icon: FaGem, text: "Risk Management" },
                { icon: FaChartLine, text: "Growth Focus" },
              ].map(({ icon: Icon, text }, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#B8962E]/10 border border-[#D4AF37]/30 flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                    <Icon className="text-[#D4AF37] text-sm" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium group-hover:text-[#D4AF37] transition-colors">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold text-[#D4AF37] tracking-tight">
              Navigation
            </h4>
            <ul className="space-y-3">
              {links?.map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  className="group cursor-pointer"
                >
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#D4AF37] text-sm font-medium transition-colors flex items-center"
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B8962E] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"
                      whileHover={{ width: "1rem" }}
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold text-[#D4AF37] tracking-tight">
              Contact
            </h4>
            <div className="space-y-4">
              {[
                {
                  icon: FaMapMarkerAlt,
                  title: "HEADQUARTERS",
                  lines: ["Gausala, Kathmandu", "Nepal"],
                },
                {
                  icon: FaEnvelope,
                  title: "INQUIRIES",
                  lines: ["contact@saarathifund.com"],
                },
              ].map(({ icon: Icon, title, lines }, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-3 group cursor-pointer"
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#B8962E]/10 border border-[#D4AF37]/30 flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                      <Icon className="text-[#D4AF37] text-sm" />
                    </div>
                    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#D4AF37]/10 to-[#B8962E]/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div>
                    <p className="text-[#D4AF37] text-xs font-medium">
                      {title}
                    </p>
                    {lines.map((line, idx) => (
                      <p
                        key={idx}
                        className="text-gray-300 text-sm font-medium"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Performance Stats */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold text-[#D4AF37] tracking-tight">
              Our Footprint
            </h4>
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
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(212,175,55,0.2)",
                  }}
                  className="relative p-4 rounded-xl bg-[#2a2a2a] border border-[#D4AF37]/20 shadow-sm transition-all duration-300"
                >
                  <div className="relative text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#B8962E] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="relative text-gray-300 text-xs font-medium mt-1">
                    {stat.label}
                  </div>
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E]" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E]" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#D4AF37]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-4"
            >
              <span className="text-gray-300 text-sm font-medium">
                Connect:
              </span>
              <div className="flex space-x-3">
                {[FaLinkedinIn, FaTwitter, FaInstagram].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "rgba(212,175,55,0.1)",
                      borderColor: "#D4AF37",
                      boxShadow: "0 0 20px rgba(212,175,55,0.2)",
                    }}
                    className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center transition-all duration-300"
                  >
                    <Icon className="text-[#D4AF37] text-sm" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Saarathi Equity Fund. All rights
                reserved.
              </p>
              <p className="text-[#D4AF37] text-xs mt-1 font-medium">
                Confidential & Proprietary Information
              </p>
            </motion.div>
          </div>

          <div className="mt-8 pt-4 border-t border-[#D4AF37]/20">
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
            <motion.p
              className="text-center text-gray-500 text-xs mt-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Crafting Excellence • Building Legacy • Creating Value
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
