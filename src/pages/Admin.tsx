import AdminForm from "./../components/AdminForm";

import { Box } from "@chakra-ui/react";

import useGetAppProducts from "../hooks/useGetAppProducts";
import useUpdateThemeOnConnection from "../hooks/useUpdateThemeOnConnection";

const Admin = () => {
  const products = useGetAppProducts("ukwyvv9vMiB66hiEaoRF");
  
  return (
    <Box
      id="main"
      mt={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flex={1}
    >
      {products.length !== 0 && (
        <AdminForm products={products} id="ukwyvv9vMiB66hiEaoRF" />
      )}
    </Box>
  );
};

export default Admin;
