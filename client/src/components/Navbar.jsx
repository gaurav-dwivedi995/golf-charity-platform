import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav className="navbar">

            <h2 className="logo">
                Golf Charity
            </h2>

            <div
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>

            <div
                className={
                    menuOpen
                        ? "nav-links active"
                        : "nav-links"
                }
            >

                <NavLink
                    to="/"
                    onClick={() => setMenuOpen(false)}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/scores"
                    onClick={() => setMenuOpen(false)}
                >
                    Scores
                </NavLink>

                <NavLink
                    to="/subscription"
                    onClick={() => setMenuOpen(false)}
                >
                    Subscription
                </NavLink>

                <NavLink
                    to="/charity"
                    onClick={() => setMenuOpen(false)}
                >
                    Charity
                </NavLink>

                <NavLink
                    to="/dashboard"
                    onClick={() => setMenuOpen(false)}
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/admin-dashboard"
                    onClick={() => setMenuOpen(false)}
                >
                    Admin
                </NavLink>

                <NavLink
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                >
                    Login
                </NavLink>

                <NavLink
                    to="/signup"
                    onClick={() => setMenuOpen(false)}
                >
                    Signup
                </NavLink>

                <NavLink 
                to="/tournament"
                onClick={() => setMenuOpen(false)}
                >
                  Tournament
                  </NavLink>

            </div>

        </nav>

    );

}

export default Navbar;