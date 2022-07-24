import { Box } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import { Banner } from "./Banner";
import { NavBar } from "./NavBar";

type LayoutProps = {};

export const Layout = ({ ...props }: LayoutProps) => {
  const location = useLocation();

  return (
    <Box
      {...props}
      sx={{ display: "flex", flexDirection: "column", height: "inherit" }}
    >
      <NavBar admin={location.pathname === "/admin"} />

      <Box>
        <Banner />
        <Outlet />
      </Box>
    </Box>
  );
};
