function AttendanceCard({ title = "No data", value = "No data", className = "" }) {
  return (
    <div className={`card ${className}`.trim()}>
      <p>{title}</p>
      <strong>{value}</strong>
    </div>
  );
}

export default AttendanceCard;
