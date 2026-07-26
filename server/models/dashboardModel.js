const db = require("../config/db");

const getDashboardData = (user_id, callback) => {

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
        [user_id, user_id, user_id],
        (err, userResult) => {

            if (err) return callback(err);

            const user = userResult[0];

            const upcomingSql = `
                SELECT
                    id,
                    title,
                    location,
                    tournament_date,
                    entry_fee,
                    max_players
                FROM tournaments
                WHERE tournament_date >= CURDATE()
                ORDER BY tournament_date ASC
                LIMIT 1
            `;

            db.query(
                upcomingSql,
                (err, upcomingResult) => {

                    if (err) return callback(err);

                    const historySql = `
                        SELECT
                            tournaments.title,
                            tournaments.location,
                            tournaments.tournament_date,
                            registrations.payment_status
                        FROM registrations
                        JOIN tournaments
                        ON tournaments.id = registrations.tournament_id
                        WHERE registrations.user_id = ?
                        ORDER BY tournaments.tournament_date DESC
                    `;

                    db.query(
                        historySql,
                        [user_id],
                        (err, historyResult) => {

                            if (err) return callback(err);

                            const donationSql = `
                                SELECT
                                    amount,
                                    donated_at
                                FROM donations
                                WHERE user_id = ?
                                ORDER BY donated_at DESC
                            `;

                            db.query(
                                donationSql,
                                [user_id],
                                (err, donationResult) => {

                                    if (err) return callback(err);

                                    callback(null, {
                                        user,
                                        upcomingTournament:
                                            upcomingResult[0] || null,
                                        tournamentHistory:
                                            historyResult,
                                        donations:
                                            donationResult
                                    });

                                }
                            );

                        }
                    );

                }
            );

        }
    );

};

module.exports = {
    getDashboardData
};