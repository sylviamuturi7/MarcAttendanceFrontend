//making API calls to fetch attendance data for the dashboard and logs pages
import api from "../../../services/api";

async function getLiveConnections() {
  try {
    const response = await api.get("/attendance/live");
    return response.data;
  } catch (error) {
    throw error.response?.data ?? error;
  }
}

async function getAttendanceLogs() {
  try {
    const response = await api.get("/attendance/logs");
    return response.data;
  } catch (error) {
    throw error.response?.data ?? error;
  }
}

async function getAttendanceByDate(date) {
  try {
    const response = await api.get(`/attendance/date/${encodeURIComponent(date)}`);
    return response.data;
  } catch (error) {
    throw error.response?.data ?? error;
  }
}

async function getAttendanceByDepartment(department) {
  try {
    const response = await api.get(`/attendance/department/${encodeURIComponent(department)}`);
    return response.data;
  } catch (error) {
    throw error.response?.data ?? error;
  }
}

export { getLiveConnections, getAttendanceLogs, getAttendanceByDate, getAttendanceByDepartment };

