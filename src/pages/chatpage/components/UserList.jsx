import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";

export const UserList = () => {
  const { membersArr, drone } = useContext(UserContext);
  const onlineUsers = membersArr.filter(
    (member) => member.id !== drone.clientId
  );

  return (
    <div className="online-users-container">
      <div>Online:</div>
      {onlineUsers.map((member) => (
        <div className="online-user" key={member.id}>
          <span className="online-user-avatar">
            <img src={member.clientData.avatar} width={70}></img>
          </span>
          <span className="online-user-username">
            {member.clientData.username}
          </span>
        </div>
      ))}
    </div>
  );
};
