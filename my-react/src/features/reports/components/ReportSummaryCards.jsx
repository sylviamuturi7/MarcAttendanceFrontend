function ReportSummaryCards({ averageAttendance, totalSessions }) {
  if (!averageAttendance || !totalSessions) return null;

  return (
    <div className="summary-cards">
      <div className="card">
        <p>Average Attendance</p>
        <h2>{Math.round(averageAttendance)}%</h2>
      </div>
      <div className="card">
        <p>Total Sessions</p>
        <h2>{totalSessions}</h2>
      </div>
    </div>
  );
}

export default ReportSummaryCards;
