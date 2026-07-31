import { useEffect, useState } from "react";

import "../styles/Profile.css";

import ProfileCard from "../components/ProfileCard";
import ProfileStats from "../components/ProfileStats";
import ProfileActions from "../components/ProfileActions";

import { getProfile } from "../services/profileService";

function Profile() {

    const [user, setUser] = useState(null);

    const loadProfile = async () => {

        try {

            const response = await getProfile();

            setUser({

                id: response.data.id,

                name: response.data.full_name,

                email: response.data.email,

                phone: response.data.phone,

                membership: response.data.membership,

                totalTournaments: 0,

                totalDonations: 0,

                currentRank: "-"

            });

        } catch (error) {

            console.log(error);

            alert("Failed to Load Profile");

        }

    };

    useEffect(() => {

        loadProfile();

    }, []);

    if (!user) {

        return <h2>Loading Profile...</h2>;

    }

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