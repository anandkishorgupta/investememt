import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { itemVariants } from "./bod.motion ";
const BODCard = ({ director }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-white w-[250px] rounded-xl overflow-hidden shadow-lg border border-yellow-50/20 transition-all duration-300"
    >
      <div className="relative h-64  overflow-hidden">
        <img
          src={director.image}
          alt={director.name}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <p className="text-white text-sm text-center">
            {director.description}
          </p>
        </div>
      </div>

      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-amber-700">
          {director.name}
        </h3>
        <p className="text-yellow-600 font-medium mt-1">
          {director.title}
        </p>

        <div className="flex justify-center space-x-4 mt-3">
          {director.socials?.facebook && (
            <a
              href={director.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-900 hover:text-blue-600 transition-colors"
            >
              <FaFacebookF />
            </a>
          )}
          {director.socials?.instagram && (
            <a
              href={director.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              <FaInstagram />
            </a>
          )}
          {director.socials?.linkedin && (
            <a
              href={director.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-700 transition-colors"
            >
              <FaLinkedinIn />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BODCard;
