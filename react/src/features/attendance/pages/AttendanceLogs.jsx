import { useEffect, useState } from "react";
// NOTE: "Layout" is capital L — imports were previously lowercase which broke on Linux
import PageHeader from "../../../components/Layout/PageHeader";
import AttendanceTable from "../components/AttendanceTable";
import { getAttendanceLogs } from "../attendanceService";

// This page fetches its own data — it should not receive records as props
// because React Router does not pass props to route components
function AttendanceLogs() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLogs() {
      try {
        const data = await getAttendanceLogs();
        setRecords(data);
      } catch (err) {
        setError("Failed to load attendance logs.");
      } finally {
        setLoading(false);
      }
    }
    fetchLogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <PageHeader title="Attendance Logs" />
      <AttendanceTable records={records} />
    </>
  );
}

export default AttendanceLogs;
