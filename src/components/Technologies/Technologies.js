import React from "react";
import {
  DiBrackets,
  DiFirebase,
  DiPython,
  DiReact,
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText></SectionText>
    <List>
      {/* front-end */}
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js <br />
            React Native <br />
            Next.js <br />
            SAAS <br />
            Tailwind CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* back-end */}
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js <br />
            Firebase <br />
            Mongo DB
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* front-end */}
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            JavaScript <br />
            Python
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* ui/ux */}
      <ListItem>
        <DiBrackets size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Familiar with <br />
            Figma <br />
            Adobe XD <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
