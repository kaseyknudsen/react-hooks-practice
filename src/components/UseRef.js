import React from "react";
import { useState, useRef, useEffect } from "react";
const UseRef = () => {
  const [name, setName] = useState("");
  const inputEl = useRef();
  const prevName = useRef("");
  const focus = () => {
    inputEl.current.focus();
  };
  useEffect(() => {
    prevName.current = name;
  }, [name]);
  return (
    <div>
      <div className="name">
        {/* <input ref={inputEl} value={name} onChange={(e) => setName(e.target.value) }></input> */}
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <div>my name is {name}</div>
        <button style={{ marginTop: "10px" }} onClick={focus}>
          Focus
        </button>
        <div>
          My name is {name} and it used to be {prevName.current}
        </div>
      </div>
    </div>
  );
};

export default UseRef;
