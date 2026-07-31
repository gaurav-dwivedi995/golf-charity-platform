const db = require("../config/db");

// Buy Subscription
const buySubscription = (
    user_id,
    plan_name,
    amount,
    start_date,
    end_date,
    callback
) => {

    const sql = `
        INSERT INTO subscriptions
        (
            user_id,
            plan_name,
            amount,
            status,
            start_date,
            end_date
        )
        VALUES (?, ?, ?, 'Active', ?, ?)
    `;

    db.query(
        sql,
        [
            user_id,
            plan_name,
            amount,
            start_date,
            end_date
        ],
        callback
    );

};

// All Subscriptions
const getAllSubscriptions = (callback) => {

    const sql = `
        SELECT
            subscriptions.id,
            subscriptions.plan_name,
            subscriptions.amount,
            subscriptions.start_date,
            subscriptions.end_date,
            subscriptions.status,
            users.full_name
        FROM subscriptions
        JOIN users
        ON users.id = subscriptions.user_id
        ORDER BY subscriptions.id DESC
    `;

    db.query(sql, callback);

};

module.exports = {
    buySubscription,
    getAllSubscriptions
};