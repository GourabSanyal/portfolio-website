import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row notepading>
    <LeftSection>
      <SectionTitle main center>
        Hey,
        <br />
        I'm Gourab,
        <br />a Web &
        <br />App developer
      </SectionTitle>
      <SectionText>Techie by Passion, Self-Taught, and Meme Aficionado (っ＾▿＾)っ</SectionText>
      <Button onClick={() => (window.location = "#about")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
