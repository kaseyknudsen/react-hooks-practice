import React from "react";
import { useState, useRef, useEffect } from "react";
import { Button, TextField, Typography, Grid, Item } from "@mui/material";
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
    <Grid>
      <div className="layout">
       
        <Typography variant="h5">
          <TextField
            ref={inputEl}
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></TextField>
          {/* <input value={name} onChange={(e) => setName(e.target.value)}></input> */}

          <div>my name is {name}</div>

          <Button variant="outlined" onClick={focus}>
            Focus
          </Button>
          <div>
            My name is <span style={{ color: "red" }}>{name}</span> and it used
            to be <span style={{ color: "blue" }}>{prevName.current}</span>
          </div>
        </Typography>
      </div>
    </Grid>
  );
};

export default UseRef;
