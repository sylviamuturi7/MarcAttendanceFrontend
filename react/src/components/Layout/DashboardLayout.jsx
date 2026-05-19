import Navbar from "./Navbar";
import Footer from "./Footer";

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <Navbar />

      <main className="dashboard-layout-content">{children}</main>

      <Footer />
    </div>
  );
}

export default DashboardLayout;
