import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 40px;
  background: var(--back-arrow-background);
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;
const StyledLink = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
`;
const PrevArrow = styled.div`
  cursor: pointer;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  width: 5px;
  height: 5px;
  border: solid var(--back-arrow);
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 1px;
  margin-left: 8px;
  @media screen and (min-width: 920px) {
    width: 10px;
    height: 10px;
    padding: 2px;
  }
`;
const Text = styled.p`
  color: white;
  margin-left: 8px;
`;
function BackBar(props) {
  return (
    <Wrapper>
      <StyledLink to="/">
        <PrevArrow />
        <Text>Back</Text>
      </StyledLink>
    </Wrapper>
  );
}

export default BackBar;
