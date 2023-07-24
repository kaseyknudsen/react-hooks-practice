import React from "react";
import { useState, useRef, useEffect } from "react";
import { Button, TextField, Typography } from "@mui/material";
const UseRef = () => {
  const [name, setName] = useState("");
  const inputEl = useRef();
  const prevName = useRef("");

  const focus = () => {
    inputEl.current.focus();
  };

  //to store previous value
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <div className="name">
        <TextField
          ref={inputEl}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></TextField>
        {/* <input value={name} onChange={(e) => setName(e.target.value)}></input> */}
        <Typography variant="h2" >
         
          <div>my name is {name}</div>
        </Typography>
        <Button
          variant="outlined"
          style={{ marginTop: "10px" }}
          onClick={focus}
        >
          Focus
        </Button>
        <div>
          <h1>
            My name is <span style={{ color: "red" }}>{name}</span> and it used
            to be <span style={{ color: "blue" }}>{prevName.current}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UseRef;
