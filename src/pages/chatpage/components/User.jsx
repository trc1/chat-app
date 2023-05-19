import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";
import "./User.scss";

export const User = () => {
  const { membersArr, drone } = useContext(UserContext);

  const currentUser = membersArr.filter(
    (member) => member.id === drone.clientId
  );

  return (
    <>
      {currentUser.length > 0 && (
        <div className="current-user">
          <img
            className="current-user-img"
            src={currentUser[0].clientData.avatar}
            width={100}
          />
          <h2
            className="current-user-name"
            style={{ color: currentUser[0].clientData.color }}
          >
            {currentUser[0].clientData.username}
          </h2>
        </div>
      )}
    </>
  );
};
