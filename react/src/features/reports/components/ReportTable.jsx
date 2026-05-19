import useReports from "../../../hooks/useReports";

// ReportTable fetches and displays the list of reports
function ReportTable() {
  const { reports, loading, error } = useReports();

  if (loading) return <p>Loading reports...</p>;
  if (error) return <p>Failed to load reports.</p>;
  if (!reports || reports.length === 0) return <p>No reports found.</p>;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Department</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((report) => (
          <tr key={report.id}>
            <td>{report.id ?? "N/A"}</td>
            <td>{report.date ?? "N/A"}</td>
            <td>{report.department ?? "N/A"}</td>
            <td>{report.status ?? "N/A"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ReportTable;
