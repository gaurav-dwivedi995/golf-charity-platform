function UpcomingTournament({ tournament }) {
  return (
    <div className="upcoming-tournament">

      <h2>Upcoming Tournament</h2>

      <div className="upcoming-card">

        <h3>{tournament.name}</h3>

        <p>
          <strong>📍 Location:</strong> {tournament.location}
        </p>

        <p>
          <strong>📅 Date:</strong> {tournament.date}
        </p>

        <p>
          <strong>💰 Entry Fee:</strong> ₹{tournament.entryFee}
        </p>

        <p>
          <strong>👥 Participants:</strong> {tournament.participants}
        </p>

        <button>View Details</button>

      </div>

    </div>
  );
}

export default UpcomingTournament;