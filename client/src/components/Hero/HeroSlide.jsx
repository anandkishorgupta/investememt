


import { Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const HeroSlide = ({ item }) => {
  const navigate = useNavigate();
  const getImageUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `${API_URL}${path}`;
  };
  // console.log("image", API_URL + item.images[0])
  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between  min-h-[65vh]">

      {/* LEFT CONTENT */}
      <div className="flex-1 space-y-5">
        <div className="flex items-center gap-2 text-[#a7861c]">
          <Sun className="w-4 h-4" />
          <span className="text-xs tracking-widest uppercase font-semibold">
            Our Strategic Investment
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold leading-snug text-white max-w-xl">
          {/* {item.name} */}
          {item?.title}

        </h1>

        <p className="text-sm md:text-base sm:text-black lg:text-gray-300  md:text-gray-300 max-w-lg leading-relaxed">
          {item.description}
        </p>

        <button
          onClick={() => navigate(`/portfolio/${item._id}`)}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full
          bg-gradient-to-r from-[#D4AF37] to-[#B8962E]
          text-sm text-black font-semibold
          shadow-[0_8px_30px_rgba(212,175,55,0.35)]
          hover:scale-105 transition cursor-pointer"
        >
          Invest
        </button>
      </div>

      {/* RIGHT LOGO */}
      <div className=" relative flex justify-center">
        <div className="absolute w-64 h-64 rounded-full bg-[#D4AF37]/20 blur-3xl" />
        <div className="relative bg-white rounded-full p-10 border border-[#D4AF37]/30 shadow-[0_0_50px_rgba(212,175,55,0.25)]">
          <img
            // src={item.logo}
            src={getImageUrl(item?.images?.[0])}
            alt={item.title}
            className="w-40 h-40 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
