function TournamentHistory({ history }) {
  return (
    <div className="tournament-history">

      <h2>Tournament History</h2>

      <table>

        <thead>
          <tr>
            <th>Tournament</th>
            <th>Date</th>
            <th>Rank</th>
            <th>Prize</th>
          </tr>
        </thead>

        <tbody>

          {history.map((item) => (
            <tr key={item.id}>

              <td>{item.name}</td>

              <td>{item.date}</td>

              <td>{item.rank}</td>

              <td>₹{item.prize}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TournamentHistory;