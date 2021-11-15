import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
const Wrapper = styled.div`
  padding-bottom: 10vh;
`;
const Header = styled.h2``;
const CardWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  @media screen and (min-width: 600px) {
    flex-flow: row wrap;
  }
  @media screen and (min-width: 1000px) {
    justify-content: space-around;
  }
`;
const ServiceCard = styled(Link)`
  width: 50%;
  background-color: var(--service-card-color);
  display: flex;
  flex-flow: column nowrap;
  text-decoration: none;
  border: solid black 5px;
  margin-bottom: 16px;
  border-radius: 5%;

  @media screen and (min-width: 600px) {
    width: 30%;
    padding: 0px 0 15px;
  }
  @media screen and (min-width: 1000px) {
  }
  @media screen and (min-width: 1500px) {
    width: 450px;
  }
`;
const Icon = styled(GatsbyImage)`
  justify-self: center;
  align-self: center;
  width: 100%;
  border-radius: 5% 5% 0px 0px;
  @media screen and (min-width: 600px) {
    height: 20vw;
  }
  @media screen and (min-width: 1000px) {
    height: 25vh;
  }
`;
const Text = styled.h3`
  color: var(--service-card-font-color);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  text-align: center;
  font-weight: bold;
  padding: 8px 8px 0px;
  height: 32px;
  @media screen and (min-width: 600px) {
    padding: 16px 8px;
    height: 45px;
  }
  @media screen and (min-width: 1000px) {
    height: 75px;
  }
`;
const Line = styled.hr`
  width: 50%;
  border: none;
  background: var(--service-card-font-color);
  height: 3px;
`;
const Tag = styled.p`
  color: var(--service-card-font-color);
  line-height: 120%;
  padding-top: 8px;
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;

  @media screen and (min-width: 600px) {
    font-size: 16px;
    padding-top: 16px;
    height: 60px;
  }
  @media screen and (min-width: 1000px) {
    padding: 16px 8px;
    font-size: 24px;
    height: 100px;
  }
`;
function ServiceCards() {
  const data = useStaticQuery(graphql`
    {
      sanityIndex {
        serviceCardsTitle
        services {
          icon {
            altText
            image {
              asset {
                gatsbyImageData
              }
            }
          }
          title
          siteUrl {
            slug {
              current
            }
          }
          tag
        }
      }
    }
  `);
  return (
    <Wrapper>
      <Header>{data.sanityIndex.serviceCardsTitle}</Header>
      <CardWrapper>
        {data.sanityIndex.services.map((arr, i) => {
          return (
            <ServiceCard key={i} to={"/services/" + arr.siteUrl.slug.current}>
              <Icon
                image={arr.icon.image.asset.gatsbyImageData}
                alt={arr.icon.altText}
              />
              <Text>{arr.title}</Text>
              <Line />
              <Tag>{arr.tag}</Tag>
            </ServiceCard>
          );
        })}
      </CardWrapper>
    </Wrapper>
  );
}

export default ServiceCards;
