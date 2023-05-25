import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";
import "./UserList.scss";

export const UserList = () => {
  const { membersArr, drone } = useContext(UserContext);
  const onlineUsers = membersArr.filter(
    (member) => member.id !== drone.clientId
  );

  return (
    <ul className="online-users-container">
      <div className="online-user-header">Online:</div>
      {onlineUsers
        .sort((a, b) =>
          a.clientData.username.localeCompare(b.clientData.username)
        )
        .map((member) => (
          <li className="online-user" key={member.id}>
            <span className="online-user-avatar">
              <img
                className="online-user-img"
                src={member.clientData.avatar}
              ></img>
            </span>
            <span className="online-user-username">
              {member.clientData.username}
            </span>
          </li>
        ))}
    </ul>
  );
};
