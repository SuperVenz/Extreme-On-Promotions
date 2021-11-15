import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import BackBar from "../components/BackBar";

const Wrapper = styled.div`
  padding-bottom: 10vh;
`;
const StyledImage = styled(GatsbyImage)`
  @media screen and (min-width: 600px) {
    background-position: center center;
    background-size: cover; /* <------ */
    background-repeat: no-repeat;
    width: 100%;
    height: 80vh;
  }
`;
const ContentWrapper = styled.div`
  @media screen and (min-width: 600px) {
    height: 25vh;
  }
  @media screen and (min-width: 1000px) {
    height: 50vh;
  }
`;
const Header = styled.h1`
  padding: 24px 0;
  text-align: center;
`;
const Text = styled.p`
  padding: 0 16px;
  @media screen and (min-width: 600px) {
    padding: 0 15%;
  }
`;

function Service({ data }) {
  return (
    <Layout
      title={data.sanityService.seo.pageTitle}
      keywords={data.sanityService.seo.keywords}
      description={data.sanityService.seo.description}
    >
      <BackBar />
      <Wrapper>
        <StyledImage
          image={data.sanityService.picture.image.asset.gatsbyImageData}
          alt={data.sanityService.picture.altText}
        />
        <ContentWrapper>
          <Header>{data.sanityService.textContent.header}</Header>
          <Text>{data.sanityService.textContent.text}</Text>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
}
export default Service;
export const query = graphql`
  query ($current: String!) {
    sanityService(slug: { current: { eq: $current } }) {
      seo {
        pageTitle
        description
        keywords
      }
      textContent {
        header
        text
      }
      picture {
        altText
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
