import api from "@/services/api";
import endpoints from "@/services/endpoints";

export const getTeachers = async (params = {}) => {
  const response = await api.get(
    endpoints.teachers.list,
    { params }
  );

  return response.data;
};

export const getTeacherById = async (id) => {
  const response = await api.get(
    `${endpoints.teachers.details}/${id}`
  );

  return response.data;
};

export const createTeacher = async (payload) => {
  const response = await api.post(
    endpoints.teachers.create,
    payload
  );

  return response.data;
};

export const updateTeacher = async (
  id,
  payload
) => {
  const response = await api.put(
    `${endpoints.teachers.update}/${id}`,
    payload
  );

  return response.data;
};

export const deleteTeacher = async (id) => {
  const response = await api.delete(
    `${endpoints.teachers.delete}/${id}`
  );

  return response.data;
};