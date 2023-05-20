import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Logo } from "../../assets/Logo";
import "./Header.scss";

export const Header = () => {
  const { user, userLogout, setTheme } = useContext(UserContext);

  const handleThemeChange = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
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
        <label htmlFor="toggle-mode" className="toggle-label"><input
          type="checkbox"
          className="toggle-mode"
          id="toggle-mode"
          onChange={handleThemeChange}
        /></label>
        
        {user && renderLogout}
      </div>
    </div>
  );
};
