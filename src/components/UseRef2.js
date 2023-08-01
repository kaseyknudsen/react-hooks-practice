import React from "react";
import { useState, useRef, useEffect } from "react";
import { Typography, Grid } from "@mui/material";

const UseRef2 = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <Grid>
      <div className="layout">
        <input
          value={name}
          style={{
            marginBottom: "2em",
            width: "200px",
            height: "50px",
            fontSize: "25px",
          }}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <Typography variant="h5" fontSize={"25px"}>
          <div style={{ marginBottom: "2em" }}>My dog's name is {name}</div>
          <div>
            Component has rendered <span id="number">{renderCount.current}</span> times
          </div>
        </Typography>
      </div>
    </Grid>
  );
};

export default UseRef2;
