import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  // border-top: 1px solid #c6c4c3;
  width: 100%;
  padding: 0.5em 0em;
  cursor: pointer;
`;
const ImageDiv = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  margin-right: 0.7rem;
`;

const Username = styled.p`
  font-weight: 500;
  // color: rgb(73, 75, 73);
  // color: ${({ single }) => (single ? "white" : "rgb(73, 75, 73)")}
  font-size: 0.75em;
  margin-right: auto;
`;

const OnlineStatus = styled.div`
  width: 0.5em;
  height: 0.5em;
  // background: green;
  border-radius: 50%;
  margin-left: 1em;
  background: ${({ user }) => (user?.id % 3 !== 0 ? "green" : "grey")};
`;

function Signoutprofile({ user, chat = false, single = false }) {
  return (
    <WrapperDiv>
      <ImageDiv src={user?.profilepicture} alt={`${user?.name} image`} />
      <Username single={single}>{user?.name}</Username>
      {chat && <OnlineStatus user={user}></OnlineStatus>}
    </WrapperDiv>
  );
}

export default Signoutprofile;
