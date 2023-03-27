import React from "react";
import styled from "styled-components";
import ProfilePic from "./ProfilePic";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5em;
  margin-bottom: 0.5em;
  border-bottom: 1px solid rgb(226, 232, 226);
  color: #5e5f5e;
`;

function Header({ title }) {
  return (
    <Wrapper>
      <h3 >{title}</h3>
      <div>
        <ProfilePic />
      </div>
    </Wrapper>
  );
}

export default Header;
