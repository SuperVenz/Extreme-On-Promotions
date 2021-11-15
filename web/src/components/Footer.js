import React from "react";
import Form from "./Form";
import styled from "styled-components";
import Contact from "./Contact";
import { useStaticQuery, graphql } from "gatsby";

const Wrapper = styled.div``;
const ContactWrapper = styled.div`
  background: var(--contact-background);
  @media screen and (min-width: 920px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-start;
  }
`;
const About = styled.div`
  display: none;
  @media screen and (min-width: 920px) {
    width: 40%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    h2 {
      padding-bottom: 24px;
      padding-top: 5%;
    }
  }
`;
const Header = styled.h2`
  color: var(--contact-header);
`;
const Text = styled.p`
  color: var(--contact-header);
  padding-bottom: 24px;
  width: 80%;
`;
function Footer() {
  const data = useStaticQuery(graphql`
    {
      sanityContact {
        header
        text
      }
    }
  `);
  return (
    <Wrapper>
      <Form />
      <ContactWrapper>
        <About>
          <Header>{data.sanityContact.header}</Header>
          <Text>{data.sanityContact.text}</Text>
        </About>
        <Contact />
      </ContactWrapper>
    </Wrapper>
  );
}

export default Footer;
