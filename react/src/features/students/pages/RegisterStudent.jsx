import React, { useState } from "react";
import StudentForm from "../components/StudentForm";
import { createStudent } from "../studentService";

const RegisterStudent = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      await createStudent(data);
      alert("Student created successfully");
    } catch (err) {
      alert("Failed to create student");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Register Student</h2>
      <StudentForm onSubmit={handleSubmit} loading={loading} />
    </div>
  );
};

export default RegisterStudent;