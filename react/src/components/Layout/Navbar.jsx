import { Link, useNavigate } from "react-router-dom";
import { Bell, LogOut } from "lucide-react";
import useAuth from "@/hooks/useAuth";

const navLinks = [
  { to: "/dashboard", label: "Home" },
  { to: "/students", label: "Students" },
  { to: "/departments", label: "Departments" },
  { to: "/reports", label: "Reports" },
];

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const notificationCount = 0;

  function handleLogout() {
    logout();
    navigate("/", { replace: true });
  }

  function handleNotifications() {}

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-logo">
        <img src="/logo.png" alt="MARS logo" />
        <span>MARS</span>
      </div>

      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <div className="navbar-actions">
        <button type="button" onClick={handleNotifications} aria-label="Notifications">
          <Bell size={20} aria-hidden="true" />
          {notificationCount > 0 ? (
            <span className="navbar-notification-badge">{notificationCount}</span>
          ) : null}
        </button>

        <Link to="/profile" aria-label="Profile">
          <img
            src={user?.avatar || "/images/admin-avatar.png"}
            alt={user ? `${user.name} profile photo` : "Admin profile photo"}
          />
        </Link>

        <button type="button" onClick={handleLogout} aria-label="Log out">
          <LogOut size={20} aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
