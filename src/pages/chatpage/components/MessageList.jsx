import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";
import { Message } from "./Message";

export const MessageList = () => {
  const { messageArr, user } = useContext(UserContext);

  return (
    <>
      <h2>{user.room}</h2>
      <div className="c-messages">
        {messageArr.map((m) => {
          if (m.type === "JOIN") {
            return (
              <Message
                id={Date.now()}
                username={m.user.username}
                message={m.message}
                color={m.user.color}
                timestamp={m.timestamp}
              />
            );
          } else if (m.type === "LEFT") {
            return (
              <Message
                id={Date.now()}
                username={m.user.username}
                message={m.message}
                color={m.user.color}
                timestamp={m.timestamp}
              />
            );
          } else {
            return (
              <div className="{getWrapperClass(msg)}">
                <Message
                  id={Date.now()}
                  img={m.user.avatar}
                  username={m.user.username}
                  message={m.message}
                  color={m.user.color}
                  timestamp={m.timestamp}
                />
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
