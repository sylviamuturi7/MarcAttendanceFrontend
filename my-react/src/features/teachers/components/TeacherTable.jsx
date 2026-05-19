import DataTable from "@/components/tables/DataTable";

const TeacherTable = ({
  teachers,
  onView,
  onEdit,
  onDelete,
}) => {
  const columns = [
    {
      header: "Employee ID",
      accessor: "employeeId",
    },
    {
      header: "Name",
      accessor: (row) =>
        `${row.firstName} ${row.lastName}`,
    },
    {
      header: "Email",
      accessor: "email",
    },
    {
      header: "Department",
      accessor: "department",
    },
    {
      header: "Actions",
      accessor: (row) => (
        <div className="flex gap-3">
          <button
            onClick={() => onView(row.id)}
            className="text-blue-600"
          >
            View
          </button>

          <button
            onClick={() => onEdit(row.id)}
            className="text-yellow-600"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(row.id)}
            className="text-red-600"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={teachers}
    />
  );
};

export default TeacherTable;