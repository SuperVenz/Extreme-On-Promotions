import React from "react";
import Carousel from "../components/Carousel";
import HeroBanner from "../components/HeroBanner";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import Reviews from "../components/Reviews";
import ServiceCards from "../components/ServiceCards";
import { graphql } from "gatsby";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 0 16px;
  display: flex;
  flex-flow: column nowrap;
  padding-bottom: 15vh;
  @media screen and (min-width: 600px) {
    padding-bottom: 20%;
  }
  @media screen and (min-width: 1000px) {
    padding-bottom: 10vh;
  }
`;
const Text = styled.p`
  @media screen and (min-width: 600px) {
    margin: 0px 11%;
  }
`;
const Header = styled.h2``;

function Index({ data }) {
  return (
    <Layout
      title={data.sanityIndex.seo.pageTitle}
      keywords={data.sanityIndex.seo.keywords}
      description={data.sanityIndex.seo.description}
    >
      <Logo />
      <HeroBanner />
      <Wrapper>
        <Header>{data.sanityIndex.topContent.header}</Header>
        <Text>{data.sanityIndex.topContent.text}</Text>
      </Wrapper>
      <Carousel />
      <ServiceCards />
      <Reviews />
    </Layout>
  );
}
export const query = graphql`
  {
    sanityIndex {
      topContent {
        text
        header
      }
      seo {
        description
        pageTitle
        keywords
      }
    }
  }
`;
export default Index;
