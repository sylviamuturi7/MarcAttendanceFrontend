import Navbar from "./Navbar";

function DashboardLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}

export default DashboardLayout;
