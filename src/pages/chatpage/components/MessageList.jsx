import React, { useContext, useEffect, useRef } from "react";
import UserContext from "../../../context/UserContext";
import { Message } from "./Message";
import "./MessageList.scss";

export const MessageList = () => {
  const { messageArr } = useContext(UserContext);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

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
                key={m.id}
                id={m.id}
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
                key={m.id}
                id={m.id}
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
                key={m.id}
                id={m.id}
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
