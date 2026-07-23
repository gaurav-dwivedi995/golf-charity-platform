const db = require("../config/db");

// Register User
const registerTournament = (
    user_id,
    tournament_id,
    callback
) => {

    const sql = `
        INSERT INTO registrations
        (user_id, tournament_id)
        VALUES (?, ?)
    `;

    db.query(
        sql,
        [user_id, tournament_id],
        callback
    );

};

// Get My Registrations
const getMyRegistrations = (
    user_id,
    callback
) => {

    const sql = `
        SELECT
            registrations.id,
            tournaments.title,
            tournaments.location,
            tournaments.tournament_date,
            registrations.payment_status
        FROM registrations
        JOIN tournaments
        ON registrations.tournament_id = tournaments.id
        WHERE registrations.user_id = ?
    `;

    db.query(sql, [user_id], callback);

};

// Cancel Registration
const cancelRegistration = (
    id,
    callback
) => {

    const sql = `
        DELETE FROM registrations
        WHERE id = ?
    `;

    db.query(sql, [id], callback);

};

module.exports = {
    registerTournament,
    getMyRegistrations,
    cancelRegistration
};