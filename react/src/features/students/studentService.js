import api from "../../services/api";
import { ENDPOINTS } from "../../services/endpoints";

export const getStudents = async (params) => {
  const { data } = await api.get(ENDPOINTS.students.list, { params });
  return data;
};

export const getStudentById = async (id) => {
  const { data } = await api.get(ENDPOINTS.students.details(id));
  return data;
};

export const createStudent = async (payload) => {
  const { data } = await api.post(ENDPOINTS.students.create, payload);
  return data;
};

export const updateStudent = async (id, payload) => {
  const { data } = await api.put(ENDPOINTS.students.update(id), payload);
  return data;
};

export const deleteStudent = async (id) => {
  const { data } = await api.delete(ENDPOINTS.students.delete(id));
  return data;
};
