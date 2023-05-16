import React from "react";
import { Logo } from "../../assets/Logo";
import "./Loader.scss";

export const Loader = () => {
  return (
    <div className="animation-container">
      <Logo className="loader-animation" />
    </div>
  );
};
