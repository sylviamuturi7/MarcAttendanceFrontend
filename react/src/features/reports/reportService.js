import api from "../../../services/api";

async function getReports() {
  try {
    const response = await api.get("/reports");
    return response.data;
  } catch (error) {
    throw error.response?.data ?? error;
  }
}

async function getAverageAttendance() {
  try {
    const response = await api.get("/reports/average-attendance");
    return response.data;
  } catch (error) {
    throw error.response?.data ?? error;
  }
}

async function getReportByDepartment(department) {
  try {
    const response = await api.get("/reports/department/" + department);
    return response.data;
  } catch (error) {
    throw error.response?.data ?? error;
  }
}

export { getReports, getAverageAttendance, getReportByDepartment };
