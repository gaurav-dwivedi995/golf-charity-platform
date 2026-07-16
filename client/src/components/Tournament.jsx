import "../styles/Tournament.css";

function Tournament() {
  return (
    <section className="tournament">

      <h2>Upcoming Tournament</h2>

      <div className="tournament-card">

        <h3>Jaipur Charity Golf Championship 2026</h3>

        <p><strong>📍 Location:</strong> Rambagh Golf Club, Jaipur</p>

        <p><strong>📅 Date:</strong> 20 August 2026</p>

        <p><strong>🏆 Prize Pool:</strong> ₹50,000</p>

        <p><strong>❤️ Charity Fund:</strong> ₹10,000</p>

        <p><strong>💰 Entry Fee:</strong> ₹999</p>

        <p><strong>👥 Participants:</strong> 120</p>

        <button>Register Now</button>

      </div>

    </section>
  );
}

export default Tournament;