import Input from "@/components/common/Input";

const DepartmentFilters = ({
  search,
  setSearch,
}) => {
  return (
    <div className="mb-4">
      <Input
        placeholder="Search departments..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
    </div>
  );
};

export default DepartmentFilters;