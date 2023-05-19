import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";
import "./CurrentRoom.scss";

export const CurrentRoom = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="current-room-header">
      <h2>{user.room}</h2>
    </div>
  );
};
