import React from "react";
const StudentTable = ({ students, onEdit, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Reg No</th>
          <th>Email</th>
          <th>Department</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {students?.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.regNo}</td>
            <td>{student.email}</td>
            <td>{student.department}</td>
            <td>
              <button onClick={() => onEdit(student)}>Edit</button>
              <button onClick={() => onDelete(student.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;