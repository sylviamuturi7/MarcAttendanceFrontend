import Input from "@/components/common/Input";

const StudentSearch = ({ value, onChange }) => {
  return (
    <Input
      placeholder="Search students..."
      value={value}
      onChange={onChange}
    />
  );
};

export default StudentSearch;