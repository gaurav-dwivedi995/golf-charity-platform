function TournamentCard({
  tournament,
  handleRegister,
  registeredTournament,
}) {

  const isRegistered =
    registeredTournament === tournament.title;

  return (

    <div className="tournament-card">

      <h3>{tournament.title}</h3>

      <p>
        <strong>📍 Location:</strong> {tournament.location}
      </p>

      <p>
        <strong>📅 Date:</strong>{" "}
        {new Date(
          tournament.tournament_date
        ).toLocaleDateString()}
      </p>

      <p>
        <strong>💰 Entry Fee:</strong> ₹
        {tournament.entry_fee}
      </p>

      <p>
        <strong>👥 Max Players:</strong>{" "}
        {tournament.max_players}
      </p>

      <p>
        <strong>📝 Description:</strong>{" "}
        {tournament.description}
      </p>

      <button
           onClick={() =>
              handleRegister(
                  tournament.id,
                  tournament.title
        )
    }
    disabled={isRegistered}
>
        {isRegistered
          ? "✅ Registered"
          : "Register Now"}
      </button>

    </div>

  );

}

export default TournamentCard;