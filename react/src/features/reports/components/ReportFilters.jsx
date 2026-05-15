function ReportFilters({ date, department, onDateChange, onDepartmentChange, departments }) {
  return (
    <div className="report-filters">
      <div>
        <label>Date</label>
        <input type="date" value={date} onChange={(e) => onDateChange(e.target.value)} />
      </div>

      <div>
        <label>Department</label>
        <select value={department} onChange={(e) => onDepartmentChange(e.target.value)}>
          <option value="">All Departments</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ReportFilters;
