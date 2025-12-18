// src/components/Hero/Rays/Rays.jsx
import React, { useRef } from "react";
import { useRaysEffects } from "./useRaysEffects";
import {
  SunRaysContainer,
  PrimaryRays,
  SecondaryRays,
  RadialRays,
  SunBeams,
} from "./Rays.styles";

const Rays = () => {
  const raysRef = useRef(null);
  useRaysEffects(raysRef);

  return (
    <SunRaysContainer ref={raysRef}>
      <PrimaryRays />
      <SecondaryRays />
      <RadialRays />
      <SunBeams />
    </SunRaysContainer>
  );
};

export default Rays;
