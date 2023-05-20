import React, { useContext, useState } from "react";
import UserContext from "../../../context/UserContext";
import "./CurrentRoom.scss";

export const CurrentRoom = ({ getRoomOpen }) => {
  const { user } = useContext(UserContext);
  const [roomOpen, setRoomOpen] = useState(true);

  const handleRoomOpen = () => {
    setRoomOpen(!roomOpen);
    getRoomOpen(roomOpen);
  };

  return (
    <div className="current-room-header">
      <h2>{user.room}</h2>
      <button className="room-toggle" onClick={handleRoomOpen}>
        <svg
          className="room-opener-icon"
          width="15"
          height="10"
          viewBox="0 0 15 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.75 2.08333L13.0463 0.379578L7.5 5.91374L1.95375 0.379577L0.249999 2.08333L7.5 9.33333L14.75 2.08333Z"
            fill="#313131"
          />
        </svg>
      </button>
    </div>
  );
};
