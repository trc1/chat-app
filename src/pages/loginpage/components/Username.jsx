import React, { useEffect, useState } from "react";
import "./Username.scss";

export const Username = ({ getUsername }) => {
  const [inputValue, setInputValue] = useState("");
  const [counter, setCounter] = useState(15);
  const debouncedInputValue = useDebounce(inputValue, 500);

  function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => clearTimeout(timeoutId);
    }, [value, delay]);

    return debouncedValue;
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      getUsername(debouncedInputValue);
    }, 500);

    return () => clearTimeout(delay);
  }, [debouncedInputValue, getUsername]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length < 15) {
      setInputValue(value);
      setCounter(15 - value.length);
    } else {
      setInputValue(value.substring(0, 15));
      setCounter(0);
    }
  };

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Username"
        className="username"
        value={inputValue}
      />
      <span className="input-counter">{counter}</span>
    </>
  );
};
