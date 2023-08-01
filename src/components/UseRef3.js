import React from "react";
import { useState, useEffect, useRef } from "react";
import { Button, Typography, Grid } from "@mui/material";
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
    <Grid>
      <div className="layout">
        <Typography variant="h5">
          <h2>Enter Your Name</h2>
          <input
            type="text"
            placeholder="Name"
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginRight: "10px", marginBottom: "2em" }}
          ></input>
          <Button variant="outlined" onClick={clearNameInput}>
            Reset
          </Button>
          <div
            style={{
              marginBottom: "2em",
              borderBottom: "1px dotted grey",
              padding: "5px",
            }}
          >{`Name: ${name}`}</div>
          <h2>Random Counter</h2>
          <div style={{ marginBottom: "1em" }}>Counter: {counter}</div>
          <Button
            onClick={() => setCounter(randomNum)}
            variant="outlined"
            style={{ marginBottom: "1em" }}
          >
            Click to update counter to a random number
          </Button>
          {typeof prevNum.current !== "undefined" && (
            <div>Previous Counter: {prevNum.current}</div>
          )}
        </Typography>
      </div>
    </Grid>
  );
};

export default UseRef3;
