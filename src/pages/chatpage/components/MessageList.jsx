import React, { useContext, useEffect, useRef } from "react";
import UserContext from "../../../context/UserContext";
import { Message } from "./Message";
import "./MessageList.scss";

export const MessageList = () => {
  const { messageArr, user } = useContext(UserContext);

  const messagesEndRef = useRef(null); // Ref used to scroll messages list to the latest message every time message is sent or received.

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  console.log(Date.now());
  useEffect(() => {
    scrollToBottom();
  }, [messageArr]);
  return (
    <div className="message-list-container">
      <ul className="messages">
        {messageArr.map((m) => {
          if (m.type === "JOIN") {
            return (
              <Message
                className="message-join"
                id={Date.now() * Math.random()}
                username={m.user.username}
                message={m.message}
                color={m.user.color}
                timestamp={m.timestamp}
              />
            );
          } else if (m.type === "LEFT") {
            return (
              <Message
                className="message-left"
                id={Date.now() * Math.random()}
                username={m.user.username}
                message={m.message}
                color={m.user.color}
                timestamp={m.timestamp}
              />
            );
          } else {
            return (
              <Message
                className="message"
                id={Date.now() * Math.random()}
                img={m.user.avatar}
                username={m.user.username}
                message={m.message}
                color={m.user.color}
                timestamp={m.timestamp}
              />
            );
          }
        })}
        <div ref={messagesEndRef}></div>
      </ul>
    </div>
  );
};
