import React, { useState } from "react";
import styled from "styled-components";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Div2 } from "../Header/HeaderStyles";
import { projects } from "../../constants/constants";
import { NavLink } from "../Header/HeaderStyles";
import { ButtonContainer, Button } from "./ProjectsStyles";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

  const uniqueCategories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <Section nodepadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <Div2>
        {uniqueCategories.map((category) => (
          <NavLink key={category} onClick={() => handleCategoryClick(category)}>
            {category}
          </NavLink>
        ))}
      </Div2>
      <GridContainer>
        {filteredProjects.map(
          ({ id, image, title, description, tags, site, visit }) => (
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title={true}>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit}>Code</ExternalLinks>
                <ExternalLinks href={site}>Site</ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
