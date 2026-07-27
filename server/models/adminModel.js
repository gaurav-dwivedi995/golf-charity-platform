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

// All Users
const getAllUsers = (callback) => {

    db.query(
        `
        SELECT
            id,
            full_name,
            email,
            membership,
            role
        FROM users
        ORDER BY id DESC
        `,
        callback
    );

};

// Delete User
const deleteUser = (id, callback) => {

    db.query(
        "DELETE FROM users WHERE id=?",
        [id],
        callback
    );

};

// Update Membership
const updateMembership = (id, membership, callback) => {

    db.query(
        `
        UPDATE users
        SET membership=?
        WHERE id=?
        `,
        [membership, id],
        callback
    );

};

// Make Admin
const makeAdmin = (id, callback) => {

    db.query(
        `
        UPDATE users
        SET role='admin'
        WHERE id=?
        `,
        [id],
        callback
    );

};

module.exports = {
    getDashboardStats,
    getAllUsers,
    deleteUser,
    updateMembership,
    makeAdmin
};