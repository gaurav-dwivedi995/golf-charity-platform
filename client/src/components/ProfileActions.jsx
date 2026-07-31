import { useNavigate } from "react-router-dom";

function ProfileActions() {

    const navigate = useNavigate();

    function handleEditProfile() {

        navigate("/profile/edit");

    }

    function handleChangePassword() {

        navigate("/change-password");

    }

    function handleLogout() {

        localStorage.removeItem("token");

        localStorage.removeItem("user");

        navigate("/login");

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