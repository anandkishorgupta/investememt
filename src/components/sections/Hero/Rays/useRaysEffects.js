// src/components/Hero/Rays/useRaysEffects.js
import { useEffect } from "react";

export const useRaysEffects = (raysRef) => {
  useEffect(() => {
    const raysInterval = setInterval(() => {
      if (raysRef.current) {
        raysRef.current.classList.add("rays-intensity-pulse");
        setTimeout(() => {
          if (raysRef.current) {
            raysRef.current.classList.remove("rays-intensity-pulse");
          }
        }, 1000);
      }
    }, 3000);

    return () => clearInterval(raysInterval);
  }, [raysRef]);
};