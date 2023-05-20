import { UIContext } from "@/context/ui";
import { Box, Drawer, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";

const SideBarComponent = () => {
  const { openMenu, setopenMenu } = useContext(UIContext);
  return (
    <Drawer anchor="left" open={openMenu} onClose={setopenMenu}>
      <Box sx={{ padding: "20px 10px" }}>
        <Typography variant="h4">Menu</Typography>
      </Box>
      <Box></Box>
    </Drawer>
  );
};

export default SideBarComponent;
