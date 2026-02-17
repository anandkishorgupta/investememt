// components/BODCard.jsx
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const API_URL = import.meta.env.VITE_API_URL;

const BODCard = ({ director, onClick }) => {
   const getImageUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `${API_URL}${path}`;
  };
  return (
    <div
      className="group bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-amber-100/30 
        cursor-pointer w-[280px] transition-all duration-300 
        hover:-translate-y-1.5 hover:shadow-xl flex flex-col"
      onClick={onClick}
    >
      {/* Image */}
      <div className="overflow-hidden ">
        <img
          src={getImageUrl(director.image)}
          alt={director.name}
          className=" w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-center">
          <h3 className="text-xl font-bold text-amber-800">{director.name}</h3>
          {director.alternativeName && (
            <p className="text-sm text-amber-600 mt-1">({director.alternativeName})</p>
          )}
          <p className="text-amber-600 font-medium mt-1">{director.title}</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-3 mt-4">
          {director.socials?.facebook && (
            <a
              href={director.socials.facebook.trim()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
              aria-label="Facebook"
              onClick={(e) => e.stopPropagation()}
            >
              <FaFacebookF size={16} />
            </a>
          )}
          {director.socials?.instagram && (
            <a
              href={director.socials.instagram.trim()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-500 transition-colors"
              aria-label="Instagram"
              onClick={(e) => e.stopPropagation()}
            >
              <FaInstagram size={16} />
            </a>
          )}
          {director.socials?.linkedin && (
            <a
              href={director.socials.linkedin.trim()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-700 transition-colors"
              aria-label="LinkedIn"
              onClick={(e) => e.stopPropagation()}
            >
              <FaLinkedinIn size={16} />
            </a>
          )}
        </div>

        {/* View Full Profile – Elegant & Subtle */}
        <div className="mt-auto pt-5 text-center">
          <span className="text-amber-600 font-medium text-sm flex items-center justify-center gap-1 group-hover:text-amber-700 transition-colors">
            View full profile
            <FaArrowRight
              className="text-amber-500 transition-transform group-hover:translate-x-1"
              size={12}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BODCard;