import React, { useState } from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import Fade from "react-reveal/Fade";
// Styles
const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 10vh;
  @media screen and (min-width: 600px) {
    padding-bottom: 20%;
  }
  @media screen and (min-width: 1000px) {
    padding-bottom: 20vh;
  }
`;
const Header = styled.h2``;
const PicWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 90%;
`;
const CenterCircle = styled(GatsbyImage)`
  height: 125px;
  aspect-ratio: 1;
  margin: 0 24px;
  border-radius: 50%;
  @media screen and (min-width: 600px) {
    height: 175px;
  }
  @media screen and (min-width: 1000px) {
    height: 250px;
  }
`;
const DotsWrappers = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 15px 0 0 0;
`;
const Dots = styled.div`
  height: 7px;
  width: 7px;
  margin: 5px;
  background-color: ${(props) =>
    props.current ? "var(--carousel-dots)" : "var(--main-font-color)"};
  border-radius: 50%;
  display: inline-block;
  @media screen and (min-width: 600px) {
    height: 11px;
    width: 10px;
  }
`;

const ReviewerName = styled.h3`
  text-align: center;
  padding: 16px 0;
  font-weight: bold;
  color: var(--main-font-color);
`;
const Text = styled.p`
  padding: 16px;
  margin: 8px;
  background-color: var(--review-text-background);
  border: solid var(--main-border-color) 2px;
  color: black;
  width: 90%;
  -webkit-box-shadow: 6px 9px 15px -10px #000000;
  box-shadow: 6px 9px 15px -10px #000000;
  @media screen and (min-width: 920px) {
    padding: 16px;
    margin: 8px 5%;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 250px;
  @media screen and (min-width: 600px) {
    height: 150px;
  }
  @media screen and (min-width: 900px) {
    height: 350px;
  }
`;
const PrevArrow = styled.div`
  cursor: pointer;
  width: 15px;
  height: 15px;
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  transform: rotate(-135deg);

  @media screen and (min-width: 600px) {
    height: 25px;
    width: 25px;
  }
  @media screen and (min-width: 1000px) {
    width: 32px;
    height: 32px;
  }
`;
const AfterArrow = styled.div`
  cursor: pointer;
  width: 15px;
  height: 15px;
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  transform: rotate(45deg);

  @media screen and (min-width: 600px) {
    height: 25px;
    width: 25px;
  }
  @media screen and (min-width: 1000px) {
    width: 32px;
    height: 32px;
  }
`;

const Location = styled.p`
  text-align: right;
  font-style: italic;
  @media screen and (min-width: 920px) {
    padding: 0px 20%;
  }
`;
const Star = styled.div`
  align-items: center;
  color: gold;
  font-size: 32px;
  display: flex;
  justify-content: center;
`;
function Reviews() {
  const data = useStaticQuery(graphql`
    {
      sanityIndex {
        reviewsTitle
        reviews {
          location
          reviewerName
          review
          profilePic {
            altText
            image {
              asset {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(
      current === data.sanityIndex.reviews.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrent(
      current === 0 ? data.sanityIndex.reviews.length - 1 : current - 1
    );
  };
  return (
    <Wrapper>
      <Card>
        <Fade bpttom>
          <Header>{data.sanityIndex.reviewsTitle}</Header>
        </Fade>
        <PicWrapper>
          <CenterCircle
            image={
              data.sanityIndex.reviews[current].profilePic.image.asset
                .gatsbyImageData
            }
            alt={data.sanityIndex.reviews[current].profilePic.altText}
          />
        </PicWrapper>
        <ReviewerName>
          {data.sanityIndex.reviews[current].reviewerName}
        </ReviewerName>
        <Star>&#9733; &#9733; &#9733; &#9733; &#9733; </Star>
        <TextWrapper>
          <PrevArrow onClick={prevSlide} />
          <Text>{data.sanityIndex.reviews[current].review}</Text>
          <AfterArrow onClick={nextSlide} />
        </TextWrapper>
        <Location>- {data.sanityIndex.reviews[current].location}</Location>
        <DotsWrappers>
          {data.sanityIndex.reviews.map((arr, i) => {
            if (i === current) {
              return <Dots key={i} current={true} />;
            } else {
              return <Dots key={i} />;
            }
          })}
        </DotsWrappers>
      </Card>
    </Wrapper>
  );
}

export default Reviews;
