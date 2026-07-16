import {Link} from "react-router-dom";
import "./../styles/Hero.css";
 function Hero(){
    return(
        <section className="hero">
            <h1>Golf Charity Platform</h1>

            <p> Play • Compete • Win • Give Back</p>

            <p>
                join exciting golf tournament, complete with players, win amazing prizes, and help charities through every event.
            </p>

            <div className="hero-buttons">
              <Link to="/subscription">Join Now</Link>

              <Link to="/scores">View Scores</Link>
            </div>
        </section>
    );
 }

 export default Hero;