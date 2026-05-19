import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Bell, LogOut } from "lucide-react";
import useAuth from "@/hooks/useAuth";
import { NotificationContext } from "@/context/NotificationContext";
import { navigation } from "@/config/navigation";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { notifications } = useContext(NotificationContext);
  const notificationCount = notifications.length;

  const navLinks = navigation.filter((item) =>
    item.roles.includes(user?.role)
  );

  function handleLogout() {
    logout();
    navigate("/", { replace: true });
  }

  function handleNotifications() {
  }

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-logo">
        <img src="/logo.png" alt="MARS logo" />
        <span>MARS</span>
      </div>

      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <div className="navbar-actions">
        <button type="button" onClick={handleNotifications} aria-label="Notifications">
          <Bell size={20} aria-hidden="true" />
          {notificationCount > 0 && (
            <span className="navbar-notification-badge">{notificationCount}</span>
          )}
        </button>

        <Link to="/profile" aria-label="Profile">
          <img
            src={user?.avatar || "/images/admin-avatar.png"}
            alt={user ? `${user.name} profile photo` : "Profile photo"}
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
