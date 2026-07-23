const {
    createTournament,
    getAllTournaments,
    getTournamentById,
    updateTournament,
    deleteTournament
} = require("../models/tournamentModel");

// ==============================
// Create Tournament
// ==============================
const create = (req, res) => {

    const {
        title,
        location,
        tournament_date,
        entry_fee,
        max_players,
        description
    } = req.body;

    if (
        !title ||
        !location ||
        !tournament_date ||
        !entry_fee ||
        !max_players
    ) {
        return res.status(400).json({
            message: "All required fields are mandatory"
        });
    }

    createTournament(
        title,
        location,
        tournament_date,
        entry_fee,
        max_players,
        description,
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Tournament Creation Failed"
                });
            }

            return res.status(201).json({
                message: "Tournament Created Successfully"
            });

        }
    );

};

// ==============================
// Get All Tournaments
// ==============================
const getAll = (req, res) => {

    getAllTournaments((err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        return res.status(200).json(result);

    });

};

// ==============================
// Get Tournament By ID
// ==============================
const getById = (req, res) => {

    const id = req.params.id;

    getTournamentById(id, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                message: "Tournament Not Found"
            });
        }

        return res.status(200).json(result[0]);

    });

};

// ==============================
// Update Tournament
// ==============================
const update = (req, res) => {

    const id = req.params.id;

    const {
        title,
        location,
        tournament_date,
        entry_fee,
        max_players,
        description
    } = req.body;

    updateTournament(
        id,
        title,
        location,
        tournament_date,
        entry_fee,
        max_players,
        description,
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Update Failed"
                });
            }

            return res.status(200).json({
                message: "Tournament Updated Successfully"
            });

        }
    );

};

// ==============================
// Delete Tournament
// ==============================
const remove = (req, res) => {

    const id = req.params.id;

    deleteTournament(id, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Delete Failed"
            });
        }

        return res.status(200).json({
            message: "Tournament Deleted Successfully"
        });

    });

};

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};