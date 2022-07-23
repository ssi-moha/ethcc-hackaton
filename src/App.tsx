import { ChakraProvider } from "@chakra-ui/react";
import { useAppSelector } from "./store/store";
import { themes } from "./theme";
import { Layout } from "./components/Layout";
import AppRoutes from "./AppRoutes";

function App() {
  const theme = useAppSelector((state) => state.theme);

  return (
    <ChakraProvider theme={themes[theme]}>
      <Layout>
        <AppRoutes />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
