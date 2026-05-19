import PageHeader from "../../../components/Layout/PageHeader";
import AttendanceTable from "../components/AttendanceTable";
import AttendanceFilters from "../components/AttendanceFilters";

// Generic attendance page template — accepts data and filters as props
// DashboardLayout is NOT included here because DashboardRoutes already wraps all pages in it
function AttendancePage({ title, records, filters = {} }) {
  if (!records || records.length === 0) return <p>No data</p>;

  return (
    <>
      <PageHeader title={title} />
      <AttendanceFilters
        date={filters.date}
        department={filters.department}
        departments={filters.departments}
        onDateChange={filters.onDateChange}
        onDepartmentChange={filters.onDepartmentChange}
      />
      <AttendanceTable records={records} />
    </>
  );
}

export default AttendancePage;
