import api from "../../../services/api";

async function getAdminProfile() {
  try {
    const response = await api.get("/profile");
    return response.data;
  } catch (error) {
    throw error.response?.data ?? error;
  }
}

async function updateAdminProfile(profileData) {
  try {
    const response = await api.put("/profile", profileData);
    return response.data;
  } catch (error) {
    throw error.response?.data ?? error;
  }
}

async function updatePassword(passwordData) {
  try {
    const response = await api.put("/profile/password", passwordData);
    return response.data;
  } catch (error) {
    throw error.response?.data ?? error;
  }
}

export { getAdminProfile, updateAdminProfile, updatePassword };
