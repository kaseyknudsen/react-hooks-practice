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
  },
  {
    name: "Use Ref Example 2",
    link: "useRef2",
  },
  {
    name: "Use Ref Example 3",
    link: "useRef3",
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
              <Button
                key={page.link}
                sx={{ my: 2, color: "white" }}
                href={"/" + page.link}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
