
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
//     const handleScroll = () => {
//       setIsVisible(window.scrollY > 100);
//     };
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
//     <footer className=" relative bg-[#1A1A1A] text-gray-100 pt-10 pb-12 overflow-hidden">
//       {/* Golden Ambient Glow */}
//       <motion.div
//         className=" absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#D4AF37]/20 via-[#B8962E]/10 to-transparent pointer-events-none filter blur-[120px] top-[-200px] left-[-200px]"
//         animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
//         transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className=" absolute w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-[#D4AF37]/10 via-[#B8962E]/5 to-transparent pointer-events-none filter blur-[100px] bottom-[-150px] right-[-150px]"
//         animate={{ x: [0, -80, 0], y: [0, 50, 0] }}
//         transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className=" relative max-w-7xl mx-auto px-4">
//         {/* Footer Grid */}
//         <motion.div
//           className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {/* Company Identity */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             <div className="flex items-center space-x-4">
//               <div className="relative">
//                 <motion.div
//                   className="w-16 h-16  flex items-center justify-center"
//                   whileHover={{
//                     // rotate: 360,
//                     // borderColor: "#D4AF37",
//                     // boxShadow: "0 10px 40px rgba(212,175,55,0.3)",
//                   }}
//                 // transition={{ duration: 0.5 }}
//                 >
//                   {/* <FaCrown className="text-2xl text-[#D4AF37]" /> */}
//                   <img src={devShreeLogo}
//                     className="rounded-full w-full h-full object-cover"
//                     alt="Devshree Logo" />


//                 </motion.div>
//                 <div className="absolute -inset-1 rounded-xl border border-[#D4AF37]/30 blur-sm" />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold tracking-tight text-white">
//                   Devshree
//                   <span className="block bg-gradient-to-r from-[#D4AF37] to-[#B8962E] bg-clip-text text-transparent text-lg font-semibold">
//                     Venture Pvt. Ltd.
//                   </span>
//                 </h3>
//                 <div className="h-px w-16 bg-gradient-to-r from-[#D4AF37] via-[#B8962E] to-transparent mt-2" />
//               </div>
//             </div>

//             <p className="text-gray-300 text-sm leading-relaxed">
//               We identify, invest in, and nurture exceptional businesses with
//               transformative potential, creating sustainable value.
//             </p>

//             {/* Core Values */}
//             <div className="space-y-3 pt-4">
//               {[
//                 { icon: FaStar, text: "Strategic Vision" },
//                 { icon: FaGem, text: "Risk Management" },
//                 { icon: FaChartLine, text: "Growth Focus" },
//               ].map(({ icon: Icon, text }, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center space-x-3 group cursor-pointer"
//                 >
//                   <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#B8962E]/10 border border-[#D4AF37]/30 flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
//                     <Icon className="text-[#D4AF37] text-sm" />
//                   </div>
//                   <span className="text-gray-300 text-sm font-medium group-hover:text-[#D4AF37] transition-colors">
//                     {text}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             <h4 className="text-lg font-semibold text-[#D4AF37] tracking-tight">
//               Navigation
//             </h4>
//             <ul className="space-y-3">
//               {links?.map((link) => (
//                 <motion.li
//                   key={link}
//                   whileHover={{ x: 5 }}
//                   className="group cursor-pointer"
//                 >
//                   <Link
//                     to={link.path}
//                     className="text-gray-300 hover:text-[#D4AF37] text-sm font-medium transition-colors flex items-center"
//                   >
//                     <motion.span
//                       className="w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B8962E] mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"
//                       whileHover={{ width: "1rem" }}
//                     />
//                     {link.name}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             <h4 className="text-lg font-semibold text-[#D4AF37] tracking-tight">
//               Contact
//             </h4>
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
//                 <div
//                   key={i}
//                   className="flex items-start space-x-3 group cursor-pointer"
//                 >
//                   <div className="relative">
//                     <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#B8962E]/10 border border-[#D4AF37]/30 flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
//                       <Icon className="text-[#D4AF37] text-sm" />
//                     </div>
//                     <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#D4AF37]/10 to-[#B8962E]/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </div>
//                   <div>
//                     <p className="text-[#D4AF37] text-xs font-medium">
//                       {title}
//                     </p>
//                     {lines.map((line, idx) => (
//                       <p
//                         key={idx}
//                         className="text-gray-300 text-sm font-medium"
//                       >
//                         {line}
//                       </p>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Performance Stats */}
//           <motion.div variants={itemVariants} className="space-y-6">
//             <h4 className="text-lg font-semibold text-[#D4AF37] tracking-tight">
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
//                   whileHover={{
//                     scale: 1.05,
//                     boxShadow: "0 10px 30px rgba(212,175,55,0.2)",
//                   }}
//                   className="relative p-4 rounded-xl bg-[#2a2a2a] border border-[#D4AF37]/20 shadow-sm transition-all duration-300"
//                 >
//                   <div className="relative text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#B8962E] bg-clip-text text-transparent">
//                     {stat.value}
//                   </div>
//                   <div className="relative text-gray-300 text-xs font-medium mt-1">
//                     {stat.label}
//                   </div>
//                   <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E]" />
//                   <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E]" />
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Bottom */}
//         <div className="pt-8 border-t border-[#D4AF37]/20">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//             {/* Social */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.5 }}
//               className="flex items-center space-x-4"
//             >
//               <span className="text-gray-300 text-sm font-medium">
//                 Connect:
//               </span>
//               {/* <div className="flex space-x-3">
//                 {[FaLinkedinIn, FaTwitter, FaInstagram].map((Icon, i) => (
//                   <motion.a
//                     key={i}
//                     href="#"
//                     whileHover={{
//                       scale: 1.2,
//                       backgroundColor: "rgba(212,175,55,0.1)",
//                       borderColor: "#D4AF37",
//                       boxShadow: "0 0 20px rgba(212,175,55,0.2)",
//                     }}
//                     className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center transition-all duration-300"
//                   >
//                     <Icon className="text-[#D4AF37] text-sm" />
//                   </motion.a>
//                 ))}
//               </div> */}
//               <div className="flex space-x-3">
//                 {socialLinks.map(({ icon: Icon, link }, i) => (
//                   <motion.a
//                     key={i}
//                     href={link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{
//                       scale: 1.2,
//                       backgroundColor: "rgba(212,175,55,0.1)",
//                       borderColor: "#D4AF37",
//                       boxShadow: "0 0 20px rgba(212,175,55,0.2)",
//                     }}
//                     className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center transition-all duration-300"
//                   >
//                     <Icon className="text-[#D4AF37] text-sm" />
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
//               <p className="text-gray-400 text-sm">
//                 © {new Date().getFullYear()} Devshree Venture Pvt. Ltd. All rights
//                 reserved.
//               </p>
//               <p className="text-[#D4AF37] text-xs mt-1 font-medium">
//                 Confidential & Proprietary Information
//               </p>
//             </motion.div>
//           </div>

//           <div className="mt-8 pt-4 border-t border-[#D4AF37]/20">
//             <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
//             <motion.p
//               className="text-center text-gray-500 text-xs mt-4"
//               animate={{ opacity: [0.5, 1, 0.5] }}
//               transition={{ duration: 3, repeat: Infinity }}
//             >
//               Crafting Excellence • Building Legacy • Creating Value
//             </motion.p>
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

  const socialLinks = [
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/venturedevshree?igsh=MWk3MGg2NXM3cGRqZA==",
    },
    {
      icon: FaFacebookF,
      link: "https://www.facebook.com/share/19SE363xvm/",
    },
  ];

  return (
    <footer className="relative bg-white text-gray-800 pt-10 pb-12 overflow-hidden">
      {/* Soft Background Glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-gray-300/20 via-gray-200/10 to-transparent pointer-events-none filter blur-[120px] top-[-200px] left-[-200px]"
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-gray-300/20 via-gray-200/10 to-transparent pointer-events-none filter blur-[100px] bottom-[-150px] right-[-150px]"
        animate={{ x: [0, -80, 0], y: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4">
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
                  className="w-16 h-16 flex items-center justify-center"
                >
                  <img
                    src={devShreeLogo}
                    className="rounded-full w-full h-full object-cover"
                    alt="Devshree Logo"
                  />
                </motion.div>
                <div className="absolute -inset-1 rounded-xl border border-gray-300/30 blur-sm" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Devshree
                  <span className="block bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent text-lg font-semibold">
                    Venture Pvt. Ltd.
                  </span>
                </h3>
                <div className="h-px w-16 bg-gradient-to-r from-gray-700 via-gray-500 to-transparent mt-2" />
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
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
                  <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center border border-gray-300 group-hover:shadow-lg transition-all duration-300">
                    <Icon className="text-gray-700 text-sm" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium group-hover:text-gray-900 transition-colors">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900 tracking-tight">
              Navigation
            </h4>
            <ul className="space-y-3">
              {links?.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  className="group cursor-pointer"
                >
                  <Link
                    to={link.path}
                    className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors flex items-center"
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-gradient-to-r from-gray-700 to-gray-500 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"
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
            <h4 className="text-lg font-semibold text-gray-900 tracking-tight">
              Contact
            </h4>
            <div className="space-y-4">
              {[
                {
                  icon: FaMapMarkerAlt,
                  title: "HEADQUARTERS",
                  lines: ["Radhe Radhe, Kathmandu", "Nepal"],
                },
                {
                  icon: FaEnvelope,
                  title: "INQUIRIES",
                  lines: ["venture.devshree@gmail.com"],
                },
              ].map(({ icon: Icon, title, lines }, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-3 group cursor-pointer"
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-lg bg-gray-200 border border-gray-300 flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                      <Icon className="text-gray-700 text-sm" />
                    </div>
                    <div className="absolute -inset-1 rounded-lg bg-gray-200/50 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-700 text-xs font-medium">{title}</p>
                    {lines.map((line, idx) => (
                      <p key={idx} className="text-gray-600 text-sm font-medium">
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
            <h4 className="text-lg font-semibold text-gray-900 tracking-tight">
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
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  className="relative p-4 rounded-xl bg-gray-50 border border-gray-200 shadow-sm transition-all duration-300"
                >
                  <div className="relative text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="relative text-gray-600 text-xs font-medium mt-1">
                    {stat.label}
                  </div>
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gray-300" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-gray-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-300/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-4"
            >
              <span className="text-gray-600 text-sm font-medium">Connect:</span>
              <div className="flex space-x-3">
                {socialLinks.map(({ icon: Icon, link }, i) => (
                  <motion.a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "rgba(0,0,0,0.05)",
                      borderColor: "gray-400",
                      boxShadow: "0 0 20px rgba(0,0,0,0.1)",
                    }}
                    className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center transition-all duration-300"
                  >
                    <Icon className="text-gray-700 text-sm" />
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
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Devshree Venture Pvt. Ltd. All rights
                reserved.
              </p>
              <p className="text-gray-700 text-xs mt-1 font-medium">
                Confidential & Proprietary Information
              </p>
            </motion.div>
          </div>

          <div className="mt-8 pt-4 border-t border-[#D4AF37]/20">
           <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
           <motion.p              className="text-center text-gray-500 text-xs mt-4"
             animate={{ opacity: [0.5, 1, 0.5] }}
             transition={{ duration: 3, repeat: Infinity }}
           >              Crafting Excellence • Building Legacy • Creating Value
           </motion.p>          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
