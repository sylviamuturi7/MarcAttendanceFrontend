import DashboardLayout from "../../../components/layout/DashboardLayout";
import PageHeader from "../../../components/layout/PageHeader";
import AttendanceTable from "../components/AttendanceTable";
import AttendanceFilters from "../components/AttendanceFilters";

function DailyAttendance({ records, departments, date, onDateChange, onDepartmentChange, department }) {
  if (!records || records.length === 0) return <p>No data</p>;

  return (
    <DashboardLayout>
      <PageHeader title="Daily Attendance" />
      <AttendanceFilters
        date={date}
        department={department}
        departments={departments}
        onDateChange={onDateChange}
        onDepartmentChange={onDepartmentChange}
      />
      <AttendanceTable records={records} />
    </DashboardLayout>
  );
}

export default DailyAttendance;
