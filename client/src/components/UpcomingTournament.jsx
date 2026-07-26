function UpcomingTournament({ tournament }) {

    if (!tournament) {

        return (
            <div className="upcoming-tournament">
                <h2>Upcoming Tournament</h2>
                <p>No Upcoming Tournament</p>
            </div>
        );

    }

    return (

        <div className="upcoming-tournament">

            <h2>Upcoming Tournament</h2>

            <div className="upcoming-card">

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

                <button>View Details</button>

            </div>

        </div>

    );

}

export default UpcomingTournament;