import Input from "@/components/common/Input";
import Select from "@/components/common/Select";

// departments is now a prop so it can come from the API instead of being hardcoded
const StudentFilters = ({ filters, setFilters, departments = [] }) => {
  // Build the options list for the department select
  const departmentOptions = [
    { label: "All", value: "" },
    ...departments.map((dept) => ({ label: dept, value: dept })),
  ];

  return (
    <div>
      <Input
        placeholder="Search by name"
        value={filters.search}
        onChange={(e) =>
          setFilters({ ...filters, search: e.target.value })
        }
      />

      <Select
        label="Department"
        value={filters.department}
        onChange={(e) =>
          setFilters({ ...filters, department: e.target.value })
        }
        options={departmentOptions}
      />
    </div>
  );
};

export default StudentFilters;
