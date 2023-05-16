import React, { useEffect, useState } from "react";
import "./Username.scss";

export const Username = ({ getUsername, setError }) => {
  const [inputValue, setInputValue] = useState("");
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
      setError(false);
    }, 500);

    return () => clearTimeout(delay);
  }, [debouncedInputValue, getUsername, setError]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="Username"
      className="username"
    />
  );
};
