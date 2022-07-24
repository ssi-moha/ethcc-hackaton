import { useEffect, useState } from "react";
import { getAppData } from "../clients/firebase";
import { AdminFormValues } from "../components/AdminForm";

const useGetAppProducts = (appId: string) => {
  const [app, setApp] = useState<AdminFormValues | null>(null);
  const [count, setCount] = useState(0);

  function refresh() {
    setCount(count + 1);
  }

  useEffect(() => {
    async function storeAppProducts() {
      const app = await getAppData(appId);
      if (app) setApp(app as AdminFormValues);
    }

    storeAppProducts();
  }, [appId, count]);

  return { app, refresh };
};

export default useGetAppProducts;
