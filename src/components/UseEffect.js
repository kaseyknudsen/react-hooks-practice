import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  console.log("I will run every time");
  useEffect(() => {
    console.log("resource type changed");
  }, [resourceType]);
  useEffect(() => {
    console.log("on mount");
  }, []);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      //   .then((json) => console.log(json));
      .then((res) => setItems(res));
  }, [resourceType]);
  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item, key) => {
        return (
          <>
            <h1>{key + 1}</h1>
            <pre>{JSON.stringify(item.title)}</pre>
            <pre>{item.title}</pre>
          </>
        );
      })}
    </>
  );
};

export default UseEffect;
