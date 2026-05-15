import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthRoutes from "./AuthRoutes";
import DashboardRoutes from "./DashboardRoutes";
import NotFound from "@/pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes (login, register, etc.) */}
        <Route path="/*" element={<AuthRoutes />} />

        {/* Dashboard routes (protected area) */}
        <Route path="/dashboard/*" element={<DashboardRoutes />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;