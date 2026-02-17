// import { motion } from "framer-motion";
// import { WHAT_WE_DO_CARDS as items } from "../../Constant/whatWeDo.data";
// const WhatWeDo = () => {
//   const container = {
//     hidden: {},
//     show: {
//       transition: { staggerChildren: 0.3 },
//     },
//   };

//   const itemVariants = (direction = "left") => ({
//     hidden: { opacity: 0, x: direction === "left" ? -60 : 60, y: 20 },
//     show: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   });


//   return (
//     <section className="relative py-28 overflow-hidden">
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
//       <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

//       <div className="relative max-w-7xl mx-auto px-4">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-24"
//         >
//           <h2 className="text-4xl md:text-5xl font-extrabold text-amber-900 tracking-tight">
//             What We Do
//           </h2>
//           <p className="mt-6 max-w-2xl mx-auto text-lg text-amber-800">
//             We combine capital, strategy, and partnerships to help individuals
//             and businesses grow confidently and sustainably.
//           </p>
//           <div className="mt-6 w-24 h-1.5 mx-auto bg-gradient-to-r from-amber-600 to-amber-400 rounded-full" />
//         </motion.div>

//         {/* Cards grid */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto"
//         >
//           {items.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <motion.div
//                 key={index}
//                 custom={item.direction}
//                 variants={itemVariants(item.direction)}
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 className="group"
//               >
//                 <div className="relative rounded-3xl bg-white border border-amber-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
//                   {/* Top gradient bar */}
//                   <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-500 to-amber-700" />

//                   <div className="p-8 flex flex-col items-start">
//                     {/* Icon */}
//                     <motion.div
//                       className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-md"
//                       whileHover={{ rotate: 10 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                     >
//                       <Icon className="w-7 h-7 text-white" />
//                     </motion.div>

//                     <h3 className="text-2xl font-semibold text-amber-900 mb-3">
//                       {item.title}
//                     </h3>
//                     <p className="text-amber-800 leading-relaxed">
//                       {item.desc}
//                     </p>
//                   </div>

//                   {/* Hover glow overlay */}
//                   <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-amber-50/40 to-transparent" />
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


// WhatWeDo.jsx
import { WHAT_WE_DO_CARDS as items } from "../../Constant/whatWeDo.data";

const WhatWeDo = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-amber-50/30 overflow-hidden">
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 border border-amber-200/30 rotate-12 rounded-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 border border-amber-200/30 -rotate-12 rounded-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-amber-100/20 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern heading with geometric accent */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-amber-400" />
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-amber-600">
              Our Expertise
            </span>
            <div className="w-12 h-[2px] bg-amber-400" />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-amber-950">
            What We {" "}
            <span className=" font-semibold mt-2 bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
              Do
            </span>
          </h2>
          
          <p className="mt-8 max-w-2xl mx-auto text-lg text-amber-800/80 leading-relaxed">
            Strategic solutions crafted with precision, where capital meets vision 
            and partnerships create lasting value.
          </p>
        </div>

        {/* Minimalist grid with unique card design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Background number with modern typography */}
              <div className="absolute -top-6 -left-4 text-[8rem] font-black text-amber-100/50 select-none leading-none">
                {(index + 1).toString().padStart(2, '0')}
              </div>

              {/* Main card with sophisticated styling */}
              <div className="relative pl-12">
                {/* Vertical accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px]">
                  <div className="h-full w-full bg-gradient-to-b from-amber-400 via-amber-600 to-amber-800 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out" />
                </div>

                {/* Content */}
                <div className="pt-8 pb-12">
                  {/* Title with unique treatment */}
                  <h3 className="text-3xl md:text-4xl font-light text-amber-950 mb-4">
                    {item.title}
                    <span className="block w-16 h-[2px] bg-amber-400 mt-4 group-hover:w-24 transition-all duration-500" />
                  </h3>

                  {/* Description with elegant spacing */}
                  <p className="text-amber-800/70 text-lg leading-relaxed max-w-sm">
                    {item.desc}
                  </p>

                  {/* Minimalist hover indicator */}
                  <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {/* <span className="inline-flex items-center gap-2 text-sm font-medium text-amber-700">
                      Explore more
                      <span className="text-amber-500 text-lg group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </span> */}
                  </div>
                </div>
              </div>

              {/* Subtle corner accent on hover */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-amber-300/0 group-hover:border-amber-400/50 transition-all duration-500" />
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default WhatWeDo;