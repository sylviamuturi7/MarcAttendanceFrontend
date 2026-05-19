import DashboardLayout from "../../../components/layout/DashboardLayout";
import PageHeader from "../../../components/layout/PageHeader";
import AttendanceSummary from "../components/AttendanceSummary";
import AttendanceTable from "../components/AttendanceTable";

function AttendanceOverview({ currentlyPresent, totalRegistered, records }) {
  return (
    <DashboardLayout>
      <PageHeader title="Attendance Overview" subtitle="Real-time student device tracking and environmental analytics" />
      <AttendanceSummary currentlyPresent={currentlyPresent} totalRegistered={totalRegistered} />
      <PageHeader title="Live Connections" />
      <AttendanceTable records={records} />
    </DashboardLayout>
  );
}

export default AttendanceOverview;
