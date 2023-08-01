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
  const clearField = () => {
    setName("");
  };

  //to store previous value
  useEffect(() => {
    prevName.current = name;
    console.log(prevName.current)
  }, [name]);

  return (
    <Grid>
      <div className="layout">
        <Typography variant="h5">
          {/* focus doesn't matter since i'm using material UI */}
          <TextField
            ref={inputEl}
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ marginBottom: "1em" }}
          ></TextField>
          <div>
            <Button
              variant="outlined"
              onClick={clearField}
              sx={{ marginBottom: "2em", marginLeft: "5px" }}
            >
              Clear Name
            </Button>
          </div>
          {/* <input value={name} onChange={(e) => setName(e.target.value)}></input> */}

          <div style={{ marginBottom: "1em" }}>My name is {name}</div>

          <Button
            variant="outlined"
            onClick={focus}
            sx={{ marginBottom: "2em" }}
          >
            Focus
          </Button>

          <div>
            ...and it used to be...{" "}
            <span style={{ color: "blue" }}>{prevName.current}</span>
          </div>
        </Typography>
      </div>
    </Grid>
  );
};

export default UseRef;
