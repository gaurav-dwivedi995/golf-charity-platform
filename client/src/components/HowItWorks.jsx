import "../styles/HowItWorks.css";

function HowItWorks() {

    return (

        <section className="how-it-works">

            <h2>
                How It Works
            </h2>

            <div className="steps">

                <div className="step-card">

                    <h3>
                        📝 Register
                    </h3>

                    <p>
                        Create your account and register for your favourite tournament.
                    </p>

                </div>

                <div className="step-card">

                    <h3>
                        ⛳ Play
                    </h3>

                    <p>
                        Compete with players and submit your scores after every match.
                    </p>

                </div>

                <div className="step-card">

                    <h3>
                        ❤️ Donate
                    </h3>

                    <p>
                        Every tournament entry helps support charitable causes.
                    </p>

                </div>

            </div>

        </section>

    );

}

export default HowItWorks;