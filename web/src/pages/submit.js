import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
function submit({ data }) {
  return (
    <Layout
      title={data.sanityThankYou.seo.pageTitle}
      keywords={data.sanityThankYou.seo.keywords}
      description={data.sanityThankYou.seo.description}
    >
      <h1>Thank You!</h1>
      <p>Form Submitted</p>
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
