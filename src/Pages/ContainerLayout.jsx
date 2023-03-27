import React from "react";
import styled from "styled-components";
import ChatList from "../Components/ChatList";
import Sidebar from "../Components/Sidebar";
import Sidebarnew from "../Components/Sidebarnew";

const Wrapper = styled.div`
  display: flex;
`;
const SideWrapper = styled.div`
  min-height: 100vh;
`;
const MainWrapper = styled.div`
  padding: 4rem 2rem 0rem;
  width: 100%;
  height: 100%;
`;

const ChildDiv = styled.div`
  margin-bottom: 3em;
`;

function ContainerLayout({ children }) {
  return (
    <Wrapper>
      <SideWrapper>
        {/* <Sidebar /> */}
        <Sidebarnew />
      </SideWrapper>
      <MainWrapper>
        <ChildDiv>{children}</ChildDiv>
        <ChatList />
      </MainWrapper>
    </Wrapper>
  );
}

export default ContainerLayout;
