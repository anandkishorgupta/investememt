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
      className="globalContainer relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <Swiper {...swiperConfig} className="min-h-[75vh]">
          {HERO_INVESTMENTS.map((item) => (
            <SwiperSlide key={item.id}>
              <HeroSlide item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
