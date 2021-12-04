import React, { useState } from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

// Styles
const Wrapper = styled.div`
  padding: 0 16px;
  display: flex;
  flex-flow: column nowrap;
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
const SideCircle = styled(GatsbyImage)`
  aspect-ratio: 1;
  height: 15vw;
  background-color: var(--main-border-color);
  border: solid var(--main-border-color) 1px;
  cursor: pointer;
  border-radius: 5%;
  -webkit-box-shadow: 6px 9px 15px -2px #000000;
  box-shadow: 6px 9px 15px -2px #000000;

  @media screen and (min-width: 600px) {
    height: 17vw;
  }
  @media screen and (min-width: 1000px) {
  }
`;
const CenterCircle = styled(GatsbyImage)`
  height: 40vw;
  aspect-ratio: 1;
  margin: 0 24px;
  background-color: var(--main-border-color);
  border-radius: 5%;
  -webkit-box-shadow: 6px 9px 15px -2px #000000;
  box-shadow: 6px 9px 15px -2px #000000;
  border: solid var(--main-border-color) 2px;
  @media screen and (min-width: 600px) {
    height: 30vw;
  }
  @media screen and (min-width: 1000px) {
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

const SubHeader = styled.h3`
  padding: 24px 0 8px 0px;
  text-align: center;
  font-weight: 600;
`;
const Text = styled.p`
  overflow-y: scroll;
  height: 500px;
  @media screen and (min-width: 600px) {
    margin: 0px 10%;
    height: 300px;
    scroll-behavior: smooth;
  }
`;
function Carousel() {
  const data = useStaticQuery(graphql`
    {
      sanityIndex {
        carousel {
          pictures {
            image {
              asset {
                gatsbyImageData
              }
            }
            altText
          }
          textContent {
            header
            subTitle
            text
          }
        }
      }
    }
  `);
  const [current, setCurrent] = useState(1);
  const [currentPrev, setCurrentPrev] = useState(0);
  const [currentAfter, setCurrentAfter] = useState(2);

  const nextSlide = () => {
    setCurrent(
      current === data.sanityIndex.carousel.length - 1 ? 0 : current + 1
    );

    setCurrentAfter(
      currentAfter === data.sanityIndex.carousel.length - 1
        ? 0
        : currentAfter + 1
    );
    setCurrentPrev(
      currentPrev === data.sanityIndex.carousel.length - 1 ? 0 : currentPrev + 1
    );
  };

  const prevSlide = () => {
    setCurrent(
      current === 0 ? data.sanityIndex.carousel.length - 1 : current - 1
    );
    setCurrentAfter(
      currentAfter === 0
        ? data.sanityIndex.carousel.length - 1
        : currentAfter - 1
    );
    setCurrentPrev(
      currentPrev === 0 ? data.sanityIndex.carousel.length - 1 : currentPrev - 1
    );
  };
  return (
    <Wrapper>
      <Header>{data.sanityIndex.carousel[current].textContent.header}</Header>
      <PicWrapper>
        <div onClick={prevSlide}>
          <SideCircle
            image={
              data.sanityIndex.carousel[currentPrev].pictures.image.asset
                .gatsbyImageData
            }
            alt={data.sanityIndex.carousel[currentPrev].pictures.altText}
          />
        </div>
        <CenterCircle
          image={
            data.sanityIndex.carousel[current].pictures.image.asset
              .gatsbyImageData
          }
          alt={data.sanityIndex.carousel[current].pictures.altText}
          objectFit="cover"
        />
        <div onClick={nextSlide}>
          <SideCircle
            image={
              data.sanityIndex.carousel[currentAfter].pictures.image.asset
                .gatsbyImageData
            }
            alt={data.sanityIndex.carousel[currentAfter].pictures.altText}
          />
        </div>
      </PicWrapper>
      <DotsWrappers>
        {data.sanityIndex.carousel.map((arr, i) => {
          if (i === current) {
            return <Dots current={true} key={i} />;
          } else {
            return <Dots key={i} />;
          }
        })}
      </DotsWrappers>
      <SubHeader>
        {data.sanityIndex.carousel[current].textContent.subTitle}
      </SubHeader>
      <Text>{data.sanityIndex.carousel[current].textContent.text}</Text>
    </Wrapper>
  );
}

export default Carousel;
