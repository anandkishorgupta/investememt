
// import { Sun } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const API_URL = import.meta.env.VITE_API_URL;

// const HeroSlide = ({ item }) => {
//   const navigate = useNavigate();

//   const getImageUrl = (path) => {
//     if (!path) return "";
//     if (path.startsWith("http")) return path;
//     return `${API_URL}${path}`;
//   };

//   return (
//     <div
//       className="
//         max-w-6xl mx-auto
//         flex flex-col-reverse lg:flex-row
//         items-center justify-between
//         gap-10 lg:gap-16
//         px-4 sm:px-6 lg:px-0
//         min-h-[60vh] sm:min-h-[65vh]
//       "
//     >
//       {/* LEFT CONTENT */}
//       <div className="flex-1 space-y-4 sm:space-y-5 text-center lg:text-left">
//         <div className="flex items-center justify-center lg:justify-start gap-2 text-[#a7861c]">
//           <Sun className="w-4 h-4 shrink-0" />
//           <span className="text-xs tracking-widest uppercase font-semibold">
//             Our Strategic Investment
//           </span>
//         </div>

//         <h1
//           className="
//             text-2xl sm:text-3xl md:text-3xl
//             font-bold leading-snug
//             text-white
//             max-w-xl mx-auto lg:mx-0
//           "
//         >
//           {item?.title}
//         </h1>

//         <p
//           className="
//             text-sm sm:text-base
//             text-gray-300
//             max-w-lg
//             mx-auto lg:mx-0
//             leading-relaxed
//           "
//         >
//           {item?.description}
//         </p>

//         <div className="pt-2 flex justify-center lg:justify-start">
//           <button
//             onClick={() => navigate(`/portfolio/${item._id}`)}
//             className="
//               inline-flex items-center gap-2
//               px-6 py-2.5
//               rounded-full
//               bg-gradient-to-r from-[#D4AF37] to-[#B8962E]
//               text-sm text-black font-semibold
//               shadow-[0_8px_30px_rgba(212,175,55,0.35)]
//               hover:scale-105 transition
//               cursor-pointer
//             "
//           >
//             Invest
//           </button>
//         </div>
//       </div>

//       {/* RIGHT LOGO */}
//       <div className="relative flex justify-center items-center flex-shrink-0">
//         {/* Glow */}
//         <div
//           className="
//             absolute
//             w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64
//             rounded-full
//             bg-[#D4AF37]/20
//             blur-3xl
//           "
//         />

//         {/* Logo Container */}
//         <div
//           className="
//             relative
//             bg-white
//             rounded-full
//             p-6 sm:p-8 md:p-10
//             border border-[#D4AF37]/30
//             shadow-[0_0_50px_rgba(212,175,55,0.25)]
//           "
//         >
//           <img
//             src={getImageUrl(item?.images?.[0])}
//             alt={item?.title}
//             className="
//               w-24 h-24
//               sm:w-32 sm:h-32
//               md:w-35 md:h-35
//               object-contain
//             "
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSlide;



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

  return (
    <div
      className="
        max-w-6xl mx-auto
        flex flex-col-reverse md:flex-row
        items-center justify-between
        gap-10 md:gap-16
        px-4 sm:px-6 md:px-0
        min-h-[60vh] sm:min-h-[65vh]
      "
      /* 👇 reserve space for pagination dots */
      style={{
        paddingBottom: "80px",
      }}
    >
      {/* LEFT CONTENT */}
      <div className="flex-1 space-y-4 sm:space-y-5 text-center md:text-left">
        {/* Badge */}
        <div className="flex items-center justify-center md:justify-start gap-2 text-[#a7861c]">
          <Sun className="w-4 h-4 shrink-0" />
          <span className="text-xs tracking-widest uppercase font-semibold">
            Our Strategic Investment
          </span>
        </div>

        {/* Title */}
        <h1
          className="
            text-2xl sm:text-3xl md:text-3xl
            font-bold leading-snug
            text-white
            max-w-xl mx-auto md:mx-0
          "
        >
          {item?.title}
        </h1>

        {/* Description */}
        <p
          className="
            text-sm sm:text-base
            text-gray-300
            max-w-lg
            mx-auto md:mx-0
            leading-relaxed
          "
        >
          {item?.description}
        </p>

        {/* CTA */}
        <div className="pt-3 flex justify-center md:justify-start">
          <button
            onClick={() => navigate(`/portfolio/${item._id}`)}
            className="
              inline-flex items-center gap-2
              px-6 py-2.5
              rounded-full
              bg-gradient-to-r from-[#D4AF37] to-[#B8962E]
              text-sm text-black font-semibold
              shadow-[0_8px_30px_rgba(212,175,55,0.35)]
              hover:scale-105 transition-transform
              cursor-pointer
            "
          >
            Invest
          </button>
        </div>
      </div>

      {/* RIGHT LOGO */}
      <div className="relative flex justify-center items-center flex-shrink-0">
        {/* Glow */}
        <div
          className="
            absolute
            w-40 h-40
            sm:w-52 sm:h-52
            md:w-64 md:h-64
            rounded-full
            bg-[#D4AF37]/20
            blur-3xl
          "
        />

        {/* Logo Container */}
        <div
          className="
            relative
            bg-white
            rounded-full
            p-6 sm:p-8 md:p-10
            border border-[#D4AF37]/30
            shadow-[0_0_50px_rgba(212,175,55,0.25)]
          "
        >
          <img
            src={getImageUrl(item?.images?.[0])}
            alt={item?.title}
            className="
              w-24 h-24
              sm:w-32 sm:h-32
              md:w-36 md:h-36
              object-contain
            "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
