// src/components/Hero/Background/Background.styles.js
import styled from "styled-components";

export const GoldenBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

export const LightFloodTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background: linear-gradient(
    to bottom,
    rgba(255, 200, 50, 0.2) 0%,
    rgba(255, 180, 30, 0.1) 30%,
    rgba(255, 150, 0, 0.05) 60%,
    transparent 100%
  );
  filter: blur(40px);
`;

export const LightFloodBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(
    to top,
    rgba(255, 220, 100, 0.15) 0%,
    rgba(255, 200, 50, 0.08) 20%,
    transparent 60%
  );
  filter: blur(30px);
`;

export const AmbientGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 215, 0, 0.25) 0%,
    rgba(255, 180, 0, 0.15) 30%,
    rgba(255, 150, 0, 0.08) 60%,
    transparent 80%
  );
  filter: blur(50px);
`;