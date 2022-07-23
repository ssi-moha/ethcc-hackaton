import { Box } from "@chakra-ui/react";
import React from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { Banner } from "../components/Banner";
import { Layout } from "../components/Layout";
import { NavBar } from "../components/NavBar";
import useUpdateThemeOnConnection from "../hooks/useUpdateThemeOnConnection";

export const Marketplace = () => {
  const { fire } = useUpdateThemeOnConnection();

  return (
    <Box>
      <Layout>
        <NavBar />

        <Banner />

        <Box
          id="main"
          mt={10}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flex={1}
        >
          <ReactCanvasConfetti fire={fire} className="canvas" />
          Welcome to our app!
        </Box>
      </Layout>
    </Box>
  );
};
