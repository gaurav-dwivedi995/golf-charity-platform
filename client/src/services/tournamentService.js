import API from "./api";

// Get All Tournaments
export const getAllTournaments = async () => {

    return API.get("/tournament/all");

};

// Get Tournament By ID
export const getTournamentById = async (id) => {

    return API.get(`/tournament/${id}`);

};

// Create Tournament
export const createTournament = async (data) => {

    return API.post(
        "/tournament/create",
        data
    );

};

// Update Tournament
export const updateTournament = async (
    id,
    data
) => {

    return API.put(
        `/tournament/update/${id}`,
        data
    );

};

// Delete Tournament
export const deleteTournament = async (id) => {

    return API.delete(
        `/tournament/delete/${id}`
    );

};