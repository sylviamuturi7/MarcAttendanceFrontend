import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StudentForm from "../components/StudentForm";
import {
  getStudentById,
  updateStudent,
} from "../studentService";

const EditStudentProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      const data = await getStudentById(id);
      setStudent(data);
    };
    load();
  }, [id]);

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      await updateStudent(id, data);
      alert("Updated successfully");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Edit Student</h2>

      {student && (
        <StudentForm
          initialData={student}
          onSubmit={handleSubmit}
          loading={loading}
        />
      )}
    </div>
  );
};

export default EditStudentProfile;