const {
    buySubscription,
    getAllSubscriptions
} = require("../models/subscriptionModel");

const {
    updateMembership
} = require("../models/UserModel");

// Purchase Subscription
const purchaseSubscription = (req, res) => {

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

                console.log(err);

                return res.status(500).json({
                    message: "Subscription Failed"
                });

            }

            updateMembership(

                user_id,
                "Premium",

                () => {}

            );

            return res.status(201).json({

                message: "Subscription Purchased Successfully"

            });

        }

    );

};

// Admin
const allSubscriptions = (req, res) => {

    getAllSubscriptions((err, result) => {

        if (err) {

            return res.status(500).json({

                message: "Database Error"

            });

        }

        return res.json(result);

    });

};

module.exports = {

    purchaseSubscription,
    allSubscriptions

};