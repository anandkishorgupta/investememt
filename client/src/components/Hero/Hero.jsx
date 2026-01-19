import { FaChevronLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import heroImage from "../../assets/hero.png";
import { HERO_INVESTMENTS } from "../../Constant/heroInvestments";
import { swiperConfig } from "./hero.config";
import HeroSlide from "./HeroSlide";
const Hero = () => {
  return (
    <section
      className=" relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* LEFT ARROW */}
        <button className="hero-prev absolute -left-2 top-1/2 -translate-y-19  z-20
          w-14 h-14 rounded-full flex items-center justify-center
          bg-black/30 text-[#D4AF37] text-3xl font-bold
          shadow-[0_0_25px_rgba(212,175,55,0.7)]
          hover:shadow-[0_0_40px_rgba(212,175,55,1)]
          transition">
          <FaChevronLeft className="text-2xl" />
        </button>
        {/* RIGHT ARROW */}
        <button className="hero-next absolute -right-1 top-1/2 -translate-y-19 z-20
         w-14 h-14 rounded-full flex items-center justify-center
         bg-black/30 text-[#D4AF37] text-3xl font-bold
         shadow-[0_0_25px_rgba(212,175,55,0.7)]
         hover:shadow-[0_0_40px_rgba(212,175,55,1)]
         transition">
          <FaChevronLeft className="text-2xl" />

        </button>
        <Swiper {...swiperConfig} className="min-h-[75vh]">
          {HERO_INVESTMENTS.map((item) => (
            <SwiperSlide key={item.id} className="">
              <HeroSlide item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;