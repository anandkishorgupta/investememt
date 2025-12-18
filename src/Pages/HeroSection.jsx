//  this is just new desingn of hero section

import React from "react";
import { Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const investments = [
  {
    name: "Salmani Devi",
    sector: "Hydropower",
    company: "Private Limited",
    description:
      "A hydropower company developing the 7.5 MW Upper Midim Hydropower Project, contributing to sustainable clean energy in Gandaki Province.",
    logo: "/logo/shp-logo.png",
  },
  {
    name: "Everest",
    sector: "Infrastructure",
    company: "Developers Ltd",
    description:
      "Focused on long-term infrastructure development projects that drive national growth and economic stability.",
    logo: "/logo/everest-logo.png",
  },
];

export default function InvestmentCarouselHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0b1020] via-[#0f172a] to-black overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-yellow-400/35 rounded-full blur-[120px]" />

      <div className="absolute -top-40 -left-40 w-[800px] h-[800px] pointer-events-none">
        <div className="absolute inset-0 bg-[conic-gradient(from_45deg,rgba(255,200,80,0.15),transparent_20%,rgba(255,200,80,0.15),transparent_40%,rgba(255,200,80,0.15),transparent_60%,rgba(255,200,80,0.15),transparent_80%,rgba(255,200,80,0.15))] blur-2xl opacity-70" />
      </div>

      {/* Secondary Glow */}
      <div className="absolute top-24 left-48 w-[300px] h-[300px] bg-amber-300/20 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          className="w-full"
        >
          {investments.map((item, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Left Text */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-yellow-400">
                    <Sun className="w-7 h-7" />
                    <span className="text-sm tracking-widest uppercase font-semibold">
                      We Have Invested In
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                    {item.name}
                    <span className="block text-yellow-400">{item.sector}</span>
                    {item.company}
                  </h1>

                  <p className="text-gray-300 max-w-xl">{item.description}</p>

                  <button className="mt-4 px-7 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold shadow-lg hover:scale-105 transition">
                    Explore More
                  </button>
                </div>

                {/* Right Logo */}
                <div className="relative flex justify-center">
                  <div className="absolute w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl" />
                  <div className="relative bg-white rounded-full p-10 shadow-2xl border border-yellow-400/30">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-48 h-48 object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

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

// const HeroSection = () => {
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
//     <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#101735] via-[#1a2358] to-[#0b1020] overflow-hidden">
//       {/* Global light wash */}
//       <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/15 via-transparent to-transparent" />
//       <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 via-transparent to-transparent" />

//       {/* Sun core */}
//       <div className="absolute -top-48 -left-48 w-[750px] h-[750px] bg-yellow-400/45 rounded-full blur-[160px]" />
//       <div className="absolute -top-24 -left-24 w-[450px] h-[450px] bg-amber-300/35 rounded-full blur-[130px]" />

//       {/* Strong sun rays */}
//       <div className="absolute -top-[500px] -left-[500px] w-[1600px] h-[1600px] pointer-events-none">
//         <div className="absolute inset-0 bg-[conic-gradient(from_20deg,rgba(255,215,130,0.28),transparent_15%,rgba(255,215,130,0.28),transparent_30%,rgba(255,215,130,0.28),transparent_45%,rgba(255,215,130,0.28),transparent_60%,rgba(255,215,130,0.28),transparent_75%,rgba(255,215,130,0.28))] blur-3xl opacity-90" />
//         <div className="absolute inset-0 bg-[conic-gradient(from_0deg,rgba(255,190,90,0.22),transparent_18%,rgba(255,190,90,0.22),transparent_36%,rgba(255,190,90,0.22),transparent_54%,rgba(255,190,90,0.22),transparent_72%,rgba(255,190,90,0.22))] blur-[120px] opacity-70" />
//       </div>

//       {/* Ambient glow particles */}
//       <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-200/20 rounded-full blur-[140px]" />
//       <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-amber-200/15 rounded-full blur-[160px]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
//         <Slider {...settings}>
//           {investments.map((item) => (
//             <div key={item.id}>
//               <div className="grid lg:grid-cols-2 gap-12 items-center py-28">
//                 {/* Left Text */}
//                 <div className="space-y-6">
//                   <div className="flex items-center gap-3 text-yellow-300">
//                     <Sun className="w-6 h-6" />
//                     <span className="text-sm tracking-widest uppercase font-semibold">
//                       We Have Invested In
//                     </span>
//                   </div>

//                   <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-[0_0_30px_rgba(255,215,130,0.35)]">
//                     {item.name}
//                     <span className="block text-yellow-300">{item.sector}</span>
//                     {item.company}
//                   </h1>

//                   <p className="text-gray-100 max-w-xl">{item.description}</p>

//                   <button className="mt-6 px-9 py-3 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 text-black font-semibold shadow-[0_10px_40px_rgba(255,200,80,0.45)] hover:scale-105 transition">
//                     Explore More
//                   </button>
//                 </div>

//                 {/* Right Logo */}
//                 <div className="relative flex justify-center">
//                   <div className="absolute w-96 h-96 bg-yellow-300/30 rounded-full blur-[160px]" />
//                   <div className="relative bg-white/95 backdrop-blur rounded-full p-14 shadow-[0_30px_80px_rgba(255,200,80,0.4)] border border-yellow-300/40">
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

// export default HeroSection;
