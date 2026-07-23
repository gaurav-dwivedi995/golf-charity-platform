const db = require("../config/db");

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
        VALUES
        (?, ?, ?, 'Active', ?, ?)
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

module.exports = {
    buySubscription
};