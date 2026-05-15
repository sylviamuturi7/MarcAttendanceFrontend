import {
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

import TeacherCard from "../components/TeacherCard";
import TeacherSchedule from "../components/TeacherSchedule";

import {
  getTeacherById,
} from "../teacherService";

const TeacherProfile = () => {
  const { id } = useParams();

  const [teacher, setTeacher] =
    useState(null);

  const [loading, setLoading] =
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
          Teacher Profile
        </h1>
      </div>

      <TeacherCard teacher={teacher} />

      <div className="bg-white p-5 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">
          Teaching Schedule
        </h2>

        <TeacherSchedule
          schedules={
            teacher.schedules || []
          }
        />
      </div>
    </div>
  );
};

export default TeacherProfile;