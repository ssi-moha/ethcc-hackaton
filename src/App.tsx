import { Box, ChakraProvider } from "@chakra-ui/react";
import ReactCanvasConfetti from "react-canvas-confetti";
import { Banner } from "./components/Banner";
import { Layout } from "./components/Layout";
import { NavBar } from "./components/NavBar";
import useUpdateThemeOnConnection from "./hooks/useUpdateThemeOnConnection";
import { useAppSelector } from "./store/store";
import { themes } from "./theme";

function App() {
  const theme = useAppSelector((state) => state.theme);
  const { fire } = useUpdateThemeOnConnection();

  return (
    <ChakraProvider theme={themes[theme]}>
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
    </ChakraProvider>
  );
}

export default App;
