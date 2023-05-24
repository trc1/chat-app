import React, { useState } from "react";
import { rooms } from "../../../helpers/rooms";
import "./Room.scss";

export const Room = ({ getRoom }) => {
  const [value, setValue] = useState("");

  const initialValue = "Choose your room...";
  const currentValue = value || initialValue;

  const handleClick = (e) => {
    getRoom(e.target.value);
    setValue(e.target.value);
  };
  return (
    <select onChange={handleClick} value={currentValue} className="select-room">
      <option disabled>{initialValue}</option>
      {rooms.map((r) => {
        return (
          <option key={r.value} value={r.label}>
            {r.label}
          </option>
        );
      })}
    </select>
  );
};
