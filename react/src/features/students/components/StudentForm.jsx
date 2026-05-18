import React, { useState } from "react";

function StudentForm({ onSubmit, initialData }) {
  // Junior-friendly check: if initialData exists, use its values, otherwise use empty strings
  const [formData, setFormData] = useState({
    name: initialData && initialData.name ? initialData.name : "",
    email: initialData && initialData.email ? initialData.email : "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    // Explicitly copying the state object
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