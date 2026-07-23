const {
    addScore,
    getLeaderboard
} = require("../models/scoreModel");

// Add Score
const createScore = (req, res) => {

    const { tournament_id, score } = req.body;
    const user_id = req.user.id;

    if (!tournament_id || score === undefined) {
        return res.status(400).json({
            message: "Tournament ID and Score are required"
        });
    }

    addScore(
        user_id,
        tournament_id,
        score,
        (err) => {

            if (err) {
                return res.status(500).json({
                    message: "Failed to Add Score"
                });
            }

            return res.status(201).json({
                message: "Score Added Successfully"
            });

        }
    );

};

// Leaderboard
const leaderboard = (req, res) => {

    const tournament_id = req.params.id;

    getLeaderboard(
        tournament_id,
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database Error"
                });
            }

            return res.status(200).json(result);

        }
    );

};

module.exports = {
    createScore,
    leaderboard
};