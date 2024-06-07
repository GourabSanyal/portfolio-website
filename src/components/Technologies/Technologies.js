import React from "react";
import { DiBrackets, DiFirebase, DiPython, DiReact } from "react-icons/di";

import { AiOutlineDeploymentUnit } from "react-icons/ai";
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
            Next Js <br />
            React Native <br />
            React Js <br />
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
            Node Js <br />
            Firebase <br />
            MongoDB
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
            TypeScript <br />
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
      {/* deployment */}
      <ListItem>
        <AiOutlineDeploymentUnit size="3rem" />
        <ListContainer>
          <ListTitle>Deployment</ListTitle>
          <ListParagraph>
            Familiar with <br />
            Docker <br />
            Netlify <br />
            Render
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
