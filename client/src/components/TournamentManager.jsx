function TournamentManager({ tournaments }) {
  return (
    <div className="tournament-manager">

      <h2>Tournament Management</h2>

      <table>

        <thead>
          <tr>
            <th>Tournament</th>
            <th>Location</th>
            <th>Date</th>
            <th>Participants</th>
            <th>Entry Fee</th>
          </tr>
        </thead>

        <tbody>

          {tournaments.map((tournament) => (
            <tr key={tournament.id}>

              <td>{tournament.name}</td>

              <td>{tournament.location}</td>

              <td>{tournament.date}</td>

              <td>{tournament.participants}</td>

              <td>₹{tournament.entryFee}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TournamentManager;