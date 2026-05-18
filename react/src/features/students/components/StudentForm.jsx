import React, { useState } from "react";

function StudentForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    name: initialData ? initialData.name : "",
    email: initialData ? initialData.email : "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass the data back to the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default StudentForm;