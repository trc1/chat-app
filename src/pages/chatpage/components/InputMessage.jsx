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
    <div className="c-send-message__item">
      <div className="c-send-message__message">Message: </div>
      <div className="c-send-message__form">
        <form className="message-form__item" onSubmit={sendMessage}>
          <input
            className="message-form__input"
            type="text"
            onChange={handleChange}
            value={message}
          />
          <button className="message-form__button">Send</button>
        </form>
      </div>
    </div>
  );
};
