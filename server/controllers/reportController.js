const {
    getReport
} = require("../models/reportModel");

// Get Admin Report
const report = (req, res) => {

    getReport((err, result) => {

        if (err) {

            return res.status(500).json({
                message: "Database Error"
            });

        }

        const data = result[0];

        data.totalRevenue =
            Number(data.donationRevenue) +
            Number(data.subscriptionRevenue);

        return res.status(200).json(data);

    });

};

module.exports = {

    report

};