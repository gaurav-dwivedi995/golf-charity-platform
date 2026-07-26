const {
    getDashboardStats
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

module.exports = {
    dashboard
};