import React, { useState } from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 10vh;
`;
const Header = styled.h2``;
const PicWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
const PrevArrow = styled.div`
  cursor: pointer;
  width: 15px;
  align-self: flex-start;
  margin-top: 50%;
  height: 15px;
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  transform: rotate(-135deg);
  @media screen and (min-width: 600px) {
    height: 25px;
    width: 25px;
    margin-top: 33%;
  }
  @media screen and (min-width: 1000px) {
    width: 32px;
    height: 32px;
    margin-top: 20%;
  }
`;
const AfterArrow = styled.div`
  cursor: pointer;
  width: 15px;
  height: 15px;
  align-self: flex-start;
  margin-top: 50%;
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  transform: rotate(45deg);
  @media screen and (min-width: 600px) {
    height: 25px;
    width: 25px;
    margin-top: 33%;
  }
  @media screen and (min-width: 1000px) {
    width: 32px;
    height: 32px;
    margin-top: 20%;
  }
`;
const Card = styled.div`
  width: 80%;
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
    props.current ? "var(--carousel-dots)" : "black"};
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
`;
const Text = styled.p`
  padding: 32px;
  @media screen and (min-width: 920px) {
    padding: 16px 20%;
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
      <PrevArrow onClick={prevSlide} />
      <Card>
        <Header>{data.sanityIndex.reviewsTitle}</Header>
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
        <Text>{data.sanityIndex.reviews[current].review}</Text>
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
      <AfterArrow onClick={nextSlide} />
    </Wrapper>
  );
}

export default Reviews;
