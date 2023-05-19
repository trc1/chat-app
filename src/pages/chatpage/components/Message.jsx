import React from "react";
import "./Message.scss";

export const Message = ({
  id,
  img,
  username,
  color,
  message,
  timestamp,
  className,
}) => {
  return (
    <li className={className} key={id}>
      <div className="message__avatar">
        <img src={img} width={30} />
      </div>
      <div className="timestamp">{timestamp}</div>
      <div className="message-username">
        <div style={{ color: color }}>{username}</div>
        <div className="message-text">{message}</div>
      </div>
    </li>
  );
};
