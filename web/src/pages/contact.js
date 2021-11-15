import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import BackBar from "../components/BackBar";
import { graphql } from "gatsby";
const Wrapper = styled.div``;
function contact({ data }) {
  return (
    <Wrapper>
      <BackBar />
      <Layout
        title={data.sanityContactPage.seo.pageTitle}
        keywords={data.sanityContactPage.seo.keywords}
        description={data.sanityContactPage.seo.description}
      ></Layout>
    </Wrapper>
  );
}
export const query = graphql`
  {
    sanityContactPage {
      seo {
        pageTitle
        description
        keywords
      }
    }
  }
`;

export default contact;
