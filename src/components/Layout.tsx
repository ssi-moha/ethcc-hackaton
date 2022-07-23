import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Banner } from "./Banner";
import { NavBar } from "./NavBar";

type LayoutProps = {};

export const Layout = ({ ...props }: LayoutProps) => {
  return (
    <Box
      {...props}
      sx={{ display: "flex", flexDirection: "column", height: "inherit" }}
    >
      <NavBar />
      <Banner />
      <Outlet />
    </Box>
  );
};
