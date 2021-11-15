import React from "react";
import Carousel from "../components/Carousel";
import HeroBanner from "../components/HeroBanner";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import Reviews from "../components/Reviews";
import ServiceCards from "../components/ServiceCards";
import { graphql } from "gatsby";

function Index({ data }) {
  return (
    <Layout
      title={data.sanityIndex.seo.pageTitle}
      keywords={data.sanityIndex.seo.keywords}
      description={data.sanityIndex.seo.description}
    >
      <Logo />
      <HeroBanner />
      <Carousel />
      <ServiceCards />
      <Reviews />
    </Layout>
  );
}
export const query = graphql`
  {
    sanityIndex {
      seo {
        description
        pageTitle
        keywords
      }
    }
  }
`;
export default Index;
