import React from "react";
import { useState, useEffect, useRef } from "react";
import { Button, Typography } from "@mui/material";
const UseRef3 = () => {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  const inputRef = useRef();
  const prevNum = useRef("");

  const focus = () => {
    inputRef.current.focus();
  };
  const clearNameInput = () => {
    setName("");
    focus();
  };
  const randomNum = () => {
    return Math.floor(Math.random() * 101);
  };

  useEffect(() => {
    prevNum.current = counter;
  }, [counter]);

  return (
    <div className="layout">
      <Typography variant="h5">
        <input
          type="text"
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <Button variant="outlined" onClick={clearNameInput}>
          Reset
        </Button>
        <div>Counter: {counter}</div>
        <Button onClick={() => setCounter(randomNum)} variant="outlined">
          Click to update counter
        </Button>
        {typeof prevNum.current !== "undefined" && (
          <div>Previous Counter: {prevNum.current}</div>
        )}
      </Typography>
    </div>
  );
};

export default UseRef3;
