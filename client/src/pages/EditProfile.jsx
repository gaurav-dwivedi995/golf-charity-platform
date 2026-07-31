import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/EditProfile.css";

import {
    getProfile,
    updateProfile
} from "../services/profileService";

function EditProfile() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        full_name: "",

        email: "",

        phone: ""

    });

    useEffect(() => {

        loadProfile();

    }, []);

    async function loadProfile() {

        try {

            const response = await getProfile();

            setFormData({

                full_name: response.data.full_name,

                email: response.data.email,

                phone: response.data.phone

            });

        } catch (err) {

            alert("Failed to Load Profile");

        }

    }

    function handleChange(e) {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            await updateProfile(formData);

            alert("Profile Updated Successfully");

            navigate("/profile");

        } catch (err) {

            alert(

                err.response?.data?.message ||

                "Update Failed"

            );

        }

    }

    return (

        <section className="edit-profile">

            <h1>Edit Profile</h1>

            <form
                className="edit-profile-form"
                onSubmit={handleSubmit}
            >

                <input

                    type="text"

                    name="full_name"

                    placeholder="Full Name"

                    value={formData.full_name}

                    onChange={handleChange}

                    required

                />

                <input

                    type="email"

                    name="email"

                    placeholder="Email"

                    value={formData.email}

                    onChange={handleChange}

                    required

                />

                <input

                    type="text"

                    name="phone"

                    placeholder="Phone"

                    value={formData.phone}

                    onChange={handleChange}

                    required

                />

                <button type="submit">

                    Save Changes

                </button>

            </form>

        </section>

    );

}

export default EditProfile;