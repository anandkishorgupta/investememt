// src/components/Hero/Sun/Sun.styles.js
import styled from "styled-components";
import { sunPulse, rayPulse, sunFlare } from "../animations";

export const SunContainer = styled.div`
  position: absolute;
  top: -150px;
  left: -150px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  z-index: 1;
  filter: brightness(1) blur(0px);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);

  &.sun-intense-glow {
    filter: brightness(1.5) blur(2px);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
    top: -100px;
    left: -100px;
  }
`;

export const SunAtmosphereGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 200, 0, 0.15) 0%,
    rgba(255, 150, 0, 0.08) 30%,
    rgba(255, 100, 0, 0.03) 50%,
    transparent 70%
  );
  filter: blur(40px);
  z-index: 1;
  animation: ${rayPulse} 6s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 500px;
    height: 500px;
  }
`;

export const SunCoreGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 200, 0.6) 0%,
    rgba(255, 220, 100, 0.4) 30%,
    rgba(255, 180, 50, 0.2) 50%,
    transparent 80%
  );
  filter: blur(30px);
  z-index: 2;
  animation: ${sunPulse} 5s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const SunCore = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  border-radius: 50%;
  z-index: 4;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const SunCoreInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    #ffffff 0%,
    #ffff80 15%,
    #ffdd00 40%,
    #ff6600 70%,
    #ff3300 100%
  );
  box-shadow: inset 0 0 50px rgba(255, 255, 255, 0.8),
    inset 20px -20px 60px rgba(255, 100, 0, 0.6),
    inset -20px 20px 60px rgba(255, 200, 0, 0.6),
    0 0 100px rgba(255, 200, 0, 0.8), 0 0 200px rgba(255, 150, 0, 0.6);
  animation: ${sunPulse} 4s ease-in-out infinite;
`;

export const SunCoreCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    #ffffff 0%,
    #ffff80 30%,
    #ffcc00 60%,
    transparent 100%
  );
  filter: blur(2px);
  animation: ${sunPulse} 3s ease-in-out infinite;
`;

export const SunFlare = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(
    ellipse at 30% 30%,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 200, 0.2) 20%,
    rgba(255, 200, 100, 0.1) 40%,
    transparent 70%
  );
  filter: blur(15px);
  z-index: 3;
  animation: ${sunFlare} 7s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 170px;
    height: 170px;
  }
`;

export const SunSurfaceDetails = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(
      circle at 70% 20%,
      rgba(255, 100, 0, 0.4) 2%,
      transparent 2.5%
    ),
    radial-gradient(
      circle at 30% 70%,
      rgba(255, 150, 0, 0.4) 3%,
      transparent 3.5%
    ),
    radial-gradient(
      circle at 60% 50%,
      rgba(255, 200, 0, 0.3) 2%,
      transparent 2.5%
    ),
    radial-gradient(
      circle at 40% 40%,
      rgba(255, 100, 0, 0.3) 4%,
      transparent 4.5%
    );
  filter: blur(1px);
  z-index: 3;

  @media (max-width: 768px) {
    width: 130px;
    height: 130px;
  }
`;