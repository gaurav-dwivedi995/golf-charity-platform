import { useEffect, useState } from "react";

import {
    getAllTournaments,
    deleteTournament
} from "../services/tournamentService";

function TournamentManager() {

    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {

        loadTournaments();

    }, []);

    async function loadTournaments() {

        try {

            const response = await getAllTournaments();

            setTournaments(response.data);

        } catch (err) {

            console.log(err);

        }

    }

    async function handleDelete(id) {

        if (!window.confirm("Delete Tournament?")) return;

        try {

            await deleteTournament(id);

            alert("Tournament Deleted Successfully");

            loadTournaments();

        } catch (err) {

            alert(
                err.response?.data?.message ||
                "Delete Failed"
            );

        }

    }

    return (

        <div className="tournament-manager">

            <h2>Tournament Management</h2>

            <table>

                <thead>

                    <tr>

                        <th>Title</th>

                        <th>Location</th>

                        <th>Date</th>

                        <th>Entry Fee</th>

                        <th>Players</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        tournaments.map((tournament) => (

                            <tr key={tournament.id}>

                                <td>{tournament.title}</td>

                                <td>{tournament.location}</td>

                                <td>
                                    {
                                        new Date(
                                            tournament.tournament_date
                                        ).toLocaleDateString()
                                    }
                                </td>

                                <td>
                                    ₹{tournament.entry_fee}
                                </td>

                                <td>
                                    {tournament.max_players}
                                </td>

                                <td>

                                    <button
                                        onClick={() =>
                                            handleDelete(
                                                tournament.id
                                            )
                                        }
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default TournamentManager;