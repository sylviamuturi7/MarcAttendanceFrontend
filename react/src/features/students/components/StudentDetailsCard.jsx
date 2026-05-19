import Card from "@/components/common/Card";

function StudentDetailsCard({ student }) {
  if (student) {
    const { name, email, department, year, device } = student;

    return (
      <Card title="Student Details">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>

        {department ? (
          <p><strong>Department:</strong> {department}</p>
        ) : null}

        {year ? (
          <p><strong>Year:</strong> {year}</p>
        ) : null}

        {device && (device.name || device.macAddress) ? (
          <div>
            <h4>Device</h4>
            {device.name ? (
              <p><strong>Name:</strong> {device.name}</p>
            ) : null}
            {device.macAddress ? (
              <p><strong>MAC Address:</strong> {device.macAddress}</p>
            ) : null}
          </div>
        ) : null}
      </Card>
    );
  }

  return null;
}

export default StudentDetailsCard;
