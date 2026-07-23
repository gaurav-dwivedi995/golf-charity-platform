const { buySubscription } = require("../models/subscriptionModel");
const { updateMembership } = require("../models/userModel");

const purchaseSubscription = (req, res) => {

    const user_id = req.user.id;

    const {
        plan_name,
        amount,
        start_date,
        end_date
    } = req.body;

    if (
        !plan_name ||
        !amount ||
        !start_date ||
        !end_date
    ) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    buySubscription(
        user_id,
        plan_name,
        amount,
        start_date,
        end_date,
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Subscription Failed"
                });
            }

            updateMembership(
                user_id,
                "Premium",
                (err2) => {

                    if (err2) {
                        return res.status(500).json({
                            message: "Membership Update Failed"
                        });
                    }

                    return res.status(201).json({
                        message: "Subscription Purchased Successfully"
                    });

                }
            );

        }
    );

};

module.exports = {
    purchaseSubscription
};