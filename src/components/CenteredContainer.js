"use client";

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  position: relative;
  flex-direction: column;
  width: 100%;
`;

const CenteredContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CenteredContainer;
