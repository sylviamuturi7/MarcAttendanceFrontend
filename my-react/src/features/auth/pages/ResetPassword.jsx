import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import PasswordField from "../components/PasswordField";
import { resetPassword } from "../authService";

const ResetPassword = () => {
  const [form, setForm] = useState({
    token: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(form);
      alert("Password reset successful");
    } catch (err) {
      console.error(err);
      alert("Reset failed");
    }
  };

  return (
    <AuthLayout title="Reset Password">
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          placeholder="Reset Token"
          value={form.token}
          onChange={(e) =>
            setForm({ ...form, token: e.target.value })
          }
          required
        />

        <PasswordField
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button type="submit">Reset Password</button>
      </form>
    </AuthLayout>
  );
};

export default ResetPassword;