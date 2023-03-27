import useAxios from "../Apicall/useAxios";
import Signoutprofile from "./Signoutprofile";
import { BsChatRight } from "react-icons/bs";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { useState } from "react";
import styled from "styled-components";
import Singlechat from "./Singlechat";
import Loader from "../Pages/Loader";
import ErrorPage from "../Pages/ErrorPage";

const Userlist = styled.div`
  max-height: 16rem;
  overflow-y: scroll;
  padding: 0em 1em;
  background: white;
  border-left: 1px solid rgb(31, 98, 243);
  border-right: 1px solid rgb(31, 98, 243);

  /* width */
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    margin-top: 0.1em;
    margin-bottom: 0.1em;
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
const ChatHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8em;
  margin-left: 0.5em;
  color: white;
`;
const ChatHEadingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  background: rgb(31, 98, 243);
  border-radius: 1em 1em 0px 0px;
`;

const IconDiv = styled.div`
  margin-right: 0.5em;
  color: white;
`;

function ChatList() {
  const bottompos = "-15.9em";
  const toppos = "0em";
  const [chatopen, setChatopen] = useState(bottompos);
  const [selected, setSelected] = useState(null);

  const handleopen = () => {
    if (chatopen === bottompos) {
      setChatopen(toppos);
    } else if (chatopen === toppos) {
      setChatopen(bottompos);
      setSelected(null);
    }
  };

  const handlesingleChat = (user) => {
    // console.log("selecteduser", user);
    setSelected(user);
  };

  const closechat = () => {
    setSelected(null);
  };

  const url = "https://panorbit.in/api/users.json";
  const { response, error, loading } = useAxios(url);
  // console.log("axiosdata", response);
  // if (error) return <div>Error!{error?.message}</div>;
  if (error) return (<ErrorPage msg={error?.message}/>);
  if (loading) return <Loader />;
  return (
    <>
      <div
        style={{
          position: "fixed",
          // background: "white",
          bottom: chatopen,
          right: "1.5em",
          transition: "all linear 750ms",
        }}
      >
        <ChatHEadingDiv>
          <ChatHeading>
            <BsChatRight />
            Chats
          </ChatHeading>
          <IconDiv>
            {chatopen === toppos ? (
              <MdOutlineKeyboardArrowDown onClick={handleopen} />
            ) : (
              <MdOutlineKeyboardArrowUp onClick={handleopen} />
            )}
          </IconDiv>
        </ChatHEadingDiv>
        <Userlist>
          {response?.users?.map((user) => (
            <div key={user?.id} onClick={() => handlesingleChat(user)}>
              <Signoutprofile user={user} chat />
            </div>
          ))}
        </Userlist>
      </div>
      {selected && (
        <Singlechat user={selected} close={handleopen} chatclose={closechat} />
      )}
    </>
  );
}

export default ChatList;
