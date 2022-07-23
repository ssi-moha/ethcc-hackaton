import { Box } from "@chakra-ui/react";
import { Banner } from "./Banner";
import { NavBar } from "./NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <Box
      {...props}
      sx={{ display: "flex", flexDirection: "column", height: "inherit" }}
    >
      <NavBar />
      <Banner />
      {children}
    </Box>
  );
};
