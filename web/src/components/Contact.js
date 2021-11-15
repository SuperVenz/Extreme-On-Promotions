import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
const Wrapper = styled.address`
  padding: 50px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 920px) {
    margin-top: 0%;
  }
`;
const Header = styled.h2`
  color: var(--contact-header);
  text-align: center;
  font-weight: bold;
`;

const ContactInfo = styled.a`
  color: var(--contact-links);
  text-decoration: none;
  font-size: 18px;
  @media screen and (min-width: 600px) {
    font-size: 24px;
  }
  @media screen and (min-width: 920px) {
    font-size: 24px;
    width: 100%;
  }
`;
const Icon = styled(GatsbyImage)`
  background: var(--main-header-color);
  border: solid var(--main-header-color) 5px;
  border-radius: 50%;
  margin-right: 16px;
  aspect-ratio: 1;
  height: 3vh;
  @media screen and (min-width: 920px) {
    height: 25px;
  }
`;
const Row = styled.div`
  display: flex;
  height: 5vw;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 16px 0px;
  @media screen and (min-width: 920px) {
  }
`;

function Contact(props) {
  const data = useStaticQuery(graphql`
    {
      sanityContact {
        emailIcon {
          altText
          image {
            asset {
              gatsbyImageData
            }
          }
        }
        phoneIcon {
          image {
            asset {
              gatsbyImageData
            }
          }
          altText
        }
        number
        title
        email
      }
    }
  `);
  let phone = `tel:${data.sanityContact.number}`;
  let email = `mailto: ${data.sanityContact.email}`;

  return (
    <Wrapper>
      <Header>{data.sanityContact.title}</Header>
      <Row>
        <Icon
          image={data.sanityContact.phoneIcon.image.asset.gatsbyImageData}
          alt={data.sanityContact.phoneIcon.altText}
        />
        <ContactInfo href={phone}>{data.sanityContact.number}</ContactInfo>
      </Row>
      <Row>
        <Icon
          image={data.sanityContact.emailIcon.image.asset.gatsbyImageData}
          alt={data.sanityContact.emailIcon.altText}
        />
        <ContactInfo href={email}>{data.sanityContact.email}</ContactInfo>
      </Row>
    </Wrapper>
  );
}

export default Contact;
