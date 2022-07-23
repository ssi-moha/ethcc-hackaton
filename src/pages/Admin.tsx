import AdminForm from "./../components/AdminForm";

import { Box } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Layout } from "../components/Layout";
import { NavBar } from "../components/NavBar";

const Admin = () => {
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
          <AdminForm />
        </Box>
      </Layout>
    </Box>
  );
};

export default Admin;
