import api from "@/services/api";
import { ENDPOINTS } from "@/services/endpoints";

export const getDepartments = async (params = {}) => {
  const response = await api.get(ENDPOINTS.departments.list, { params });
  return response.data;
};

export const getDepartmentById = async (id) => {
  const response = await api.get(ENDPOINTS.departments.details(id));
  return response.data;
};

export const createDepartment = async (payload) => {
  const response = await api.post(ENDPOINTS.departments.create, payload);
  return response.data;
};

export const updateDepartment = async (id, payload) => {
  const response = await api.put(ENDPOINTS.departments.update(id), payload);
  return response.data;
};

export const deleteDepartment = async (id) => {
  const response = await api.delete(ENDPOINTS.departments.delete(id));
  return response.data;
};
