import { useNavigate } from "react-router-dom";

import TeacherForm from "../components/TeacherForm";

import {
  createTeacher,
} from "../teacherService";

const RegisterTeacher = () => {
  const navigate = useNavigate();

  const handleSubmit = async (
    data
  ) => {
    try {
      await createTeacher(data);

      navigate("/teachers");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">
        Register Teacher
      </h1>

      <TeacherForm
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default RegisterTeacher;