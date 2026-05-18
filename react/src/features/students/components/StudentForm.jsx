
import { useState } from "react";

function StudentForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    name: initialData ? initialData.name : "",
    email: initialData ? initialData.email : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
}

export default StudentForm;
