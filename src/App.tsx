import { Box } from "@chakra-ui/react";
import { Banner } from "./components/Banner";
import { Layout } from "./components/Layout";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Box>
      <Layout>
        <NavBar />

        <Banner />
      </Layout>
    </Box>
  );
}

export default App;
