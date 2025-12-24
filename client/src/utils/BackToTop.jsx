// components/BackToTop.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl border border-amber-200 bg-gradient-to-br from-white to-amber-50 flex items-center justify-center text-amber-600 hover:text-amber-700 shadow-lg cursor-pointer"
    >
      <FaChevronUp />
    </motion.button>
  );
};

export default BackToTop;
