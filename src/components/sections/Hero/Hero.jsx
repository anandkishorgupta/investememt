// src/components/Hero/Hero.jsx
import React from "react";
import { HeroContainer, ContentWrapper, HeroMain } from "./Hero.styles";

// Import sub-components
import Sun from "./Sun";
import Rays from "./Rays";
import Background from "./Background";
import Content from "./Content";
import Slider from "./Slider";

const Hero = () => {
  return (
    <HeroContainer>
      <Sun />
      <Rays />
      <Background />

      <ContentWrapper>
        <HeroMain>
          <Content />
          <Slider />
        </HeroMain>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;
