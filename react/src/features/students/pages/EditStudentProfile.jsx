import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import StudentForm from "../components/StudentForm";
import { getStudentById, updateStudent } from "../studentService";
import { NotificationContext } from "@/context/NotificationContext";

const EditStudentProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loadingStudent, setLoadingStudent] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const { addNotification } = useContext(NotificationContext);

  // Fetch the student data when the component mounts
  useEffect(() => {
    async function load() {
      try {
        const data = await getStudentById(id);
        setStudent(data);
      } catch (err) {
        setFetchError("Failed to load student. Please try again.");
      } finally {
        setLoadingStudent(false);
      }
    }
    load();
  }, [id]);

  const handleSubmit = async (data) => {
    try {
      setLoadingSubmit(true);
      await updateStudent(id, data);
      addNotification("Student updated successfully.", "success");
    } catch (err) {
      addNotification("Failed to update student. Please try again.", "error");
    } finally {
      setLoadingSubmit(false);
    }
  };

  if (loadingStudent) return <p>Loading student...</p>;
  if (fetchError) return <p>{fetchError}</p>;

  return (
    <div>
      <h2>Edit Student</h2>

      {student && (
        <StudentForm
          initialData={student}
          onSubmit={handleSubmit}
          loading={loadingSubmit}
        />
      )}
    </div>
  );
};

export default EditStudentProfile;
