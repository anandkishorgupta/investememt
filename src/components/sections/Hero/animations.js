// src/components/Hero/animations.js
import { keyframes } from 'styled-components';

export const sunPulse = keyframes`
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  50% { transform: translate(-50%, -50%) scale(1.08); opacity: 1.1; }
`;

export const rayPulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 0.9; }
`;

export const sunFlare = keyframes`
  0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.9; transform: translate(-50%, -50%) scale(1.05); }
`;

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const rotateRays = keyframes`
  to { transform: translate(-50%, -50%) rotate(360deg); }
`;