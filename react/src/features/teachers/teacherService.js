import api from "@/services/api";
import { ENDPOINTS } from "@/services/endpoints";

export const getTeachers = async (params = {}) => {
  const response = await api.get(ENDPOINTS.teachers.list, { params });
  return response.data;
};

export const getTeacherById = async (id) => {
  const response = await api.get(ENDPOINTS.teachers.details(id));
  return response.data;
};

export const createTeacher = async (payload) => {
  const response = await api.post(ENDPOINTS.teachers.create, payload);
  return response.data;
};

export const updateTeacher = async (id, payload) => {
  const response = await api.put(ENDPOINTS.teachers.update(id), payload);
  return response.data;
};

export const deleteTeacher = async (id) => {
  const response = await api.delete(ENDPOINTS.teachers.delete(id));
  return response.data;
};
