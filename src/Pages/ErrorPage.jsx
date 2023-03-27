import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  background: black;
  color: #5cf43b;
  font-size: 3em;
  letter-spacing: 1px;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ErrorPage({ msg = "Page Not Found .... !" }) {
  return (
    <Wrapper>
      <p>{msg}</p>
    </Wrapper>
  );
}

export default ErrorPage;
