import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">Golf Charity</h2>

      <div className="nav-links">

        <NavLink to="/">Home</NavLink>

        <NavLink to="/scores">Scores</NavLink>

        <NavLink to="/subscription">Subscription</NavLink>

        <NavLink to="/charity">Charity</NavLink>

        <NavLink to="/dashboard">Dashboard</NavLink>

        <NavLink to="/admin-dashboard">Admin</NavLink>

        <NavLink to="/login">Login</NavLink>

        <NavLink to="/signup">Signup</NavLink>


      </div>

    </nav>
  );
}

export default Navbar;