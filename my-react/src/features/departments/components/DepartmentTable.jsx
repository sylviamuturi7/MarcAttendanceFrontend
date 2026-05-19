import DataTable from "@/components/tables/DataTable";

const DepartmentTable = ({
  departments,
  onView,
  onEdit,
  onDelete,
}) => {
  const columns = [
    {
      header: "Code",
      accessor: "code",
    },
    {
      header: "Department",
      accessor: "name",
    },
    {
      header: "Head of Department",
      accessor: "hod",
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
      data={departments}
    />
  );
};

export default DepartmentTable;