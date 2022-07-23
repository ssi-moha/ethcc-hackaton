import AdminForm from "./../components/AdminForm";

import { Box } from "@chakra-ui/react";
import { Layout } from "../components/Layout";

import useGetAppProducts from "../hooks/useGetAppProducts";

const Admin = () => {
  const products = useGetAppProducts("ukwyvv9vMiB66hiEaoRF");
  console.log(products);

  return (
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
  );
};

export default Admin;
