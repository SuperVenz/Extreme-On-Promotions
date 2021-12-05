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
    margin: 0px 10%;
  }
  @media screen and (min-width: 1000px) {
    margin: 0px 20%;
  }
`;
const Text = styled.p`
  color: var(--subtext-font-color);
  padding: 16px 8px;
  margin: 0px 10% 26px;
  font-weight: 500;
  text-align: center;
  @media screen and (min-width: 600px) {
  }
`;
const Button = styled(Link)`
  background: var(--hero-bttn-background);
  color: var(--hero-bttn-text-color);
  border: solid var(--main-border-color) 2px;
  width: auto;
  padding: 10px 16px;
  text-align: center;
  font-size: 32px;
  cursor: pointer;
  border-bottom-left-radius: 5%;
  border-bottom-right-radius: 5%;
  -webkit-box-shadow: 6px 9px 15px -2px #000000;
  box-shadow: 6px 9px 15px -2px #000000;
  text-decoration: none;
  @media screen and (min-width: 600px) {
    padding: 16px 16px;
  }
  @media screen and (min-width: 920px) {
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
    <Hero
      loading="eager"
      {...heroBackground}
      preserveStackingContext
      alt="back ground pic"
    >
      <Header>{data.sanityIndex.heroBanner.textContent.header}</Header>
      <Text>{data.sanityIndex.heroBanner.textContent.text}</Text>
      <Button to="/contact">
        {data.sanityIndex.heroBanner.button.tagline}
      </Button>
    </Hero>
  );
}

export default HeroBanner;
