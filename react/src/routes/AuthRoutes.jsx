import { Routes, Route } from "react-router-dom";

import Login from "../features/auth/pages/Login.jsx";
import CreateAccount from "../features/auth/pages/CreateAccount.jsx";
import ForgotPassword from "../features/auth/pages/ForgotPassword.jsx";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<CreateAccount />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default AuthRoutes;