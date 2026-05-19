import { useEffect, useState } from "react";
// NOTE: "Layout" is capital L — imports were previously lowercase which broke on Linux
import PageHeader from "../../../components/Layout/PageHeader";
import AttendanceSummary from "../components/AttendanceSummary";
import AttendanceTable from "../components/AttendanceTable";
import { getLiveConnections, getAttendanceStats } from "../attendanceService";

// This page fetches its own data — it should not receive props from the router
function AttendanceOverview() {
  const [records, setRecords] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [liveData, statsData] = await Promise.all([
          getLiveConnections(),
          getAttendanceStats(),
        ]);
        setRecords(liveData);
        setStats(statsData);
      } catch (err) {
        setError("Failed to load attendance overview.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <PageHeader
        title="Attendance Overview"
        subtitle="Real-time student device tracking and environmental analytics"
      />
      <AttendanceSummary
        currentlyPresent={stats?.currentlyPresent}
        totalRegistered={stats?.totalRegistered}
      />
      <PageHeader title="Live Connections" />
      <AttendanceTable records={records} />
    </>
  );
}

export default AttendanceOverview;
