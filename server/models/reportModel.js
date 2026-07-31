const db = require("../config/db");

// Get Complete Report
const getReport = (callback) => {

    const sql = `
        SELECT

            (SELECT COUNT(*) FROM users) AS totalUsers,

            (SELECT COUNT(*) FROM tournaments) AS totalTournaments,

            (SELECT COUNT(*) FROM donations) AS totalDonations,

            (SELECT COUNT(*) FROM subscriptions) AS totalSubscriptions,

            (SELECT IFNULL(SUM(amount),0) FROM donations) AS donationRevenue,

            (SELECT IFNULL(SUM(amount),0) FROM subscriptions) AS subscriptionRevenue
    `;

    db.query(sql, callback);

};

module.exports = {

    getReport

};