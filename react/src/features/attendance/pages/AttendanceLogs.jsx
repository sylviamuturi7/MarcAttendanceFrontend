import DashboardLayout from "../../../components/layout/DashboardLayout";
import PageHeader from "../../../components/layout/PageHeader";
import AttendanceTable from "../components/AttendanceTable";

function AttendanceLogs({ records }) {
  if (!records || records.length === 0) return <p>No data</p>;

  return (
    <DashboardLayout>
      <PageHeader title="Attendance Logs" />
      <AttendanceTable records={records} />
    </DashboardLayout>
  );
}

export default AttendanceLogs;
