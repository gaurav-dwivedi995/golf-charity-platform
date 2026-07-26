import API from "./api";

export const registerTournament = async (tournament_id) => {

    const token = localStorage.getItem("token");

    return API.post(
        "/registration/register",
        {
            tournament_id
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

};