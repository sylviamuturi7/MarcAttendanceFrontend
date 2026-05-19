import { ATTENDANCE_STATUS } from "../../../constants/attendanceStatus";

function DeviceFilters({ status, onStatusChange }) {
  if (!onStatusChange) 
    return <p>No filters available.</p>;

  return (
    <div className="device-filters">
      <label htmlFor="status">Status</label>
      <select id="status" value={status} onChange={(e) => onStatusChange(e.target.value)}>
        <option value="">All</option>
        {Object.values(ATTENDANCE_STATUS).map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    </div>
  );
}

export { DeviceFilters };
