import Input from "../../../components/common/Input";
import Select from "../../../components/common/Select";

const StudentFilters = ({ filters, setFilters }) => {
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
        value={filters.department}
        onChange={(e) =>
          setFilters({ ...filters, department: e.target.value })
        }
        options={[
          { label: "All", value: "" },
          { label: "IT", value: "IT" },
          { label: "Engineering", value: "Engineering" },
        ]}
      />
    </div>
  );
};

export default StudentFilters;
