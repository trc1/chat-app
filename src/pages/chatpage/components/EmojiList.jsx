import React, { useState } from "react";
import { emojis } from "../../../helpers/emojis";
import "./EmojiList.scss";

export const EmojiList = ({ getEmoji, toggleEmoji, setToggleEmoji }) => {
  
  const handleClick = () => {
    setToggleEmoji(!toggleEmoji);
  };

  const handleEmoji = (e) => {
    getEmoji(e.target.innerHTML);
  };

  return (
    <div className="emoji">
      {toggleEmoji ? (
        <ul className="emoji-list">
          {emojis.map((emoji) => (
            <li className="emoji-list-item" key={emoji} onClick={handleEmoji}>
              <span
                role="img"
                aria-label={emoji}
                dangerouslySetInnerHTML={{ __html: emoji }}
              ></span>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
      <button type="button" className="emoji-list-button" onClick={handleClick}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="emoji-icon"
        >
          <path
            d="M17 8C17 9.38 14.88 10.5 13.5 10.5C12.12 10.5 10.75 9.38 10.75 8H9.25C9.25 9.38 7.88 10.5 6.5 10.5C5.12 10.5 3 9.38 3 8H2.25C2.09 8.64 2 9.31 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 9.31 17.91 8.64 17.75 8H17ZM10 2C7.04 2 4.45 3.61 3.07 6H16.93C15.55 3.61 12.96 2 10 2ZM20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C8.68678 20 7.38642 19.7413 6.17317 19.2388C4.95991 18.7362 3.85752 17.9997 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C11.3132 0 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7362 4.95991 19.2388 6.17317C19.7413 7.38642 20 8.68678 20 10ZM10 15.23C8.25 15.23 6.71 14.5 5.81 13.42L7.23 12C7.68 12.72 8.75 13.23 10 13.23C11.25 13.23 12.32 12.72 12.77 12L14.19 13.42C13.29 14.5 11.75 15.23 10 15.23Z"
            fill="#313131"
          />
        </svg>
      </button>
    </div>
  );
};
