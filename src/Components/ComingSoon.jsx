import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-size: 2em;
  color: rgba(0, 0, 0, 0.1);
`;

function ComingSoon() {
  return (
    <Wrapper>
      <h1>Coming Soon</h1>
    </Wrapper>
  );
}

export default ComingSoon;
