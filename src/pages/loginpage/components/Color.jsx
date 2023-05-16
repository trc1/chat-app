import React, { useState } from "react";
import { colors } from "../../../helpers/colors";
import "./Color.scss";
export const Color = ({ getColor }) => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleClick = (e) => {
    getColor(e.target.dataset.value);
    setSelectedColor(e.target.dataset.value);
  };

  return (
    <ul className="color-list">
      {colors.map((c) => {
        const isActive = selectedColor === c;
        return (
          <li
            className={`color ${isActive ? "active" : ""}`}
            key={c}
            onClick={handleClick}
            data-value={c}
            style={{
              backgroundColor: c,
            }}
          ></li>
        );
      })}
    </ul>
  );
};
