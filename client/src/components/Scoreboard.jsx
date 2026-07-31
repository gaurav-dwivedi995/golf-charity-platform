import "../styles/Scoreboard.css";
import ScoreRow from "./ScoreRow";

function Scoreboard() {

    const players = [

        {
            id: 1,
            rank: 1,
            name: "Rahul Sharma",
            tournament: "Jaipur Charity Golf Championship",
            score: -8,
        },

        {
            id: 2,
            rank: 2,
            name: "Abhi Tyagi",
            tournament: "Delhi Open Golf Tournament",
            score: -6,
        },

        {
            id: 3,
            rank: 3,
            name: "Gaurav Dwivedi",
            tournament: "Mumbai Elite Championship",
            score: -5,
        },

        {
            id: 4,
            rank: 4,
            name: "Rohit Singh",
            tournament: "Jaipur Charity Golf Championship",
            score: -4,
        }

    ];

    return (

        <section className="scoreboard">

            <h2>Leaderboard</h2>

            <div className="scoreboard-table">

                <table>

                    <thead>

                        <tr>

                            <th>Rank</th>
                            <th>Player</th>
                            <th>Tournament</th>
                            <th>Score</th>

                        </tr>

                    </thead>

                    <tbody>

                        {players.map((player) => (

                            <ScoreRow
                                key={player.id}
                                player={player}
                            />

                        ))}

                    </tbody>

                </table>

            </div>

        </section>

    );

}

export default Scoreboard;