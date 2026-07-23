const db = require("../config/db");

// Donate
const donate = (
    user_id,
    amount,
    payment_method,
    transaction_id,
    callback
) => {

    const sql = `
        INSERT INTO donations
        (
            user_id,
            amount,
            payment_method,
            transaction_id
        )
        VALUES
        (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            user_id,
            amount,
            payment_method,
            transaction_id
        ],
        callback
    );

};

// My Donations
const myDonations = (
    user_id,
    callback
) => {

    const sql = `
        SELECT *
        FROM donations
        WHERE user_id = ?
        ORDER BY donated_at DESC
    `;

    db.query(sql, [user_id], callback);

};

// All Donations
const allDonations = (callback) => {

    const sql = `
        SELECT
            donations.*,
            users.full_name,
            users.email
        FROM donations
        JOIN users
        ON users.id = donations.user_id
        ORDER BY donated_at DESC
    `;

    db.query(sql, callback);

};

// Donation By ID
const donationById = (
    id,
    callback
) => {

    const sql = `
        SELECT *
        FROM donations
        WHERE id = ?
    `;

    db.query(sql, [id], callback);

};

module.exports = {
    donate,
    myDonations,
    allDonations,
    donationById
};