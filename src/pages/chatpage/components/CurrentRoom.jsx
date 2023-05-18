import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";

export const CurrentRoom = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="current-room">
      <h2>{user.room}</h2>
    </div>
  );
};
