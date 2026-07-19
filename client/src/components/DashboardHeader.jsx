function DashboardHeader({ user }) {
  return (
    <div className="dashboard-header">

      <h1>Welcome, {user.name} 👋</h1>

      <p>
        Manage your tournaments, subscriptions and donations from one place.
      </p>

    </div>
  );
}

export default DashboardHeader;