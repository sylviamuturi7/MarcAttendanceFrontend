import api from "../../services/api";
import { ENDPOINTS } from "../../services/endpoints";

export const loginUser = async (credentials) => {
  const { data } = await api.post(ENDPOINTS.auth.login, credentials);
  return data;
};

export const registerUser = async (payload) => {
  const { data } = await api.post(ENDPOINTS.auth.register, payload);
  return data;
};

export const requestPasswordReset = async (email) => {
  const { data } = await api.post(ENDPOINTS.auth.forgotPassword, { email });
  return data;
};

export const resetPassword = async (payload) => {
  const { data } = await api.post(ENDPOINTS.auth.resetPassword, payload);
  return data;
};
