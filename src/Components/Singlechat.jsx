import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Message } from "../Data/MessageData";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { RiCloseFill, RiSendPlane2Fill } from "react-icons/ri";
import Signoutprofile from "./Signoutprofile";

const Chatlist = styled.div`
  max-height: 12rem;
  overflow-y: scroll;
  //   padding: 0em 1em;
  background: white;
  border-left: 1px solid rgb(31, 98, 243);
  border-right: 1px solid rgb(31, 98, 243);
  font-size: 0.8em;
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
  //   padding: 0.5em;
  background: rgb(31, 98, 243);
  border-radius: 1em 1em 0px 0px;
  cursor: pointer;
`;

const SendDiv = styled.div`
  background: #f6f5f2;
  max-width: 75%;
  margin: 0.25em 1em;
  text-align: right;
  margin-left: auto;
  padding: 0.4em;
  border-radius: 0.25em 0.8em 0em 0.8em;
`;

const RecieveDiv = styled.div`
  background: #f6f5f2;
  max-width: 75%;
  margin: 0.25em 1em;
  padding: 0.4em;
  border-radius: 0em 0.8em 0.25em 0.8em;
`;

const TimeDiv = styled.div`
  text-align: center;
  color: #b9b8b6;
  margin: 0.4em 0;
`;

function Singlechat({ user, close, chatclose }) {
  const bottompos = "-15.9em";
  const toppos = "0em";
  const [chatopen, setChatopen] = useState(toppos);
  const [messages, SetMessages] = useState(Message);
  const inputRef = useRef(null);
  // console.log(messages);

  const handleclose = () => {
    // if (chatopen === bottompos) {
    //   setChatopen(toppos);
    // } else if (chatopen === toppos) {
    //   setChatopen(bottompos);
    // }
    close();
    chatclose();
  };

  return (
    <div
      style={{
        position: "fixed",
        // background: "red",
        bottom: chatopen,
        right: "16.5em",
        transition: "all linear 1s",
        display: "flex",
        flexDirection: "column",
        maxWidth: "16rem",
      }}
    >
      <ChatHEadingDiv>
        <ChatHeading>
          <Signoutprofile user={user} single />
        </ChatHeading>
        <div
          style={{
            marginRight: "0.5em",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {chatopen === toppos ? (
            <MdOutlineKeyboardArrowDown
              style={{ color: "white" }}
              onClick={handleclose}
            />
          ) : (
            <MdOutlineKeyboardArrowUp
              style={{ color: "white" }}
              onClick={handleclose}
            />
          )}
          <RiCloseFill style={{ color: "white" }} onClick={handleclose} />
        </div>
      </ChatHEadingDiv>
      {messages && (
        <Chatlist>
          {messages?.map((item, index) => (
            <div key={index}>
              {item.type === "recieved" && (
                <RecieveDiv>{item.message}</RecieveDiv>
              )}
              {item.time && <TimeDiv>{item.time}</TimeDiv>}
              {item.type === "send" && <SendDiv>{item.message}</SendDiv>}
            </div>
          ))}
        </Chatlist>
      )}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          border: " 1px solid grey",
          padding: " 0.2em",
        }}
      >
        <input
          type="text"
          ref={inputRef}
          autoFocus
          style={{ border: "none", outline: "none", width: "100%" }}
        />
        <RiSendPlane2Fill
          style={{ color: "rgb(31, 98, 243)", cursor: "pointer" }}
          onClick={() => (inputRef.current.value = "")}
        />
      </div>
    </div>
  );
}

export default Singlechat;
