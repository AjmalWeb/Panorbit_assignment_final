import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoaderDiv = styled.div`
  border-width: 20px;
  border-style: solid;
  border-color: rgb(78 175 244) rgb(234, 240, 246) rgb(234, 240, 246);
  border-image: initial;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  animation: 4s linear 0s infinite normal none running spinner;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Loader() {
  return (
    <Wrapper>
      <LoaderDiv />
    </Wrapper>
  );
}

export default Loader;
