import {
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

import DepartmentCard from "../components/DepartmentCard";

import {
  getDepartmentById,
} from "../departmentService";

const DepartmentDetails = () => {
  const { id } = useParams();

  const [department, setDepartment] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const fetchDepartment =
    async () => {
      try {
        setLoading(true);

        const data =
          await getDepartmentById(id);

        setDepartment(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchDepartment();
  }, [id]);

  if (loading) {
    return (
      <p>Loading department...</p>
    );
  }

  if (!department) {
    return (
      <p className="text-red-500">
        Department not found
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Department Details
        </h1>
      </div>

      <DepartmentCard
        department={department}
      />
    </div>
  );
};

export default DepartmentDetails;