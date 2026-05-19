import api from "../../services/api";
import { AUTH_ENDPOINTS } from "../../services/endpoints";

export const loginUser = async (credentials) => {
  const { data } = await api.post(AUTH_ENDPOINTS.LOGIN, credentials);
  return data;
};

export const registerUser = async (payload) => {
  const { data } = await api.post(AUTH_ENDPOINTS.REGISTER, payload);
  return data;
};

export const requestPasswordReset = async (email) => {
  const { data } = await api.post(AUTH_ENDPOINTS.FORGOT_PASSWORD, { email });
  return data;
};

export const resetPassword = async (payload) => {
  const { data } = await api.post(AUTH_ENDPOINTS.RESET_PASSWORD, payload);
  return data;
};