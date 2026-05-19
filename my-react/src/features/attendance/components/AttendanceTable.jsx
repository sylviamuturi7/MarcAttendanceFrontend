function AttendanceTable({ records }) {
  if (!records || records.length === 0) 
    return <p>No active connections found.</p>;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Student</th>
          <th>MAC Address</th>
          <th>Connected At</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record) => (
          <tr key={record.macAddress}>
            <td>{record.student ?? "No data"}</td>
            <td>{record.macAddress ?? "No data"}</td>
            <td>{record.connectedAt ? new Date(record.connectedAt).toLocaleString() : "No data"}</td>
            <td>{record.status ?? "No data"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AttendanceTable;
