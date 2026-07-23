const db = require("../config/db");

// =========================
// Create User
// =========================
const createUser = (full_name, email, password, phone, callback) => {

    const sql = `
        INSERT INTO users
        (full_name,email,password,phone)
        VALUES
        (?,?,?,?)
    `;

    db.query(
        sql,
        [full_name, email, password, phone],
        callback
    );

};

// =========================
// Find User By Email
// =========================
const findUserByEmail = (email, callback) => {

    const sql =
        "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], callback);

};

// =========================
// Find User By ID
// =========================
const findUserById = (id, callback) => {

    const sql = `
        SELECT
            id,
            full_name,
            email,
            phone,
            membership,
            role,
            created_at
        FROM users
        WHERE id = ?
    `;

    db.query(sql, [id], callback);

};

// =========================
// Update Membership
// =========================
const updateMembership = (
    user_id,
    membership,
    callback
) => {

    const sql = `
        UPDATE users
        SET membership = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [membership, user_id],
        callback
    );

};

module.exports = {
    createUser,
    findUserByEmail,
    findUserById,
    updateMembership
};