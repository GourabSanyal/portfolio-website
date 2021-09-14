import React from 'react';
import { DiBrackets, DiFirebase, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    </SectionText>
    <List>
      
      {/* front-end */}
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js <br/>
            Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

       {/* back-end */}
      <ListItem>
        <DiFirebase size='3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js <br/>
            Firebase
            
          </ListParagraph>
        </ListContainer>
      </ListItem>

       {/* front-end */}
      <ListItem>
        <DiPython size='3rem'/>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            JavaScript <br/>
            Python
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* ui/ux */}
      <ListItem>
        <DiBrackets size='3rem'/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Material UI <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;