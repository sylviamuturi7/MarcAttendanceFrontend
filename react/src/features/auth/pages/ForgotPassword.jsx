import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { requestPasswordReset } from "../authService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await requestPasswordReset(email);
      alert("Reset link sent to email");
    } catch (err) {
      console.error(err);
      alert("Failed to send reset link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Forgot Password">
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;