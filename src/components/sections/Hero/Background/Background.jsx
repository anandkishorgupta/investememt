// src/components/Hero/Background/Background.jsx
import React from "react";
import {
  GoldenBackground,
  LightFloodTop,
  LightFloodBottom,
  AmbientGlow,
} from "./Background.styles";

const Background = () => (
  <GoldenBackground>
    <LightFloodTop />
    <LightFloodBottom />
    <AmbientGlow />
  </GoldenBackground>
);

export default Background;
