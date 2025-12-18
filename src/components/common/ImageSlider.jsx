// import React from "react";

// const ImageSlider = () => {
//   return <div>ImageSlider</div>;
// };

// export default ImageSlider;

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
  FaStar,
  FaCrown,
  FaGem,
  FaArrowRight,
} from "react-icons/fa";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Investment slides data
  const slides = [
    {
      id: 1,
      title: "Goldstar Shoes",
      subtitle: "WE HAVE INVESTED ON",
      description:
        "Kiran Shoes Manufacturers (KSM), founded in 1970 and headquartered in Kathmandu, Nepal, is a prominent leader in the footwear industry",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1600&q=80",
      stats: "45+ Years Legacy",
      cta: "Explore More",
    },
    {
      id: 2,
      title: "Himalayan Bank",
      subtitle: "STRATEGIC PARTNERSHIP",
      description:
        "Leading financial institution with nationwide presence, driving economic growth through innovative banking solutions",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80",
      stats: "300+ Branches",
      cta: "View Portfolio",
    },
    {
      id: 3,
      title: "Everest Brewery",
      subtitle: "PREMIUM BEVERAGE INVESTMENT",
      description:
        "Crafting excellence in beverage production with sustainable practices and market-leading innovation",
      image:
        "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?auto=format&fit=crop&w=1600&q=80",
      stats: "Market Leader",
      cta: "Learn More",
    },
  ];

  // Mouse move effect for sun rays
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto slide functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Sun rays animation
  const sunRays = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    rotation: i * 30,
    length: 150 + Math.random() * 50,
    delay: i * 0.1,
  }));

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Glowing Sun Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Sun Core */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.05, 1],
            rotate: 360,
          }}
          transition={{
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {/* Sun Core Glow */}
          <div className="relative w-96 h-96">
            {/* Sun Core */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 shadow-2xl" />

            {/* Inner Glow */}
            <div className="absolute inset-10 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-300" />

            {/* Hot Core */}
            <div className="absolute inset-20 rounded-full bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200" />
          </div>
        </motion.div>

        {/* Animated Sun Rays */}
        {sunRays.map((ray) => (
          <motion.div
            key={ray.id}
            className="absolute top-1/2 left-1/2 origin-center"
            style={{
              rotate: `${ray.rotation}deg`,
              width: `${ray.length}px`,
              height: "4px",
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              scaleX: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              delay: ray.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="h-full bg-gradient-to-r from-transparent via-yellow-500/80 to-transparent" />
          </motion.div>
        ))}

        {/* Sun Glow Effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-r from-yellow-600/10 via-orange-500/15 to-yellow-600/10 blur-3xl" />
        </motion.div>

        {/* Interactive Light Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-yellow-300/30"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: "-100vh",
                opacity: [0, 0.8, 0],
                x: mousePosition.x * 0.01,
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Sunlight Beams */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 h-full w-32 bg-gradient-to-b from-yellow-500/5 via-transparent to-transparent"
              style={{
                left: `${i * 20}%`,
                transform: `rotate(${i * 15}deg)`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Branding */}
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-900/20 to-yellow-900/10 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-700/30">
                  <FaCrown className="text-yellow-400" />
                  <span className="text-yellow-300 font-medium tracking-wider">
                    SAARATHI EQUITY FUND
                  </span>
                  <FaCrown className="text-yellow-400" />
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="text-white">Building</span>
                  <span className="block">
                    <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
                      Golden
                    </span>
                    <span className="text-white"> Futures</span>
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl">
                  Strategic investments in market-leading companies, creating
                  sustainable value and transformative growth across industries.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    value: "₹250Cr+",
                    label: "Assets Under Management",
                    icon: FaGem,
                  },
                  { value: "15+", label: "Portfolio Companies", icon: FaStar },
                  { value: "5", label: "Years Excellence", icon: FaCrown },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-gradient-to-br from-yellow-900/20 to-black/40 backdrop-blur-sm p-4 rounded-2xl border border-yellow-800/30"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-700/30 to-yellow-900/20 flex items-center justify-center">
                        <stat.icon className="text-yellow-400 text-xl" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">
                          {stat.value}
                        </div>
                        <div className="text-yellow-300/80 text-sm">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold rounded-xl flex items-center space-x-3 group"
                >
                  <span>Explore Investments</span>
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-yellow-600/50 text-yellow-400 font-bold rounded-xl hover:bg-yellow-900/20 transition-colors"
                >
                  Contact Our Team
                </motion.button>
              </div>
            </motion.div>

            {/* Right - Image Slider */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main Slider Container */}
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-yellow-900/30">
                <AnimatePresence mode="wait">
                  {slides.map(
                    (slide, index) =>
                      index === currentSlide && (
                        <motion.div
                          key={slide.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0"
                        >
                          {/* Slide Image */}
                          <div className="absolute inset-0">
                            <img
                              src={slide.image}
                              alt={slide.title}
                              className="w-full h-full object-cover"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                          </div>

                          {/* Slide Content */}
                          <div className="absolute bottom-0 left-0 right-0 p-8">
                            <motion.div
                              initial={{ y: 50, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.2 }}
                              className="space-y-4"
                            >
                              {/* Badge */}
                              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-900/40 to-yellow-900/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                                <span className="text-yellow-300 text-sm font-medium">
                                  {slide.subtitle}
                                </span>
                              </div>

                              {/* Title */}
                              <h3 className="text-4xl font-bold text-white">
                                {slide.title}
                              </h3>

                              {/* Description */}
                              <p className="text-gray-300 text-lg max-w-2xl">
                                {slide.description}
                              </p>

                              {/* Stats & CTA */}
                              <div className="flex items-center justify-between pt-4">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-600/30 to-yellow-800/20 flex items-center justify-center">
                                    <FaStar className="text-yellow-400" />
                                  </div>
                                  <span className="text-yellow-300 font-bold">
                                    {slide.stats}
                                  </span>
                                </div>

                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold rounded-xl flex items-center space-x-2 group"
                                >
                                  <span>{slide.cta}</span>
                                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </motion.button>
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      )
                  )}
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="absolute top-4 right-4 flex items-center space-x-3">
                  <button
                    onClick={() => setAutoPlay(!autoPlay)}
                    className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-yellow-400 hover:bg-black/70 transition-colors"
                  >
                    {autoPlay ? <FaPause /> : <FaPlay />}
                  </button>
                </div>

                {/* Slide Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "w-8 bg-gradient-to-r from-yellow-400 to-orange-400"
                          : "bg-gray-600 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-yellow-400 hover:bg-black/70 transition-colors"
                >
                  <FaChevronLeft />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-yellow-400 hover:bg-black/70 transition-colors"
                >
                  <FaChevronRight />
                </button>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-32 h-32"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full border-4 border-yellow-500/20 rounded-full" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24"
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full border-2 border-yellow-400/30 rounded-full" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-yellow-500/50 flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-yellow-400 to-transparent rounded-full mt-2" />
        </div>
      </motion.div>

      {/* Floating Golden Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [null, -100],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 15,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
};

export default ImageSlider;
