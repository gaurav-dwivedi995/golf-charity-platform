const db = require("../config/db");

// Dashboard Statistics
const getDashboardStats = (callback) => {

    const sql = `
        SELECT
            (SELECT COUNT(*) FROM users) AS totalUsers,

            (SELECT COUNT(*) FROM tournaments) AS totalTournaments,

            (SELECT COUNT(*) FROM registrations) AS totalRegistrations,

            (SELECT COUNT(*) FROM subscriptions) AS totalSubscriptions,

            (SELECT COUNT(*) FROM donations) AS totalDonations,

            (SELECT IFNULL(SUM(amount),0) FROM donations) AS totalDonationAmount,

            (SELECT IFNULL(SUM(amount),0) FROM subscriptions) AS totalSubscriptionRevenue
    `;

    db.query(sql, callback);

};

// Get All Users
const getAllUsers = (callback) => {

    const sql = `
        SELECT
            id,
            full_name,
            email,
            membership,
            role
        FROM users
        ORDER BY id DESC
    `;

    db.query(sql, callback);

};

module.exports = {
    getDashboardStats,
    getAllUsers
};