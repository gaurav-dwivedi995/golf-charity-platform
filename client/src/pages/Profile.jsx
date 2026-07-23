import "../styles/Profile.css";

import ProfileCard from "../components/ProfileCard";
import ProfileStats from "../components/ProfileStats";
import ProfileActions from "../components/ProfileActions";

function Profile() {

  const user = {
    name: "Mr. Oggy",
    email: "oggy@gmail.com",
    phone: "+91 9876543210",
    membership: "Premium",

    totalTournaments: 18,
    totalDonations: 25000,
    currentRank: 7,
  };

  return (
    <section className="profile">

      <h1>My Profile</h1>

      <ProfileCard user={user} />

      <ProfileStats user={user} />

      <ProfileActions />

    </section>
  );
}

export default Profile;