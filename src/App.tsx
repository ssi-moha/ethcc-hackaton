import { Box, ChakraProvider, HStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Banner } from "./components/Banner";
import { Layout } from "./components/Layout";
import { NavBar } from "./components/NavBar";
import useUpdateThemeOnConnection from "./hooks/useUpdateThemeOnConnection";
import { RootState } from "./store/store";
import { themes } from "./theme";

function App() {
  const theme = useSelector((state: RootState) => state.theme);
  const {} = useUpdateThemeOnConnection();
  return (
    <ChakraProvider theme={themes[theme]}>
      <Box>
        <Layout>
          <NavBar />

          <Banner />
        </Layout>
        <Box mt={10} display="flex" justifyContent="center" alignItems="center">
          {theme}
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
