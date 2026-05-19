import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentTable from "../components/StudentTable";
import StudentFilters from "../components/StudentFilters";
import { getStudents, deleteStudent } from "../studentService";

const StudentsList = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    department: "",
  });

  useEffect(() => {
    const loadStudents = async () => {
      const data = await getStudents();
      setStudents(data);
    };

    void loadStudents();
  }, []);

  const handleDelete = async (id) => {
    await deleteStudent(id);
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const handleEdit = (student) => {
    navigate(`/students/${student.id}/edit`);
  };

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(filters.search.toLowerCase())
  );

  return (
    <div>
      <h2>Students</h2>

      <StudentFilters filters={filters} setFilters={setFilters} />

      <StudentTable
        students={filtered}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default StudentsList;
