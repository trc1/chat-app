import React, { useContext } from "react";
import { rooms } from "../../../helpers/rooms";
import UserContext from "../../../context/UserContext";
import "./RoomList.scss";

export const RoomList = () => {
  const { selectedRooms, user } = useContext(UserContext);
  const handleClick = (e) => {
    selectedRooms(e.target.dataset.label);
  };

  return (
    <div className="room-container">
      {rooms.map((r) => {
        if (user.room === r.label) {
          return (
            <div className="current-room" key={r.label}>
              <img src={r.img} className="current-room-image" />
            </div>
          );
        }
      })}
      <ul className="room-list">
        {rooms.map((r) => {
          if (user.room !== r.label) {
            return (
              <li
                className="room-list-items"
                key={Date.now() + r.label}
                data-value={r.value}
                data-label={r.label}
                onClick={handleClick}
              >
                <img
                  src={r.img}
                  data-value={r.value}
                  data-label={r.label}
                  className="room-list-image"
                />
                {r.label}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
