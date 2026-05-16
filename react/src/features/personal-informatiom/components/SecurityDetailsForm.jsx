import { useState } from "react";

function SecurityDetailsForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    if (onSubmit) onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="currentPassword">Current Password</label>
      <input type="password" id="currentPassword" name="currentPassword" value={formData.currentPassword} onChange={handleChange} />

      <label htmlFor="newPassword">New Password</label>
      <input type="password" id="newPassword" name="newPassword" value={formData.newPassword} onChange={handleChange} />

      <label htmlFor="confirmPassword">Confirm New Password</label>
      <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />

      {error && <p className="error">{error}</p>}

      <button type="submit">Update Password</button>
    </form>
  );
}

export default SecurityDetailsForm;
