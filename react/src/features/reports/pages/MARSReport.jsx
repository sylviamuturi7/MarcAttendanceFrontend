import DashboardLayout from "../../../components/Layout/DashboardLayout";
import ReportTable from "../components/ReportTable";
import ExportButtons from "../components/ExportButtons";
import PageHeader from "../../../components/Layout/PageHeader";

function MARSReports() {
  return (
    <DashboardLayout>
      <PageHeader title="MARS Reports" />
      <ExportButtons />
      <ReportTable />
    </DashboardLayout>
  );
}

export default MARSReports;
