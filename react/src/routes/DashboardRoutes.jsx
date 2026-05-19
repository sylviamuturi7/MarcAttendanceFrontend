import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../components/Layout/DashboardLayout.jsx";

import StudentsList from "../features/students/pages/StudentsList.jsx";
import StudentProfile from "../features/students/pages/StudentProfile.jsx";
import RegisterStudent from "../features/students/pages/RegisterStudent.jsx";

import AttendanceOverview from "../features/attendance/pages/AttendanceOverview.jsx";
import AttendanceLogs from "../features/attendance/pages/AttendanceLogs.jsx";

import Teachers from "../features/teachers/pages/Teachers.jsx";
import Departments from "../features/departments/pages/Departments.jsx";
import Devices from "../features/devices/pages/Devices.jsx";
import MARSReports from "../features/reports/pages/MARSReport.jsx";

function DashboardRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          {/* Students */}
          <Route path="/students" element={<StudentsList />} />
          <Route path="/students/:id" element={<StudentProfile />} />
          <Route path="/students/register" element={<RegisterStudent />} />

          {/* Attendance */}
          <Route path="/attendance" element={<AttendanceOverview />} />
          <Route path="/attendance/logs" element={<AttendanceLogs />} />

          {/* Teachers */}
          <Route path="/teachers" element={<Teachers />} />

          {/* Departments */}
          <Route path="/departments" element={<Departments />} />

          {/* Devices */}
          <Route path="/devices" element={<Devices />} />

          {/* Reports */}
          <Route path="/reports" element={<MARSReports />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default DashboardRoutes;