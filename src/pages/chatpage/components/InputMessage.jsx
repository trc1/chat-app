import React, { useContext, useState } from "react";
import UserContext from "../../../context/UserContext";

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
    <div className="send-message-container">
      <form className="send-message-form" onSubmit={sendMessage}>
        <input
          className="send-message-input"
          type="text"
          onChange={handleChange}
          value={message}
        />
        <button className="send-message-button">Send</button>
      </form>
    </div>
  );
};
