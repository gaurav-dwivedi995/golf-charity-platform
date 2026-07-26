import API from "./api";

export const getLeaderboard = async (tournamentId) => {

    return API.get(
        `/score/leaderboard/${tournamentId}`
    );

};