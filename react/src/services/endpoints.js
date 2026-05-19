const ENDPOINTS = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    getProfile: "/auth/me",
    updateProfile: "/auth/me",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
  },

  departments: {
    list: "/departments",
    create: "/departments",
    details: (id) => `/departments/${id}`,
    update: (id) => `/departments/${id}`,
    delete: (id) => `/departments/${id}`,
  },

  students: {
    list: "/students",
    create: "/students",
    details: (id) => `/students/${id}`,
    update: (id) => `/students/${id}`,
    delete: (id) => `/students/${id}`,
    activity: (id) => `/students/${id}/activity`,
  },

  teachers: {
    list: "/teachers",
    create: "/teachers",
    details: (id) => `/teachers/${id}`,
    update: (id) => `/teachers/${id}`,
    delete: (id) => `/teachers/${id}`,
  },

  attendance: {
    scan: "/attendance/scan",
    stats: "/attendance/stats",
    live: "/attendance/live",
    logs: "/attendance/logs",
  },

  reports: {
    list: "/reports",
    generate: "/reports/generate",
    exportCsv: (id) => `/reports/${id}/export`,
    delete: (id) => `/reports/${id}`,
  },

  devices: {
    list: "/devices",
    details: (mac) => `/devices/${mac}`,
    create: "/devices",
    updateStatus: (mac) => `/devices/${mac}`,
    delete: (mac) => `/devices/${mac}`,
  },

  profile: {
    get: "/profile",
    update: "/profile",
    updatePassword: "/profile/password",
  },
};

export { ENDPOINTS };
