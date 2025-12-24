import { motion } from "framer-motion";
import { WHAT_WE_DO_CARDS as items } from "../../Constant/whatWeDo.data";
const WhatWeDo = () => {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = (direction = "left") => ({
    hidden: { opacity: 0, x: direction === "left" ? -60 : 60, y: 20 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  });


  return (
    <section className="relative py-28 overflow-hidden">
      {/* bg-gradient-to-b from-white to-amber-50 */}
      {/* Soft background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-amber-900 tracking-tight">
            What We Do
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-amber-800">
            We combine capital, strategy, and partnerships to help individuals
            and businesses grow confidently and sustainably.
          </p>
          <div className="mt-6 w-24 h-1.5 mx-auto bg-gradient-to-r from-amber-600 to-amber-400 rounded-full" />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto"
        >
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                custom={item.direction}
                variants={itemVariants(item.direction)}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="relative rounded-3xl bg-white border border-amber-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Top gradient bar */}
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-500 to-amber-700" />

                  <div className="p-8 flex flex-col items-start">
                    {/* Icon */}
                    <motion.div
                      className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-md"
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-semibold text-amber-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-amber-800 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Hover glow overlay */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-amber-50/40 to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;



// import { motion } from "framer-motion";
// import { TrendingUp, Handshake, ShieldCheck, Rocket } from "lucide-react";

// const WhatWeDo = () => {
//   const container = {
//     hidden: {},
//     show: {
//       transition: { staggerChildren: 0.25 },
//     },
//   };

//   const itemVariants = (direction = "left") => ({
//     hidden: { opacity: 0, x: direction === "left" ? -60 : 60, y: 20 },
//     show: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//   });

//   const items = [
//     {
//       title: "Investment",
//       desc: "Smart strategies to maximize returns while minimizing risk for your capital.",
//       icon: TrendingUp,
//       direction: "left",
//     },
//     {
//       title: "Joint Venture",
//       desc: "Build long-term, mutually beneficial partnerships leveraging strategic networks.",
//       icon: Handshake,
//       direction: "right",
//     },
//     {
//       title: "Wealth Management",
//       desc: "Tailored solutions to preserve, grow, and transfer wealth with confidence.",
//       icon: ShieldCheck,
//       direction: "left",
//     },
//     {
//       title: "Scale Up",
//       desc: "Access mentorship, insights, and alliances to scale your business sustainably.",
//       icon: Rocket,
//       direction: "right",
//     },
//   ];

//   return (
//     <section className="relative py-28 overflow-hidden bg-gradient-to-b from-[#0B0B0B] via-[#1A1A1A] to-[#121212]">
//       {/* GOLD TOP LINE */}
//       <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
//       {/* Background gold glows */}
//       <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#D4AF37]/30 to-[#FFD700]/10 blur-3xl pointer-events-none" />
//       <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#FFD700]/20 to-[#D4AF37]/10 blur-3xl pointer-events-none" />

//       {/* Floating golden particles */}
//       {[...Array(25)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-[#FFD700] to-[#D4AF37] opacity-50 pointer-events-none"
//           initial={{
//             x: Math.random() * window.innerWidth,
//             y: Math.random() * 800 + 100,
//             scale: 0.5 + Math.random() * 0.5,
//           }}
//           animate={{
//             y: [-50, 50, -50],
//             x: [0, 20, 0],
//             opacity: [0.2, 0.7, 0.2],
//           }}
//           transition={{
//             duration: 15 + Math.random() * 10,
//             repeat: Infinity,
//             delay: Math.random() * 5,
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       <div className="relative max-w-7xl mx-auto px-4">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-24"
//         >
//           <h2 className="text-4xl md:text-5xl font-extrabold text-[#B8962E] tracking-tight">
//             What We Do
//           </h2>
//           <p className="mt-6 max-w-2xl mx-auto text-lg text-[#F5DEB3]">
//             We combine capital, strategy, and partnerships to help individuals
//             and businesses grow confidently and sustainably.
//           </p>
//           <div className="mt-6 w-24 h-1.5 mx-auto bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full" />
//         </motion.div>

//         {/* Cards grid */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto relative z-10"
//         >
//           {items.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={index}
//                 custom={item.direction}
//                 variants={itemVariants(item.direction)}
//                 whileHover={{ y: -10, scale: 1.03 }}
//                 className="group relative"
//               >
//                 <div className="relative rounded-3xl bg-[#1A1A1A] border border-[#D4AF37]/40 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
//                   {/* Top gradient bar */}
//                   <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700]" />

//                   <div className="p-8 flex flex-col items-start relative z-10">
//                     {/* Icon with glow */}
//                     <motion.div
//                       className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#FFD700] to-[#D4AF37] flex items-center justify-center shadow-lg"
//                       whileHover={{ rotate: 15 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                     >
//                       <Icon className="w-8 h-8 text-black" />
//                     </motion.div>

//                     <h3 className="text-2xl font-semibold text-[#FFD700] mb-3">
//                       {item.title}
//                     </h3>
//                     <p className="text-[#F5DEB3] leading-relaxed">
//                       {item.desc}
//                     </p>
//                   </div>

//                   {/* Hover overlay gold glow */}
//                   <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-br from-[#FFD700]/40 to-transparent" />
//                   <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-gradient-to-br from-[#FFD700] to-[#D4AF37] blur-sm opacity-70" />
//                   <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-gradient-to-br from-[#FFD700] to-[#D4AF37] blur-sm opacity-70" />
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default WhatWeDo;
