function TournamentCard({ tournament }) {
  return (
    <div className="tournament-card">

      <h3>{tournament.name}</h3>

      <p>
        <strong>📍 Location:</strong> {tournament.location}
      </p>

      <p>
        <strong>📅 Date:</strong> {tournament.date}
      </p>

      <p>
        <strong>🏆 Prize Pool:</strong> ₹{tournament.prizePool}
      </p>

      <p>
        <strong>❤️ Charity Fund:</strong> ₹{tournament.charityFund}
      </p>

      <p>
        <strong>💰 Entry Fee:</strong> ₹{tournament.entryFee}
      </p>

      <p>
        <strong>👥 Participants:</strong> {tournament.participants}
      </p>

      <button>Register Now</button>

    </div>
  );
}

export default TournamentCard;