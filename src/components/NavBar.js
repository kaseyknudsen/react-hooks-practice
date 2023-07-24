import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Link } from "react-router-dom";

const pages = [
  {
    name: "Use Ref Example 1",
    link: "useRef1",
    tooltip: "focus and input",
  },
  {
    name: "Use Ref Example 2",
    link: "useRef2",
    tooltip: "How many times has the component rendered",
  },
  {
    name: "Use Ref Example 3",
    link: "useRef3",
    tooltip: "Random counter and perstisting values",
  },
];

function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}></Box>

          <Box sx={{ flexGrow: 1 }}>
            {pages.map((page) => (
              <Tooltip title={page.tooltip} placement="bottom">
                <Button
                  key={page.link}
                  sx={{ my: 2, color: "white" }}
                  href={"/" + page.link}
                >
                  {page.name}
                </Button>
              </Tooltip>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
