import { Routes, Route } from "react-router-dom";

import Login from "@/features/auth/pages/Login";
import CreateAccount from "@/features/auth/pages/CreateAccount";
import ForgotPassword from "@/features/auth/pages/ForgotPassword";
import ResetPassword from "@/features/auth/pages/ResetPassword";
import NotFound from "@/pages/NotFound";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<CreateAccount />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Catch any unmatched path and show 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AuthRoutes;
