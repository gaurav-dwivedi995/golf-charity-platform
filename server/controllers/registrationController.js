const {
    registerTournament,
    checkRegistration,
    getMyRegistrations,
    cancelRegistration
} = require("../models/registrationModel");

// Register Tournament
const register = (req, res) => {

    const user_id = req.user.id;

    const { tournament_id } = req.body;

    if (!tournament_id) {

        return res.status(400).json({
            message: "Tournament ID Required"
        });

    }

    checkRegistration(
        user_id,
        tournament_id,
        (err, rows) => {

            if (err) {

                return res.status(500).json({
                    message: "Database Error"
                });

            }

            if (rows.length > 0) {

                return res.status(400).json({
                    message: "You are already registered for this tournament"
                });

            }

            registerTournament(
                user_id,
                tournament_id,
                (err) => {

                    if (err) {

                        return res.status(500).json({
                            message: "Registration Failed"
                        });

                    }

                    return res.status(201).json({
                        message: "Tournament Registered Successfully"
                    });

                }
            );

        }
    );

};

// Get My Registrations
const myRegistrations = (req, res) => {

    const user_id = req.user.id;

    getMyRegistrations(
        user_id,
        (err, rows) => {

            if (err) {

                return res.status(500).json({
                    message: "Failed"
                });

            }

            res.json(rows);

        }
    );

};

// Cancel Registration
const cancel = (req, res) => {

    const { id } = req.params;

    cancelRegistration(
        id,
        (err) => {

            if (err) {

                return res.status(500).json({
                    message: "Cancel Failed"
                });

            }

            res.json({
                message: "Registration Cancelled"
            });

        }
    );

};

module.exports = {
    register,
    myRegistrations,
    cancel
};