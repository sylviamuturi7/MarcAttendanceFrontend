import DashboardLayout from "../../../components/Layout/DashboardLayout";
import PageHeader from "../../../components/Layout/PageHeader";
import ReportTable from "../components/ReportTable";

function DepartmentReports() {
  return (
    <DashboardLayout>
      <PageHeader title="Department Reports" />
      <ReportTable />
    </DashboardLayout>
  );
}

export default DepartmentReports;
