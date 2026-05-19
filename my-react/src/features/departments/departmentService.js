import api from "@/services/api";
import endpoints from "@/services/endpoints";

export const getDepartments = async (
  params = {}
) => {
  const response = await api.get(
    endpoints.departments.list,
    { params }
  );

  return response.data;
};

export const getDepartmentById = async (
  id
) => {
  const response = await api.get(
    `${endpoints.departments.details}/${id}`
  );

  return response.data;
};

export const createDepartment = async (
  payload
) => {
  const response = await api.post(
    endpoints.departments.create,
    payload
  );

  return response.data;
};

export const updateDepartment = async (
  id,
  payload
) => {
  const response = await api.put(
    `${endpoints.departments.update}/${id}`,
    payload
  );

  return response.data;
};

export const deleteDepartment = async (
  id
) => {
  const response = await api.delete(
    `${endpoints.departments.delete}/${id}`
  );

  return response.data;
};