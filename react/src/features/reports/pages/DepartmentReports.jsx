import PageHeader from "@/components/Layout/PageHeader";
import ReportTable from "../components/ReportTable";

// DashboardLayout is NOT here — DashboardRoutes already wraps all pages in it
function DepartmentReports() {
  return (
    <>
      <PageHeader title="Department Reports" />
      <ReportTable />
    </>
  );
}

export default DepartmentReports;
