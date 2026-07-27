import { useEffect, useState } from "react";

import {
    getDashboard,
    getUsers
} from "../services/adminService";

import {
    getAllDonations
} from "../services/donationService";

import "../styles/AdminDashboard.css";

import AdminHeader from "../components/AdminHeader";
import AdminStatsCard from "../components/AdminStatsCard";
import UsersTable from "../components/UsersTable";
import TournamentManager from "../components/TournamentManager";
import DonationManager from "../components/DonationManager";
import SubscriptionManager from "../components/SubscriptionManager";
import AdminActions from "../components/AdminActions";

function AdminDashboard() {

    const [stats, setStats] = useState(null);

    const [users, setUsers] = useState([]);

    const [donations, setDonations] = useState([]);

    useEffect(() => {

        loadDashboard();

    }, []);

    async function loadDashboard() {

        try {

            const statsResponse = await getDashboard();

            const usersResponse = await getUsers();

            const donationResponse = await getAllDonations();

            setStats(statsResponse.data);

            setUsers(usersResponse.data);

            setDonations(donationResponse.data);

        }

        catch (err) {

            console.log(err);

        }

    }

    const admin = {
        name: "Admin"
    };

    const subscriptions = [];

    if (!stats) {

        return <h2>Loading...</h2>;

    }

    return (

        <section className="admin-dashboard">

            <AdminHeader admin={admin} />

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

            <TournamentManager />

            <DonationManager
                donations={donations}
            />

            <SubscriptionManager
                subscriptions={subscriptions}
            />

            <AdminActions />

        </section>

    );

}

export default AdminDashboard;