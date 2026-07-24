import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaUsers,
  FaBox,
  FaWarehouse,
  FaFileInvoice,
  FaChartBar,
  FaCog
} from "react-icons/fa";

export default function Sidebar() {

  const [open, setOpen] = useState(true);
  const location = useLocation();

  const menus = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { name: "Customers", icon: <FaUsers />, path: "/customers" },
    { name: "Products", icon: <FaBox />, path: "/products" },
    { name: "Inventory", icon: <FaWarehouse />, path: "/inventory" },
    { name: "Challans", icon: <FaFileInvoice />, path: "/challans" },
    { name: "Reports", icon: <FaChartBar />, path: "/reports" },
    { name: "Settings", icon: <FaCog />, path: "/settings" },
  ];

  return (
    <div className={open ? "sidebar open" : "sidebar"}>

      <div className="top-section">

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          <FaBars />
        </button>

        {open && <h2>ERP CRM</h2>}

      </div>

      <ul>

        {menus.map((menu) => (

          <li key={menu.name}>

            <Link
              to={menu.path}
              className={
                location.pathname === menu.path ? "active" : ""
              }
            >

              <div className="icon">
                {menu.icon}
              </div>

              {open && (
                <span>{menu.name}</span>
              )}

            </Link>

          </li>

        ))}

      </ul>

    </div>
  );
}