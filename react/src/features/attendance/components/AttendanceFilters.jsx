function AttendanceFilters({ date, department, onDateChange, onDepartmentChange, departments = [] }) {
  if (departments.length === 0) return null;

  return (
    <div className="attendance-filters">
      <div>
        <label htmlFor="date-filter">Date</label>
        <input
          id="date-filter"
          type="date"
          value={date}
          onChange={(e) => onDateChange?.(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="department-filter">Department</label>
        <select
          id="department-filter"
          value={department}
          onChange={(e) => onDepartmentChange?.(e.target.value)}
        >
          <option value="">All Departments</option>
          {departments.map((dept) => (
            // Use dept name as key instead of array index — more stable
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default AttendanceFilters;
