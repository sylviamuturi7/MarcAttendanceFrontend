import { useState } from "react";
import Input from "@/components/common/Input";

function StudentForm({ onSubmit, initialData, loading }) {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    email: initialData?.email || "",
    regNo: initialData?.regNo || "",
    department: initialData?.department || "",
    year: initialData?.year || "",
    device: {
      name: initialData?.device?.name || "",
      macAddress: initialData?.device?.macAddress || "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name"
        type="text"
        placeholder="Full name"
        value={formData.name}
        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
      />

      <Input
        label="Email"
        type="email"
        placeholder="Email address"
        value={formData.email}
        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
      />

      <Input
        label="Registration Number"
        type="text"
        placeholder="Reg No"
        value={formData.regNo}
        onChange={(e) => setFormData((prev) => ({ ...prev, regNo: e.target.value }))}
      />

      <Input
        label="Department"
        type="text"
        placeholder="Department"
        value={formData.department}
        onChange={(e) => setFormData((prev) => ({ ...prev, department: e.target.value }))}
      />

      <Input
        label="Year"
        type="text"
        placeholder="Year"
        value={formData.year}
        onChange={(e) => setFormData((prev) => ({ ...prev, year: e.target.value }))}
      />

      <h3>Device</h3>
      <Input
        label="Device Name"
        type="text"
        placeholder="Device name"
        value={formData.device.name}
        onChange={(e) => setFormData((prev) => ({
          ...prev,
          device: { ...prev.device, name: e.target.value }
        }))}
      />
      <Input
        label="MAC Address"
        type="text"
        placeholder="MAC Address"
        value={formData.device.macAddress}
        onChange={(e) => setFormData((prev) => ({
          ...prev,
          device: { ...prev.device, macAddress: e.target.value }
        }))}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save"}
      </button>
    </form>
  );
}

export default StudentForm;
