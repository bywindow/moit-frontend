import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 25px;
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;
const Grid = styled.div`
  /* margin-top: 25px; */
`;

//props를 style과 함께 전달한다.
const Section = ({ children }) => (
  <Container>
    <Grid>{children}</Grid>
  </Container>
);

export default Section;
