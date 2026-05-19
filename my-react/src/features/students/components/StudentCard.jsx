import Card from "../../../components/common/Card";

const StudentCard = ({ student }) => {
  return (
    <Card title="Student">
      <h3>{student.name}</h3>
      <p>{student.regNo}</p>
      <p>{student.email}</p>
      <p>{student.department}</p>
    </Card>
  );
};

export default StudentCard;
