import { useEffect, useState } from "react";
// getLiveConnections that fetches current attendance data
import { getLiveConnections } from "@/features/attendance/attendanceService";

const useAttendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAttendance = async () => {
    setLoading(true);
    try {
      const data = await getLiveConnections();
      setAttendance(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return { attendance, loading, error, refetch: fetchAttendance };
};

export default useAttendance;
