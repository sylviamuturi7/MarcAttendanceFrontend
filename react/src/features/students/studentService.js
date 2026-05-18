import api from "../../services/api";
import { STUDENT_ENDPOINTS } from "../../services/endpoints";

export const getStudents = async (params) => {
  const { data } = await api.get(STUDENT_ENDPOINTS.GET_ALL, { params });
  return data;
};

export const getStudentById = async (id) => {
  const { data } = await api.get(`${STUDENT_ENDPOINTS.GET_BY_ID}/${id}`);
  return data;
};

export const createStudent = async (payload) => {
  const { data } = await api.post(STUDENT_ENDPOINTS.CREATE, payload);
  return data;
};

export const updateStudent = async (id, payload) => {
  const { data } = await api.put(`${STUDENT_ENDPOINTS.UPDATE}/${id}`, payload);
  return data;
};

export const deleteStudent = async (id) => {
  const { data } = await api.delete(`${STUDENT_ENDPOINTS.DELETE}/${id}`);
  return data;
};