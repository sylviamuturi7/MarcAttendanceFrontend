import DashboardLayout from "../../../components/Layout/DashboardLayout";
import PageHeader from "../../../components/Layout/PageHeader";
import AttendanceChart from "../../attendance/components/AttendanceChart";

function AttendanceTrends() {
  const chartData = null;

  if (chartData === null) {
    return (
      <DashboardLayout>
        <PageHeader title="Attendance Trends" />
        <p>Loading...</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <PageHeader title="Attendance Trends" />
      <AttendanceChart data={chartData} />
    </DashboardLayout>
  );
}

export default AttendanceTrends;
