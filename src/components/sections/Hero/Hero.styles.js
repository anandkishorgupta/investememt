// src/components/Hero/Hero.styles.js
import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #0a0800;
  color: white;
  isolation: isolate;
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  padding: 6rem 5% 4rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 4rem 1rem 2rem;
  }
`;

export const HeroMain = styled.main``;