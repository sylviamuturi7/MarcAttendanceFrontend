import { Routes, Route } from "react-router-dom";

import AuthRoutes from "./AuthRoutes";
import DashboardRoutes from "./DashboardRoutes";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<DashboardRoutes />} />

      <Route path="/*" element={<AuthRoutes />} />
    </Routes>
  );
}

export default AppRoutes;
//Deleted browserRouter wrapper since it's already provided in main.jsx. 