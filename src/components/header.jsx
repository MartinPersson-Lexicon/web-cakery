import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center mb-3">
      <NavLink className="navbar-brand" to="/home">
        <img
          className="rounded-circle"
          src={logo}
          alt="Cupcake logo"
          style={{ width: "100px" }}
        />
      </NavLink>
      <ul className="navbar-nav" style={{ fontSize: "1.1rem" }}>
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
  );
}
