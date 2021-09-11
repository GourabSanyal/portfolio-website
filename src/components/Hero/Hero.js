import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (
  <Section row notepading>
    <LeftSection>
      <SectionTitle main center>
    Hey,<br />
    I'm Gourab
      </SectionTitle>
      <SectionText>        
          Curious, Enthusiastic and I love to code :)                
      </SectionText>
      <Button onClick={() => window.location = "#about" }>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;