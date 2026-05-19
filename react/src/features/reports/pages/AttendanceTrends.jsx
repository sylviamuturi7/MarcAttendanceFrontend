import { useEffect, useState } from "react";
import PageHeader from "../../../components/Layout/PageHeader";
import AttendanceChart from "../../attendance/components/AttendanceChart";
import { getAttendanceLogs } from "../../attendance/attendanceService";

// DashboardLayout is NOT here — DashboardRoutes already wraps all pages in it
function AttendanceTrends() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAttendanceLogs();
        setChartData(data);
      } catch (err) {
        setError("Failed to load attendance trends.");
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
      <PageHeader title="Attendance Trends" />
      <AttendanceChart data={chartData} />
    </>
  );
}

export default AttendanceTrends;
