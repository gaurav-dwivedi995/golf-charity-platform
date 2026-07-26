import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getLeaderboard } from "../services/leaderboardService";

function Leaderboard() {

    const { id } = useParams();

    const [players, setPlayers] = useState([]);

    useEffect(() => {

        loadLeaderboard();

    }, []);

    async function loadLeaderboard() {

        try {

            const res = await getLeaderboard(id);

            setPlayers(res.data);

        }

        catch (err) {

            console.log(err);

        }

    }

    return (

        <div className="container">

            <h2>🏆 Leaderboard</h2>

            <table>

                <thead>

                    <tr>

                        <th>Rank</th>

                        <th>Player</th>

                        <th>Score</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        players.map((player, index) => (

                            <tr key={index}>

                                <td>{index + 1}</td>

                                <td>{player.full_name}</td>

                                <td>{player.score}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default Leaderboard;