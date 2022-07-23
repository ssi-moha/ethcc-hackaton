import { Navigate, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import { Marketplace } from "./pages/Marketplace";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Marketplace />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
