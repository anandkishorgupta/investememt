import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const glowSize = 120; // Diameter of glow

  return (
    <>
      {typeof window !== "undefined" && window.innerWidth > 768 && (
        <motion.div
          className="pointer-events-none fixed z-[9999] rounded-full bg-gradient-to-br from-amber-400/30 to-orange-400/30 blur-xl"
          style={{
            width: glowSize,
            height: glowSize,
            x: mousePosition.x - glowSize / 2, // cursor at center
            y: mousePosition.y - glowSize / 2,
          }}
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
      )}
    </>
  );
};

export default CursorGlow;
