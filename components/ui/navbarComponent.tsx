import { AppBar, IconButton, Toolbar } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { UIContext } from "../../context/ui/UIContext";

const NavbarComponent = () => {
  const { setopenMenu } = useContext(UIContext);

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton onClick={setopenMenu}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;
