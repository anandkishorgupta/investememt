// src/components/Hero/Rays/Rays.styles.js
import styled from "styled-components";
import { rotateRays } from "../animations";

export const SunRaysContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  opacity: 0.7;
  transition: opacity 1s ease;

  &.rays-intensity-pulse {
    opacity: 0.9;
  }
`;

export const PrimaryRays = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 1000px;
  background: conic-gradient(
    from 0deg at 50% 50%,
    rgba(255, 220, 100, 0.8) 0deg,
    rgba(255, 200, 50, 0.6) 60deg,
    rgba(255, 180, 30, 0.4) 120deg,
    rgba(255, 220, 100, 0.8) 180deg,
    rgba(255, 200, 50, 0.6) 240deg,
    rgba(255, 180, 30, 0.4) 300deg,
    rgba(255, 220, 100, 0.8) 360deg
  );
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.4;
  animation: ${rotateRays} 120s linear infinite;
`;

export const SecondaryRays = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1200px;
  height: 1200px;
  background: conic-gradient(
    from 45deg at 50% 50%,
    rgba(255, 240, 150, 0.6) 0deg,
    rgba(255, 220, 100, 0.4) 90deg,
    rgba(255, 200, 80, 0.2) 180deg,
    rgba(255, 240, 150, 0.6) 270deg,
    rgba(255, 220, 100, 0.4) 360deg
  );
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
  animation: ${rotateRays} 180s linear infinite reverse;
`;

export const RadialRays = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1500px;
  height: 1500px;
  background: repeating-conic-gradient(
    from 0deg,
    transparent 0deg 10deg,
    rgba(255, 220, 100, 0.3) 10deg 12deg
  );
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0.5;
  animation: ${rotateRays} 60s linear infinite;
`;

export const SunBeams = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2000px;
  height: 2000px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: linear-gradient(
        45deg,
        transparent 45%,
        rgba(255, 220, 100, 0.15) 50%,
        transparent 55%
      ),
      linear-gradient(
        90deg,
        transparent 45%,
        rgba(255, 220, 100, 0.15) 50%,
        transparent 55%
      ),
      linear-gradient(
        135deg,
        transparent 45%,
        rgba(255, 220, 100, 0.15) 50%,
        transparent 55%
      ),
      linear-gradient(
        180deg,
        transparent 45%,
        rgba(255, 220, 100, 0.15) 50%,
        transparent 55%
      );
    filter: blur(10px);
  }
`;