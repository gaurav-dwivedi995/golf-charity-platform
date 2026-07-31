const {
    buySubscription,
    getAllSubscriptions
} = require("../models/subscriptionModel");

const {
    updateMembership
} = require("../models/userModel");

// Purchase Subscription
const purchaseSubscription = (req, res) => {

    console.log("USER :", req.user);

    console.log("BODY :", req.body);

    const user_id = req.user.id;

    const {
        plan_name,
        amount,
        start_date,
        end_date
    } = req.body;

    buySubscription(

        user_id,

        plan_name,

        amount,

        start_date,

        end_date,

        (err) => {

            if (err) {

                console.log("SQL ERROR :", err);

                return res.status(500).json({
                    message: "Subscription Failed"
                });

            }

            updateMembership(
                user_id,
                "Premium",
                () => {}
            );

            res.status(201).json({
                message: "Subscription Purchased Successfully"
            });

        }

    );

};

// Admin
const allSubscriptions = (req, res) => {

    getAllSubscriptions((err, result) => {

        if (err) {

            console.log("SQL ERROR :", err);

            return res.status(500).json({
                message: "Database Error"
            });

        }

        res.json(result);

    });

};

module.exports = {
    purchaseSubscription,
    allSubscriptions
};