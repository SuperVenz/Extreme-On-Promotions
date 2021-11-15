import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

const Wrapper = styled.div`
  display: none;
  flex-flow: row nowrap;
  position: absolute;
  align-items: center;
  top: 0;
  z-index: 50;
  margin-left: 16px;
  h4 {
    color: white;
    padding-left: 1%;
    margin-top: 8px;
    padding-left: 16px;
    font-style: italic;
  }
  @media screen and (min-width: 600px) {
    display: flex;
  }
`;
const Pic = styled(GatsbyImage)`
  width: 35px;
  height: 35px;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;
function Logo() {
  const data = useStaticQuery(graphql`
    {
      sanityWidgets {
        companyName
        logo {
          altText
          image {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  return (
    <Wrapper>
      <Pic
        image={data.sanityWidgets.logo.image.asset.gatsbyImageData}
        alt={data.sanityWidgets.logo.altText}
      />
      <h4>{data.sanityWidgets.companyName}</h4>
    </Wrapper>
  );
}

export default Logo;
