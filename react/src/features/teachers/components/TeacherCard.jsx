import Card from "@/components/common/Card";

const TeacherCard = ({ teacher }) => {
  return (
    <Card>
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold">
            {teacher.firstName}{" "}
            {teacher.lastName}
          </h2>

          <p className="text-gray-500">
            {teacher.department}
          </p>
        </div>

        <div className="space-y-2">
          <p>
            <strong>Email:</strong>{" "}
            {teacher.email}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {teacher.phone}
          </p>

          <p>
            <strong>Employee ID:</strong>{" "}
            {teacher.employeeId}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default TeacherCard;