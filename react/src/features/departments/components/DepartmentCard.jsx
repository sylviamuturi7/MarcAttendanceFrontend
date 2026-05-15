import Card from "@/components/common/Card";

const DepartmentCard = ({
  department,
}) => {
  return (
    <Card>
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold">
            {department.name}
          </h2>

          <p className="text-gray-500">
            {department.code}
          </p>
        </div>

        <div className="space-y-2">
          <p>
            <strong>HOD:</strong>{" "}
            {department.hod}
          </p>

          <p>
            <strong>Description:</strong>{" "}
            {department.description}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default DepartmentCard;