import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Logo } from "../../assets/Logo";
import "./Header.scss";

export const Header = () => {
  const { user, userLogout, setTheme } = useContext(UserContext);

  const handleThemeChange = (e) => {
    if (e.target.checked) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  const renderLogout = (
    <button className="logout" onClick={userLogout}>
      Logout
    </button>
  );
  return (
    <div className="header-container">
      <Logo className="header-logo" />
      <div className="header-buttons">
        <input
          type="checkbox"
          className="toggle-mode"
          onChange={handleThemeChange}
        />
        {user && renderLogout}
      </div>
    </div>
  );
};
