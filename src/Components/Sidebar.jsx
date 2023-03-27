import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { BsArrowRightShort } from "react-icons/bs";

const SidebarWrapper = styled.div`
background-image: linear-gradient(to right, #1E43EA, #5848F6);  
display: flex;

  justify-content: center;
  flex-direction: column;
  // position: fixed;
  // height:100vh;
  min-height: 100vh;
  width: 14.5rem;
  // background: #1E43EA;
  align-items: "flex-start;
  top: 3rem;
  left: 2rem;
  // border-radius: 30px;
  border-radius: 2em;
    margin: 4em 1em 4em 2em;
`;

const Wrapper = styled.div`
  color: white;
  font-size: 1em;
  margin-left: 2.3em;
  padding: 0.6em 0em;
  width: 87%;
`;

const StyledNav = styled(NavLink)`
  font-weight: 300;
  &.active {
    font-weight: 600;
  }
  & .show {
    display: none;
    width: 20px;
    background: white;
    border-radius: 50%;
  }
  &.active .show {
    display: block;
  }
`;
const Styledrule = styled.div`
  width: 85%;
  background: #f4f1f0;
  margin-top: 0.6em;
  height: 1px;
`;

const LinkDiv = styled.div``;

function Sidebar() {
  const items = [
    {
      Page: "Profile",
      Path: "/profile",
    },
    {
      Page: "Posts",
      Path: "/posts",
    },
    {
      Page: "Gallery",
      Path: "/gallery",
    },
    {
      Page: "ToDo",
      Path: "/todo",
    },
  ];
  return (
    <SidebarWrapper>
      {items.map((item, index) => (
        <Wrapper key={index}>
          <StyledNav
            to={item.Path}
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "600" : "300",
                // color: isPending ? "red" : "black",
                // color: isActive ? "red" : "black",
              };
            }}
            end={true}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {item.Page}{" "}
              <div className="show">
                <BsArrowRightShort style={{ color: "black" }} />
              </div>
            </div>
          </StyledNav>
          {index <= items.length - 2 && <Styledrule />}
        </Wrapper>
      ))}
    </SidebarWrapper>
  );
}

export default Sidebar;
