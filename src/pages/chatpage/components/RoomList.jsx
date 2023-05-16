import React, { useContext, useState } from "react";
import { rooms } from "../../../helpers/rooms";
import UserContext from "../../../context/UserContext";
import "./RoomList.scss";

export const RoomList = () => {
  const { selectedRooms, user } = useContext(UserContext);
  console.log("droneee", user);
  const handleClick = (e) => {
    selectedRooms(e.target.dataset.label);
  };
  return (
    <div className="room-container">
      {rooms.map((r) => {
        if (user.room === r.label) {
          return <img key={r.label + new Date()} src={r.img} width={200} />;
        }
      })}
      <ul>
        {rooms.map((r) => {
          if (user.room !== r.label) {
            return (
              <li
                onClick={handleClick}
                key={r.value}
                data-value={r.value}
                data-label={r.label}
              >
                {r.label}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
