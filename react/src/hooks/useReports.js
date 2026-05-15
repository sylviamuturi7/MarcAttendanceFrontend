import { useEffect, useState } from "react";
import { getReports } from "@/features/reports/reportService";

const useReports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchReports = async () => {
    setLoading(true);
    try {
      const data = await getReports();
      setReports(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return { reports, loading, error, refetch: fetchReports };
};

export default useReports;