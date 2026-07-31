const {
    registerTournament,
    checkRegistration,
    getMyRegistrations,
    cancelRegistration
} = require("../models/registrationModel");

// Register
const register = (req, res) => {

    const user_id = req.user.id;
    const { tournament_id } = req.body;

    checkRegistration(
        user_id,
        tournament_id,
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database Error"
                });
            }

            if (result.length > 0) {
                return res.status(400).json({
                    message: "Already Registered"
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

                    res.status(201).json({
                        message: "Tournament Registered Successfully"
                    });

                }
            );

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

            res.json(result);

        }
    );

};

// Cancel
const cancel = (req, res) => {

    cancelRegistration(
        req.params.id,
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