import { useEffect, useState } from "react";
import PageHeader from "@/components/Layout/PageHeader";
import { getAverageAttendance } from "../../reports/reportService";

// DashboardLayout is NOT here — DashboardRoutes already wraps all pages in it
function AverageAttendance() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getAverageAttendance();
        setData(result);
      } catch (err) {
        setError("Failed to load average attendance.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>No data available.</p>;

  return (
    <>
      <PageHeader title="Average Attendance" />
      <div className="stats">
        <div className="card">
          <p>Average Attendance</p>
          <h2>{data.averageAttendance}%</h2>
        </div>
        <div className="card">
          <p>Total Sessions</p>
          <h2>{data.totalSessions}</h2>
        </div>
      </div>
    </>
  );
}

export default AverageAttendance;
