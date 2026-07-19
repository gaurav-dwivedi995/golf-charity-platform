import "../styles/Dashboard.css";

import DashboardHeader from "../components/DashboardHeader";
import StatsCard from "../components/StatsCard";
import UpcomingTournament from "../components/UpcomingTournament";
import TournamentHistory from "../components/TournamentHistory";
import DonationHistory from "../components/DonationHistory";
import QuickActions from "../components/QuickActions";

function Dashboard() {

  const user = {
    name: "Gaurav Dwivedi",
    subscription: "Premium",
    totalTournaments: 8,
    totalDonations: 35000,
    currentRank: 12,
  };

  const upcomingTournament = {
    name: "Jaipur Charity Golf Championship 2026",
    location: "Rambagh Golf Club, Jaipur",
    date: "20 August 2026",
    entryFee: 999,
    participants: 120,
  };

  const tournamentHistory = [
    {
      id: 1,
      name: "Delhi Open",
      date: "15 June 2026",
      rank: 3,
      prize: 10000,
    },
    {
      id: 2,
      name: "Jaipur Golf Cup",
      date: "22 May 2026",
      rank: 1,
      prize: 25000,
    },
    {
      id: 3,
      name: "Mumbai Championship",
      date: "10 April 2026",
      rank: 5,
      prize: 5000,
    },
  ];

  const donations = [
    {
      id: 1,
      charity: "Smile Foundation",
      date: "12 July 2026",
      amount: 5000,
    },
    {
      id: 2,
      charity: "Helping Hands",
      date: "25 June 2026",
      amount: 2500,
    },
    {
      id: 3,
      charity: "Green Earth",
      date: "10 May 2026",
      amount: 1000,
    },
  ];

  return (
    <section className="dashboard">

      <DashboardHeader user={user} />

      <div className="stats-grid">

        <StatsCard
          title="Subscription"
          value={user.subscription}
          icon="💎"
        />

        <StatsCard
          title="Tournaments"
          value={user.totalTournaments}
          icon="🏌️"
        />

        <StatsCard
          title="Total Donations"
          value={`₹${user.totalDonations}`}
          icon="❤️"
        />

        <StatsCard
          title="Current Rank"
          value={`#${user.currentRank}`}
          icon="🏆"
        />

      </div>

      <UpcomingTournament tournament={upcomingTournament} />

      <TournamentHistory history={tournamentHistory} />

      <DonationHistory donations={donations} />

      <QuickActions />

    </section>
  );
}

export default Dashboard;