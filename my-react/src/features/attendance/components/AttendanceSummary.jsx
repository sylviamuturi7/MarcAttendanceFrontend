import AttendanceCard from "./AttendanceCard";

function AttendanceSummary({ currentlyPresent, totalRegistered }) {
  if (currentlyPresent == null || totalRegistered == null) 
    return <p>No data</p>;

  return (
    <div className="attendance-summary">
      <AttendanceCard title="Currently Present" value={currentlyPresent} />
      <AttendanceCard title="Total Registered" value={totalRegistered} />
    </div>
  );
}

export default AttendanceSummary;
