const db = require("../config/db");

// ============================
// Create Tournament
// ============================
const createTournament = (
    title,
    location,
    tournament_date,
    entry_fee,
    max_players,
    description,
    callback
) => {

    const sql = `
        INSERT INTO tournaments
        (
            title,
            location,
            tournament_date,
            entry_fee,
            max_players,
            description
        )
        VALUES
        (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            title,
            location,
            tournament_date,
            entry_fee,
            max_players,
            description
        ],
        callback
    );

};

// ============================
// Get All Tournaments
// ============================
const getAllTournaments = (callback) => {

    const sql = `
        SELECT *
        FROM tournaments
        ORDER BY tournament_date ASC
    `;

    db.query(sql, callback);

};

// ============================
// Get Tournament By ID
// ============================
const getTournamentById = (
    id,
    callback
) => {

    const sql = `
        SELECT *
        FROM tournaments
        WHERE id = ?
    `;

    db.query(sql, [id], callback);

};

// ============================
// Update Tournament
// ============================
const updateTournament = (
    id,
    title,
    location,
    tournament_date,
    entry_fee,
    max_players,
    description,
    callback
) => {

    const sql = `
        UPDATE tournaments
        SET
        title=?,
        location=?,
        tournament_date=?,
        entry_fee=?,
        max_players=?,
        description=?
        WHERE id=?
    `;

    db.query(
        sql,
        [
            title,
            location,
            tournament_date,
            entry_fee,
            max_players,
            description,
            id
        ],
        callback
    );

};

// ============================
// Delete Tournament
// ============================
const deleteTournament = (
    id,
    callback
) => {

    const sql = `
        DELETE FROM tournaments
        WHERE id = ?
    `;

    db.query(sql, [id], callback);

};

module.exports = {
    createTournament,
    getAllTournaments,
    getTournamentById,
    updateTournament,
    deleteTournament
};