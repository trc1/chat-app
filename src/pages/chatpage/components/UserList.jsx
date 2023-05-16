import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";

export const UserList = () => {
  const { membersArr, drone } = useContext(UserContext);
  const onlineUsers = membersArr.filter(
    (member) => member.id !== drone.clientId
  );
  console.log("userrrrsss", membersArr);
  return (
    <div className="c-member-list__item">
      <div>Online:</div>
      {onlineUsers.map((member) => (
        <div className="c-member-list__member__item" key={member.id}>
          <span className="c-member-list__member__avatar">
            <img src={member.clientData.avatar} width={70}></img>
          </span>
          <span className="c-member-list__member__username">
            {member.clientData.username}
          </span>
        </div>
      ))}
    </div>
  );
};
