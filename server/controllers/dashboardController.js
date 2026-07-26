const db = require("../config/db");

const getDashboard = (req, res) => {

    const user_id = req.user.id;

    const sql = `
        SELECT

        users.full_name,
        users.membership,

        (
            SELECT COUNT(*)
            FROM registrations
            WHERE user_id = ?
        ) AS tournaments,

        (
            SELECT IFNULL(SUM(amount),0)
            FROM donations
            WHERE user_id = ?
        ) AS donations

        FROM users

        WHERE users.id = ?
    `;

    db.query(
        sql,
        [
            user_id,
            user_id,
            user_id
        ],
        (err, rows) => {

            if(err){

                return res.status(500).json({
                    message:"Database Error"
                });

            }

            res.json(rows[0]);

        }
    );

};

module.exports = {
    getDashboard
};