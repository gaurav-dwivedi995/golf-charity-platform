import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getDashboard } from "../services/dashboardService";

import "../styles/Dashboard.css";

import DashboardHeader from "../components/DashboardHeader";
import StatsCard from "../components/StatsCard";
import UpcomingTournament from "../components/UpcomingTournament";
import TournamentHistory from "../components/TournamentHistory";
import DonationHistory from "../components/DonationHistory";
import QuickActions from "../components/QuickActions";

function Dashboard() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState(null);

    useEffect(() => {

        fetchDashboard();

    }, []);

    async function fetchDashboard() {

        try {

            const response = await getDashboard();

            setUser(response.data);

        } catch (error) {

            localStorage.removeItem("token");
            localStorage.removeItem("user");

            navigate("/login");

        } finally {

            setLoading(false);

        }

    }

    const upcomingTournament = {
        name: "Jaipur Charity Golf Championship 2026",
        location: "Rambagh Golf Club, Jaipur",
        date: "20 August 2026",
        entryFee: 999,
        participants: 120,
    };

    const tournamentHistory = [];

    const donations = [];

    if (loading) {

        return <h2>Loading Dashboard...</h2>;

    }

    return (

        <section className="dashboard">

            <DashboardHeader
                user={{
                    name: user.full_name,
                    subscription: user.membership
                }}
            />

            <div className="stats-grid">

                <StatsCard
                    title="Subscription"
                    value={user.membership}
                    icon="💎"
                />

                <StatsCard
                    title="Registered Tournaments"
                    value={user.tournaments}
                    icon="🏌️"
                />

                <StatsCard
                    title="Total Donations"
                    value={`₹${user.donations}`}
                    icon="❤️"
                />

                <StatsCard
                    title="Membership"
                    value={user.membership}
                    icon="⭐"
                />

            </div>

            <UpcomingTournament
                tournament={upcomingTournament}
            />

            <TournamentHistory
                history={tournamentHistory}
            />

            <DonationHistory
                donations={donations}
            />

            <QuickActions />

        </section>

    );

}

export default Dashboard;