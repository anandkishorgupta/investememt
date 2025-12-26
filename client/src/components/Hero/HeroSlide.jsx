import { Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";
const HeroSlide = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="grid lg:grid-cols-2 gap-14 items-center min-h-[75vh]">
      {/* LEFT CONTENT */}
      <div className="space-y-7 overflow-visible">
        <div className="flex items-center gap-3 text-[#a7861c]">
          <Sun className="w-5 h-5" />
          <span className="text-sm tracking-widest uppercase font-semibold">
            Our Strategic Investment
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
          {item.name}
          {/* <span className="block text-[#D4AF37] mt-1">
            {item.sector}
          </span> */}
          {/* <span className="block text-lg md:text-xl text-gray-400 mt-3 font-medium">
            {item.company}
          </span> */}
        </h1>

        <p className="text-gray-300 max-w-xl leading-relaxed">
          {item.description}
        </p>

        {/* <button className="ml-2 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-black font-semibold shadow-[0_10px_40px_rgba(212,175,55,0.35)] hover:scale-105 transition">
          Explore Investment
        </button> */}
        <button
          onClick={() => navigate(`/portfolio/${item.id}`)}
          className=" cursor-pointer ml-2 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-black font-semibold shadow-[0_10px_40px_rgba(212,175,55,0.35)] hover:scale-105 transition"
        >
          Explore Investment
        </button>

      </div>

      {/* RIGHT LOGO */}
      <div className="relative flex justify-center">
        <div className="absolute w-80 h-80 rounded-full bg-[#D4AF37]/20 blur-3xl" />
        <div className="relative bg-white rounded-full p-12 border border-[#D4AF37]/30 shadow-[0_0_60px_rgba(212,175,55,0.25)]">
          <img
            src={item.logo}
            alt={item.name}
            className=" w-48 h-48 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
