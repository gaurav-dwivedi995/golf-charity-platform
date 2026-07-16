import "../styles/HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works">

      <h2>How It Works</h2>

      <div className="steps">

        <div className="step-card">
          <h3>📝 Register</h3>
          <p>Create your account and join the tournament.</p>
        </div>

        <div className="step-card">
          <h3>⛳ Play</h3>
          <p>Compete with players and submit your scores.</p>
        </div>

        <div className="step-card">
          <h3>❤️ Donate</h3>
          <p>A part of every entry fee supports charity.</p>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;