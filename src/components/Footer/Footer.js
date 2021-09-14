import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer,  FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { SectionTitle } from '../../styles/GlobalComponents';

const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <LinkList>
        <SectionTitle>Contact</SectionTitle>       
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel:+91-7439090939">+91-7439090939</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:sanyal.gourab@gmail.com">sanyal.gourab@gmail.com</LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/gourabsanyal/">
              <AiFillGithub size = "3rem"/>
            </SocialIcons>
            <SocialIcons href="https://linkedin.com/in/gourabsanyal/">
              <AiFillLinkedin size = "3rem"/>
            </SocialIcons>
            </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
