import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I have worked in different Technologies in web developement.
      From Backend to design
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size='3rem'/>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;