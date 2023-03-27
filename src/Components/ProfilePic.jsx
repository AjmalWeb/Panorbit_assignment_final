import { useEffect, useState } from "react";
import styled from "styled-components";
import LoggedUser from "./LoggedUser";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Image = styled.img`
  width: 2.5rem;
  height: 2.5rem rem;
  border-radius: 50%;
  margin-right: 1.2rem;
`;

const Username = styled.p`
  font-weight: 500;
  color: rgb(73, 75, 73);
`;

function ProfilePic() {
  const [loggeduser, setLoggedUser] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) return user;
    else return null;
  });

  useEffect(() => {
    const loggedusers = JSON.parse(localStorage.getItem("loggedusers"));
    if (loggedusers) {
      const remainingusers = loggedusers.filter(
        (user) => user.id !== loggeduser.id
      );
      if (remainingusers) {
        localStorage.setItem("loggedusers", JSON.stringify(remainingusers));
      } else {
        localStorage.removeItem("loggedusers");
      }
    }
  }, []);

  const [logdiv, setLogdiv] = useState(false);
  // console.log("user", loggeduser);
  const handleclick = () => setLogdiv((prev) => !prev);

  return (
    <div>
      {loggeduser && (
        <Wrapper onClick={handleclick}>
          <Image
            src={loggeduser?.profilepicture}
            alt={`${loggeduser?.name} image`}
          />
          <Username>{loggeduser?.name}</Username>
        </Wrapper>
      )}
      {logdiv && <LoggedUser />}
    </div>
  );
}

export default ProfilePic;
