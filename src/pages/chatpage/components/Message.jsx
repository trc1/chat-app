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
      <div className="message-avatar-wrapper">
        <img className="message-avatar" src={img} />
      </div>
      <div className="message-wrapper-join">
        <div className="message-username-wrapper">
          <div className="message-username" style={{ color: color }}>
            {username}
          </div>
          <div className="message-timestamp">{timestamp}</div>
        </div>
        <div className="message-text">{message}</div>
      </div>
    </li>
  );
};
