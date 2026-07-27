import { useState } from "react";

import { createTournament } from "../services/tournamentService";

function AdminActions() {

    const [form, setForm] = useState({
        title: "",
        location: "",
        tournament_date: "",
        entry_fee: "",
        max_players: "",
        description: ""
    });

    function handleChange(e) {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            await createTournament(form);

            alert("Tournament Created Successfully");

            window.location.reload();

        } catch (err) {

            alert(
                err.response?.data?.message ||
                "Failed to Create Tournament"
            );

        }

    }

    return (

        <div className="admin-actions">

            <h2>Create Tournament</h2>

            <form
                className="create-tournament-form"
                onSubmit={handleSubmit}
            >

                <input
                    type="text"
                    name="title"
                    placeholder="Tournament Title"
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    onChange={handleChange}
                    required
                />

                <input
                    type="date"
                    name="tournament_date"
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="entry_fee"
                    placeholder="Entry Fee"
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="max_players"
                    placeholder="Maximum Players"
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                />

                <button type="submit">
                    Create Tournament
                </button>

            </form>

        </div>

    );

}

export default AdminActions;