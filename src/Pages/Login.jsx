import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import styled from "styled-components";
import useAxios from "../Apicall/useAxios";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";

const Background = styled.div`
  background-image: url("https://mcdn.wallpapersafari.com/medium/42/0/7QvJNm.jpg");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginDiv = styled.div`
  background: #fff;
  border-radius: 2em;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
  // max-width: 615px;
  height: 75%;
  overflow-y: scroll;
  min-width: 37%;
  /* width */
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    margin-top: 2em;
    margin-bottom: 2em;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
const HeadingDiv = styled.div`
  background: #F2F2F2;
`;
const Heading = styled.h4`
  text-align: center;
  padding: 1.5em 1.5em;
  font-size: 1.5em;
  font-weight: 600;
  color: rgb(73, 75, 73);
`;

const ListDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;
const ListContainer = styled.div`
  margin: 0.5rem 2.5rem;
  border-bottom: 1px solid rgb(226, 232, 226);
`;

const UserImage = styled.img`
  width: 2.8em;
  height: 2.8em;
  border-radius: 50%;
  margin-right: 1.2rem;
`;

const Username = styled.p`
  font-weight: 500;
  color: rgb(73, 75, 73);
`;

function Login() {
  const url = "https://panorbit.in/api/users.json";
  const { response, error, loading } = useAxios(url);

  if (error) return <ErrorPage msg={error?.message} />;
  if (loading) return <Loader />;

  const handleclick = (user) => {
    // console.log("user::::>", user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <div style={{ height: "100vh" }}>
      <Background>
        <LoginDiv>
          <HeadingDiv>
            <Heading> Select an account</Heading>
          </HeadingDiv>
          {response?.users?.length > 0 &&
            response?.users?.map((user) => (
              <ListContainer key={user?.id}>
                <Link to={"profile"} state={{ user }}>
                  <ListDiv onClick={() => handleclick(user)}>
                    {" "}
                    <UserImage
                      src={user?.profilepicture}
                      alt={`${user?.name} image`}
                    />
                    <Username>{user?.name}</Username>
                  </ListDiv>
                </Link>
              </ListContainer>
            ))}
        </LoginDiv>
      </Background>
    </div>
  );
}

export default Login;
