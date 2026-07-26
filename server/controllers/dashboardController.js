const {
    getDashboardData
} = require("../models/dashboardModel");

const getDashboard = (req, res) => {

    const user_id = req.user.id;

    getDashboardData(
        user_id,
        (err, data) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    message: "Database Error"
                });

            }

            return res.status(200).json(data);

        }
    );

};

module.exports = {
    getDashboard
};