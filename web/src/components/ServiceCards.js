import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";
const Wrapper = styled.div`
  padding-bottom: 20vh;
  @media screen and (min-width: 600px) {
    padding-bottom: 20%;
  }
  @media screen and (min-width: 1000px) {
    padding-bottom: 40vh;
  }
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
  position: relative;
  background-color: var(--service-card-color);
  display: flex;
  flex-flow: column nowrap;
  text-decoration: none;
  border: solid var(--main-border-color) 3px;
  margin-bottom: 16px;
  padding-bottom: 10%;
  border-radius: 5px;
  -webkit-box-shadow: 6px 9px 15px -2px #000000;
  box-shadow: 6px 9px 15px -2px #000000;
  @media screen and (min-width: 600px) {
    width: 30%;
    padding: 0px 0px 15px;
  }
  @media screen and (min-width: 1000px) {
  }
  @media screen and (min-width: 1500px) {
    width: 24%;
  }
`;
const LinkIconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 5px;
  z-index: 50;
  @media screen and (min-width: 600px) {
    height: 25px;
    width: 15px;
    right: 15px;
  }
  @media screen and (min-width: 600px) {
    right: 20px;
  }
`;
const LinkIcon = styled(GatsbyImage)`
  width: 15px;
  height: 15px;
  @media screen and (min-width: 600px) {
    height: 25px;
    width: 25px;
  }
`;

const Icon = styled(GatsbyImage)`
  background-color: var(--main-border-color);
  justify-self: center;
  align-self: center;
  width: 100%;
  height: 30vw;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-bottom: solid black 3px;

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
    padding: 16px 8px 16px;
    height: 45px;
  }
  @media screen and (min-width: 1000px) {
    height: 75px;
    padding: 16px 20px 0px;
  }
`;
const Line = styled.hr`
  width: 50%;
  border: none;
  background: var(--service-card-font-color);
  height: 3px;
  border-radius: 25%;
  @media screen and (min-width: 600px) {
  }
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
    height: 80px;
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
      sanityWidgets {
        serviceCardLinkIcon {
          altText
          image {
            asset {
              gatsbyImageData
            }
          }
        }
      }
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
      <CardWrapper left>
        {data.sanityIndex.services.map((arr, i) => {
          return (
            <ServiceCard key={i} to={"/services/" + arr.siteUrl.slug.current}>
              <LinkIconWrapper>
                <LinkIcon
                  image={
                    data.sanityWidgets.serviceCardLinkIcon.image.asset
                      .gatsbyImageData
                  }
                  alt={data.sanityWidgets.serviceCardLinkIcon.altText}
                />
              </LinkIconWrapper>
              <Icon
                image={arr.icon.image.asset.gatsbyImageData}
                alt={arr.icon.altText}
              />
              <Fade left big>
                <Text>{arr.title}</Text>
                <Line />
                <Tag>{arr.tag}</Tag>
              </Fade>
            </ServiceCard>
          );
        })}
      </CardWrapper>
    </Wrapper>
  );
}

export default ServiceCards;
