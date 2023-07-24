import React from "react";
import { useState, useRef, useEffect } from "react";
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
        <input ref={inputEl} value={name} onChange={(e) => setName(e.target.value) }></input>
        {/* <input value={name} onChange={(e) => setName(e.target.value)}></input> */}
        <div>my name is {name}</div>
        <button style={{ marginTop: "10px" }} onClick={focus}>
          Focus
        </button>
        <div>
          <h1>
            My name is <span style={{ color: "red" }}>{name}</span> and it used
            to be <span style={{color: 'blue'}}>{prevName.current}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UseRef;
