const {
    registerTournament,
    getMyRegistrations,
    cancelRegistration
} = require("../models/registrationModel");

// Register Tournament
const register = (req, res) => {

    const user_id = req.user.id;
    const { tournament_id } = req.body;

    if (!tournament_id) {
        return res.status(400).json({
            message: "Tournament ID is required"
        });
    }

    registerTournament(
        user_id,
        tournament_id,
        (err, result) => {

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

};

// My Registrations
const myRegistrations = (req, res) => {

    const user_id = req.user.id;

    getMyRegistrations(
        user_id,
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

// Cancel Registration
const cancel = (req, res) => {

    const id = req.params.id;

    cancelRegistration(
        id,
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Cancel Failed"
                });
            }

            return res.status(200).json({
                message: "Registration Cancelled Successfully"
            });

        }
    );

};

module.exports = {
    register,
    myRegistrations,
    cancel
};