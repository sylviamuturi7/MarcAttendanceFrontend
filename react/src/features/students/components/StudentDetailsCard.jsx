import React from "react";
import Card from "../../../components/common/Card";

function StudentDetailsCard({ student }) {

  if (student) {
    const {name, email, department, year} = student;

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
      </Card>
    );
  } else {
    return null;
  }
} 

export default StudentDetailsCard;