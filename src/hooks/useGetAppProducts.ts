import { useEffect, useState } from "react";
import { getAppProducts } from "../clients/firebase";
import { ProductFieldsType } from "../components/AdminForm";

const useGetAppProducts = (appId: string) => {
  const [products, setProducts] = useState<ProductFieldsType[]>([]);

  useEffect(() => {
    async function storeAppProducts() {
      const products = await getAppProducts(appId);
      setProducts(products);
    }

    storeAppProducts();
  }, [appId]);

  return products;
};

export default useGetAppProducts;
