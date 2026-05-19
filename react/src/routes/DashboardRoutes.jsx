import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "@/components/Layout/DashboardLayout";

import StudentsList from "@/features/students/pages/StudentsList";
import StudentProfile from "@/features/students/pages/StudentProfile";
import RegisterStudent from "@/features/students/pages/RegisterStudent";

import AttendanceOverview from "@/features/attendance/pages/AttendanceOverview";
import AttendanceLogs from "@/features/attendance/pages/AttendanceLogs";

import Teachers from "@/features/teachers/pages/Teachers";
import Departments from "@/features/departments/pages/Departments";
import Devices from "@/features/devices/pages/Devices";
// NOTE: file is MARSReport.jsx (no trailing 's')
import MARSReport from "@/features/reports/pages/MARSReport";

function DashboardRoutes() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <Routes>
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
          <Route path="/reports" element={<MARSReport />} />
        </Routes>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

export default DashboardRoutes;
