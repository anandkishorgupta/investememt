// src/components/Hero/Content/Content.styles.js
import styled from "styled-components";
import { rayPulse } from "../animations";

export const HeroTitle = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;

  h2 {
    font-size: 2.8rem;
    font-weight: 400;
    margin-top: 1.5rem;
    line-height: 1.3;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 215, 0, 0.3);
    background: linear-gradient(to right, #fffaf0, #ffd700, #ffcc00);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: ${rayPulse} 8s ease-in-out infinite;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.7rem;
    }
  }
`;

export const SunriseText = styled.span`
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: #ffd700;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.7), 0 0 40px rgba(255, 215, 0, 0.3);
  position: relative;
  padding-bottom: 0.5rem;
  animation: ${rayPulse} 4s ease-in-out infinite;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      #ffd700,
      #ffcc00,
      #ffd700,
      transparent
    );
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  }
`;

export const Subtitle = styled.p`
  color: #fff8e1;
  font-size: 1.1rem;
  margin-top: 1.5rem;
  opacity: 0.95;
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
`;