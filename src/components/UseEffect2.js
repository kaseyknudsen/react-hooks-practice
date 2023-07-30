import { useState, useEffect } from "react";

const UseEffect2 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [backGroundColor, setBackGroundColor] = useState("white");

  const getRandomColor = () => {
    const backGroundColors = ["red", "blue", "green", "yellow", "gold"];
    const RandomIndex = Math.floor(Math.random() * backGroundColors.length);
    return backGroundColors[RandomIndex];
  };
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const randomColor = getRandomColor();
    setBackGroundColor(randomColor);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = backGroundColor;
  });

  return (
    <>
      <div>{windowWidth}</div>
    </>
  );
};

export default UseEffect2;
