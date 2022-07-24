import { useEffect, useState } from "react";
import { getAppProducts } from "../clients/firebase";
import { AdminFormValues } from "../components/AdminForm";

const useGetAppProducts = (appId: string) => {
  const [app, setApp] = useState<AdminFormValues>();

  useEffect(() => {
    async function storeAppProducts() {
      const products = await getAppProducts(appId);
      setApp(products);
    }

    storeAppProducts();
  }, [appId]);

  return app;
};

export default useGetAppProducts;
