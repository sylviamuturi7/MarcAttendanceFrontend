import DashboardLayout from "../../../components/Layout/DashboardLayout";
import PageHeader from "../../../components/Layout/PageHeader";

function AverageAttendance() {
  const averageAttendance = null;
  const totalSessions = null;

  if (averageAttendance === null || totalSessions === null) {
    return (
      <DashboardLayout>
        <PageHeader title="Average Attendance" />
        <p>Loading...</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <PageHeader title="Average Attendance" />
      <div className="stats">
        <div className="card">
          <p>Average Attendance</p>
          <h2>{averageAttendance}%</h2>
        </div>
        <div className="card">
          <p>Total Sessions</p>
          <h2>{totalSessions}</h2>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AverageAttendance;
