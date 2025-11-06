import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header bg-dark mt-4">
      <nav className="navbar navbar-expand-sm navbar-dark justify-content-center ">
        <NavLink className="navbar-brand" to="/home">
          <img
            className="rounded-circle"
            src={logo}
            alt="Munamii Cakery logo"
            style={{ width: "120px" }}
          />
        </NavLink>
        <ul
          className="navbar-nav"
          style={{ fontSize: "1.5rem", marginLeft: 30 }}
        >
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className="nav-link">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
