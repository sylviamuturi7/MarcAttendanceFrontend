import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../../components/common/Card";
import { getStudentById } from "../studentService";

const StudentAttendance = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const studentData = await getStudentById(id);

        // MOCK: replace later with real API
        const attendanceData = [
          { date: "2026-05-01", status: "Present" },
          { date: "2026-05-02", status: "Absent" },
          { date: "2026-05-03", status: "Present" },
        ];

        setStudent(studentData);
        setAttendance(attendanceData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Student Attendance</h2>

      <Card>
        <h3>{student?.name}</h3>
        <p>{student?.regNo}</p>
      </Card>

      <Card>
        <h3>Attendance Records</h3>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {attendance.map((a, index) => (
              <tr key={index}>
                <td>{a.date}</td>
                <td
                  style={{
                    color: a.status === "Present" ? "green" : "red",
                  }}
                >
                  {a.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default StudentAttendance;
