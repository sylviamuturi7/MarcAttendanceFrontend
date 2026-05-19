import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import LoginForm from "../components/LoginForm";
import { loginUser } from "../authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      setLoading(true);
      const res = await loginUser(data);

      localStorage.setItem("token", res.token);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Login">
      <LoginForm onSubmit={handleLogin} loading={loading} />
    </AuthLayout>
  );
};

export default Login;