const {
    donate,
    myDonations,
    allDonations,
    donationById
} = require("../models/donationModel");

const {
    updateRaisedAmount
} = require("../models/charityModel");

// Donate
const createDonation = (req, res) => {

    const user_id = req.user.id;

    const {
        charity_id,
        amount,
        payment_method,
        transaction_id
    } = req.body;

    console.log("Request Body:", req.body);
    console.log("User ID:", user_id);

    if (!amount || !charity_id) {

        return res.status(400).json({
            message: "Amount and Charity are required"
        });

    }

    donate(

        user_id,
        amount,
        payment_method,
        transaction_id,

        (err) => {

            if (err) {

                console.log("Donation Error:", err);

                return res.status(500).json({
                    message: err.sqlMessage || "Donation Failed"
                });

            }

            updateRaisedAmount(

                charity_id,
                amount,

                (err2) => {

                    if (err2) {

                        console.log("Charity Update Error:", err2);

                        return res.status(500).json({
                            message: err2.sqlMessage || "Charity Update Failed"
                        });

                    }

                    return res.status(201).json({
                        message: "Donation Successful"
                    });

                }

            );

        }

    );

};


// My Donations
const getMyDonations = (req, res) => {

    myDonations(

        req.user.id,

        (err, result) => {

            if (err) {

                return res.status(500).json({
                    message: "Database Error"
                });

            }

            return res.status(200).json(result);

        }

    );

};


// All Donations
const getAllDonations = (req, res) => {

    allDonations(

        (err, result) => {

            if (err) {

                return res.status(500).json({
                    message: "Database Error"
                });

            }

            return res.status(200).json(result);

        }

    );

};


// Donation By ID
const getDonationById = (req, res) => {

    donationById(

        req.params.id,

        (err, result) => {

            if (err) {

                return res.status(500).json({
                    message: "Database Error"
                });

            }

            if (result.length === 0) {

                return res.status(404).json({
                    message: "Donation Not Found"
                });

            }

            return res.status(200).json(result[0]);

        }

    );

};

module.exports = {

    createDonation,

    getMyDonations,

    getAllDonations,

    getDonationById

};