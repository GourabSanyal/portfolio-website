import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row notepading>
    <LeftSection>
      <SectionTitle main center>
    Welcome to <br />
    My Personal Portfolio
      </SectionTitle>
      <SectionText>
        A self taught fullstack developer who fell in love with coding being a management student
      </SectionText>
      <Button onClick={() => window.location = "/about" }>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;