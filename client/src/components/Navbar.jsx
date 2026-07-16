import {Link} from 'react-router-dom';
import "./../styles/Navbar.css";
function Navbar(){
    return(
        <nav className="navbar">
            <h2 className="logo">Golf Charity</h2>

            <div className="nav-links">

            <Link to="/">Home</Link>
            
            <Link to="/scores">Scores</Link>
            <Link to="/subscription">Subscription</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            </div>
            
        </nav>
    );
}

export default Navbar;