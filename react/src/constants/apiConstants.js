const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
  },
  PROFILE: {
    BASE: "/profile",
    PASSWORD: "/profile/password",
  },
  STUDENTS: {
    BASE: "/students",
  },
  ATTENDANCE: {
    BASE: "/attendance",
    LIVE: "/attendance/live",
    LOGS: "/attendance/logs",
    BY_DATE: "/attendance/date",
    BY_DEPARTMENT: "/attendance/department",
  },
  DEPARTMENTS: {
    BASE: "/departments",
  },
  REPORTS: {
    BASE: "/reports",
    AVERAGE_ATTENDANCE: "/reports/average-attendance",
    BY_DEPARTMENT: "/reports/department",
  },
  DEVICES: {
    BASE: "/devices",
  },
};

export { ENDPOINTS };
