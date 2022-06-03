import { Link } from "react-router-dom";

function Sidebar() {
  
  return (
    <ul>
      <li>
        <a to="/home" className="nav-link">
          Home
        </a>
      </li>
      <li>
        <a to="/orders" className="nav-link">
          Orders
        </a>
      </li>
      <li>
        <a to="/products" className="nav-link">
          Products
        </a>
      </li>
      <li>
        <a to="/customers" className="nav-link">
          Customers
        </a>
      </li>
    </ul>
  );
}

export default Sidebar;
