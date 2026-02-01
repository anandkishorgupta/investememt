import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { GetHeroSectionData } from "../../api/apis";
import heroImage from "../../assets/hero.png";
import { swiperConfig } from "./hero.config";
import HeroSlide from "./HeroSlide";

const Hero = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        setLoading(true);
        const res = await GetHeroSectionData();
        const investData = res?.portfolio?.filter(item => item.invest === true) || [];

        setData(investData);


      } catch (err) {
        setError(err);
        console.error("Hero API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);


  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* SLIDER CONTENT */}
        {loading && (
          <p className="text-center text-white text-xl">
            Loading...
          </p>
        )}
        {error && !loading && (
          <p className="text-center text-red-400 text-xl">
            Failed to load hero content
          </p>
        )}
        {
          !loading && !error && (
            <>
              {/* LEFT ARROW */}
              <button className="hero-prev absolute -left-2 top-1/2 -translate-y-19  z-20
          w-14 h-14 rounded-full flex items-center justify-center
          bg-black/30 text-[#D4AF37] text-3xl font-bold
          shadow-[0_0_25px_rgba(212,175,55,0.7)]
          hover:shadow-[0_0_40px_rgba(212,175,55,1)]
          transition cursor-pointer">
                <FaChevronLeft className="text-2xl" />
              </button>
              {/* RIGHT ARROW */}
              <button className="hero-next absolute -right-1 top-1/2 -translate-y-19 z-20
         w-14 h-14 rounded-full flex items-center justify-center
         bg-black/30 text-[#D4AF37] text-3xl font-bold
         shadow-[0_0_25px_rgba(212,175,55,0.7)]
         hover:shadow-[0_0_40px_rgba(212,175,55,1)]
         transition cursor-pointer">
                <FaChevronRight className="text-2xl" />

              </button>
              <Swiper {...swiperConfig} className="min-h-[75vh]">

                {data?.map((item) => (
                  <SwiperSlide key={item.id} className="">
                    <HeroSlide item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )
        }


      </div>
    </section>
  );
};

export default Hero;