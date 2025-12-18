// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Sun } from "lucide-react";

// const investments = [
//   {
//     id: 1,
//     name: "Salmani Devi",
//     sector: "Hydropower",
//     company: "Private Limited",
//     description:
//       "Developing the 7.5 MW Upper Midim Hydropower Project, contributing to clean and sustainable energy in Gandaki Province.",
//     logo: "/logo/shp-logo.png",
//   },
//   {
//     id: 2,
//     name: "Everest",
//     sector: "Infrastructure",
//     company: "Developers Ltd",
//     description:
//       "Focused on long-term infrastructure investments that drive economic growth and national development.",
//     logo: "/logo/everest-logo.png",
//   },
// ];

// const InvestmentHeroCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     arrows: false,
//   };

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
//         <Slider {...settings}>
//           {investments.map((item) => (
//             <div key={item.id}>
//               <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
//                 {/* Left Text */}
//                 <div className="space-y-6">
//                   <div className="flex items-center gap-3 text-yellow-400">
//                     <Sun className="w-6 h-6" />
//                     <span className="text-sm tracking-widest uppercase font-semibold">
//                       We Have Invested In
//                     </span>
//                   </div>

//                   <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
//                     {item.name}
//                     <span className="block text-yellow-400">{item.sector}</span>
//                     {item.company}
//                   </h1>

//                   <p className="text-gray-300 max-w-xl">{item.description}</p>

//                   <button className="mt-4 px-7 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold shadow-lg hover:scale-105 transition">
//                     Explore More
//                   </button>
//                 </div>

//                 {/* Right Logo */}
//                 <div className="relative flex justify-center">
//                   <div className="absolute w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl" />
//                   <div className="relative bg-white rounded-full p-10 shadow-2xl border border-yellow-400/30">
//                     <img
//                       src={item.logo}
//                       alt={item.name}
//                       className="w-48 h-48 object-contain"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default InvestmentHeroCarousel;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun } from "lucide-react";

const investments = [
  {
    id: 1,
    name: "Salmani Devi",
    sector: "Hydropower",
    company: "Private Limited",
    description:
      "Developing the 7.5 MW Upper Midim Hydropower Project, contributing to clean and sustainable energy in Gandaki Province.",
    logo: "https://news.nepsetrading.com/_next/image?url=https%3A%2F%2Fstatic.nepsetrading.com%2Fnepsetrading-assets%2Fnews%2F1765352681783-image.jpeg&w=1200&q=75",
  },
  {
    id: 2,
    name: "Everest",
    sector: "Infrastructure",
    company: "Developers Ltd",
    description:
      "Focused on long-term infrastructure investments that drive economic growth and national development.",
    logo: "https://cdn.arthakendra.com/sharehub/images/2025/06/19/063313-shiva-shree-hydro-logo.png",
  },
];

const InvestmentHeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % investments.length);
    }, 5000); // change slide every 5s
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentIndex(index);

  const currentItem = investments[currentIndex];

  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={
          {
            // background: [
            //   "radial-gradient(circle at 20% 50%, rgba(253, 230, 138, 0.3) 0%, transparent 50%)",
            //   "radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)",
            //   "radial-gradient(circle at 20% 50%, rgba(253, 230, 138, 0.3) 0%, transparent 50%)",
            // ],
          }
        }
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 1, ease: "linear" }}
            className="grid lg:grid-cols-2 gap-12 items-center py-20"
          >
            {/* Left Text */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-yellow-400">
                <Sun className="w-6 h-6 animate-spin-slow" />
                <span className="text-sm tracking-widest uppercase font-semibold">
                  We Have Invested In
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                {currentItem.name}
                <span className="block text-yellow-400">
                  {currentItem.sector}
                </span>
                {currentItem.company}
              </h1>

              <p className="text-gray-300 max-w-xl">
                {currentItem.description}
              </p>

              <button className="mt-4 px-7 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold shadow-lg hover:scale-105 transition">
                Explore More
              </button>
            </div>

            {/* Right Logo */}
            <div className="relative flex justify-center">
              <div className="absolute w-72 h-72 rounded-full animate-pulse-slow" />
              <div className="relative bg-white rounded-full p-10 shadow-2xl border border-yellow-400/30">
                <img
                  src={currentItem.logo}
                  alt={currentItem.name}
                  className="w-48 h-48 object-contain"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {investments.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-yellow-400" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentHeroCarousel;
