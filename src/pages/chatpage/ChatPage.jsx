import React, { useContext, useEffect, useState } from "react";
import { Loader } from "../loader/Loader";
import UserContext from "../../context/UserContext";
import { RoomList } from "./components/RoomList";
import { UserList } from "./components/UserList";
import { InputMessage } from "./components/InputMessage";
import { MessageList } from "./components/MessageList";
import { User } from "./components/User";
import {
  messageNotification,
  userNotification,
} from "../../helpers/notifications";
import "./ChatPage.scss";
import { CurrentRoom } from "./components/CurrentRoom";

export const ChatPage = () => {
  const { user, drone, setMessageArr, setMembersArr } = useContext(UserContext);

  const [isReady, setIsReady] = useState(false);
  const [toggleHide, setToggleHide] = useState(false);

  useEffect(() => {
    if (user) {
      roomEvent(drone);
      setIsReady(true);
      setToggleHide(false);
    }
  }, [user, drone]);

  const roomEvent = (drone) => {
    const room = drone.subscribe(`observable-${user.room}`);

    room.on("open", (error) => {
      if (error) {
        console.log(error);
      }
    });

    room.on("members", (member) => {
      setMembersArr([...member]);
    });

    room.on("member_join", (member) => {
      setMembersArr((prev) => {
        return [...prev, member];
      });
      const messageSound = new Audio(userNotification);
      messageSound.volume = 0.1;
      messageSound.play(),
        setMessageArr((prev) => {
          return [
            ...prev,
            {
              message: "joined the chat!",
              id: Date.now(),
              type: "JOIN",
              user: {
                username: member.clientData.username,
                avatar: member.clientData.avatar,
                color: member.clientData.color,
                room: member.clientData.avatar,
              },
            },
          ];
        });
    });

    room.on("member_leave", (member) => {
      setMembersArr((prev) => {
        return prev.filter((mem) => mem.id !== member.id);
      });
      const messageSound = new Audio(userNotification);
      messageSound.volume = 0.1;
      messageSound.play(),
        setMessageArr((prev) => {
          return [
            ...prev,
            {
              message: "left the chat!",
              id: Date.now(),
              type: "LEFT",
              user: {
                username: member.clientData.username,
                avatar: member.clientData.avatar,
                color: member.clientData.color,
                room: member.clientData.avatar,
              },
            },
          ];
        });
    });

    room.on("message", (message) => {
      const messageSound = new Audio(messageNotification);
      messageSound.volume = 0.1;
      messageSound.play(),
        setMessageArr((prev) => {
          return [
            ...prev,
            {
              message: message.data.message,
              id: Date.now(),
              type: "MESSAGE",
              timestamp: new Date().toLocaleString(),
              user: {
                id: message.member.id,
                username: message.member.clientData.username,
                avatar: message.member.clientData.avatar,
                color: message.member.clientData.color,
                room: message.member.clientData.room,
              },
            },
          ];
        });
    });
  };

  const timeout = setTimeout(() => {
    setIsReady(false);
    return;
  }, 3000);

  const getRoomOpen = (value) => {
    setToggleHide(value);
  };

  return (
    <>
      {isReady ? (
        <Loader />
      ) : (
        <div className="chat-container">
          <RoomList toggleHide={toggleHide} />
          <div className="messages-container">
            <CurrentRoom getRoomOpen={getRoomOpen} />
            <MessageList />
            <InputMessage />
          </div>
          <div
            className={toggleHide ? "users-container" : "users-container hide"}
          >
            <User />
            <UserList />
          </div>
        </div>
      )}
    </>
  );
};
