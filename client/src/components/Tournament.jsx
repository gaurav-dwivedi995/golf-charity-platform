import { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/Tournament.css";
import TournamentCard from "./TournamentCard";
import { registerTournament } from "../services/registrationService";
function Tournament() {

    const [tournaments, setTournaments] = useState([]);

    const [registeredTournament, setRegisteredTournament] =
        useState("");

    useEffect(() => {

        fetchTournaments();

    }, []);

    async function fetchTournaments() {

        try {

            const response =
                await API.get("/tournament/all");

            setTournaments(response.data);

        } catch (error) {

            console.log(error);

            alert("Failed to Load Tournaments");

        }

    }

   async function handleRegister(id, title) {

    try {

        await registerTournament(id);

        setRegisteredTournament(title);

        alert(`Successfully Registered for ${title}`);

    } catch (err) {

        alert(
            err.response?.data?.message ||
            "Registration Failed"
        );

    }

}

    return (

        <section className="tournament">

            <h2>Upcoming Tournaments</h2>

            <div className="tournament-container">

                {tournaments.map((tournament) => (

                    <TournamentCard
                       key={tournament.id}
                       tournament={tournament}
                       handleRegister={(id, title) =>
                       handleRegister(id, title)
             }
                 registeredTournament={registeredTournament}
                 />
                ))}

            </div>

        </section>

    );

}

export default Tournament;