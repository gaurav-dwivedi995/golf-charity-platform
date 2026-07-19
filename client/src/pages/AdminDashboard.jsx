import "../styles/AdminDashboard.css";

import AdminHeader from "../components/AdminHeader";
import AdminStatsCard from "../components/AdminStatsCard";
import UsersTable from "../components/UsersTable";
import TournamentManager from "../components/TournamentManager";
import DonationManager from "../components/DonationManager";
import SubscriptionManager from "../components/SubscriptionManager";
import AdminActions from "../components/AdminActions";

function AdminDashboard() {

  const admin = {
    name: "Admin",
  };

  const stats = [
    {
      id: 1,
      title: "Total Users",
      value: 250,
      icon: "👥",
    },
    {
      id: 2,
      title: "Tournaments",
      value: 12,
      icon: "🏌️",
    },
    {
      id: 3,
      title: "Donations",
      value: "₹8,50,000",
      icon: "❤️",
    },
    {
      id: 4,
      title: "Subscriptions",
      value: 185,
      icon: "💎",
    },
  ];

  const users = [
    {
      id: 1,
      name: "Gaurav Dwivedi",
      email: "gaurav@gmail.com",
      subscription: "Premium",
      status: "Active",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      subscription: "Basic",
      status: "Active",
    },
    {
      id: 3,
      name: "Amit Singh",
      email: "amit@gmail.com",
      subscription: "Premium",
      status: "Inactive",
    },
  ];

  const tournaments = [
    {
      id: 1,
      name: "Jaipur Championship",
      location: "Jaipur",
      date: "20 August 2026",
      participants: 120,
      entryFee: 999,
    },
    {
      id: 2,
      name: "Delhi Open",
      location: "Delhi",
      date: "5 September 2026",
      participants: 95,
      entryFee: 1499,
    },
  ];

  const donations = [
    {
      id: 1,
      donor: "Gaurav",
      charity: "Smile Foundation",
      amount: 5000,
      date: "15 July 2026",
    },
    {
      id: 2,
      donor: "Rahul",
      charity: "Helping Hands",
      amount: 2500,
      date: "20 July 2026",
    },
  ];

  const subscriptions = [
    {
      id: 1,
      name: "Basic",
      price: 999,
      duration: 30,
      subscribers: 70,
    },
    {
      id: 2,
      name: "Premium",
      price: 1999,
      duration: 90,
      subscribers: 115,
    },
  ];

  return (
    <section className="admin-dashboard">

      <AdminHeader admin={admin} />

      <div className="admin-stats-grid">

        {stats.map((stat) => (
          <AdminStatsCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}

      </div>

      <UsersTable users={users} />

      <TournamentManager tournaments={tournaments} />

      <DonationManager donations={donations} />

      <SubscriptionManager subscriptions={subscriptions} />

      <AdminActions />

    </section>
  );
}

export default AdminDashboard;