import { Marketplace } from "./pages/Marketplace";
import { Box, ChakraProvider } from "@chakra-ui/react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { Banner } from "./components/Banner";
import { Layout } from "./components/Layout";
import { NavBar } from "./components/NavBar";
import useUpdateThemeOnConnection from "./hooks/useUpdateThemeOnConnection";
import { useAppSelector } from "./store/store";
import { themes } from "./theme";
import AppRoutes from "./AppRoutes";

function App() {
  const theme = useAppSelector((state) => state.theme);

  return (
    <ChakraProvider theme={themes[theme]}>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
