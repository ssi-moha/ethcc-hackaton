import { Box, ChakraProvider } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Banner } from "./components/Banner";
import { Layout } from "./components/Layout";
import { NavBar } from "./components/NavBar";
import { RootState } from "./store/store";
import { themes } from "./theme";

function App() {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <ChakraProvider theme={themes[theme]}>
      <Box>
        <Layout>
          <NavBar />

          <Banner />
        </Layout>
      </Box>
    </ChakraProvider>
  );
}

export default App;
