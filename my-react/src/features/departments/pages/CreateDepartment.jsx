import { useNavigate } from "react-router-dom";

import DepartmentForm from "../components/DepartmentForm";

import {
  createDepartment,
} from "../departmentService";

const CreateDepartment = () => {
  const navigate = useNavigate();

  const handleSubmit = async (
    formData
  ) => {
    try {
      await createDepartment(
        formData
      );

      navigate("/departments");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Create Department
        </h1>

        <p className="text-gray-500">
          Add a new academic department
        </p>
      </div>

      <div className="bg-white border rounded-lg p-6 shadow-sm">
        <DepartmentForm
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default CreateDepartment;