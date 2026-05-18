import { useState } from "react";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import PageHeader from "../../../components/layout/PageHeader";
import { registerDevice } from "../deviceService";

function RegisterDevice() {
  const [formData, setFormData] = useState({ name: "", macAddress: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.macAddress) {
      setError("All fields are required.");
      return;
    }
    setError("");
    registerDevice(formData);
  }

  return (
    <DashboardLayout>
      <PageHeader title="Register Device" />
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Device Name</label>
          <input name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>MAC Address</label>
          <input name="macAddress" value={formData.macAddress} onChange={handleChange} />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Register Device</button>
      </form>
    </DashboardLayout>
  );
}

export default RegisterDevice;
