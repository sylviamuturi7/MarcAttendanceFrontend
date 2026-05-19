import PageHeader from "@/components/Layout/PageHeader";
import ReportTable from "../components/ReportTable";
// NOTE: the file is ExportButtons.jsx but the default export is ExportButton (singular)
// Using ExportButton as the import name to match the actual component
import ExportButton from "../components/ExportButtons";

// DashboardLayout is NOT here — DashboardRoutes already wraps all pages in it
function MARSReport() {
  return (
    <>
      <PageHeader title="MARC Reports" />
      <ExportButton />
      <ReportTable />
    </>
  );
}

export default MARSReport;
