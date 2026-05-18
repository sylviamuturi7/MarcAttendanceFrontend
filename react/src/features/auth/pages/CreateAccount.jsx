import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import RegisterForm from "../components/RegisterForm";
import { registerUser } from "../authService";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      setLoading(true);
      await registerUser(data);
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Create Account">
      <RegisterForm onSubmit={handleRegister} loading={loading} />
    </AuthLayout>
  );
};

export default CreateAccount;