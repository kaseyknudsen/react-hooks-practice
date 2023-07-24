import React from "react";
import { useState, useRef, useEffect } from "react";
import { Typography } from "@mui/material";

const UseRef2 = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div className="layout">
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <Typography variant="h5">
        <div>My dog's name is {name}</div>
        <div>Component has rendered {renderCount.current} times</div>
      </Typography>
    </div>
  );
};

export default UseRef2;
