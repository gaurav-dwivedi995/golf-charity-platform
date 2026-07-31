import { useNavigate } from "react-router-dom";

function QuickActions() {

    const navigate = useNavigate();

    return (

        <div className="quick-actions">

            <h2>Quick Actions</h2>

            <div className="actions">

                <button
                    className="action-btn"
                    onClick={() => navigate("/tournament")}
                >
                    Register Tournament
                </button>

                <button
                    className="action-btn"
                    onClick={() => navigate("/charity")}
                >
                    Donate Now
                </button>

                <button
                    className="action-btn"
                    onClick={() => navigate("/subscription")}
                >
                    Upgrade Plan
                </button>

                <button
                    className="action-btn"
                    onClick={() => navigate("/profile")}
                >
                    Edit Profile
                </button>

            </div>

        </div>

    );
}

export default QuickActions;