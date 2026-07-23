import profileImage from "../assets/oggy.jpeg";
function ProfileCard({ user }) {
  return (
    <div className="profile-card">

      <img
  src={profileImage}
  alt="Mr. Oggy"
  className="profile-image"
/>

      <h2>{user.name}</h2>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Phone:</strong> {user.phone}
      </p>

      <p>
        <strong>Membership:</strong> {user.membership}
      </p>

    </div>
  );
}

export default ProfileCard;