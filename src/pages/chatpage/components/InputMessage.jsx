import React, { useContext, useState } from "react";
import UserContext from "../../../context/UserContext";
import "./InputMessage.scss";

export const InputMessage = () => {
  const { publish } = useContext(UserContext);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  function sendMessage(e) {
    e.preventDefault();
    if (message && message.replace(/\s/g, "").length > 0) {
      publish(message);
      setMessage("");
    }
  }

  return (
    <form className="send-message-container" onSubmit={sendMessage}>
      <div className="send-message-wrapper">
        <input
          className="send-message-input"
          type="text"
          onChange={handleChange}
          value={message}
        />
        <button className="send-message-button">
          <svg
            className="send-icon"
            width="10"
            height="15"
            viewBox="0 0 10 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.08339 0.25L0.379639 1.95375L5.91381 7.5L0.379639 13.0463L2.08339 14.75L9.33339 7.5L2.08339 0.25Z"
              fill="#313131"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};
