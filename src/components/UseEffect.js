import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  console.log("I will run every time");

  useEffect(() => {
    console.log("resource type changed");

    return () => {
      console.log("return from resource changed");
    };
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
        <button  onClick={() => setResourceType("posts")}>
          Posts
        </button>
        <button className="button" onClick={() => setResourceType("users")}>
          Users
        </button>
        <button className="button" onClick={() => setResourceType("comments")}>
          Comments
        </button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item, key) => {
        return (
          <>
            <h1>{key + 1}</h1>
            <pre>JSON Post: {JSON.stringify(item.title)}</pre>
            <pre>Not JSON Post: {item.title}</pre>
            <pre>Body: {item.body}</pre>
          </>
        );
      })}
    </>
  );
};

export default UseEffect;
