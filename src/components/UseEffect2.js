import { useState, useEffect } from "react";
import { Button } from "@mui/material";

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
      <h1>This Page Updates to a Random Color Every Time it Loads</h1>
      <h3 style={{ marginTop: "15%" }}>It Will Also Change Color if You Click this Button:</h3>

      <div>
        <Button
          variant="outlined"
          sx={{ marginTop: ".5em", backgroundColor: "white" }}
          onClick={() => setBackGroundColor(getRandomColor)}
        >
          Update Color
        </Button>
      </div>
      <div style={{ marginTop: "30%" }}>{`Window Width: ${windowWidth}`}</div>
    </>
  );
};

export default UseEffect2;
