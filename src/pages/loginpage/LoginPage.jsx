import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import { Username } from "./components/Username";
import { Avatar } from "./components/Avatar";
import { Room } from "./components/Room";
import { Color } from "./components/Color";

import "./LoginPage.scss";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [color, setColor] = useState("");
  const [room, setRoom] = useState("");
  const [error, setError] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressSet, setProgressSet] = useState(false);
  const [colorClass, setColorClass] = useState("red");

  const { userLogin } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "") {
      setError(!error);
    }
    userLogin(username, avatar, color, room);
  };

  const getRoom = (value) => {
    setRoom(value);
    setProgressSet(false);
  };
  const getUsername = (value) => {
    setUsername(value);
    setProgressSet(false);
  };

  const getColor = (value) => {
    setColor(value);
    setProgressSet(false);
  };

  const getAvatar = (value) => {
    setAvatar(value);
    setProgressSet(false);
  };

  useEffect(() => {
    let newProgress = 0;

    if (username !== "") {
      newProgress += 25;
    }
    if (avatar !== "") {
      newProgress += 25;
    }
    if (color !== "") {
      newProgress += 25;
    }
    if (room !== "" && room !== "Choose your room...") {
      newProgress += 25;
    }

    if (!progressSet) {
      setProgress(newProgress);
      setProgressSet(true);
    }

    if (newProgress >= 100) {
      setProgress(100);
      setColorClass("#21649b");
    }
  }, [username, avatar, room, color]);

  return (
    <form className="login-page-container" onSubmit={handleSubmit}>
      <Avatar getAvatar={getAvatar} />
      <Username
        getUsername={getUsername}
        username={username}
        setError={setError}
      />
      <Room getRoom={getRoom} />
      <Color getColor={getColor} />
      <div
        className="progress"
        style={{ width: `${progress}%`, backgroundColor: `${colorClass}` }}
      ></div>
      <button
        className="form-submit-button"
        type="submit"
        disabled={progress < 100}
      >
        Let's Chat!
      </button>
    </form>
  );
};
