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

    const [dashboard, setDashboard] = useState(null);

    useEffect(() => {

        fetchDashboard();

    }, []);

    async function fetchDashboard() {

        try {

            const response = await getDashboard();

            setDashboard(response.data);

        } catch (error) {

            localStorage.removeItem("token");
            localStorage.removeItem("user");

            navigate("/login");

        } finally {

            setLoading(false);

        }

    }

    if (loading) {

        return <h2>Loading Dashboard...</h2>;

    }

    return (

        <section className="dashboard">

            <DashboardHeader
                user={{
                    name: dashboard.user.full_name,
                    subscription: dashboard.user.membership
                }}
            />

            <div className="stats-grid">

                <StatsCard
                    title="Subscription"
                    value={dashboard.user.membership}
                    icon="💎"
                />

                <StatsCard
                    title="Registered Tournaments"
                    value={dashboard.user.tournaments}
                    icon="🏌️"
                />

                <StatsCard
                    title="Total Donations"
                    value={`₹${dashboard.user.donations}`}
                    icon="❤️"
                />

                <StatsCard
                    title="Membership"
                    value={dashboard.user.membership}
                    icon="⭐"
                />

            </div>

            <UpcomingTournament
                tournament={dashboard.upcomingTournament}
            />

            <TournamentHistory
                history={dashboard.tournamentHistory}
            />

            <DonationHistory
                donations={dashboard.donations}
            />

            <QuickActions />

        </section>

    );

}

export default Dashboard;