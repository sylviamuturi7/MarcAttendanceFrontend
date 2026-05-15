import {
  useEffect,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import DepartmentTable from "../components/DepartmentTable";
import DepartmentFilters from "../components/DepartmentFilters";

import {
  getDepartments,
  deleteDepartment,
} from "../departmentService";

const Departments = () => {
  const navigate = useNavigate();

  const [departments, setDepartments] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const fetchDepartments =
    async () => {
      try {
        setLoading(true);

        const data =
          await getDepartments({
            search,
          });

        setDepartments(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchDepartments();
  }, [search]);

  const handleDelete = async (
    id
  ) => {
    const confirmDelete =
      window.confirm(
        "Delete this department?"
      );

    if (!confirmDelete) return;

    try {
      await deleteDepartment(id);

      fetchDepartments();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          Departments
        </h1>

        <button
          onClick={() =>
            navigate(
              "/departments/create"
            )
          }
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Create Department
        </button>
      </div>

      <DepartmentFilters
        search={search}
        setSearch={setSearch}
      />

      {loading ? (
        <p>Loading departments...</p>
      ) : (
        <DepartmentTable
          departments={departments}
          onView={(id) =>
            navigate(
              `/departments/${id}`
            )
          }
          onEdit={(id) =>
            navigate(
              `/departments/${id}/edit`
            )
          }
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Departments;