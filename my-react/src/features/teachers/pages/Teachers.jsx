import {
  useEffect,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import TeacherTable from "../components/TeacherTable";
import TeacherFilters from "../components/TeacherFilters";

import {
  getTeachers,
  deleteTeacher,
} from "../teacherService";

const Teachers = () => {
  const navigate = useNavigate();

  const [teachers, setTeachers] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const fetchTeachers = async () => {
    try {
      setLoading(true);

      const data = await getTeachers({
        search,
      });

      setTeachers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, [search]);

  const handleDelete = async (id) => {
    const confirmDelete =
      window.confirm(
        "Delete this teacher?"
      );

    if (!confirmDelete) return;

    try {
      await deleteTeacher(id);

      fetchTeachers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          Teachers
        </h1>

        <button
          onClick={() =>
            navigate("/teachers/register")
          }
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Register Teacher
        </button>
      </div>

      <TeacherFilters
        search={search}
        setSearch={setSearch}
      />

      {loading ? (
        <p>Loading teachers...</p>
      ) : (
        <TeacherTable
          teachers={teachers}
          onView={(id) =>
            navigate(`/teachers/${id}`)
          }
          onEdit={(id) =>
            navigate(
              `/teachers/${id}/edit`
            )
          }
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Teachers;