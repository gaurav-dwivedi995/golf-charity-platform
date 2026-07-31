import { useEffect, useState } from "react";

import {
    getDashboard,
    getUsers
} from "../services/adminService";

import {
    getAllTournaments
} from "../services/tournamentService";

import {
    getAllDonations
} from "../services/donationService";

import {
    getAllSubscriptions
} from "../services/subscriptionService";

import {
    getReport
} from "../services/reportService";

import "../styles/AdminDashboard.css";

import AdminHeader from "../components/AdminHeader";
import AdminStatsCard from "../components/AdminStatsCard";
import UsersTable from "../components/UsersTable";
import TournamentManager from "../components/TournamentManager";
import DonationManager from "../components/DonationManager";
import SubscriptionManager from "../components/SubscriptionManager";
import ReportDashboard from "../components/ReportDashboard";
import AdminActions from "../components/AdminActions";

function AdminDashboard() {

    const [stats, setStats] = useState(null);

    const [users, setUsers] = useState([]);

    const [tournaments, setTournaments] = useState([]);

    const [donations, setDonations] = useState([]);

    const [subscriptions, setSubscriptions] = useState([]);

    const [report, setReport] = useState(null);

    useEffect(() => {

        loadDashboard();

    }, []);

    async function loadDashboard() {

        try {

            const [
                statsResponse,
                usersResponse,
                tournamentResponse,
                donationResponse,
                subscriptionResponse,
                reportResponse
            ] = await Promise.all([

                getDashboard(),

                getUsers(),

                getAllTournaments(),

                getAllDonations(),

                getAllSubscriptions(),

                getReport()

            ]);

            setStats(statsResponse.data);

            setUsers(usersResponse.data);

            setTournaments(tournamentResponse.data);

            setDonations(donationResponse.data);

            setSubscriptions(subscriptionResponse.data);

            setReport(reportResponse.data);

        }

        catch (err) {

            console.log(err);

        }

    }

    if (!stats || !report) {

        return <h2>Loading...</h2>;

    }

    return (

        <section className="admin-dashboard">

            <AdminHeader
                admin={{ name: "Admin" }}
            />

            <div className="admin-stats-grid">

                <AdminStatsCard
                    title="Total Users"
                    value={stats.totalUsers}
                    icon="👥"
                />

                <AdminStatsCard
                    title="Tournaments"
                    value={stats.totalTournaments}
                    icon="🏌️"
                />

                <AdminStatsCard
                    title="Donations"
                    value={`₹${stats.totalDonationAmount}`}
                    icon="❤️"
                />

                <AdminStatsCard
                    title="Subscriptions"
                    value={stats.totalSubscriptions}
                    icon="💎"
                />

            </div>

            <UsersTable
                users={users}
                refreshUsers={loadDashboard}
            />

            <TournamentManager
                tournaments={tournaments}
            />

            <DonationManager
                donations={donations}
            />

            <SubscriptionManager
                subscriptions={subscriptions}
            />

            <ReportDashboard
                report={report}
            />

            <AdminActions
                refreshDashboard={loadDashboard}
            />

        </section>

    );

}

export default AdminDashboard;