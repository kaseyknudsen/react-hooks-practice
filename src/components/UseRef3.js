import React from "react";
import { useState, useEffect, useRef } from "react";
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
    <div style={{ marginTop: "50px" }}>
      <input
        type="text"
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={clearNameInput}>Reset</button>
      <div style={{ marginTop: "20px" }}>Counter: {counter}</div>
      <button
        onClick={() => setCounter(randomNum)}
        style={{ marginTop: "20px" }}
      >
        Click to update counter
      </button>
      {typeof prevNum.current !== "undefined" && (
        <div style={{ marginTop: "20px" }}>
          Previous Counter: {prevNum.current}
        </div>
      )}
    </div>
  );
};

export default UseRef3;
