// Change this to your live production cloud URL when you deploy
const API_BASE_URL = "http://127.0.0.1:5000";

const ENDPOINTS = {
  auth: {
    register: API_BASE_URL + "/auth/register",
    login: API_BASE_URL + "/auth/login",
    getProfile: API_BASE_URL + "/auth/me",
    updateProfile: API_BASE_URL + "/auth/me",
  },

  departments: {
    list: API_BASE_URL + "/departments/",
    create: API_BASE_URL + "/departments/",
  },

  students: {
    listAndSearch: API_BASE_URL + "/students",
    create: API_BASE_URL + "/students",
    details: (id) => API_BASE_URL + "/students/" + id,
    delete: (id) => API_BASE_URL + "/students/" + id,
    activity: (id) => API_BASE_URL + "/students/" + id + "/activity",
  },

  attendance: {
    scan: API_BASE_URL + "/attendance/scan",
    stats: API_BASE_URL + "/attendance/stats",
    live: API_BASE_URL + "/attendance/live",
  },

  reports: {
    list: API_BASE_URL + "/reports",
    generate: API_BASE_URL + "/reports/generate",
    exportCsv: (id) => API_BASE_URL + "/reports/" + id + "/export",
    delete: (id) => API_BASE_URL + "/reports/" + id,
  },
};

export { API_BASE_URL, ENDPOINTS };
