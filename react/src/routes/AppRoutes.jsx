import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthRoutes from "./AuthRoutes";
import DashboardRoutes from "./DashboardRoutes";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AuthRoutes />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;