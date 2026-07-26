const db = require("../config/db");

// Get All Charities
const getAllCharities = (callback) => {

    const sql = `
        SELECT *
        FROM charities
        ORDER BY id ASC
    `;

    db.query(sql, callback);

};

// Get Charity By ID
const getCharityById = (id, callback) => {

    const sql = `
        SELECT *
        FROM charities
        WHERE id = ?
    `;

    db.query(sql, [id], callback);

};

// Create Charity
const createCharity = (

    name,
    category,
    raised,
    goal,

    callback

) => {

    const sql = `
        INSERT INTO charities
        (
            name,
            category,
            raised,
            goal
        )
        VALUES (?, ?, ?, ?)
    `;

    db.query(

        sql,

        [
            name,
            category,
            raised,
            goal
        ],

        callback

    );

};

// Update Raised Amount
const updateRaisedAmount = (

    id,
    amount,

    callback

) => {

    const sql = `
        UPDATE charities
        SET raised = raised + ?
        WHERE id = ?
    `;

    db.query(

        sql,

        [
            amount,
            id
        ],

        callback

    );

};

module.exports = {

    getAllCharities,

    getCharityById,

    createCharity,

    updateRaisedAmount

};