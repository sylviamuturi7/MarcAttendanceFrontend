import { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "@/context/SidebarContext";
import { navigation } from "@/config/navigation";
import useAuth from "@/hooks/useAuth";

function Sidebar() {
  const { isOpen } = useContext(SidebarContext);
  const { user } = useAuth();

  // Only show links OF current user's role is allowed to see
  const navLinks = navigation.filter((item) =>
    item.roles.includes(user?.role)
  );

  if (!isOpen) return null;

  return (
    <aside className="sidebar">
      <nav aria-label="Sidebar navigation">
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
