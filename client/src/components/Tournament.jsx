import { useState } from "react";
import "../styles/Tournament.css";
import TournamentCard from "./TournamentCard";

function Tournament() {
  const tournaments = [
    {
      id: 1,
      name: "Jaipur Charity Golf Championship 2026",
      location: "Rambagh Golf Club, Jaipur",
      date: "20 August 2026",
      prizePool: 20000,
      charityFund: 10000,
      entryFee: 999,
      participants: 120,
    },
    {
      id: 2,
      name: "Delhi Open Golf Tournament",
      location: "Delhi Golf Club",
      date: "5 September 2026",
      prizePool: 80000,
      charityFund: 15000,
      entryFee: 1499,
      participants: 95,
    },
    {
      id: 3,
      name: "Mumbai Elite Championship",
      location: "Bombay Presidency Golf Club",
      date: "18 September 2026",
      prizePool: 120000,
      charityFund: 25000,
      entryFee: 1999,
      participants: 150,
    },
  ];

  const [registeredTournament, setRegisteredTournament] = useState("");

  function handleRegister(name) {
    setRegisteredTournament(name);
    alert(`Successfully Registered for ${name}`);
  }

  return (
    <section className="tournament">
      <h2>Upcoming Tournaments</h2>

      <div className="tournament-container">
        {tournaments.map((tournament) => (
          <TournamentCard
            key={tournament.id}
            tournament={tournament}
            handleRegister={handleRegister}
            registeredTournament={registeredTournament}
          />
        ))}
      </div>
    </section>
  );
}

export default Tournament;