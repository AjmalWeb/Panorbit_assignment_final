import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

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
  position: relative;
  &.active {
    font-weight: 600;
  }
  //   &.active .top {
  //     position: absolute;
  //     width: 25px;
  //     height: 25px;
  //     background-color: white;
  //     right: 0;
  //     top: -25px;
  //   }
  //   &.active .bottom {
  //     position: absolute;
  //     width: 25px;
  //     height: 25px;
  //     background-color: white;
  //     right: 0;
  //     bottom: -25px;
  //   }

  //   &.active .top:before {
  //     content: "";
  //     position: absolute;
  //     width: 50px;
  //     height: 50px;
  //     border-radius: 50%;
  //     background-color: #1E43EA;
  //     left: -25px;
  //     top: -25px;
  //   }
  //   &.active .bottom:before {
  //     content: "";
  //     position: absolute;
  //     width: 50px;
  //     height: 50px;
  //     border-radius: 50%;
  //     background-color: #1E43EA;
  //     bottom: -25px;
  //     left: -25px;
  //   }
  & .show {
    display: none;
    // width: 20px;
    // background: white;
    // border-radius: 50%;
    position: absolute;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    background-color: white;
    bottom: -0.25em;
    right: 0em;
  }
  & .icon {
    display: none;
    color: black;
    z-index: 99;
    font-size: 1.5em;
  }
  &.active .icon {
    display: block;
  }

  &.active .show {
    display: block;
    // z-index: 5;
  }
`;
const Styledrule = styled.div`
  width: 85%;
  background: #f4f1f0;
  margin-top: 0.6em;
  height: 1px;
`;

const LinkDiv = styled.div``;

function Sidebarnew() {
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
              <div style={{ display: "flex" }}>
                <div className="show">
                  {/* <BsArrowRightShort style={{ color: "black" }} /> */}
                  {/* <MdKeyboardArrowRight style={{ color: "black", zIndex: "99" }} /> */}
                </div>
                <MdKeyboardArrowRight className="icon" />
              </div>
            </div>
            <div className="top"></div>
            <div className="bottom"></div>
          </StyledNav>
          {index <= items.length - 2 && <Styledrule />}
        </Wrapper>
      ))}
    </SidebarWrapper>
  );
}

export default Sidebarnew;
