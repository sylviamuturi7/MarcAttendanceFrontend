function ReportFilters({ onDateChange, onDepartmentChange, departments }) {
  return (
    <div className="report-filters">
      <input type="date" onChange={onDateChange} />

      <select onChange={onDepartmentChange}>
        <option value="">All Departments</option>
        {departments.map((dept) => (
          <option key={dept} value={dept}>{dept}</option>
        ))}
      </select>
    </div>
  );
}

export default ReportFilters;
