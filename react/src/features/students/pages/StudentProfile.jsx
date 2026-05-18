import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StudentDetailsCard from "../components/StudentDetailsCard";
import { getStudentById } from "../studentService";

const StudentProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        setLoading(true);
        const data = await getStudentById(id);
        setStudent(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Student Profile</h2>

      <StudentDetailsCard student={student} />
    </div>
  );
};

export default StudentProfile;
