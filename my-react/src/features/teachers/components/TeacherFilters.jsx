import Input from "@/components/common/Input";

const TeacherFilters = ({
  search,
  setSearch,
}) => {
  return (
    <div className="mb-4">
      <Input
        placeholder="Search teachers..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
    </div>
  );
};

export default TeacherFilters;