import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
import BackBar from "../components/BackBar";
const Wrapper = styled.div`
  text-align: center;
  padding: 24px;
`;
function submit({ data }) {
  return (
    <Layout
      title={data.sanityThankYou.seo.pageTitle}
      keywords={data.sanityThankYou.seo.keywords}
      description={data.sanityThankYou.seo.description}
    >
      <BackBar />
      <Wrapper>
        <h1>Thank You!</h1>
        <p>Form Submitted</p>
      </Wrapper>
    </Layout>
  );
}
export const query = graphql`
  {
    sanityThankYou {
      seo {
        pageTitle
        keywords
        description
      }
    }
  }
`;
export default submit;
