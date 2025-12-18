// src/components/Hero/Sun/useSunEffects.js
import { useEffect } from "react";

export const useSunEffects = (sunRef) => {
  useEffect(() => {
    const sunInterval = setInterval(() => {
      if (sunRef.current) {
        sunRef.current.classList.add("sun-intense-glow");
        setTimeout(() => {
          if (sunRef.current) {
            sunRef.current.classList.remove("sun-intense-glow");
          }
        }, 1500);
      }
    }, 5000);

    return () => clearInterval(sunInterval);
  }, [sunRef]);
};