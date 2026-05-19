import { useEffect, useState } from "react";
import { getAttendance } from "@/features/attendance/attendanceService";

const useAttendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAttendance = async () => {
    setLoading(true);
    try {
      const data = await getAttendance();
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