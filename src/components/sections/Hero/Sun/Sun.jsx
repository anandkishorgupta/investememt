// src/components/Hero/Sun/Sun.jsx
import React, { useRef } from "react";
import { useSunEffects } from "./useSunEffects";
import {
  SunContainer,
  SunAtmosphereGlow,
  SunCoreGlow,
  SunCore,
  SunCoreInner,
  SunCoreCenter,
  SunFlare,
  SunSurfaceDetails,
} from "./Sun.styles";

const Sun = () => {
  const sunRef = useRef(null);
  useSunEffects(sunRef);

  return (
    <SunContainer ref={sunRef}>
      <SunAtmosphereGlow />
      <SunCoreGlow />
      <SunCore>
        <SunCoreInner />
        <SunCoreCenter />
      </SunCore>
      <SunFlare />
      <SunSurfaceDetails />
    </SunContainer>
  );
};

export default Sun;
