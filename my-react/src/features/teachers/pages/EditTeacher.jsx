import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import TeacherForm from "../components/TeacherForm";

import {
  getTeacherById,
  updateTeacher,
} from "../teacherService";

const EditTeacher = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [teacher, setTeacher] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [submitting, setSubmitting] =
    useState(false);

  const fetchTeacher = async () => {
    try {
      setLoading(true);

      const data =
        await getTeacherById(id);

      setTeacher(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeacher();
  }, [id]);

  const handleSubmit = async (
    formData
  ) => {
    try {
      setSubmitting(true);

      await updateTeacher(
        id,
        formData
      );

      navigate("/teachers");
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <p>Loading teacher...</p>;
  }

  if (!teacher) {
    return (
      <p className="text-red-500">
        Teacher not found
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Edit Teacher
        </h1>

        <p className="text-gray-500">
          Update teacher information
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <TeacherForm
          initialValues={teacher}
          onSubmit={handleSubmit}
          loading={submitting}
        />
      </div>
    </div>
  );
};

export default EditTeacher;