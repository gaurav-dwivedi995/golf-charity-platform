const {
    getDashboardStats,
    getAllUsers
} = require("../models/adminModel");

// Dashboard Statistics
const dashboard = (req, res) => {

    getDashboardStats((err, result) => {

        if (err) {

            return res.status(500).json({
                message: "Database Error"
            });

        }

        return res.status(200).json(result[0]);

    });

};

// Get All Users
const users = (req, res) => {

    getAllUsers((err, result) => {

        if (err) {

            return res.status(500).json({
                message: "Database Error"
            });

        }

        return res.status(200).json(result);

    });

};

module.exports = {
    dashboard,
    users
};