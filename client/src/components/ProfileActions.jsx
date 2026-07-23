function ProfileActions() {

  function handleEditProfile() {
    alert("Edit Profile feature will be available soon.");
  }

  function handleChangePassword() {
    alert("Change Password feature will be available soon.");
  }

  function handleLogout() {
    alert("Logout Successful.");
  }

  return (
    <div className="profile-actions">

      <h2>Account Actions</h2>

      <div className="profile-action-buttons">

        <button onClick={handleEditProfile}>
          Edit Profile
        </button>

        <button onClick={handleChangePassword}>
          Change Password
        </button>

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

    </div>
  );
}

export default ProfileActions;