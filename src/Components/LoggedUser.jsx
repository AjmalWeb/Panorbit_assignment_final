import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Signoutprofile from "./Signoutprofile";

const Button = styled.button`
  background: red;
  color: white;
  padding: 0.4em;
  border-radius: 1em;
  font-size: 1em;
  width: 6em;
  border: none;
  cursor: pointer;
`;
const Styledrule = styled.div`
  width: 100%;
  background: #f4f1f0;
  // margin-top: 0.6em;
  height: 1px;
`;

const WrapperDiv = styled.div`
  position: absolute;
  width: 17rem;
  background: white;
  border-radius: 1.7em;
  right: 2rem;
  top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  // max-height: 15em;
  z-index: 1;
`;

const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  margin-bottom: 0.8em;
`;
const Username = styled.h4`
  font-weight: 500;
  color: rgb(73, 75, 73);
  margin-bottom: 0.6em;
`;

const Email = styled.p`
  margin-bottom: 1em;
  font-size: 0.9em;
  color: rgb(157, 169, 175);
`;

function LoggedUser() {
  const [loggeduser, setLoggedUser] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) return user;
    else return null;
  });
  // console.log("user", loggeduser);

  const [signoutusers, setSignoutUsers] = useState(() => {
    const users = JSON.parse(localStorage.getItem("loggedusers"));
    if (users) return users;
    else return [];
  });

  const navigate = useNavigate();
  const handleLogout = () => {
    if (signoutusers) {
      let arra = signoutusers;
      const alreadyExist = arra.find((item) => item.id === loggeduser.id);
      if (!alreadyExist) {
        arra.push(loggeduser);
        let loggedusers = JSON.stringify(arra);
        localStorage.setItem("loggedusers", loggedusers);
      }
    } else {
      let arra = [loggeduser];
      localStorage.setItem("loggedusers", JSON.stringify(arra));
    }
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <WrapperDiv>
      {loggeduser && (
        <ImageDiv>
          <Image
            src={loggeduser?.profilepicture}
            alt={`${loggeduser?.name} image`}
          />
          <Username>{loggeduser?.name}</Username>
          <Email>{loggeduser?.email}</Email>
        </ImageDiv>
      )}
      {signoutusers && (
        <div>
          {signoutusers.map((user, index) => (
            <div key={user?.id}>
              {index <= signoutusers?.length - 1 && <Styledrule />}
              <Signoutprofile user={user} />
            </div>
          ))}
        </div>
      )}
      <Button onClick={handleLogout}>Sign out</Button>
    </WrapperDiv>
  );
}

export default LoggedUser;
