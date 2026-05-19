import DashboardLayout from "../../../components/layout/DashboardLayout";
import PageHeader from "../../../components/layout/PageHeader";
import AttendanceTable from "../components/AttendanceTable";
import AttendanceFilters from "../components/AttendanceFilters";

function AttendancePage({ title, records, filters = {} }) {
  if (!records || records.length === 0) return <p>No data</p>;

  return (
    <DashboardLayout>
      <PageHeader title={title} />
      <AttendanceFilters
        date={filters.date}
        department={filters.department}
        departments={filters.departments}
        onDateChange={filters.onDateChange}
        onDepartmentChange={filters.onDepartmentChange}
      />
      <AttendanceTable records={records} />
    </DashboardLayout>
  );
}

export default AttendancePage;
