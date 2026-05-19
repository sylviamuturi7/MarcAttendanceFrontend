function ReportFilters({ date, department, onDateChange, onDepartmentChange, departments, loading }) {
  if (!departments) return null;

  return (
    <div className="report-filters">
      <div>
        {/* htmlFor must match the input's id for the label to be accessible */}
        <label htmlFor="report-date-filter">Date</label>
        <input
          id="report-date-filter"
          type="date"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          disabled={loading}
        />
      </div>

      <div>
        <label htmlFor="report-department-filter">Department</label>
        <select
          id="report-department-filter"
          value={department}
          onChange={(e) => onDepartmentChange(e.target.value)}
          disabled={loading}
        >
          <option value="">All Departments</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ReportFilters;
