import React from "react";
import { useState, useRef, useEffect } from "react";

const UseRef2 = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <div>My dog's name is {name}</div>
      <div>Component has rendered {renderCount.current} times</div>
    </div>
  );
};

export default UseRef2;
