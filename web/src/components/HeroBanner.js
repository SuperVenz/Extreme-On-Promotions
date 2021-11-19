import React from "react";
import styled from "styled-components";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql, Link } from "gatsby";

// Styles
const Hero = styled(BackgroundImage)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;
const Header = styled.h1`
  color: var(--header-font-color);
  text-align: center;
  padding: 16px 8px;
  font-weight: bold;
  @media screen and (min-width: 600px) {
    margin: 0px;
  }
`;
const Text = styled.p`
  color: var(--subtext-font-color);
  width: 80%;
  padding: 16px 8px;
  margin-bottom: 26px;
  font-weight: 500;
  text-align: center;
  @media screen and (min-width: 600px) {
  }
`;
const Button = styled(Link)`
  background: var(--hero-bttn-background);
  color: var(--hero-bttn-text-color);
  border: none;
  width: 60%;
  padding: 10px 0;
  text-align: center;
  font-size: 32px;
  border-radius: 16px;
  cursor: pointer;
  text-decoration: none;
  @media screen and (min-width: 600px) {
    width: 33%;
    padding: 16px 0;
  }
  @media screen and (min-width: 920px) {
    width: 20%;
  }
`;

function HeroBanner() {
  const data = useStaticQuery(graphql`
    {
      sanityIndex {
        heroBanner {
          background {
            altText
            image {
              asset {
                gatsbyImageData
              }
            }
          }
          button {
            tagline
          }
          textContent {
            text
            header
          }
        }
      }
    }
  `);
  const heroBackground = convertToBgImage(
    data.sanityIndex.heroBanner.background.image.asset.gatsbyImageData
  );
  return (
    <Hero {...heroBackground} preserveStackingContext alt="back ground pic">
      <Header>{data.sanityIndex.heroBanner.textContent.header}</Header>
      <Text>{data.sanityIndex.heroBanner.textContent.text}</Text>
      <Button to="/contact">
        {data.sanityIndex.heroBanner.button.tagline}
      </Button>
    </Hero>
  );
}

export default HeroBanner;
