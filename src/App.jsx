import "./App.scss";
import { LoginPage } from "./pages/loginpage/LoginPage";
import { ChatPage } from "./pages/chatpage/ChatPage";
import { Header } from "./pages/header/Header";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";
import { CHANNEL_ID } from "./helpers/scaledrone";
import "./App.scss";

function App() {
  const [user, setUser] = useState("");
  const [drone, setDrone] = useState(null);
  const [messageArr, setMessageArr] = useState([]);
  const [membersArr, setMembersArr] = useState([]);

  const userLogin = (username, avatar, color, room) => {
    if (username) {
      const drone = new window.Scaledrone(CHANNEL_ID, {
        data: { username, avatar, color, room },
      });
      drone.on("open", (error) => {
        if (error) {
          console.log(error);
        }
        setDrone(drone);
        setUser({ id: drone.clientId, username, avatar, color, room });
      });
    }
  };

  const userLogout = () => {
    drone.close();
    setDrone(null);
    setUser(null);
    setMembersArr([]);
    setMessageArr([]);
  };

  const selectedRooms = (value) => {
    if (user.room === value) {
      return;
    }
    drone.unsubscribe(`observable-${user.room}`);
    setUser({ ...user, room: value });
    setMessageArr([]);
  };

  const setTheme = (value) => {
    document.documentElement.setAttribute("data-theme", `${value}`);
  };

  const publish = (message) => {
    drone.publish({
      room: `observable-${user.room}`,
      message: { message },
    });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        drone,
        userLogin,
        userLogout,
        selectedRooms,
        membersArr,
        setMembersArr,
        messageArr,
        setMessageArr,
        setTheme,
        publish,
      }}
    >
      <Header />
      {!user ? <LoginPage /> : <ChatPage />}
    </UserContext.Provider>
  );
}

export default App;
