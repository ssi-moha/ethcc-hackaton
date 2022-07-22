import { Box } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <Box
      {...props}
      sx={{ display: "flex", flexDirection: "column", height: "inherit" }}
    >
      {children}
    </Box>
  );
};
