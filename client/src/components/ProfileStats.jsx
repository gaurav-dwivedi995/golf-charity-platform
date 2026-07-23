function ProfileStats({ user }) {
  return (
    <div className="profile-stats">

      <div className="profile-stat-card">
        <h3>Total Tournaments</h3>
        <h2>{user.totalTournaments}</h2>
      </div>

      <div className="profile-stat-card">
        <h3>Total Donations</h3>
        <h2>₹{user.totalDonations}</h2>
      </div>

      <div className="profile-stat-card">
        <h3>Current Rank</h3>
        <h2>#{user.currentRank}</h2>
      </div>

      <div className="profile-stat-card">
        <h3>Subscription</h3>
        <h2>{user.membership}</h2>
      </div>

    </div>
  );
}

export default ProfileStats;