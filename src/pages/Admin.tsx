import AdminForm from "./../components/AdminForm";

import { Box } from "@chakra-ui/react";

import useGetAppProducts from "../hooks/useGetAppProducts";
import useUpdateThemeOnConnection from "../hooks/useUpdateThemeOnConnection";

const Admin = () => {
  const app = useGetAppProducts("ukwyvv9vMiB66hiEaoRF");
  if (!app) return <div>Loading...</div>;

  return (
    <Box
      id="main"
      mt={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flex={1}
    >
      {app?.products.length !== 0 && (
        <AdminForm
          appname={app.appname}
          logo={app.logo}
          products={app.products}
          id="ukwyvv9vMiB66hiEaoRF"
        />
      )}
    </Box>
  );
};

export default Admin;
