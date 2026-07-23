const db = require("../config/db");

// Add Score
const addScore = (
    user_id,
    tournament_id,
    score,
    callback
) => {

    const sql = `
        INSERT INTO scores
        (user_id, tournament_id, score)
        VALUES (?, ?, ?)
    `;

    db.query(
        sql,
        [user_id, tournament_id, score],
        callback
    );

};

// Leaderboard
const getLeaderboard = (
    tournament_id,
    callback
) => {

    const sql = `
        SELECT
            users.full_name,
            scores.score
        FROM scores
        JOIN users
        ON users.id = scores.user_id
        WHERE scores.tournament_id = ?
        ORDER BY scores.score DESC
    `;

    db.query(sql, [tournament_id], callback);

};

module.exports = {
    addScore,
    getLeaderboard
};