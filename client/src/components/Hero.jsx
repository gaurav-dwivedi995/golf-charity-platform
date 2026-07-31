import { Link } from "react-router-dom";
import "../styles/Hero.css";

function Hero() {

    return (

        <section className="hero">

            <h1>
                Golf Charity Platform
            </h1>

            <p>
                Play • Compete • Win • Give Back
            </p>

            <p>
                Join exciting golf tournaments, compete with players, win amazing prizes, and support charities through every event.
            </p>

            <div className="hero-buttons">

                <Link to="/subscription">
                    Join Now
                </Link>

                <Link to="/scores">
                    View Scores
                </Link>

            </div>

        </section>

    );

}

export default Hero;