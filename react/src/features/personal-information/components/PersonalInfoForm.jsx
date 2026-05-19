import { useState } from "react";

function PersonalInfoForm({ admin, onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: admin?.firstName || "",
    lastName: admin?.lastName || "",
    email: admin?.email || "",
  });

  if (!admin) return <p>No profile information found.</p>;

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div>
          <label>First Name</label>
          <input name="firstName" defaultValue={admin.firstName} onChange={handleChange} />
        </div>
        <div>
          <label>Last Name</label>
          <input name="lastName" defaultValue={admin.lastName} onChange={handleChange} />
        </div>
      </div>

      <label>Email Address</label>
      <input name="email" defaultValue={admin.email} onChange={handleChange} />

      <button type="submit">Save Changes</button>
    </form>
  );
}

export default PersonalInfoForm;
