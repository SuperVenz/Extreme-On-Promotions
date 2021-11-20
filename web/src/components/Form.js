import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { navigate } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";

// long term goal: make form dytnamic from sanity.
const Wrapper = styled(BackgroundImage)`
  background: rgba(0, 0, 0, 0.3);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding-bottom: 10%;
  width: 100%;
  color: var(--form-font-color);
  display: flex;
  flex-flow: column nowrap;
`;
const Title = styled.h2`
  color: var(--form-font-color);
  border-bottom: 0px;
`;
const FormWrapper = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Label = styled.label`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: bold;
  @media screen and (min-width: 920px) {
    font-size: 24px;
  }
`;
const StringInput = styled.input`
  margin-top: 8px;
  background: var(--form-background-color);
  height: 25px;
  font-weight: bold;
  border-radius: 8px;
  padding-left: 8px;
  border: none;
  color: black;
  width: 80vw;

  @media screen and (min-width: 600px) {
    width: 65vw;
  }
  @media screen and (min-width: 920px) {
    width: 40vw;
    height: 32px;
    margin-top: 16px;
  }
`;
const AreaText = styled.textarea`
  width: 80vw;
  background: var(--form-background-color);
  font-weight: bold;
  border-radius: 8px;
  padding-left: 8px;
  padding-left: 8px;
  margin-top: 8px;
  border: none;
  @media screen and (min-width: 600px) {
    width: 65vw;
  }
  @media screen and (min-width: 920px) {
    width: 40vw;
  }
`;
const Submit = styled.button`
  width: 40%;
  margin: 20px auto;
  font-size: 24px;
  background: var(--form-bttn-background-color);
  color: var(--form-bttn-text-color);
  border: black solid 3px;
  cursor: pointer;
  border-bottom-left-radius: 5%;
  border-bottom-right-radius: 5%;
  -webkit-box-shadow: 6px 9px 15px 0px #000000;
  box-shadow: 6px 9px 15px 0px #000000;
  @media screen and (min-width: 920px) {
    width: 15%;
    padding: 8px 0px;
  }
`;
function Form(props) {
  const data = useStaticQuery(graphql`
    {
      sanityWidgets {
        formBackground {
          altText
          image {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  const formBackground = convertToBgImage(
    data.sanityWidgets.formBackground.image.asset.gatsbyImageData
  );
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        fname: fName,
        lname: lName,
        email: email,
        telephone: telephone,
        description: description,
      }),
    })
      .then(() => navigate("/thankyou"))
      .catch((error) => alert(error));
  };

  return (
    <Wrapper {...formBackground} preserveStackingContext>
      <Title>Contact Information</Title>
      <FormWrapper
        autoComplete="on"
        netlify-honeypot="bot-field"
        name="contact"
        method="POST"
        data-netlify="true"
        action="/"
        onSubmit={handleSubmit}
      >
        <input name="form-name" value="Netlify Rocks" type="hidden" />
        <input type="hidden" name="bot-field" />
        <Label htmlFor="fName">
          First Name <br />
          <StringInput
            required
            type="text"
            name="fName"
            placeholder="First Name"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          ></StringInput>
        </Label>
        <Label htmlFor="lName">
          Last Name
          <br />
          <StringInput
            required
            type="text"
            name="lName"
            placeholder="Last Name"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          ></StringInput>
        </Label>
        <Label htmlFor="Email">
          Email
          <br />
          <StringInput
            required
            type="text"
            name="email"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></StringInput>
        </Label>
        <Label htmlFor="telephone">
          Telephone <br />
          <StringInput
            required
            type="tel"
            name="telephone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          ></StringInput>
        </Label>
        <Label htmlFor="description">
          Message <br />
          <AreaText
            name="description"
            rows="4"
            cols="20"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="How can we help you!"
          />
        </Label>
        <Submit type="submit" onSubmit={handleSubmit}>
          Submit
        </Submit>
      </FormWrapper>
    </Wrapper>
  );
}

export default Form;
