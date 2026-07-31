import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "../styles/ChangePassword.css";

import { changePassword } from "../services/changePasswordService";

function ChangePassword() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        oldPassword: "",

        newPassword: "",

        confirmPassword: ""

    });

    function handleChange(e) {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        if (

            formData.newPassword !==

            formData.confirmPassword

        ) {

            return alert("Passwords do not match");

        }

        try {

            await changePassword({

                oldPassword: formData.oldPassword,

                newPassword: formData.newPassword

            });

            alert("Password Changed Successfully");

            navigate("/profile");

        }

        catch (err) {

            alert(

                err.response?.data?.message ||

                "Password Change Failed"

            );

        }

    }

    return (

        <section className="change-password">

            <h1>Change Password</h1>

            <form onSubmit={handleSubmit}>

                <input

                    type="password"

                    name="oldPassword"

                    placeholder="Old Password"

                    value={formData.oldPassword}

                    onChange={handleChange}

                    required

                />

                <input

                    type="password"

                    name="newPassword"

                    placeholder="New Password"

                    value={formData.newPassword}

                    onChange={handleChange}

                    required

                />

                <input

                    type="password"

                    name="confirmPassword"

                    placeholder="Confirm Password"

                    value={formData.confirmPassword}

                    onChange={handleChange}

                    required

                />

                <button>

                    Change Password

                </button>

            </form>

        </section>

    );

}

export default ChangePassword;