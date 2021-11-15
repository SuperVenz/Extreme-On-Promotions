import React from "react";
import Reset from "../style/Reset";
import Footer from "./Footer";
import styled, { createGlobalStyle } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import "@fontsource/roboto"; // Defaults to weight 400.
import { Helmet } from "react-helmet";
const Wrapper = styled.div``;

function Layout({ children, title, description, keywords }) {
  const data = useStaticQuery(graphql`
    {
      sanityWidgets {
        cannonicalLink
      }
      sanityTheme {
        formBttnColor {
          hex
        }
        formBttnTextColor {
          hex
        }
        backArrow {
          hex
        }
        backArrowBackground {
          hex
        }
        backgroundColor {
          hex
        }
        bttnBackground {
          hex
        }
        carouselArrows {
          hex
        }
        bttnFontColor {
          hex
        }
        carouselDots {
          hex
        }
        contactHeader {
          hex
        }
        contactLinks {
          hex
        }
        formBoxColor {
          hex
        }
        formBttnTextColor {
          hex
        }
        formBttnColor {
          hex
        }
        formFontColor {
          hex
        }
        mainFontColor {
          hex
        }
        serviceCardColor {
          hex
        }
        serviceCardFontColor {
          hex
        }
        subtextColor {
          hex
        }
        headerColor {
          hex
        }
        headerFontColor {
          hex
        }
        backgroundColor {
          hex
        }
        contactBackground {
          hex
        }
      }
    }
  `);
  const Css = createGlobalStyle`
:root{
  /* Hero Section */
  --header-font-color:${data.sanityTheme.headerColor.hex};
  --subtext-font-color:${data.sanityTheme.subtextColor.hex};
  --hero-bttn-background:${data.sanityTheme.bttnBackground.hex};
  --hero-bttn-text-color:${data.sanityTheme.bttnFontColor.hex};
  /* Carousel */
  --carousel-dots:${data.sanityTheme.carouselDots.hex};
  /* main themes */
  --main-font-color:${data.sanityTheme.mainFontColor.hex};
  --main-header-color:${data.sanityTheme.headerFontColor.hex};
  --main-background-color:${data.sanityTheme.backgroundColor.hex};
  /* Service Cards */
  --service-card-color:${data.sanityTheme.serviceCardColor.hex};
  --service-card-font-color:${data.sanityTheme.serviceCardFontColor.hex};
  /* Form */
  --form-background-color:${data.sanityTheme.formBoxColor.hex};
  --form-font-color:${data.sanityTheme.formFontColor.hex};
  --form-bttn-background-color:${data.sanityTheme.formBttnColor.hex};
  --form-bttn-text-color:${data.sanityTheme.formBttnTextColor.hex};

  /* back arrow and template theme bar */
  --back-arrow-background:${data.sanityTheme.backArrowBackground.hex};
  --back-arrow:${data.sanityTheme.backArrow.hex};
  /* contact */
  --contact-background:${data.sanityTheme.contactBackground.hex};
  --contact-links:${data.sanityTheme.contactLinks.hex};
  --contact-header:${data.sanityTheme.contactHeader.hex};
}
body {
  font-family: "Roboto";
  background-color:var(--main-background-color);
  background-color: whitesmoke;
}

h1
{
  font-size:32px;
  color: var(--main-header-color);
    @media screen and (min-width: 600px) {
    font-size:32px;
    }
    @media screen and (min-width: 920px) {
    font-size:48px;
  }
  
  
}
h2{
  font-size:24px;
    align-self: center;
  text-align: center;
  font-weight: bold;
  margin: 32px 0px; 
    color: var(--main-header-color);
      @media screen and (min-width: 600px) {
    font-size:24px;
    }
     @media screen and (min-width: 920px) {
    font-size:32px;
  }

}
h3
{
  font-size:18px;
    color: var(--main-header-color);
      @media screen and (min-width: 600px) {
    font-size:24px;
    }
         @media screen and (min-width: 920px) {
    font-size:28px;
  }

}
p{
    line-height: 200%;
  font-size: 16px;
  color: var(--main-font-color);
   @media screen and (min-width: 920px) {
    font-size:24px;
  }
     @media screen and (min-width: 1000px) {
    font-size:24px;
  }

}

`;
  return (
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <meta lang="en" />
        <title>{title}</title>
        <link rel="canonical" href={data.sanityWidgets.cannonicalLink} />
        <meta name="keywords" content={keywords.join(",")} />
        <meta name="author" content="Alec Venzor" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Reset />
      <Css />
      {children}
      <Footer />
    </Wrapper>
  );
}

export default Layout;
