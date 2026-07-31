const db = require("../config/db");

const createUser = (
    full_name,
    email,
    password,
    phone,
    callback
) => {

    const sql = `
        INSERT INTO users
        (
            full_name,
            email,
            password,
            phone
        )
        VALUES
        (?,?,?,?)
    `;

    db.query(
        sql,
        [
            full_name,
            email,
            password,
            phone
        ],
        callback
    );

};

const findUserByEmail = (
    email,
    callback
) => {

    db.query(

        "SELECT * FROM users WHERE email = ?",

        [email],

        callback

    );

};

const findUserById = (
    id,
    callback
) => {

    const sql = `
        SELECT
            id,
            full_name,
            email,
            phone,
            membership,
            role,
            created_at,
            password
        FROM users
        WHERE id = ?
    `;

    db.query(
        sql,
        [id],
        callback
    );

};

const updateMembership = (
    user_id,
    membership,
    callback
) => {

    db.query(

        `
        UPDATE users
        SET membership=?
        WHERE id=?
        `,

        [
            membership,
            user_id
        ],

        callback

    );

};

const updateProfile = (
    id,
    full_name,
    email,
    phone,
    callback
) => {

    const sql = `
        UPDATE users
        SET
            full_name=?,
            email=?,
            phone=?
        WHERE id=?
    `;

    db.query(

        sql,

        [
            full_name,
            email,
            phone,
            id
        ],

        callback

    );

};

const updatePassword = (
    id,
    password,
    callback
) => {

    const sql = `
        UPDATE users
        SET password = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [
            password,
            id
        ],
        callback
    );

};

module.exports = {

    createUser,

    findUserByEmail,

    findUserById,

    updateMembership,

    updateProfile,

    updatePassword

};