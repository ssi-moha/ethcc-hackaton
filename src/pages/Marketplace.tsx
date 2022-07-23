import { Box } from "@chakra-ui/react";
import ReactCanvasConfetti from "react-canvas-confetti";
import useUpdateThemeOnConnection from "../hooks/useUpdateThemeOnConnection";

export const Marketplace = () => {
  const { fire } = useUpdateThemeOnConnection();

  return (
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
  );
};
