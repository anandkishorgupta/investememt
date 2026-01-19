
import { motion } from "framer-motion";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BOD_INFO } from "../../Constant/bodInfo"; // Array of directors

const BOD = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="lg:text-4xl sm:text-3xl font-bold text-amber-700">
          Board of Directors
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-amber-800 max-w-3xl mx-auto text-sm md:text-base"
        >
          Our board members are highly experienced professionals dedicated to
          driving growth, innovation, and lasting value for our investors and
          stakeholders.
        </motion.p>
      </div>

      {/* Flexbox Cards */}
      <div className="flex flex-wrap gap-6 max-w-7xl mx-auto lg:justify-start justify-center">
        {BOD_INFO.map((director, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-yellow-50/20 transition-all duration-300 hover:-translate-y-2 flex-shrink-0"
            style={{ width: "250px" }} // Fixed card width
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={director.image}
                alt={director.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm text-center">
                  {director.description}
                </p>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 text-center flex flex-col items-center">
              <h3 className="text-xl font-bold text-amber-700">
                {director.name}
              </h3>
              <p className="text-yellow-600 font-medium mt-1">
                {director.title}
              </p>

              {/* Social Icons */}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default BOD;
