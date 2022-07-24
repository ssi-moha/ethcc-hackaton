import AdminForm from "./../components/AdminForm";

import { Box } from "@chakra-ui/react";

import useGetAppProducts from "../hooks/useGetAppProducts";

const Admin = () => {
  const { app, refresh } = useGetAppProducts("ukwyvv9vMiB66hiEaoRF");
  if (!app || !app.appname || !app.logo) return <div>Loading...</div>;

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
          refresh={refresh}
          appname={app.appname}
          logo={app.logo}
          products={app.products}
          id="ukwyvv9vMiB66hiEaoRF"
          sismo={app.sismo}
        />
      )}
    </Box>
  );
};

export default Admin;
