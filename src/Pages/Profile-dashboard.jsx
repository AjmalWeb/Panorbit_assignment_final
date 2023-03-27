import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../Components/Header";
import { useLocation } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import styled from "styled-components";
import Label from "../Components/Label";
import ContainerLayout from "./ContainerLayout";

const RightDiv = styled.div`
  flex: 1;
  // background: yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border-right: 1px solid rgb(226, 232, 226);
  border-right: ${({ mobile }) => !mobile && "1px solid rgb(226, 232, 226)"};
  padding-right: 1em;
`;
const LefttDiv = styled.div`
  flex: 2;
  // background: green;
`;
const Text = styled.div`
  color: #9da9af;
  & .inner {
    margin-left: 0.3em;
    color: black;
    font-weight: 550;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
  // flex-wrap: wrap;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 0px;
`;

const ImageDiv = styled.img`
  border-radius: 50%;
  width: 11rem;
  height: 11rem;
`;

const Username = styled.h3`
  color: rgb(94, 95, 94);
  margin-top: 1em;
`;

const UserDetails = styled.div`
  margin: 1em 0px;
`;
const StyledRule = styled.div`
  border: 1px solid rgb(226, 232, 226);
  width: 70%;
`;
const CompanyDetails = styled.div`
  margin: 1em 0px;
`;

const CompanyHeading = styled.h3`
  text-align: center;
  color: rgb(175, 180, 177);
  font-weight: 500;
  margin: 0.6em 0em;
`;

const AddressHeading = styled.h3`
  color: rgb(175, 180, 177);
  font-weight: 500;
  margin: 0.6em 1em;
`;

const AddressDetails = styled.div`
  margin: 1.5em;
`;

const MapDiv = styled.div`
  margin-top: 0.8em;
  width: 95%;
  height: 70vh;
  position: relative;
  padding: 1em;
`;
const Mapcordiante = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5em em;
  margin: 1em 0.4em 4em 0px;
`;

function Profile({ mobile }) {
  const [user, setUser] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      // console.log("location", location?.state);
      setUser(location?.state?.user);
    } else {
      const userprofile = JSON.parse(localStorage.getItem("user"));
      if (userprofile) {
        setUser(userprofile);
      }
    }
  }, []);

  return (
    <ContainerLayout>
      <Header title="Profile" />
      {user && (
        <Wrapper mobile={mobile}>
          <RightDiv mobile={mobile}>
            <ImageContainer>
              <ImageDiv
                src={user?.profilepicture}
                alt={`${user?.name} image`}
              />
              <Username>{user?.name}</Username>
            </ImageContainer>
            <UserDetails>
              <Label label="Username" item={user?.username} />
              <Label label="e-mail" item={user?.email} />
              <Label label="Phone" item={user?.phone} />
              <Label label="Website" item={user?.website} />
            </UserDetails>
            <StyledRule />
            <CompanyDetails>
              <CompanyHeading>Company</CompanyHeading>
              <Label label="Name" item={user?.company?.name} />
              <Label label="catchphrase" item={user?.company?.catchPhrase} />
              <Label label="bs" item={user?.company?.bs} />
            </CompanyDetails>
          </RightDiv>
          <LefttDiv>
            <AddressHeading>Address</AddressHeading>
            <AddressDetails>
              <Label label="Street" item={user.address.street} align={false} />
              <Label label="Suite" item={user.address.suite} align={false} />
              <Label label="City" item={user.address.city} align={false} />
              <Label
                label="Zipcode"
                item={user.address.zipcode}
                align={false}
              />
              <MapDiv>
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0, borderRadius: "1em" }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  src={`https://maps.google.com/maps?q=${user?.address?.geo?.lat},${user?.address?.geo?.lng}&hl=es&z=8&output=embed`}
                ></iframe>
                <Mapcordiante>
                  <Text>
                    lat:<span className="inner">{user?.address?.geo?.lat}</span>
                  </Text>
                  <Text>
                    long:
                    <span className="inner">{user?.address?.geo?.lng}</span>
                  </Text>
                </Mapcordiante>
              </MapDiv>
            </AddressDetails>
          </LefttDiv>
        </Wrapper>
      )}
    </ContainerLayout>
  );
}

export default Profile;
